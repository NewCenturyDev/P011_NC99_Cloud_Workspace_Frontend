<template>
  <div class="calendar_container">
    <schedule-menu-bar></schedule-menu-bar>
    <div class="calendar">
      <vue-cal
        active-view="month"
        :events="store.currentSchedules"
        :snap-to-time="15"
      ></vue-cal>
    </div>
  </div>
</template>

<script setup>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import {useScheduleStore} from "@/stores/scheduleStore.js";
import ScheduleMenuBar from "@/components/domains/schedules/menus/ScheduleMenuBar.vue";

const store = useScheduleStore();
</script>

<style scoped>
.calendar_container{
  display: flex;
  flex-direction: column;
  width: calc(100vw - 296px);
  min-width: 320px;
  height: 100%;
  padding: 26px 32px;
  background-color: var(--background-assistive);
  border-radius: 20px;
}
.calendar {
  height: calc(100% - 42px);
}
</style>
