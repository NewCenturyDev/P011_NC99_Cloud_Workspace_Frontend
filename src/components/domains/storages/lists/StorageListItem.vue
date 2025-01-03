<template>
  <div
    class="storage_item"
    @click="onStorageItemClick"
  >
    <v-checkbox
      class="storage_item_checkbox"
      :model-value="store.selectedIndexes.indexOf(props.idx) !== -1"
      :hide-details="true"
      @update:model-value="onStorageItemSelect"
      @click.stop
    ></v-checkbox>
    <div :class="props.file['type'] === 'Directory' ? 'storage_icon storage_icon_folder' : 'storage_icon storage_icon_file'"></div>
    <div :class="fileNameStyle">
      {{ props.file['name'] }}
    </div>
    <div class="storage_item_info storage_item_size">
      {{ fileUtil.parseFileSize(props.file['size']) }}
    </div>
    <div class="storage_item_info storage_item_timestamp">
      {{ fileUtil.parseFileTimestamp(props.file['timestamp']) }}
    </div>
  </div>
</template>

<script setup>
import {defineProps, ref, watch} from "vue";
import fileUtil from "@/stores/utils/fileUtil.js";
import {useStorageStore} from "@/stores/storageStore.js";

const store = useStorageStore();
const props = defineProps({
  idx: Number,
  file: Object,
});
const fileNameStyle = ref("storage_item_info storage_item_name");

watch(() => store.selectedIndexes, () => {
  if (store.isSelected(props.idx)) {
    fileNameStyle.value = "storage_item_info storage_item_name storage_item_selected";
  } else {
    fileNameStyle.value = "storage_item_info storage_item_name";
  }
}, { deep: true });

function onStorageItemClick() {
  if (store.isSelected(props.idx)) {
    store.release(props.idx);
  } else {
    store.releaseAll();
    store.select(props.idx);
  }
}

function onStorageItemSelect(isChecked) {
  isChecked ? store.select(props.idx) : store.release(props.idx);
}
</script>

<style scoped>
.storage_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 47px;
  padding: 13px 20px;
  gap: 20px;
  border-bottom: 1px solid rgba(112, 115, 124, 0.16);
  user-select: none;
  cursor: pointer;
}
.storage_item_checkbox {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}
.storage_item_checkbox:deep(.v-selection-control) {
  width: 20px;
  height: 20px;
  min-width: unset;
  min-height: unset;
  --v-selection-control-size: 20px;
}
.storage_icon {
  width: 24px;
  min-width: 24px;
  height: 24px;
  background-size: cover;
}
.storage_icon_folder {
  background-image: url("@/assets/icons/icon_folder.png");
}
.storage_icon_file {
  background-image: url("@/assets/icons/icon_file.png");
}
.storage_item_info {
  overflow: hidden;
  color: var(--label-assistive);
  text-overflow: ellipsis;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
}
.storage_item_name {
  width: 100%;
  min-width: 250px;
}
.storage_item_size {
  min-width: 75px;
}
.storage_item_timestamp {
  max-width: 250px;
  width: 250px;
  min-width: 100px;
  word-break: keep-all;
}
.storage_item_selected {
  color: var(--primary-navy);
}
</style>
