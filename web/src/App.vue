<template>
    <Navbar />
      <div class="flex min-h-screen items-center justify-center">
        <div class="max-w-3xl mx-auto mt-5 p-5">
          <router-view>

          </router-view>
        </div>
      </div>
    <Footer />

</template>

<script>
  export default {
    name: 'App',
  }
</script>

<script setup>
  // Import components permanently
  import Navbar from './components/Layout/Navbar.vue'
  import Footer from './components/Layout/Footer.vue'
  import { RouterView } from 'vue-router'

</script>


<style>
/* Styles de base de la barre de défilement */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Track de la barre de défilement */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 4px;
}

/* Poignée de la barre de défilement */
::-webkit-scrollbar-thumb {
    background-color: #ccc; 
    border-radius: 4px;
}

/* Lorsque la souris survole la poignée de la barre de défilement */
::-webkit-scrollbar-thumb:hover {
    background-color: #b0b0b0; 
}

[data-theme='light'] {
    --scrollbar-thumb: #ccc;
    --scrollbar-track: #f1f1f1;
    --scrollbar-thumb-hover: #b0b0b0;
}

[data-theme='light'] ::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
}

[data-theme='light'] ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb);
}

[data-theme='light'] ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-thumb-hover);
}

[data-theme='night'] {
    --scrollbar-thumb: #444;
    --scrollbar-track: #222;
    --scrollbar-thumb-hover: #666;
}

[data-theme='night'] ::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
}

[data-theme='night'] ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb);
}

[data-theme='night'] ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-thumb-hover);
}

</style>

