<template>
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo on the left -->
                <div class="flex-shrink-0">
                    <img class="h-8 w-8" src="/src/assets/vue.svg" alt="Logo">
                </div>

                <!-- Navigation Links - Centered -->
                <div class="hidden md:flex items-center justify-center flex-1">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <!-- Using Tailwind CSS classes for styling -->
                        <router-link to="/"
                            class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105  duration-300 ease-in-out">Home</router-link>
                        <router-link to="/about"
                            class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">About</router-link>
                        <router-link to="/contact"
                            class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Contact</router-link>
                    </div>
                </div>

                <!-- Theme Toggle Button on the right -->
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

};
</script>
