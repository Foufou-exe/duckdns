// Linux components
import TextDocumentationLinuxToEc2 from '@components/TextDocumentationLinuxToEc2.vue'
import TextDocumentationLinuxToCron from '@components/TextDocumentationLinuxToCron.vue'
import TextDocumentationLinuxToBsdCron from '@components/TextDocumentationLinuxToBsdCron.vue'
import TextDocumentationLinuxToNetcatCron from '@components/TextDocumentationLinuxToNetcatCron.vue'
import TextDocumentationLinuxToGui from '@components/TextDocumentationLinuxToGui.vue'
// Android components
import TextDocumentationAndroidToOs from '@components/TextDocumentationAndroid.vue'
// MacOs components
import TextDocumentationMacOs from '@components/TextDocumentationMacOs.vue'
import TextDocumentationMacOsToHomebrew from '@components/TextDocumentationMacOsToHomebrew.vue'
import TextDocumentationMacOsToIpMonitor from '@components/TextDocumentationMacOsIpMonitor.vue'
import TextDocumentationMacOsToIosRealDns from '@components/TextDocumentationMacOsIosRealDns.vue'
// Windows components
import TextDocumentationWindowsToC from '@components/TextDocumentationWindowsToC.vue'
import TextDocumentationWindowsToPowershell from '@components/TextDocumentationWindowsToPowershell.vue'
import TextDocumentationWindowsToGui from '@components/TextDocumentationWindowsToGui.vue'
import TextDocumentationWindowsToScript from '@components/TextDocumentationWindowsToScript.vue'
// Raspberry components
import TextDocumentationRaspberryPi from '@components/TextDocumentationRaspberryPi.vue'
import TextDocumentationRaspbmc from '@components/TextDocumentationRaspbmc.vue'
// Other components
import TextDocumentationOtherToDotNet from '@components/TextDocumentationOtherToDotNet.vue'
import TextDocumentationOtherToMono from '@components/TextDocumentationOtherMono.vue'
// Routers components
import TextDocumentationRouteurToAlliedTelesis from '@components/TextDocumentationRouteurToAlliedTelesis.vue'
import TextDocumentationRouteurToDdwrt from '@components/TextDocumentationRouteurToDdwrt.vue'
import TextDocumentationRouteurToEdgeRouter from '@components/TextDocumentationRouteurToEdgeRouter.vue'
import TextDocumentationRouteurToFreenas from '@components/TextDocumentationRouteurToFreenas.vue'
import TextDocumentationRouteurToFritzbox from '@components/TextDocumentationRouteurToFritzbox.vue'
import TextDocumentationRouteurToMikrotik from '@components/TextDocumentationRouteurToMikrotik.vue'
import TextDocumentationRouteurToHardware from '@components/TextDocumentationRouteurToHardware.vue'
import TextDocumentationRouteurToOpenwrt from '@components/TextDocumentationRouteurToOpenwrt.vue'
import TextDocumentationRouteurToPfsense from '@components/TextDocumentationRouteurToPfsense.vue'
import TextDocumentationRouteurToSynology from '@components/TextDocumentationRouteurToSynology.vue'
import TextDocumentationRouteurToSmoothwall from '@components/TextDocumentationRouteurToSmoothwall.vue'
import TextDocumentationRouteurToTechnicolor from '@components/TextDocumentationRouteurToTechnicolor.vue'
import TextDocumentationRouteurToTomotoUsb from '@components/TextDocumentationRouteurToTomotoUsb.vue'
import TextDocumentationRouteurToZteh108n from '@components/TextDocumentationRouteurToZteh108n.vue'
// Standards components
import TextDocumentationStandardsToDNSOmatic from '@components/TextDocumentationStandardsToDNSOmatic.vue'
import TextDocumentationStandardsToDynDNS from '@components/TextDocumentationStandardsToDynDNS.vue'
import TextDocumentationStandardsToGnuDIP from '@components/TextDocumentationStandardsToGnuDIP.vue'
import TextDocumentationStandardsToInadyn from '@components/TextDocumentationStandardsToInadyn.vue'

// Export different variable
export default {
    categories: {
      'Operating Systems': ['Windows', 'Linux', 'MacOS', 'Android', 'Raspberry', 'Other'],
      'Routers': ['Allied Telesis', 'Ddwrt', 'Edge Router', 'Freenas', 'Fritzbox', 'Mikrotik', 'Hardware', 'Openwrt', 'Pfsense', 'Synology', 'Smoothwall', 'Technicolor', 'Tomoto USB', 'Zteh108n'],
      'Standards': ['DNS Omatic', 'DynDNS', 'GnuDIP', 'Inadyn'],
    },
    types: {
      'Windows': ['Powershell', 'Script', 'Gui', 'C#'],
      'Linux': ['EC2', 'Cron', 'Bsd Cron', 'Netcat Cron', 'GUI'],
      // ... Autres types ici
    },
    components: {
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
}