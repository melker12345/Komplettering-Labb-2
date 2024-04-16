<template>
    <div class="bg-[#121212] z-2 h-[100vh] absolute w-full">
        <div class="flex justify-center items-center h-full flex-col text-primary">
            <h1 class="text-center text-4xl font-medium mb-10  ">404 - Page Not Found</h1>
            <p class="">Oops! The page you are looking for don't exist.</p>
            <h1 class="text-center text-4xl font-medium mt-10  ">¯\_(ツ)_/¯</h1>
            <router-link to="/" class="w-fit px-4 py-2 rounded-md mt-12 mx-auto font-bold" id="button-color">Go back
                home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>
