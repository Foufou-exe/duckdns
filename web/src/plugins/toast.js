import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

/**
 * Options for the toast plugin.
 * @typedef {Object} OptionsToast
 * @property {string} position - The position of the toast. Possible values: "top-left", "top-right", "bottom-left", "bottom-right".
 * @property {number} timeout - The timeout duration in milliseconds.
 * @property {boolean} closeOnClick - Whether the toast should be closed when clicked.
 * @property {boolean} pauseOnFocusLoss - Whether the toast should be paused when the window loses focus.
 * @property {boolean} pauseOnHover - Whether the toast should be paused when hovered.
 * @property {boolean} draggable - Whether the toast should be draggable.
 * @property {number} draggablePercent - The percentage of the toast's width that can be dragged.
 * @property {boolean} showCloseButtonOnHover - Whether the close button should be shown when the toast is hovered.
 * @property {boolean} hideProgressBar - Whether the progress bar should be hidden.
 * @property {string} closeButton - The type of close button. Possible values: "button", "icon".
 * @property {boolean} icon - Whether to show an icon in the toast.
 * @property {boolean} rtl - Whether the toast should be displayed in right-to-left mode.
 */


const optionsToast = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};

export { optionsToast, Toast };