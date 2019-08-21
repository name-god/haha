export default {
  path: "/mine",
  component: () => import("../pages/mine/Mine"),
  children: [
    // 设置
    {
      path: "/mine/setting",
      component: () => import("../pages/mine/children/Setting")
    },
    {
      path: "/mine/info",
      component: () => import("../pages/mine/children/Info")
    },
    {
      path: "/mine/inform",
      component: () => import("../pages/mine/children/Inform")
    },
    {
      path: "/mine/bill",
      component: () => import("../pages/mine/children/Bill")
    }
  ]
};
