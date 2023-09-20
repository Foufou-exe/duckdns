<template>
    <footer class="footer p-10 text-base-content absolute bottom-0 left-0 right-0">
        <aside>
            <img src="/duck.png" class="w-14 mr-2" />
            <p>Duck DNS<br/>Providing reliable tech since 2013</p>
        </aside> 
        <nav>
            <header class="footer-title">Legal</header> 
            <a class="link link-hover">Terms of use</a> 
            <a class="link link-hover">Privacy statement</a> 
        </nav>
        <nav>
            <header class="footer-title">Donation</header> 
            <div class="text-xs italic">We accept donations in the following ways :</div>
            <div class="flex flex-wrap">
                <a href="https://www.paypal.com/donate?token=DK6TnV1LP12XjURmkHGhX_3bLEVt-AtVxbCn5bAf_j-SdZPoEfmT-s5RZX3g7x1wQcxsaqoSq0UmCnz2&locale.x=GB" class="link link-hover lg:tooltip lg:tooltip-open lg:tooltip-bottom" data-tip="Donate with Paypal">
                    <img src="/images/paypal.png" class="mr-2 w-48" />
                </a>
                <a href="bitcoin:16gHnv3NTjpF5ZavMi9QYBFxUkNchdicUS" class="link link-hover lg:tooltip lg:tooltip-open lg:tooltip-bottom" data-tip="Donate with Bitcoin">
                    <img src="/images/bitcoins.png" class="mr-2 w-56" />
                </a>
                <a href="https://www.patreon.com/user?u=3209735&ty=h&u=3209735" class="link link-hover lg:tooltip lg:tooltip-open lg:tooltip-bottom" data-tip="Donate with Patreon">
                    <img src="/images/patreon.png" class="mr-2 w-56" />
                </a>
            </div>
        </nav>
        <nav>
            <header class="footer-title">Forum</header> 
            <a class="link link-hover lg:tooltip lg:tooltip-open lg:tooltip-bottom" data-tip="Joins Google Groups Duck DNS" href="https://groups.google.com/g/duckdns">
                <img src="/images/groupe-google.png" class="mr-2 w-12" />
            </a>
        </nav>
  </footer>
</template>