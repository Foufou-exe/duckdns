// Import the main component
import { createApp } from 'vue'
// Import CSS file
import './app.css'
// Import Vue Main Component
import App from './App.vue'

// Import Icones  : "Font Awesome"
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add the imported icons to the library
library.add(fas, far, fab)
// Tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();

// Create a Vue application
createApp(App)
    // Register the component globally
    .component("font-awesome-icon", FontAwesomeIcon)
    // Mount the application
    .mount('#app')

