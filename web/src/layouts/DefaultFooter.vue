<template>
    <footer class="footer p-16 text-base-content">
        <aside>
            <label class="swap swap-flip">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" />
                
                <div class="swap-on"><img src="@/assets/images/duckdns.png" class="w-14 mr-2" /></div>
                <div class="swap-off"><img src="@/assets/images/duck.png" class="w-14 mr-2" /></div>
            </label>
            <!-- <img src="/duck.png" class="w-14 mr-2" /> -->
            <p>Duck DNS<br/>Providing reliable tech since 2013</p>
        </aside> 
        <nav>
            <header class="footer-title">Legal</header> 
            <router-link :to="{ name: 'terms-of-use' }" class="link link-hover">Terms of use</router-link> 
            <router-link :to="{ name: 'privacy-statement' }"  class="link link-hover">Privacy statement</router-link> 
        </nav>
        <nav>
            <header class="footer-title">Donation</header> 
            <div class="text-xs italic">We accept donations in the following ways :</div>
            <div class="flex flex-wrap">
                <a href="https://www.paypal.com/donate?token=DK6TnV1LP12XjURmkHGhX_3bLEVt-AtVxbCn5bAf_j-SdZPoEfmT-s5RZX3g7x1wQcxsaqoSq0UmCnz2&locale.x=GB" class="link link-hover lg:tooltip lg:tooltip-open lg:tooltip-bottom" data-tip="Donate with Paypal">
                    <img src="@/assets/images/footer/paypal.png" class="mr-2 w-48" />
                </a>
                <a href="bitcoin:16gHnv3NTjpF5ZavMi9QYBFxUkNchdicUS" class="link link-hover lg:tooltip lg:tooltip-open lg:tooltip-bottom" data-tip="Donate with Bitcoin">
                    <img src="@/assets/images/footer/bitcoins.png" class="mr-2 w-48 rounded" />
                </a>
                <a href="https://www.patreon.com/user?u=3209735&ty=h&u=3209735" class="link link-hover lg:tooltip lg:tooltip-open lg:tooltip-bottom" data-tip="Donate with Patreon">
                    <img src="@/assets/images/footer/patreon.png" class="mr-2 w-48" />
                </a>
            </div>
        </nav>
        <nav>
            <header class="footer-title">Forum</header> 
            <a class="link link-hover lg:tooltip lg:tooltip-open lg:tooltip-bottom" data-tip="Joins Google Groups Duck DNS" href="https://groups.google.com/g/duckdns">
                <img src="@/assets/images/footer/groupe-google.png" class="mr-2 w-12" />
            </a>
        </nav>
  </footer>
</template>
