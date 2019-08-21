import Vue from "vue";
import Router from "vue-router";

import home from "./homeRouter";
import billing from "./billingRouter";
import login from "./loginRouter";
import mine from "./mineRouter";

Vue.use(Router);

const routes = [
  home,
  billing,
  login,
  mine,
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/pageBill",
    component: () => import("../pages/pageBill")
  },
  {
    path: "/tologin",
    component: () => import("../pages/tologin")
  },
  {
    path: "/torigster",
    component: () => import("../pages/torigster")
  }
];

export default new Router({
  mode: "history",
  routes
});
