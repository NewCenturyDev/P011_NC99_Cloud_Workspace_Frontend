<template>
  <div class="header_bar">
    <header-left-logo></header-left-logo>
    <v-spacer></v-spacer>
    <header-right-menu></header-right-menu>
  </div>
</template>

<script setup>
import HeaderLeftLogo from "@/components/commons/headers/HeaderLeftLogo.vue";
import HeaderRightMenu from "@/components/commons/headers/HeaderRightMenu.vue";
</script>

<style scoped>
.header_bar {
  display: flex;
  width: 100vw;
  height: 64px;
  padding: 0 20px;
}
</style>
