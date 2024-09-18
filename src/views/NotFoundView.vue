<template>
  <div>없는 페이지입니다.</div>
  <button @click="gotoMainPage">메인 페이지로</button>
</template>

<script setup>
import index from "@/routers/index.js";

function gotoMainPage() {
  index.push("/")
}
</script>

<style scoped>
</style>
