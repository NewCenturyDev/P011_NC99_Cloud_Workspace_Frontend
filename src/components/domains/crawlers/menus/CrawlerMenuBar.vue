<template>
  <div class="crawler_menu_container">
    <div class="crawler_buttons">
      <menu-button icon="mdi-upload" label="수집" :is-primary="true"></menu-button>
    </div>
    <crawler-menu-search icon="mdi-magnify" placeholder="논문 질의어를 입력하세요.."></crawler-menu-search>
  </div>
</template>

<script setup>
import MenuButton from "@/components/commons/menus/MenuButton.vue";
import CrawlerMenuSearch from "@/components/domains/crawlers/menus/CrawlerMenuSearch.vue";

</script>

<style scoped>
.crawler_menu_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 29px;
  margin-bottom: 23px;
  @media(max-width: 1279px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
.crawler_buttons {
  display: flex;
  flex-direction: row;
  gap: 8px;
  min-width: 250px;
  width: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.crawler_buttons::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
