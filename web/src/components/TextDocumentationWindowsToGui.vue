<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">Windows - Gui <font-awesome-icon :icon="['fab', 'windows']" class="text-primary"/></h1>
    <p class="font-thin mb-5">
        This is an Open Source tray based service that was created by Joe Jaro.
        <div class="p-5 bg-neutral rounded text-white mt-2 mb-2">
            <h3 class="font-semibold mb-1">DuckDNSClient - Joe Jaro <div class="badge badge-success badge-outline">Verified</div></h3>
            <font-awesome-icon :icon="['fab', 'github']" /> <a href="https://github.com/JozefJarosciak/DuckDNSClient" class="link">https://github.com/JozefJarosciak/DuckDNSClient</a>
        </div>
        You can either use the EXE to install the software and it will deal with starting on login, or you can use the JAR file directly, but you will have to make it start-up when you want it to be running .
    </p>
    <h2 class="text-2xl font-extrabold mb-5 underline">Step 1 : Download & install the software from www.etx.ca</h2>
    <p class="font-thin mb-5">
        <font-awesome-icon icon="triangle-exclamation" /> <b>IMPORTANT</b> : Download the software from <a href="http://www.etx.ca/" class="link">http://www.etx.ca/</a> .<br>
        Install the client and start it, you should see a new Tray Icon appear (in Windows 7 you may need to make it always visible, by right clicking on your tray and changing the settings)
    </p>
    <div class="mb-5">
        <img src="images/capture/windows/windows_duckdns_updater_settings1.png" alt="windows-screen-task" class="">
    </div>
    <h2 class="text-2xl font-extrabold mb-5 underline">Step 2 : Configure the software for your chosen domain</h2>
    <p class="font-thin mb-5">
        Right click on the tray and choose <b>DuckDNS Settings</b> you should now see the settings screen . <br>
        On this screen you <b>must</b> change your <b>token</b> and <b>domain</b> to be the one you want to update . <br>
        Then click <b>OK</b> to apply the new settings . <br>
    </p>
    <div class="mb-5">
        <img src="images/capture/windows/windows_duckdns_updater_settings2.png" alt="windows-screen-task" class="">
    </div>
    <h2 class="text-2xl font-extrabold mb-5 underline">Step 3 : Check it works</h2>
    <p class="font-thin mb-5">
        You should now see the new tray icon, when you hover the mouse over it you will see some details of its current status.
    </p>
    <div class="mb-5">
        <img src="images/capture/windows/windows_duckdns_updater_tray_icon.png" alt="windows-screen-task" class="">
    </div>
</template>

<script setup>
//
</script>