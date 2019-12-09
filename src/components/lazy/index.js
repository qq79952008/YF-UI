import Lazy from "./lazy.vue";

Lazy.install = function(Vue) {
  Vue.component(Lazy.name, Lazy);
};
export default Lazy;
