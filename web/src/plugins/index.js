/*
 *
 * Path : plugins/index.js
 *
 * Automatically included in `./src/main.js`
 *
 */

// Plugins
import router from "../router";
import FontAwesomeIcon from "./fontAwesome";
import Vue3Lottie from "./lottie";

// Toast notifications
import { Toast, optionsToast } from "./toast.js";


// Pinia
import { createPinia } from "pinia";
const pinia = createPinia();

// Vue i18n
import translate from "./vue-i18n";

export function RegisterPlugins(app) {
  app
    .use(router)
    .use(pinia)
    .use(Vue3Lottie)
    .use(Toast , optionsToast)
    // .use(translate)
    .component("font-awesome-icon", FontAwesomeIcon);
}
