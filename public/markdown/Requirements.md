# Projektöversikt

## Krav för Betyget G

Följande krav måste uppfyllas för att nå grundnivån:

1. **Webbanrop och datavisning**

   - Webbanrop görs och data från en extern webbtjänst visas i applikationen.
   - Använd HTTPS för att undvika CORS-problem.
   - Visa åtminstone tre olika värden.
   - Exempel på uppfyllt krav finns i `ArticleStore.js`:
     ```javascript
     const response = await axios.get(
       "https://jsonplaceholder.typicode.com/posts"
     );
     ```

2. **Textinterpolering**

   - Använd `{{ och }}` för att interpolera text i Vue-komponenter.
   - Exempel från `Article.vue`:
     ```html
     <div>
       {{ article.title.charAt(0).toUpperCase() + article.summary.slice(1) }}
     </div>
     ```

3. **Attributinterpolering**

   - Använd `v-bind` eller dess kortform för att dynamiskt binda attribut.
   - Exempel från `Home.vue`:
     ```html
     <div
       :class="{'w-full lg:max-w-[30vw]': !article.expanded, 'w-full lg:max-w-[60vw] z-10 relative mx-auto': article.expanded}"
     ></div>
     ```

4. **Listrendering**

   - Använd `v-for` för att rendera listor.
   - Exempel på hur artiklar listas:
     ```html
     <div v-for="(article, index) in articles.slice(0, 2)" :key="index"></div>
     ```

5. **Händelser (Event Handling)**

   - Använd `v-on` eller dess kortform för att hantera händelser.
   - Exempel på klickhändelse för att expandera en artikel:
     ```html
     <div @click="toggleExpand(article, index)"></div>
     ```

6. **Villkorlig rendering**

   - Använd `v-if` för att dynamiskt rendera komponenter baserat på ett villkor.
   - Exempel från `ArticleDetail.vue`:
     ```html
     <div v-if="article"></div>
     ```

7. **v-model**

   - Använd `v-model` för att skapa en tvåvägsbindning.
   - Exempel från `CreateArticle.vue`:
     ```html
     <textarea v-model="markdownInput"></textarea>
     ```

8. **Single Page Application (SPA)**

   - Använd Vue Router för att skapa en SPA som består av minst två sidor.
   - Exempel på användning av Vue Router:
     ````javascript
        routes: [
            { path: "/", name: "Home", component: Home },
            { path: "/about", name: "About", component: About },
            { path: "/articles", name: "Articles", component: Articles },
            { path: "/articles/:title", component: ArticleDetail, props: true },
            { path: "/user-created-articles/:title", component: ArticleDetail, props: true },
            { path: "/create", component: CreateArticle, name: "CreateArticle", meta: { requiresAuth: true } },
            { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound, },
        ]
     ````

9. **Komponentutveckling**

   - Skapa åtminstone en icke-Vue-Router-Vue-komponent.
   - Finns i `src/components/` mappen, den innehåller Footer.vue, Navbar.vue, LoginModal.vue, SubmitArticleModal.vue.

10. **Props**

    - Använd props för att passera data till komponenter.
    - Exempel från `LoginModal.vue`:
        ```javascript
        props: {
            isVisible: {
            type: Boolean,
            required: true,
            },
        }
        ```
    - Som senad importeras och används i `Navbar.vue`:
        ```html
        <LoginModal :isVisible="isModalVisible" @close="isModalVisible = false" />
        ```
        ```javascript
            components: { LoginModal }
        ```
        
    

11. **Källkodshantering**
    - Publicera projektets källkod på GitHub.
    - Länk till GitHub-repositoriet: [github](https://github.com/melker12345/vue-articles)

## Tilläggskrav för Betyget VG

För att uppnå en högre betygsnivå måste alla krav för G vara uppfyllda och följande tillägg:

- **Använd Axios för webbanrop**.
    - Exempel på uppfyllt krav finns i `ArticleStore.js`:
     ```javascript
     const response = await axios.get(
       "https://jsonplaceholder.typicode.com/posts"
     );
     ```

- **Implementera minst en beräknad egenskap och en bevakare**.
    - Exempel på uppfyllt krav finns i `Artilce.vue`:
     ```javascript    
    const articles = computed(() => {
        return articlesStore.articles;
    });
     ```
- **Typsäkra alla props**.
    - Exempel på uppfyllt krav finns i `LoginModal.vue`:
     ```javascript    
    props: {
        isVisible: {
        type: Boolean,
        required: true,
        },
    },
    ```
    Detta är hur man typsäkrar props i Vue 3. Men detta sätt att typsäkra props är bara för runtime och inte för compile time. För att säkerställa att props är typsäkra vid kompileringstid bör TypeScript användas.
    
- **Exempel på typsäkra props i TypeScript**:
    
    ```javascript
    <script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        props: {
            isVisible: {
            type: Boolean as () => boolean,
            required: true
            }
        }
    });
     </script>
     ```

- **Använd ett anpassat event**.
    - Exempel på uppfyllt krav finns i `LoginModal.vue`:
    - Jag änvänder `emits` options API för att skicka ett anpassat event till Navbar komponenten.
     
    ```javascript
    if (authStore.isAuthenticated) {
        emit('close');
    }
     ```

- **Använd Pinia för tillståndshantering**.
    - Jag använder Pinia för att hantera tillståndet för temat i applikationen i `ThemeStore.vue`, `AuthStore.vue` för inloggning och `ArticleStore.vue` för att hantera artiklar.

- **Använd Vue Router med adressparametrar**.
    - Finns i 'router/index.js' där jag använder adressparametrar för att visa de olika 'views'.
    ```javascript
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound, },
    ```
    - The `/:pathMatch(.*)*` är en 'catch-all' route som matchar alla adresser som tidigare inte deklarerats, Detta är ett vanligt sätt att hantera 404-sidor i vue

- **Integrera ett grafiskt ramverk som Bootstrap eller Vuetify**.
    - Jag använde TailwindCSS för att styla aplikationen då tailwind är enklare att skräddarsy och anpassa än Vuetify eller Bootstrap i min åsikt, men det kan vara för att jag inte har mycket erfarenhet av Vuetify eller Bootstrap än.

  
- **Konfigurera ESLint och Prettier för projektet**.
