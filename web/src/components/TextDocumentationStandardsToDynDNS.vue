<template>
    <h1 class="text-4xl font-extrabold mb-5">DynDns <font-awesome-icon :icon="['fas', 'code']" class="text-secondary"/></h1>

    <p class="font-thin mb-5">
        DuckDNS offers an endpoint compatible with DynDns. For further details about DynDns's endpoint, you can consult <a href="https://help.dyn.com/remote-access-api/perform-update/" class="text-blue-500 underline">DynDns's documentation</a>. Numerous clients, such as inadyn, that support DynDns should ideally function seamlessly with this. Additionally, the newer v3 endpoint is also supported.
    </p>

    <h2 class="text-2xl font-bold mb-4">Configuring DynDns with DuckDNS</h2>

    <p class="font-thin mb-5">
        Remember to modify the token and domain to match the ones you intend to update. Clients will typically format requests as shown below. Including the IP address is optional; if it's absent or left blank, the system will automatically detect it:
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code>https://nouser:a7c4d0ad-114e-40ef-ba1d-d217904a50f2@www.duckdns.org/nic/update?hostname=exampledomain&myip=1.1.1.1&wildcard=NOCHG&mx=NOCHG&backmx=NOCHG<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <h2 class="text-2xl font-bold mb-4">v3 Version</h2>

    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code>http://nouser:a7c4d0ad-114e-40ef-ba1d-d217904a50f2@www.duckdns.org/v3/update?hostname=exampledomain&myip=1.1.1.1<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        When making a request, the service will respond with one of the following statuses: <strong>good</strong>, <strong>bad</strong>, or <strong>nochg</strong>.
    </p>

</template>

<script setup>
//
</script>