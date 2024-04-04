<template>
  <div class="flex justify-center items-center pt-[65px] h-52 relative w-screen">
    <h1 class="text-4xl font-bold dark:text-dark-secondary">Articles</h1>
    <router-link to="/create" v-if="authStore.isAuthenticated" @click="createNewArticle"
      class="dark:text-dark-secondary ">Create New
      article</router-link>

  </div>

  <div class="flex flex-wrap justify-center gap-4 my-24 overflow-y-hidden">

    <div
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">Effectiv
        workflow</h2>
      <p class="flex-1 overflow-hidden text-justify mt-6">This article is about Lorem ipsum est rerum tempore
        vitae
        sequi sint nihil
        reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/articles/m`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary  dark:text-secondary px-4 py-2 rounded-md mx-auto">
        Read more
      </router-link>
    </div>

    <div
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">Effectiv
        workflow</h2>
      <p class="flex-1 overflow-hidden text-justify mt-6">This article is about Lorem ipsum est rerum tempore
        vitae
        sequi sint nihil
        reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/articles/m`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary px-4 py-2 rounded-md mx-auto">
        Read more
      </router-link>
    </div>

    <div
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">Effectiv
        workflow</h2>
      <p class="flex-1 overflow-hidden text-justify mt-6">This article is about Lorem ipsum est rerum tempore
        vitae
        sequi sint nihil
        reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/articles/m`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary px-4 py-2 rounded-md mx-auto">
        Read more
      </router-link>
    </div>

    <div
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">Effectiv
        workflow</h2>
      <p class="flex-1 overflow-hidden text-justify mt-6">This article is about Lorem ipsum est rerum tempore
        vitae
        sequi sint nihil
        reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/articles/m`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary px-4 py-2 rounded-md mx-auto">
        Read more
      </router-link>
    </div>

  </div>

  <div class="w-[80vw] mx-auto border-b border-accent2"></div>

  <div class="flex flex-wrap justify-center gap-4 my-24">
    <!-- article cards -->
    <div v-for="article in articles" :key="article.id"
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <!-- Title area -->
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">
        {{ article.title }}
      </h2>
      <!-- Summary area -->
      <p class="flex-1 overflow-hidden text-justify mt-6">
        {{ article.summary }}
      </p>
      <!-- Button area -->
      <router-link :to="`/articles/${article.id}`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary px-4 py-2 rounded-md mx-auto">
        Read more
      </router-link>
    </div>
  </div>


  <div>

  </div>
</template>

<script>
import { useArticleStore } from '../stores/ArticleStore';
import { useAuthStore } from '../stores/AuthStore';
import { onMounted, computed } from 'vue';

export default {
  name: 'Articles',
  setup() {
    const articlesStore = useArticleStore();
    const authStore = useAuthStore();

    onMounted(() => {
      if (!articlesStore.articles.length) {
        articlesStore.fetcharticles();
      }
    });

    const articles = computed(() => {
      return articlesStore.articles;
    });

    const createNewArticle = () => {
      console.log('create a new article');
    };

    return {
      articles,
      createNewArticle,
      authStore
    };
  },
};
</script>