<!-- 
ignore all TODOs that are marked [DONE]

TODO:

- Create a new article post. should be a button in the article view. [DONE]
    - Once the user have writen an aritcle and presses the submit button, the user should be prompted to enter a title and a summary. [DONE] 
    - The header should be userCreatedArticles.title [DONE]
    - The summary should be userCreatedArticles.summary [DONE]
    - To not have user-created articles removed by page relod lets store it in local storage as well. [DONE]
    
    --- 

    - The article should be added to the store userCreatedArticles.body. 
        - How should i add the markdownInput to the store? 
            - i want to preserv the structure of the markdownInput in the userCreatedArticles.body.

    - The id should be userCreatedArticles.id and it should correspond to the index of the article in the store.
    - Currently the userCreatedArticles is structured like this [{"title":"test1","summary":"test1"},{"title":"test2","summary":"test2"}....]
    - Where test1 and test2 are examples user added articles from the SubmitArticleModal.vue component. 
    - the body or the markdownInput should be added to the userCreatedArticles.body.
    - so one article object looks like this {"id":1, "title":"test1","summary":"test1","body":"# test1\n\nThis is a test1 article. that should represent the markdownInput from the CreateArticle.vue component."}
    - The body should be the markdownInput from the CreateArticle.vue component.
    - The markdownInput should be added to the userCreatedArticles.body. and preserv the structure of the markdownInput. 

    - So the title and summary is added from the SubmitArticleModal.vue component and the body and id is added from the CreateArticle.vue component but they should be one object.
        


 -->

<template>
    <div class="flex flex-col w-full items-center mt-16 mb-40 px-4 md:px-8 lg:px-16">
        <div class="flex flex-col md:flex-row w-full justify-around mt-8 md:mt-16">
            <h1 class="text-3xl md:text-4xl font-bold dark:text-dark-secondary text-center mb-4 md:mb-0">
                Markdown Editor
            </h1>
            <h1 class="text-3xl md:text-4xl font-bold dark:text-dark-secondary text-center">
                Markdown Preview
            </h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full m-4 p-4 md:p-8">
            <div class="rounded-md p-4 md:p-8" id="main-color">
                <textarea v-model="markdownInput"
                    :placeholder="'# h1\n## h2\n**bold**\n*italic*\n- list\n[link](https://example.com)'"
                    class="p-4 h-[50vh] md:h-[70vh] w-full overflow-auto resize-none border border-accent2 dark:bg-black dark:text-dark-secondary ">
                </textarea>
            </div>

            <div class="p-4 md:p-8 rounded-md" id="main-color">
                <div v-html="sanitizedHtml"
                    class="p-4 h-[50vh] md:h-[70vh] w-full overflow-auto border border-accent2 bg-white dark:bg-black dark:text-dark-secondary"
                    id="markdown-editor"></div>
            </div>
        </div>
        <div class="w-full flex justify-center items-center">
            <button type="submit" @click="isSubmitArticleModalVisible = true"
                class="my-4 font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600" id="button-color">
                Submit
            </button>
        </div>

        <SubmitArticleModal :isVisible="isSubmitArticleModalVisible" @close="toggleSubmitArticleModal"
            @submit="handleArticleSubmission" />
    </div>

</template>


<script>
import { ref, computed } from 'vue';
import { useArticleStore } from '../stores/ArticleStore';
import SubmitArticleModal from '../components/SubmitArticleModal.vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

// local storage and store articles are weird. :)

export default {
    components: { SubmitArticleModal },
    setup() {
        const renderer = new marked.Renderer();
        const markdownInput = ref('');
        const isSubmitArticleModalVisible = ref(false);


        renderer.heading = (text, level) => {
            return `<h${level}>${text}</h${level}>`;
        };

        marked.setOptions({
            renderer,
            breaks: true,
        });

        const sanitizedHtml = computed(() => {
            const rawHtml = marked(markdownInput.value);
            return DOMPurify.sanitize(rawHtml, {
                ADD_TAGS: ["img"], // Specify any tags you wish to allow that DOMPurify might not by default
                ADD_ATTR: ["src", "href"], // Specify any attributes you wish to allow
            });
        });

        const handleArticleSubmission = (articleDetails) => {
            const fullArticle = {
                ...articleDetails,
                body: markdownInput.value,

            };
            useArticleStore().addUserCreatedArticles(fullArticle);
            console.log(useArticleStore().userCreatedArticles);
        };

        const toggleSubmitArticleModal = () => {
            isSubmitArticleModalVisible.value = !isSubmitArticleModalVisible.value;
        };
        return {
            markdownInput,
            sanitizedHtml,
            isSubmitArticleModalVisible,
            toggleSubmitArticleModal,
            handleArticleSubmission
        };
    },
};
</script>
