<template>
    <div v-if="!isAdminRoute">
        <DefaultNavbar/>
        <DefaultViews />
        <DefaultFooter/>
    </div>
    <div v-else>
        <router-view />
    </div>
</template>

<script setup>
// Vue Composables
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Vue Main Components
import DefaultNavbar from '@layouts/DefaultNavbar.vue'
import DefaultViews from '@layouts/DefaultViews.vue'
import DefaultFooter from '@layouts/DefaultFooter.vue' 

// Import the store
import { useImageStore } from '@store/store.js';

// Variables
const route = useRoute();
const isAdminRoute = computed(() => route.meta.admin || route.path.startsWith('/admin'));

const imageStore = useImageStore();
imageStore.initializeImage();
</script>