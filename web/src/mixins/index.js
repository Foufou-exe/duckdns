import { copyCodeMixins } from './copyCodeMinxins.js';


/**
 * Registers the mixins for the app.
 * 
 * @param {object} app - The app object.
 * @returns {void}
 */

export function RegisterMixins(app) {
    app.mixin(copyCodeMixins);
}