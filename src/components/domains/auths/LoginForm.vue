<template>
  <div class="login_form_container">
    <auth-input-field
      label="이메일"
      placeholder="이메일을 입력해주세요."
      :err-msg="errorMsg"
      @update="(em) => authStore.loginDTO.email = em"
    ></auth-input-field>
    <auth-password-field
      label="비밀번호"
      placeholder="비밀번호를 입력해주세요."
      :err-msg="errorMsg"
      @update="(pw) => authStore.loginDTO.password = pw"
    ></auth-password-field>
    <div class="login_form_btn" @click="authStore.reqLogin(errHandler)">계속하기</div>
    <div class="login_form_link">
      계정이 없으신가요? <a href="/#/signup">회원가입</a>
    </div>
    <div class="login_form_term">
      <a href="/#/term">서비스 이용약관</a>
      <div></div>
      <a href="/#/privacy">개인정보 보호 정책</a>
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
.login_form_container {
  width: 335px;
  min-width: 280px;
  height: 100%;
}

.login_form_icon {
  width: 40px;
  height: 40px;
}
.login_form_btn {
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
.login_form_link {
  margin-top: 32px;
  user-select: none;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
.login_form_link a {
  color: #1A95CD;
}
.login_form_term {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 125px;
}
.login_form_term div {
  height: 16px;
  margin: 0 10px;
  border: 1px solid var(--label-alternative);
}
.login_form_term a {
  color: var(--label-alternative);
  user-select: none;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
</style>
