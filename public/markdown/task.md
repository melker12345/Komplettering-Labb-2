# Project Overview

## Overview

These are the notes I wrote throughout the development of the project. It encompasses some of the features I implemented, the issues I encountered, and some plausible enhancements that could be made in the future.

Since I normally write a simple markdown file for my projects to keep track of issues and features to add, I decided to write somewhat more formally to make it suitable as an article for the project. This is not complete documentation but a simple overview of the project's development.

I also want to mention that I started this documentation after I had already started the project, so some of the features I implemented are not included in the documentation.

### The Goal

The goal is to create a simple application that meets the requirements of the assignment. Therefore, the project is structured in a way to fulfill all the requirements as the primary goal instead of focusing on creating a well-functional and scalable application that's actually usable. :)

Since I've started reading articles and blog posts about software development and techniques, I decided to create an article application. The main goal is simple: let the user write markdown and display the markdown preview (wich i refer to as 'article'), while also fetching articles from an API and displaying them.

The extra features are just that, extra features that I added to make the project more interesting and to learn more about Vue 3 and TailwindCSS and also markdown syntax. For instance, the authentication feature, is horribly implemented, the authentication is **not secure** at all. But it was a fun feature to implement, and shows how the frontend could look like if a viable authentication functionality was present. To create a working authentication system it would require a backend server to handle the authentication, alternatively a third-party service like Google or GitHub. The authentication should **NOT** solely be handled on the frontend.

---

### Completed Tasks

- **Creation of Article**
  - Let the user create articles with markdown.
  - Display the markdown preview in real-time.
  - Save the article to have it displayed in the `Article.vue` view.

- **Display Article**
  - Each article from the API links to its specific page via `"/articles/:title"`, and the user-created articles `"/user-created-articles/:title"`.
  - The `ArticleDetail.vue` view displays the full article content dynamically.

- **User-Created Articles**
  - Should be stored in local storage and displayed at the top in the `Article.vue` view.
  - The user needs to enter a title and summary to have the article displayed.

- **Theme**
  - The user can toggle between light and dark themes.
  - Using TailwindCSS, and a Pinia store to manage the theme state `ThemeStore.js`.
  - Set the class of the HTML element to dark on toggleTheme button press in the navbar.
  - Use the predefined TailwindCSS colors to style the themes.

- **Authentication**
  - A toggle button displays 'Login' or 'Logged out', depending on the user's status.
  - Keep the user state in the `AuthStore.js`.
  - Have placeholder login details in the store.
  - Logged-in users can create article posts by the appearing create button on the article page.

- **Responsive Design**
  - Have a responsive design that works on all devices.
  - A hamburger menu is needed for navigation on smaller devices.

---

## Keep in Mind for Vue 3

Transition from `Data()`, `Methods()`, `Computed()`, and `Watch()` to using the `setup()` function, i.e., from Options API to Composition API. This will make the code more readable and maintainable. The Options API is still supported in Vue 3, but the Composition API is the recommended approach. This application doesn't use many of the new features in Vue 3, since it isn't a very complex application. For instance, `<exampleForm v-model:age="person.age" v-model:name="person.name" />` is a new feature in Vue 3. That allows developers to set multiple v-models on a single component. Nor does this application use the new `Teleport` feature in Vue 3, which allows developers to render a component in a different part of the DOM.

These two features are just a few of the new features in Vue 3. I did not use them in my project since they are not necessary for the project although they would have been fun to implement. And sure I could have found some way to make use of them but I prefer to keep it as simple as possible. I think that this application could have been written in vanilla JavaScript or TypeScript, and still provide the same functionality without too much hassle.

---

## Future Enhancements

- **Article Management**
  - Implement sorting, searching, and pagination for articles would be a nice touch but it's not necessary for the project.

- **Visual Enhancements**
  - Consider adding a parallax effect to the background.
  - Add a loading spinner for fetching articles.
  - Polish the UI with more animations and transitions.
  - UX could be improved by some more visual feedback, for instance when the user submits an article or logs in.

### Technical Considerations

- **Authentication**
  - Explore backend authentication to replace the current frontend simulation.
  - Potential integration of third-party authentication services like Google or GitHub.

- **Type Safety**
  - Type safety in Vue 3 differs from TypeScript; the main difference is that Vue checks the types at runtime, while TypeScript checks the types at compile time. This means that Vue 3 is not as type-safe as TypeScript. Although Vue 3 is more type-safe than Vue 2, since Vue 3 is written in TypeScript and Vue 2 is primarily written in JavaScript.

---

## Reflections on Architecture

- **Local Storage and State Management**
  - While local storage is used for data persistence, the store should remain the single source of truth. Synchronize changes between the store and local storage is a common way of dealing with data from local storage, store, and the component itself. I did not do it this way for the user-created articles because I realized this after I had already implemented the feature. So the user-created articles are only stored in local storage and not in the store. For this application, it's not a big deal.

- **Security**
  - Enhance security by handling login/logout functionality server-side, and manage unauthorized access more effectively.
