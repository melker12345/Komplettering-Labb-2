import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    // This is a simple login function that checks if the username and password are correct
    // Validation should be done on the server side in a real-world application
    // This is just a simple example to demonstrate how to use actions in Pinia :)

    login(username, password) {
      if (username === 'John' && password === '123') {
        this.isAuthenticated = true;
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
});
