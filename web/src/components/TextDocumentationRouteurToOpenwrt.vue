<template>
<h1 class="text-4xl font-extrabold mb-5">OpenWrt <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

<p class="font-thin mb-5">
    The OpenWrt instructions are split into two parts : a simpler setup for those comfortable with HTTP and a more secure setup for HTTPS users.
    <a class="flex justify-center mt-4" href="http://wiki.openwrt.org/doc/howto/ddns.client">
        <button class="btn btn-primary btn-outline btn-wide">
            <font-awesome-icon icon="question-circle" />
            <span>Wiki Help</span>
        </button>
    </a>
</p>

<h2 class="text-2xl font-bold mb-4">Installation for HTTP Users</h2>

<p class="font-thin mb-5">
    If you're looking for a simpler installation process and are okay with using HTTP, follow these instructions. Ensure that your token and domain are updated as required.
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>opkg update<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="$"><code>opkg install ddns-scripts</code></pre>
    <pre data-prefix="$"><code>ddns-scripts</code></pre>
</div>

<p class="font-thin mb-5">
    Now you need to alter the config at /etc/config/ddns :
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>config service "duckdns"<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>        option enabled          "1"</code></pre>
    <pre data-prefix="3"><code>        option domain           "exampledomain.duckdns.org"</code></pre>
    <pre data-prefix="4"><code>        option username         "exampledomain"</code></pre>
    <pre data-prefix="5"><code>        option password 'examplepassword'</code></pre>
    <pre data-prefix="6"><code>        option ip_source        "network"</code></pre>
    <pre data-prefix="7"><code>        option ip_network       "wan"</code></pre>
    <pre data-prefix="8"><code>        option force_interval   "72"</code></pre>
    <pre data-prefix="9"><code>        option force_unit       "hours"</code></pre>
    <pre data-prefix="10"><code>       option check_interval   "10"</code></pre>
    <pre data-prefix="11"><code>       option check_unit       "minutes"</code></pre>
    <pre data-prefix="12"><code>       #option ip_source       "interface"</code></pre>
    <pre data-prefix="13"><code>       #option ip_interface    "wan"</code></pre>
    <pre data-prefix="14"><code>       #option ip_source       "web"</code></pre>
    <pre data-prefix="15"><code>       #option ip_url          "http://ipv4.wtfismyip.com/text"</code></pre>
    <pre data-prefix="16"><code>       option update_url       "http://www.duckdns.org/update?domains=[USERNAME]&token=[PASSWORD]&ip=[IP]"</code></pre>
    <pre data-prefix="17"><code>       #option use_https       "1"</code></pre>
    <pre data-prefix="18"><code>       #option cacert          "/etc/ssl/certs/cacert.pem"</code></pre>
</div>

<p class="font-thin mb-5">
    Now start it up :
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>. /usr/lib/ddns/dynamic_dns_functions.sh # note the leading period</code></pre>
    <pre data-prefix="3"><code>start_daemon_for_all_ddns_sections "wan"</code></pre>
    <pre data-prefix="4"><code>exit</code></pre>
</div>

<p class="font-thin mb-5">
    We can now test the script by running the command :
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>/usr/lib/ddns/dynamic_dns_updater.sh duckdns</code></pre>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4">Installation for HTTPS Users</h2>

<p class="font-thin mb-5">
    If you prefer to use HTTPS for added security, follow these instructions. This involves downloading Start SSL's CA bundle. <br>
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>opkg update && opkg install curl<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="$"><code>mkdir -p /etc/ssl/certs</code></pre>
    <pre data-prefix="$"><code>curl -k https://certs.secureserver.net/repository/sf_bundle-g2.crt >  /etc/ssl/certs/ca-bundle.pem </code></pre>
</div>

<p class="font-thin mb-5">
    Then you need to re-alter the config at /etc/config/ddns (<b>uncomment these 2 lines</b>) :
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>option use_https       "1"<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>option cacert          "/etc/ssl/certs/ca-bundle.pem"</code></pre>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4">Further Assistance</h2>

<p class="font-thin mb-5">
    If you run into any issues or require additional information, the OpenWrt wiki on DDNS can be helpful.
</p>

<a class="flex justify-center mt-4" href="http://wiki.openwrt.org/doc/howto/ddns.client">
    <button class="btn btn-primary btn-outline btn-wide">
        <font-awesome-icon icon="question-circle" />
        <span>Wiki Help</span>
    </button>
</a>

</template>

<script setup>
//
</script>