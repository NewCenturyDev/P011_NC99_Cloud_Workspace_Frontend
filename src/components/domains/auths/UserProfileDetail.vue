<template>
  <div class="user_container">
    <section class="edit_box">
      <h3>내 계정 ({{ store.profile["email"] ? store.profile["email"] : "사용자 이메일 알 수 없음" }})</h3>
      <auth-input-field label="이름" placeholder="이름을 입력하세요"></auth-input-field>
      <auth-input-field label="휴대폰" placeholder="휴대폰 번호를 입력하세요"></auth-input-field>
    </section>
    <section class="edit_box">
      <h3>비밀번호와 인증</h3>
      <v-btn
        class="change_pw_btn"
        variant="outlined"
        density="compact"
        color="var(--primary-navy)"
      >비밀번호 변경하기</v-btn>
    </section>
    <section class="edit_box">
      <h3>계정 탈퇴</h3>
      <v-btn
        class="del_profile_btn"
        variant="outlined"
        density="compact"
      >계정 비활성화</v-btn>
      <v-btn
        class="del_profile_btn"
        variant="outlined"
        density="compact"
        color="red"
      >계정 삭제하기</v-btn>
    </section>
  </div>
</template>

<script setup>
import {ref} from "vue";
import AuthInputField from "@/components/domains/auths/AuthInputField.vue";
import {useAuthStore} from "@/stores/authStore.js";

const store = useAuthStore();

const inputName = ref('이지우')
const inputPhone = ref('010-1234-5678')
</script>

<style scoped>
.user_container{
  display: flex;
  flex-direction: column;
  width: calc(100vw - 296px);
  min-width: 320px;
  height: 100%;
  padding: 26px 32px;
  background-color: var(--background-assistive);
  border-radius: 20px;
}

.edit_box {
  width: 425px;
  max-width: 100%;
}

.edit_box h3 {
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
}
</style>
