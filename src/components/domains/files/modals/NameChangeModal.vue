<template>
  <input-modal
      title="이름 바꾸기"
      :open="isOpen"
      placeholder="변경할 파일/폴더 이름"
      :default-value="parseTargetName()"
      @input="onClose"
      @confirm="(value) => fileStore.reqChangeName(props.target, value)"
  ></input-modal>
</template>

<script setup>
import InputModal from "@/components/commons/modals/InputModal.vue";
import {useFileStore} from "@/stores/fileStore.js";
import path from "path-browserify";
import {ref, watch} from "vue";

const fileStore = useFileStore();
const props = defineProps({ open: Boolean, target: String})
const emit = defineEmits([ "input" ]);
const isOpen = ref(props.open);

watch(() => props.open, () => {
  isOpen.value = props.open;
});

function parseTargetName() {
  return path.basename(props.target).replace(path.extname(props.target), "");
}

function onClose() {
  emit("input", false);
}
</script>
