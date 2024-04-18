import './style.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// Create the app instance
const app = createApp(App);

// Make use of the pinia store and router
app.use(createPinia());
app.use(router);

app.mount('#app');
