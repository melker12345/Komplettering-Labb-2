import { defineStore } from 'pinia';

// Theme values
const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const useDarkModeStore = defineStore('darkMode', {
  // State
  state: () => ({
    theme: Theme.LIGHT, // Initial theme state
  }),
  // Getters
  getters: {
    themeClass() {
      return this.theme === Theme.DARK ? 'dark-theme' : 'light-theme';
    },
  },
  // Actions
  actions: {
    toggleTheme() {
      this.theme = this.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    },
  },
});
