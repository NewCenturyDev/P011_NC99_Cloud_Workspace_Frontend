<template>
  <div class="sidebar_container">
    <v-list class="sidebar_list">
      <v-list-item
        @click="selectMenu(idx)"
        class="sidebar_list_item"
        v-for="(menu, idx) in menus" :key="menu.label"
      >
        <v-list-item-title
          :class="isCurrentMenu(idx) ? 'sidebar_list_item_title_selected' : 'sidebar_list_item_title'"
        >
          {{ menu.label }}
        </v-list-item-title>
        <v-icon v-if="isCurrentMenu(idx)" icon="mdi-chevron-right"></v-icon>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import {ref} from "vue";

const menus = [
  {"label": "사용자 프로필", "href": ""},
  {"label": "공유 그룹 관리", "href": ""},
  {"label": "관리자 승급", "href": ""},
]
const currentMenu = ref(0);

function isCurrentMenu(idx) {
  return currentMenu.value === idx;
}

function selectMenu(idx) {
  currentMenu.value = idx;
  console.log(`${menus[idx].href}로 이동`)
}
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
