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
          title: blog.title.charAt(0).toUpperCase() + blog.title.slice(1),
          body: blog.body,
          summary: blog.body.slice(0, 200),
          // Random likes should go here but I'm too lazy to implement it for now :)
        }));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    },
  },
});
