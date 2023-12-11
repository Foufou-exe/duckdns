// Vue Main Component
import App from './App.vue'

// Composant Vue
import { createApp } from 'vue'

// CSS
import './app.css'

// CSS Personalized
import '@styles/scrollbar.css'
import '@styles/global.css'

// Plugins
import { RegisterPlugins } from '@/plugins'
// Mixins
import { RegisterMixins } from "@/mixins"


/**
 * The main application instance.
 * @type {import('vue').App}
 */

const app = createApp(App)

// Plugins
RegisterPlugins(app)

// Mixins
RegisterMixins(app)

// Mount the app
app.mount('#app')