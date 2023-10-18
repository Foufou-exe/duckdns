<template>
<h1 class="text-4xl font-extrabold mb-5">Raspberry Pi - Raspbmc <font-awesome-icon :icon="['fab', 'raspberry-pi']" class="text-secondary"/></h1>

<p class="font-thin mb-5">
    If you're using the XMBC build for Raspberry Pi, additional changes are needed. Here's how to configure the Raspbmc setup.
</p>

<h2 class="text-2xl font-bold mb-4">SSH Settings and Password Change</h2>
<p class="font-thin mb-5">
    Raspbmc has a hardened SSH server, which prevents external access. The steps below allow external SSH connections. But first, update the user 'pi' password.
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>ssh pi@192.168.1.160<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix=">"><code class="text-info">( password is raspberry )</code></pre>
    <pre data-prefix="$"><code>passwd</code></pre>
    <pre data-prefix=">"><code class="text-info">( password is raspberry )</code></pre>
    <pre data-prefix="$"><code>smbpasswd</code></pre>
</div>

<h2 class="text-2xl font-bold mb-4">Adjusting iptables Configuration</h2>
<p class="font-thin mb-5">
    Adjust the iptables rules to allow SSH access (port 22).
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>sudo su<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="$"><code>vi /etc/network/if-up.d/secure-rmc</code></pre>
</div>

<p class="font-thin mb-5">
    Add the following content to the file. <br>
    now move to the botom of the file (<kbd class="kbd kbd-sm">SHIFT</kbd> + <kbd class="kbd kbd-sm">G</kbd>) and change the 2 lines to look like the 4 lines below <br>
    (in vi you hit the <kbd class="kbd kbd-sm">i</kbd> key to insert, <kbd class="kbd kbd-sm">ESC</kbd> then <kbd class="kbd kbd-sm">u</kbd> to undo) :
</p>

<h2 class="text-2xl font-bold mb-4">Installing curl and Rebooting</h2>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>sudo apt-get update<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="$"><code>sudo apt-get install curl</code></pre>
    <pre data-prefix="$"><code>sudo reboot now</code></pre>
</div>

<h2 class="text-2xl font-bold mb-4">Setting up DuckDNS</h2>
<p class="font-thin mb-5">
    Create a directory for your files, navigate to it, and set up the main script.
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>cd ~<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="$"><code>mkdir duckdns</code></pre>
    <pre data-prefix="$"><code>cd duckdns</code></pre>
    <pre data-prefix="$"><code>vi duck.sh</code></pre>
</div>

<p class="font-thin mb-5">
    Now copy this text and put it into the file (in vi you hit the <kbd class="kbd kbd-sm">i</kbd> key to insert, <kbd class="kbd kbd-sm">ESC</kbd> then <kbd class="kbd kbd-sm">u</kbd> to undo) you must change your <b>token</b> and <b>domain</b> to be the one you want to update . <br>
    You can pass a comma separated (no spaces) list of domains . <br>
    You can if you need to hard code an IP (best not to - leave it blank and we detect your remote ip) . <br>
    Hit <kbd class="kbd kbd-sm">ESC</kbd> then use use arrow keys to move the cursor <b>x</b> deletes, <kbd class="kbd kbd-sm">i</kbd> puts you back into insert mode :
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>echo url="https://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip=" | curl -k -o ~/duckdns/duck.log -K -<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
</div>

<p class="font-thin mb-5">
    Now save the file (in vi hit <kbd class="kbd kbd-sm">ESC</kbd> then <kbd class="kbd kbd-sm">:wq!</kbd> then <kbd class="kbd kbd-sm">ENTER</kbd>) . <br>
    This script will make a https request and log the output in the file <b>duck.log</b> . <br>
    Now make the <b>duck.sh</b> file executeable :
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>chmod +x duck.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
</div>


<h2 class="text-2xl font-bold mb-4">Cron Job Setup</h2>
<p class="font-thin mb-5">
    Use the cron process to run the script every 5 minutes.
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>crontab -e<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="1"><code>*/5 * * * * ~/duckdns/duck.sh >/dev/null 2>&1</code></pre>
</div>

<p class="font-thin mb-5">
    Now save the file (<kbd class="kbd kbd-sm">CTRL</kbd> + <kbd class="kbd kbd-sm">u</kbd> then <kbd class="kbd kbd-sm">CTRL</kbd> + <kbd class="kbd kbd-sm">x</kbd>) . <br>
    Lets test the script.
</p>

<h2 class="text-2xl font-bold mb-4">Testing the Script</h2>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>./duck.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="$"><code>cat duck.log</code></pre>
</div>

<h2 class="text-2xl font-bold mb-4">Auto-Start Configuration</h2>
<p class="font-thin mb-5">
    For Raspbmc, make sure the cron starts on reboot. For Raspbian, this step isn't required.
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>sudo service cron start<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
</div>
<p class="font-thin">
    For Raspbmc, enable the option in the Programs Raspbmc menu in XBMC to start cron on reboot.
</p>

</template>

<script setup>
//
</script>