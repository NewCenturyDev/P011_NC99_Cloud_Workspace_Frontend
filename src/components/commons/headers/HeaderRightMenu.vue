<template>
  <div class="header_bar_right">
    <header-bar-menu></header-bar-menu>
    <header-bar-icon></header-bar-icon>
  </div>
</template>

<script setup>
import HeaderBarMenu from "@/components/commons/headers/HeaderBarMenu.vue";
import HeaderBarIcon from "@/components/commons/headers/HeaderBarIcon.vue";
</script>

<style scoped>
.header_bar_right {
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 36px;
}
</style>
