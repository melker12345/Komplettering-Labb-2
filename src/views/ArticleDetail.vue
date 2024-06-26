<template>
    <div class="max-w-4xl min-h-[80vh] mx-auto mt-[65px] p-0 sm:p-10 flex justify-center items-center">
        <div v-if="article"
            class="p-10 my-40 shadow-md rounded-lg min-h-[70vh] min-w-[30vw] border-t border-b border-accent2 border-opacity-30"
            id="main-color">
            <h1 class="text-4xl font-bold mb-8 pb-8 border-b border-accent2 border-opacity-30">
                {{ article.title }}
            </h1>
            <div v-html="sanitizedHtml" id="markdown-editor"></div>
        </div>
        <div v-else
            class="text-center h-52 p-10 rounded-lg flex flex-col justify-center items-center font-bold text-3xl"
            id="main-color">
            <p class="mb-8">Article not found.</p>
            <p>¯\_(ツ)_/¯</p>
        </div>
    </div>
</template>

<script>
import { useArticleStore } from '../stores/ArticleStore';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default {
    name: 'articleDetail',
    setup() {
        const route = useRoute();
        const articlesStore = useArticleStore();
        const renderer = new marked.Renderer();
        let x = JSON.parse(localStorage.getItem('userCreatedArticles'));

        const article = computed(() => {
            const title = route.params.title;
            if (route.path.startsWith('/articles/')) {
                return articlesStore.articles.find(b => b.title === title);
            } else if (route.path.startsWith('/user-created-articles/')) {
                return x.find(b => b.title === title);
            }
            return null;
        });

        const sanitizedHtml = computed(() => {
            if (article.value) {
                const rawHtml = marked(article.value.body);
                return DOMPurify.sanitize(rawHtml, {
                    ADD_TAGS: ['img'],
                    ADD_ATTR: ['src', 'href'],
                });
            }
            return '';
        });

        renderer.heading = (text, level) => {
            return `<h${level}>${text}</h${level}>`;
        };

        marked.setOptions({
            renderer,
            breaks: true, // Add line breaks
        });

        return {
            article,
            sanitizedHtml,
        };
    },
};
</script>
