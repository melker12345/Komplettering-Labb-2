<template>
    <!--  -->
    <div v-if="isVisible"
        class="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 mt-[65px] flex justify-center items-center">
        <!-- the modal container div -->
        <div
            class="bg-white dark:bg-dark-primary dark:text-dark-secondary rounded-lg shadow-xl p-8 max-w-sm mx-auto my-auto ">
            <div class="flex justify-between items-center mb-4 ">
                <h2 class="text-xl font-bold">Login</h2>
                <!-- close button that emits close to parrent div -->
                <button @click="$emit('close')"
                    class="text-secondary dark:text-dark-secondary text-2xl">&times;</button>
            </div>
            <!-- form for login -->
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
                <!-- login button -->
                <div class="flex justify-center">
                    <button type="submit" class=" font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        id="button-color">Log In</button>
                </div>

                <!-- Display error message if empty input feilds -->
                <div v-if="showError" class="text-red-500 my-2 font-semibold text-center">
                    Please fill in both the title
                    and summary fields.
                </div>


            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../stores/AuthStore';

export default {
    // props to handel the visibility of the modal 
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    emits: ['close'],
    setup(props, { emit }) {
        //  define the username and password variables and get the auth store
        const username = ref('');
        const password = ref('');
        const authStore = useAuthStore();
        const showError = ref(false);

        // function to handle the login, here we chick if the username and password are not empty and match the loggin info in the AuthStore
        const handleLogin = () => {
            if (password.value.trim() === '' || username.value.trim() === '') {
                showError.value = true;
                return;
            }
            authStore.login(username.value, password.value);
            if (authStore.isAuthenticated) {
                emit('close');
            }
            showError.value = false;
        };

        return { username, password, handleLogin, showError };
    },
};
</script>
