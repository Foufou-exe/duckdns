<template>

    <div v-for="news in newsList" :key="news.id" class="card bordered mb-4 bg-base-100">
    <div class="card-body">
        <h2 class="text-2xl inline-block mr-2">{{ news.title }} <div v-if="news.id === latestNewsId" class="badge inline-block badge-primary  badge-outline font-semibold">Last News</div></h2>
        <p class="text-gray-500 mt-2">{{ news.content }}</p>
        <span class="text-gray-500">{{ formatDate(news.date) }}</span>
    </div>
    </div>

  </template>

<script setup>
import { ref , onMounted } from 'vue'

const newsList = [
    { id: 1, title: "First news", date: "2023-10-05" , content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl aliquet nunc, nec aliquam nisl nunc eu nisl. Sed euismod, nisl sed aliquam ultricies, nunc nisl aliquet nunc, nec aliquam nisl nunc eu nisl."},
    { id: 2, title: "Second news", date: "2023-10-06", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl aliquet nunc, nec aliquam nisl nunc eu nisl. Sed euismod, nisl sed aliquam ultricies, nunc nisl aliquet nunc, nec aliquam nisl nunc eu nisl." },
]

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
}

const latestNewsId = ref(null);

onMounted(() => {
  const latestNews = newsList.reduce((latest, current) => {
    return new Date(current.date) > new Date(latest.date) ? current : latest;
  }, newsList[0]);
  
  latestNewsId.value = latestNews.id;
});
</script>