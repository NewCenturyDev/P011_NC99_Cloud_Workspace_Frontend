<template>
  <command-button id="extra_menu_activator" :width="45" variant="outlined">
    ...
  </command-button>
  <v-menu activator="#extra_menu_activator">
    <v-list class="command_extra_menu_dropdown_list">
      <v-list-item density="compact" @click="console.log('test')">
        <v-list-item-title class="command_extra_menu_dropdown_list_title">
          잘라내기
        </v-list-item-title>
      </v-list-item>
      <v-list-item density="compact" @click="console.log('test')">
        <v-list-item-title class="command_extra_menu_dropdown_list_title">
          복사
        </v-list-item-title>
      </v-list-item>
      <v-list-item density="compact" @click="console.log('test')">
        <v-list-item-title class="command_extra_menu_dropdown_list_title">
          붙여넣기
        </v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item density="compact" @click="console.log('test')">
        <v-list-item-title class="command_extra_menu_dropdown_list_title">
          이동
        </v-list-item-title>
      </v-list-item>
      <v-list-item density="compact" @click="console.log('test')">
        <v-list-item-title class="command_extra_menu_dropdown_list_title">
          이름 바꾸기
        </v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item density="compact" @click="console.log('test')">
        <v-list-item-title class="command_extra_menu_dropdown_list_title">
          상세정보
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import CommandButton from "@/components/domains/files/commands/CommandButton.vue";
</script>

<style scoped>
.command_extra_menu_dropdown_list {
  padding: 0;
}
.command_extra_menu_dropdown_list_title {
  font-size: 14px;
  font-weight: bold;
}
</style>
