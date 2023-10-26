<template>
  <div class="p-5">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center max-sm:mb-3">
      <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-5 md:mb-10">News List</h1>
        <div>
          <select v-model="filterOption" class="select max-sm:mb-3 max-md:mb-3">
          <option value="all">All Categories</option>
          <option value="Feature">✨Feature</option>
          <option value="Release">🎉Release</option>
          <option value="Epic">🎈Epic</option>
          <option value="Information">🔍Information</option>
        </select>

        <select v-model="sortOption" class="select select-bordered max-sm:mb-3 max-md:mb-3">
          <option value="dateDesc">Date (Recent to Old)</option>
          <option value="dateAsc">Date (Old to Recent)</option>
          <option value="titleAsc">Title (A-Z)</option>
          <option value="titleDesc">Title (Z-A)</option>
        </select>
      </div>
    </div>
    <CardNews :filterOption="filterOption" :sortOption="sortOption"/>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import CardNews from '@components/news/CardNews.vue';

const filterOption = ref('all');
const sortOption = ref('dateDesc');
</script>
