<template>
    <div class="p-5">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-5 md:mb-10">News List</h1>
        <select class="select select-bordered max-sm:mb-3 max-md:mb-3">
          <option disabled selected>Trier</option>
          <option value="dateDesc">Date (Recent to Old)</option>
          <option value="dateAsc">Date (Old to Recent)</option>
          <option value="titleAsc">Title (A-Z)</option>
          <option value="titleDesc">Title (Z-A)</option>
        </select>
      </div>
      <CardNews />
    </div>
  </template>

<script setup>
import CardNews from './CardNews.vue'
</script>