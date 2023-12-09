// Linux components
import LinuxToec2 from "@components/documentation/systems/LinuxToec2.vue";
import LinuxTocron from "@components/documentation/systems/LinuxTocron.vue";
import LinuxTobsdcron from "@components/documentation/systems/LinuxTobsdcron.vue";
import LinuxTonetcatcron from "@components/documentation/systems/LinuxTonetcatcron.vue";
import LinuxTogui from "@components/documentation/systems/LinuxTogui.vue";
// Android components
import Android from "@components/documentation/systems/Android.vue";
// Macos components
import MacOs from "@components/documentation/systems/MacOs.vue";
import MacosHomebrew from "@components/documentation/systems/MacosHomebrew.vue";
import MacosIpmonitor from "@components/documentation/systems/MacosIpmonitor.vue";
import MacosIosrealdns from "@components/documentation/systems/MacosIosrealdns.vue";
// Windows components
import WindowsToc from "@components/documentation/systems/WindowsToc.vue";
import WindowsTopowershell from "@components/documentation/systems/WindowsTopowershell.vue";
import WindowsTogui from "@components/documentation/systems/WindowsTogui.vue";
import WindowsToscript from "@components/documentation/systems/WindowsToscript.vue";
// Raspberry components
import RaspberryPi from "@components/documentation/systems/RaspberryPi.vue";
import Raspbmc from "@components/documentation/systems/Raspbmc.vue";
// Other components
import OtherTodotnet from "@components/documentation/systems/OtherTodotnet.vue";
import OtherMono from "@components/documentation/systems/OtherMono.vue";
// Routers components
import AlliedTelesis from "@components/documentation/routeur/AlliedTelesis.vue";
import Ddwrt from "@components/documentation/routeur/Ddwrt.vue";
import EdgeRouter from "@components/documentation/routeur/EdgeRouter.vue";
import Freenas from "@components/documentation/routeur/Freenas.vue";
import Fritzbox from "@components/documentation/routeur/Fritzbox.vue";
import Mikrotik from "@components/documentation/routeur/Mikrotik.vue";
import Hardware from "@components/documentation/routeur/Hardware.vue";
import Openwrt from "@components/documentation/routeur/Openwrt.vue";
import Pfsense from "@components/documentation/routeur/Pfsense.vue";
import Synology from "@components/documentation/routeur/Synology.vue";
import Smoothwall from "@components/documentation/routeur/Smoothwall.vue";
import Technicolor from "@components/documentation/routeur/Technicolor.vue";
import TomotoUsb from "@components/documentation/routeur/TomotoUsb.vue";
import Zteh108n from "@components/documentation/routeur/Zteh108n.vue";
// Standards components
import DNSOmatic from "@components/documentation/standards/DNSOmatic.vue";
import DynDNS from "@components/documentation/standards/DynDNS.vue";
import GnuDIP from "@components/documentation/standards/GnuDIP.vue";
import Inadyn from "@components/documentation/standards/Inadyn.vue";

// Export different variable
/**
 * Configuration documentation object.
 * @typedef {Object} ConfigDocumentation
 * @property {Object} categories -  categories of operating systems and routers.
 * @property {Object} types -  types of operating systems.
 * @property {Object} components -  components mapping.
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
    Powershell: WindowsTopowershell,
    Script: WindowsToscript,
    Gui: WindowsTogui,
    "C#": WindowsToc,
    OSX: MacOs,
    Homebrew: MacosHomebrew,
    "IP Monitor": MacosIpmonitor,
    "IOS RealDNS": MacosIosrealdns,
    OS: Android,
    EC2: LinuxToec2,
    Cron: LinuxTocron,
    "Bsd Cron": LinuxTobsdcron,
    "Netcat Cron": LinuxTonetcatcron,
    GUI: LinuxTogui,
    Raspbmc: Raspbmc,
    Pi: RaspberryPi,
    DotNet: OtherTodotnet,
    Mono: OtherMono,
    "Allied Telesis": AlliedTelesis,
    Ddwrt: Ddwrt,
    "Edge Router": EdgeRouter,
    Freenas: Freenas,
    Fritzbox: Fritzbox,
    Mikrotik: Mikrotik,
    Hardware: Hardware,
    Openwrt: Openwrt,
    Pfsense: Pfsense,
    Synology: Synology,
    Smoothwall: Smoothwall,
    Technicolor: Technicolor,
    "Tomoto USB": TomotoUsb,
    Zteh108n: Zteh108n,
    "DNS Omatic": DNSOmatic,
    DynDNS: DynDNS,
    GnuDIP: GnuDIP,
    Inadyn: Inadyn,
  },
};

export default configDocumentation;
