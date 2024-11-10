import axios from "axios";
import router from "@/routers";
import { useAuthStore } from "@/stores/authStore.js";


// Setup server connection instance
// export const SERVER_URL = import.meta.env.DEV ? "http://localhost/aeum-contents" : "http://api.aidmtlabs.com/aeum-contents";
export const RESOURCE_SERVER_URL = "http://localhost:3000";
export const APIServer = axios.create({
  baseURL: RESOURCE_SERVER_URL,
});

// Language Codes
const LANGUAGE_CODE_MAP = {
  ko: { seq: 1, code: "ko", label: "한국어" },
  en: { seq: 2, code: "en", label: "영어" },
  ja: { seq: 3, code: "ja", label: "일본어" },
  "zh-cn": { seq: 4, code: "zh-cn", label: "중국어(간체)" },
  de: { seq: 5, code: "de", label: "독일어" },
  fr: { seq: 6, code: "fr", label: "프랑스어" },
  es: { seq: 7, code: "es", label: "스페인어" },
  pt: { seq: 8, code: "pt", label: "포르투갈어" },
  it: { seq: 9, code: "it", label: "이태리어" },
  ru: { seq: 10, code: "ru", label: "러시아어" },
  vi: { seq: 11, code: "vi", label: "베트남어" },
};


// Request Interceptor for injecting access token
APIServer.interceptors.request.use(
  config => {
    config.headers.Authorization = useAuthStore().accessToken;
    return config;
  }, err => Promise.reject(err));

// Response Interceptor for handling common errors
APIServer.interceptors.response.use(
  res => res,
  async err => {
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 400:
          if (err.response.data["_metadata"]) {
            console.warn(err.response.data["_metadata"]["exception"]);
            alert(`[API 에러]\n${ err.response.data["_metadata"]["message"] }`);
          }
          break;
        case 401:
        case 403:
          alert("[계정정보 에러]\n계정 정보가 올바르지 않습니다.\n메인 화면으로 이동합니다.");
          this.resetForLogout();
          await router.push("/");
          break;
        case 500:
          alert("[서버 에러]\n알 수 없는 서버 에러가 발생하였습니다.\n 나중에 다시 시도해 주세요.");
          break;
        default:
          alert("[에러]\n알 수 없는 원인 불명의 에러가 발생하였습니다.\n 나중에 다시 시도해 주세요.");
          break;
      }
    } else {
      alert("[통신 에러]\n서버와의 네트워크 연결이 끊어졌습니다.\n");
    }
    return Promise.reject(err);
  }
)

export default {
  RESOURCE_SERVER_URL, LANGUAGE_CODE_MAP, APIServerURL: APIServer,
  async executeAPI(method, url, payload, onSuccess, onFailure, reqTypeHeader=null) {
    try {
      const res = await APIServer.request({
        method, url,
        data: (method === "POST" || method === "PATCH" || method === "PUT") ? payload : null,
        params: (method === "GET" || method === "DELETE") ? payload : null,
        headers: reqTypeHeader ? { "Request-Type": reqTypeHeader } : null,
      });
      if (onSuccess && typeof onSuccess === "function") {
        onSuccess(res);
      } else {
        return res;
      }
    } catch (err) {
      if (onFailure && typeof onFailure === "function") {
        onFailure(err);
      }
    }
  },
  resetForLogout() {
    // 로그인 타이머 해제
    clearInterval(useAuthStore()["loginTimer"]);
    useAuthStore().$reset();
    window.localStorage.clear();
  },
  parseLanguageCode(localeCode) {
    return LANGUAGE_CODE_MAP[localeCode] ? LANGUAGE_CODE_MAP[localeCode] : { seq: 100000, code: localeCode, label: `알 수 없음(${ localeCode })` };
  },
  parseLanguageCodes(languageCodes) {
    const result = languageCodes.sort((a, b) => LANGUAGE_CODE_MAP[a]["seq"] - LANGUAGE_CODE_MAP[b]["seq"]);
    return result.map(l => this.parseLanguageCode(l));
  },
  setupResetFields(inputDTO, defaultEntity, fieldName, fieldCode) {
    // Set resetField if field removed which is exists on previous entity
    if (defaultEntity[fieldName] && (!inputDTO[fieldName] || !inputDTO[fieldName].length)) {
      // If field is not null (ex: "" - empty string), make it null
      if (inputDTO[fieldName]) {
        inputDTO[fieldName] = null;
      }
      // If field code is not exists on resetfield, set code
      if (!inputDTO.resetFields.includes(fieldCode)) {
        inputDTO.resetFields.push(fieldCode);
      }
    }
    // Unset resetField if field regenerated after removal which is exists on previous entity
    if (inputDTO.resetFields.includes(fieldCode) && inputDTO[fieldName]) {
      const fieldIdx = inputDTO.resetFields.indexOf(fieldCode);
      if (fieldIdx >= 0) {
        inputDTO.resetFields.splice(fieldIdx, 1);
      }
    }
    return inputDTO.resetFields;
  }
}
