<template>
  <div class="storage_search">
    <v-text-field
      v-model="store.searchKeyword"
      :placeholder="props.placeholder"
      variant="plain"
      :hide-details="true"
    >
      <v-icon :icon="props.icon" :color="props.isPrimary ? '#FFFFFF' : '#37383C9C'"></v-icon>
    </v-text-field>
  </div>
</template>

<script setup>
import {useStorageStore} from "@/stores/storageStore.js";

const props = defineProps({ icon: String, placeholder: String });
const store = useStorageStore();
</script>

<style scoped>
.storage_search {
  width: 100%;
  height: 42px;
  padding: 12px 16px;
  border-radius: 21px;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  background-color: #FFFFFF;
  color: var(--label-assistive);
  border: 1px solid var(--line-normal);
}
.storage_search:deep(.v-field__input) {
  height: 16px;
  min-height: unset;
  padding: 0;
  line-height: 16px;
}
.storage_search:deep(.v-icon) {
  width: 16px;
  height: 16px;
}
</style>
