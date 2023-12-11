/**
 * Format a date into a localized string representation.
 * @param {string|number|Date} date - The date to format.
 * @returns {string} The formatted date string.
 */

export const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("fr-FR", options);
};
