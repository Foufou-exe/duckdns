<template>
  <div>
    <div v-for="news in filteredAndSortedNews" :key="news.id" class="card border border-secondary mb-4 bg-base-100 shadow-lg">
      <div class="card-body">
        <h2 class="text-2xl inline-block mr-2 font-bold max-sm:text-xl">
          {{ news.title }}
          <div v-if="news.id === latestNewsId" class="badge inline-block badge-primary badge-outline font-semibold">Last News</div>
        </h2>
        <div class="flex flex-wrap gap-1">
          <div v-for="categorie in news.categorie" :key="categorie" :class="getBadgeClass(categorie)" class="badge inline-block badge-outline font-semibold badge-lg max-sm:text-xs text-sm">
            {{ getBadgeText(categorie) }}
          </div>
        </div>
        <p class="text-gray-500 mt-2">{{ news.content }}</p>
        <span class="text-gray-500">{{ formatDate(news.date) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, defineProps } from 'vue';
import newsData from '@data/newsData.json'
import { formatDate } from '@js/formatDate';
const newsList = ref(newsData);
const latestNewsId = ref(null);

const props = defineProps({
  filterOption: String,
  sortOption: String
});

onMounted(() => {
  const latestNews = newsList.value.reduce((latest, current) => {
    return new Date(current.date) > new Date(latest.date) ? current : latest;
  }, newsList.value[0]);
  latestNewsId.value = latestNews.id;
});

const filteredAndSortedNews = computed(() => {
  let result = newsList.value;

  // Filtrage
  if (props.filterOption !== 'all') {
    result = result.filter(news => news.categorie.includes(props.filterOption));
  }

  // Tri
  if (props.sortOption === 'dateDesc') {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (props.sortOption === 'dateAsc') {
    result.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (props.sortOption === 'titleAsc') {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else if (props.sortOption === 'titleDesc') {
    result.sort((a, b) => b.title.localeCompare(a.title));
  }

  return result;
});

console.log('Nouvelles filtrées:', filteredAndSortedNews.value);

const getBadgeClass = (categorie) => {
  const classes = {
    'Feature': 'badge-warning',
    'Release': 'badge-success',
    'Epic': 'badge-error',
    'Information': 'badge-primary'
  }
  return `badge ${classes[categorie] || 'badge-secondary'}`
}

const getBadgeText = (categorie) => {
  const texts = {
    'Feature': '✨Feature',
    'Release': '🎉Release',
    'Epic': '🎈Epic',
    'Information': '🔍Information'
  }
  return texts[categorie] || categorie
}

</script>
