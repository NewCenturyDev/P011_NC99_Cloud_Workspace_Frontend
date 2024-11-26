<template>
  <page-menu-bar>
    <template v-slot:buttons>
      <menu-button icon="mdi-plus" label="일정 생성" :is-primary="true"></menu-button>
    </template>
    <template v-slot:default>
    </template>
  </page-menu-bar>
</template>

<script setup>

import PageMenuBar from "@/components/commons/menus/PageMenuBar.vue";
import MenuButton from "@/components/commons/menus/MenuButton.vue";
</script>

<style scoped>

</style>
