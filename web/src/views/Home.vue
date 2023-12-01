<template>
    <div class="min-h-screen flex flex-col lg:flex-row items-center justify-center">
        <!-- Vue3Lottie -->
        <div class="lg:w-1/4 lg:mr-10 max-md:w-1/3 md:w-1/3  max-sm:w-3/5">
            <Vue3Lottie :animationData="DuckJSON" :loop="true" :autoplay="true" />
        </div>

        <!-- Contenu à droite de Vue3Lottie sur grands écrans, et en dessous sur petits écrans -->
        <div class="space-y-5">
            <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-5">Welcome to Duck DNS</h1>
            <span class="lg:text-xl">Free Dynamic DNS hosted on AWS</span>
            <!-- <NewsPinned /> -->
            <div class="flex justify-center">
                <button class="btn btn-warning" @click="scrollToInfo"><font-awesome-icon
                        icon="arrow-down" />See More</button>
            </div>

        </div>
    </div>


    <section class="min-h-screen pt-10" id="info">
        <h1 class="text-3xl md:text-3xl lg:text-4xl font-extrabold mb-5">Why do I need DuckDNS or any DDNS service?</h1>
        <p class="mb-5 font-thin">Duck DNS is a form of statistics: </p>
        <div class="flex justify-center mb-5">
            <div class="stats shadow">
                <div class="stat">
                    <div class="stat-figure text-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-8 h-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div class="stat-title">Page Views</div>
                    <div class="stat-value text-warning">2.6M</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
                <div class="stat">
                    <div class="stat-figure text-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-8 h-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                            </path>
                        </svg>
                    </div>
                    <div class="stat-title">New Users</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-8 h-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                            </path>
                        </svg>
                    </div>
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
        <p class="font-thin mb-5">
            Most connections to the internet are through a dynamic external IP address which changes quite often (weekly or
            even daily).
            <br>
            This can make it very difficult to connect to home services from an external computer. <br>
            To get around this, Duck DNS is a provider of what is known as a DDNS (Dynamic DNS) service we provide a public
            DNS server that anyone can get a subdomain and use one of our provided scripts to update their record(s).
            so instead of trying to remember an IP address, you can use a domain name that is kept up-to-date by a computer
            at home once this is done, periodically (usually every 5 minutes), the computer running the client, tells our
            central system (via a HTTPS post), to update the record with its latest external IP .
            It's up to you what you do with it, usually the IP address is for your router, most people login to their router
            and configure certain ports to be forwarded to other computers running that are connected to the router.
            <br><br>
            If you had setup your domain to be <a class="font-bold">exampledomain</a>, then told your router to forward the
            port 80 traffic to a server plugged into it running a webserver, then from anywhere around the world you could
            hit <a class="italic">exampledomain.duckdns.org</a> in a web browser.
            If you had setup port 22 to be forwarded to a raspberrypi running ssh, you could ssh to it with :
        </p>
        <div class="mockup-code mb-5">
            <pre
                data-prefix="$"><code>ssh pi@exampledomain.duckdns.org<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
        </div>

        <a class="font-thin">A good site to find out how to port forward on your home router is <a
                href="https://portforward.com/" class="link">portforward.com</a></a>
    </section>
</template>

<script setup>
//import NewsPinned from '@components/news/NewsPinned.vue';
import DuckJSON from '@assets/json/duck.json';

// Function for scrolling to the info section
function scrollToInfo() {
    const infoSection = document.getElementById('info');
    if (infoSection) {
        infoSection.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>