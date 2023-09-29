<template>
HTTP API Specification
The update URL can be requested on HTTPS or HTTP. It is recommended that you always use HTTPS
We provide HTTP services for unfortunate users that have HTTPS blocked
You can update your domain(s) with a single HTTPS get to DuckDNS

https://www.duckdns.org/update?domains={YOURVALUE}&token={YOURVALUE}[&ip={YOURVALUE}][&ipv6={YOURVALUE}][&verbose=true][&clear=true]
The domain can be a single domain - or a comma separated list of domains.
The domain does not need to include the .duckdns.org part of your domain, just the subname.
If you do not specify the IP address, then it will be detected - this only works for IPv4 addresses
You can put either an IPv4 or an IPv6 address in the ip parameter
If you want to update BOTH of your IPv4 and IPv6 records at once, then you can use the optional parameter ipv6
to clear both your records use the optional parameter clear=true
A normal good response is

OK
A normal bad response is

KO
if you add the &verbose=true parameter to your request, then OK responses have more information

OK
127.0.0.2 [The current IP address for your update - can be blank]
2002:DB7::21f:5bff:febf:ce22:8a2e [The current IPV6 address for your update - can be blank]
UPDATED [UPDATED or NOCHANGE]
HTTP Parameters
domains - REQUIRED - comma separated list of the subnames you want to update
token - REQUIRED - your account token
ip - OPTIONAL - if left blank we detect IPv4 addresses, if you want you can supply a valid IPv4 or IPv6 address
ipv6 - OPTIONAL - a valid IPv6 address, if you specify this then the autodetection for ip is not used
verbose - OPTIONAL - if set to true, you get information back about how the request went
clear - OPTIONAL - if set to true, the update will ignore all ip's and clear both your records




Special no-parameter request format
Some very basic routers can only make requests without parameters
For these requirements the following request is possible

https://duckdns.org/update/{YOURDOMAIN}/{YOURTOKEN}[/{YOURIPADDRESS}]
Restrictions
YOURDOMAIN - REQUIRED - only a single subdomain
YOURTOKEN - REQUIRED - your account token
YOURIPADDRESS - OPTIONAL - if left blank we detect IPv4 addresses, if you want to over-ride this, with a valid IPv4 or IPv6 address




TXT Record API
The TXT update URL can be requested on HTTPS or HTTP. It is recommended that you always use HTTPS
We provide HTTP services for unfortunate users that have HTTPS blocked
You can update your domain(s) TXT record with a single HTTPS get to DuckDNS
your TXT record will apply to all sub-subdomains under your domain e.g. xxx.yyy.duckdns.org shares the same TXT record as yyy.duckdns.org

https://www.duckdns.org/update?domains={YOURVALUE}&token={YOURVALUE}&txt={YOURVALUE}[&verbose=true][&clear=true]
The domain can be a single domain - or a comma separated list of domains.
The domain does not need to include the .duckdns.org part of your domain, just the subname.
to clear the TXT value of your records use the optional parameter clear=true
A normal good response is

OK
A normal bad response is

KO
if you add the &verbose=true parameter to your request, then OK responses have more information

OK
sometxt=thistext [The current TXT record for your update - can be blank]
UPDATED [UPDATED or NOCHANGE]
HTTP Parameters
domains - REQUIRED - comma separated list of the subnames you want to update
token - REQUIRED - your account token
txt - REQUIRED - the txt you require
verbose - OPTIONAL - if set to true, you get information back about how the request went
clear - OPTIONAL - if set to true, the update will ignore the txt parameter and clear the txt record

Note that the TXT record does not show up in the WEB interface
You can use online web based Dig tools to query your record
https://www.digwebinterface.com/?hostnames=test.duckdns.org&type=TXT&ns=resolver&useresolver=8.8.4.4
To see your TXT record on linux or osx you can query DNS directly

dig test.duckdns.org TXT
As stated before, this record will be also presented for any sub-subdomain queries

dig test.test.duckdns.org TXT
This can be used for example to prove your ownership with letsencrypt.org
    
</template>