<template>
  <div class="storage_menu_container">
    <div class="storage_buttons">
      <menu-button @click="store.uploadModalControl.launch()" icon="mdi-upload" label="업로드" :is-primary="true"></menu-button>
      <menu-button @click="store.createDirModalControl.launch()" icon="mdi-folder-plus" label="새 폴더" :is-primary="false"></menu-button>
      <menu-button @click="store.reqDownloadFiles" v-if="store.selectedIndexes.length" icon="mdi-download" label="다운로드" :is-primary="false"></menu-button>
      <menu-button v-if="store.selectedIndexes.length" icon="mdi-export-variant" label="공유" :is-primary="false"></menu-button>
      <menu-button @click="store.reqDeleteFiles" v-if="store.selectedIndexes.length" icon="mdi-trash-can-outline" label="삭제" :is-primary="false"></menu-button>
    </div>
    <storage-menu-search icon="mdi-magnify" placeholder="파일명으로 검색하세요.."></storage-menu-search>
  </div>
</template>

<script setup>
import MenuButton from "@/components/commons/menus/MenuButton.vue";
import StorageMenuSearch from "@/components/domains/storages/menus/StorageMenuSearch.vue";
import {useStorageStore} from "@/stores/storageStore.js";

const store = useStorageStore();
</script>

<style scoped>
.storage_menu_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 29px;
  margin-bottom: 23px;
  @media(max-width: 1279px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
.storage_buttons {
  display: flex;
  flex-direction: row;
  gap: 8px;
  min-width: 250px;
  width: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.storage_buttons::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
