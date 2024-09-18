<template>
  <div>
    <div v-for="file in fileStore.currentFiles">
      <file-list-entity :metadata="file"></file-list-entity>
    </div>
  </div>
</template>

<script setup>
import {useFileStore} from "@/stores/fileStore.js";
import FileListEntity from "@/components/domains/files/lists/FileListEntity.vue";


const fileStore = useFileStore();
</script>

<style scoped>
</style>
