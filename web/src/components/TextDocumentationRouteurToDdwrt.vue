<template>
<h1 class="text-4xl font-extrabold mb-5">Dd-wrt <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

<p class="font-thin mb-5">
    This guide details how to integrate DuckDNS with a dd-wrt router.
</p>

<h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS on dd-wrt</h2>

<p class="font-thin mb-5">
    Start by accessing the web interface of your dd-wrt router. Once in, navigate to the DDNS section which is located within the Setup region.
</p>

<p class="font-thin mb-5">
    Both HTTP and HTTPS can be utilized for the URL. Here's a step-by-step guide on the configuration:
</p>

<a href="http://www.dd-wrt.com/" class="flex justify-center mt-4 mb-4">
    <button class="btn btn-primary btn-outline btn-wide">
        <font-awesome-icon icon="question-circle" />
        <span>Help dd-wrt</span>
    </button>
</a>

<ol class="font-thin list-decimal pl-5 mb-5">
    <li>Select <strong>Custom</strong> for the DDNS Service.</li>
    <li>For the DYNSND Server, input <strong>duckdns.org</strong>.</li>
    <li>Set the Username to <strong>NA</strong>.</li>
    <li>Set the Password to <strong>NA</strong>.</li>
    <li>For the Hostname, input <strong>a7c4d0ad-114e-40ef-ba1d-d217904a50f2</strong>.</li>
    <li>For the URL, use : <br><br>
    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>http://www.duckdns.org/update?domains=exampledomain&token=<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>
    </li>
    <li>Under Additional DDNS Options, type in <strong>--verbose 5</strong>.</li>
    <li>Enable the <strong>Do not use External IP Check</strong> option.</li>
    <li>Set the Force Update Interval to <strong>10</strong>.</li>
</ol>

<p class="font-thin mb-5">
    To complete the process, click on "<b>Save</b>" and subsequently "<b>Apply Settings</b>". Monitor the logs to ensure the configuration was successful.
</p>
<div class="flex justify-center">
    <img src="images/capture/routeur/ddwrt/ddwrt.png" alt="ddwrt">
</div>
</template>

<script setup>
//
</script>