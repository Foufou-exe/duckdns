<template>
    <div class="flex flex-col items-center mt-5">
        <div class="w-full max-w-4xl p-5">
            <div class="flex flex-col rounded mb-10">
                <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-transparent">
                    User settings ⚙️
                </h1>
            </div>
            <div class="rounded-lg shadow-2xl flex flex-col md:flex-row">
                <!-- Left column for the image and user handle -->
                <img class="md:w-1/3 bg-cover bg-center rounded-l-lg"
                    :style="{ backgroundImage: 'url(' + selectedImage + ')' }" />
                <!-- Right column for user information -->
                <div class="md:w-2/3 p-10">
                    <div class="flex items-center">
                        <h1 class="text-2xl font-bold text-white">Information</h1>
                    </div>
                    <div class="mt-4">
                        <div class="form-control">
                            <div class="label">
                                <span class="label-text">Username :</span>
                            </div>
                            <input type="text" v-model="newUsername" :placeholder="username"
                                class="input input-bordered w-full max-w-xs" />
                        </div>
                        <button @click="editUsername" class="btn btn-warning mr-5">
                            <font-awesome-icon icon="edit" />
                            Edit
                        </button>
                        <label for="reset" class="btn btn-primary mt-5">
                            <font-awesome-icon icon="rotate-right" />
                            Reset password
                        </label>
                        <input type="checkbox" id="reset" class="modal-toggle" />
                        <div class="modal" role="dialog">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Reset Password</h3>
                                <div class="form-control">
                                    <label for="newPassword" class="label">
                                        <span class="label-text">New password:</span>
                                    </label>
                                    <input id="newPassword" type="password" v-model="newPassword"
                                        class="input input-bordered" />
                                </div>
                                <div class="form-control mt-4">
                                    <label for="confirmPassword" class="label">
                                        <span class="label-text">Retype new password:</span>
                                    </label>
                                    <input id="confirmPassword" type="password" v-model="confirmPassword"
                                        class="input input-bordered" />
                                </div>
                                <div class="modal-action">
                                    <button class="btn btn-success" :disabled="!passwordsMatch" @click="resetPassword">
                                        <font-awesome-icon icon="check" />
                                        Reset
                                    </button>
                                    <label for="reset" class="btn">Cancel</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
// Store pinia
import { useImageStore } from "@store/store.js";

// Plugin 
import { useToast } from 'vue-toastification';

const toast = useToast();

const imageStore = useImageStore();
const selectedImage = computed(() => imageStore.getSelectedImage);
const newPassword = ref('');
const confirmPassword = ref('');

// Computed property to check if passwords match
const passwordsMatch = computed(() => newPassword.value && newPassword.value === confirmPassword.value);

// Function to reset password
const resetPassword = async () => {
    if (passwordsMatch.value) {
        try {
            const response = await fetch('http://localhost:3000/api/user/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username.value, // You need to get the username from your state or props
                    newPassword: newPassword.value,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.text(); // Utilisez .text() au lieu de .json() pour lire le texte brut de la réponse
            if (result === 'Incorrect username') {
                throw new Error('Incorrect username');
            }
            else {
                // Clear the inputs and close the modal
                newPassword.value = '';
                confirmPassword.value = '';
                document.getElementById('reset').checked = false;
                // Notify the user
                return toast.success('Password reset successfully');
            }
        } catch (error) {
            console.error('Failed to reset password', error);
        }
    }
};

const username = ref(localStorage.getItem('username') || ''); // Existing username
const newUsername = ref(''); // New username entered by the user

// Call this function when the "Edit" button is clicked
const editUsername = async () => {
    if (newUsername.value.trim() && newUsername.value !== username.value) {
        try {
            const response = await fetch('http://localhost:3000/api/user/edit-username', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    oldUsername: username.value,
                    newUsername: newUsername.value,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            // Handle the response from your API
            console.log(result);
            // Update the username in local storage and state
            localStorage.setItem('username', newUsername.value);
            username.value = newUsername.value;
            newUsername.value = ''; // Clear the input
            // Notify the user
            alert('Username updated successfully');
        } catch (error) {
            console.error('Failed to update username', error);
        }
    }
};

</script>