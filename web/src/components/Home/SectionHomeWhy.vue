<template>
    <h1 class="text-4xl font-extrabold mb-5">Why do I need DuckDNS or any DDNS service?</h1>
    <p class="font-thin">
        Most connections to the internet are through a dynamic external IP address which changes quite often (weekly or even daily).
        this can make it very difficult to connect to home services from an external computer.
        <br><br>
        To get around this, Duck DNS is a provider of what is known as a DDNS (Dynamic DNS) service we provide a public DNS server that anyone can get a subdomain and use one of our provided scripts to update their record(s).
        so instead of trying to remember an IP address, you can use a domain name that is kept up-to-date by a computer at home once this is done, periodically (usually every 5 minutes), the computer running the client, tells our central system (via a HTTPS post), to update the record with its latest external IP .
        <br><br>
        It's up to you what you do with it, usually the IP address is for your router, most people login to their router and configure certain ports to be forwarded to other computers running that are connected to the router.
        <br><br>
        If you had setup your domain to be <a class="font-bold">exampledomain</a>, then told your router to forward the port 80 traffic to a server plugged into it running a webserver, then from anywhere around the world you could hit <a class="italic">exampledomain.duckdns.org</a> in a web browser.
        <br><br>
        If you had setup port 22 to be forwarded to a raspberrypi running ssh, you could ssh to it with
        <br><br>
    </p>
    <div class="mockup-code">
        <pre data-prefix="$"><code>ssh pi@exampledomain.duckdns.org</code></pre>
    </div>
    <br>
    <a class="font-thin">A good site to find out how to port forward on your home router is <a href="https://portforward.com/" class="link">portforward.com</a></a>    

</template>

<script>

export default {
    name: 'SectionHomeWhy',
}
</script>