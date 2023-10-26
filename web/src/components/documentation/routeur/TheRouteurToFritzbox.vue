<template>
<h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">Fritzbox <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

<p class="font-thin mb-5">
    Here's a guide on how to set up DuckDNS with a Fritzbox router.
</p>
<a href="http://www.fritzbox.eu/en/index.php" class="flex justify-center mt-4 mb-4">
    <button class="btn btn-primary btn-outline btn-wide">
        <font-awesome-icon icon="question-circle" />
        <span>Help Fritzbox</span>
    </button>
</a>

<h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS with Fritzbox</h2>

<p class="font-thin mb-5">
    <strong>Note:</strong> You need to adjust the token and domain to the ones you intend to use.
</p>

<p class="font-thin mb-5">
    Some firmware versions (notably on the Fritz!Box 7170) don't support HTTPS and have issues with the &ip='ipaddr' segment of the URL. If the HTTPS URL doesn't function as intended, there's an alternative URL you can utilize.
</p>

<p class="mb-5">
    To proceed with the setup, access the web interface of your Fritzbox router. Navigate to the page where you configure dyndns services and opt for the custom service.
</p>

<h3 class="text-xl font-semibold mb-3">Standard Update URL</h3>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>https://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip=<b class="text-warning">'ipaddr'</b>&ipv6=<b class="text-warning">'ip6addr'</b><div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
</div>

<p class="mb-5 font-thin">
    Here are some notes on the above URL :
    <ul class="list-disc pl-5 mb-5">
        <li>The domain corresponds to your DuckDNS subdomain.</li>
        <li>The password is your unique token.</li>
        <li>Set the username to "none".</li>
    </ul>
</p>

<h3 class="text-xl font-semibold mb-3">Alternative URL (for Fritz!Box 7170)</h3>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>http://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip=<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
</div>

<p class="font-thin mb-5">
    This version is validated to function on the Fritz!Box 7170, especially if your IP isn't auto-updating as expected.
</p>

<p class="font-thin mb-5">
    Once you've completed the above steps, DuckDNS should now be integrated with your Fritzbox router.
</p>

</template>

<script setup>
//
</script>