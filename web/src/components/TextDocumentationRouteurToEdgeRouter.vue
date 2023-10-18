<template>
    <h1 class="text-4xl font-extrabold mb-5">EdgeRouter <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

    <p class="font-thin mb-5">
        This guide provides instructions for setting up DuckDNS on an EdgeRouter. For a comprehensive walkthrough, you can also refer to the online tutorial: <br><br><a href="https://loganmarchione.com/2017/04/duckdns-on-edgerouter/" target="_blank" rel="noopener noreferrer" class="link">DuckDNS on EdgeRouter</a> by Logan Marchione.
    </p>

    <h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS on EdgeRouter</h2>

    <p class="font-thin mb-5">
        Before proceeding, ensure you have access to your EdgeRouter's command line interface, either through SSH or directly connected to the router.
    </p>

    <p class="font-thin mb-5">
        You can follow the detailed instructions provided in the aforementioned link. Below is a summarized version:
    </p>

    <ol class="font-thin mb-5 list-decimal pl-5">
        <li>Access the EdgeRouter's command line interface.</li>
        <li>Create a script to handle DuckDNS updates.</li>
        <li>Make the script executable.</li>
        <li>Test the script to ensure it's working.</li>
        <li>Set a scheduled task (cron job) to run the script at desired intervals.</li>
    </ol>

    <p class="font-thin mb-5">
        Note: It's crucial to always backup any configurations or scripts before making changes.
    </p>

    <p class="font-thin mb-5">
        If you encounter any challenges or need in-depth explanations for each step, refer back to Logan Marchione's <a href="https://loganmarchione.com/2017/04/duckdns-on-edgerouter/" target="_blank" rel="noopener noreferrer">DuckDNS on EdgeRouter guide</a>.
    </p>

</template>

<script setup>
//
</script>