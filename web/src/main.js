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

const app = createApp(App)

RegisterPlugins(app)

app.mount('#app')