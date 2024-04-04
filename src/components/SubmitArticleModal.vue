<template>
    <div v-if="isVisible" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div
            class="bg-white dark:bg-dark-primary dark:text-dark-secondary rounded-lg shadow-xl p-8 max-w-sm mx-auto my-auto ">
            <div class="flex justify-between items-center mb-4 ">
                <h2 class="text-xl font-bold">Submit Article</h2>
                <button @click="$emit('close')"
                    class="text-secondary dark:text-dark-secondary text-2xl">&times;</button>
            </div>
            <form @submit.prevent="submitArticle" class="space-y-6 w-72">
                <div>
                    <label for="title" class="block text-sm font-medium ">Title</label>
                    <input v-model="title" placeholder="Title"
                        class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-primary dark:bg-black dark:bg-opacity-50 ">
                </div>
                <div>
                    <label for="summary" class="block text-sm font-medium ">Summary</label>
                    <textarea v-model="summary" placeholder="Summary"
                        class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-primary dark:bg-black dark:bg-opacity-50 ">
                    </textarea>
                </div>
                <div v-if="showError" class="text-red-500 my-2 font-semibold text-center">Please fill in both the title
                    and summary fields.</div>
                <div class="flex justify-center">
                    <button type="submit"
                        class="bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';


export default {
    props: {
        isVisible: {
          type: Boolean,
          required: true,
        },
    },
    emits: ['submit', 'close'],
    setup(props, { emit }) {
        const title = ref('');
        const summary = ref('');
        const showError = ref(false);

        const submitArticle = () => {
            if (title.value.trim() === '' || summary.value.trim() === '') {
                showError.value = true;
                return;
            }
            emit('submit', { title: title.value, summary: summary.value });
            emit('close');

            title.value = '';
            summary.value = '';
            showError.value = false;
        };

        return {
            title,
            summary,
            submitArticle,
            showError,
        };
    },
};
</script>
