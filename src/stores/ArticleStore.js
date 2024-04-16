import { defineStore } from 'pinia';
import axios from 'axios';

/*
IGNORE # H1\n\n---\n\n*Italic*\n**Bold**\n\n![img](https://pbs.twimg.com/media/GKayMzjaIAEq69u?format=jpg&name=small)\nhellloo"

i want to check if userCreatedArticles in local storage is empty or not once this store is created
if it is not empty i want to keep that data in the stores userCreatedArticles list 
so on creation I look to see if there is any data in local storage and if there is add it to the store

// does the articles in local storage get added to the userCreatedArticles list on creation of this store?
*/


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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
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
      console.log('userCreatedArticles loaded from local storage:', storedUserCreatedArticles);
    }
  }
});


/*
i have a pina store that contains two list one fetched from third party api and the other should be empty if there is nothing in  local storage
i want to render both of them in the same component
i correctly route the user to the correct article when they click on the article
the issue is that when i click on the article from the local storage list it does not render the article
it renders nothing but when i click on the article from the third party api list it renders the article correctly

problem: when i click on the article from the local storage list it does not render the article

why? maybe the article is not being passed correctly from local storage to the userCreatedArticles list in the store 

*/
