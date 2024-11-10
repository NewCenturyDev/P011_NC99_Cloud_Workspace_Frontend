<template>
  <div class="header_bar_right">
    <header-bar-menu v-if="authStore.checkUserLoggedIn()"></header-bar-menu>
    <header-bar-intro-menu v-else></header-bar-intro-menu>
    <header-bar-icon v-if="authStore.checkUserLoggedIn()"></header-bar-icon>
  </div>
</template>

<script setup>
import HeaderBarMenu from "@/components/commons/headers/HeaderBarMenu.vue";
import HeaderBarIcon from "@/components/commons/headers/HeaderBarIcon.vue";
import HeaderBarIntroMenu from "@/components/commons/headers/HeaderBarIntroMenu.vue";
import {useAuthStore} from "@/stores/authStore.js";

const authStore = useAuthStore();
</script>

<style scoped>
.header_bar_right {
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 36px;
}
</style>
