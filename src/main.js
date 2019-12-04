import Vue from "vue";
import App from "./App.vue";
import yfui from "../package/prod/yfui.min.js";
import "../package/prod/yfui.min.css";
Vue.config.productionTip = false;
Vue.use(yfui);
new Vue({
  render: h => h(App)
}).$mount("#app");
