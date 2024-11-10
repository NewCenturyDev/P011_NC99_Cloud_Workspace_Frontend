<template>
  <div class="storage_items">
    <storage-list-sort-bar></storage-list-sort-bar>
    <storage-list-item
      v-for="file in store.currentFiles"
      :key="file.id"
      :file="file"
    ></storage-list-item>
  </div>
</template>

<script setup>
import StorageListItem from "@/components/domains/storages/lists/StorageListItem.vue";
import {useStorageStore} from "@/stores/storageStore.js";
import StorageListSortBar from "@/components/domains/storages/lists/StorageListSortBar.vue";

const store = useStorageStore();
</script>

<style scoped>
.storage_items {
  overflow: scroll;
}
</style>
