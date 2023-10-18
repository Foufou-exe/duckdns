<template>
<h1 class="text-4xl font-extrabold mb-5">Synology <font-awesome-icon  icon="shield-halved" class="text-warning"/></h1>

<p class="font-thin mb-5">
    This guide offers step-by-step instructions on setting up DuckDNS for the Synology DSM 6.1 setup. Remember to replace the placeholders for the domain and token with your own details before proceeding.
</p>

<h2 class="text-2xl font-bold mb-4">Configuring DuckDNS on Synology DSM 6.1</h2>

<p class="font-thin mb-5">
    Adhere to the steps below to integrate DuckDNS with your Synology DSM 6.1:
</p>

<ol class="font-thin mb-5 list-decimal pl-5">
    <li>Log in to your Synology DSM web panel.</li>
    <li>Navigate to <strong>Control Panel > External Access > DDNS tab</strong>.</li>
    <li>Click on "customize" and opt to add a new DDNS Provider.</li>
    <li>For the DDNS provider name, enter: "duckdns"</li>
    <li>In the update URL field, enter the following:</li>
</ol>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>http://www.duckdns.org/update?domains=__HOSTNAME__&token=__PASSWORD__&ip=__MYIP__</code></pre>
    <div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div>
</div>

<ol start="6" class="font-thin mb-5 list-decimal pl-5">
    <li>Fill out the form with the necessary details:</li>
    <ul class="list-disc ml-10">
        <li><strong>Enable:</strong> CHECKED</li>
        <li><strong>Service Provide:</strong> duckdns</li>
        <li><strong>Hostname:</strong> exampledomain</li>
        <li><strong>Username/Email:</strong> none</li>
        <li><strong>Password/Key:</strong> a7c4d0ad-114e-40ef-ba1d-d217904a50f2</li>
    </ul>
    <li>Save your changes.</li>
    <li>You should now see the updater within the Synology web GUI.</li>
</ol>

<p class="font-thin mb-5">
    As always, before making any modifications, ensure you have backups of your configurations. This practice allows you to restore to a previous state, if necessary.
</p>

</template>

<script setup>
//
</script>