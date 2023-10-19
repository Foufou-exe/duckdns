<template>
<h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">OSX - Homebrew <font-awesome-icon :icon="['fab', 'apple']" class="text-secondary"/></h1>

<p class="font-thin mb-5">
    Open a new terminal; it will be in your home directory.
</p>

<div class="mockup-code mb-5">
    <pre data-prefix="$"><code>brew tap jzelinskie/duckdns<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
    <pre data-prefix="$"><code>brew install duckdns</code></pre>
    <pre data-prefix="$"><code>ln -sfv /usr/local/opt/duckdns/*.plist ~/Library/LaunchAgents</code></pre>
    <pre data-prefix="$"><code>launchctl load ~/Library/LaunchAgents/homebrew.mxcl.duckdns.plist</code></pre>
</div>

<p class="font-thin mb-5">
    Create a new text file at <code>$HOME/.duckdns</code>. You must change your token and domain to the one you want to update. Paste the following contents into the file:
</p>

<div class="mockup-code mb-5">
    <pre><code>DOMAIN="exampledomain" <div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
    <pre><code>TOKEN="a7c4d0ad-114e-40ef-ba1d-d217904a50f2"</code></pre>
</div>
</template>

<script setup>
//
</script>