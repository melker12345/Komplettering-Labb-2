
## TODO
- View articles: [DONE]
    - Each article routs the user to the url `:to="/articles/${article.id}"`. [DONE]
    - That page should display the full article nicely. [DONE]
    - Every article specific page should follow the same structure. [DONE]

- User created articles: [DONE]
    - Should be added to the top section of the article view. [DONE]

- Login: 
    - Allow the user to log in and log out. [DONE]
    - One button that renders Login if the user is signed in and Logged out. [DONE]

    - If the user is logged in, the user should be able to: [DONE]
        - Create a new article post. Should be a button in the article view. [DONE]
            - Once the user has written an article and presses the submit button, the user should be prompted to enter a header and a summary. [DONE]
            - The article should be added to the `userCreatedArticles` list in the store. [DONE]
            - The header should be `userCreatedArticles.title`. [DONE]
            - The summary should be `userCreatedArticles.body`. [DONE]
            - To prevent user-created articles from being removed by page reload, let's store it in local storage as well. [DONE]
        
        
        - Delete an existing article post. These should be buttons in each article card.

    - Redirect user to home if the user signs out on the create article page.


- Responsive:

- Create article and article header is iverlapping on smaller screens. 


- Hamburger menu:
    - Smaller screens should have a hamburger menu with all the nav buttons.





## REFACTOR
- vue 3:
    - Remove `Data()` since in Vue 3 it has been replaced with `setup()`.
    - Remove `Methods()` since in Vue 3 it has been replaced with `setup()`.
    - Remove `Computed()` since in Vue 3 it has been replaced with `setup()`.
    - Remove `Watch()` since in Vue 3 it has been replaced with `setup()`.

## Maybe
- Article.vue:
    - Filter?
    - Sort?
    - Search?
    - Pagination?

- Parallax effect on the background image?


## Interesting reflections
- What should happen if the user signs out on a page that requires the user to be signed in?
    - Should it even be possible?
    - Redirect to home page?
    - Return 401? 403?

- Type Safety in Vue 3:
    - Vue's prop validation offers runtime checks of the props passed to a component, but it won't be as robust as compile-time type checking.
    - TypeScript can be used to provide compile-time type checking for Vue components.

- The `setup` function is called before the component is created, and it returns an object that contains the properties and methods that the component will use. The `setup` function can also return a render function that will be used to render the component.

- The virtual DOM is a lightweight copy of the actual DOM that is used to make changes to the actual DOM more efficient. The virtual DOM is a tree structure that represents the actual DOM, and it is used to determine what changes need to be made to the actual DOM.

- Handeling local storage is more complex. Now we have the component, the store and the local storage. 
    best practice is to keep the store as the single source of truth and update the local storage when the store changes.

- v-html directive is used to update the innerHTML of an element    


- biggest problem was to renfer the correct article



# Description of the website 

#### This is a Vue 3 application that uses tailwindcss, pinia, marked, dompurify and axios. 


This website is built with vue 3, tailwind and pinia. The 'articles' are fetched from a mock API or created by the user. the main fokus of this website is to show how to use pinia and how to use the store to fetch data from an API. whislt also showing how to use tailwind

There are **obviously** many things 'wrong' with this website.  

The first problem is that the articles are not stored in a database.The articles are not persistent for different users. The articles you are seeing is the once being fetced from the mock API or the once you created yourself.
The articles you see at the top of the /articles page are the once you created yourself. These are stored as a string in the local storage. This is to prevent the articles from being removed by page reload. The articles fetched from the mock API are in this case the most irrelevant which is why they are just stored in the store and loaded below user crated once.

The second problem is that the log in is handled on the front-end. This means that the user is not actually logged in. The user is just pretending loggin. Everyone have access to "Jhon" "123" since it's stored in the auth store on the front-end. The login is just a simple demonstration of how it could be done. For this to be a real site the login should be handled on the backend.

I could possebly integrate some sort third party login service like google or github. but i won't bother since this is just a demo site 
