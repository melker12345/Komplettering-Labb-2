<template>
<div class="flex items-center justify-center pt-[65px] h-52 relative">
  <h1 class="absolute text-4xl font-bold text-secondary dark:text-dark-secondary">Articles</h1>
  <div class="absolute right-0 mr-24 flex items-center justify-center" v-if="authStore.isAuthenticated">
    <router-link to="/create" @click="createNewArticle"
    class="px-4 py-2 rounded-md mx-auto" id="secondary-color">Create</router-link>
  </div>
</div>


  <!-- this should render "old" articles from the local storage and get updated once the userCreatedArticle list in the pinia store is updated  -->
  <div class="flex flex-wrap justify-center gap-4 my-24 pb-8 overflow-y-hidden">
    <!-- article cards -->
    <div v-for="article in storedUserCreatedArticles" :key="article.title"
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 border-t border-b border-accent1 border-opacity-30" id="main-color">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">
        {{ article.title }}
      </h2>
      <p class="flex-1 overflow-hidden text-justify mt-6">
        {{ article.summary }}
      </p>
      <router-link :to="`/user-created-articles/${article.title}`"
        class="mt-auto px-4 py-2 rounded-md mx-auto" id="button-color">
        Read more
      </router-link>
    </div>
  </div>

  <!-- articles from external api  -->
  <div class="w-[80vw] mb-8 mx-auto border-b border-accent2"></div>
  <div class="flex flex-wrap justify-center gap-4 my-24">
    <!-- article cards -->
    <div v-for="article in articles" :key="article.title"
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary border-t border-b border-accent1 border-opacity-30">
      <!-- Title area -->
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">
        {{ article.title }}
      </h2>
      <!-- Summary area -->
      <p class="flex-1 overflow-hidden text-justify mt-6">
        {{ article.summary }}
      </p>
      <!-- Button area -->
      <router-link :to="`/articles/${article.title}`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary px-4 py-2 rounded-md mx-auto" id="button-color">
        Read more
      </router-link>
    </div>
  </div>


  <div>

  </div>
</template>

<script>
// i want to take the objects in local storage and put them into the userCreatedArticles array in the pinia store from there i want to render them to the screen via the articels component


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


    // 
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