<template>
  <div class="calendar_container">
    <vue-cal></vue-cal>
  </div>
</template>

<script setup>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
</script>

<style scoped>
.calendar_container{
  width: 100%;
  height: 600px;
}
</style>
