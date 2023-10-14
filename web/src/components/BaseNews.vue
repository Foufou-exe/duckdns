<template>
    <div class="max-sm:p-5 md:p-5 max-md:p-5">
        <ListesNews />
        <router-view/>
    </div>
</template>

<script setup>
import ListesNews from './ListesNews.vue';
</script>
