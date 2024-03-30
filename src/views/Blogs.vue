<template>
  <div class="flex justify-center items-center pt-[65px] h-52 relative w-screen">
    <h1 class="text-4xl font-bold dark:text-dark-secondary">Blogs</h1>
    <button class="absolute bg-black px-4 py-2 text-black dark:text-white transition duration-300" style="right: 12.5%;"
      @click="useBlogsStore">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        class="fill-current text-svg-light dark:text-svg-dark">
        <path
          d="M5 18c4.667 4.667 12 1.833 12-4.042h-3l5-6 5 6h-3c-1.125 7.98-11.594 11.104-16 4.042zm14-11.984c-4.667-4.667-12-1.834-12 4.041h3l-5 6-5-6h3c1.125-7.979 11.594-11.104 16-4.041z" />
      </svg>
    </button>
  </div>

  <div class="flex flex-wrap justify-center gap-4 my-24">
    <div
      class="p-6  shadow-md rounded-lg max-w-sm flex flex-col bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-6 pb-16 h-1/3 text-center border-b border-accent1 border-opacity-30 ">Effectiv
        workflow</h2>
      <p class="h-1/3">This blog is about effectiv workflow est rerum tempore vitae sequi sint nihil reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/blogs/m`"
        class="w-fit px-4 py-2 rounded-md mt-12 mx-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary">Read
        more</router-link>
    </div>
    <div
      class="p-6  shadow-md rounded-lg max-w-sm flex flex-col bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-6 pb-16 h-1/3 text-center border-b border-accent1 border-opacity-30 ">Effectiv
        workflow</h2>
      <p class="h-1/3">This blog is about effectiv workflow est rerum tempore vitae sequi sint nihil reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/blogs/m`"
        class="w-fit px-4 py-2 rounded-md mt-12 mx-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary">Read
        more</router-link>
    </div>
    <div
      class="p-6  shadow-md rounded-lg max-w-sm flex flex-col bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-6 pb-16 h-1/3 text-center border-b border-accent1 border-opacity-30 ">Effectiv
        workflow</h2>
      <p class="h-1/3">This blog is about effectiv workflow est rerum tempore vitae sequi sint nihil reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/blogs/m`"
        class="w-fit px-4 py-2 rounded-md mt-12 mx-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary">Read
        more</router-link>
    </div>
    <div
      class="p-6  shadow-md rounded-lg max-w-sm flex flex-col bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-6 pb-16 h-1/3 text-center border-b border-accent1 border-opacity-30 ">Effectiv
        workflow</h2>
      <p class="h-1/3">This blog is about effectiv workflow est rerum tempore vitae sequi sint nihil reprehenderit dolor
        beatae ea dolores neque fugiat blanditi est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditi</p>
      <router-link :to="`/blogs/m`"
        class="w-fit px-4 py-2 rounded-md mt-12 mx-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary">Read
        more</router-link>
    </div>
  </div>

  <div class="w-[80vw] mx-auto border-b bg-primary dark:bg-dark-secondary"></div>

  <div class="flex flex-wrap justify-center gap-4 my-24">
    <div v-for="blog in blogs" :key="blog.id"
      class="p-6  shadow-md rounded-lg max-w-sm flex flex-col bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
      <h2 class="text-2xl font-bold mb-6 pb-16 h-1/3 text-center border-b border-accent1 border-opacity-30 ">{{
        blog.title }}</h2>
      <p class="h-1/3">{{ blog.summary }}</p>
      <router-link :to="`/blogs/${blog.id}`"
        class="w-fit px-4 py-2 rounded-md mt-12 mx-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary">Read
        more</router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useBlogsStore } from '../stores/BlogStore';

export default {

  name: 'Blogs',
  data() {
    return {
      updateKey: 0,
    };
  },
  methods: {
    forceUpdate() {
      this.updateKey += 1;
    }
  },

  setup() {

    const blogsStore = useBlogsStore();

    // seam to be a bug with the when the DOM is updated
    // the html should be generated as soon as there is a change in the pinia store 
    onMounted(async () => {
      if (!blogsStore.blogs.length) {
        await blogsStore.fetchBlogs();
      }
    });

    return {
      blogs: blogsStore.blogs,
    };

  },
};
</script>