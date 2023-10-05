<template>
    <Navbar />
      <div class="flex min-h-screen items-center justify-center">
        <div class="max-w-3xl mx-auto mt-5 p-5">
          <router-view>
            <component :is="currentRouteComponent"></component>
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
/* Basic scrollbar styles */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Scrollbar track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 4px;
}

/* Scrollbar handle */
::-webkit-scrollbar-thumb {
    background-color: #ccc; 
    border-radius: 4px;
}

/* When mouse hovers over scrollbar handle */
::-webkit-scrollbar-thumb:hover {
    background-color: #b0b0b0; 
}

/* Scrollbar style for light theme */

[data-theme='light'] {
    --scrollbar-thumb: hsl(var(--s));
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



/* Scrollbar style for dark theme */

[data-theme='night'] {
    --scrollbar-thumb: hsl(var(--s));
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

