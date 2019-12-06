import Vue from "vue";
import App from "./App.vue";
// import yfui from "./components/index";
import yfui from "../package/dev/yfui";
// import "./components/index.scss";
import "../package/dev/yfui.min.css";
Vue.config.productionTip = false;
Vue.use(yfui);
new Vue({
  render: h => h(App)
}).$mount("#app");
