<template>
<dialog id="ChoosePicture" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <h3 class="font-bold text-2xl">Choose Picture</h3>
        <div class="modal-action">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id="closeDialog">✕</button>
            </form>
        </div>
        <div class="p-3">
            <div id="imageGallery" class="flex flex-col">
                <!-- Images stockées par défaut -->
                <img src="images/connexion/duck1.png" alt="Image 1" class="gallery-image w-20 h-20 object-cover rounded-full mb-3" onclick="selectImage(this)" />
                <img src="images/connexion/duck2.png" alt="Image 2" class="gallery-image w-20 h-20 object-cover rounded-full mb-3" onclick="selectImage(this)" />
                <img src="images/connexion/duck3.png" alt="Image 3" class="gallery-image w-20 h-20 object-cover rounded-full mb-3" onclick="selectImage(this)" />
                <img src="images/connexion/duck4.png" alt="Image 3" class="gallery-image w-20 h-20 object-cover rounded-full mb-3" onclick="selectImage(this)" />
                <img src="images/connexion/duck5.png" alt="Image 3" class="gallery-image w-20 h-20 object-cover rounded-full mb-3" onclick="selectImage(this)" />
                <img src="images/connexion/duck6.png" alt="Image 3" class="gallery-image w-20 h-20 object-cover rounded-full mb-3" onclick="selectImage(this)" />
                <img src="images/connexion/duck7.png" alt="Image 3" class="gallery-image w-20 h-20 object-cover rounded-full mb-3" onclick="selectImage(this)" />
                <img src="images/connexion/duck8.png" alt="Image 3" class="gallery-image w-20 h-20 object-cover rounded-full mb-3" onclick="selectImage(this)" />
                <img src="images/connexion/duck9.png" alt="Image 3" class="gallery-image w-20 h-20 object-cover rounded-full mb-3" onclick="selectImage(this)" />
            </div>
            <button id="saveButton" class="btn btn-primary mt-3" style="display: none;">Sauvegarder</button>
        </div>
    </div>
</dialog>
</template>
<script>
export default {
  data() {
    return {
      selectedImageIndex: null,
    };
  },
  computed: {
    saveButtonVisible() {
      return this.selectedImageIndex !== null;
    },
  },
  methods: {
    selectImage(index) {
      // Désélectionner toutes les images
      var galleryImages = document.querySelectorAll('.gallery-image');
      galleryImages.forEach(function (img) {
        img.classList.remove('selected');
      });

      // Sélectionner l'image cliquée
      galleryImages[index - 1].classList.add('selected');

      // Mettre à jour l'index de l'image sélectionnée
      this.selectedImageIndex = index;
    },
    closeDialog() {
      var dialog = document.getElementById('ChoosePicture');
      if (dialog) {
        dialog.close();
      }
    },
    saveImage() {
      // Ajoutez ici la logique pour gérer le clic sur le bouton "Sauvegarder"
      if (this.selectedImageIndex !== null) {
        var selectedImageUrl = `images/connexion/duck${this.selectedImageIndex}.png`;
        alert("Image sélectionnée et sauvegardée : " + selectedImageUrl);
        this.closeDialog();
      } else {
        alert("Veuillez sélectionner une image avant de sauvegarder.");
      }
    },
  },
};
</script>
