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
        <GoogleTranslateSelect
          default-language-code="en"
          default-page-language-code="en"
          :fetch-browser-language="true"
          trigger="click"
          :class="['btn text-white',btnClicked ? 'btn-green' : 'btn-purple']"
        />
  
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
// import idlogin from "@data/users.json";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { ref } from 'vue';
import { useLoginStore, useUserStore } from '@store/store';
import GoogleTranslateSelect from '@google-translate-select/vue3'

const loginStore = useLoginStore();
const treeIconClicked = ref(false);
const titreClicked = ref(false);
const strongClicked = ref(false);
const inputClicked = ref(false);
const btnClicked = ref(false);
const btnSwitchClicked = ref(false);                                                                                                                                                                                                                                                                                                             
const btnSwitchHover = ref(false);
const urlClicked = ref(false);
const userStore = useUserStore();
const bgFond1 = 'bg-[url(/images/fond.png)]';
const bgFond2 = 'bg-[url(/images/fond2.png)]';


loginStore.initializeLogin();

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

async function Connexion() {
  const identifiant = document.getElementById("identifiant").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: identifiant, password: password })
    });

    if (!response.ok) {
      throw new Error('Erreur de connexion');
    }

    const user = await response.json();
    loginStore.setLoginState(true)
    userStore.setUser(user.name);
    router.push("/admin/dashboard");
  } catch (error) {
    console.error(error);
    toast.error("Incorrect user name or password");
  }
}
</script>
