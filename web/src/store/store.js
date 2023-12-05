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

const useLoginStore = defineStore('login', {
  state: () => ({
    isLogin: false,
  }),
  actions: {
    // Initializes the connection state when the application starts up
    initializeLogin() {
      const storedLogin = localStorage.getItem('user-login');
      this.isLogin = storedLogin === 'false';
    },

    // Called after successful authentication or on disconnection
    setLoginState(isLogin) {
      this.isLogin = isLogin;
      localStorage.setItem('user-login', isLogin ? 'true' : 'false');
    }
  }
});


const useUserStore = defineStore('user', {
  state: () => ({
    username: null,
  }),
  actions: {
    setUser(username) {
      this.username = username;
      localStorage.setItem('username', this.username);
    },
    dropUser() {
      this.username = null;
      localStorage.removeItem('username');
    },
  },
});

export { 
  useImageStore, 
  useThemeStore,
  useLoginStore,
  useUserStore
};