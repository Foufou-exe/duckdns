// Utilities
import { defineStore } from 'pinia'

// Generate RandomImage
function getRandomImage() {
  const imageCount = 9;
  const randomIndex = Math.floor(Math.random() * imageCount) + 1;
  return `images/connexion/duck${randomIndex}.png`;
}


// Export Store
export const useImageStore = defineStore('image', {
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