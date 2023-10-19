    <template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-5">OSX <font-awesome-icon :icon="['fab', 'apple']" class="text-secondary"/></h1>
    <p class="font-thin mb-5">
        If you are not familiar with using the terminal on OSX, consider using the JAR file (from the windows-gui) from <a href="http://www.etx.ca/" class="link">http://www.etx.ca/</a>.
    </p>

    <p class="font-thin mb-5">
        OSX (10.8 or older) by default does have cron installed. When you open the crontab, a new crontab will be set up for your user. Let's get started and make a directory to put your files in, move into it, and make our main script. These instructions are for the user "administrator". Change the paths to match your user. Open a new terminal; it will be in your home directory.
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>mkdir duckdns<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
        <pre data-prefix="$"><code>cd duckdns</code></pre>
        <pre data-prefix="$"><code>vi duck.sh</code></pre>
    </div>

    <p class="font-thin mb-5">
        Now copy the following text and put it into the file (in vi, hit the i key to insert, ESC then u to undo). You must change your token and domain to the one you want to update. You can pass a comma-separated (no spaces) list of domains. If you need, you can hard code an IP (it's best not to - leave it blank, and we detect your remote IP).
    </p>

    <div class="mockup-code mb-5">
        <pre><code>echo url="https://www.duckdns.org/update?domains=exampledomain&token=YOUR-TOKEN-HERE&ip=" | curl -k -o /Users/administrator/duckdns/duck.log -K -<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        After adding the above code, save the file (in vi hit ESC then :wq! then ENTER). This script will make an HTTPS request and log the output in the file duck.log. Now, make the duck.sh file executable.
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>chmod 700 duck.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
    </div>

    <p class="font-thin mb-5">
        Next, we will be using the cron process to make the script run every 5 minutes.
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>crontab -e<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
        <pre><code>*/5 * * * * /Users/administrator/duckdns/duck.sh >/dev/null 2>&1</code></pre>
    </div>

    <p class="font-thin mb-5">
        Now save the file (CTRL+o then CTRL+x). Let's test the script.
    </p>

    <div class="mockup-code mb-5">
        <pre data-prefix="$"><code>./duck.sh<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre>
        <pre data-prefix="$"><code>cat duck.log</code></pre>
    </div>

    <p class="font-thin mb-5">
        If the output is "KO", check that your Token and Domain are correct in the duck.sh script.
    </p>

</template>

<script setup>
//
</script>