export default {
  path: "/fighting",
  redirect: "/fighting/index",
  meta: {
    icon: "noto:goose",
    title: "加油",
    rank: 10
  },
  children: [
    {
      path: "/fighting/index",
      name: "Fighting",
      component: () => import("@/views/fighting/index.vue"),
      meta: {
        title: "加油",
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
