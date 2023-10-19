<template>
<div class="flex flex-col md:flex-row justify-center max-sm:mt-10 p-6 md:p-12 bg-[#090f1c] rounded shadow-2xl shadow-secondary">

  <!-- Image Section -->
  <div class="m-4 md:m-10 flex flex-col justify-center items-center">
    <img :src="imageSrc" alt="Profil" class="w-40 md:w-64 h-40 md:h-64 object-cover rounded-full ring ring-secondary mb-3 md:mb-5 hover-move" @mousemove="handleMouseMove" @mouseout="resetRotation" />
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
        <div class="bg-neutral p-2 rounded">
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
import ChoosePicture from './ModalsChoosePicture.vue';


const imageSrc = 'images/connexion/duck1.png' ;
const account =  'Foufou-exe@github';
const type = 'free';
const token = 'fb940a3d-8915-4fb3-81b6-9f5ab70080e9';
const tokenGenerated = '1 month ago';
const createdDate = '11 Sep 2023, 18:17:53';

</script>

<script>
export default {
  data() {
    return {
      token: "YOUR_TOKEN_VALUE",
      showToken: false
    };
  },
 
  methods: {
    handleMouseMove(event) {
      const width = event.target.offsetWidth;
      const height = event.target.offsetHeight;

      // Calculez la distance par rapport au centre de l'image
      const offsetX = (event.offsetX / width) - 0.5;
      const offsetY = (event.offsetY / height) - 0.5;

      // Convertissez cette distance en degrés de rotation. Vous pouvez ajuster la valeur '20' pour un effet plus ou moins prononcé.
      const rotateY = offsetX * 30;
      const rotateX = -offsetY * 30;

      event.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
    },
    resetRotation(event) {
    event.target.style.transform = 'rotateX(0) rotateY(0)';
    },
    toggleToken() {
      this.showToken = !this.showToken;
    },

  }
}
</script>

