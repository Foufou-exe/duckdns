<template>
<div class="min-h-screen flex flex-col lg:flex-row items-center justify-center">
    <!-- Vue3Lottie -->
    <div class="lg:w-1/4 lg:mr-10 max-md:w-1/3 md:w-1/3  max-sm:w-3/5">
        <Vue3Lottie 
            :animationData="DuckJSON" 
            :loop="true" 
            :autoplay="true" 
        />
    </div>

    <!-- Contenu à droite de Vue3Lottie sur grands écrans, et en dessous sur petits écrans -->
    <div class="space-y-5">
        <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-5">Welcome to Duck DNS</h1>
        <span class="lg:text-xl">Free Dynamic DNS hosted on AWS</span>
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

