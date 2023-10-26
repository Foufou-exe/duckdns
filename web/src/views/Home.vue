<template>
    <div class="min-h-screen flex flex-col lg:flex-row items-center justify-center">
        <!-- Vue3Lottie -->
        <div class="lg:w-1/4 lg:mr-10 max-md:w-1/3 md:w-1/3  max-sm:w-3/5">
            <Vue3Lottie 
                :animationData="DuckJSON" 
                :loop="true" 
                :autoplay="true" 
            />
        </div>
    
        <!-- Contenu à droite de Vue3Lottie sur grands écrans, et en dessous sur petits écrans -->
        <div class="space-y-5">
            <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-5">Welcome to Duck DNS</h1>
            <span class="lg:text-xl">Free Dynamic DNS hosted on AWS</span>
            <NewsPinned />
            <div class="flex justify-center">
                <button class="btn btn-secondary"><font-awesome-icon icon="arrow-down" />See More</button>
            </div>
            
        </div>
    </div>

    
    <div class="min-h-screen">
        <Statistiques />

        <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-5">Why do I need DuckDNS or any DDNS service?</h1>
        <p class="font-thin mb-5">
            Most connections to the internet are through a dynamic external IP address which changes quite often (weekly or even daily).
            <br> <br>
            This can make it very difficult to connect to home services from an external computer. <br><br>
            To get around this, Duck DNS is a provider of what is known as a DDNS (Dynamic DNS) service we provide a public DNS server that anyone can get a subdomain and use one of our provided scripts to update their record(s).
            so instead of trying to remember an IP address, you can use a domain name that is kept up-to-date by a computer at home once this is done, periodically (usually every 5 minutes), the computer running the client, tells our central system (via a HTTPS post), to update the record with its latest external IP .
            It's up to you what you do with it, usually the IP address is for your router, most people login to their router and configure certain ports to be forwarded to other computers running that are connected to the router. <br><br>
            If you had setup your domain to be <a class="font-bold">exampledomain</a>, then told your router to forward the port 80 traffic to a server plugged into it running a webserver, then from anywhere around the world you could hit <a class="italic">exampledomain.duckdns.org</a> in a web browser.
            If you had setup port 22 to be forwarded to a raspberrypi running ssh, you could ssh to it with :
        </p>
        <div class="mockup-code mb-5">
            <pre data-prefix="$"><code>ssh pi@exampledomain.duckdns.org<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        </div>

        <a class="font-thin">A good site to find out how to port forward on your home router is <a href="https://portforward.com/" class="link">portforward.com</a></a>    
    </div>
</template>

<script setup>
    import NewsPinned from '@components/news/NewsPinned.vue';
    import Statistiques from '@components/home/Statistiques.vue';
    import DuckJSON from '@assets/json/duck.json';
</script>