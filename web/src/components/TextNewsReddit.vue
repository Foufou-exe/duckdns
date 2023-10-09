<template>
    <div class="mb-10">
        <h1 class="text-4xl font-extrabold mb-5">Goodbye Reddit? <div class="badge badge-outline badge-primary font-normal">Last News</div></h1>
        <p class="font-thin">
            We have had an exchange of emails from the Reddit Legal team.
            They extended the switch off date to the <a class="font-bold">8 March 2021</a>, we have now took down the ability to login with Reddit oAuth.
            You are still able to login with your reddit name and token, however we reccomend moving off Reddit Login, by deleting your domains and re-adding them to another login.
            If you lose your token or forget your token, we have no-way of giving you access.
        </p>

    </div>
    <div class="collapse collapse-arrow p-5 border">
        <!-- <input type="radio" name="my-accordion-2" checked="checked" />  -->
        <div class="collapse-title text-2xl font-bold">
          Our Annoucement
        </div>
        <div class="collapse-content"> 
            <p>
                We are sad to announce that from the <a class="font-bold">28 Febuary 2021</a> , we will no-longer be allowed to use the Reddit oAuth API to allow you to login to the site.
                <br> <br>
                The Reddit Legal team have asked us to remove the login with Reddit feature and will disable the API key we have, on the <a class="font-bold">1st March 2021</a>.
                <br> <br>
                We have tried, but failed to convince them, and we have to help you - our cherished users - to move to another login mechanism.
                <br> <br>
                Our suggestion is that you login to DuckDNS with your Reddit account (before it is disabled) and delete your domains; then login with some other mechanism (Google / Twitter / GitHub) and re-claim your domains.
                <br> <br>
                After doing this your token will have updated and you will need to update any scripts you have to keep your domain and ip updated.
                <br> <br>
                Sorry to put you all through this pain, it's been a great 7 years of being integrated with Reddit oAuth.
                <br> <br>
                We will still be around here, and will keep our ever growing userbase supported.
                <br> <br>
                Best Wishes
                <br> <br>
            
                <a class="font-bold"> Steven & Richard</a>
            </p>
        </div>
    </div>
    <div class="collapse collapse-arrow border p-5">
        <input type="radio" name="my-accordion-2" /> 
        <div class="collapse-title text-2xl font-bold">
            The Reddit Legal Teams conclusive email
        </div>
        <div class="collapse-content"> 
            <p>
                Hi Steven,
                <br> <br>
                We unfortunately do not allow use of Reddit’s API for account authentication with third-party sites or applications that have no partnership, affiliation, or connection with Reddit. Reddit does not offer or support “log in with Reddit” or “use Reddit” to login services. Use of any sort of button, including a “use Reddit” login button like the one currently featured on your site, is unauthorized.
                <br> <br>
                As noted previously, using Reddit’s Trademarks (which includes the term “Reddit”) for such a login button violates Reddit’s API Terms of Use. Offering this login option misleads and confuses consumers by implying Reddit’s endorsement, association or sponsorship of your application.
                <br> <br>
                We will give you until <a class="font-bold">March 1 2021 </a>, to notify your users. After that, we will revoke your new API token. We request that you cease further unauthorized use of Reddit’s API to authenticate user accounts on DuckDNS and remove any button that references “Reddit” from your site.
                <br> <br>
                Thank you in advance for your cooperation and understanding.
                <br> <br>
                Best,
                <br> <br>
                <a class="font-bold">Reddit Legal</a>

            </p>
        </div>
    </div>

</template>

<script setup>
//
</script>