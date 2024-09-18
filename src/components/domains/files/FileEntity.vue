<template>
  <div class="file_entity_container">
    <v-row>
      <v-col>
        <v-checkbox></v-checkbox>
      </v-col>
      <v-col>
        <v-icon icon="mdi-file"></v-icon>
      </v-col>
      <v-col>
        {{ file.name }}
      </v-col>
      <v-col>
        {{ parseFileSize(file.size) }}
      </v-col>
      <v-col>
        {{ parseFileTimestamp(file.timestamp) }}
      </v-col>
    </v-row>
  </div>
</template>

<script setup>

import {ref} from "vue";

const file = ref({
  name: "filename",
  type: "document",
  size: 10000000,
});

function parseFileSize(file) {
  // TODO: 파일 GB/MB/KB 용량 포매팅 로직 구현 할 것
}

function parseFileTimestamp(file) {
  // TODO: 파일 수정한 시각 포매팅 로직 구현 할 것
}
</script>

<style scoped>
.file_entity_container {
  width: 100%;
  height: 50px;
  border-top: 1px solid #888888;
  border-bottom: 1px solid #888888;
  font-size: 18px;
}
</style>
