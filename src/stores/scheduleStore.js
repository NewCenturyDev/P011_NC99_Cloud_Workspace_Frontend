import {defineStore} from "pinia";
import {ref} from "vue";
import groupSamples from "@/stores/samples/group.js";
import scheduleSamples from "@/stores/samples/schedule.js";

export const useScheduleStore = defineStore("schedules", () => {
  const currentSchedules = ref(scheduleSamples);
  const currentGroupId = ref(1);
  const groups = ref(groupSamples);
  const isLoading = ref(false);

  function selectGroup(id) {
    currentGroupId.value = id;
  }

  function getCurrentGroup() {
    return groups.value.find(s => s.id === currentGroupId.value);
  }

  return {
    groups,
    currentGroupId,
    selectGroup, getCurrentGroup,
    currentSchedules, isLoading
  }
});
