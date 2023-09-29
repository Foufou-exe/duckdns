<template>
Q: how is this free?

A: we have created a service that we have wanted for ourselves and believe in keeping it free or as cheap as possible to cover running costs, our attempt is to host and run the service at almost zero outlay excluding our time.


Q: what data do you keep?

A: the simple answer is: as little as possible. In addition to data logs that are used to facilitate and monitor our services, we only store your email address, ip, token, domains and of course your target ips.


Q: what happens to my data?

A: this goes into a private database and will never be sold on, we have no plans to send any emails to this list


Q: are you secure?

A: our entire service is run over https with a valid 256bit signed ssl certificate.


Q: can I script my own update?

A: yes you can do this on http or https. you can comma separate the domains if you want to update more than one, the ip parameter is optional, if you leave it blank we detect your gateway ip
https://www.duckdns.org/update?domains=ben&token=064a0540-864c-4f0f-8bf5-23857452b0c1&ip=
see the spec page for all the details and options.


Q: my router can only do basic https GETs, I cannot send parameters, do you support this?

A: yes either on http or https, you can make a simple request with the following format, the ip parameter is optional, if you leave it blank we detect your gateway ip. see the allied telesis install page.
https://duckdns.org/update/exampledomain/yourtoken/ipaddress
https://duckdns.org/update/exampledomain/yourtoken


Q: why does my ip not reverse to a host when I type host xxx.xxx.xxx.xxx?

A: we don't have the authority to update the reverse zones hosted by your ISP


Q: why can't you detect IPv6 addresses?

A: our service is hosted in AWS, they do not support IPv6 on Elastic Load Balancers for the account type we have (VPC), when amazon do support it, we will start detecting it.


Q: can I use this for my email?

A: yes, but you are going to have to sort out installing a mail server etc yourself. The MX record will be the same as your normal A record.


Q: I want to change my token, how do I do this?

A: on the Account page, in the header, next to your logged in email are three small lines, click on these, then click on the recreate token button


Q: I want to use my own Domain name with DuckDNS, can I do this?

A: Yes you can. At your NAME provider set your purchased record as a CNAME to your duckdns.org record.
www.ilikeweasels.org CNAME weasels.duckdns.org


Q: Why do I have to specify my IPv6 address, can't you just detect it?

A: Amazon Web Services (where we host our servers) do not support IPv6 addresses on servers hosted in VPC
VPC is the new/best hosting in AWS, when AWS support IPv6 on VPC Elastic Load Balancers on VPC, then we will start detecting it.


Q: Is your custom DNS Server responding properly

A: we use a very handy online tool to check our DNS server meets standards intodns.com, also we highly recommend the linux command dig


Q: Why use DuckDNS there are many other DDNS providers that are Free

A: We come recommended by Gnu Tomorrow, our service is as focused as possible, easy to setup, secure and free solution.


Q: I want to completely delete my account?

A: fair enough, on the Account page, in the header, next to your logged in email are three small lines, click on these, then click the delete account button


Q: Do you have an Abuse policy?

A: yes, we will block, as much as we can anyone who is abusing our service, see our Terms of Use and Privacy Policy. If you have any issues please use the Google Group to contact us
    
</template>