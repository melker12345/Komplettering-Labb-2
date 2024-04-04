<template>
    <div class="max-w-4xl mx-auto mt-[65px] p-10 flex justify-center items-center h-[90vh]">
        <div v-if="article"
            class="p-6 shadow-md rounded-lg bg-primary dark:bg-dark-primary text-secondary dark:text-dark-secondary">
            <h1 class="text-4xl font-bold mb-8 pb-8 border-b border-accent1 border-opacity-30">{{ article.title }}</h1>
            <p>{{ article.body }}, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, magnam possimus dignissimos iure ad illum ex commodi aliquid dolorum quaerat consequatur doloribus suscipit eos nesciunt voluptatum sunt molestiae. Commodi velit amet iusto excepturi laboriosam doloremque quasi consequuntur minus fuga ullam? Adipisci, obcaecati perferendis illo quaerat similique consectetur accusantium reiciendis cum vero alias quos ad itaque eum ratione delectus voluptas dolore. Nihil molestiae ratione ea deserunt vel doloribus vitae reprehenderit nemo a labore delectus quas, sint repudiandae laboriosam sapiente facilis minus corporis adipisci iusto deleniti dignissimos. Officia blanditiis assumenda architecto? Obcaecati repellat libero minima cupiditate, sequi reiciendis quo recusandae assumenda ea mollitia. Est voluptatum dolor architecto magni sit error eaque iusto accusamus, voluptatibus nostrum. Dignissimos officiis numquam repellendus, iste facilis reprehenderit laboriosam sequi fugit eos quos. Saepe quidem temporibus eum non perferendis magni ex quae in sed ab aut nesciunt, delectus error dolorum consequatur eius accusantium necessitatibus minus nam vitae itaque deserunt natus. Nesciunt, rem hic ipsa modi beatae ipsam? Facere rerum consequuntur incidunt sapiente sint est nam illum obcaecati aspernatur optio necessitatibus voluptates possimus ratione praesentium provident, aliquid consequatur voluptatum cupiditate laudantium voluptatibus architecto! Ut doloremque eaque, minima similique ex ullam dicta voluptatibus necessitatibus cumque, beatae et, doloribus aspernatur error?</p>
        </div>
        <div v-else class="text-center">
            <p>article not found.</p>
        </div>
    </div>
</template>

<script>
import { useArticleStore } from '../stores/ArticleStore';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'articleDetail',
    setup() {
        const route = useRoute();
        const articlesStore = useArticleStore();

        const article = computed(() => {
            const id = parseInt(route.params.id, 10); // Parse the ID to a number
            return articlesStore.articles.find(b => b.id === id);
        });

        return {
            article,
        };
    },
};
</script>