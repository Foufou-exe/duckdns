<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">Smoothwall <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

    <p class="font-thin mb-5">
        The guide below provides instructions for setting up DuckDNS on a basic smoothwall install. smoothwall comes equipped with WGET by default, which is utilized in this script. Before proceeding, ensure to replace the placeholder values for the domain and token with your specific configuration.
    </p>

    <h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS on smoothwall</h2>

    <p class="font-thin mb-5">
        Follow the steps below to configure DuckDNS on your smoothwall installation:
    </p>

    <ol class="font-thin mb-5 list-decimal pl-5">
        <li>Access the command line interface of your smoothwall.</li>
        <li>Create a new script file to handle DuckDNS updates. You can name it, for example, "update_duckdns.sh".</li>
        <li>Edit the script and paste the following code:</li>
    </ol>

    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code>#!/bin/sh</code></pre>
        <pre data-prefix="2"><code>wget --no-check-certificate -O - -o ./duck-mydns.log "https://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip="</code></pre>
        <div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div>
    </div>

    <ol start="4" class="font-thin mb-5 list-decimal pl-5">
        <li>Replace "exampledomain" and "a7c4d0ad-114e-40ef-ba1d-d217904a50f2" with your domain and token, respectively.</li>
        <li>Save and close the script file.</li>
        <li>Make the script executable using the command: <code>chmod +x update_duckdns.sh</code></li>
        <li>Run the script to ensure it's working and check the "duck-mydns.log" file for the output.</li>
    </ol>

    <p class="font-thin mb-5">
        Ensure you have a backup of any configurations or scripts before making modifications. This will help you restore to a previous state if needed.
    </p>

</template>

<script setup>
//
</script>