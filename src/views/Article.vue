<template>
  <div class="flex items-center justify-center pt-[65px] h-52 relative">
    <h1 class="absolute text-4xl font-bold text-secondary dark:text-dark-secondary">Articles</h1>
  </div>

  <div class=" flex items-center justify-center" v-if="authStore.isAuthenticated">
    <router-link to="/create"  class="px-4 py-2 rounded-md mx-auto"
      id="button-color">Create</router-link>
  </div>

  <!-- articles from loacal storage  -->
  <div class="flex flex-wrap justify-center gap-4 my-24 pb-8 overflow-y-hidden">
    <!-- article cards -->
    <div v-for="article in storedUserCreatedArticles" :key="article.title"
      class="flex flex-col p-6 shadow-md rounded-lg w-full max-w-[384px] sm:max-w-sm h-96 border-t border-b border-accent2 border-opacity-30"
      id="main-color">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent2 border-opacity-30">
        {{ article.title.charAt(0).toUpperCase() + article.summary.slice(1) }}
      </h2>
      <p class="flex-1 overflow-hidden  mt-6">
        {{ article.summary.charAt(0).toUpperCase() + article.summary.slice(1) }}
      </p>
      <router-link :to="`/user-created-articles/${article.title}`" class="mt-auto px-4 py-2 rounded-md mx-auto"
        id="button-color">
        Read more
      </router-link>
    </div>
  </div>

  <!-- articles from external api  -->
  <div class="flex flex-wrap justify-center gap-4 my-24">
    <!-- article cards -->
    <div v-for="article in articles" :key="article.title"
      class="flex flex-col p-6 shadow-md rounded-lg w-full max-w-[384px] sm:max-w-sm h-96 border-t border-b border-accent2 border-opacity-30"
      id="main-color">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent2 border-opacity-30">
        {{ article.title.charAt(0).toUpperCase() + article.summary.slice(1) }}
      </h2>
      <p class="flex-1 overflow-hidden mt-6">
        {{ article.summary.charAt(0).toUpperCase() + article.summary.slice(1) }}
      </p>
      <router-link :to="`/articles/${article.title}`" class="mt-auto  px-4 py-2 rounded-md mx-auto" id="button-color">
        Read more
      </router-link>
    </div>
  </div>


  <div>

  </div>
</template>

<script>
import { useAuthStore } from '../stores/AuthStore';
import { useArticleStore } from '../stores/ArticleStore';
import { onMounted, computed } from 'vue';

export default {
  name: 'Articles',

  setup() {
    const authStore = useAuthStore();
    const articlesStore = useArticleStore();

    onMounted(() => {
      if (!articles.length) {
        articlesStore.fetcharticles();
      }
    });

    const articles = computed(() => {
      return articlesStore.articles;
    });

    let storedUserCreatedArticles = localStorage.getItem('userCreatedArticles');
    if (storedUserCreatedArticles) {
      storedUserCreatedArticles = JSON.parse(storedUserCreatedArticles);
      console.log('userCreatedArticles loaded from local storage:', storedUserCreatedArticles);
    }


    return {
      articles,
      storedUserCreatedArticles,
      authStore
    };
  },
};
</script>