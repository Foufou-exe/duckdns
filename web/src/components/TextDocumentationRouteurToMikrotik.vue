<template>
<h1 class="text-4xl font-extrabold mb-5">Mikrotik <font-awesome-icon icon="shield-halved" class="text-warning"/></h1>

<p class="font-thin mb-5">
    Below are the instructions on setting up DuckDNS with Mikrotik routers. Reference for recent forum discussions can be found at <a href="https://forum.mikrotik.com/viewtopic.php?f=9&t=84140#" target="_blank">mikrotik forum</a>.
</p>

<h2 class="text-2xl font-bold mb-4">Setting Up DuckDNS with Mikrotik</h2>

<p class="mb-5">
    <strong>Note:</strong> You must change your token and domain to the ones you wish to update.
</p>

<h3 class="text-xl font-semibold mb-3">Newer Update to the Script</h3>

<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>:global actualIP value=[/ip address get [find where interface=MATRIX] value-name=address];<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>:global actualIP value=[:pick $actualIP -1 [:find $actualIP "/" -1] ];</code></pre>
    <pre data-prefix="3"><code>:if ([:len [/file find where name=ipstore.txt]] &lt; 1 ) do={</code></pre>
    <pre data-prefix="4"><code>  /file print file=ipstore.txt where name=ipstore.txt;</code></pre>
    <pre data-prefix="5"><code>  /delay delay-time=2;</code></pre>
    <pre data-prefix="6"><code>  /file set ipstore.txt contents="0.0.0.0";</code></pre>
    <pre data-prefix="7"><code>};</code></pre>
    <pre data-prefix="8"><code>:global previousIP value=[/file get [find where name=ipstore.txt ] value-name=contents];</code></pre>
    <pre data-prefix="9"><code>:if ($previousIP != $actualIP) do={</code></pre>
    <pre data-prefix="10"><code> /tool fetch mode=https keep-result=yes dst-path=duckdns-result.txt address=[:resolve www.duckdns.org] port=443 host=www.duckdns.org src-path=("/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip=".$actualIP);</code></pre>
    <pre data-prefix="11"><code> /delay delay-time=5;</code></pre>
    <pre data-prefix="12"><code> :global lastChange value=[/file get [find where name=duckdns-result.txt ] value-name=contents];</code></pre>
    <pre data-prefix="13"><code> :global previousIP value=$actualIP;</code></pre>
    <pre data-prefix="14"><code> /file set ipstore.txt contents=$actualIP;</code></pre>
    <pre data-prefix="15"><code> :if ($lastChange = "OK") do={:log warning message=("DuckDNS update successfull with IP ".$actualIP);};</code></pre>
    <pre data-prefix="16"><code> :if ($lastChange = "KO") do={:log error message=("Fail to update DuckDNS with new IP ".$actualIP);};</code></pre>
    <pre data-prefix="17"><code>};</code></pre>
</div>

<h3 class="text-xl font-semibold mb-3">Older Version of the Script</h3>
<div class="mockup-code mb-5">
    <pre data-prefix="1"><code>:global currentIP;<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy"/></div></code></pre>
    <pre data-prefix="2"><code>:local newIP [/ip address get [find interface="INTERFACENAMEHERE"] address];</code></pre>
    <pre data-prefix="3"><code>:if ($newIP != $currentIP) do={</code></pre>
    <pre data-prefix="4"><code>    :log info "IP address $currentIP changed to $newIP";</code></pre>
    <pre data-prefix="5"><code>    :set currentIP $newIP;</code></pre>
    <pre data-prefix="6"><code>    /tool fetch mode=https url="https://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip=$newIP" dst-path=duckdns.txt</code></pre>
    <pre data-prefix="7"><code>    :local result [/file get duckdns.txt contents];</code></pre>
    <pre data-prefix="8"><code>    :log info "Duck DNS update result: $result";</code></pre>
    <pre data-prefix="9"><code>}</code></pre>
</div>


<ul class="list-disc pl-5 mb-5 font-thin">
    <li class="mb-2">
        Ensure you have the necessary permissions for: read, write, policy, test.
    </li>
    <li class="mb-2">
        Modify the interface name, domains, and token to match your configuration.
    </li>
    <li class="mb-2">
        Set up a scheduler for the script.
    </li>
    <li class="mb-2">
        Activate the IP Cloud feature. If you're unable to do this, or you're using a RouterOS version earlier than v6.14, use <code>newIP [/ip address get [find interface="ether1-gateway"];</code> instead of <code>newIP [/ip cloud get public-address];</code> in your script.
    </li>
</ul>

<p class="font-thin mb-5">
    After completing these steps, DuckDNS should be integrated with your Mikrotik router.
</p>

</template>

<script setup>
//
</script>