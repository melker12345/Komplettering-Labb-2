<template>
  <section class="h-[60vh] flex flex-col items-center pt-12 md:pt-48 mt-10 md:mt-40" id="hero">
    <div class="container mx-auto text-center">
      <h1 class="text-3xl md:text-5xl font-bold p-2 text-primary dark:text-primary ">
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
    <div class="container mx-auto max-w-md bg-primary dark:bg-secondary rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
      <form>
        <div class="mb-4">
          <label for="name" class="block mb-2">Name</label>
          <input type="text" id="name" class="w-full p-2 rounded-md">
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input type="email" id="email" class="w-full p-2 rounded-md">
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-2">Message</label>
          <textarea id="message" rows="4" class="w-full p-2 rounded-md"></textarea>
        </div>
        <button type="submit" class="w-full bg-secondary dark:bg-primary p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../stores/AuthStore';

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
