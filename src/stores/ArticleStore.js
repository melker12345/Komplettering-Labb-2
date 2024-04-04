import { defineStore } from "pinia";
import axios from "axios";

export const useArticleStore = defineStore("articles", {
  state: () => ({
    articles: [],
    userCreatedArticles: [],
  }),
  actions: {
    addUserCreatedArticles(article) {
      this.userCreatedArticles.push(article);
      localStorage.setItem(
        "userCreatedArticles",
        JSON.stringify(this.userCreatedArticles)
      );
      console.log("userCreatedArticles updated:", this.userCreatedArticles);
    },
    async fetcharticles() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.articles = response.data.map((article) => ({
          id: article.id,
          title: article.title.charAt(0).toUpperCase() + article.title.slice(1),
          body: article.body,
          summary: article.body.slice(0, 200),
          // Random likes should go here but I'm too lazy to implement it for now :)
        }));
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    },
  },
  // Watcher to log changes in userCreatedArticles
  watchers: {
    userCreatedArticles(newValue, oldValue) {
      console.log("userCreatedArticles changed:", newValue);
    },
  },
});
