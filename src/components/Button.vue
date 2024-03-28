<template>
  <button :class="buttonClass" @click="toggleTheme">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue';
import { useDarkModeStore } from '../stores/DarkModeStore'; // Adjust the path as needed

export default {
  name: 'DarkModeToggle',
  setup() {
    const darkModeStore = useDarkModeStore();

    const buttonClass = computed(() => {
        return ` text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out
        `;
    });

    const toggleTheme = () => {
      darkModeStore.toggleTheme();
      document.body.className = darkModeStore.themeClass; // Applying the theme class
    };

    return { toggleTheme, buttonClass };
  },
};
</script>
