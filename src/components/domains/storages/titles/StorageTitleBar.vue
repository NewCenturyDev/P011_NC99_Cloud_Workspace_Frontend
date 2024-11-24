<template>
  <div class="storage_title_container">
    <v-select
      class="storage_selector"
      v-model="storageStore.currentStorageId"
      :items="storageStore.storages"
      item-title="name"
      item-value="id"
      variant="plain"
      density="compact"
      :hide-details="true"
    ></v-select>
  </div>
</template>

<script setup>
import {useStorageStore} from "@/stores/storageStore.js";

const storageStore = useStorageStore();
</script>

<style scoped>
.storage_title_container {
  width: 100%;
  height: 24px;
}
.storage_selector {
  width: fit-content;
  height: 24px;
  color: var(--label-normal);
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  --v-input-control-height: 24px;
  --v-input-padding-top: 0;
}

</style>
