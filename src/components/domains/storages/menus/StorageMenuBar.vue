<template>
  <div class="storage_menu_container">
    <div class="storage_buttons">
      <storage-menu-button icon="mdi-upload" label="업로드" :is-primary="true"></storage-menu-button>
      <storage-menu-button icon="mdi-folder-plus" label="새 폴더" :is-primary="false"></storage-menu-button>
      <storage-menu-button icon="mdi-download" label="다운로드" :is-primary="false"></storage-menu-button>
      <storage-menu-button icon="mdi-export-variant" label="공유" :is-primary="false"></storage-menu-button>
      <storage-menu-button icon="mdi-trash-can-outline" label="삭제" :is-primary="false"></storage-menu-button>
    </div>
    <storage-menu-text-field icon="mdi-magnify" placeholder="파일명으로 검색하세요.."></storage-menu-text-field>
  </div>
</template>

<script setup>
import StorageMenuButton from "@/components/domains/storages/menus/StorageMenuButton.vue";
import StorageMenuTextField from "@/components/domains/storages/menus/StorageMenuSearch.vue";
</script>

<style scoped>
.storage_menu_container {
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  width: 100%;
  margin-top: 29px;
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
  width: 100%;
  overflow-x: scroll;
}
</style>
