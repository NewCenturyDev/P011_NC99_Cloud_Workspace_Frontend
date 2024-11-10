<template>
  <div class="storage_main">
    <storage-title-bar></storage-title-bar>
    <storage-menu-bar></storage-menu-bar>
    <storage-list-content></storage-list-content>
  </div>
</template>

<script setup>
import StorageTitleBar from "@/components/domains/storages/titles/StorageTitleBar.vue";
import StorageMenuBar from "@/components/domains/storages/menus/StorageMenuBar.vue";
import StorageListContent from "@/components/domains/storages/lists/StorageListTable.vue";
</script>

<style scoped>
.storage_main {
  display: flex;
  flex-direction: column;
  width: calc(100vw - 296px);
  min-width: 320px;
  height: 100%;
  padding: 26px 32px;
  margin-top: 20px;
  background-color: var(--background-assistive);
  border-radius: 20px;
}
</style>
