import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: () => import("../features/home/view/HomePageView.vue") },
    { path: "/docs", name: "docs", component: () => import("../features/docs-center/view/DocsCenterPageView.vue") },
    {
      path: "/docs/reader",
      name: "docs-reader",
      component: () => import("../features/docs-reader/view/DocsReaderPageView.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
