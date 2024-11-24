<template>
  <common-modal
    :width="560"
    title="파일 업로드"
    :open="isOpen"
    :persist="true"
    @input="store.uploadModalControl.setIsOpen"
  >
    <template v-slot:contents>
      <div>
        <div
          class="upload_area"
          @dragover.prevent="onDragOver"
          @drop.prevent="onDrop"
          :class="{ 'dragging': isDragging }"
        >
          <div @click="openFileDialog" class="upload_background" v-ripple>
            <v-icon icon="mdi-plus"></v-icon>
            <div>파일을 끌어다 놓거나, 여기를 누르세요</div>
          </div>
          <input
            ref="fileInput"
            type="file"
            multiple
            @change="onFileSelect"
            class="file_input"
          />
        </div>
        <div class="file_list" v-if="uploadTargetFiles.length">
          <div class="file_column">업로드 대상 파일: </div>
          <div class="file_element" v-for="(file, idx) in uploadTargetFiles" :key="file.name">
            <div>
              <v-icon icon="mdi-file"></v-icon>
            </div>
            <div>{{ file.name }}</div>
            <div>{{ fileUtil.parseFileSize(file.size) }}</div>
            <div>
              <v-icon @click="removeFile(idx)" icon="mdi-close" color="red"></v-icon>
            </div>
          </div>
        </div>
        <div class="file_list empty_file_list" v-else>업로드 대상 파일이 없습니다.</div>
      </div>
    </template>
    <template v-slot:buttons>
      <div class="modal_footer">
        <v-btn variant="text" color="var(--primary-navy)" @click="confirmUpload">업로드</v-btn>
        <v-btn variant="text" color="var(--label-assistive)" @click="closeModal">취소</v-btn>
      </div>
    </template>
  </common-modal>
</template>

<script setup>
import {ref, watch} from 'vue';
import CommonModal from "@/components/commons/modals/CommonModal.vue";
import {useStorageStore} from "@/stores/storageStore.js";
import fileUtil from "../../../../stores/utils/fileUtil.js";

const store = useStorageStore();
const isOpen = ref(store.uploadModalControl.isOpen);
const uploadTargetFiles = ref([]); // Selected files
const isDragging = ref(false);
const fileInput = ref(null);

watch(() => store.uploadModalControl.isOpen, (value) => {
  isOpen.value = value;
});


// Opens the file dialog
function openFileDialog() {
  // noinspection JSUnresolvedReference
  fileInput.value.click();
}

// Handles file selection via the file input
function onFileSelect(event) {
  const selectedFiles = Array.from(event.target.files);
  addFiles(selectedFiles);
}

// Handles drag-and-drop functionality
function onDragOver () {
  isDragging.value = true;
}

function onDrop (event) {
  const droppedFiles = Array.from(event.dataTransfer.files);
  addFiles(droppedFiles);
  isDragging.value = false;
}

// Adds files to the list, excluding directories
function addFiles (newFiles) {
  newFiles.forEach((file) => {
    if (file.type) {
      uploadTargetFiles.value.push(file);
    }
  });
}

function removeFile(idx) {
  uploadTargetFiles.value.splice(idx, 1);
}

// Resets the modal state and closes it
function closeModal() {
  store.uploadModalControl.setIsOpen(false);
  uploadTargetFiles.value = [];
}

// Confirms the upload (implement upload logic)
async function confirmUpload() {
  const formData = new FormData();
  uploadTargetFiles.value.forEach((file) => formData.append('files', file));
  await store.reqUpload(formData);
  closeModal();
}
</script>

<style scoped>
.upload_area > input {
  display: none;
}
.upload_background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 14px;
  text-align: center;
  color: var(--primary-navy);
  border: 1px solid var(--primary-navy);
  border-radius: 20px;
  user-select: none;
  cursor: pointer;
}
.file_list {
  display: flex;
  flex-direction: column;
  min-height: 100px;
}
.empty_file_list {
  justify-content: center;
  align-items: center;
  color: var(--label-assistive);
  font-size: 14px;
}
.file_column {
  width: 100%;
  height: 32px;
  line-height: 32px;
  color: var(--label-assistive);
  font-size: 14px;
}
.file_element {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 32px;
  line-height: 32px;
  color: var(--label-normal);
  font-size: 14px;
}
.file_element div:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}
.file_element div:nth-child(2) {
  width: 340px;
  min-width: 200px;
  height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.file_element div:nth-child(3) {
  width: 108px;
}
.file_element div:nth-child(4) {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
