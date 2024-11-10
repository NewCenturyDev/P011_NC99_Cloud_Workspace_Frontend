<template>
  <div>
    <div class="sidebar">
      <sidebar></sidebar>
    </div>
    <div class="header">
      <main-header></main-header>
    </div>
    <div class="content">
      <calendar></calendar>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/domains/sidebars/Sidebar.vue";
import MainHeader from "@/components/commons/headers_bak/MainHeader.vue";
import Calendar from "@/components/domains/calendars/Calendar.vue";
</script>

<style scoped>
.content {
  padding: 0 20px;
}
</style>
