import Vue from "vue";
import commonFn from "@/commons/commonFunction.js";
import {CommonEnum} from "@/commons/commonEnumeration.js";
import useToast from 'vue-toast-notification';

const install = (Vue) => {
  Vue.prototype.$ms = Vue.prototype.$ms ? Vue.prototype.$ms : {};
  Vue.prototype.$ms.commonFn = commonFn;
  Vue.prototype.$ms.enum = CommonEnum;
  Vue.use(useToast,{
    position:"bottom-right"
  })
};

install(Vue);

export default install;
