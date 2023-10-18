<template>
<h1 class="text-4xl font-extrabold mb-5">Inadyn <font-awesome-icon :icon="['fas', 'code']" class="text-secondary"/></h1>

<p class="font-thin mb-5">
    The <a href="http://troglobit.com/inadyn.html" class="text-blue-500 link">inadyn</a> client is a compact open-source software that is available in the majority of Linux package repositories. It utilizes the <a href="https://www.duckdns.org/install.jsp?tab=dyndns&domain=exampledomain" class="text-blue-500 link">dyndns endpoint</a>.
</p>

<h2 class="text-2xl font-bold mb-4">Configuring inadyn with DuckDNS</h2>

<p class="font-thin mb-5">
    It's essential to adjust your token and domain to those you want to update. Here's how you can set it up:
</p>

<h3 class="text-xl font-semibold mb-3">Terminal Example</h3>

<p class="font-thin mb-3">
    You can validate the endpoint with the inadyn command as shown below:
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>inadyn --dyndns_server_name www.duckdns.org --username nouser --password a7c4d0ad-114e-40ef-ba1d-d217904a50f2 --update_period 60000 --alias exampledomain --verbose 5 --dyndns_server_url /nic/?<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
</div>

<h3 class="text-xl font-semibold mb-3">Ubuntu Example</h3>

<p class="font-thin mb-3">
    The following example illustrates how someone might set up inadyn on Ubuntu:
</p>

<ol class="font-thin list-decimal list-inside mb-5">
    <li>Install inadyn:<br><br></li>
    <div class="mockup-code mb-3">
        <pre data-prefix="1"><code>sudo apt-get install inadyn curl<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <li>Create and edit the inadyn configuration file:<br><br></li>
    <div class="mockup-code mb-3">
        <pre data-prefix="1"><code>sudo gedit /etc/inadyn.conf<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <!-- Include configuration details -->
    <li>And save this content : <br><br></li>
    <div class="mockup-code mb-3">
        <pre data-prefix="1"><code>--dyndns_server_name www.duckdns.org<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        <pre data-prefix="2"><code>--username nouser</code></pre>
        <pre data-prefix="3"><code>--password a7c4d0ad-114e-40ef-ba1d-d217904a50f2</code></pre>
        <pre data-prefix="4"><code>--update_period 60000</code></pre>
        <pre data-prefix="5"><code>--alias exampledomain</code></pre>
        <pre data-prefix="6"><code>--verbose 5</code></pre>
        <pre data-prefix="7"><code>--dyndns_server_url /nic/?</code></pre>
        <pre data-prefix="8"><code>--syslog</code></pre>
        <pre data-prefix="9"><code>--background</code></pre>
    </div>  
    <li>Add inadyn to crontab: <br><br></li>
    <div class="mockup-code mb-3">
        <pre data-prefix="1"><code>export EDITOR=gedit && sudo crontab -e<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <li>Edit the file to add the following line : <br><br></li>
    <div class="mockup-code mb-3">
        <pre data-prefix="1"><code>@reboot /usr/sbin/inadyn<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <li>Reboot the computer and wait for 3 minutes. <br><br></li>

    <li>Verify if inadyn is running:<br><br></li>
    <div class="mockup-code mb-3">
        <pre data-prefix="1"><code>ps -A | grep inadyn<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <li>Review inadyn's behavior:<br><br></li>
    <div class="mockup-code mb-3">
        <pre data-prefix="1"><code>more /var/log/messages | grep INADYN<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <li>Check if your domain name resolves correctly:<br><br></li>
    <div class="mockup-code mb-3">
        <pre data-prefix="1"><code>nslookup exampledomain.duckdns.org<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>
</ol>

</template>

<script setup>
//
</script>