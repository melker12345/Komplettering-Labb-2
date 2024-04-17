// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/AuthStore';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Articles from '../views/Article.vue';
import CreateArticle from '../views/CreateArticle.vue';
import ArticleDetail from '../views/ArticleDetail.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/articles', name: 'Articles', component: Articles },
    { path: '/articles/:title', component: ArticleDetail, props: true },
    {
      path: '/user-created-articles/:title',
      component: ArticleDetail,
      props: true,
    },
    {
      path: '/create',
      component: CreateArticle,
      name: 'CreateArticle',
      meta: { requiresAuth: true },
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});

// make sure that the user is authenticated before accessing the create article page otherwise redirect to the home page.
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
