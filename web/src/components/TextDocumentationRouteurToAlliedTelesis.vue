<template>
<h1 class="text-4xl font-extrabold mb-5">Allied Telesis AT-AR450S <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

<p class="font-thin mb-5">
    The following guide outlines the procedure to integrate DuckDNS with an allied telesis AT-AR450S router.
</p>

<a href="http://www.alliedtelesis.co.uk/p-2011.html" class="flex justify-center mt-4 mb-4">
    <button class="btn btn-primary btn-outline btn-wide">
        <font-awesome-icon icon="question-circle" />
        <span>Help Allied telesis</span>
    </button>
</a>

<h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS on allied telesis AT-AR450S</h2>

<p class="font-thin mb-5">
    Certain Allied Telesis models, like the AT-AR450S, have the capability to make direct http(s) requests. To integrate DuckDNS, follow the steps provided:
</p>

<p class="font-thin mb-5">
    Utilize the provided URL format for your DuckDNS domain and token: <br><br>
    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>https://duckdns.org/update/exampledomain/yourtoken<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>
    If required, you can specify a specific IP address: <br><br>
    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>https://duckdns.org/update/exampledomain/yourtoken/ipaddress<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>
</p>

<h3 class="text-xl font-semibold mb-3">File Modification</h3>
<p class="font-thin mb-5">
    Edit or create the <code>pppupipc.scp</code> file, then add the provided lines to tailor the http request for your domain.
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>del file=ddnsipup.tx<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>load method=http destination=flash destfile=ddnsipup.txt fi=update/exampledomain/a7c4d0ad-114e-40ef-ba1d-d217904a50f2  server=www.duckdns.org</code></pre>
</div>

<h3 class="text-xl font-semibold mb-3">Trigger Configuration</h3>
<p class="font-thin mb-5">
    Activate the trigger mechanism upon a successful ppp event using the following commands:
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>enable trigger<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>create trigger=1 interface=ppp1 event=up cp=ipcp script=pppupipc.scp</code></pre>
</div>


</template>

<script setup>
//
</script>