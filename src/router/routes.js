const routes = [
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/create",
        name: "create",
        component: () => import("pages/Create.vue"),
      },
      {
        path: "/list",
        name: "list",
        component: () => import("pages/CompanyList.vue")
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
