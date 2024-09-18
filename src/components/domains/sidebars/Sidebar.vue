<template>
  <div class="sidebar_container">
    <v-navigation-drawer :width="300">
      <v-list-item title="My Workspace" subtitle="Test1" height="94"></v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="gotoRouter('/')" link title="내 파일"></v-list-item>
      <v-list-item @click="gotoRouter('/calendar')" link title="내 일정"></v-list-item>
      <v-list-item link title="공유 파일"></v-list-item>
      <v-list-item link title="개인 설정"></v-list-item>
      <v-list-item link title="로그아웃"></v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import routers from "@/routers/index.js";

function gotoRouter(path) {
  routers.push(path);
}
</script>

<style scoped>
.sidebar_container {
  position: fixed;
  left: 0;
  width: 300px;
  height: 100vh;
  z-index: 999;
}
</style>
