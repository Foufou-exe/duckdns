<template>
<div class="min-h-screen lg:flex block">
    <!-- Vue3Lottie -->
    <Vue3Lottie 
        :animationData="DuckJSON" 
        :loop="true" 
        :autoplay="true" 
        :style="{width: '200px', height: '200px'}" 
        class="lg:mr-4" 
    />

    <!-- Contenu à droite de Vue3Lottie sur grands écrans, et en dessous sur petits écrans -->
    <div class="p-3">
        <h1 class="text-6xl font-extrabold mb-5">Welcome to Duck DNS</h1>
        <span class="text-2xl">Free Dynamic DNS hosted on AWS</span>
        <HomeNews class="mt-4"/>
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

