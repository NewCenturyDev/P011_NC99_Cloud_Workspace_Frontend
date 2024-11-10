<template>
  <div class="header_bar_left">
    <!--suppress JSValidateTypes -->
    <v-img class="header_logo" :src="kistiLogoImg" alt="Logo" max-height="40" />
    <div class="header_text">업무지원서비스</div>
  </div>
</template>

<script setup>
import kistiLogoImg from "@/assets/kisti_logo.png";

</script>

<style scoped>
.header_bar_left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
}

.header_logo {
  display: block;
  width: 200px;
  height: 40px;
  margin-right: 12px;
}

.header_text {
  color: #383981;
  font-size: 20px;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  line-height: 30px;
  word-wrap: break-word
}
</style>
