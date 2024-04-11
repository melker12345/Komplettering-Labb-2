<template>
    <nav
        :class="{ 'fixed top-0 inset-x-0 transition-transform transform z-1 border-b dark:border-secondary': true, '-translate-y-full': !showNavbar, 'translate-y-0': showNavbar }" id="main-color">
        <div class="max-w-full mx-0 sm:mx-16 px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">

                <div class="flex-shrink-0 hidden sm:block">
                    <img class="h-8 w-8" src="/src/assets/vue.svg" alt="Logo">
                </div>

                <div class="flex items-center justify-center flex-1">
                    <div class="ml-0 sm:ml-10 flex items-baseline space-x-4 overflow-hidden">
                        <router-link to="/"
                            class="text-surface dark:text-base font-bold py-2 px-1 sm:px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105  duration-100 ease-in-out">Home</router-link>
                        <router-link to="/about"
                            class="text-surface dark:text-base font-bold py-2 px-1 sm:px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-100 ease-in-out">About</router-link>
                        <router-link to="/articles"
                            class="text-surface dark:text-base font-bold py-2 px-1 sm:px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-100 ease-in-out">Articles</router-link>
                    </div>
                </div>

                <button @click="toggleTheme"
                    class="font-bold text-2xl dark:text-2xl py-2 px-4 rounded text-surface transform transition hover:scale-105 duration-100 ease-in-out">◑</button>
                <button v-if="!authStore.isAuthenticated" @click="isModalVisible = true" class="font-bold text-lg py-2 px-1 sm:px-4 rounded text-surface transform transition hover:scale-105 duration-100 ease-in-out">Log in</button>
                <button v-else @click="authStore.logout" class="font-bold text-lg py-2 px-1 sm:px-4 rounded text-surface transform transition hover:scale-105 duration-100 ease-in-out">Log out</button>
            </div>
        </div>
    </nav>

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

        const showNavbar = ref(true);
        const lastScrollPosition = ref(0);
        const isModalVisible = ref(false);

        const toggleTheme = () => {
            console.log('Toggling theme', themeStore.darkMode);
            themeStore.toggleDarkMode();
        };

        const toggleLoginModal = () => {
            isModalVisible.value = !isModalVisible.value;
        };

        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollPosition < lastScrollPosition.value) {
                showNavbar.value = true;
            } else if (currentScrollPosition > 100) {
                showNavbar.value = false;
            }
            lastScrollPosition.value = currentScrollPosition;
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return { showNavbar, isModalVisible, toggleLoginModal, authStore, toggleTheme };
    },
};
</script>
