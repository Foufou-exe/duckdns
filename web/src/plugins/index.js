/*
 *
 * Path : plugins/index.js
 *
 * Automatically included in `./src/main.js`
 *
*/

// Plugins
import router from '../router'
import FontAwesomeIcon from './fontAwesome'
import Vue3Lottie from './lottie'

// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// Vue i18n
import translate from './vue-i18n'

import VideoBackground from 'vue-responsive-video-background-player'

export function RegisterPlugins(app) {
    app
        .use(router)
        .use(pinia)
        .use(Vue3Lottie)
        // .use(translate)
        .component('video-background', VideoBackground)
        .component('font-awesome-icon', FontAwesomeIcon)
}
