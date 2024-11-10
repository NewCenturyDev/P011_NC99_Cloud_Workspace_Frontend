<template>
  <div class="signup_form_container">
    <auth-input-field
      label="이메일"
      placeholder="이메일을 입력해주세요."
      :err-msg="errorMsg"
      @update="(em) => authStore.signupDTO.email = em"
    ></auth-input-field>
    <auth-input-field
      label="이름"
      placeholder="이름을 입력해주세요."
      :err-msg="errorMsg"
      @update="(na) => authStore.signupDTO.name = na"
    ></auth-input-field>
    <auth-input-field
      label="휴대전화번호"
      placeholder="휴대전화번호를 입력해주세요."
      :err-msg="errorMsg"
      @update="(hp) => authStore.signupDTO.phone = hp"
    ></auth-input-field>
    <auth-password-field
      label="비밀번호"
      placeholder="비밀번호를 설정해주세요."
      :err-msg="errorMsg"
      @update="(pw) => authStore.signupDTO.password = pw"
    ></auth-password-field>
    <auth-password-field
      label="비밀번호"
      placeholder="비밀번호를 확인해주세요."
      :err-msg="errorMsg"
      @update="(pwc) => authStore.signupDTO.passwordCheck = pwc"
    ></auth-password-field>
    <div class="signup_form_btn" @click="authStore.reqSignup(errHandler)">계속하기</div>
    <div class="signup_form_link">
      <a href="/#/">뒤로가기</a>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useAuthStore} from "@/stores/authStore.js";
import AuthPasswordField from "@/components/domains/auths/AuthPasswordField.vue";
import AuthInputField from "@/components/domains/auths/AuthInputField.vue";

const authStore = useAuthStore();
const errorMsg = ref("");

function errHandler(msg) {
  errorMsg.value = msg;
}
</script>

<style scoped>
.signup_form_container {
  width: 335px;
  min-width: 280px;
  height: 100%;
}
.signup_form_input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  gap: 8px;
}
.signup_form_label {
  color: var(--label-assistive);
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px
}
.signup_form_input {
  margin-bottom: 16px;
}
.signup_form_input:deep(.v-input--density-default) {
  --v-input-control-height: 48px;
  --v-input-padding-top: 0px;
}
.signup_form_input:deep(.v-field) {
  height: 48px;
  border: 1px solid var(--background-alternative);
  border-radius: 10px;
}
.signup_form_input:deep(.v-field--focused) {
  border: 1px solid var(--label-normal);
}
.signup_form_input:deep(.v-field__input) {
  height: 48px;
  padding: 12px;
}

.signup_form_btn {
  width: 100%;
  height: 50px;
  padding: 12px 30px;
  border-radius: 25px;
  background-color: var(--primary-navy);
  color: var(--background-normal);
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  user-select: none;
  cursor: pointer;
}
.signup_form_link {
  margin-top: 32px;
  user-select: none;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
.signup_form_link a {
  color: #1A95CD;
}
</style>
