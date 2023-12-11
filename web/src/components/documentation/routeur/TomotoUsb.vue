<template>
<h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">TomatoUSB <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

<p class="font-thin mb-5">
    This guide provides instructions on setting up DuckDNS with tomatoUSB.
</p>

<h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS with tomatoUSB</h2>

<ol class="list-decimal pl-5 mb-5">
    <li class="mb-3">
        Log in to the tomatoUSB web panel.
    </li>
    <li class="mb-3">
        Navigate to the <strong>Basic</strong> section and then the <strong>DDNS</strong> section.
    </li>
    <li class="mb-3">
        In the <strong>Dynamic DNS 2</strong> section, enter the following URL (ensure you replace the token and domain with your specific details):

        <div class="mockup-code mb-5">
            <pre data-prefix="1"><code>https://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        </div>    
    </li>
    <li class="mb-3">
        Choose either <strong>HTTP</strong> or <strong>HTTPS</strong> as your preferred protocol.
    </li>
    <img :src="images" alt="tomatousb">
</ol>

<p class="font-thin mb-5">
    Once the steps are completed, your DuckDNS should be set up with tomatoUSB. Ensure your token and domain are updated correctly.
</p>
</template>

<script setup>
const images = '/images/capture/routeur/tomoto/tomatousb.png'
</script>
