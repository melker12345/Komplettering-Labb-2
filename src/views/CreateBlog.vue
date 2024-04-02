<template>
    <div>
        <h1>Create Blog</h1>
        <form @submit.prevent="submitBlog">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="blog.title" required>
            
            <label for="content">Content:</label>
            <textarea id="content" v-model="blog.content" required></textarea>
            
            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                title: '',
                content: ''
            }
        };
    },
    methods: {
        submitBlog() {
            // Handle form submission here
            console.log(this.blog);
        }
    }
};
</script>
