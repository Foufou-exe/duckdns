<template>
    <div v-if="!isAdminRoute" class="flex flex-col justify-center pl-10 pr-10 pt-5 min-h-screen">
      <div class="w-full max-w-5xl mx-auto">
          <router-view />
          <BackToTopButton />
      </div>
    </div>
    <div v-else>
      <!-- Structure spécifique pour les routes admin -->
      <router-view />
      <!-- Vous pouvez ajouter d'autres éléments spécifiques à l'admin ici -->
    </div>
</template>
  
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BackToTopButton from '@components/BackToTopButton.vue';

const route = useRoute();
const isAdminRoute = computed(() => route.meta.admin || route.path.startsWith('/admin'));
</script>
  