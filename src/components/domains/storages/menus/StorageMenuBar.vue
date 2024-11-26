<template>
  <page-menu-bar>
    <template v-slot:buttons>
      <menu-button @click="store.uploadModalControl.launch()" icon="mdi-upload" label="업로드" :is-primary="true"></menu-button>
      <menu-button @click="store.createDirModalControl.launch()" icon="mdi-folder-plus" label="새 폴더" :is-primary="false"></menu-button>
      <menu-button @click="store.reqDownloadFiles" v-if="store.selectedIndexes.length" icon="mdi-download" label="다운로드" :is-primary="false"></menu-button>
      <menu-button v-if="store.selectedIndexes.length" icon="mdi-export-variant" label="공유" :is-primary="false"></menu-button>
      <menu-button @click="store.reqDeleteFiles" v-if="store.selectedIndexes.length" icon="mdi-trash-can-outline" label="삭제" :is-primary="false"></menu-button>
    </template>
    <template v-slot:default>
      <storage-menu-search icon="mdi-magnify" placeholder="파일명으로 검색하세요.."></storage-menu-search>
    </template>
  </page-menu-bar>
</template>

<script setup>
import MenuButton from "@/components/commons/menus/MenuButton.vue";
import StorageMenuSearch from "@/components/domains/storages/menus/StorageMenuSearch.vue";
import {useStorageStore} from "@/stores/storageStore.js";
import PageMenuBar from "@/components/commons/menus/PageMenuBar.vue";

const store = useStorageStore();
</script>

<style scoped>
</style>
