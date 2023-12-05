<template>
    <div class="flex flex-col items-center p-5 mt-5 mb-5">
        <div class="w-full max-w-4xl">
            <div class="flex flex-col mb-5">
                <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-5">
                    Welcome <strong class="text-warning">{{ username }}</strong> 😊
                </h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="md:col-span-2 p-4 bg-white rounded-lg shadow-md">
                    <h2 class="text-3xl font-bold text-gray-700 mb-3">
                        Articles
                    </h2>
                    <div class="text-gray-600">
                        <strong class="mb-1">Number of articles:</strong>
                        <p class="text-lg font-semibold">{{ CountArticle }}</p>
                    </div>
                </div>
                <div class="md:col-span-1 p-4 bg-white rounded-lg shadow-md">
                    <h2 class="text-3xl font-bold text-gray-700 mb-3">
                        Users
                    </h2>
                    <div class="text-gray-600">
                        <strong class="mb-1">Number of users:</strong>
                        <p class="text-lg font-semibold">{{ CountUser }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed,onMounted } from 'vue'
// Article
import DataArticle from '@data/newsData.json'


const CountArticle = computed(() => {
    return DataArticle.length
})



const username = ref('');

onMounted(() => {
  username.value = localStorage.getItem('username'); // Assurez-vous que c'est le bon clé
});

</script>