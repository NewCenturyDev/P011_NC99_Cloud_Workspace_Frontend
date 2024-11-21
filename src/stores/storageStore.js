import {defineStore} from "pinia";
import {ref} from "vue";
import fileSample from "@/stores/samples/file";
import storage from "@/stores/samples/storage.js";

export const useStorageStore = defineStore("storages", () => {
  const storages = ref(storage);
  const currentStorageId = ref(0);
  const currentFiles = ref(fileSample);
  const currentPath = ref("/");
  const isLoading = ref(false);
  const selectedIndexes = ref([]);
  const searchKeyword = ref("");
  const searchError = ref("");
  const isSearched = ref(false);

  function selectStorage(id) {
    currentStorageId.value = id;
  }

  function getCurrentStorage() {
    return storages.value.find(s => s.id === currentStorageId.value);
  }

  function reqChangeName(target, newName) {
    console.log(`TODO: "${target}"의 파일/폴더 이름을 "${newName}" 으로 변경`);
  }

  function reqCreateDir(target, folderName) {
    console.log(`TODO: "${target}"에 새 폴더 "${folderName}" 생성`);
  }

  function isSelected(idx) {
    return selectedIndexes.value.indexOf(idx) !== -1;
  }

  function select(idx) {
    if (!isSelected(idx)) {
      selectedIndexes.value.push(idx);
      selectedIndexes.value.sort();
      console.log(`DEBUG: ${idx}번째 엔티티 선택됨 - ${selectedIndexes.value}`);
    }
  }

  function release(idx) {
    if (isSelected(idx)) {
      selectedIndexes.value.splice(selectedIndexes.value.indexOf(idx), 1);
      console.log(`DEBUG: ${idx}번째 엔티티 해제됨 - ${selectedIndexes.value}`);
    }
  }

  function selectAll() {
    selectedIndexes.value.length = 0;
    for (let i = 0; i < currentFiles.value.length; i++) {
      selectedIndexes.value.push(i);
    }
    console.log(`DEBUG: 전체 선택됨 - ${selectedIndexes.value}`);
  }

  function releaseAll() {
    selectedIndexes.value.length = 0;
    console.log(`DEBUG: 전체 해제됨 - ${selectedIndexes.value}`);
  }


  return {
    storages,
    currentStorageId,
    selectStorage, getCurrentStorage,
    currentFiles, currentPath, selectedIndexes, isSearched, isLoading, searchError, searchKeyword,
    reqChangeName, reqCreateDir, isSelected, select, release, selectAll, releaseAll
  }
});
