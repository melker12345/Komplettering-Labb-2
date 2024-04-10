## BUGS

## TODO
- View articles:
    - Each article routs the user to the url `:to="/articles/${article.id}"`.
    - That page should display the full article nicely.
    - Every article specific page should follow the same structure.

- User created articles:
    - Should be added to the top section of the article view.

- Login:
    - Allow the user to log in and log out.
    - One button that renders Login if the user is signed in and Logged out.

    - If the user is logged in, the user should be able to:
        - Create a new article post. Should be a button in the article view.
            - Once the user has written an article and presses the submit button, the user should be prompted to enter a header and a summary.
            - The article should be added to the `userCreatedArticles` list in the store.
            - The header should be `userCreatedArticles.title`.
            - The summary should be `userCreatedArticles.body`.
            - The id should be `userCreatedArticles.id`.
            - To prevent user-created articles from being removed by page reload, let's store it in local storage as well.
        - Delete an existing article post. These should be buttons in each article card.

    - Redirect user to home if the user signs out on the create article page.

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