// Import the main component
import { createApp } from 'vue'
// Import CSS file
import './app.css'
// Import Vue Main Component
import App from './App.vue'
// Import Vue Router
import router from './router' 


// Import Icones  : "Font Awesome"
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Import Lottie
import Vue3Lottie from 'vue3-lottie'

// Add the imported icons to the library
library.add(fas, far, fab)
// Tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();

// Create a Vue application
createApp(App)
    // Register the router instance 
    .use(router)
    // Register the lottie component globally
    .use(Vue3Lottie)
    // Register the component globally
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

