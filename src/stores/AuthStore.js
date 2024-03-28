// src/stores/authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  // State: holds the store's state
  state: () => ({
    user: null, // Initially, no user is logged in
  }),

  // Actions: methods to mutate the state
  actions: {
    // Simulate a login action
    login(email, password) {
      // Here you would typically make an API call to authenticate the user
      // For demonstration, we'll simulate successful login with a static user object
      this.user = { email };
      // TODO: Replace with actual authentication logic
    },

    // Log out the user by resetting the user state
    logout() {
      this.user = null;
    },
  },
});