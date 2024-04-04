BUGS:


TODO:
    View articles: [DONE]
        Each article routs the user to the url :to="`/articles/${article.id}`. [DONE]
        That page should display the full article nicely. [DONE]
        Every article specific page should follow the same structure. [DONE]

    User created articles:
        - Should be added to the top section of the article view.

    Login: [DONE]
        - Allow the user to log in and log out. [DONE]
            - One button that renders Login if the user is signed in and Logged out. [DONE]
        
        - If the user is logged in, the user should be able to. [DONE]
            - Create a new article post. should be a button in the article view. [DONE]
                - Once the user have writen an aritcle and presses the submit button, the user should be prompted to enter a header and a summary [DONE] 
                - The article should be added to the userCreatedArticles lint in the store. [DONE] 
                - The header should be userCreatedArticles.title [DONE]
                - The summary should be userCreatedArticles.body [DONE]
                - The id should be userCreatedArticles.id [DONE]
                - To not have usercreated articles removed by page relod let store it in local storage as well. [DONE]   
            - Delete an existing article post. These should be buttons in each article card []

        - Redirect user to home if the user signs out on the create article page []


    Hamburger menu:
        Smaller screens should have a hamburger menu with all the nav buttins in


REFACTOR:
    vue 3: 
        - Remove Data() since in Vue 3 it has been replaced with setup(). []
        - Remove Methods() since in Vue 3 it has been replaced with setup(). []
        - Remove Computed() since in Vue 3 it has been replaced with setup(). []
        - Remove Watch() since in Vue 3 it has been replaced with setup(). []


Maybe:
    Article.vue:
        - Filter?
        - Sort?
        - Search?
        - Pagination?

    Paralax effect on the background image?
    

Intresting reflections: 
    What should happen if the user signs out on a page that requires the user to be signed in?
        - Should it even be possible?
        - Redirect to home page?
        - Return 401?, 403?

    Type Safety in Vue 3:
        - Vue's prop validation offer runtime checks of the props passed to a component, but it won't be as robust as compile-time type checking.
        - TypeScript can be used to provide compile-time type checking for Vue components.

    The setup function is called before the component is created, and it returns an object that contains the properties and methods that the component will use. The setup function can also return a render function that will be used to render the component.

    The virtual DOM is a lightweight copy of the actual DOM that is used to make changes to the actual DOM more efficient. The virtual DOM is a tree structure that represents the actual DOM, and it is used to determine what changes need to be made to the actual DOM.


