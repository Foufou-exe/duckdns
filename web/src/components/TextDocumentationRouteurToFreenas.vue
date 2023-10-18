<template>
    <h1 class="text-4xl font-extrabold mb-5">FreeNAS <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

    <p class="font-thin mb-5">
        This guide provides instructions for FreeNAS installations. For a more detailed guide, refer to the online tutorial : <br> <a href="https://forums.freenas.org/index.php?threads/how-to-install-duckdns-org-a-how-to-guide.24170/" target="_blank" rel="noopener noreferrer" class="link">How to Install DuckDNS.org - A How-To Guide</a>.
    </p>

    <h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS on FreeNAS</h2>

    <p class="font-thin mb-5">
        First, make sure to replace the placeholder tokens and domain names in the URLs below with your actual DuckDNS details.
    </p>

    <h3 class="text-xl font-semibold mb-3">Login to the GUI</h3>
    <p class="font-thin mb-5">
        Start by accessing the FreeNAS server GUI. Navigate to <strong>System</strong> -> <strong>Cron Jobs</strong> -> <strong>Add New Cron Job</strong>.
    </p>

    <h3 class="text-xl font-semibold mb-3">Setting up the Cron Job</h3>
    <p class="font-thin mb-5">
        Configure the new cron job as follows:
    </p>
    <ul class="font-thin mb-5 list-disc pl-5">
        <li>Set it to run as 'nobody'</li>
        <li>Schedule it for 1 minute past the hour, every 12 hours (or a different frequency if desired).</li>
        <li>Ensure it runs every day of the week.</li>
    </ul>

    <p class="mb-5">
        For the command to run, use:
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code>/usr/local/bin/curl http://www.duckdns.org/update/exampledomain/a7c4d0ad-114e-40ef-ba1d-d217904a50f2<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

</template>

<script setup>
//
</script>