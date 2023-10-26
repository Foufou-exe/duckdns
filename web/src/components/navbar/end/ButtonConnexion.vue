
<template>
    <!-- INFO : Modal clique -->
    <button onclick="login.showModal()" class="btn btn-active btn-secondary ml-2 text-white text-xs">
        <font-awesome-icon icon="right-to-bracket" />
        Se connecter
    </button>
    <TheModalsConnexion />
</template>

<script setup>
    import TheModalsConnexion from '@components/connexion/TheModalsConnexion.vue';
</script>