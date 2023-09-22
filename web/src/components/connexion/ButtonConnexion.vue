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
import ButtonPersona from './persona/ButtonPersona.vue';
import ButtonReddit from './reddit/ButtonReddit.vue';
import ButtonTwitter from './twitter/ButtonTwitter.vue';
import ButtonGithub from './github/ButtonGithub.vue';
import ButtonGoogle from './google/ButtonGoogle.vue';

export default {
    name: 'ButtonConnexion',
    components: {
        ButtonPersona,
        ButtonReddit,
        ButtonTwitter,
        ButtonGithub,
        ButtonGoogle
    }
}
</script>