import { createApp } from "vue";
import store from "./plugins/pinia";
import "./style.css";
import "./color.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";
import index from "@/routers/index.js";
import {aliases, mdi} from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        }
    }
});
const app = createApp(App);

app.use(index);
app.use(vuetify);
app.use(store);

app.mount("#app");
