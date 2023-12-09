<template>
<h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">Technicolor TG582n <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

<p class="font-thin mb-5">
    This guide is tailored for the Technicolor TG582n router, though it may apply to other models as well.
</p>

<h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS on Technicolor TG582n</h2>

<p class="font-thin mb-5">
    Begin by using telnet to connect to the router.
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>telnet 192.168.1.1<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
</div>

<p class="font-thin mb-5">
    After logging in, input the following commands, pressing <kbd class="kbd">Enter</kbd> after each line:
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>dyndns<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>service</code></pre>
    <pre data-prefix="3"><code>modify</code></pre>
    <pre data-prefix="4"><code>name = custom</code></pre>
    <pre data-prefix="5"><code>[server] = www.duckdns.org</code></pre>
    <pre data-prefix="6"><code>[port] = www-http</code></pre>
    <pre data-prefix="7"><code>[request] = /update/exampledomain/a7c4d0ad-114e-40ef-ba1d-d217904a50f2</code></pre>
    <pre data-prefix="8"><code>[updateinterval] = 10800</code></pre>
    <pre data-prefix="9"><code>[retryinterval] = 30</code></pre>
    <pre data-prefix="10"><code>[max_retry] = 3</code></pre>
    <pre data-prefix="11"><code>saveall</code></pre>
</div>

<p class="font-thin mb-5">
    Next, navigate to the router's GUI interface in your web browser and proceed to the dyndns settings. <br> <br> Fill in the details as follows:
</p>


<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>User: NA<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>Password: Enter any value as long as it's not blank</code></pre>
    <pre data-prefix="3"><code>modify</code></pre>
    <pre data-prefix="4"><code>Service: custom</code></pre>
    <pre data-prefix="5"><code>Host: www.duckdns.org</code></pre>
</div>
<p class="font-thin mb-5">
    The router's dyndns settings page should appear similar to the provided mockup below.
</p>

<div class="flex justify-center">
    <img :src="images" alt="technicolor">
</div>


</template>

<script setup>
const images = '/images/capture/routeur/technicolor/technicolor.png'
</script>