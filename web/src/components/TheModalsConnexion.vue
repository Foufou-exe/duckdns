<template>
    <!-- Firts : Principal Modal -->
    <dialog id="login" class="modal">

        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="font-extrabold text-2xl flex justify-center mb-8">Login/Sign up</h3>
            <ButtonPersona />
            <!-- Divison in two partie -->
            <div class="divider">OR</div>
            <ButtonGithub />
            <ButtonGoogle />
            <ButtonTwitter />
            <ButtonReddit />
            
        </div>

    </dialog>

</template>

<script setup>
import ButtonPersona from '@components/ConnexionModelsButtonPersona.vue';
import ButtonReddit from '@components/ConnexionModelsButtonReddit.vue';
import ButtonTwitter from '@components/ConnexionModelsButtonTwitter.vue';
import ButtonGithub from '@components/ConnexionModelsButtonGithub.vue';
import ButtonGoogle from '@components/ConnexionModelsButtonGoogle.vue';

</script>