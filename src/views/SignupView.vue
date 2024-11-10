<template>
  <header>
    <page-header></page-header>
  </header>
  <section>
    <page-dashboard title="회원가입"></page-dashboard>
  </section>
  <div class="single_column_body">
    <signup-form></signup-form>
  </div>
</template>
<script setup>

import PageHeader from "@/components/commons/headers/PageHeader.vue";
import PageDashboard from "@/components/commons/dashboards/PageDashboard.vue";
import SignupForm from "@/components/domains/auths/SignupForm.vue";
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
