<template>
    <div class="max-w-4xl min-h-[80vh] mx-auto mt-[65px] p-0 sm:p-10 flex justify-center items-center h-fit ">
        <div class="p-10 my-40 shadow-md rounded-lg min-h-fit h-2/3 border-t border-b border-accent2 border-opacity-30"
            id="main-color">
            <h1 class="text-4xl font-bold mb-8 pb-8 border-b border-accent2 border-opacity-30">How this site works</h1>
            <div>
                <p>
                    This website is built with Vue 3, Tailwind, and Pinia. The 'articles' are fetched from a mock API or
                    created by the user. The main focus of this website is to show how to use Pinia and how to use the
                    store to fetch data from an API, whilst also showing how to use Tailwind.
                    <br><br>
                    There are obviously many things 'wrong' with this website.
                    <br><br>
                    The first problem is that the articles are not stored in a database. The articles are not persistent
                    for different users. The articles you are seeing are the ones being fetched from the mock API or the
                    ones you created yourself. The articles you see at the top of the /articles page are the ones you
                    created yourself. These are stored as a string in the local storage. This is to prevent the articles
                    from being removed by page reload. The articles fetched from the mock API are in this case the most
                    irrelevant which is why they are just stored in the store and loaded below user-created ones.
                    <br><br>
                    The second problem is that the login is handled on the front-end. This means that the user is not
                    actually logged in. The user is just pretending to log in. Everyone has access to "John" "123" since
                    it's stored in the auth store on the front-end. The login is just a simple demonstration of how it
                    could be done. For this to be a real site the login should be handled on the backend.
                    <br><br>
                    I could possibly integrate some sort of third-party login service like Google or GitHub, but I won't
                    bother since this is just a demo site.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
}
</script>
