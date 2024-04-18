<template>
  <!-- hero section -->
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
          <!-- loop through the first 2 articles -->
          <div v-for="(article, index) in articles.slice(0, 2)" :key="index"
            class="rounded-2xl shadow-sm flex flex-col justify-between p-10 mb-20 border-t border-b border-accent2 border-opacity-30"
             id="main-color" @click="toggleExpand(article, index)">
            <h3 class="text-3xl font-bold mb-4 pb-8 text-center border-b border-accent2 border-opacity-30">
              {{ article.title }}
            </h3>
            <!-- if the article is not expanded we should display the summary not the content of the article -->
            <div v-if="!article.expanded">{{ article.summary }}</div>
            <div v-else v-html="article.content"></div>
            <button class="w-fit px-4 py-2 rounded-md mt-12 mx-auto" id="button-color">
              Read more
            </button>
          </div>
        </div>
        <!-- Right Column Cards, offset downwards on larger screens -->
        <div class="flex flex-col items-center w-full md:w-1/2 md:mt-20">
          <!-- card  -->
          <div v-for="(article, index) in articles.slice(2, 4)" :key="index + 2"
            class="rounded-2xl shadow-sm flex flex-col justify-between p-10 mb-20 border-t border-b border-accent2 border-opacity-30"
            id="main-color" @click="toggleExpand(article, index + 2)">
            <h3 class="text-3xl font-bold mb-4 pb-8 text-center border-b border-accent2 border-opacity-30">
              {{ article.title }}
            </h3>
            <div v-if="!article.expanded">{{ article.summary }}</div>
            <div v-else v-html="article.content"></div>
            <button class="w-fit px-4 py-2 rounded-md mt-12 mx-auto" id="button-color">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="py-12 mt-24 mb-60">
    <h2 class="text-3xl font-semibold text-center my-10 pb-10 text-secondary dark:text-dark-secondary">
      Contact us
    </h2>
    <div
      class="container flex flex-col w-3/5 min-w-[350px] max-w-[600px] mx-auto rounded-xl shadow-lg p-6 border-t border-b border-accent1 border-opacity-30"
      id="main-color">
      <!-- contact us form -->
      <form>
        <div class="mb-4">
          <label for="name" class="block mb-2 mx-1">Name:</label>
          <input type="text" id="name"
            class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-white dark:bg-black dark:bg-opacity-50" />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2 mx-1">Email:</label>
          <input type="email" id="email"
            class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-white dark:bg-black dark:bg-opacity-50" />
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
  <div v-if="expandedArticle" class="fixed inset-0 z-3 flex items-center justify-center p-4 bg-black bg-opacity-60 ">
    <div class="rounded-xl shadow-xl p-4 px-4 md:max-w-[60vw] w-full overflow-hidden h-[90vh] my-10 border border-accent2" id="main-color">
      <button @click="expandedArticle = !expandedArticle" onclick="document.body.style.overflow = '' "
        class="w-full flex justify-end mb-4 text-secondary dark:text-dark-secondary text-2xl">
        &times;
      </button>
      <div class="overflow-y-auto max-h-[calc(90vh-100px)] px-2 md:px-8" id="markdown-editor" v-html="expandedArticle.content"></div>
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
    // here i did not follow best practices i should have put these in the store and let the store be the single source of truth,
    // meaning keep all data in the store and let the components get the data from the store.
    // why did i do it? because i dont think following best practices is always the best way to learn, sometimes you need to do things in a other way to realize it's possible.

    // but also i don't like the consept of having the state of the application on the frontend, i would rather have it on the backend and let the frontend get the data from the backend.
    // for instance if a button is clicked or not could be on the frontend but not the article data. 

    const articles = ref([
      {
        id: 1,
        title: 'Project Documentation',
        summary:
          'The document outlines a Vue 3 web application using TailwindCSS, Pinia, Marked, DOMPurify, and Axios, focusing on data management and styling. It details functionalities like article viewing, user-created content, and authentication, along with responsive design issues. Future enhancements and technical considerations include implementing article management features, enhancing type safety with TypeScript, and securing user sessions. The application demonstrates best practices in API data fetching and state management, showcasing modern web development techniques.',
        expanded: false,
        content: '',
        filePath: '/markdown/task.md',
      },

      {
        id: 2,
        title: 'Lorem Ipsum 2',
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ab error ipsa deserunt dicta, in omnis quos sunt assumenda consectetur, corrupti vel quaerat harum vitae quam quibusdam nemo ex iusto non hic nihil maiores. Repellat porro optio unde sit illo amet dolore eligendi eos. Cum vel assumenda voluptatibus quia. Inventore ut impedit ea ad beatae in odio, quibusdam eveniet quasi vero voluptatibus ipsa reiciendis incidunt quos nemo cumque perferendis dolores veritatis alias? Molestiae aut laborum expedita provident beatae cum? Quae minima fugiat quaerat nostrum temporibus facere voluptatem ipsum, enim at aliquam cum vero, possimus earum! Aspernatur rerum necessitatibus amet illum.',
        expanded: false,
        content: '',
        filePath: '/markdown/task.md',
      },

      {
        id: 3,
        title: 'Requirements for this project',
        summary:
          "This file goes through the requirements for this project and demonstrates how and where each requirements is forfilled. This file is mainly for fun and dont have any real value, exept for making it a bit more easy for you to correct the project :) I wanted to write a bit more markdown since it's good to know the basics so i took this assignment as an opportunity to do so.",
        expanded: false,
        content: '',
        filePath: '/markdown/Requirements.md',
      },

      {
        id: 4,
        title: 'Cache Synchronization | writen by ChatGPT',
        summary: 'I did not feel to write 4 articles so this once is by non other than ChatGPT. Cache Synchronization is the process of maintaining consistency between data stored in different caches. It is essential for ensuring that data remains up-to-date and accurate across multiple cache instances. This article explores the challenges of cache synchronization and discusses various strategies for achieving synchronization, including write-through and write-behind caching. By implementing effective cache synchronization mechanisms, developers can improve application performance and reduce the risk of data inconsistencies.',
        expanded: false,
        content: '',
        filePath: '/markdown/Cache_Synchronization.md',
      },
    ]);
    // keep track of the expanded article
    const expandedArticle = ref(null);

    // function to toggle the expanded article
    const toggleExpand = async article => {
      document.body.style.overflow = 'hidden';
      if (!article.content) {
        try {
          const response = await axios.get(article.filePath);
          article.content = DOMPurify.sanitize(marked(response.data));
        } catch (error) {
          console.error('Error fetching Markdown content: ', error);
          article.content = '<p>Error loading content...</p>';
        }
      }
      expandedArticle.value = article;
    };
    const closeExpand = () => {
      expandedArticle.value = null;
    };

    return { articles, expandedArticle, toggleExpand, closeExpand };
  },
};
</script>
