import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Articles from "../views/Article.vue";
import CreateArticle from "../views/CreateArticle.vue";

import { createRouter, createWebHistory } from "vue-router";
import ArticleDetail from "../views/ArticleDetail.vue";

const routes = [
  { path: "/articles", component: Articles },
  { path: "/articles/:id", component: ArticleDetail, props: true },
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
      path: "/articles",
      name: "Articles",
      component: Articles,
    },
    {
      path: "/articles/:id",
      component: ArticleDetail,
      props: true,
    },
    {
      path: "/create",
      component: CreateArticle,
      name: "CreateArticle",
    },
  ],
});

export default router;
