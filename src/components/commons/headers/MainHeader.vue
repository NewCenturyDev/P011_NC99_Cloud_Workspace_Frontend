<template>
  <header class="header">
    <header-logo
        :src="DefaultLogoImg"
        :width="100"
        :height="50"
        url="/"
    ></header-logo>
    <div class="title_name">
      <h2>My Workspace</h2>
    </div>
    <v-spacer></v-spacer>
  </header>
</template>

<script setup>
import HeaderLogo from "@/components/commons/headers/HeaderLogo.vue";
import DefaultLogoImg from "@/assets/vue.svg";
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
