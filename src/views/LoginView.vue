<template>
  <header>
    <page-header></page-header>
  </header>
  <section>
    <page-dashboard title="로그인"></page-dashboard>
  </section>
  <div class="single_column_body">
    <login-form></login-form>
  </div>
</template>
<script setup>

import PageHeader from "@/components/commons/headers/PageHeader.vue";
import PageDashboard from "@/components/commons/dashboards/PageDashboard.vue";
import LoginForm from "@/components/domains/auths/LoginForm.vue";
</script>

<style scoped>
.single_column_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 0 20px 20px;
}
</style>
