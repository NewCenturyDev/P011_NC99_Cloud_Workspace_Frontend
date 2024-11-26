<template>
  <div class="setting_container">
    <header>
      <page-header></page-header>
    </header>
    <section>
      <page-dashboard title="사용자"></page-dashboard>
    </section>
    <section class="double_column_body">
      <user-sidebar></user-sidebar>
      <user-profile-detail></user-profile-detail>
    </section>
    <section>
    </section>
  </div>
</template>

<script setup>
import PageDashboard from "@/components/commons/dashboards/PageDashboard.vue";
import PageHeader from "@/components/commons/headers/PageHeader.vue";
import UserProfileDetail from "@/components/domains/auths/UserProfileDetail.vue";
import UserSidebar from "@/components/domains/auths/sidebars/UserSidebar.vue";
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

