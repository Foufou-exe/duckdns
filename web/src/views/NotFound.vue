<template>
    <div class="flex flex-col items-center justify-center">
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Crying%20Cat.png" alt="Crying Cat" class="w-1/4 max-sm:w-1/2" />
        <h1 class="lg:text-5xl font-extrabold mb-4 sm:text-xl md:text-2xl text-4xl">404 Error</h1>
        <span class="lg:text-xl mb-4 sm:text-xs md:text-sm text-sm ">Sorry, the page you are looking for could not be found.</span>
        <router-link :to="{ name: 'home' }" class="btn btn-secondary">Back to home</router-link>
    </div>
</template>

