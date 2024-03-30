import { defineStore } from "pinia";
import axios from "axios";

export const useBlogsStore = defineStore("blogs", {
  state: () => ({
    blogs: [],
  }),
  actions: {
    async fetchBlogs() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.blogs = response.data.map((blog) => ({
          id: blog.id,
          title: blog.title,
          body: blog.body,
          // Assuming 'summary' and 'likes' need to be generated or are part of your actual API response
          summary: blog.body.slice(0, 100), // Example summary
        }));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    },
  },
});
