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
