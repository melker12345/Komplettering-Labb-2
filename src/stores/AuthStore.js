import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    login(username, password) {
      if (username === "John" && password === "123") {
        this.isAuthenticated = true;
      } else {
        throw new Error("Invalid credentials");
      }
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
});
