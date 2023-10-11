<template>
<div class="min-h-screen flex flex-col lg:flex-row items-center">
    <!-- Vue3Lottie -->
    <div class="lg:w-1/3 lg:mr-10 w-1/5">
        <Vue3Lottie 
            :animationData="DuckJSON" 
            :loop="true" 
            :autoplay="true" 
        />
    </div>

    <!-- Contenu à droite de Vue3Lottie sur grands écrans, et en dessous sur petits écrans -->
    <div class="space-y-3">
        <h1 class="lg:text-4xl font-extrabold mb-3">Welcome to Duck DNS</h1>
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

