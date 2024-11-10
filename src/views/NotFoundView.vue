<template>
  <header>
    <page-header></page-header>
  </header>
  <section>
    <page-dashboard title="404: 존재하지 않는 페이지입니다"></page-dashboard>
  </section>
  <div class="single_column_body">
    <div class="goto_main_btn" @click="gotoMainPage">메인 페이지로</div>
  </div>
</template>

<script setup>
import index from "@/routers/index.js";
import PageHeader from "@/components/commons/headers/PageHeader.vue";
import PageDashboard from "@/components/commons/dashboards/PageDashboard.vue";
import {useAuthStore} from "@/stores/authStore.js";

const authStore = useAuthStore();

function gotoMainPage() {
  if (authStore.checkUserLoggedIn()) {
    index.push("/storages");
  } else {
    index.push("/");
  }
}
</script>

<style scoped>
.single_column_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 0 20px 20px;
}

.goto_main_btn {
  width: 100%;
  max-width: 320px;
  height: 50px;
  padding: 12px 30px;
  border-radius: 25px;
  background-color: var(--primary-navy);
  color: var(--background-normal);
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  user-select: none;
  cursor: pointer;
}
</style>
