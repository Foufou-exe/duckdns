// Utilities
import { defineStore } from 'pinia'

// Generate RandomImage
function getRandomImage() {
  const imageCount = 9;
  const randomIndex = Math.floor(Math.random() * imageCount) + 1;
  return `images/connexion/duck${randomIndex}.png`;
}


// Export Store
const useImageStore = defineStore('image', {
  id: 'image',
  state: () => ({
    selectedImage: null,
  }),
  actions: {
    initializeImage() {
      const savedImage = localStorage.getItem('userSelectedImage');
    
      if (savedImage) {
        this.selectedImage = savedImage;
      } else {
        const randomImage = getRandomImage();
        localStorage.setItem('userSelectedImage', randomImage);
        this.selectedImage = randomImage;
      }
    },
    selectImage(imagePath) {
      this.selectedImage = imagePath;
      localStorage.setItem('userSelectedImage', imagePath);
    },
  },
  getters: {
    getSelectedImage() {
      return this.selectedImage;
    }
  }
});

const useThemeStore = defineStore('theme', {
  state: () => ({
      isDarkMode: true, // Valeur par défaut
  }),
  actions: {
      toggleTheme() {
          this.isDarkMode = !this.isDarkMode;
          const theme = this.isDarkMode ? 'dark' : 'light';
          localStorage.setItem('user-theme', theme);
          document.documentElement.setAttribute('data-theme', theme);
      },
      initializeTheme() {
          const storedTheme = localStorage.getItem('user-theme');
          this.isDarkMode = storedTheme === 'dark';
      }
  },
});

export { 
  useImageStore, 
  useThemeStore 
};