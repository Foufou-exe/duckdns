// Linux components
import TheLinuxToEc2 from "@components/documentation/systems/TheLinuxToEc2.vue";
import TheLinuxToCron from "@components/documentation/systems/TheLinuxToCron.vue";
import TheLinuxToBsdCron from "@components/documentation/systems/TheLinuxToBsdCron.vue";
import TheLinuxToNetcatCron from "@components/documentation/systems/TheLinuxToNetcatCron.vue";
import TheLinuxToGui from "@components/documentation/systems/TheLinuxToGui.vue";
// Android components
import TheAndroidToOs from "@components/documentation/systems/TheAndroid.vue";
// MacOs components
import TheMacOs from "@components/documentation/systems/TheMacOs.vue";
import TheMacOsToHomebrew from "@components/documentation/systems/TheMacOsToHomebrew.vue";
import TheMacOsToIpMonitor from "@components/documentation/systems/TheMacOsIpMonitor.vue";
import TheMacOsToIosRealDns from "@components/documentation/systems/TheMacOsIosRealDns.vue";
// Windows components
import TheWindowsToC from "@components/documentation/systems/TheWindowsToC.vue";
import TheWindowsToPowershell from "@components/documentation/systems/TheWindowsToPowershell.vue";
import TheWindowsToGui from "@components/documentation/systems/TheWindowsToGui.vue";
import TheWindowsToScript from "@components/documentation/systems/TheWindowsToScript.vue";
// Raspberry components
import TheRaspberryPi from "@components/documentation/systems/TheRaspberryPi.vue";
import TheRaspbmc from "@components/documentation/systems/TheRaspbmc.vue";
// Other components
import TheOtherToDotNet from "@components/documentation/systems/TheOtherToDotNet.vue";
import TheOtherToMono from "@components/documentation/systems/TheOtherMono.vue";
// Routers components
import TheRouteurToAlliedTelesis from "@components/documentation/routeur/TheRouteurToAlliedTelesis.vue";
import TheRouteurToDdwrt from "@components/documentation/routeur/TheRouteurToDdwrt.vue";
import TheRouteurToEdgeRouter from "@components/documentation/routeur/TheRouteurToEdgeRouter.vue";
import TheRouteurToFreenas from "@components/documentation/routeur/TheRouteurToFreenas.vue";
import TheRouteurToFritzbox from "@components/documentation/routeur/TheRouteurToFritzbox.vue";
import TheRouteurToMikrotik from "@components/documentation/routeur/TheRouteurToMikrotik.vue";
import TheRouteurToHardware from "@components/documentation/routeur/TheRouteurToHardware.vue";
import TheRouteurToOpenwrt from "@components/documentation/routeur/TheRouteurToOpenwrt.vue";
import TheRouteurToPfsense from "@components/documentation/routeur/TheRouteurToPfsense.vue";
import TheRouteurToSynology from "@components/documentation/routeur/TheRouteurToSynology.vue";
import TheRouteurToSmoothwall from "@components/documentation/routeur/TheRouteurToSmoothwall.vue";
import TheRouteurToTechnicolor from "@components/documentation/routeur/TheRouteurToTechnicolor.vue";
import TheRouteurToTomotoUsb from "@components/documentation/routeur/TheRouteurToTomotoUsb.vue";
import TheRouteurToZteh108n from "@components/documentation/routeur/TheRouteurToZteh108n.vue";
// Standards components
import TheStandardsToDNSOmatic from "@components/documentation/standards/TheStandardsToDNSOmatic.vue";
import TheStandardsToDynDNS from "@components/documentation/standards/TheStandardsToDynDNS.vue";
import TheStandardsToGnuDIP from "@components/documentation/standards/TheStandardsToGnuDIP.vue";
import TheStandardsToInadyn from "@components/documentation/standards/TheStandardsToInadyn.vue";

// Export different variable
/**
 * Configuration documentation object.
 * @typedef {Object} ConfigDocumentation
 * @property {Object} categories - The categories of operating systems and routers.
 * @property {Object} types - The types of operating systems.
 * @property {Object} components - The components mapping.
 */

/**
 * Configuration documentation.
 * @type {ConfigDocumentation}
 */

const configDocumentation = {
  categories: {
    "Operating Systems": [
      "Windows",
      "Linux",
      "MacOS",
      "Android",
      "Raspberry",
      "Other",
    ],
    Routers: [
      "Allied Telesis",
      "Ddwrt",
      "Edge Router",
      "Freenas",
      "Fritzbox",
      "Mikrotik",
      "Hardware",
      "Openwrt",
      "Pfsense",
      "Synology",
      "Smoothwall",
      "Technicolor",
      "Tomoto USB",
      "Zteh108n",
    ],
    Standards: ["DNS Omatic", "DynDNS", "GnuDIP", "Inadyn"],
  },
  types: {
    Windows: ["Powershell", "Script", "Gui", "C#"],
    Linux: ["EC2", "Cron", "Bsd Cron", "Netcat Cron", "GUI"],
    MacOS: ["Homebrew", "IP Monitor", "IOS RealDNS", "OS"],
    Android: ["OS"],
    Raspberry: ["Raspbmc", "Pi"],
    Other: ["DotNet", "Mono"],
  },
  components: {
    Powershell: TheWindowsToPowershell,
    Script: TheWindowsToScript,
    Gui: TheWindowsToGui,
    "C#": TheWindowsToC,
    OSX: TheMacOs,
    Homebrew: TheMacOsToHomebrew,
    "IP Monitor": TheMacOsToIpMonitor,
    "IOS RealDNS": TheMacOsToIosRealDns,
    OS: TheAndroidToOs,
    EC2: TheLinuxToEc2,
    Cron: TheLinuxToCron,
    "Bsd Cron": TheLinuxToBsdCron,
    "Netcat Cron": TheLinuxToNetcatCron,
    GUI: TheLinuxToGui,
    Raspbmc: TheRaspbmc,
    Pi: TheRaspberryPi,
    DotNet: TheOtherToDotNet,
    Mono: TheOtherToMono,
    "Allied Telesis": TheRouteurToAlliedTelesis,
    Ddwrt: TheRouteurToDdwrt,
    "Edge Router": TheRouteurToEdgeRouter,
    Freenas: TheRouteurToFreenas,
    Fritzbox: TheRouteurToFritzbox,
    Mikrotik: TheRouteurToMikrotik,
    Hardware: TheRouteurToHardware,
    Openwrt: TheRouteurToOpenwrt,
    Pfsense: TheRouteurToPfsense,
    Synology: TheRouteurToSynology,
    Smoothwall: TheRouteurToSmoothwall,
    Technicolor: TheRouteurToTechnicolor,
    "Tomoto USB": TheRouteurToTomotoUsb,
    Zteh108n: TheRouteurToZteh108n,
    "DNS Omatic": TheStandardsToDNSOmatic,
    DynDNS: TheStandardsToDynDNS,
    GnuDIP: TheStandardsToGnuDIP,
    Inadyn: TheStandardsToInadyn,
  },
};

export default configDocumentation;
