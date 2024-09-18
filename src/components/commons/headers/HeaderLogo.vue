<template>
  <span>
    <v-img
        :width="props.width" :height="props.height" :src="props.src"
        class="company_logo" @click="gotoPage(props.url)"
    ></v-img>
  </span>
</template>

<script setup>
import router from "@/routers/index.js";

const props = defineProps({src: String, width: Number, height: Number, url: String});

function gotoPage(targetURL) {
  if (targetURL.includes("://")) {
    window.open(targetURL);
  } else {
    router.push(targetURL)
  }
}
</script>

<style scoped>
.company_logo {
  width: 200px;
  height: 50px;
  cursor: pointer;
}
</style>
