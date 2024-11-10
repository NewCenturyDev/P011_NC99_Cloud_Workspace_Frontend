// Pinia 상태 관리 라이브러리
import { createPinia } from 'pinia';
import persistState from 'pinia-plugin-persistedstate';
import cloneDeep from "lodash.clonedeep";

const store = createPinia();

function resetStore({ store }) {
  const initialState = cloneDeep(store.$state);
  store.$reset = () => store.$patch(cloneDeep(initialState));
}

store.use(persistState)
store.use(resetStore);
export default store;
