<template>
  <header>
    <page-header></page-header>
  </header>
  <section>
    <page-dashboard title="수집기"></page-dashboard>
  </section>
  <section class="single_column_body">
    <div class="crawler_main">
      <crawler-menu-bar></crawler-menu-bar>
      <crawler-list-content></crawler-list-content>
    </div>
  </section>
</template>
<script setup>
import PageHeader from "@/components/commons/headers/PageHeader.vue";
import PageDashboard from "@/components/commons/dashboards/PageDashboard.vue";
import CrawlerMenuBar from "@/components/domains/crawlers/menus/CrawlerMenuBar.vue";
import CrawlerListContent from "@/components/domains/crawlers/lists/CrawlerListContent.vue";
</script>

<style scoped>
.single_column_body {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: calc(100vh - 206px);
  min-height: 500px;
  padding: 0 20px 20px;
}
.crawler_main {
  display: flex;
  flex-direction: column;
  width: calc(100vw - 40px);
  min-width: 320px;
  height: 100%;
  padding: 26px 32px;
  background-color: var(--background-assistive);
  border-radius: 20px;
}
</style>
