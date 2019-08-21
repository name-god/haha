import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/store";

import { Picker } from "mint-ui";
Vue.component(Picker.name, Picker);

import {
  Button,
  field,
  Tab,
  Tabs,
  List,
  NumberKeyboard,
  Toast,
  ActionSheet,
  DropdownMenu,
  DropdownItem,
  Circle
} from "vant";

Vue.use(NumberKeyboard)
  .use(Button)
  .use(field)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(ActionSheet)
  .use(Toast)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Circle);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
