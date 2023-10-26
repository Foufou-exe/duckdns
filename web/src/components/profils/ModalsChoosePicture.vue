


<template>
  <dialog id="ChoosePicture" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box w-11/12 max-w-5xl">
      <h3 class="font-bold text-2xl">Choose Picture :</h3>
      <div class="modal-action">
        <form method="dialog">
          <button @click="closeDialog" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
      </div>
      <div class="p-5 ">
        <div id="imageGallery" class="grid grid-cols-4 gap-5 mb-5 text-center max-sm:grid-cols-1 max-sm:justify-center">
          <!-- Images stockées par défaut -->
          <div class="flex flex-col items-center " >
            <img src="/images/connexion/duck1.png" alt="Image 1" class="max-sm:w-40 max-sm:h-40 w-20h-20 object-cover rounded-full mb-3 hover:ring hover:ring-5 hover:ring-secondary" @click="selectImage(1)" />
            <span >{{SubTitle1}}</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/connexion/duck2.png" alt="Image 2" class="max-sm:w-40 max-sm:h-40 w-20h-20 object-cover rounded-full mb-3 hover:ring hover:ring-5 hover:ring-primary" @click="selectImage(2)" />
            <span >{{SubTitle2}}</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/connexion/duck3.png" alt="Image 3" class="max-sm:w-40 max-sm:h-40 w-20h-20 object-cover rounded-full mb-3 hover:ring hover:ring-5 hover:ring-warning" @click="selectImage(3)" />
            <span >{{SubTitle3}}</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/connexion/duck4.png" alt="Image 4" class="max-sm:w-40 max-sm:h-40 w-20h-20 object-cover rounded-full mb-3 hover:ring hover:ring-5 hover:ring-error" @click="selectImage(4)" />
            <span >{{SubTitle4}}</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/connexion/duck5.png" alt="Image 5" class="max-sm:w-40 max-sm:h-40 w-20h-20 object-cover rounded-full mb-3 hover:ring hover:ring-5 hover:ring-warning" @click="selectImage(5)" />
            <span >{{SubTitle5}}</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/connexion/duck6.png" alt="Image 3" class="max-sm:w-40 max-sm:h-40 w-20h-20 object-cover rounded-full mb-3 hover:ring hover:ring-5 hover:ring-warning" @click="selectImage(6)" />
            <span >{{SubTitle6}}</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/connexion/duck7.png" alt="Image 3" class="max-sm:w-40 max-sm:h-40 w-20h-20 object-cover rounded-full mb-3 hover:ring hover:ring-5 hover:ring-secondary" @click="selectImage(7)" />
            <span >{{SubTitle7}}</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/connexion/duck8.png" alt="Image 3" class="max-sm:w-40 max-sm:h-40 w-20h-20 object-cover rounded-full mb-3 hover:ring hover:ring-5 hover:ring-info" @click="selectImage(8)" />
            <span >{{SubTitle8}}</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/connexion/duck9.png" alt="Image 3" class="max-sm:w-40 max-sm:h-40 w-20h-20 object-cover rounded-full mb-3 hover:ring hover:ring-5 hover:ring-success" @click="selectImage(9)" />
            <span >{{SubTitle9}}</span>
          </div>
        </div>
        <div class="divider"></div>
        <div class="flex items-center max-sm:flex-col">        
          <button @click="saveImage" class="btn btn-primary mr-5" :style="{ display: saveButtonVisible ? 'block' : 'none' }">Sauvegarder</button>
          <span class="max-sm:mt-2">You have select the picture : <strong> {{ NamePicture }} </strong></span>
        </div>
      </div>
    </div>
  </dialog>
</template>


<script setup>
import { ref, watch } from 'vue';
import { useImageStore } from '@store/store.js'
const NamePicture = ref('');

const SubTitle1 = 'AstroDuck'
const SubTitle2 = 'MageDuck'
const SubTitle3 = 'PirateDuck'
const SubTitle4 = 'HeroDuck'
const SubTitle5 = 'ArtistDuck'
const SubTitle6 = 'CuisinDuck'
const SubTitle7 = 'DjDuck'
const SubTitle8 = 'SkaterDuck'
const SubTitle9 = 'CalmDuck'

const imageStore = useImageStore();
const saveButtonVisible = ref(false);
let chosenImage = ref(null); // pour stocker temporairement l'image choisie

function selectImage(imageIndex) {
  chosenImage.value = `/images/connexion/duck${imageIndex}.png`;
  saveButtonVisible.value = true;

  switch(imageIndex) {
    case 1:
      NamePicture.value = SubTitle1;
      break;
    case 2:
      NamePicture.value = SubTitle2;
      break;
    case 3:
      NamePicture.value = SubTitle3;
      break;
    case 4:
      NamePicture.value = SubTitle4;
      break;  
    case 5:
      NamePicture.value = SubTitle5;
      break;
    case 6:
      NamePicture.value = SubTitle6;
      break;
    case 7:
      NamePicture.value = SubTitle7;
      break;
    case 8:
      NamePicture.value = SubTitle8;
    break;
    case 9:
      NamePicture.value = SubTitle9;
      break;
    default:
      NamePicture.value = '';
  }
}

function saveImage() {
  if (chosenImage.value) {
    imageStore.selectImage(chosenImage.value);
    closeDialog()
  }
}


function closeDialog() {
  var dialog = document.getElementById('ChoosePicture');
    if (dialog) {
      dialog.close();
  }
}
</script>
