<template>
<div class="flex flex-col md:flex-row justify-center max-sm:mt-10 max-md:mt-10 p-6 bg-[#090f1c] rounded shadow-2xl shadow-secondary">

  <!-- Image Section -->
  <div class="m-4 md:m-10 flex flex-col justify-center items-center">
    <img :src="selectedImage" alt="Profil" class="max-md:w-30 md:w-30 lg:w-64 max-md:h-30 md:h-30 lg:h-64 max-sm:w-30 max-sm:h-30 object-cover rounded-full ring ring-secondary mb-3 md:mb-5 hover-move" @mousemove="handleMouseMove" @mouseout="resetRotation" />
    <div class="shine"></div>
    <button onclick="ChoosePicture.showModal()" class="btn btn-secondary">Other picture</button>
    <ChoosePicture />
  </div>

  <!-- User Details Section -->
  <div class="m-4 md:m-10 flex flex-col space-y-4">
    <h1 class="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-3 md:mb-5 text-white">User Profile</h1>
    <div class="space-y-2 text-white">
      <div><strong class="text-secondary">Account:</strong> {{ account }}</div>
      <div><strong class="text-secondary">Type:</strong> {{ type }}</div>
      <div><strong class="text-secondary">Created date:</strong> {{ createdDate }}</div>
    </div>

    <div class="space-y-2 mt-4">
      <h2 class="text-sm md:text-xl lg:text-xl font-semibold mb-2 md:mb-3 text-white">API Token</h2>
      <div class="text-white"><strong class="text-secondary">Token generated:</strong> {{ tokenGenerated }}</div>
      <strong class="text-secondary">
        Token: 
        <div class="bg-neutral p-4 rounded">
          <div v-if="showToken" class="text-white">
            {{ token }}
          </div>
        </div>
      </strong>
      
    </div>
    <button class="btn btn-secondary btn-outline btn-normal" @click="toggleToken">Show Token</button>
  </div>
</div>


</template>

<script setup>
// Composant 
import ChoosePicture from './ModalsChoosePicture.vue';

// Plugin vue
import { ref,computed } from 'vue';
// Store pinia 
import { useImageStore } from '@store/store.js'; // Importez votre store Pinia

// Exemple de
const account =  'Foufou-exe@github';
const type = 'free';
const token = 'fb940a3d-8915-4fb3-81b6-9f5ab70080e9';
const tokenGenerated = '1 month ago';
const createdDate = '11 Sep 2023, 18:17:53';

// Use 
const imageStore = useImageStore();
const selectedImage = computed(() => imageStore.getSelectedImage);


const showToken = ref(false);

const handleMouseMove = (event) => {
  const width = event.target.offsetWidth;
  const height = event.target.offsetHeight;

  // Calculez la distance par rapport au centre de l'image
  const offsetX = (event.offsetX / width) - 0.5;
  const offsetY = (event.offsetY / height) - 0.5;

  // Convertissez cette distance en degrés de rotation. 
  const rotateY = offsetX * 30;
  const rotateX = -offsetY * 30;

  event.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const resetRotation = (event) => {
  event.target.style.transform = 'rotateX(0) rotateY(0)';
};

const toggleToken = () => {
  showToken.value = !showToken.value;
};
</script>


