import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    darkMode: false,
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});
