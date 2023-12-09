<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">Hardware <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

    <p class="font-thin mb-5">
        For those who are enthusiastic about building hardware solutions using the Arduino platform and the ESP8266 core, you're in luck! A custom solution integrating DuckDNS with hardware and an accompanying web interface has been developed by Davide Gironi.
    </p>

    <h2 class="text-2xl font-bold mb-4">DuckDNS on Custom Hardware</h2>

    <p class="font-thin mb-5">
        Davide Gironi has meticulously crafted a hardware board embedded with custom firmware to utilize DuckDNS. Furthermore, he has integrated a user-friendly web interface for easy configurations and adjustments.
    </p>

    <p class="font-thin mb-5">
        A comprehensive guide outlining the complete setup process can be found on <a href="#" class="text-blue-500 underline">Davide Gironi's blog</a>. (Note: Actual link to the blog can be embedded in the URL placeholder).
    </p>

    <p class="font-thin mb-5">
        Prior to initializing the setup, ensure to replace the placeholders for your domain and token with the appropriate details.
    </p>

    <h2 class="text-2xl font-bold mb-4">Configuration Details</h2>

    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code>domain : exampledomain</code></pre>
        <div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div>
        <pre data-prefix="2"><code>token : a7c4d0ad-114e-40ef-ba1d-d217904a50f2</code></pre>
    </div>

    <p class="font-thin mb-5">
        Before proceeding with any configurations or installations, always make sure to maintain backups of your settings and data to facilitate a hassle-free recovery process, if required.
    </p>

</template>

<script setup>
//
</script>