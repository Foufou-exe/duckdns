<template>
<div class="min-h-screen flex flex-col lg:flex-row items-center">
    <!-- Vue3Lottie -->
    <!-- <Vue3Lottie 
        :animationData="DuckJSON" 
        :loop="true" 
        :autoplay="true" 
        class="mb-4 lg:mb-0 lg:mr-4 w-1/2 lg:w-1/5" 
    /> -->

    <!-- Contenu à droite de Vue3Lottie sur grands écrans, et en dessous sur petits écrans -->
    <div class="space-y-3">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-5">Welcome to Duck DNS</h1>
        <span class="text-xl sm:text-1.5xl md:text-2xl">Free Dynamic DNS hosted on AWS</span>
        <HomeNews />
    </div>
</div>

</template>

<script>
import DuckJSON from '@assets/json/duck.json';
export default {
    data() {
        return {
            duck: DuckJSON,
        }
    },
}

</script>

<script setup>
import HomeNews from './HomeNews.vue';
</script>

