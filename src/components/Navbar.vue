<template>
    <nav
        :class="{ 'bg-primary text-secondary dark:bg-dark-primary dark:text-dark-secondary fixed top-0 inset-x-0 transition-transform transform z-1 border-b dark:border-secondary': true, '-translate-y-full': !showNavbar, 'translate-y-0': showNavbar }">
        <div class="max-w-full mx-16 px-4 sm:px-6 lg:px-8">
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

                <button @click="toggleTheme"
                    class="font-bold text-2xl dark:text-2xl py-2 px-4 rounded text-surface transform transition hover:scale-105 duration-200 ease-in-out">◑</button>
                <button @click="toggleLoginModal" v-if="!authStore.isAuthenticated"
                    class="font-bold py-2 px-4 rounded text-surface dark:text-base transform transition hover:scale-105 duration-200 ease-in-out">Log
                    In</button>
                <button @click="authStore.logout" v-else
                    class="font-bold py-2 px-4 rounded text-surface dark:text-base transform transition hover:scale-105 duration-200 ease-in-out">Log
                    Out</button>
            </div>
        </div>
    </nav>

    <LoginModal :isVisible="isModalVisible" @close="isModalVisible = false" />

</template>



<script>
import { useThemeStore } from '../stores/ThemeStore';
import Button from './Button.vue';

import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import LoginModal from './LoginModal.vue';

const isModalVisible = ref(false);

const toggleModal = () => {
    isModalVisible.value = !isModalVisible.value;
};


export default {
    name: 'Navbar',
    components: { LoginModal },
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    setup() {
        const themeStore = useThemeStore();

        const toggleTheme = () => {
            console.log('Toggling theme', themeStore.darkMode);
            themeStore.toggleDarkMode();
        };

        const isModalVisible = ref(false);
        const authStore = useAuthStore();

        const toggleLoginModal = () => {
            isModalVisible.value = !isModalVisible.value;
        };

        return { isModalVisible, toggleLoginModal, authStore, toggleTheme };
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollPosition < this.lastScrollPosition) {
                this.showNavbar = true;
            } else if (currentScrollPosition > 100) {
                this.showNavbar = false;
            }
            this.lastScrollPosition = currentScrollPosition;
        },
    },
};
</script>
