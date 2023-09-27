
<template>
    <!-- INFO : Modal clique -->
    <button onclick="login.showModal()" class="btn btn-active btn-secondary ml-2 text-white">
        <font-awesome-icon icon="right-to-bracket" />
        Se connecter
    </button>

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

<script>

export default {
    name: 'ButtonConnexion',
}
</script>

<script setup>
import ButtonPersona from './ModelsConnexion/ButtonPersona.vue';
import ButtonReddit from './ModelsConnexion/ButtonReddit.vue';
import ButtonTwitter from './ModelsConnexion/ButtonTwitter.vue';
import ButtonGithub from './ModelsConnexion/ButtonGithub.vue';
import ButtonGoogle from './ModelsConnexion/ButtonGoogle.vue';

</script>