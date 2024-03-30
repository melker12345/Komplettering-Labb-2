<template>
  <button @click="toggleTheme" class="font-bold py-2 px-4 rounded text-surface dark:text-base transform transition hover:scale-105 duration-200 ease-in-out">Toggle Theme</button>
</template>

<script>
import { useThemeStore } from '../stores/ThemeStore';

export default {
  setup() {
    const themeStore = useThemeStore();
    
    const toggleTheme = () => {
      console.log('Toggling theme', themeStore.darkMode);
      themeStore.toggleDarkMode();
    };

    return { toggleTheme };
  },
};
</script>
