<template>
    <div class="navbar-end space-x-2" id="app">
      <!-- Switch theme -->
      <NavbarButtonThemeEnd />
      <!-- Language switcher -->
      <NavbarButtonLanguageEnd />
      <!-- Connexion -->
      <NavbarButtonConnexionEnd />
      
      <!-- After connexion -->
      <!-- <NavbarDropdownProfileEnd /> -->
    </div> 
</template>

<script setup>
import NavbarButtonThemeEnd from './NavbarButtonThemeEnd.vue'
import NavbarButtonLanguageEnd from './NavbarButtonLanguageEnd.vue';
import NavbarButtonConnexionEnd from './NavbarButtonConnexionEnd.vue'
// import NavbarDropdownProfileEnd from './NavbarDropdownProfileEnd.vue'
</script>