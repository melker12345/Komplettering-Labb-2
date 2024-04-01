<template>
  <section class="h-[60vh] flex flex-col items-center pt-12 md:pt-48 mt-10 md:mt-40" id="hero">
    <div class="container mx-auto text-center">
      <h1 class="text-3xl md:text-5xl font-bold p-2 text-accent1 dark:text-dark-accent2 ">
        Welcome to How Shit Works 🔥
      </h1>
    </div>
  </section>

  <!-- Blog Posts Section -->
  <section class="py-12">
    <div class="flex flex-wrap justify-center gap-8 md:gap-20 lg:gap-40">
      <!-- Cards -->
      <div class="flex flex-col items-center w-full lg:w-auto">
        <!-- Card 1 -->
        <div
          class="rounded-2xl shadow-sm w-full lg:w-[500px] max-w-[500px] flex flex-col justify-between p-10 bg-primary text-secondary dark:bg-secondary dark:text-primary mb-20">
          <h3 class="text-3xl font-bold mb-4">What's NeoVim</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quas, architecto fugit eum
            necessitatibus fuga voluptatibus, similique omnis minus aut voluptatem, officiis quia nobis modi dolores
            commodi laboriosam aspernatur velit? Magnam asperiores perspiciatis fugiat dolorem libero ex cum quisquam
            est ipsam. Excepturi sint itaque quod soluta sequi praesentium magni eveniet.</p>
          <button
            class="w-fit px-4 py-2 rounded-md mt-12 mx-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary">Read
            more</button>
        </div>

        <!-- Card 2 -->
        <div
          class="rounded-2xl shadow-sm w-full lg:w-[500px] max-w-[500px] flex flex-col justify-between p-10 bg-primary text-secondary dark:bg-secondary dark:text-primary mb-20">
          <h3 class="text-3xl font-bold mb-4">What's NeoVim</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quas, architecto fugit eum
            necessitatibus fuga voluptatibus, similique omnis minus aut voluptatem, officiis quia nobis modi dolores
            commodi laboriosam aspernatur velit? Magnam asperiores perspiciatis fugiat dolorem libero ex cum quisquam
            est ipsam. Excepturi sint itaque quod soluta sequi praesentium magni eveniet.</p>
          <button
            class="w-fit px-4 py-2 rounded-md mt-12 mx-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary">Read
            more</button>
        </div>
      </div>

      <!-- Right Cards with Responsive Offset -->
      <div class="flex flex-col items-center w-full lg:w-auto mt-[250px]">
        <!-- Card 3 -->
        <div
          class="rounded-2xl shadow-sm w-full lg:w-[500px] max-w-[500px] flex flex-col justify-between p-10 bg-primary text-secondary dark:bg-secondary dark:text-primary mb-20">
          <h3 class="text-3xl font-bold mb-4">What's NeoVim</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quas, architecto fugit eum
            necessitatibus fuga voluptatibus, similique omnis minus aut voluptatem, officiis quia nobis modi dolores
            commodi laboriosam aspernatur velit? Magnam asperiores perspiciatis fugiat dolorem libero ex cum quisquam
            est ipsam. Excepturi sint itaque quod soluta sequi praesentium magni eveniet.</p>
          <button
            class="w-fit px-4 py-2 rounded-md mt-12 mx-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary">Read
            more</button>
        </div>
        <!-- Card 4 -->
        <div
          class="rounded-2xl shadow-sm w-full lg:w-[500px] max-w-[500px] flex flex-col justify-between p-10 bg-primary text-secondary dark:bg-secondary dark:text-primary mb-20">
          <h3 class="text-3xl font-bold mb-4">What's NeoVim</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quas, architecto fugit eum
            necessitatibus fuga voluptatibus, similique omnis minus aut voluptatem, officiis quia nobis modi dolores
            commodi laboriosam aspernatur velit? Magnam asperiores perspiciatis fugiat dolorem libero ex cum quisquam
            est ipsam. Excepturi sint itaque quod soluta sequi praesentium magni eveniet.</p>
          <button
            class="w-fit px-4 py-2 rounded-md mt-12 mx-auto bg-secondary dark:bg-dark-secondary text-primary dark:text-secondary">Read
            more</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="py-12">
    <div
      class="container flex flex-col mx-auto max-w-md bg-primary dark:bg-dark-primary dark:text-dark-secondary rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
      <form>
        <div class="mb-4">
          <label for="name" class="block mb-2">Name</label>
          <input type="text" id="name"
            class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-white dark:bg-black dark:bg-opacity-50">
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input type="email" id="email"
            class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-white dark:bg-black dark:bg-opacity-50">
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-2">Message</label>
          <textarea id="message" rows="4"
            class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-white dark:bg-black dark:bg-opacity-50"></textarea>
        </div>
        <div class="w-full flex justify-center">
          <button type="submit"
            class="justify-center  bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';

export default {
  name: 'HomePage',

  setup() {
    const { login, logout, user } = useAuthStore();
    const posts = ref([
      // Sample posts data
    ]);

    // Placeholder methods
    const createPost = () => {
      console.log('Navigate to create post page');
    };
    return {

      createPost,
      user,
      posts,
    };
  },
};
</script>

<style>
/* Add any additional styles here */
</style>
