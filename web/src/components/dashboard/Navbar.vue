<template>
  <div class="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-200 rounded-box w-60">
          <li>
            <router-link to="/admin/dashboard" class="font-semibold">
              <font-awesome-icon icon="home" />
              Home
            </router-link>
          </li>
          <li>
            <a class="font-semibold">
              <font-awesome-icon icon="newspaper" />
              Article
            </a>
            <ul class="p-2">
              <li>
                <router-link to="/admin/dashboard/list-article" class="font-semibold">
                  <font-awesome-icon icon="list" />
                  Article List
                </router-link>
              </li>
              <li>
                <router-link to="/admin/dashboard/create-news-article" class="font-semibold">
                  <font-awesome-icon icon="pen-to-square" />
                  Create a New Article
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://github.com/Foufou-exe/duckdns/issues/new" class="font-semibold">
              <font-awesome-icon icon="circle-question" />
              Support
            </a>
          </li>
        </ul>
      </div>
      <div class="flex btn btn-ghost">
        <img src="@/assets/images/duck.png" class="max-lg:w-10 lg:w-10 max-md:w-8 max-sm:w-8" alt="duckdns" />
        <a class="lg:text-3xl font-extrabold sm:text-xl md:text-2xl">DASHBOARD</a>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 space-x-2">
        <li>
          <router-link to="/admin/dashboard" class="font-semibold">
            <font-awesome-icon icon="home" />
            Home
          </router-link>
        </li>
        <li tabindex="0">
          <details>
            <summary class="font-semibold">
              <font-awesome-icon icon="newspaper" />
              Article
            </summary>
            <ul class="menu menu-sm w-60 p-5 space-y-2 shadow-lg bg-base-200">
              <li class="mt-2">
                <router-link to="/admin/dashboard/list-article" class="font-semibold">
                  <font-awesome-icon icon="list" />
                  Article List
                </router-link>
              </li>
              <li class="pb-2">
                <router-link to="/admin/dashboard/create-news-article" class="font-semibold">
                  <font-awesome-icon icon="pen-to-square" />
                  Create New Article
                </router-link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a href="https://github.com/Foufou-exe/duckdns/issues/new" class="font-semibold">
            <font-awesome-icon icon="circle-question" />
            Support
          </a>
        </li>
      </ul>
    </div>
    <div class="navbar-end space-x-3">
      <ButtonTheme />

      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full ring ring-warning">
            <img :src="selectedImage" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-200 rounded-box w-52">
          <li class="flex mb-2">
            <h1 class="text-sm flex justify-center">
              Connect with<strong class="font-bold">{{ username }}</strong>
            </h1>
          </li>
          <li>
            <router-link to="/admin/dashboard/user-setting" class="font-semibold">
              <font-awesome-icon icon="user" />
              User settings
            </router-link>
          </li>
          <li>
            <button @click="Logout" class="font-semibold">
              <font-awesome-icon icon="arrow-right-from-bracket" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref , onMounted } from "vue";
import ButtonTheme from "@components/navbar/end/ButtonTheme.vue";
import { useLoginStore, useUserStore } from '@store/store';

// Use Store Login
const loginStore = useLoginStore();
// Use Store User
const userStore = useUserStore();

// Function Logout
function Logout() {
  loginStore.setLoginState(false);
  userStore.dropUser();
  router.push({ name: "admin" });
}
// Plugin vue
import { computed } from "vue";
// Store pinia
import { useImageStore } from "@store/store.js"; // Importez votre store Pinia
import router from "../../router";
// Use Store Image
const selectedImage = computed(() => useImageStore().selectedImage);

const username = ref("");

onMounted(() => {
  username.value = localStorage.getItem('username');
});




</script>
