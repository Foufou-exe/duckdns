<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">Raspberry Pi <font-awesome-icon :icon="['fab', 'raspberry-pi']" class="text-secondary"/></h1>

    <p class="font-thin mb-5">
        If you are running <a href="http://www.raspbmc.com/" class="link">Raspbmc</a>, then you must follow the Raspbmc instructions. First, let's login to your Raspberry Pi over SSH.
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>ssh pi@raspberrypi<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        Then lets make a directory to put your files in, move into it and make our main script :
    </p>
    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>mkdir duckdns && cd duckdns && vi duck.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        Now copy this text and put it into the file (in vi you hit the <kbd class="kbd kbd-sm">i</kbd> key to insert, <kbd class="kbd kbd-sm">ESC</kbd> then <kbd class="kbd kbd-sm">u</kbd> to undo) you must change your <b>token</b> and <b>domain</b> to be the one you want to update . <br>
        You can pass a comma separated (no spaces) list of domains . <br>
        You can if you need to hard code an IP (best not to - leave it blank and we detect your remote ip) . <br>
        Hit <kbd class="kbd kbd-sm">ESC</kbd> then use use arrow keys to move the cursor <b>x</b> deletes, <kbd class="kbd kbd-sm">i</kbd> puts you back into insert mode :
    </p>


    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code class="language-bash">#!/bin/bash<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        <pre data-prefix="2"><code>echo url="https://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip=" | curl -k -o ~/duckdns/duck.log -K -</code></pre>
    </div>

    <p class="font-thin mb-5">
        Now save the file (in vi hit <kbd class="kbd kbd-sm">ESC</kbd> then <kbd class="kbd kbd-sm">:wq!</kbd> then <kbd class="kbd kbd-sm">ENTER</kbd>) . <br>
        This script will make a https request and log the output in the file <b>duck.log</b> . <br>
        Now make the <b>duck.sh</b> file executeable :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>chmod +x duck.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        Now we will be using the cron process to make the script get run every 5 minutes :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>crontab -e<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        Copy this text and paste it at the bottom of the crontab :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code>*/5 * * * * ~/duckdns/duck.sh >/dev/null 2>&1<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        Now save the file (<kbd class="kbd kbd-sm">CTRL</kbd> + <kbd class="kbd kbd-sm">u</kbd> then <kbd class="kbd kbd-sm">CTRL</kbd> + <kbd class="kbd kbd-sm">x</kbd>) . <br>
        Lets test the script :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>./duck.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        This should simply return to a prompt . <br>
        We can also see if the last attempt was successful (<b class="text-success">OK</b> or bad <b class="text-error">KO</b>) :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>cat duck.log<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        If it is <b class="text-error">KO</b> check your <b>Token</b> and <b>Domain</b> are correct in the <b>duck.sh</b> script . <br><br>
        The final task for Raspbmc is to make the cron autostart on reboot for Raspbian you don't need to do this first we simply manualy start the crontab : 
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>sudo service cron start<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

</template>

<script setup>
//
</script>