import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Equal from "equal-vue";

import VueApexCharts from "vue3-apexcharts";


import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

import Navbar from "@/components/Navbar.vue";

import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import "../src/assets/scss/main.scss";
// import "./assets/css/custome.css";
// import "./assets/css/popup.css";
// import "./assets/css/style.css";
// import "./components/validation/errorMessage";

const app = createApp(App);
app.component('layout',Navbar)

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(Equal); app.use(store); app.use(router);
app.use(BootstrapVue3);


app.use(VueApexCharts);


createApp(App)
app.mount("#app")