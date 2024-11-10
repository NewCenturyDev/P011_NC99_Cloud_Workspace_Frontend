<template>
  <div class="sidebar_container">
    <div class="sidebar_btn">
      <v-icon icon="mdi-plus" color="#FFFFFF" class="sidebar_btn_img"></v-icon>
      <div>새로운 공유 그룹 만들기</div>
    </div>
    <v-list class="sidebar_list">
      <v-list-item
        @click="storageStore.selectStorage(storage.id)"
        class="sidebar_list_item"
        v-for="storage in storageStore.storages" :key="storage.id"
      >
        <v-list-item-title
          :class="storageStore.getCurrentStorage().id === storage.id ? 'sidebar_list_item_title_selected' : 'sidebar_list_item_title'"
        >
          {{ storage.name }}
        </v-list-item-title>
        <v-icon v-if="storageStore.getCurrentStorage().id === storage.id" icon="mdi-chevron-right"></v-icon>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import {useStorageStore} from "@/stores/storageStore.js";

const storageStore = useStorageStore();
</script>

<style scoped>
.sidebar_container {
  width: 248px;
  height: calc(100vh - 204px);
  margin-right: 24px;
}
.sidebar_btn {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 48px;
  padding: 12px 30px;
  border-radius: 24px;
  background-color: var(--primary-navy);
  user-select: none;
  cursor: pointer;
}
.sidebar_btn > div {
  color: var(--background-normal);
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.sidebar_btn_img {
  width: 24px;
  height: 24px;
}
.sidebar_list {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0;
}
.sidebar_list_item {
  padding: 10px !important;
  user-select: none;
  cursor: pointer;
}
.sidebar_list_item:deep(.v-list-item__content) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.sidebar_list_item_title {
  color: var(--label-alternative);
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
}
.sidebar_list_item_title_selected {
  color: var(--label-normal);
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
}
</style>
