<template>
  <div
    ref="vantaRef"
    :class="['flex justify-center items-center h-screen bg-cover', urlClicked ? bgFond2 : bgFond1]"
    >
    <div class="">
      <div class="flex justify-center">
        <h1 :class="['text-3xl md:text-3xl lg:text-5xl mb-5 font-extrabold',titreClicked ? 'titre-green' : 'titre-purple']" >
          Admin Panel
        </h1>
      </div>
      <div class="flex justify-center">
        <h2 class="text-2xl md:text-2xl lg:text-2xl mb-5 font-bold item-center text-white">
          Login
        </h2>
      </div>
      <div class="flex flex-col">
        <strong :class="['mb-1' ,strongClicked ? 'strong-green' : 'strong-purple']" >User :</strong>
        <input
          id="identifiant"
          type="text"
          :class="['input w-full max-w-xs bg-white font-semibold', inputClicked ? 'input-green' : 'input-purple']"
          placeholder="Login"
        />
      </div>

      <div class="flex flex-col mt-4">
        <strong :class="['mb-1' ,strongClicked ? 'strong-green' : 'strong-purple']" >Password :</strong>
        <input
          id="password"
          type="Password"
          :class="['input w-full max-w-xs bg-white font-semibold', inputClicked ? 'input-green' : 'input-purple']"
          placeholder="Password"
        />
      </div>
      <div class="flex justify-between mt-10">
        <details class="dropdown dropdown-end">
          <summary tabindex="0" :class="['btn',btnClicked ? 'btn-green' : 'btn-purple']">
            <font-awesome-icon
              icon="language"
              class="text-lg text-white"
            ></font-awesome-icon>
            <font-awesome-icon
              icon="chevron-down"
              class="text-white text-xs hidden sm:block"
            ></font-awesome-icon>
          </summary>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
          >
            <!-- <li>
              <routeur-link class="hover:font-bold"
                ><span class="badge badge-outline badge-sm font-semibold"
                  >FR</span
                >Français</routeur-link
              >
            </li>
            <li>
              <routeur-link class="hover:font-bold"
                ><span class="badge badge-outline badge-sm font-semibold"
                  >EN</span
                >English</routeur-link
              >
            </li> -->
          </ul>
        </details>
        <button :class="['btn text-white',btnClicked ? 'btn-green' : 'btn-purple']" @click="Connexion">
          <font-awesome-icon icon="sign-in-alt" class="text-lg text-white" />
          Login
        </button>
      </div>
      <div :class="['btn fixed',btnSwitchClicked ? 'btn-switch-green' : 'btn-switch-purple']" style="right: 20px; bottom: 20px" @click="toggleTreeIcon">
        <font-awesome-icon :icon="treeIconClicked ? 'broom' : 'tree'" class="text-white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import idlogin from "@data/adminProfile.json";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { ref } from 'vue';

const treeIconClicked = ref(false);
const titreClicked = ref(false);
const strongClicked = ref(false);
const inputClicked = ref(false);
const btnClicked = ref(false);
const btnSwitchClicked = ref(false);                                                                                                                                                                                                                                                                                                             
const btnSwitchHover = ref(false);
const urlClicked = ref(false);

const bgFond1 = 'bg-[url(/images/fond.png)]';
const bgFond2 = 'bg-[url(/images/fond2.png)]';

// Simplification de toggleTreeIcon
const toggleStates = [treeIconClicked, titreClicked, strongClicked, inputClicked, btnClicked, btnSwitchClicked, btnSwitchHover, urlClicked];
function toggleTreeIcon() {
  toggleStates.forEach(state => state.value = !state.value);
}

const toast = useToast({
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
});

const router = useRouter();

// Connection Optimisation
function Connexion() {
  const identifiant = document.getElementById("identifiant").value;
  const password = document.getElementById("password").value;
  const user = idlogin["Users"][identifiant];

  if (user && user.user === identifiant && user.password.includes(password)) {
    router.push("/admin/dashboard");
  } else {
    toast.error("Incorrect user name or password");
  }
}

</script>
