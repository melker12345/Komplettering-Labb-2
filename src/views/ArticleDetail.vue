<template>
    <div class="max-w-4xl mx-auto mt-[65px] p-10 flex justify-center items-center h-fit ">
        <div v-if="article"
            class="p-6 shadow-md rounded-lg min-h-fit " id="main-color">
            <h1 class="text-4xl font-bold mb-8 pb-8 border-b border-accent1 border-opacity-30">{{ article.title }}</h1>
            <div v-html="sanitizedHtml" id="markdown-editor"></div>
        </div>
        <div v-else class="text-center">
            <p>Article not found.</p>
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

        const article = computed(() => {
            const id = parseInt(route.params.id, 10);
            if (route.path.startsWith('/articles/')) {
                return articlesStore.articles.find(b => b.id === id);
            } else if (route.path.startsWith('/user-created-articles/')) {
                return articlesStore.userCreatedArticles.find(b => b.id === id);
            }
            return null; 
        });

        const sanitizedHtml = computed(() => {
            if (article.value) {
                const rawHtml = marked(article.value.body);
                return DOMPurify.sanitize(rawHtml, {
                    ADD_TAGS: ["img"], 
                    ADD_ATTR: ["src", "href"], 
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
            sanitizedHtml
        };
    },
};
</script>
