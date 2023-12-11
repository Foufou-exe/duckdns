<template>
    <div v-if="latestArticle" role="alert" class="alert shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>

        <div>
            <h3 class="font-bold">{{ latestArticle.title }}</h3>
            <div class="text-xs">{{ latestArticle.content }}</div>
        </div>
        <router-link :to="{ name: 'baseNews', params: { id: latestArticle.id, viewName: latestArticle.viewName } }"
            class="btn btn-sm">See</router-link>
    </div>
    <div v-else>
        Loading latest article...
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
const latestArticle = ref(null);
onMounted(async () => {
    try {
        const response = await fetch('/api/article/get-articles');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const articlesArray = await response.json();
        articlesArray.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort articles by date in descending order
        latestArticle.value = articlesArray[0]; // Assuming the first article is the most recent one after sorting
    } catch (error) {
        console.error("There was an error fetching the articles:", error);
    }
});
</script>