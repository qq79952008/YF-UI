import Icon from "./icon.vue";
import "./font/iconfont";
Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;
