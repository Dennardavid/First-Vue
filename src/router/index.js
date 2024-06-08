import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/repos",
      name: "myrepos",
      component: () => import("../views/MyRepos.vue"),
    },
    {
      path: "/repodetails/:id",
      name: "repodetails",
      component: () => import("../views/AboutView.vue"),
    },
    /* {
      path: "/:catchAll(.*)",
      name: "error",
      component: ErrorPage,
    }, */
  ],
});

export default router;
