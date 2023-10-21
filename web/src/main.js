// Vue Main Component
import App from './App.vue'

// Composant Vue
import { createApp } from 'vue'

// CSS
import './app.css'

// CSS Personnalisé
import '@styles/scrollbar.css'
import '@styles/global.css'

// Plugins
import { RegisterPlugins } from '@/plugins'

import { RegisterMixins } from "@/mixins"

import { useImageStore } from "@store/store.js";

const app = createApp(App)

RegisterPlugins(app)

RegisterMixins(app)

// const imageStore = useImageStore();
// const savedImage = localStorage.getItem('selectedImage');
// if (savedImage) {
//   imageStore.selectImage(savedImage);
// }

app.mount('#app')