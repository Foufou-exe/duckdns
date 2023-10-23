<!-- <template>
    <div class="mb-5 mt-5">
        <div class="join mb-10 flex flex-col md:flex-row">
            <select class="select select-bordered join-item" v-model="selectedCategory" @change="onCategoryChange">
                <option disabled value="">Choose to categorie</option>
                <option>Operating Systems</option>
                <option>Routers</option>
                <option>Standards</option>
            </select>
            <select v-if="typeOptions.length" class="select select-bordered join-item" v-model="selectedType" @change="onTypeChange">
                <option disabled value="">Type</option>
                <option v-for="type in typeOptions" :key="type">{{ type }}</option>
            </select>
            <select v-if="subtypeOptions.length" class="select select-bordered join-item" v-model="selectedSubtype">
                <option disabled value="">Sub type</option>
                <option v-for="subtype in subtypeOptions" :key="subtype">{{ subtype }}</option>
            </select>
        </div>
        <div v-if="selectedSubtype" class="mb-5">
            <component :is="currentViewComponent" v-if="currentViewComponent"/>
        </div>
        <div v-if="selectedType" class="mb-5">
            <component :is="currentViewComponentCategorie" v-if="currentViewComponentCategorie"/>
        </div>    
    </div>
</template>

<script setup>

import { ref, computed  } from 'vue';

// Linux components
import TextDocumentationLinuxToEc2 from './TextDocumentationLinuxToEc2.vue'
import TextDocumentationLinuxToCron from './TextDocumentationLinuxToCron.vue'
import TextDocumentationLinuxToBsdCron from './TextDocumentationLinuxToBsdCron.vue'
import TextDocumentationLinuxToNetcatCron from './TextDocumentationLinuxToNetcatCron.vue'
import TextDocumentationLinuxToGui from './TextDocumentationLinuxToGui.vue'
// Android components
import TextDocumentationAndroidToOs from './TextDocumentationAndroid.vue'
// MacOs components
import TextDocumentationMacOs from './TextDocumentationMacOs.vue'
import TextDocumentationMacOsToHomebrew from './TextDocumentationMacOsToHomebrew.vue'
import TextDocumentationMacOsToIpMonitor from './TextDocumentationMacOsIpMonitor.vue'
import TextDocumentationMacOsToIosRealDns from './TextDocumentationMacOsIosRealDns.vue'
// Windows components
import TextDocumentationWindowsToC from './TextDocumentationWindowsToC.vue'
import TextDocumentationWindowsToPowershell from './TextDocumentationWindowsToPowershell.vue'
import TextDocumentationWindowsToGui from './TextDocumentationWindowsToGui.vue'
import TextDocumentationWindowsToScript from './TextDocumentationWindowsToScript.vue'
// Raspberry components
import TextDocumentationRaspberryPi from './TextDocumentationRaspberryPi.vue'
import TextDocumentationRaspbmc from './TextDocumentationRaspbmc.vue'
// Other components
import TextDocumentationOtherToDotNet from './TextDocumentationOtherToDotNet.vue'
import TextDocumentationOtherToMono from './TextDocumentationOtherMono.vue'

// Routers components
import TextDocumentationRouteurToAlliedTelesis from './TextDocumentationRouteurToAlliedTelesis.vue'
import TextDocumentationRouteurToDdwrt from './TextDocumentationRouteurToDdwrt.vue'
import TextDocumentationRouteurToEdgeRouter from './TextDocumentationRouteurToEdgeRouter.vue'
import TextDocumentationRouteurToFreenas from './TextDocumentationRouteurToFreenas.vue'
import TextDocumentationRouteurToFritzbox from './TextDocumentationRouteurToFritzbox.vue'
import TextDocumentationRouteurToMikrotik from './TextDocumentationRouteurToMikrotik.vue'
import TextDocumentationRouteurToHardware from './TextDocumentationRouteurToHardware.vue'
import TextDocumentationRouteurToOpenwrt from './TextDocumentationRouteurToOpenwrt.vue'
import TextDocumentationRouteurToPfsense from './TextDocumentationRouteurToPfsense.vue'
import TextDocumentationRouteurToSynology from './TextDocumentationRouteurToSynology.vue'
import TextDocumentationRouteurToSmoothwall from './TextDocumentationRouteurToSmoothwall.vue'
import TextDocumentationRouteurToTechnicolor from './TextDocumentationRouteurToTechnicolor.vue'
import TextDocumentationRouteurToTomotoUsb from './TextDocumentationRouteurToTomotoUsb.vue'
import TextDocumentationRouteurToZteh108n from './TextDocumentationRouteurToZteh108n.vue'
// Standards components
import TextDocumentationStandardsToDNSOmatic from './TextDocumentationStandardsToDNSOmatic.vue'
import TextDocumentationStandardsToDynDNS from './TextDocumentationStandardsToDynDNS.vue'
import TextDocumentationStandardsToGnuDIP from './TextDocumentationStandardsToGnuDIP.vue'
import TextDocumentationStandardsToInadyn from './TextDocumentationStandardsToInadyn.vue'

// Operating Systems components
const selectedCategory = ref('');
const selectedType = ref('');
const selectedSubtype = ref('');

const typeOptions = ref([]);
const subtypeOptions = ref([]);

// Switch Type components
const onCategoryChange = () => {
    selectedType.value = '';
    selectedSubtype.value = '';
    switch(selectedCategory.value) {
        case 'Operating Systems':
            typeOptions.value = ['Windows', 'Linux', 'MacOS', 'Android', 'Raspberry', 'Other'];
            break;
        case 'Routers':
            typeOptions.value = ['Allied Telesis', 'Ddwrt', 'Edge Router','Freenas','Fritzbox','Mikrotik','Hardware','Openwrt','Pfsense','Synology','Smoothwall','Technicolor','Tomoto USB','Zteh108n'];
            break;
        case 'Standards':
            typeOptions.value = ['DNS Omatic', 'DynDNS', 'GnuDIP', 'Inadyn'];
            break;
        default:
            typeOptions.value = [];
            break;
    }
}
// Switch SubType components
const onTypeChange = () => {
    selectedSubtype.value = '';
    switch(selectedType.value) {
        case 'Windows':
            subtypeOptions.value = ['Powershell', 'Script', 'Gui', 'C#'];
            break;
        case 'Linux':
            subtypeOptions.value = ['EC2', 'Cron', 'Bsd Cron', 'Netcat Cron', 'GUI'];
            break;
        
        case 'MacOS':
            subtypeOptions.value = ['OSX', 'Homebrew', 'IP Monitor', 'IOS RealDNS'];
            break;
        case 'Android':
            subtypeOptions.value = ['OS'];
            break;
        case 'Raspberry':
            subtypeOptions.value = ['Pi', 'Raspbmc'];
            break;
        case 'Other':
            subtypeOptions.value = ['DotNet','Mono'];
            break;
        default:
            subtypeOptions.value = [];
            break;
    }
}


const componentsMap = {
    'Powershell': TextDocumentationWindowsToPowershell,
    'Script': TextDocumentationWindowsToScript,
    'Gui': TextDocumentationWindowsToGui,
    'C#': TextDocumentationWindowsToC,
    'OSX': TextDocumentationMacOs,
    'Homebrew': TextDocumentationMacOsToHomebrew,
    'IP Monitor': TextDocumentationMacOsToIpMonitor,
    'IOS RealDNS': TextDocumentationMacOsToIosRealDns,
    'OS': TextDocumentationAndroidToOs,
    'EC2': TextDocumentationLinuxToEc2,
    'Cron': TextDocumentationLinuxToCron,
    'Bsd Cron': TextDocumentationLinuxToBsdCron,
    'Netcat Cron': TextDocumentationLinuxToNetcatCron,
    'GUI': TextDocumentationLinuxToGui,
    'Raspbmc': TextDocumentationRaspbmc,
    'Pi': TextDocumentationRaspberryPi,
    'DotNet': TextDocumentationOtherToDotNet,
    'Mono': TextDocumentationOtherToMono,
}

const currentViewComponent = computed(() => {
    return componentsMap[selectedSubtype.value];
});

const componentsMapCategorie = {
    'Allied Telesis': TextDocumentationRouteurToAlliedTelesis,
    'Ddwrt': TextDocumentationRouteurToDdwrt,
    'Edge Router': TextDocumentationRouteurToEdgeRouter,
    'Freenas': TextDocumentationRouteurToFreenas,
    'Fritzbox': TextDocumentationRouteurToFritzbox,
    'Mikrotik': TextDocumentationRouteurToMikrotik,
    'Hardware': TextDocumentationRouteurToHardware,
    'Openwrt': TextDocumentationRouteurToOpenwrt,
    'Pfsense': TextDocumentationRouteurToPfsense,
    'Synology': TextDocumentationRouteurToSynology,
    'Smoothwall': TextDocumentationRouteurToSmoothwall,
    'Technicolor': TextDocumentationRouteurToTechnicolor,
    'Tomoto USB': TextDocumentationRouteurToTomotoUsb,
    'Zteh108n': TextDocumentationRouteurToZteh108n,
    'DNS Omatic': TextDocumentationStandardsToDNSOmatic,
    'DynDNS': TextDocumentationStandardsToDynDNS,
    'GnuDIP': TextDocumentationStandardsToGnuDIP,
    'Inadyn': TextDocumentationStandardsToInadyn,
}

const currentViewComponentCategorie = computed(() => {
    return componentsMapCategorie[selectedType.value];
});
</script> -->

    <template>
    <div class="mb-5 mt-5">
        <div class="join mb-10 flex flex-col md:flex-row">
        <select class="select select-bordered join-item" v-model="selectedCategory" @change="onCategoryChange">
            <option disabled value="">Choose to categorie</option>
            <option v-for="(options, category) in categories" :key="category">{{ category }}</option>
        </select>
        <select v-if="typeOptions.length > 0" class="select select-bordered join-item" v-model="selectedType" @change="onTypeChange">
            <option disabled value="">Type</option>
            <option v-for="type in typeOptions" :key="type">{{ type }}</option>
        </select>
        <select v-if="subtypeOptions.length > 0" class="select select-bordered join-item" v-model="selectedSubtype">
            <option disabled value="">Sub type</option>
            <option v-for="subtype in subtypeOptions" :key="subtype">{{ subtype }}</option>
        </select>
        </div>
        <div v-if="selectedSubtype" class="mb-5">
        <component :is="currentViewComponent" v-if="currentViewComponent"/>
        </div>
        <div v-if="selectedType && !selectedSubtype" class="mb-5">
        <component :is="currentViewComponentCategorie" v-if="currentViewComponentCategorie"/>
        </div>    
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import config from '@js/configDocumentation.js';

    const selectedCategory = ref('');
    const selectedType = ref('');
    const selectedSubtype = ref('');

    const categories = config.categories;
    const typeOptions = computed(() => categories[selectedCategory.value] || []);
    const subtypeOptions = computed(() => config.types[selectedType.value] || []);

    const onCategoryChange = () => {
        selectedType.value = '';
        selectedSubtype.value = '';
    }

    const onTypeChange = () => {
        selectedSubtype.value = '';
    }

    const currentViewComponent = computed(() => config.components[selectedSubtype.value]);
    const currentViewComponentCategorie = computed(() => config.components[selectedType.value]);
</script>
