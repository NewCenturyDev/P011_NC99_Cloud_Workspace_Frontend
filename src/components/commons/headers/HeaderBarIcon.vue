<template>
  <div class="header_bar_icon">
    <v-menu>
      <template v-slot:activator="{ props }">
        <div class="profile_img" v-bind="props"></div>
      </template>
      <v-list class="header_icon_menu" density="compact">
        <v-list-item>
          <h5 class="header_icon_email">
            {{ authStore.profile && authStore.profile['email'] ? authStore.profile['email'] : '유저정보없음' }}
          </h5>
        </v-list-item>
        <v-list-item>
          <v-btn @click="authStore.reqLogout" :block="true" variant="outlined" color="error">로그아웃</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import {useAuthStore} from "@/stores/authStore.js";

const authStore = useAuthStore();
</script>

<style scoped>
.header_bar_icon {
  display: flex;
  justify-content: flex-end;
}

.profile_img {
  width: 32px;
  height: 32px;
  background-color: #D9D9D9;
  border-radius: 9999px;
  user-select: none;
  cursor: pointer;
}

.header_icon_menu {
  width: 200px;
  border: 1px solid var(--primary-navy);
}

.header_icon_email {
  width: 100%;
  height: 20px;
  text-overflow: ellipsis;
  word-break: keep-all;
}
</style>
