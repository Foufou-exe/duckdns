// Vue Main Component
import App from './App.vue'

// Composant Vue
import { createApp } from 'vue'

// CSS
import './app.css'

// CSS Personnalisé
import '@styles/scrollbar.css'

// Plugins
import { RegisterPlugins } from '@/plugins'

import { RegisterMixins } from "@/mixins";

const app = createApp(App)

RegisterPlugins(app)

RegisterMixins(app)

app.mount('#app')