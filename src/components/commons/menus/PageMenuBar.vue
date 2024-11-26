<template>
  <div class="menu_container">
    <div class="menu_buttons">
      <slot name="buttons"></slot>
    </div>
    <slot name="default"></slot>
  </div>
</template>

<script setup>
import {useStorageStore} from "@/stores/storageStore.js";

const store = useStorageStore();
</script>

<style scoped>
.menu_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 23px;
  @media(max-width: 1279px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
.menu_buttons {
  display: flex;
  flex-direction: row;
  gap: 8px;
  min-width: 250px;
  width: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.menu_buttons::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
