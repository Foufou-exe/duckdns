<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">Linux - Netcat Cron <font-awesome-icon :icon="['fab', 'linux']" class="text-secondary"/></h1>
    <p class="font-thin mb-5">
        This netcat version is for systems that do not have wget or curl available .
    </p>
    <h2 class="text-xl font-extrabold mb-5">This version is over HTTP : Use this only if you have no way to use a secure methode <font-awesome-icon icon="warning" /></h2>
    <p class="font-thin mb-5">
        If your linux install is running a crontab, then you can use a cron job to keep updated . <br>
        We can see this with :
    </p>
    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>ps -ef | grep cr[o]n<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>
    <p class="font-thin mb-5">
        If this returns nothing - then go and read up how to install cron for your distribution of linux . <br>
        Also confirm that you have curl installed, test this by attempting to run curl :
    </p>
    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>curl<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>
    <p class="font-thin mb-5">
        If this returns a command not found like error - then find out how to install curl for your distribution . <br>
        Otherwise lets get started and make a directory to put your files in, move into it and make our main script :
    </p>
    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>mkdir duckdns && cd duckdns && vi duck.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        Now copy this text and put it into the file (in vi you hit the <kbd class="kbd kbd-sm">i</kbd> key to insert, <kbd class="kbd kbd-sm">ESC</kbd> then <kbd class="kbd kbd-sm">u</kbd> to undo) you must change your <b>token</b> and <b>domain</b> to be the one you want to update . <br>
        You can pass a comma separated (no spaces) list of domains . <br>
        You can if you need to hard code an IP (best not to - leave it blank and we detect your remote ip) . <br>
        Hit <kbd class="kbd kbd-sm">ESC</kbd> then use use arrow keys to move the cursor <b>x</b> deletes, <kbd class="kbd kbd-sm">i</kbd> puts you back into insert mode :
    </p>
    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code>#!/bin/sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
        <pre data-prefix="2"><code>TOKEN="feedface-dead-c0ed-babe-c0ffeec0de99"</code></pre>
        <pre data-prefix="3"><code>DOMAINS="example"</code></pre>
        <pre data-prefix="4"><code>HOST="www.duckdns.org"</code></pre>
        <pre data-prefix="5"><code>PORT="80"</code></pre>
        <pre data-prefix="6"><code>URI=$(echo /update?domains=$DOMAINS\&token=$TOKEN\&ip=\&verbose=true)</code></pre>
        <pre data-prefix="7"><code>HTTP_QUERY="GET $URI HTTP/1.1\r\n\</code></pre>
        <pre data-prefix="8"><code>Host: $HOST\r\n\</code></pre>
        <pre data-prefix="9"><code>Accept: text/html\r\n\</code></pre>
        <pre data-prefix="10"><code>Connection: close\r\n\</code></pre>
        <pre data-prefix="11"><code>\r\n"</code></pre>
        <pre data-prefix="12"><code>echo "$HTTP_QUERY"</code></pre>
        <pre data-prefix="13"><code>(printf "$HTTP_QUERY" && sleep 5) | nc $HOST $PORT</code></pre>
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
        If it is <b class="text-error">KO</b> check your <b>Token</b> and <b>Domain</b> are correct in the <b>duck.sh</b> script .
    </p>

</template>

<script setup>
//
</script>