<template>
    <!-- Connect with Reddit -->
    <form method="dialog">
    <button onclick="loginReddit.showModal()" class="btn btn-block text-white hover:bg-orange-500 bg-orange-600 font-semibold">
        <font-awesome-icon icon="fa-brands fa-reddit-alien"  size="xl" /> 
        Connect with Reddit
    </button>
    </form>

    <dialog id="loginReddit" class="modal">

    <!-- Information sur Reddit -->
    <div class="modal-box">
        <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-extrabold text-2xl flex justify-center mb-8">Reddit Login</h3>
        <div v-show="showAlertReddit1" class="alert alert-info mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span class="font-semibold">Please consider moving off Reddit Login, by deleting your domains and re-adding them to another login.</span>
        <button @click="showAlertReddit1 = false" class="btn btn-sm btn-circle btn-ghost">✕</button>
        </div>
        <div v-show="showAlertReddit2" class="alert alert-warning mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span class="font-semibold">Reddit Legal has requested that we stop using the Reddit oAuth API to allow you to login to this site.</span>
        <button @click="showAlertReddit2 = false" class="btn btn-sm btn-circle btn-ghost">✕</button>
        </div>
        <div v-show="showAlertReddit3" class="alert alert-warning mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span class="font-semibold">If you lose your token or forget your token, we have no-way of giving you access.</span>
        <button @click="showAlertReddit3 = false" class="btn btn-sm btn-circle btn-ghost">✕</button>
        </div>


        <!-- Information user to connect Persona -->
        <div class="form-control">
        <label class="label">
            <span class="label-text">Your Reddit Name</span>
        </label>
        <label class="input-group">
            <span class="bg-neutral"><font-awesome-icon icon="user" class="text-white" /></span>
            <input type="text" placeholder="duckdns" class="input input-bordered w-full" />
        </label>
        </div>

        <div class="form-control">
        <label class="label">
            <span class="label-text" >Your Token</span>
        </label>
        <label class="input-group mb-5">
            <span class="bg-neutral"><font-awesome-icon icon="coins" class="text-white" /></span>
            <input type="text" placeholder="1258zfez189zdzdg84zg49" class="input input-bordered w-full" />
        </label>
        </div>

        <div class="flex">
        <div class="flex-1">
            <button class="btn bg-neutral-focus text-white hover:bg-primary-focus font-semibold">
            <font-awesome-icon icon="user" class="text-white"/> 
            Login
            </button>
        </div>

        <div class="flex-none">
            <form method="dialog">
            <button class="btn bg-neutral-focus text-white hover:bg-primary-focus font-semibold"  onclick="login.showModal()">
                <font-awesome-icon icon="arrow-left" class="text-white"/> 
                Back
            </button>
            </form>
        </div>

        </div>
    </div>
</dialog>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'App',
    setup() {

    const showAlertReddit1 = ref(true);
    const showAlertReddit2 = ref(true);
    const showAlertReddit3 = ref(true);
    return {
      showAlertReddit1,
      showAlertReddit2,
      showAlertReddit3,
    };
    },
}
</script>
