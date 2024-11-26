<template>
  <div class="header_bar_menu">
    <div v-for="(menu, idx) in menuList" :key="idx" v-ripple
         class="header_bar_menu_btn"
         @click="menu.action"
    >{{ menu.label }}</div>
  </div>
</template>

<script setup>
import routers from "@/routers/index.js";

const menuList = [
  { "label": "스토리지", "action": () => routers.push("/storages") },
  { "label": "캘린더", "action": () => routers.push("/schedules") },
  { "label": "수집기", "action": () => routers.push("/crawlers") },
  { "label": "사용자", "action": () => routers.push("/users") },
];
</script>

<style scoped>
.header_bar_menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.header_bar_menu_btn {
  padding: 2px 4px;
  color: #383981;
  font-size: 20px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  line-height: 30px;
  cursor: pointer;
  user-select: none;
}
</style>
