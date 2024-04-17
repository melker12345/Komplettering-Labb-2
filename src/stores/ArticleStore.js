import { defineStore } from 'pinia';
import axios from 'axios';

export const useArticleStore = defineStore('articles', {
  state: () => ({
    articles: [],
  }),
  actions: {
    addUserCreatedArticles(fullArticle) {
      let articles = localStorage.getItem('userCreatedArticles');
      articles = articles ? JSON.parse(articles) : [];
      articles.push(fullArticle);
      localStorage.setItem('userCreatedArticles', JSON.stringify(articles));
    },

    async fetcharticles() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        this.articles = response.data.map(article => ({
          title: article.title.charAt(0).toUpperCase() + article.title.slice(1),
          body: article.body,
          summary: article.body.slice(0, 200),
        }));
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      }
    },
  },
  created() {
    let storedUserCreatedArticles = localStorage.getItem('userCreatedArticles');
    if (storedUserCreatedArticles) {
      storedUserCreatedArticles = JSON.parse(storedUserCreatedArticles);
      console.log(
        'userCreatedArticles loaded from local storage:',
        storedUserCreatedArticles
      );
    }
  },
});
