<template>
  <div class="flex justify-center items-center pt-[65px] h-52 relative w-screen">
    <h1 class="text-4xl font-bold dark:text-dark-secondary">Blogs</h1>

  </div>

  <div class="flex flex-wrap justify-center gap-4 my-24 overflow-y-hidden">

    <div
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">Effectiv
        workflow</h2>
      <p class="flex-1 overflow-hidden text-justify mt-6">This blog is about effectiv workflow est rerum tempore vitae
        sequi sint nihil
        reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/blogs/m`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary px-4 py-2 rounded-md mx-auto">
        Read more
      </router-link>
    </div>

    <div
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">Effectiv
        workflow</h2>
      <p class="flex-1 overflow-hidden text-justify mt-6">This blog is about effectiv workflow est rerum tempore vitae
        sequi sint nihil
        reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/blogs/m`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary px-4 py-2 rounded-md mx-auto">
        Read more
      </router-link>
    </div>
    
    <div
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">Effectiv
        workflow</h2>
      <p class="flex-1 overflow-hidden text-justify mt-6">This blog is about effectiv workflow est rerum tempore vitae
        sequi sint nihil
        reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/blogs/m`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary px-4 py-2 rounded-md mx-auto">
        Read more
      </router-link>
    </div>

    <div
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">Effectiv
        workflow</h2>
      <p class="flex-1 overflow-hidden text-justify mt-6">This blog is about effectiv workflow est rerum tempore vitae
        sequi sint nihil
        reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/blogs/m`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary px-4 py-2 rounded-md mx-auto">
        Read more
      </router-link>
    </div>

  </div>

  <div class="w-[80vw] mx-auto border-b border-accent2"></div>

  <div class="flex flex-wrap justify-center gap-4 my-24">
    <div v-for="blog in blogs" :key="blog.id"
      class="flex flex-col p-6 shadow-md rounded-lg w-full sm:max-w-sm h-96 bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <!-- Title area -->
      <h2 class="text-2xl font-bold mb-5 pb-4 text-center truncate border-b border-accent1 border-opacity-30">
        {{ blog.title }}
      </h2>
      <!-- Summary area -->
      <p class="flex-1 overflow-hidden text-justify mt-6">
        {{ blog.summary }}
      </p>
      <!-- Button area -->
      <router-link :to="`/blogs/${blog.id}`"
        class="mt-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary px-4 py-2 rounded-md mx-auto">
        Read more
      </router-link>
    </div>
  </div>


  <div>

  </div>
</template>

<script>
import { useBlogsStore } from '../stores/BlogStore';

export default {
  name: 'Blogs',


  //BUG:
  // items in store not rendering if page is refreshed or navigated to directly from the url

  // FIX:
  // USE CREATED INSTEAD OF SETUP SINCE SETUP IS RAN BEFORE THE COMPONENT IS CREATED!!!!!
  created() {
    const blogsStore = useBlogsStore();
    if (!blogsStore.blogs.length) {
      blogsStore.fetchBlogs();
    }

  },
  computed: {
    blogs() {
      return useBlogsStore().blogs;
    },
  },
};
</script>