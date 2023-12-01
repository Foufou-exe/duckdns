<template>
    <div class="flex flex-col justify-center pl-10 pr-10 pt-5 min-h-screen">
      <div class="w-full max-w-5xl mx-auto">
          <router-view />
          <BackToTopButton />
      </div>
    </div>
</template>
  
<script setup>
import BackToTopButton from '@components/BackToTopButton.vue';

</script>
