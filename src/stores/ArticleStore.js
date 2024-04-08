import { defineStore } from 'pinia';
import axios from 'axios';

/*
IGNORE # H1\n\n---\n\n*Italic*\n**Bold**\n\n![img](https://pbs.twimg.com/media/GKayMzjaIAEq69u?format=jpg&name=small)\nhellloo"

i want to check if userCreatedArticles in local storage is empty or not once this store is created
if it is not empty i want to keep that data in the stores userCreatedArticles list 
so on creation we look to see if there is any data in local storage and if there is we add it to the store

// does the articles in local storage get added to the userCreatedArticles list on creation of this store?
*/


export const useArticleStore = defineStore('articles', {
  state: () => ({
    articles: [],
    // should be an array of articles created by the user it should contain as many articles as the user has created
    userCreatedArticles: [],
  }),
  actions: {
    // This should append the new article to the existing list of articles so that it is not overwritten when the page is refreshed or when a new article is created
    addUserCreatedArticles(article) {
      this.userCreatedArticles = [...this.userCreatedArticles, article];
      localStorage.setItem('userCreatedArticles', JSON.stringify(this.userCreatedArticles));
      console.log('userCreatedArticles updated:', this.userCreatedArticles);
    },
    async fetcharticles() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.articles = response.data.map(article => ({
          id: article.id,
          title: article.title.charAt(0).toUpperCase() + article.title.slice(1),
          body: article.body,
          summary: article.body.slice(0, 200),
        }));
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      }
    },
  },
  // this should load the userCreatedArticles from local storage and populate the stores userCreatedArticles list when the store is created
  created() {
    const storedUserCreatedArticles = localStorage.getItem('userCreatedArticles');
    if (storedUserCreatedArticles) {
      this.userCreatedArticles = JSON.parse(storedUserCreatedArticles);
      console.log('userCreatedArticles loaded from local storage:', this.userCreatedArticles);
    }
  },
});

console.log(useArticleStore.userCreatedArticles);
