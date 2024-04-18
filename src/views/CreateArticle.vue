<template>
    <!-- container div -->
    <div class="flex flex-col w-full items-center mt-16 mb-40 px-4 md:px-8 lg:px-16">
        <!-- container for the markdown editor and preview headers -->
        <div class="flex flex-col md:flex-row w-full justify-around mt-8 md:mt-16">
            <h1 class="text-3xl md:text-4xl font-bold dark:text-dark-secondary text-center mb-4 md:mb-0">
                Markdown Editor
            </h1>
            <h1 class="text-3xl md:text-4xl font-bold dark:text-dark-secondary text-center">
                Markdown Preview
            </h1>
        </div>

        <!-- container for the markdown editor and preview -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full m-4 p-4 md:p-8">
            <!-- markdown editor -->
            <div class="rounded-md p-4 md:p-8" id="main-color">
                <textarea v-model="markdownInput"
                    :placeholder="'# h1\n## h2\n**bold**\n*italic*\n- list\n[link](https://example.com)'"
                    class="p-4 h-[50vh] md:h-[70vh] w-full overflow-auto resize-none border border-accent2 dark:bg-black dark:text-dark-secondary ">
                </textarea>
            </div>
            <!-- Markdown preview using v-html to just update the DOM for just that div -->
            <div class="p-4 md:p-8 rounded-md" id="main-color">
                <div v-html="sanitizedHtml"
                    class="p-4 h-[50vh] md:h-[70vh] w-full overflow-auto border border-accent2 bg-white dark:bg-black dark:text-dark-secondary"
                    id="markdown-editor"></div>
            </div>
        </div>
        <!-- Buttin to submit the markdown content -->
        <div class="w-full flex justify-center items-center">
            <button type="submit" @click="isSubmitArticleModalVisible = true"
                class="my-4 font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600" id="button-color">
                Submit
            </button>
        </div>
        <!-- Submit article modal -->
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
// there was something of hence the usage of local storage

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

        // Here we make use of marked and DOMPurify. the marked library is used to convert markdown to html, and the DomOurify.sanitizedHTML is ther eto prevent XSS atempts (Cross-Site Scripting). 
        // XSS is a type of security vulnerability that can be used to inject malicious scripts into web pages viewed by other users. 
        const sanitizedHtml = computed(() => {
            const rawHtml = marked(markdownInput.value);
            return DOMPurify.sanitize(rawHtml);
        });

        // Here we handle the submission of the article and pass it to addUserCreatedArticles in the article store.
        // by combining the article details and the markdown input, we get the full article.
        const handleArticleSubmission = (articleDetails) => {
            const fullArticle = {
                ...articleDetails,
                body: markdownInput.value,

            };
            useArticleStore().addUserCreatedArticles(fullArticle);
        };
        // a simple toggle function to keep track of the modal visibility
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
