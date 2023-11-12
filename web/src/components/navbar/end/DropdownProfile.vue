<template>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full ring ring-secondary">
          <img :src="selectedImage" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-200 rounded-box w-52">
        <li class="flex mb-2">
          <h1 class="text-sm font-bold flex justify-center">Foufou-exe@github</h1>
        </li>
        <li>
          <router-link :to="{ name: 'profils' }">
            <font-awesome-icon icon="user" />
            Profile
          </router-link >
        </li>
  
        <li>
          <router-link :to="{ name: 'domains' }">
            <font-awesome-icon icon="earth-americas" />
            Domains
          </router-link>
        </li>
        <li>
          <a>
            <font-awesome-icon icon="arrow-right-from-bracket" />
            Logout
          </a>
        </li>
      </ul>
    </div>
</template>

<script setup>
// Plugin vue
import { computed } from 'vue';
// Store pinia 
import { useImageStore } from '@store/store.js'; // Importez votre store Pinia
// Use Store Image
const selectedImage = computed(() => useImageStore().selectedImage);
</script>