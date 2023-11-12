export const copyCodeMixins = {
    methods: {
      async copyCodeToClipboard(event) {
        const mockup = event.target.closest('.mockup-code');
        const lines = mockup.querySelectorAll('code');
        let codeContent = '';
  
        lines.forEach(line => {
          codeContent += line.innerText + '\n';
        });
  
        try {
          await navigator.clipboard.writeText(codeContent.trim());
        } catch (err) {
          console.error('Erreur lors de la copie :', err);
        }
      }
    }
}
  