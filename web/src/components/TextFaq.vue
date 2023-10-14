<template>
    <h1 class="text-5xl font-extrabold mb-5">FAQ</h1>
    <p class="mb-3">
        This page is dedicated to the question asked .
    </p>

    <h4 class="font-bold mb-3">List of questions :</h4>

    <div class="collapse collapse-plus border p-5 mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            How is this free ?
        </div>
        <div class="collapse-content"> 
            <p>We have created a service that we have wanted for ourselves and believe in keeping it free or as cheap as possible to cover running costs, our attempt is to host and run the service at almost zero outlay excluding our time.</p>
        </div>
    </div>

    <div class="collapse collapse-plus border p-5 mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            What data do you keep ?
        </div>
        <div class="collapse-content"> 
            <p>The simple answer is : as little as possible. <br><br>In addition to data logs that are used to facilitate and monitor our services, we only store your email address, ip, token, domains and of course your target ips.</p>
        </div>
    </div>
    <div class="collapse collapse-plus border p-5 mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            What happens to my data ?
        </div>
        <div class="collapse-content"> 
            <p>This goes into a private database and will never be sold on, we have no plans to send any emails to this list.</p>
        </div>
    </div>
    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            Are you secure ?
        </div>
        <div class="collapse-content"> 
            <p>Our entire service is run over https with a valid 256bit signed ssl certificate..</p>
        </div>
    </div>

    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            Can I script my own update ?
        </div>
        <div class="collapse-content"> 
            <p>
                Yes, you can do this on http or https. you can comma separate the domains if you want to update more than one, the ip parameter is optional, if you leave it blank we detect your gateway ip
                <br> <br>https://www.duckdns.org/update?domains=ben&token=064a0540-864c-4f0f-8bf5-23857452b0c1&ip= <br> <br>
                see the spec page for all the details and options.
            </p>
        </div>
    </div>

    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            My router can only do basic https GETs, I cannot send parameters, do you support this ?
        </div>
        <div class="collapse-content"> 
            <p>
                Yes either on http or https, you can make a simple request with the following format, the ip parameter is optional, if you leave it blank we detect your gateway ip. see the allied telesis install page.
                <br> <br>https://duckdns.org/update/exampledomain/yourtoken/ipaddress
                <br> <br>https://duckdns.org/update/exampledomain/yourtoken
            </p>
        </div>
    </div>


    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            Why does my ip not reverse to a host when I type host xxx.xxx.xxx.xxx ?
        </div>
        <div class="collapse-content"> 
            <p>
                We don't have the authority to update the reverse zones hosted by your ISP
            </p>
        </div>
    </div>


    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            Why can't you detect IPv6 addresses ?
        </div>
        <div class="collapse-content"> 
            <p>
                Our service is hosted in AWS, they do not support IPv6 on Elastic Load Balancers for the account type we have (VPC), when amazon do support it, we will start detecting it.
            </p>
        </div>
    </div>


    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            Can I use this for my email ?
        </div>
        <div class="collapse-content"> 
            <p>
                Yes, but you are going to have to sort out installing a mail server etc yourself. The MX record will be the same as your normal A record.
            </p>
        </div>
    </div>

    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            I want to change my token, how do I do this ?
        </div>
        <div class="collapse-content"> 
            <p>
                On the Account page, in the header, next to your logged in email are three small lines, click on these, then click on the recreate token button
            </p>
        </div>
    </div>

    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            I want to use my own Domain name with DuckDNS, can I do this ?
        </div>
        <div class="collapse-content"> 
            <p>
                Yes you can. At your NAME provider set your purchased record as a CNAME to your duckdns.org record.
                www.ilikeweasels.org CNAME weasels.duckdns.org
            </p>
        </div>
    </div>

    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            Why do I have to specify my IPv6 address, can't you just detect it ?
        </div>
        <div class="collapse-content"> 
            <p>
                Amazon Web Services (where we host our servers) do not support IPv6 addresses on servers hosted in VPC
                VPC is the new/best hosting in AWS, when AWS support IPv6 on VPC Elastic Load Balancers on VPC, then we will start detecting it.
            </p>
        </div>
    </div>


    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            Is your custom DNS Server responding properly
        </div>
        <div class="collapse-content"> 
            <p>
                We use a very handy online tool to check our DNS server meets standards intodns.com, also we highly recommend the linux command dig
            </p>
        </div>
    </div>


    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            Why use DuckDNS there are many other DDNS providers that are Free ?
        </div>
        <div class="collapse-content"> 
            <p>
                We come recommended by Gnu Tomorrow, our service is as focused as possible, easy to setup, secure and free solution.
            </p>
        </div>
    </div>

    <div class="collapse collapse-plus border p-5 mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            I want to completely delete my account ?
        </div>
        <div class="collapse-content"> 
            <p>
                Fair enough, on the Account page, in the header, next to your logged in email are three small lines, click on these, then click the delete account button
            </p>
        </div>
    </div>

    <div class="collapse collapse-plus border p-5  mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
            Do you have an Abuse policy?
        </div>
        <div class="collapse-content"> 
            <p>
                Yes, we will block, as much as we can anyone who is abusing our service, see our Terms of Use and Privacy Policy. If you have any issues please use the Google Group to contact us
            </p>
        </div>
    </div>

</template>

<script setup>
//
</script>