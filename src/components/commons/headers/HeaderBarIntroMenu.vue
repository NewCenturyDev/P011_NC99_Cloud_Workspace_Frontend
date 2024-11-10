<template>
  <div class="header_bar_menu">
    <div v-for="(menu, idx) in menuList" :key="idx" v-ripple
         :class="`header_bar_intro_menu_btn ${idx === menuList.length - 1 ? 'header_bar_intro_primary_btn' : null}`"
         @click="menu.action"
    >{{ menu.label }}</div>
  </div>
</template>

<script setup>
import routers from "@/routers/index.js";

const menuList = [
  { "label": "로그인", "action": () =>  routers.push("/") },
  { "label": "회원가입", "action": () =>  routers.push("/signup")},
];
</script>

<style scoped>
.header_bar_menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
.header_bar_intro_menu_btn {
  padding: 2px 4px;
  width: 64px;
  height: 32px;
  border: 1px solid var(--line-normal);
  border-radius: 6px;
  color: var(--primary-navy);
  font-size: 13px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
.header_bar_intro_primary_btn {
  color: #FFFFFF;
  background-color: var(--primary-navy);
  border-color: var(--primary-navy);
}
</style>
