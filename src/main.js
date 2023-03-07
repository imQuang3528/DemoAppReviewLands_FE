import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./routers/router";

import "@/commons/globalComponent";
import "@/commons/globalPlugin";

import "@/assets/scss/common.scss";
import "@/assets/scss/sizeCommon.scss";
import "@/assets/scss/BaseColor.scss";
import "@/assets/scss/FontSizeCommon.scss";
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
