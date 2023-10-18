<template>
    <h1 class="text-4xl font-extrabold mb-5">PfSense Firewall <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

    <p class="font-thin mb-5">
        This guide is specifically tailored for the pfSense open source firewall.
    </p>
    <a href="http://www.pfsense.org/" class="flex justify-center mt-4 mb-4">
        <button class="btn btn-primary btn-outline btn-wide">
            <font-awesome-icon icon="question-circle" />
            <span>Help Pfsense</span>
        </button>
    </a>
    <h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS on pfSense</h2>

    <p class="font-thin mb-5">
        Access the pfSense web interface. Navigate to the page designated for setting up dynamic DNS services and choose the custom service option.
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code>https://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip=%IP%<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        Subsequently, you should alter the "<b>Result Match</b>" to:
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code class="text-success">OK</code></pre>
    </div>

    <p class="font-thin mb-5">
        Leave both the <b>username</b> and <b>password</b> fields empty.
    </p>

    <div class="flex justify-center">
        <img src="images/capture/routeur/pfsense/pfsense.png" alt="">
    </div>
</template>

<script setup>
//
</script>