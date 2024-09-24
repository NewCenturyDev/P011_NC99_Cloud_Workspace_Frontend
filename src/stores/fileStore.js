// noinspection BadExpressionStatementJS

import {defineStore} from "pinia";
import {ref} from "vue";
import fileSample from "@/stores/samples/file";
import {id} from "vuetify/locale";
// import searchResultSample from "@/stores/samples/search";

export const useFileStore = defineStore("files", () => {
    const currentFiles = ref(fileSample);
    const currentPath = ref("/");
    const selectedIndexes = ref([]);
    const isSearched = ref(false);
    const isLoading = ref(false);
    const searchError = ref("");
    const searchKeyword = ref("");
    const searchOptions = ref({
        method: "ALL",
    });

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
        currentFiles, currentPath, selectedIndexes, isSearched, isLoading, searchError, searchKeyword, searchOptions,
        reqChangeName, reqCreateDir, isSelected, select, release, selectAll, releaseAll
    }
}, {
    persist: {
        paths: ["currentFiles", "currentPaths"],
    },
});
