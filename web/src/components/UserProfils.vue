<template>
<div class="flex flex-col md:flex-row justify-center max-sm:mt-10 max-md:mt-10 p-6 bg-[#090f1c] rounded shadow-2xl shadow-secondary">

  <!-- Image Section -->
  <div class="m-4 md:m-10 flex flex-col justify-center items-center">
    <img :src="selectedImage" alt="Profil" ref="tilt" class="max-md:w-30 md:w-30 lg:w-64 max-md:h-30 md:h-30 lg:h-64 max-sm:w-30 max-sm:h-30 object-cover rounded-full ring ring-secondary mb-3 md:mb-5 hover-move"/>
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
        <div class="bg-black p-2 rounded">
          <div v-if="showToken" class="text-white">{{ token }}</div>
          <div v-else class="text-white">••••••••••••••••••••••••••••••••••••••••••••••</div>
        </div>
      </strong>
      
    </div>
    <button class="btn btn-secondary btn-outline btn-normal" @click="toggleTokenVisibility">{{ showToken ? 'Cacher' : 'Montrer' }}Show Token</button>
  </div>
</div>


</template>

<script setup>
import VanillaTilt from 'vanilla-tilt';

// Composant 
import ChoosePicture from './ModalsChoosePicture.vue';

// Plugin vue
import { ref,computed,onMounted, onBeforeUnmount  } from 'vue';
// Store pinia 
import { useImageStore } from '@store/store.js'; // Importez votre store Pinia

// Exemple
const account =  'Foufou-exe@github';
const type = 'free';
const token = 'fb940a3d-8915-4fb3-81b6-9f5ab70080e9';
const tokenGenerated = '1 month ago';
const createdDate = '11 Sep 2023, 18:17:53';

// Use 
const imageStore = useImageStore();
const selectedImage = computed(() => imageStore.getSelectedImage);

const props = defineProps(['token']);

const showToken = ref(false);

const toggleTokenVisibility = () => {
  showToken.value = !showToken.value;
}


const tilt = ref(null);

onMounted(() => {
  if (tilt.value) {
    VanillaTilt.init(tilt.value, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
      "glare-prerender": false,
    });
  }
});

onBeforeUnmount(() => {
  if (tilt.value && tilt.value.vanillaTilt) {
    tilt.value.vanillaTilt.destroy();
  }
});


</script>
