<template>
  <section class="h-[60vh] flex flex-col items-center pt-12 md:pt-48 mt-10 md:mt-40" id="hero">
    <div class="container mx-auto text-center">
      <h1 class="text-3xl md:text-5xl font-bold p-2 text-secondary dark:text-dark-secondary">
        Create and share your articles
      </h1>
    </div>
  </section>

  <!-- Article Posts Section -->
  <section class="py-12">
    <div class="container mx-auto px-4">
      <!-- Flex container to handle layout -->
      <div class="flex flex-col md:flex-row justify-center md:gap-20 lg:gap-40">
        <!-- Left Column Cards -->
        <div class="flex flex-col items-center w-full md:w-1/2">
          <!-- Card 1 -->
          <div v-for="(article, index) in articles.slice(0, 2)" :key="index"
            class="rounded-2xl shadow-sm flex flex-col justify-between p-10 mb-20 border-t border-b border-accent2 border-opacity-30"
            :class="{ 'w-full lg:max-w-[30vw]': !article.expanded, 'w-full lg:max-w-[60vw] z-10 relative mx-auto': article.expanded }"
            id="main-color" @click="toggleExpand(article, index)">
            <h3 class="text-3xl font-bold mb-4 pb-8 text-center border-b border-accent2 border-opacity-30">
              {{ article.title }}
            </h3>
            <div v-if="!article.expanded">{{ article.summary }}</div>
            <div v-else v-html="article.content"></div>
            <button class="w-fit px-4 py-2 rounded-md mt-12 mx-auto" id="button-color">Read more</button>
          </div>
        </div>
        <!-- Right Column Cards, offset downwards on larger screens -->
        <div class="flex flex-col items-center w-full md:w-1/2 md:mt-20">
          <!-- Card 2 -->
          <div v-for="(article, index) in articles.slice(2, 4)" :key="index + 2"
            class="rounded-2xl shadow-sm flex flex-col justify-between p-10 mb-20 border-t border-b border-accent2 border-opacity-30"
            :class="{ 'w-full lg:max-w-[30vw]': !article.expanded, 'w-full lg:max-w-[60vw] z-10 relative mx-auto': article.expanded }"
            id="main-color" @click="toggleExpand(article, index + 2)">
            <h3 class="text-3xl font-bold mb-4 pb-8 text-center border-b border-accent2 border-opacity-30">
              {{ article.title }}
            </h3>
            <div v-if="!article.expanded">{{ article.summary }}</div>
            <div v-else v-html="article.content"></div>
            <button class="w-fit px-4 py-2 rounded-md mt-12 mx-auto" id="button-color">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 mt-24  mb-60 ">
    <h2 class="text-3xl font-semibold text-center my-10 pb-10 text-secondary dark:text-dark-secondary">Contact Us</h2>
    <div
      class="container flex flex-col w-3/5 min-w-[350px] max-w-[600px] mx-auto rounded-xl shadow-lg p-6 border-t border-b border-accent1 border-opacity-30"
      id="main-color">
      <form>
        <div class="mb-4">
          <label for="name" class="block mb-2 mx-1">Name:</label>
          <input type="text" id="name"
            class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-white dark:bg-black dark:bg-opacity-50">
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2 mx-1">Email:</label>
          <input type="email" id="email"
            class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-white dark:bg-black dark:bg-opacity-50">
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-2 mx-1 font-normal">Message:</label>
          <textarea id="message" rows="4"
            class="my-2 mx-1 p-2 justify-center h-48 w-[95%] resize-none rounded-md shadow-sm bg-white dark:bg-black dark:bg-opacity-50"></textarea>
        </div>
        <div class="w-full flex justify-center">
          <button type="submit"
            class="justify-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            id="button-color">
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>

  <!-- Modal for expanded article -->
  <div v-if="expandedArticle" class="fixed inset-0 z-3 flex items-center justify-center p-4 bg-black bg-opacity-60  ">
    <div class="rounded-xl shadow-xl p-4 px-8 max-w-[50vw] w-full overflow-hidden h-[90vh] mt-10 " id="main-color">
      <button @click="expandedArticle = !expandedArticle" onclick="document.body.style.overflow = '' "
        class="w-full flex justify-end mb-4 text-secondary dark:text-dark-secondary text-2xl">&times;</button>
      <div class="overflow-y-auto max-h-[calc(90vh-100px)]" id="markdown-editor" v-html="expandedArticle.content"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { ref } from 'vue';

export default {
  name: 'HomePage',
  setup() {
    const articles = ref([
      { id: 1, title: "Project Documentation", summary: "The document outlines a Vue 3 web application using TailwindCSS, Pinia, Marked, DOMPurify, and Axios, focusing on data management and styling. It details functionalities like article viewing, user-created content, and authentication, along with responsive design issues. Future enhancements and technical considerations include implementing article management features, enhancing type safety with TypeScript, and securing user sessions. The application demonstrates best practices in API data fetching and state management, showcasing modern web development techniques.", expanded: false, content: '', filePath: 'public/markdown/task.md' },
      { id: 2, title: "Requirements for this project", summary: "This file goes through the requirements for this project and demonstrates how each requirements was forfilled", expanded: false, content: '', filePath: 'public/markdown/Requirements.md' },
      { id: 3, title: "Lorem Ipsum 2", summary: "The document outlines a Vue 3 web application using TailwindCSS, Pinia, Marked, DOMPurify, and Axios, focusing on data management and styling. It details functionalities like article viewing, user-created content, and authentication, along with responsive design issues. Future enhancements and technical considerations include implementing article management features, enhancing type safety with TypeScript, and securing user sessions. The application demonstrates best practices in API data fetching and state management, showcasing modern web development techniques", expanded: false, content: '', filePath: 'public/markdown/task.md' },
      { id: 4, title: "Cache Synchronization", summary: "Cache Synchronization is the process ", expanded: false, content: '', filePath: 'public/markdown/Cache_Synchronization.md' }
    ]);
    const expandedArticle = ref(null)

    const toggleExpand = async (article) => {
      document.body.style.overflow = 'hidden'
      if (!article.content) {
        try {
          const response = await axios.get(article.filePath);
          article.content = DOMPurify.sanitize(marked(response.data));
        } catch (error) {
          console.error("Error fetching Markdown content: ", error);
          article.content = '<p>Error loading content...</p>';
        }
      }
      expandedArticle.value = article;
    };
    const closeExpand = () => {
      expandedArticle.value = null;
    };

    return { articles, expandedArticle, toggleExpand, closeExpand };
  }
};
</script>
