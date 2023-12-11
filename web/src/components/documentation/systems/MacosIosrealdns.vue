<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">OSX/iOS - RealDNS <font-awesome-icon :icon="['fab', 'apple']" class="text-secondary"/></h1>

    <p class="font-thin">
        <a href="http://minglebit.com/products/realdns.php" class="link">RealDNS</a> is a client for iOS and they support DuckDNS, have a look on the <a href="https://itunes.apple.com/us/app/realdns/id907980233?mt=12&ign-mpt=uo%3D4" class="link">iTunes Store</a>
    </p>

    <img :src="images" alt="realdns_screenshot">
</template>

<script setup>
const images = '/images/capture/macos/realdns_screenshot.png'
</script>