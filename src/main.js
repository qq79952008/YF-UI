import Vue from "vue";
import App from "./App.vue";
// import yfui from "./components/index";
import yfui from "./components/index";
// import "./components/index.scss";
import "./components/index.scss";
Vue.config.productionTip = false;
Vue.use(yfui);
new Vue({
  render: h => h(App)
}).$mount("#app");
