<template>
  <div class="command_bar_container">
    <command-button :width="75" variant="flat" class="upload_btn">
      <v-icon icon="mdi-upload"></v-icon>
      올리기
    </command-button>
    <v-spacer class="command_bar_spacer"></v-spacer>
    <command-button :width="65" variant="outlined">
      새 폴더
    </command-button>
    <v-spacer class="command_bar_spacer"></v-spacer>
    <command-button :width="75" variant="outlined">
      내려받기
    </command-button>
    <v-spacer class="command_bar_spacer"></v-spacer>
    <command-button :width="45" variant="outlined">
      공유
    </command-button>
    <v-spacer class="command_bar_spacer"></v-spacer>
    <command-button :width="45" variant="outlined">
      삭제
    </command-button>
    <v-spacer class="command_bar_spacer"></v-spacer>
    <command-button :width="45" variant="outlined">
      ...
    </command-button>
    <v-spacer></v-spacer>
    <command-button :width="40" variant="icon">
      <v-icon icon="mdi-information-outline">

      </v-icon>
    </command-button>
  </div>
</template>

<script setup>
import CommandButton from "@/components/domains/files/commands/CommandButton.vue";

</script>

<style scoped>
.command_bar_container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.upload_btn:deep(.v-btn) {
  background-color: var(--primary-color);
  color: #FFFFFF;
}
.command_bar_spacer {
  width: 10px;
  flex-grow: 0;
}
</style>
