<template>
    <h1 class="text-4xl font-extrabold mb-5">Windows - Script <font-awesome-icon :icon="['fab', 'windows']" class="text-primary"/></h1>
    <p class="font-thin mb-5">
        These instructions are for <b>Windows 7</b>, the vbs script should work in Vista, Windows 8 and even XP. <br>
        However you will have to work out the differences in the <b>Task Scheduler</b> between different versions of Windows.     
    </p>
    <h2 class="text-2xl font-extrabold mb-5 underline">Step 1 : Choose your Domain</h2>
    <p class="font-thin mb-5">You must change your <b>token</b> and <b>domain</b> to be the one you want to update .</p>
    <h2 class="text-2xl font-extrabold mb-5 underline">Step 2 : Creating the script</h2>
    <ul>
        <li>
            <p class="font-thin mb-3"><span class="font-bold">2.1</span> Go to '<span class="font-bold">Start</span>' and select Computer (Windows XP select My Computer).</p>
        </li>
        <li>
            <p class="font-thin mb-3"><span class="font-bold">2.2</span> Go into '<b>C:\users\</b><b class="text-warning">YOUR-USERNAME</b>' (Windows XP: <b>C:\Documents</b> and Settings\<b class="text-warning">YOUR-USERNAME</b>)</p>
        </li>
        <li>
            <p class="font-thin mb-3"><span class="font-bold">2.3</span> Right click in an empty spot and go to NEW > Text Document. Name the file Duckdns and open the file.</p>
        </li>
        <li>
            <p class="font-thin mb-3"><span class="font-bold">2.4</span> Highlight all of the green text below and RIGHT CLICK > COPY</p>
        </li>
    </ul>

    <div class="mockup-code mb-5">
        <pre data-prefix="1"><code class="text-warning"><a class="text-error">Call</a> LogEntry()<div @click="copyCodeToClipboard" class="absolute top-2 right-2 btn btn-ghost btn-sm"><font-awesome-icon icon="copy" class="text-white"/></div></code></pre> 
        <pre data-prefix="2"><code></code></pre> 
        <pre data-prefix="3" ><code class="text-warning"><a class="text-error">Sub</a> LogEntry()</code></pre>
        <pre data-prefix="4"><code >    <a class="text-error">On</a> Error Resume Next</code></pre>
        <pre data-prefix="5"><code >    <a class="text-error">Dim</a> objRequest</code></pre>
        <pre data-prefix="6"><code >    <a class="text-error">Dim</a> URL</code></pre>
        <pre data-prefix="7"><code ></code></pre>
        <pre data-prefix="8"><code >    <a class="text-error">URL</a> = "https://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip="</code></pre>
        <pre data-prefix="7"><code ></code></pre>
        <pre data-prefix="9"><code >    <a class="text-error">Set</a> objRequest = CreateObject("Microsoft.XMLHTTP")</code></pre>
        <pre data-prefix="10"><code >    <a class="text-error">objRequest.open</a> "GET", URL , false</code></pre>
        <pre data-prefix="11"><code >    <a class="text-error">objRequest.Send</a></code></pre>
        <pre data-prefix="12"><code >    <a class="text-error">Set</a> objRequest = Nothing</code></pre>
        <pre data-prefix="13"><code ><a class="text-error">End</a> Sub</code></pre>
    </div>
    <h2 class="text-2xl font-extrabold mb-5 underline">Step 3 : Creating a Task</h2>
</template>

<script setup>
const copyCodeToClipboard = async () => {
    const mockup = document.querySelector('.mockup-code');
    const lines = mockup.querySelectorAll('code');
    let codeContent = '';

    lines.forEach(line => {
        // On retire les éventuelles balises HTML (comme les <a>) pour ne garder que le texte
        codeContent += line.innerText + '\n';
    });

    // Utilisation de la Clipboard API pour copier le contenu formaté
    try {
        await navigator.clipboard.writeText(codeContent.trim());
    } catch (err) {
        console.error('Erreur lors de la copie :', err);
    }
};
</script>

<style>
.mockup-code pre code {
    word-wrap: break-word;  /* Permet au texte de se casser et de passer à la ligne */
    white-space: pre-wrap;  /* Respecte les espaces et retours à la ligne dans le texte */
}
</style>