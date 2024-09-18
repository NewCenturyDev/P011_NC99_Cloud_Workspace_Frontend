<template>
  <div class="sort_bar_container">
    <v-divider></v-divider>
    <div class="sort_bar_content">
      <div class="label_entity_check"></div>
      <div class="label_entity_type">종류</div>
      <div class="label_entity_name">이름</div>
      <div class="label_entity_size">크기</div>
      <div class="label_entity_timestamp">수정한 날짜</div>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sort_bar_container {
  width: 100%;
  height: 30px;
  margin-top: 18px;
}
.sort_bar_content {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
  height: 30px;
  padding: 0 15px;
}
.label_entity_check, .label_entity_type {
  width: 40px;
  height: 30px;
  text-align: center;
}
.label_entity_name {
  width: calc(100% - 450px);
  height: 30px;
  text-align: left;
}
.label_entity_size {
  width: 175px;
  height: 30px;
  text-align: right;
}
.label_entity_timestamp {
  width: 225px;
  height: 30px;
  text-align: right;
}

</style>
