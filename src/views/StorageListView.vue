<template>
  <header>
    <page-header></page-header>
  </header>
  <section>
    <page-dashboard title="스토리지"></page-dashboard>
  </section>
  <section class="double_column_body">
    <storage-sidebar></storage-sidebar>
    <storage-list></storage-list>
  </section>
</template>

<script setup>
import PageHeader from "@/components/commons/headers/PageHeader.vue";
import StorageSidebar from "@/components/domains/storages/sidebars/StorageSidebar.vue";
import StorageList from "@/components/domains/storages/lists/StorageList.vue";
import PageDashboard from "@/components/commons/dashboards/PageDashboard.vue";
</script>

<style scoped>
.double_column_body {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: calc(100vh - 204px);
  min-height: 500px;
  padding: 0 20px 20px;
}
</style>
