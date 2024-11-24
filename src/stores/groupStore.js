import {defineStore} from "pinia";
import {ref} from "vue";
import groupSamples from "@/stores/samples/group.js";
import {useModalControl} from "@/components/commons/modals/composables/ModalControl.js";

export const useGroupStore = defineStore("gorups", () => {
  const groups = ref(groupSamples);

  const createGroupModalControl = useModalControl();

  function reqCreateGroup(groupName, participents) {
    console.log("CreateGroup: ", groupName, " Participents: ", participents);
    // TODO: Call Create Storage API Here
  }

  return {
    groups,
    reqCreateGroup,
    createGroupModalControl,
  }
});
