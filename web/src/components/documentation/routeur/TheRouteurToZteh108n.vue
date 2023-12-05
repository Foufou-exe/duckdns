<template>
<h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">ZTE H108N <font-awesome-icon  icon="shield-halved" class="text-warning"/></h1>

<p class="font-thin mb-5">
    This guide is designed specifically for the ZTE H108N router.
</p>
<a href="http://wwwen.zte.com.cn/en/products/access/cpe/201405/t20140522_424137.html" class="flex justify-center mt-4 mb-4">
    <button class="btn btn-primary btn-outline btn-wide">
        <font-awesome-icon icon="question-circle" />
        <span>Help ZTE H108N</span>
    </button>
</a>

<h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS on ZTE H108N</h2>

<p class="font-thin mb-5">
    The ZTE H108N router features a DDNS panel located in the Applications section of its web interface. While the default DDNS scheme may not be supported, it is possible to use it for simple http(s) requests.
</p>

<p class="font-thin mb-5">
    It's vital to append a "?" at the end of the URL to ensure any additional text added by the router is disregarded.
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>https://duckdns.org/update/exampledomain/yourtoken?<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>https://duckdns.org/update/exampledomain/yourtoken/ipaddress?</code></pre>
</div>

<p class="font-thin mb-5">
    Fill in the details as described below:
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>Enable: Checked<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>Service Name: dyndns</code></pre>
    <pre data-prefix="3"><code>Custom Server: www.duckdns.org</code></pre>
    <pre data-prefix="4"><code>Custom URL: /update/exampledomain/a7c4d0ad-114e-40ef-ba1d-d217904a50f2?</code></pre>
    <pre data-prefix="5"><code>Hostname: exampledomain</code></pre>
    <pre data-prefix="6"><code>Provider: NA</code></pre>
    <pre data-prefix="7"><code>Password: NA</code></pre>
</div>

<p class="font-thin mb-5">
    Below is a representation of what this section should look like within the web interface. Ensure you follow the steps as outlined above.
</p>

<div class="flex justify-center">
    <img :src="images" alt="">
</div>

</template>

<script setup>
const images = '/images/capture/routeur/zteh108n/zteh108n.png'
</script>