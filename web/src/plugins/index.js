/*
 *
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
*/

// Plugins
import router from '../router'
import FontAwesomeIcon from './fontAwesome'
import Vue3Lottie from './lottie'

// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()


export function RegisterPlugins(app) {
    app
        .use(router)
        .use(pinia)
        .use(Vue3Lottie)
        .component('font-awesome-icon', FontAwesomeIcon)
}
