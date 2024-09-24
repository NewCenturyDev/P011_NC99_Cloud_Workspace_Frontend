<template>
  <common-modal
      :width="380" :title="props.title"
      :open="isOpen" :disabled="false" :persist="false"
      @input="onClose"
      @keyup.enter="onConfirm"
  >
    <template v-slot:contents>
      <v-text-field
          variant="outlined" density="compact"
          :placeholder="props.placeholder"
          v-model="inputValue"
      >
      </v-text-field>
    </template>
    <template v-slot:buttons>
      <v-btn
          :disabled="!inputValue"
          variant="plain" density="default" color="primary"
          @click="onConfirm"
      >
        확인
      </v-btn>
      <v-btn
          variant="plain" density="default"
          @click="onClose"
      >
        취소
      </v-btn>
    </template>
  </common-modal>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch, watchEffect } from "vue";
import CommonModal from "@/components/commons/modals/CommonModal.vue";

const props = defineProps({ title: String, open: Boolean, placeholder: String, defaultValue: String });
const emit = defineEmits([ "input", "confirm" ]);
const isOpen = ref(props.open);
const inputValue = ref(props.defaultValue);

// Vuetify 모달창 내에서 v-select 사용시 발생하는 라이브러리 버그 해결용
// https://github.com/vuetifyjs/vuetify/issues/16770
watchEffect(() => {
  document.documentElement.style.overflow = isOpen.value ? "hidden" : null;
});
watch(() => props.open, () => {
  isOpen.value = props.open;
});


function onConfirm() {
  if (inputValue.value) {
    emit('confirm', inputValue.value);
    onClose();
  }
}

function onClose() {
  inputValue.value = "";
  emit("input", false);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
