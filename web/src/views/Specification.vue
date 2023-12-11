<template>
    <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-5">Specification</h1>
    <h2 class="text-xl md:text-2xl lg:text-2xl font-bold mb-5">HTTP API</h2>
    <p class="font-thin mb-5">
        The update URL can be requested on HTTPS or HTTP. It is recommended that you always use HTTPS .<br>
        We provide HTTP services for unfortunate users that have HTTPS blocked . <br><br>

        You can update your domain(s) with a single HTTPS get to DuckDNS :
    </p>

    <div class="mockup-code mb-5 overflow-x-auto">
        <pre data-prefix="$"><code>https://www.duckdns.org/update?domains={<b class="text-warning">YOURVALUE</b>}&token={<b class="text-warning">YOURVALUE</b>}[&ip={<b class="text-warning">YOURVALUE</b>}][&ipv6={<b class="text-warning">YOURVALUE</b>}][<b class="text-warning">&verbose=true</b>][<b class="text-warning">&clear=true</b>]</code></pre>
    </div>

    <p class="font-thin mb-5" >
        <br>
        The domain can be a single domain - or a comma separated list of domains.<br><br>
        The domain does not need to include the .duckdns.org part of your domain, just the subname.<br>
        If you do not specify the IP address, then it will be detected - this only works for IPv4 addresses .<br>
        You can put either an IPv4 or an IPv6 address in the <b>ip parameter</b>.<br>
        If you want to update BOTH of your IPv4 and IPv6 records at once, then you can use the optional parameter ipv6 to clear both your records use the optional parameter <b>clear=true</b> .
        <br><br>
        A normal good response is :
    </p>
    
    <div class="mockup-code mb-5 overflow-x-auto">
        <pre data-prefix="$" class="text-success"><code>OK</code></pre>
    </div>
    
    <p class="font-thin mb-5">A normal bad response is :</p>
    
    <div class="mockup-code mb-5 overflow-x-auto">
        <pre data-prefix="$" class="text-error"><code>KO</code></pre>
    </div>
    
    <p class="font-thin mb-5">If you add the <b>&verbose=true</b> parameter to your request, then OK responses have more information :</p>
    
    <div class="mockup-code mb-5 overflow-x-auto">
        <pre data-prefix="$" class="text-success"><code>OK</code></pre> 
        <pre data-prefix=">" ><code>127.0.0.2 <i>[The current IP address for your update - can be blank]</i></code></pre>
        <pre data-prefix=">" ><code>2002:DB7::21f:5bff:febf:ce22:8a2e <i>[The current IPV6 address for your update - can be blank]</i></code></pre>
        <pre data-prefix=">" class="text-warning"><code>UPDATED [UPDATED or NOCHANGE]</code></pre>
    </div>

    
    <h4 class="text-2xl font-bold mb-5">HTTP Parameters</h4>

    <ul class="mb-5 list-disc list-inside font-thin">
        <li>
            <font-awesome-icon icon="triangle-exclamation" /> <a class="text-red">REQUIRED</a> : <b>Domains</b> / Comma separated list of the subnames you want to update.
        </li>
        <li>
            <font-awesome-icon icon="triangle-exclamation" /> REQUIRED : <b>Token</b> / your account token.
        </li>
        <li>
            <i>OPTIONAL</i> : <b>IP</b>  /if left blank we detect IPv4 addresses, if you want you can supply a valid IPv4 or IPv6 address.
        </li>
        <li>
            <i>OPTIONAL</i> :  <b>Ipv6</b>  / a valid IPv6 address, if you specify this then the autodetection for ip is not used.
        </li>
        <li>
            <i>OPTIONAL</i> : <b>Verbose</b>  / if set to true, you get information back about how the request went.
        </li>
        <li>
            <i>OPTIONAL</i> : <b>Clear</b> / if set to true, the update will ignore all ip's and clear both your records.
        </li>
    </ul>


    <h3 class="text-2xl font-bold mb-5">Special no-parameter request format</h3>

    <p class="font-thin mb-5">
        Some very basic routers can only make requests without parameters .
        <br><br>
        For these requirements the following request is possible :
    </p>

    <div class="mockup-code mb-5 overflow-x-auto">
        <pre data-prefix="$" class="text-success"><code>https://duckdns.org/update/{<b class="text-warning">YOURDOMAIN</b>}/{<b class="text-warning">YOURTOKEN</b>}[/{<b class="text-warning">YOURIPADDRESS</b>}]</code></pre>
    </div>

    <h3 class="text-2xl font-bold mb-5">Restrictions</h3>
    <ul class="mb-5 list-disc list-inside font-thin">
        <li>
            <font-awesome-icon icon="triangle-exclamation" /> <a class="text-red">REQUIRED</a> : <b>YOURDOMAIN</b> / only a single subdomain.
        </li>
        <li>
            <font-awesome-icon icon="triangle-exclamation" /> REQUIRED : <b>YOURTOKEN</b> / your account token.
        </li>
        <li>
            <i>OPTIONAL</i> : <b>YOURIPADDRESS</b>  / if left blank we detect IPv4 addresses, if you want to over-ride this, with a valid IPv4 or IPv6 address.
        </li>
    </ul>


    <h3 class="text-2xl font-bold mb-5">TXT Record API</h3>

    <p class="font-thin mb-5">
        The TXT update URL can be requested on HTTPS or HTTP. It is recommended that you always use HTTPS . <br>
        We provide HTTP services for unfortunate users that have HTTPS blocked .<br><br>

        You can update your domain(s) TXT record with a single HTTPS get to DuckDNS .<br><br>
        Your TXT record will apply to all sub-subdomains under your domain e.g. <b>xxx.yyy.duckdns.org</b> shares the same TXT record as <b>yyy.duckdns.org</b> :<br><br>
    </p>

    <div class="mockup-code mb-5 overflow-x-auto">
        <pre data-prefix="$"><code>https://www.duckdns.org/update?domains={<b class="text-warning">YOURVALUE</b>}&token={<b class="text-warning">YOURVALUE</b>}&txt={<b class="text-warning">YOURVALUE</b>}[<b class="text-warning">&verbose=true</b>][<b class="text-warning">&clear=true</b>]</code></pre>
    </div>

    <p class="font-thin mb-5">
        The domain can be a single domain - or a comma separated list of domains. <br><br>
        The domain does not need to include the .duckdns.org part of your domain, just the subname.<br><br>
        To clear the TXT value of your records use the optional parameter <b>clear=true</b> .<br><br>
        A normal good response is :
    </p>

    <div class="mockup-code mb-5 overflow-x-auto">
        <pre data-prefix="$" class="text-success"><code>OK</code></pre>
    </div>

    <p class="font-thin mb-5">A normal bad response is:</p>

    <div class="mockup-code mb-5 overflow-x-auto">
        <pre data-prefix="$" class="text-error"><code>KO</code></pre>
    </div>

    <p class="font-thin mb-5">If you add the <b>&verbose=true</b> parameter to your request, then OK responses have more information :</p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$" class="text-success"><code>OK</code></pre> 
        <pre data-prefix=">" ><code>sometxt=thistext [The current TXT record for your update - can be blank]</code></pre> 
        <pre data-prefix=">" ><code>UPDATED [UPDATED or NOCHANGE]</code></pre>
    </div>

    <h3 class="text-2xl font-bold mb-5">HTTP Parameters</h3>

    <ul class="mb-5 list-disc list-inside font-thin">
        <li>
            <font-awesome-icon icon="triangle-exclamation" /> <a class="text-red">REQUIRED</a> : <b>Domains</b> / Comma separated list of the subnames you want to update.
        </li>
        <li>
            <font-awesome-icon icon="triangle-exclamation" /> REQUIRED : <b>Token</b> / your account token.
        </li>
        <li>
            <font-awesome-icon icon="triangle-exclamation" /> REQUIRED : <b>Txt</b>  / if left blank we detect IPv4 addresses, if you want you can supply a valid IPv4 or IPv6 address.
        </li>
        <li>
            <i>OPTIONAL</i> : <b>Verbose</b>  / if set to true, you get information back about how the request went.
        </li>
        <li>
            <i>OPTIONAL</i> : <b>Clear</b> / if set to true, the update will ignore the txt parameter and clear the txt record.
        </li>
    </ul>

    <i class="font-thin mb-5">TODO : Note that the TXT record does not show up in the WEB interface </i>

    <p class="font-thin mb-5">
        You can use online web based Dig tools to query your record :
        <br><br>
        <a href="https://www.digwebinterface.com/?hostnames=test.duckdns.org&type=TXT&ns=resolver&useresolver=8.8.4.4"  class="link">digwebinterface</a>
        <br><br>
        To see your TXT record on linux or osx you can query DNS directly :
    </p>
        <div class="mockup-code mb-5 overflow-x-auto">
            <pre data-prefix="$"><code>dig test.duckdns.org TXT</code></pre>
        </div>
    <p class="font-thin mb-5">
        As stated before, this record will be also presented for any sub-subdomain queries :
    </p>
        <div class="mockup-code mb-5 overflow-x-auto">
            <pre data-prefix="$"><code>dig test.duckdns.org TXT</code></pre>
        </div>
    <p class="font-thin mb-5">
        This can be used for example to prove your ownership with <a href="letsencrypt.org" class="text-bold link">letsencrypt.org</a>.
    </p>
        
</template>
