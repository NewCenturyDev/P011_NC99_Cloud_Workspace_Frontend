<template>
  <div class="crawler_list_container">
    <div>수집된 논문이 없습니다. 검색해보세요!</div>
    <div class="crawler_search_bar">
      <v-text-field
        class="primary_search"
        v-model="store.searchKeyword"
        placeholder="논문 저자, 제목 등을 입력하세요"
        variant="plain"
        :hide-details="true"
        @update:model-value="store.search"
      >
        <v-icon class="search_icon" icon="mdi-magnify" color="#37383C9C"></v-icon>
      </v-text-field>
      <v-btn
        class="primary_search_btn"
        variant="flat"
      >추출</v-btn>
    </div>
  </div>
</template>

<script setup>
import {useCrawlerStore} from "@/stores/crawlerStore.js";

const store = useCrawlerStore();
</script>

<style scoped>
.crawler_list_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  color: var(--label-assistive);
}
.crawler_search_bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  width: 100%;
}
.primary_search {
  min-width: 200px;
  width: 100%;
  max-width: 600px;
  height: 48px;
  padding: 12px 16px;
  border-radius: 24px;
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 48px;
  background-color: #FFFFFF;
  color: var(--label-normal);
  border: 1px solid var(--line-normal);
  @media(max-width: 1279px) {
    max-width: unset;
  }
}
.primary_search:deep(.v-field__input) {
  height: 16px;
  min-height: unset;
  padding: 0;
  line-height: 16px;
}
.primary_search:deep(.v-icon) {
  width: 24px;
  height: 24px;
}
.primary_search_btn {
  width: 72px;
  height: 48px;
  background-color: var(--primary-navy);
  color: #FFFFFF;
  border-radius: 24px;
}
</style>
