<template>
  <div>
    <!-- Affichage pendant le chargement -->
    <div v-if="isLoading">Chargement en cours...</div>

    <!-- Affichage en cas d'erreur -->
    <div v-else-if="hasError">Erreur lors du chargement des données.</div>

    <!-- Affichage des nouvelles -->
    <div v-else>
      <div v-for="news in filteredAndSortedNews" :key="news.id" class="card border mb-4 bg-base-100 shadow-lg">
        <div class="card-body">
          <router-link :to="{ name: 'baseNews', params: { id: news.id, viewName: news.viewName } }">
            <h2 class="text-2xl inline-block mr-2 font-bold max-sm:text-xl">
              {{ news.title }}
              <div v-if="news.id === latestNewsId" class="badge inline-block badge-primary badge-outline font-semibold badge-lg max-sm:text-xs text-sm">Last News</div>
            </h2>
            <div class="flex flex-wrap gap-1 mt-2">
              <div v-for="categorie in news.categorie" :key="categorie" :class="getBadgeClass(categorie)" class="badge inline-block badge-outline font-semibold badge-lg max-sm:text-xs text-sm">
                {{ getBadgeText(categorie) }}
              </div>
            </div>
            <p class="text-gray-500 mt-2 mb-5">{{ news.content }}</p>
            <span class="text-gray-500">{{ formatDate(news.date) }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref, computed, defineProps } from 'vue';
import { formatDate } from '@js/formatDate';

// States
const newsList = ref([]);
const latestNewsId = ref(null);
const isLoading = ref(true);
const hasError = ref(false);

// Props
const props = defineProps({
  filterOption: String,
  sortOption: String,
  viewName: String,
  id: String
});

// Charge les nouvelles depuis l'API
async function loadNews() {
  try {
    const response = await fetch('/api/article/get-articles');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    newsList.value = await response.json();
    // Détermine le dernier article
    if (newsList.value.length > 0) {
      const latestNews = newsList.value.reduce((latest, current) => {
        return new Date(current.date) > new Date(latest.date) ? current : latest;
      }, newsList.value[0]);
      latestNewsId.value = latestNews.id;
    }
  } catch (error) {
    console.error(error);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
}

onMounted(loadNews);
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
