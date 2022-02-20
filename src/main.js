import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import axios from "axios";
import "@scss/style.scss";

Vue.config.productionTip = true;

Vue.prototype.$save = window.localStorage;
Vue.prototype.$axios = axios;

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount("#app");
