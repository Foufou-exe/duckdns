<template>
    <div class="mb-5">
        <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-5">Documentation</h1>
        <p class="font-thin">
            Welcome to the Duck DNS documentation page. 
            Here you'll find detailed guides, tips and tutorials to help you get the most out of Duck DNS, whatever your level of experience.
        </p>
    </div>

    <SelectDocumentation />
    <div class="mb-5">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">What now?</h1>
        <p class="font-thin">
            Well you probably want to setup port forwarding on your router to make use of your new DDNS name
            we recommend <a href="https://portforward.com/" class="link">portforward.com</a> to learn all about this.
        </p>
    </div>
</template>

<script setup>
import SelectDocumentation from '@components/documentation/SelectDocumentation.vue';
</script>