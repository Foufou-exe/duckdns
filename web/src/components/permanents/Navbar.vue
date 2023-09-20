<template>
  <div class="navbar">
    <div class="navbar-start">
      <details  class="dropdown md:hidden">
        <summary tabindex="0" class="btn btn-ghost">
          <font-awesome-icon icon="bars" size="xl" />
        </summary>
        <ul tabindex="0" class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
          <li class=" hover:font-bold">
            <a href="/" class="">
              <font-awesome-icon icon="house" />
              Home
            </a>
          </li>
          <li class=" hover:font-bold">
            <a>
              <font-awesome-icon icon="circle-info" />
              About
            </a>
          </li>
          <li class=" hover:font-bold">
            <a>
              <font-awesome-icon icon="wrench" />
              Spécifications
            </a>
          </li>
          <li class=" hover:font-bold">
            <a>
              <font-awesome-icon icon="file" />
              Documentation
            </a>
          </li>
          <li class=" hover:font-bold">
            <a>
              <font-awesome-icon icon="question" />
              FAQ
            </a>
          </li>
        </ul>
      </details>

      <div class="btn btn-ghost">
        <img src="/duck.png" class="w-10 h-10" />
        <a class="text-3xl font-extrabold">Duck DNS</a>
      </div>
    </div>


    <div class="navbar-center hidden lg:flex" id="app">
        <ul class="menu menu-horizontal px-1">
            <li class=" hover:font-bold mr-2">
                <a href="/">
                    <font-awesome-icon icon="house" />
                    Home
                </a>
            </li>
            <li class=" hover:font-bold mr-2">
                <a>
                    <font-awesome-icon icon="circle-info" />
                    About
                </a>
            </li>
            <li class="hover:font-bold mr-2">
                <a>
                    <font-awesome-icon icon="wrench" />
                    Spécifications
                </a>
            </li>
            <li class=" hover:font-bold mr-2">
                <a>
                    <font-awesome-icon icon="file" />
                    Documentation
                </a>
            </li>
            <li class=" hover:font-bold">
                <a>
                    <font-awesome-icon icon="question" />
                    FAQ
                </a>
            </li>
        </ul>
    </div>


    <div class="navbar-end" id="app">

      <svg class="fill-amber-400 w-7 h-10 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        
      <input type="checkbox" class="toggle toggle-secondary" checked  data-toggle-theme="night,winter" data-act-class="ACTIVECLASS"/>
      
      <svg class="fill-current w-7 h-10 ml-2 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        

      <!-- IMPORTANT :  Garder jusqu'a qu'on teste les connexions avec les réseaux sociaux -->

      <!-- <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full ring ring-secondary">
            <img src="/images/profile-exemple.jpg" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
          <li>
            <a onclick="my_modal_3.showModal()">
                <font-awesome-icon icon="right-to-bracket" />
                Se connecter
            </a>
          </li>
          <dialog id="my_modal_3" class="modal">
            <div class="modal-box">
              <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <h3 class="font-extrabold text-2xl flex justify-center mb-8">Login/Sign up</h3>

              <a class="btn btn-block bg-black text-white hover:bg-accent font-semibold">
                <font-awesome-icon icon="user" size="xl" /> 
                Connect with Personnal Account
              </a>
              <div class="divider">OR</div>
              <a class="btn btn-block bg-black text-white hover:bg-green-500 font-semibold mb-2">
                <font-awesome-icon icon="fa-brands fa-github" size="xl" /> 
                Connect with GitHub
              </a>
              <a class="btn btn-block text-white hover:bg-red-500 bg-primary-focus font-semibold mb-2">
                <font-awesome-icon icon="fa-brands fa-google" size="xl"/> 
                Connect with Google
              </a> 

              <a class="btn btn-block text-white hover:bg-secondary-focus bg-neutral font-semibold mb-2">
                <font-awesome-icon icon="fa-brands fa-x-twitter" size="xl" /> 
                Connect with Twitter
              </a>
        
              <a class="btn btn-block text-white hover:bg-secondary-focus  bg-orange-600 font-semibold">
                <font-awesome-icon icon="fa-brands fa-reddit-alien"  size="xl" /> 
                Connect with Reddit
              </a>
            </div>
          </dialog>
        </ul>
      </div> -->



      <button onclick="my_modal_3.showModal()" class="btn btn-active ml-2">
        <font-awesome-icon icon="right-to-bracket" />
        Se connecter
      </button>
      <dialog id="my_modal_3" class="modal">
        <div class="modal-box">
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 class="font-extrabold text-2xl flex justify-center mb-8">Login/Sign up</h3>

          <buttona class="btn btn-block bg-black text-white hover:bg-neutral-focus font-semibold">
            <font-awesome-icon icon="user" size="xl" /> 
            Connect with Personnal Account
          </buttona>
          <div class="divider">OR</div>
          <button class="btn btn-block bg-black text-white hover:bg-neutral font-semibold mb-2">
            <font-awesome-icon icon="fa-brands fa-github" size="xl" /> 
            Connect with GitHub
          </button>
          <button class="btn btn-block text-white hover:bg-primary-focus  bg-red-500 font-semibold mb-2">
            <font-awesome-icon icon="fa-brands fa-google" size="xl"/> 
            Connect with Google
          </button> 

          <button class="btn btn-block text-white hover:bg-secondary-focus bg-neutral font-semibold mb-2">
            <font-awesome-icon icon="fa-brands fa-x-twitter" size="xl" /> 
            Connect with Twitter
          </button>
          <div class="indicator mt-2 btn-block">
            <!-- Deletion of the span when it is no longer considered new -->
            <span class="indicator-item indicator-start  sm:indicator-middle md:indicator-top lg:indicator-center xl:indicator-end badge badge-primary link">New</span>
            <button class="btn btn-block text-white hover:bg-orange-500 bg-orange-600 font-semibold">
              <font-awesome-icon icon="fa-brands fa-reddit-alien"  size="xl" /> 
              Connect with Reddit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  </div>

</template>

<script>
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'

export default {
  setup() {
    onMounted(() => {
      themeChange(false)
    })
  },
}

</script>