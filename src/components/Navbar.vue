<template>
    <nav
        :class="{ 'bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary fixed top-0 inset-x-0 transition-transform transform z-1 border-b dark:border-secondary': true, '-translate-y-full': !showNavbar, 'translate-y-0': showNavbar }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo on the left -->
                <div class="flex-shrink-0">
                    <img class="h-8 w-8" src="/src/assets/vue.svg" alt="Logo">
                </div>

                <div class="hidden md:flex items-center justify-center flex-1">
                    <div class="ml-10 flex items-baseline space-x-4 overflow-hidden">
                        <router-link to="/"
                            class="text-surface dark:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105  duration-200 ease-in-out">Home</router-link>
                        <router-link to="/about"
                            class="text-surface dark:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out">About</router-link>
                        <router-link to="/blogs"
                            class="text-surface dark:text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out">Blogs</router-link>
                    </div>
                </div>

                <Button>Toggle Theme</Button>
            </div>
        </div>
    </nav>
</template>



<script>
import Button from './Button.vue';

export default {
    name: 'Navbar',
    components: {
        Button,
    },
    data() {
        return {
            showNavbar: true, // Initially show the navbar
            lastScrollPosition: 0, // Store the last scroll position
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollPosition < this.lastScrollPosition) {
                // Scrolling up
                this.showNavbar = true;
            } else if (currentScrollPosition > 100) { // Optionally, ensure a certain threshold before hiding
                // Scrolling down
                this.showNavbar = false;
            }
            this.lastScrollPosition = currentScrollPosition; // Update the last scroll position
        },
    },
};
</script>
