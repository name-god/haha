export default {
  path: "/billing",
  component: () => import("../pages/billing/Billing"),
  children: [
    {
      path: "billingDetails",
      component: () => import("../pages/billing/children/billingDetails")
    }
  ]
};
