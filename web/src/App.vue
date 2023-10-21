<template>
    <DefaultNavbar />
    <DefaultViews />
    <DefaultFooter />
</template>

<script setup>
import DefaultNavbar from '@layouts/DefaultNavbar.vue'
import DefaultViews from '@layouts/DefaultViews.vue'
import DefaultFooter from '@layouts/DefaultFooter.vue' 


import { useImageStore } from '@store/store.js';

const imageStore = useImageStore();
imageStore.initializeImage();
</script>