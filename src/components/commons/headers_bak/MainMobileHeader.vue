<template>
  <header class="header">
    <div>
      <header-logo
          :src="DefaultLogoImg"
          :width="100"
          :height="40"
          url=""
      ></header-logo>
    </div>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon
        @click="openDrawer">
      <v-icon icon="mdi-menu"></v-icon>
    </v-app-bar-nav-icon>
  </header>
  <main-mobile-nav-drawer
      :open="drawerIsOpen"
      @input="toggleDrawer"
  ></main-mobile-nav-drawer>
</template>

<script setup>
import HeaderLogo from "@/components/commons/headers_bak/HeaderLogo.vue";
import DefaultLogoImg from "@/assets/vue.svg";
import MainMobileNavDrawer from "@/components/commons/headers_bak/MainMobileNavDrawer.vue";
import { ref } from "vue";

const drawerIsOpen = ref(false);

function openDrawer() {
  drawerIsOpen.value = true;
}

function toggleDrawer(status) {
  drawerIsOpen.value = status;
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
  height: 94px;
  border-bottom: 1px solid var(--primary-color);
}
</style>
