<template>
  <v-card class="map_card" variant="outlined">
    <v-card-title>
      <h5>{{ props.fieldName }}</h5>
    </v-card-title>
    <v-card-text>
      <a v-if="isHref" :href="props.fieldValue" rel="noopener noreferrer" target="_blank">{{ props.fieldValue }}</a>
      <p v-else>{{ props.fieldValue ? props.fieldValue : "정보없음" }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({ fieldName: String, fieldValue: null, isHref: null });
</script>

<style scoped>
.map_card {
  height: 100%;
}
</style>
