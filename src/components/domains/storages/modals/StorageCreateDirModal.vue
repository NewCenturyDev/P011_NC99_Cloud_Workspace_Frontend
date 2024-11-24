<template>
  <common-modal
    :width="560"
    title="새 폴더 생성"
    :open="isOpen"
    @input="store.createDirModalControl.setIsOpen"
  >
    <template v-slot:contents>
      <div>
        <div class="modal_title">새 폴더 만들기</div>
        <v-text-field
          class="input_field"
          variant="outlined"
          density="compact"
          placeholder="새 폴더 이름.."
          hint="새 폴더 이름을 입력하세요"
          v-model="newDirName"
          color="var(--primary-navy)"
          @keyup.enter="confirmCreate"
        ></v-text-field>
      </div>
    </template>
    <template v-slot:buttons>
      <div class="modal_footer">
        <v-btn variant="text" color="var(--primary-navy)" @click="confirmCreate">생성</v-btn>
        <v-btn variant="text" color="var(--label-assistive)" @click="closeModal">취소</v-btn>
      </div>
    </template>
  </common-modal>
</template>

<script setup>
import CommonModal from "@/components/commons/modals/CommonModal.vue";
import {useStorageStore} from "@/stores/storageStore.js";
import {ref, watch} from "vue";

const store = useStorageStore();
const isOpen = ref(store.createDirModalControl.isOpen);
const newDirName = ref("");

watch(() => store.createDirModalControl.isOpen, (value) => {
  isOpen.value = value;
});

// Resets the modal state and closes it
function closeModal() {
  store.createDirModalControl.setIsOpen(false);
  newDirName.value = "";
}

async function confirmCreate() {
  await store.reqCreateDir(newDirName.value);
  closeModal();
}
</script>

<style scoped>
.modal_title {
  width: 100%;
  height: 32px;
  font-size: 16px;
  color: var(--label-normal);
}
</style>
