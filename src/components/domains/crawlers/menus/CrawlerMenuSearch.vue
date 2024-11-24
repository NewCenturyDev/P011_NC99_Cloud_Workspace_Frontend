<template>
  <div class="crawler_search">
    <v-text-field
      v-model="store.searchKeyword"
      :placeholder="props.placeholder"
      variant="plain"
      :hide-details="true"
      @update:model-value="store.search"
    >
      <v-icon :icon="props.icon" :color="props.isPrimary ? '#FFFFFF' : '#37383C9C'"></v-icon>
    </v-text-field>
  </div>
</template>

<script setup>
import {useCrawlerStore} from "@/stores/crawlerStore.js";

const props = defineProps({ icon: String, placeholder: String });
const store = useCrawlerStore();
</script>

<style scoped>
.crawler_search {
  min-width: 150px;
  width: 100%;
  max-width: 300px;
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
  @media(max-width: 1279px) {
    max-width: unset;
  }
}
.crawler_search:deep(.v-field__input) {
  height: 16px;
  min-height: unset;
  padding: 0;
  line-height: 16px;
}
.crawler_search:deep(.v-icon) {
  width: 16px;
  height: 16px;
}
</style>
