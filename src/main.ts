import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Equal from "equal-vue";

createApp(App).use(Equal).use(store).use(router).mount("#app");
