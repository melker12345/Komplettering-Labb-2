# Project overview

### Overview

This is the notes i wrote throughout the development of the project. It encompasses some of the fetures i implemented, the issues i encountered, and some plausible enhancements that could be made in the future.

Since i normally write a simple markdown file for my projects, to keep track of issues and features to add i decided to write somewhat more formal to make it suitable as a article for the project.
This is not a complete documentation, but a simple overview of the projects development. 

I also want to preferece that i started this documentation after i had already started the project, so some of the features i implemented are not included in the documentation.

#### The goal

Is to create a simple application that meets the requirements of the assignment. Therefore the the project is structured in a way to forfill all the requirements as the primary goal instead of focusing on creating a well structured and scalable application. Thats accually useable. :)

Since I've started reading articles and blog posts about sowftware development, I decided to create an article application. The main goal is simple let the user write markdown and display the markdown preview. Whilst also fetching articles from an API and displaying them. 

The extra features is just that, extra features that i added to make the project more interesting and to learn more about Vue 3 and TailwindCSS. Forinstance the authentication feature, which is horriblally implemented the authentication is not secure at all. But it was a fun feature to implement, and shows how the frontend could look like if a viable authentication functionallity was pressent. To create a working authentication system would require a backend server to handle the authentication, alternativly a third party servece like google or github. The authentication should **NOT** soley be handled on the frontend. 

---


#### Completed Tasks

- **Creation of article**
  - Let the user create articles with markdown.
  - Display the markdown preview in real-time.
  - Save the article to have it displayed in the Article.vue view.
<br>

- **Display article**
  - Each article from the API links to its specific page via `"/articles/:title"`, and the user created articles `"/user-created-articles/:title"`.
  - The `ArticleDetail.vue` view displays the full article content dynamically. 

<br>

- **User-Created Articles**
  - Should be stored in local storage and displayed at the top in the Article.vue view.
  - The user needs to enter a title and summary to have the article displayed.

<br>

- **Theme**
  - The user can toggle between light and dark themes.
  - Using TailwindCSS, and a Pinia store to manage the theme state `ThemeStore.js`.
  - Set the class of the HTML element to dark on toggleTheme button press in the navbar.
  - Use the predefined TailwindCSS colors to style the themes.

<br>

**Authentication**
  - A toggle button displays 'Login' or 'Logged out', depending on the user's status.
  - Keep the user state in the `AuthStore.js`. 
  - Have a place holder login details in the store.
  - Logged-in users can create article posts by the apperaring create button on the article page.
  
<br>

**Responsive Design**
  - Have a responsive design that works on all devices.
  - A hamburger menu is needed for navigation on smaller devices.

<br>


---
<br>


## Keep in mind for Vue 3
Transition from `Data()`, `Methods()`, `Computed()`, and `Watch()` to using the `setup()` function, e.i. from Options API to Composition API. This will make the code more readable and maintainable. The Options API is still supported in Vue 3, but the Composition API is the recommended approach. This application dosen't use many of the new features in Vue 3, since it isn't a very complex application. <br>
forinstance `<exampleForm v-model:age="person.age" v-model:name="person.name" />` is a new feature in Vue 3. That allow developers to set multiple v-models on a single component.
Nor does this application use the new `Teleport` feature in Vue 3, which allows developers to render a component in a different part of the DOM. 

These two features are just a few of the new features in Vue 3. I did not use them in my project, since they are not necessary for the project although they would have been fun to implement. And sure i could have found some way to make use of them but i prefer to keep it as simple as possible. I think that this application could have be written in vanilla javascript or typescript, and still provide the same functionality without to much hassle.


---


## Future Enhancements

- **Article Management**:
  - Implement sorting, searching, and pagination for articles would be a nice touch be it's not necessary for the project.

- **Visual Enhancements**:
  - Consider adding a parallax effect to the background.
  - Add a loading spinner for fetching articles.
  - polishing the UI with more animations and transitions.
  - UX could be improved by some more visual feedback, for instance when the user submits an article or logs in.

### Technical Considerations
- **Authentication**:
  - Explore backend authentication to replace the current frontend simulation.
  - Potential integration of third-party authentication services like Google or GitHub.

- **Type Safety**:
  - Type safety in vue 3 differ from typescript the main difference is that vue checks the types on runtime, while typescript checks the types on compile time. this means that vue 3 is not as type safe as typescript. although vue 3 is more type safe than vue 2, since vue 3 is written in typescript and vue 2 is primarily written in JavaScript. 

<br>

---

<br>

## Reflections on Architecture

- **Local Storage and State Management**:
  - While local storage is used for data persistence, the store should remains the single source of truth. Synchronize changes between the store and local storage is the a common way of dealing with data from local storage, store and the component itself. I did not it this way for the user created articles, because i realized this after i had already implemented the feature. so the user created articles are only stored in local storage and not in the store. For this application it's not a big deal. 

- **Component Rendering**:
  - Address challenges in rendering the correct article data.

- **Security**:
  - Enhance security by handling login/logout functionality server-side, and manage unauthorized access more effectively.

