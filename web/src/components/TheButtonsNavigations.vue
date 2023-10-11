<template>
    <div class="flex justify-center space-x-4 mt-10">
        <div class="btn btn-outline btn-secondary" @click="this.$router.go(-1)">
            <font-awesome-icon icon="arrow-left"></font-awesome-icon>
            <a class="font-bold">Back</a>
        </div>
        <router-link  :to="{ name: 'home' }">
            <div class="btn btn-outline btn-secondary">
                <font-awesome-icon icon="home"></font-awesome-icon>
                <a class="font-bold">Home</a>
            </div>
        </router-link>
    </div>
</template>

<script setup>
//
</script>