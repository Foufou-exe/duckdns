<template>
    <h1 class="text-4xl font-extrabold mb-5">Windows - Script <font-awesome-icon :icon="['fab', 'windows']" class="text-primary"/></h1>
    <p class="font-thin mb-5">
        These instructions are for <b>Windows 7</b>, the vbs script should work in Vista, Windows 8 and even XP. <br>
        However you will have to work out the differences in the <b>Task Scheduler</b> between different versions of Windows.     
    </p>
    <h2 class="text-2xl font-extrabold mb-5 underline">Step 1 : Choose your Domain</h2>
    <p class="font-thin mb-5">You must change your <b>token</b> and <b>domain</b> to be the one you want to update .</p>
    <h2 class="text-2xl font-extrabold mb-5 underline">Step 2 : Creating the script</h2>
    <ul class="mb-5 font-thin">
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
            <p class="font-thin mb-4"><span class="font-bold">2.4</span> Copy the code below :</p>
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
        </li>
        <li>
            <p class="font-thin mb-3"><span class="font-bold">2.5</span> Go back to the text document and select Paste. Save the document and close it.</p>
        </li>
        <li>
            <p class="font-thin mb-3"><span class="font-bold">2.6</span> Replace the .TXT at the end of the text document file with .VBS and press enter. Select Yes to the extension popup.</p>
        </li>
        <li>
            <p><a class="font-bold mb-3">NOTE</a> : If you can't see the .TXT at the end of the file you will need to turn on '<b>File Name Extensions</b>'. <br> This can be done by :</p>
            <ul class="mt-3">
                <li class="mb-2">
                    <p><a class="font-bold">Windows 8 </a> : Open an explorer window such as Computer or Documents folder by pressing <kbd class="kbd">ctrl</kbd> + <kbd class="kbd">E</kbd> on your keyboard. Along the top bar there is an option called VIEW, select it and to the right hand side place a tick in the box that reads "File Name Extensions". Go back to your file and perform step 2.6.</p>
                </li>
                <li class="mb-2">
                    <p><a class="font-bold">Windows 7 / XP</a> : Go to Start and select Computer (My Computer for XP) then along the top of the window find and select Tools > Folder Options and go to the View tab. Find and de-select the "Hide extensions for known file types". Click OK, go back to your file and perform step 2.6.</p>
                </li>
            </ul>
        </li>
    </ul>

    
    <h2 class="text-2xl font-extrabold mb-5 underline">Step 3 : Creating a Task</h2>
    <p class="font-thin mb-5">
        This task is to automatically run the script file you have just created. Please follow the instructions based on your edition of Windows.<br><br>
        <b>Windows 7 and 8:</b> <br>
        <u>To open Task Scheduler on Windows 8 and 8.1</u>:<br>
        - <b>Click</b> on the Start menu (<i>Windows 8.1</i>) or press your Windows key on your keyboard. <br>
        - <b>Start</b> typing the words <b>CONTROL PANEL</b> and select Control Panel from the right hand side when the option appears. <br>
        - <b>Go</b> in to <b>Administrative Tools</b> and <b>open Task Scheduler</b>. <br>
        To open Task Scheduler on <b>Windows 7</b>: <br>
        - <b>Click</b> Start and select Control Panel. <br>
        - <b>Go</b> in to Administrative Tools and open Task Scheduler.<br>
        - <b>Select Create</b> Task from the right column .<br>
        - <b>Enter</b> "DuckDns Updater" in the Name field then select the Triggers tab and click New.<br>
        - <b>Set the Trigger to be Daily</b>, starting at 12:00:01AM and tick the box to 'Repeat task every:' and set it to 5 minutes. (<i>Refer to image below</i>) .<br>
        - <b>Click</b> OK when done.<br>
    </p>
    <div class="flex justify-center item-center mb-5">
        <img src="images/capture/windows/windows_task_script.png" alt="windows-screen-task" class="w-1/2">
    </div>
    <p class="font-thin mb-5">
        Next go to the Actions tab and select New. In the '<b>Program/script</b>' field select the <b>Browse button</b> . <br> In the new window that opened, click on <kbd class="kbd kbd-sm">This PC</kbd> on the left column and then go to <b>C:\Users\YOUR-USERNAME </b>and click once on the script you created before. Click <b>OPEN</b> on the bottom of the window then click OK and OK again on the Create Task window.
    </p>
    <div class="flex justify-center item-center mb-5">
        <img src="images/capture/windows/windows_task_script2.png" alt="windows-screen-task" class="w-1/2">
    </div>
    <h4 class="font-bold text-xl  mb-5">Windows XP :</h4>
    <p class="font-thin mb-5">
        - <b>Click Start</b>, go to Control Panel and open '<b>Schedule Tasks</b>'.  <br>
        - <b>Select Add</b> a new Task from the top of the window.<br>
        - <b>Click Next</b> on the new window that opens then select <b>Browse</b> when presented with the window shown below.
    </p>
    <div class="flex justify-center item-center mb-5">
        <img src="images/capture/windows/windowsxp_task_script1.png" alt="windows-screen-task" class="w-1/2">
    </div>
    <p class="font-thin mb-5">
        - <b>Click</b> on My Computer on the left column and go to <b>C:\Documents</b> and <b>Settings\YOUR-USERNAME</b> .<br>
        - <b>Click </b>once on your script file and select <b>Open</b> from the bottom right.
    </p>
    <div class="flex justify-center item-center mb-5">
        <img src="images/capture/windows/windowsxp_task_script2.png" alt="windows-screen-task" class="w-1/2">
    </div>
    <p  class="font-thin mb-5">
        On the next window select '<b>When I Log On</b>' and click Next. Leave the username and password boxes as they are and select Next, then Select Finish 😊.
    </p>
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