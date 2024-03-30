import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Blogs from "../views/Blogs.vue";

import { createRouter, createWebHistory } from "vue-router";
import BlogDetail from "../views/BlogDetail.vue";

const routes = [
  { path: "/blogs", component: Blogs },
  { path: "/blogs/:id", component: BlogDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    routes,
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/blogs",
      name: "Blogs",
      component: Blogs,
    },
    {
      path: "/blogs/:id",
      component: BlogDetail,
      props: true,
    },
  ],
});

export default router;
