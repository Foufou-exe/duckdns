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
      <GoogleTranslateSelect
        default-language-code="en"
        default-page-language-code="en"
        :fetch-browser-language="true"
        trigger="click"
      />
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
import ButtonConnexion from '@components/navbar/end/ButtonConnexion.vue'
import DropdownProfile from '@components/navbar/end/DropdownProfile.vue'

import GoogleTranslateSelect from '@google-translate-select/vue3'

</script>
