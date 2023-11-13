<template>
    <h1 class="text-3xl md:text-3xl lg:text-5xl mb-5">Dashboard</h1>

    <button class="btn" @click="AjoutNews">Add News</button>

        <input
            id="title"
            type="text"
            class="input w-full max-w-xs"
            placeholder="Title"
        />
        <input
            id="date"
            type="date"
            class="input w-full max-w-xs"
            placeholder="Date"
        />
        <textarea 
            id="content"
            class="textarea textarea-bordered textarea-xs w-full max-w-xs" 
            placeholder="Content">

        </textarea>
        <select  ref="selectElement" v-if="shouldShowSelect" class="select max-sm:mb-3 max-md:mb-3 form-control" multiple>
            <option disabled default>Choose Categories</option>
            <option value="Feature">✨Feature</option>
            <option value="Release">🎉Release</option>
            <option value="Epic">🎈Epic</option>
            <option value="Information">🔍Information</option>
        </select>
</template>

<script setup>
import newsData from '@data/newsData.json'
import Choices from 'choices.js';

import { ref, onMounted } from 'vue';

const selectElement = ref(null);
const shouldShowSelect = ref(true); // Remplacez par votre logique conditionnelle

onMounted(() => {
  if (selectElement.value) {
    new Choices(selectElement.value, {
      removeItemButton: true,
      // autres options
    });
  }
});

function AjoutNews() {

    const id = Object.keys(newsData).length + 1
    const title = document.getElementById("title").value
    const date = document.getElementById("date").value
    const content = document.getElementById("content").value.trim()
    const categorie = document.getElementById("selectElement")

    console.log("categorie : " + categorie)
    
}

function getCategorieList(valeur) {
    return valeur.split(" ")
}

</script>