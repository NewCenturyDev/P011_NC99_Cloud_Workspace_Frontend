<template>
  <div class="title_bar_container">
    <div class="title_current_path">{{ parseCurrentPath(fileStore.currentPath) }}</div>
    <div class="title_search_box">
      <title-search-box></title-search-box>
    </div>
  </div>
</template>

<script setup>
import {useFileStore} from "@/stores/fileStore.js";
import TitleSearchBox from "@/components/domains/files/titles/TitleSearchBox.vue";


const fileStore = useFileStore();
const menus = [
  { name: "", redirect: ""}
];

function parseCurrentPath(path) {
  return path === "/" ? "My Workspace" : path;
}
</script>

<style scoped>
.title_bar_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 55px;
}
.title_search_box {
  width: 400px;
}
.title_current_path {
  width: 100%;
  height: 55px;
  line-height: 55px;
  font-size: 18px;
  font-weight: bold;
  user-select: none;
}
</style>
