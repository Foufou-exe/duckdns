const copyCodeToClipboard = async (event) => {
    // On trouve le parent .mockup-code le plus proche du bouton sur lequel on a cliqué
    const mockup = event.target.closest('.mockup-code');
    const lines = mockup.querySelectorAll('code');
    let codeContent = '';

    lines.forEach(line => {
        // On retire les éventuelles balises HTML (comme les <a>) pour ne garder que le texte
        codeContent += line.innerText + '\n';
    });

    // Utilisation de la Clipboard API pour copier le contenu formaté
    try {
        await navigator.clipboard.writeText(codeContent.trim());
    } catch (err) {
        console.error('Erreur lors de la copie :', err);
    }
};

export default copyCodeToClipboard;