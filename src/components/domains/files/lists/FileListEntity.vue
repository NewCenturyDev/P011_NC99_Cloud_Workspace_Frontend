<template>
  <div class="file_entity_container">
    <div class="file_entity_check">
      <v-checkbox density="compact" :hide-details="true"></v-checkbox>
    </div>
    <div class="file_entity_icon">
      <v-icon icon="mdi-file"></v-icon>
    </div>
    <div class="file_entity_name file_entity_text">
      {{ props.metadata["fileName"] }}
    </div>
    <div class="file_entity_size file_entity_text">
      {{ parseFileSize(props.metadata["fileSize"]) }}
    </div>
    <div class="file_entity_timestamp file_entity_text">
      {{ parseFileTimestamp(props.metadata["timestamp"]) }}
    </div>
  </div>
  <v-divider></v-divider>
</template>

<script setup>
import dayjs from "dayjs";


const props = defineProps({ metadata: Object });


function parseFileSize(fileSize) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;

  // Ensure that the file size is valid
  if (fileSize <= 0) return '0 Bytes';

  // Keep dividing by 1024 to move to the next unit
  while (fileSize >= 1024 && index < units.length - 1) {
    fileSize /= 1024;
    index++;
  }

  // Limit the output to 1 decimal place for readability
  return `${fileSize.toFixed(1)} ${units[index]}`;
}

function parseFileTimestamp(timestamp) {
  const date = dayjs(timestamp, "YYYY-MM-DDTHH:mm:ss", "Asia/Seoul");
  console.log(timestamp)
  console.log(date.hour())
  return `${date.year()}. ${date.month() + 1}. ${date.date()} ${date.hour() > 12 ? "오전" : "오후"} ${date.hour() > 12 ? String(date.hour() - 12).padStart(2, "0") : String(date.hour()).padStart(2, "0")}:${String(date.minute()).padStart(2, "0")}`;
}
</script>

<style scoped>
.file_entity_container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  font-size: 18px;
}
.file_entity_container:hover {
  cursor: pointer;
  background-color: rgba(69, 121, 256, 0.2);
}
.file_entity_check, .file_entity_icon {
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: center;
}
.file_entity_text {
  line-height: 40px;
  font-size: 14px;
  user-select: none;
}
.file_entity_name {
  width: calc(100% - 450px);
}
.file_entity_size {
  width: 175px;
  text-align: right;
}
.file_entity_timestamp {
  width: 225px;
  text-align: right;
}
</style>
