<template>
  <v-dialog :model-value="isOpen" :disabled="disabled" :persistent="isPersist" :width="width" @update:modelValue="onClose">
    <v-card>
      <v-card-title class="modal_title">
        <div>{{ props.title }}</div>
        <v-btn density="compact" icon="mdi-close" variant="plain" @click="onClose"></v-btn>
      </v-card-title>
      <v-card-text>
        <slot name="contents"></slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <slot name="buttons"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch, watchEffect } from "vue";

const props = defineProps({ width: Number, title: String, open: Boolean, disabled: Boolean, persist: Boolean });
const emit = defineEmits([ "input" ]);
const isOpen = ref(props.open);
const isPersist = ref(props.persist);

// Vuetify 모달창 내에서 v-select 사용시 발생하는 라이브러리 버그 해결용
// https://github.com/vuetifyjs/vuetify/issues/16770
watchEffect(() => {
  document.documentElement.style.overflow = isOpen.value ? "hidden" : null;
});
watch(() => props.open, () => {
  isOpen.value = props.open;
});
watch(() => props.persist, () => {
  isPersist.value = props.persist;
});


function onClose() {
  emit("input", false);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal_title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
