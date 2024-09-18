// noinspection BadExpressionStatementJS

import {defineStore} from "pinia";
import {ref} from "vue";
import fileSample from "@/stores/samples/file";
// import searchResultSample from "@/stores/samples/search";

export const useFileStore = defineStore("files", () => {
    const currentFiles = ref(fileSample);
    const currentPaths = ref("/");
    const isSearched = ref(false);
    const isLoading = ref(false);
    const searchError = ref("");
    const searchKeyword = ref("");
    const searchOptions = ref({
        method: "ALL",
    });


    return {
        currentFiles, currentPath: currentPaths, isSearched, isLoading, searchError, searchKeyword, searchOptions,
    }
}, {
    persist: {
        paths: ["currentFiles", "currentPaths"],
    },
});
