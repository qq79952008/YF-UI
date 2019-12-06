import Button from "./button";
import Icon from "./icon";
import "./index.scss";
const components = {
  Button,
  Icon
};

const install = function(Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  components
};

export default API;
