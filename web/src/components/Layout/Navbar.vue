

<template>
  <div class="navbar">
    <div class="navbar-start">
      <details  class="dropdown md:hidden">
        <summary tabindex="0" class="btn btn-ghost">
          <font-awesome-icon icon="bars" size="xl" />
        </summary>
        <ul tabindex="0" class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
          <li class="flex">
            <h1 class="text-xl font-extrabold">Duck DNS</h1>
          </li>
          <li class=" hover:font-bold">
            <router-link  :to="{ name: 'home' }">
              <font-awesome-icon icon="house" />
              Home
            </router-link>
          </li>
          <li class=" hover:font-bold">
            <router-link  :to="{ name: 'about' }">
              <font-awesome-icon icon="circle-info" />
              About
            </router-link>
          </li>
          <li class=" hover:font-bold">
            <router-link  :to="{ name: 'specification' }">
              <font-awesome-icon icon="wrench" />
              Spécifications
            </router-link>
          </li>
          <li class=" hover:font-bold">
            <router-link  :to="{ name: 'documentation' }">
              <font-awesome-icon icon="file" />
              Documentation
            </router-link>
          </li>
          <li class=" hover:font-bold">
            <router-link  :to="{ name: 'faq' }">
              <font-awesome-icon icon="question" />
              FAQ
            </router-link>
          </li>
        </ul>
      </details>

      <a class="btn btn-ghost" href="/">
        <img src="duck.png" class="w-10 h-10" />
        <a class="text-3xl font-extrabold hidden md:block">Duck DNS</a>
      </a>
    </div>


    <div class="navbar-center hidden lg:flex" id="app">
        <ul class="menu menu-horizontal px-1">
            <li class=" hover:font-bold mr-2">
              <router-link  :to="{ name: 'home' }">
                <font-awesome-icon icon="house" />
                  Home
              </router-link>
            </li>
            <li class=" hover:font-bold mr-2">
              <router-link  :to="{ name: 'about' }">
                <font-awesome-icon icon="circle-info" />
                About
              </router-link>
            </li>
            <li class="hover:font-bold mr-2">
              <router-link  :to="{ name: 'specification' }">
                <font-awesome-icon icon="wrench" />
                Spécifications
              </router-link>
            </li>
            <li class=" hover:font-bold mr-2">
              <router-link  :to="{ name: 'documentation' }">
                <font-awesome-icon icon="file" />
                Documentation
              </router-link>
            </li>
            <li class=" hover:font-bold">
              <router-link  :to="{ name: 'faq' }">
                <font-awesome-icon icon="question" />
                FAQ
              </router-link>
            </li>
        </ul>
    </div>


    <div class="navbar-end" id="app">
      <!-- Button switch theme -->
      <ButtonTheme />
      
      <!-- Button connexion -->
      <ButtonConnexion />
      
    
      <!-- <DropdownProfile /> -->
    </div> 
  </div>

</template>


<script>
export default {
  name: 'Navbar',
};

</script>

<script setup>
import ButtonConnexion from '../ButtonConnexion.vue'
import ButtonTheme from '../ButtonTheme.vue'
// import DropdownProfile from '../DropdownProfile.vue'
</script>
