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
  display: flex;
  flex-direction: column;
  width: calc(100vw - 296px);
  min-width: 320px;
  height: 100%;
  padding: 26px 32px;
  background-color: var(--background-assistive);
  border-radius: 20px;
}
</style>
