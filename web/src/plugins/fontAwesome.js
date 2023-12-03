// Import FontAwesome icons
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add imported icons to library
library.add(fas, far, fab);
// Tell FontAwesome to watch the DOM and add SVGs when it detects icon marking
dom.watch();

/**
 * Represents a FontAwesomeIcon component.
 * @typedef {Object} FontAwesomeIcon
 * @property {string} icon - The name of the icon to display.
 * @property {string} [size] - The size of the icon.
 * @property {string} [color] - The color of the icon.
 */

export default  FontAwesomeIcon
