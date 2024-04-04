<template>
    <div v-if="isVisible" class="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div
            class="bg-white dark:bg-dark-primary dark:text-dark-secondary rounded-lg shadow-xl p-8 max-w-sm mx-auto my-auto ">
            <div class="flex justify-between items-center mb-4 ">
                <h2 class="text-xl font-bold">Login</h2>
                <button @click="$emit('close')"
                    class="text-secondary dark:text-dark-secondary text-2xl">&times;</button>
            </div>
            <form @submit.prevent="handleLogin" class="space-y-6 w-72">
                <div>
                    <label for="username" class="block text-sm font-medium ">Username</label>
                    <input v-model="username" type="text" id="username"
                        class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-primary dark:bg-black dark:bg-opacity-50 "
                        placeholder="Username">
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium ">Password</label>
                    <input v-model="password" type="password" id="password"
                        class="my-2 mx-1 p-2 justify-center w-[95%] rounded-md shadow-sm bg-primary dark:bg-black dark:bg-opacity-50 "
                        placeholder="Password">
                </div>
                <div class="flex justify-center">
                    <button type="submit"
                        class="bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log
                        In</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../stores/AuthStore';

export default {
    props: {
        isVisible: {
          type: Boolean,
          required: true,
        },
    },
    emits: ['close'],
    setup(props, { emit }) {
        const username = ref('');
        const password = ref('');
        const authStore = useAuthStore();

        const handleLogin = () => {
            authStore.login(username.value, password.value);
            if (authStore.isAuthenticated) {
                emit('close');
            }
        };

        return { username, password, handleLogin };
    },
};
</script>
