import {defineStore} from "pinia";
import {ref} from "vue";

export const useCrawlerStore = defineStore("crawlers", () => {
  const searchKeyword = ref("");


  function search() {
    console.log("Requested Keyword: ", searchKeyword.value);
    // TODO: Call Gather by Keyword API Here
  }


  return {
    searchKeyword,
    search,
  };
});
