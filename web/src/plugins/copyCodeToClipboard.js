/**
 * Copies the code content within a .mockup-code element to the clipboard.
 * 
 * @param {Event} event - The event object triggered by the button click.
 * @returns {Promise<void>} - A promise that resolves when the code content is successfully copied to the clipboard.
 */

const copyCodeToClipboard = async (event) => {
  // We find the .mockup-code parent closest to the button we clicked on
  const mockup = event.target.closest(".mockup-code");
  const lines = mockup.querySelectorAll("code");
  let codeContent = "";

  lines.forEach((line) => {
    // Remove any HTML tags (such as <a>) to keep only the text
    codeContent += line.innerText + "\n";
  });

  // Use the Clipboard API to copy formatted content
  try {
    await navigator.clipboard.writeText(codeContent.trim());
  } catch (err) {
    console.error("Erreur lors de la copie :", err);
  }
};

export default copyCodeToClipboard;
