<template>
  <div class="dashboard">
    <div class="dashboard_text">
      {{ props.title}}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ title: String });
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 142px;
  user-select: none;
}
.dashboard_text {
  color: #383981;
  font-size: 32px;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  line-height: 36px;
  word-wrap: break-word;
}
</style>
