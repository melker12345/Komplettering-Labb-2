import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    login(username, password) {
      if (username === 'John' && password === '123') {
        this.isAuthenticated = true;
        console.log('User logged in successfully');
      } else {
        alert('Incorrect username or password');
      }
    },
    logout() {
      this.isAuthenticated = false;
      console.log('User logged out');
    },
  },
});
