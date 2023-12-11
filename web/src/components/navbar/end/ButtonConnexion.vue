
<template>
    <!-- TODO: Modals clicks -->
    <button onclick="login.showModal()" class="btn btn-warning ml-2  text-xs">
        <font-awesome-icon icon="right-to-bracket" />
        Login
    </button>
    <TheModalsConnexion />
</template>

<script setup>
    import TheModalsConnexion from '@components/connexion/TheModalsConnexion.vue';
</script>