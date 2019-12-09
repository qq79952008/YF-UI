import LongList from "./longList.vue";

LongList.install = function(Vue) {
  Vue.component(LongList.name, LongList);
};

export default LongList;
