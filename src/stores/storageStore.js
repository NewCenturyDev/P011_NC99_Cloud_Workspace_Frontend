import {defineStore} from "pinia";
import {ref, toRaw, watch} from "vue";
import fileSample from "@/stores/samples/file";
import {useModalControl} from "@/components/commons/modals/composables/ModalControl.js";
import _ from "lodash";
import group from "@/stores/samples/group.js";

export const useStorageStore = defineStore("storages", () => {
  const storages = ref(group);
  const currentStorageId = ref(1);
  const currentFiles = ref(fileSample);
  const filteredFiles = ref(currentFiles.value);
  const currentPath = ref("/");
  const isLoading = ref(false);
  const selectedIndexes = ref([]);
  const searchKeyword = ref("");
  const searchError = ref("");
  const isSearched = ref(false);

  const uploadModalControl = useModalControl();
  const createDirModalControl = useModalControl();

  watch(() => currentStorageId.value, () => {
    reqFetchEntries();
  });

  function selectStorage(id) {
    currentStorageId.value = id;
  }

  function getCurrentStorage() {
    return storages.value.find(s => s.id === currentStorageId.value);
  }

  function reqChangeName(target, newName) {
    console.log(`TODO: "${target}"의 파일/폴더 이름을 "${newName}" 으로 변경`);
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
    for (let i = 0; i < filteredFiles.value.length; i++) {
      selectedIndexes.value.push(i);
    }
    console.log(`DEBUG: 전체 선택됨 - ${selectedIndexes.value}`);
  }

  function releaseAll() {
    selectedIndexes.value.length = 0;
    console.log(`DEBUG: 전체 해제됨 - ${selectedIndexes.value}`);
  }

  function search() {
    releaseAll();
    if (searchKeyword.value) {
      filteredFiles.value = currentFiles.value.filter(f => f["name"].includes(searchKeyword.value));
    } else {
      filteredFiles.value = currentFiles.value;
    }
  }

  function reqFetchEntries() {
    console.log("Fetch File Lists: ", currentStorageId.value);
    // TODO: Call File Entry API Here
  }

  function reqUpload(fileFormData) {
    console.log('Ready to upload:', fileFormData.getAll("files"));
    // TODO: Call File Upload API Here
  }

  function reqCreateDir(dirName) {
    console.log("Create New Dir:", dirName);
    // TODO: Call New Directory API Here
  }

  function reqDownloadFiles() {
    const targetFiles = _.map(selectedIndexes.value, (v, i) => filteredFiles.value[i]);
    console.log("Download Files: ", toRaw(targetFiles));
    // TODO: Call Download File API Here
  }

  function reqDeleteFiles() {
    const targetFiles = _.map(selectedIndexes.value, (v, i) => filteredFiles.value[i]);
    console.log("Deleting Files: ", toRaw(targetFiles));
    // TODO: Call Delete File API Here
  }

  return {
    storages,
    currentStorageId,
    selectStorage, getCurrentStorage,
    filteredFiles, currentPath, selectedIndexes, isSearched, isLoading, searchError, searchKeyword,
    reqChangeName, search, isSelected, select, release, selectAll, releaseAll,
    reqUpload, reqCreateDir, reqDownloadFiles, reqDeleteFiles,
    uploadModalControl, createDirModalControl
  }
});
