<template>
    <nav :class="{
        'fixed top-0 inset-x-0 z-30 border-b bg-white dark:bg-black dark:border-secondary shadow-md transition-transform duration-300 ease-in-out': true,
        '-translate-y-full': !showNavbar,
        'translate-y-0': showNavbar
    }" id="main-color">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">

                <!-- Logo -->
                <div class="flex-shrink-0">
                    <img class="h-8 w-8" src="/src/assets/vue.svg" alt="Logo">
                </div>

                <!-- Navigation Links -->
                <div class="hidden md:flex items-center space-x-4">
                    <router-link to="/"
                        class="text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:shadow-outline transition-transform hover:scale-105 duration-300 ease-in-out">
                        Home
                    </router-link>
                    <router-link to="/about"
                        class="text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:shadow-outline transition-transform hover:scale-105 duration-300 ease-in-out">
                        About
                    </router-link>
                    <router-link to="/articles"
                        class="text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:shadow-outline transition-transform hover:scale-105 duration-300 ease-in-out">
                        Articles
                    </router-link>
                </div>

                <!-- Theme Toggle and Authentication Buttons -->
                <div class="flex items-center space-x-4">
                    <button @click="toggleTheme"
                        class="hidden sm:block font-bold text-xl py-2 px-4 rounded-lg text-gray-800 dark:text-white transform transition hover:scale-105 duration-300 ease-in-out">
                        ◑
                    </button>
                    <button v-if="!authStore.isAuthenticated" @click="isModalVisible = true"
                        class="font-bold text-lg py-2 px-4 rounded-lg text-gray-800 dark:text-white transform transition hover:scale-105 duration-300 ease-in-out">
                        Log in
                    </button>
                    <button v-else @click="authStore.logout"
                        class="font-bold text-lg py-2 px-4 rounded-lg text-gray-800 dark:text-white transform transition hover:scale-105 duration-300 ease-in-out">
                        Log out
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="toggleMobileMenu"
                    class="md:hidden p-2 rounded-md text-gray-800 dark:text-white focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7">
                        </path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="showMobileMenu" class="md:hidden flex items-center flex-col">
            <router-link to="/" class="block py-2 px-4 text-center text-gray-800 dark:text-white">
                Home
            </router-link>
            <router-link to="/about" class="block py-2 px-4 text-center text-gray-800 dark:text-white">
                About
            </router-link>
            <router-link to="/articles" class="block py-2 px-4 text-center text-gray-800 dark:text-white">
                Articles
            </router-link>
            <button @click="toggleTheme" class="block py-2 px-4 text-center text-gray-800 dark:text-white">
                Toggle Theme
            </button>
            <button v-if="!authStore.isAuthenticated" @click="isModalVisible = true"
                class="block py-2 px-4 text-center text-gray-800 dark:text-white">
                Log in
            </button>
            <button v-else @click="authStore.logout" class="block py-2 px-4 text-center text-gray-800 dark:text-white">
                Log out
            </button>
        </div>
    </nav>
    <!-- Modal for Login -->
    <LoginModal :isVisible="isModalVisible" @close="isModalVisible = false" />

</template>


<script>
import { useThemeStore } from '../stores/ThemeStore';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useAuthStore } from '../stores/AuthStore';
import LoginModal from './LoginModal.vue';

export default {
    name: 'Navbar',
    components: { LoginModal },
    setup() {
        const themeStore = useThemeStore();
        const authStore = useAuthStore();

        // This ref tracks the visibility of the mobile navbar menu.
        const showMobileMenu = ref(false);
        const showNavbar = ref(true); // Controls navbar visibility based on scroll.
        const lastScrollPosition = ref(0);
        const isModalVisible = ref(false);

        const toggleTheme = () => {
            console.log('Toggling theme', themeStore.darkMode);
            themeStore.toggleDarkMode();
        };

        const toggleLoginModal = () => {
            isModalVisible.value = !isModalVisible.value;
        };

        // Function to toggle mobile menu
        const toggleMobileMenu = () => {
            showMobileMenu.value = !showMobileMenu.value;
        };

        // Function to handle scroll event to hide the navbar on scroll down
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

            if (currentScrollPosition < lastScrollPosition.value) {
                showNavbar.value = true;
            } else if (currentScrollPosition > 100) {
                showNavbar.value = false;
                showMobileMenu.value = false;
            }
            lastScrollPosition.value = currentScrollPosition;
        };
        // on component mounted add event listener for scroll
        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });
        // on component unmounted remove event listener for scroll
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            showNavbar,
            showMobileMenu,
            isModalVisible,
            toggleLoginModal,
            authStore,
            toggleTheme,
            toggleMobileMenu,
        };
    },
};
</script>
