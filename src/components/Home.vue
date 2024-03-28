<template>
  <section class="h-[60vh] flex flex-col items-center pt-48 mt-16 " id="hero">
    <div class="container mx-auto text-center min-h-fit">
      <h1 class="text-5xl font-bold min-h-fit p-2">
        Welcome to How Shit Works 🔥
      </h1>
    </div>
  </section>

  <!-- Blog Posts Section -->
  <section class=" items-center justify-center h-[200vh] py-12">
    <div class="h-fit w-full mx-auto flex flex-wrap justify-center gap-48">
      <!-- Left Cards -->
      <div class="flex flex-col items-center w-1/4 gap-48">
        <!-- Card 1 -->
        <div
          class="rounded-2xl bg-[var(--color-bg-light)] text-[var(--color-text-light)] shadow-sm h-[600px] w-full flex flex-col justify-between p-10  relative">
          <div class="h-full flex flex-col ">
            <h3 class="my-3 py-6 text-5xl h-fit self-center justify-center font-bold ">
              Next.js 13 Released
            </h3>
            <p class="text-base mt-8">Check out the latest features in Next.jsDiscover the latest trends in web
              development.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam enim ipsa at ratione iusto labore quo
              quis rem rerum voluptates corrupti dolore id voluptatum vel suscipit similique atque sit nisi eos, ad
              dicta eum numquam natus est. Harum repellendus amet quasi, cumque sequi molestiae iusto pariatur magni
              voluptate quidem recusandae..</p>
          </div>
          <button
            class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[var(--color-bg-dark)]  text-[var(--color-text-dark)] transition-colors mx-auto py-2 px-4 mt-4 ">
            Read
          </button>
        </div>
        <!-- Card 2 -->
        <div
          class="rounded-2xl bg-[var(--color-bg-light)] text-[var(--color-text-light)] shadow-sm h-[600px] w-full flex flex-col justify-between p-10 relative">
          <div class="h-full flex flex-col ">
            <h3 class="my-3 py-6 text-5xl h-fit self-center justify-center font-bold ">
              Next.js 13 Released
            </h3>
            <p class="text-base mt-8">Check out the latest features in Next.jsDiscover the latest trends in web
              development.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam enim ipsa at ratione iusto labore quo
              quis rem rerum voluptates corrupti dolore id voluptatum vel suscipit similique atque sit nisi eos, ad
              dicta eum numquam natus est. Harum repellendus amet quasi, cumque sequi molestiae iusto pariatur magni
              voluptate quidem recusandae..</p>
          </div>
          <button
            class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[var(--color-bg-dark)]  text-[var(--color-text-dark)] transition-colors mx-auto py-2 px-4 mt-4 ">
            Read
          </button>
        </div>
      </div>

      <!-- Right Cards with Offset -->
      <div class="flex flex-col items-center w-1/4 gap-48 mt-[300px]">
        <!-- Card 3 -->
        <div
          class="rounded-2xl bg-[var(--color-bg-light)] text-[var(--color-text-light)] shadow-sm h-[600px]  w-full flex flex-col justify-between p-10 relative">
          <div class="h-full flex flex-col ">
            <h3 class="my-3 py-6 text-5xl h-fit self-center justify-center font-bold ">
              Next.js 13 Released
            </h3>
            <p class="text-base mt-8">Check out the latest features in Next.jsDiscover the latest trends in web
              development.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam enim ipsa at ratione iusto labore quo
              quis rem rerum voluptates corrupti dolore id voluptatum vel suscipit similique atque sit nisi eos, ad
              dicta eum numquam natus est. Harum repellendus amet quasi, cumque sequi molestiae iusto pariatur magni
              voluptate quidem recusandae..</p>
          </div>
          <button
            class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[var(--color-bg-dark)]  text-[var(--color-text-dark)] transition-colors mx-auto py-2 px-4 mt-4 ">
            Read
          </button>
        </div>
        <!-- Card 4 -->
        <div
          class="rounded-2xl bg-[var(--color-bg-light)] text-[var(--color-text-light)] shadow-sm h-[600px]  w-full flex flex-col justify-between p-10  relative ">
          <div class="h-full flex flex-col ">
            <h3 class="my-3 py-6 text-5xl h-fit self-center justify-center font-bold ">
              Next.js 13 Released
            </h3>
            <p class="text-base mt-8">Check out the latest features in Next.jsDiscover the latest trends in web
              development.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam enim ipsa at ratione iusto labore quo
              quis rem rerum voluptates corrupti dolore id voluptatum vel suscipit similique atque sit nisi eos, ad
              dicta eum numquam natus est. Harum repellendus amet quasi, cumque sequi molestiae iusto pariatur magni
              voluptate quidem recusandae..</p>
          </div>
          <button
            class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-[var(--color-bg-dark)]  text-[var(--color-text-dark)] transition-colors mx-auto py-2 px-4 mt-4 ">
            Read
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section  -->
  <section class="container mx-auto px-4 py-48">
    <!-- Contact Form -->
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
      <form>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" id="name"
            class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" id="email"
            class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
          <textarea id="message" rows="4"
            class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
        </div>
        <button type="submit" class="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Submit</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white text-center p-4">
    © 2024 My Blog. All rights reserved.
  </footer>


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
