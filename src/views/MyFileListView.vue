<template>
  <div>
    <div class="sidebar">
      <sidebar></sidebar>
    </div>
    <div class="header">
      <main-header></main-header>
    </div>
    <div class="content">
      <title-bar></title-bar>
      <command-bar></command-bar>
      <sort-bar></sort-bar>
      <file-list></file-list>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/domains/sidebars/Sidebar.vue";
import TitleBar from "@/components/domains/files/titles/TitleBar.vue";
import CommandBar from "@/components/domains/files/commands/CommandBar.vue";
import SortBar from "@/components/domains/files/sorts/SortBar.vue";
import FileList from "@/components/domains/files/lists/FileList.vue";
import MainHeader from "@/components/commons/headers/MainHeader.vue";
</script>

<style scoped>
.content {
  padding: 0 20px;
}
</style>
