import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Articles from "../views/Article.vue";
import CreateArticle from "../views/CreateArticle.vue";
import ArticleDetail from "../views/ArticleDetail.vue";
import NotFound from "../views/NotFound.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/articles/:title",
      component: ArticleDetail,
      props: true,
    },
    {
      path: "/user-created-articles/:title",
      component: ArticleDetail,
      props: true,
    },
    {
      path: "/create",
      component: CreateArticle,
      name: "CreateArticle",
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ],
});

export default router;
