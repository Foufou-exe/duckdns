<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">Linux - Gui <font-awesome-icon :icon="['fab', 'linux']" class="text-secondary"/></h1>
    <p class="font-thin mb-5">
        The linux GUI version requires zenity, curl & cron to be installed. <br>
        Install zenity, curl & cron if it is not installed already. <br> <br>
        On debian based linux systems open a terminal and enter :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>sudo apt-get install zenity cron curl<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        Download the linux GUI version to your users home folder . <br>
        To run the script open a terminal window and enter :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>chmod +x duck-setup-gui.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
        <pre data-prefix="$"><code>./duck-setup-gui.sh</code></pre>
    </div>

    <p class="font-thin mb-5">
        Enter your Domaine name :
    </p>

    <img src="images/capture/linux/linux-gui-01.png" alt="linux-gui-01" class="mb-5">


    <p class="font-thin mb-5">
        Enter your token :
    </p>

    <img src="images/capture/linux/linux-gui-02.png" alt="linux-gui-02" class="mb-5">
    
    <p class="font-thin mb-5">
        There will now be a log file and shell script (which you can test manually) installed at something like : <br>
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>~/duckdns/duck.log<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
        <pre data-prefix="$"><code>~/duckdns/duck.sh</code></pre>
    </div>

    <p class="font-thin mb-5">
        The shell script will have been added to a cron that is called every 5 minutes as your user, you can view this with :
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>crontab -l<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
    </div>

</template>

<script setup>
//
</script>