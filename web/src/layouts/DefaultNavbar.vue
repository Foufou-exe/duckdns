<template>
  <div class="navbar">
    <div class="navbar-start">
      <MenuDropdown />
      <ButtonDuckDns />
    </div>
    <div class="navbar-center hidden lg:flex" id="app">
      <Menu />
    </div>
    <div class="navbar-end space-x-2" id="app">
      <!-- Switch theme -->
      <ButtonTheme />
      <!-- Language switcher -->
      <ButtonLanguage />
      <!-- Login -->
      <ButtonConnexion />
      <!-- After login -->
      <DropdownProfile />
    </div>
  </div>
</template>


<script setup>
// Start Navbar
import MenuDropdown from '@components/navbar/start/MenuDropdown.vue'
import ButtonDuckDns from '@components/navbar/start/ButtonDuckDns.vue'

// Center Navbar
import Menu from '@components/navbar/center/Menu.vue'

// End Navbar
import ButtonTheme from '@components/navbar/end/ButtonTheme.vue'
import ButtonLanguage from '@components/navbar/end/ButtonLanguage.vue';
import ButtonConnexion from '@components/navbar/end/ButtonConnexion.vue'
import DropdownProfile from '@components/navbar/end/DropdownProfile.vue'

</script>
