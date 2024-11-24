<template>
  <header>
    <page-header></page-header>
  </header>
  <section>
    <page-dashboard title="스케줄"></page-dashboard>
  </section>
  <section class="double_column_body">
    <schedule-sidebar></schedule-sidebar>
    <schedule-calendar></schedule-calendar>
  </section>
  <section>
    <create-group-modal></create-group-modal>
  </section>
</template>

<script setup>
import PageDashboard from "@/components/commons/dashboards/PageDashboard.vue";
import PageHeader from "@/components/commons/headers/PageHeader.vue";
import ScheduleCalendar from "@/components/domains/schedules/ScheduleCalendar.vue";
import ScheduleSidebar from "@/components/domains/schedules/sidebars/ScheduleSidebar.vue";
import CreateGroupModal from "@/components/domains/groups/modals/CreateGroupModal.vue";
</script>

<style scoped>
.double_column_body {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: calc(100vh - 204px);
  padding: 0 20px 20px;
}
</style>
