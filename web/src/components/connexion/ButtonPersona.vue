<template>
  <form method="dialog">
    <button
      onclick="loginPersona.showModal()"
      class="btn btn-block bg-black text-white hover:bg-neutral-focus font-semibold"
    >
      <font-awesome-icon icon="user" size="xl" />
      Connect with Persona
    </button>
  </form>
  <dialog id="loginPersona" class="modal">
    <!-- Information sur Persona -->
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 class="font-extrabold text-2xl flex justify-center mb-8">
        Persona Login
      </h3>
      <div v-show="showAlert1" class="alert alert-info mb-2 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-current shrink-0 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span class="font-semibold"
          >Please consider moving off Persona, by deleting your domains and
          re-adding them to another login.</span
        >
        <button
          @click="showAlert1 = false"
          class="btn btn-sm btn-circle btn-ghost"
        >
          ✕
        </button>
      </div>
      <div v-show="showAlert2" class="alert alert-warning mb-2 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span class="font-semibold"
          >Persona is now discontinued, however we still allow you to login with
          your email address and account token.</span
        >
        <button
          @click="showAlert2 = false"
          class="btn btn-sm btn-circle btn-ghost"
        >
          ✕
        </button>
      </div>
      <div v-show="showAlert3" class="alert alert-warning mb-2 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span class="font-semibold"
          >If you lose your token or forget your token, we have no-way of giving
          you access.</span
        >
        <button
          @click="showAlert3 = false"
          class="btn btn-sm btn-circle btn-ghost"
        >
          ✕
        </button>
      </div>

      <!-- Information user to connect Persona -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Email :</span>
        </label>
        <label class="input-group">
          <input
            type="text"
            placeholder="exemple@duckdns.org"
            class="input input-bordered w-full"
          />
        </label>
      </div>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Token :</span>
        </label>
        <label class="input-group mb-5">
          <input
            type="text"
            placeholder="1258zfezf5z84ffzg3rg84zg49"
            class="input input-bordered w-full"
          />
        </label>
      </div>

      <div class="flex">
        <div class="flex-1">
          <button
            class="btn bg-neutral-focus text-white hover:bg-primary-focus font-semibold"
          >
            <font-awesome-icon icon="user" class="text-white" />
            Login
          </button>
        </div>

        <div class="flex-none">
          <form method="dialog">
            <button
              class="btn bg-neutral-focus text-white hover:bg-primary-focus font-semibold"
              onclick="login.showModal()"
            >
              <font-awesome-icon icon="arrow-left" class="text-white" />
              Back
            </button>
          </form>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref } from "vue";
const showAlert1 = ref(true);
const showAlert2 = ref(true);
const showAlert3 = ref(true);
</script>
