<template>
  <div ref="vantaRef" class="flex justify-center items-center h-screen bg-[url('images/fond.png')] bg-cover">
    <div>
      <h1 class="text-3xl md:text-3xl lg:text-5xl mb-5 font-extrabold text-[#615e96] pl-10 pr-10 pt-5">
        Admin Panel
      </h1>
      <div class="pl-10 pr-10 pb-5">
        <div class="flex justify-center">
          <h2 class="text-2xl md:text-2xl lg:text-2xl mb-5 font-bold item-center text-white">
            Login
          </h2>
        </div>
        <div class="flex flex-col">
          <strong class="text-[#5a63b1] mb-1">User :</strong>
          <input
            id="identifiant"
            type="text"
            class="input w-full max-w-xs bg-white text-[#828efe] font-semibold"
            placeholder="Login"
          />
        </div>

        <div class="flex flex-col mt-4">
          <strong class="text-[#5a63b1] mb-1">Password :</strong>
          <input
            id="password"
            type="Password"
            class="input w-full max-w-xs bg-white text-[#828efe] font-semibold"
            placeholder="Password"
          />
        </div>

        <div class="flex justify-between mt-10">
          <details class="dropdown dropdown-end">
            <summary tabindex="0" class="btn bg-[#8776b7] border-[#8776b7]">
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
              <li>
                <routeur-link
                  class="hover:font-bold"
                  ><span class="badge badge-outline badge-sm font-semibold"
                    >FR</span
                  >Français</routeur-link
                >
              </li>
              <li>
                <routeur-link
                  class="hover:font-bold"
                  ><span class="badge badge-outline badge-sm font-semibold"
                    >EN</span
                  >English</routeur-link
                >
              </li>
            </ul>
          </details>
          <button class="btn bg-[#8776b7] border-[#8776b7] text-white" @click="Connexion">
            <font-awesome-icon icon="sign-in-alt" class="text-lg text-white" />
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import idlogin from "@data/adminProfile.json";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";



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
function Connexion() {
  const identifiant = document.getElementById("identifiant").value;
  const password = document.getElementById("password").value;

  if (
    idlogin["Users"].Editor.user === identifiant ||
    idlogin["Users"].Admin.user === identifiant
  ) {
    if (identifiant === "Editor") {
      if (idlogin["Users"].Editor.password.includes(password)) {
        router.push("/admin/dashboard");
      } else {
        return toast.error("Mot de passe incorrect 📌");
      }
    } else if (identifiant === "Admin") {
      if (password === idlogin["Users"].Admin.password) {
        router.push("/admin/dashboard");
      } else {
        return toast.error("Mot de passe incorrect 📌");
      }
    } else {
      return toast.error("Nom d'utilisateur inconnu ❌");
    }
  } else {
    return toast.error("Nom d'utilisateur inconnu ❌");
  }
}
</script>
