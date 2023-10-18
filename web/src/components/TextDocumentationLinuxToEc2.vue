<template>
    <h1 class="text-4xl font-extrabold mb-5">Linux - EC2 <font-awesome-icon :icon="['fab', 'linux']" class="text-secondary"/></h1>
    <p class="font-thin mb-5">
        On ec2 the current ip can be found using the command <b>ec2-metadata --public-ipv4</b> . <br>
        This means that we only need to update your record when it does change. <br>
        Because ec2 instances get assigned an ip on boot we need to force the ip in the curl command . <br><br>
        So first lets login to your ubuntu ec2 instance over ssh as ubuntu user :
    </p>
    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>ssh -i '<b class="text-warning">YOUR PEM KEY</b>' user@ec2-00-00-00-00.us-west-2.compute.amazonaws.com<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>
    <p class="font-thin mb-5">
        Then lets make a directory to put your files in, move into it and make our main script :
    </p>
    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code class="language-bash">mkdir duckdns<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        <pre data-prefix="$"><code>cd duckdns</code></pre>
        <pre data-prefix="$"><code>vi duck.sh</code></pre>
    </div>
    <p class="font-thin mb-5">
        Now copy this text and put it into the file (in vi you hit the <kbd class="kbd kbd-sm">i</kbd> key to insert, <kbd class="kbd kbd-sm">ESC</kbd> then <kbd class="kbd kbd-sm">u</kbd> to undo) you must change your token and domain to be the one you want to update
        You can pass a comma separated (no spaces) list of domains
        Hit <kbd class="kbd kbd-sm">ESC</kbd> then use use arrow keys to move the cursor <kbd class="kbd kbd-sm">x</kbd> deletes, i puts you back into insert mode
    </p>
    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code class="language-bash">#!/bin/bash<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        <pre data-prefix="2"><code>current=""</code></pre>
        <pre data-prefix="3"><code>while true; do</code></pre>
        <pre data-prefix="4"><code>latest=`ec2-metadata --public-ipv4`</code></pre>
        <pre data-prefix="5"><code>echo "public-ipv4=$latest"</code></pre>
        <pre data-prefix="6"><code>if [ "$current" == "$latest" ]</code></pre>
        <pre data-prefix="7"><code>then</code></pre>
        <pre data-prefix="8"><code>echo "ip not changed"</code></pre>
        <pre data-prefix="9"><code>else</code></pre>
        <pre data-prefix="10"><code>echo "ip has changed - updating"</code></pre>
        <pre data-prefix="11"><code>current=$latest</code></pre>
        <pre data-prefix="12"><code>echo url="https://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip=" | curl -k -o ~/duckdns/duck.log -K -</code></pre>
        <pre data-prefix="13"><code>fi</code></pre>
        <pre data-prefix="14"><code>sleep 5m</code></pre>
        <pre data-prefix="15"><code>done</code></pre>
    </div>

    <p class="font-thin mb-5">
        Now save the file (in vi hit <kbd class="kbd kbd-sm">ESC</kbd> then <kbd class="kbd kbd-sm">:wq!</kbd> then <kbd class="kbd kbd-sm">ENTER</kbd>) . <br>
        Now make the <b>duck.sh</b> file executeable and then create the next script file .
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>chmod +x duck.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        <pre data-prefix="$"><code>vi duck_daemon.sh</code></pre>
    </div>

    <p class="font-thin mb-5">
        Now copy this text and put it into the file (in vi you hit the <kbd class="kbd kbd-sm">i</kbd> key to insert, <kbd class="kbd kbd-sm">ESC</kbd> then <kbd class="kbd kbd-sm">u</kbd> to undo)
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code>#!/bin/bash<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        <pre data-prefix="2"><code>su - ubuntu -c "nohup ~/duckdns/duck.sh > ~/duckdns/duck.log 2>&1&"</code></pre>
    </div>

    <p class="font-thin mb-5">
        Now save the file (in vi hit <kbd class="kbd kbd-sm">ESC</kbd> then <kbd class="kbd kbd-sm">:wq!</kbd> then <kbd class="kbd kbd-sm">ENTER</kbd>) . <br>
        Now make the <b>duck_daemon.sh</b> file executeable and change its permissions .
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>chmod +x duck_daemon.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        <pre data-prefix="$"><code>sudo chown root duck_daemon.sh</code></pre>
        <pre data-prefix="$"><code>sudo chmod 744 duck_daemon.sh</code></pre>
    </div>

    <p class="font-thin mb-5">
        Now we can test the script by running it as root :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>sudo ./duck_daemon.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        This should simply return to a prompt . <br>
        We can see it is running with :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>ps -ef | grep duck<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        We can also see if the last attempt was successful (<b class="text-success">OK</b> or bad <b class="text-error">KO</b>) :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>cat duck.log<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        If it is <b class="text-success">OK</b> then you can check your domain and it should be updated . <br>
        If it is <b class="text-error">KO</b> check your <b>Token</b> and <b>Domain</b> is correct in the duck.sh script . <br>
        Finally we make the duck daemon auto start on boot up :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>sudo ln -s ~/duckdns/duck_daemon.sh /etc/rc2.d/S10duckdns<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        As you can see the script is all set to start as the instance boots .
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>ls -la /etc/rc2.d/<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        The final test is to kill the process running and start it as the bootup would :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>pkill duck<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        <pre data-prefix="$"><code>sudo /etc/rc2.d/S10duckdns</code></pre>
    </div>

    <p class="font-thin mb-5">
        We can now see if its running :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>ps -ef | grep duck<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    </div>

    
</template>

<script setup>
//
</script>
