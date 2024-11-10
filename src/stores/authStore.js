import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/env";
import axios from "axios";
import storeUtil from "@/stores/utils/storeUtil";
import router from "@/routers";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const useAuthStore = defineStore("auth", () => {
  /* State */
  const profile = ref({});
  const accessToken = ref(null);
  const accessTokenExpire = ref(null);
  const refreshToken = ref(null);
  const loginTimer = ref(null);
  const loginTimerLeft = ref(null);

  async function reqLogin(email, password, onFailure = null) {
    try {
      const loginDTO = {email, password};

      const res = await axios.post(`${api.APIServerURL}/auths/login`, loginDTO);
      if (res.data["profile"]["verified"]) {
        accessToken.value = `Bearer ${ res.data["accessToken"]["tokenValue"] }`;
        accessTokenExpire.value = new Date(res.data["accessToken"]["expiresAt"] * 1000);
        refreshToken.value = res.data["refreshToken"]["tokenValue"];
        profile.value = res.data["profile"];
        setupLoginTimer();
        await router.push("/storages");
      } else {
        alert("이메일 인증이 되지 않은 계정입니다. 이메일을 인증받은 후 다시 로그인하시기 바랍니다.\n관련문의: 02-0000-0000");
      }
    } catch (err) {
      if (onFailure && err.name === "AxiosError") {
        if (err.response.data["_metadata"] && err.response.data["_metadata"]["exception"] === "error.auth.password") {
          onFailure("이메일 또는 비밀번호가 잘못되었습니다");
        } else if (err.response.status === 400) {
          onFailure("사용자 정보가 올바르게 입력되지 않았습니다");
        } else if (err.response.status === 401) {
          onFailure("존재하지 않는 계정이거나 인증예외(차단된 계정 등)가 발생했습니다");
        } else {
          onFailure(err.message);
        }
      } else {
        console.warn(err);
      }
    }
  }

  async function reqRefreshAccessToken() {
    try {
      const refreshDTO = {refreshToken: refreshToken.value};
      const response = await axios.post(`${ api.APIServerURL }/auths/refresh`, refreshDTO);

      // Refresh token
      accessToken.value = `Bearer ${ response.data["accessToken"]["tokenValue"] }`;
      accessTokenExpire.value = new Date(response.data["accessToken"]["expiresAt"] * 1000);

      // Refresh timer
      clearInterval(loginTimer.value);
      setupLoginTimer();
    } catch (error) {
      if (error.name === "AxiosError") {
        if (error.response.status === 401) {
          alert("리프레시 토큰 유효기간(30일)이 만료되었거나,\n 인증 정보에 오류가 발생하였습니다.\n 다시 로그인해주세요.");
        } else {
          alert(error.message);
        }
        await logoutWhenTimerExpired();
      } else {
        console.warn(error);
      }
    }
  }

  const setupLoginTimer = () => {
    if (checkUserLoggedIn()) {
      loginTimer.value = setInterval(checkAccessTokenExpired, 1000);
    }
  }
  const checkAccessTokenExpired = () => {
    if (checkUserLoggedIn()) {
      loginTimerLeft.value = dayjs.utc(accessTokenExpire.value).tz("Asia/Seoul").diff(dayjs(), "second");
      if (loginTimerLeft.value <= 0) {
        alert("30분 이상 API 통신이 없음으로, 억세스토큰 만료시간에 따라 로그아웃 합니다. (자리비움 방지)");
        logoutWhenTimerExpired();
      }
    } else {
      clearInterval(loginTimer.value);
    }
  }
  const logoutWhenTimerExpired = () => {
    storeUtil.resetForLogout();
    router.replace("/").then(null);
  }

  const checkUserLoggedIn = () => {
    const isTokenAlive = dayjs(dayjs()).isBefore(dayjs.utc(accessTokenExpire.value).tz("Asia/Seoul"));
    return accessToken.value && refreshToken.value && isTokenAlive;
  }


  return {
    profile,
    accessToken,
    refreshToken,
    accessTokenExpire,
    loginTimer,
    loginTimerLeft,
    reqLogin,
    reqRefreshAccessToken,
    setupLoginTimer,
    checkUserLoggedIn
  };
});
