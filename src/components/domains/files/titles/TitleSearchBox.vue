<template>
  <div class="title_search_box_container">
    <v-text-field
        variant="outlined"
        density="compact"
        :hide-details="true"
        placeholder="파일 검색"
    >
      <v-icon icon="mdi-magnify"></v-icon>
    </v-text-field>
    <v-btn
        variant="flat"
    >
      <v-icon icon="mdi-magnify"></v-icon>
    </v-btn>
  </div>
</template>

<script setup>
</script>

<style scoped>
.title_search_box_container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title_search_box_container:deep(.v-field) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.title_search_box_container:deep(.v-btn) {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
