<template>
  <div
    class="storage_column"
  >
    <v-checkbox
      class="storage_column_checkbox"
      :hide-details="true"
      :model-value="isSelectedAll"
      :indeterminate="isInterminate"
      @update:model-value="selectAllFiles"
    ></v-checkbox>
    <div class="storage_column_info storage_column_name">이름</div>
    <div class="storage_column_info storage_column_size">크기</div>
    <div class="storage_column_info storage_column_timestamp">수정일시</div>
  </div>
</template>

<script setup>
import {useStorageStore} from "@/stores/storageStore.js";
import {ref, watch} from "vue";

const store = useStorageStore();
const isSelectedAll = ref(store.selectedIndexes.length === store.filteredFiles.length);
const isInterminate = ref(0 < store.selectedIndexes.length && store.selectedIndexes.length < store.filteredFiles.length);

watch(() => store.selectedIndexes, (value) => {
  if (value.length === store.filteredFiles.length) {
    isSelectedAll.value = true;
    isInterminate.value = false;
  } else if (value.length > 0) {
    isSelectedAll.value = false;
    isInterminate.value = true;
  } else {
    isSelectedAll.value = false;
    isInterminate.value = false;
  }
}, { deep: true });

function selectAllFiles() {
  if (store.selectedIndexes.length > 0) {
    store.releaseAll();
  } else {
    store.selectAll();
  }
}
</script>

<style scoped>
.storage_column {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 47px;
  padding: 13px 20px;
  background-color: var(--background-assistive);
  border-bottom: 1px solid rgba(112, 115, 124, 0.16);
  gap: 20px;
}
.storage_column_checkbox {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}
.storage_column_checkbox:deep(.v-selection-control) {
  width: 20px;
  height: 20px;
  min-width: unset;
  min-height: unset;
  --v-selection-control-size: 20px;
}
.storage_column_info {
  overflow: hidden;
  color: var(--label-alternative);
  text-overflow: ellipsis;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
}
.storage_column_name {
  width: 100%;
  min-width: 250px;
  margin-left: 76px;
  /* margin-left: 44px; # FIXME: 전체선택 체크박스 구현 후 복귀할 것 */
}
.storage_column_size {
  min-width: 75px;
}
.storage_column_timestamp {
  max-width: 250px;
  width: 250px;
  min-width: 100px;
  word-break: keep-all;
}
</style>
