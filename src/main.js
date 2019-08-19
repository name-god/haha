import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
