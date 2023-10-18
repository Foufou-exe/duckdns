<template>
<h1 class="text-4xl font-extrabold mb-5">GnuDIP.http <font-awesome-icon :icon="['fas', 'code']" class="text-secondary"/></h1>

<p class="font-thin mb-5">
    GnuDIP.http is a protocol often found in various ADSL routers. For instance, the Huawei HG533 includes this protocol option. Below is a step-by-step guide for configuring your router to work with DuckDNS using GnuDIP.http.
</p>
<a href="http://gnudip2.sourceforge.net/gnudip-www/latest/gnudip/html/protocol.html" class="flex justify-center mt-4 mb-4">
    <button class="btn btn-primary btn-outline btn-wide">
        <font-awesome-icon icon="question-circle" />
        <span>Help GnuDIP.http</span>
    </button>
</a>
<h2 class="text-2xl font-bold mb-4">Router Configuration for GnuDIP.http</h2>

<p class="font-thin mb-5">
    Begin by accessing the web frontend of your router. In most scenarios, you can reach it at <a href="http://192.168.1.1" class="text-blue-500 underline">http://192.168.1.1</a>. The default login credentials are usually set to "admin" for both username and password.
</p>

<p class="font-thin mb-5">
    Once logged in, navigate to the "<b>Advanced Settings</b>" section and select the "DDNS" option.
</p>

<h2 class="text-2xl font-bold mb-4">DDNS Configuration Details</h2>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>Service provider: Others<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>Host: exampledomain</code></pre>
    <pre data-prefix="3"><code>User name: NA</code></pre>
    <pre data-prefix="4"><code>Server address: duckdns.org/gnudip/</code></pre>
    <pre data-prefix="5"><code>Protocol: GNUDip.http</code></pre>
    <pre data-prefix="6"><code>WAN connection: nas_0_38</code></pre>
    <pre data-prefix="7"><code>Domain: duckdns.org</code></pre>
    <pre data-prefix="8"><code>Password: a7c4d0ad-114e-40ef-ba1d-d217904a50f2</code></pre>
    <pre data-prefix="9"><code>Server port: 80</code></pre>
    <pre data-prefix="10"><code>Service name: DuckDNS</code></pre>
</div>


<p class="font-thin mb-5">
    Upon successful configuration, it's recommended to verify if your IP address reflects the desired updates within the domains panel of DuckDNS. In case of discrepancies or non-updates, review the entered details, especially the host (your domain) and password (your token).
</p>

<div class="flex justify-center">
        <img src="images/capture/routeur/gnudip/gnudip-http.png" alt="">
    </div>
</template>

<script setup>
//
</script>