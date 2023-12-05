<template>
  <div class="p-5">
    <div class="p-5">
      <div class="flex justify-between mb-1">
        <div class="text-black breadcrumbs">
          <ul class="ml-2">
            <li>
              <a class="font-semibold text-base-content">
                <font-awesome-icon icon="home" />
                <span class="ml-1">duckdns</span>
              </a>
            </li>
            <li>
              <a class="font-semibold text-base-content">
                <font-awesome-icon icon="folder" />
                <span class="ml-1">web</span>
              </a>
            </li>
            <li>
              <a class="font-semibold text-base-content">
                <font-awesome-icon icon="folder" />
                <span class="ml-1">src</span>
              </a>
            </li>
            <li>
              <a class="font-semibold text-base-content">
                <font-awesome-icon icon="folder" />
                <span class="ml-1">compenents</span>
              </a>
            </li>
            <li>
              <a class="font-semibold text-base-content">
                <font-awesome-icon icon="folder" />
                <span class="ml-1">news</span>
              </a>
            </li>
            <li>
              <router-link to="/admin/dashboard/list-article" class="font-semibold   text-base-content">
                <font-awesome-icon icon="folder" />
                <span class="ml-1">list-news</span>
              </router-link>
            </li>
            <li>
              <div>
                <input type="text" class="input input-bordered w-full max-w-xs text-base-content font-bold"
                  v-model="article.viewName" />
              </div>
              <span class="  text-base-content ml-1 font-semibold">.md</span>
              <div class="p-2 space-x-2">
                <span class="font-medium text-base-content">in</span>
                <div class="badge badge-warning badge-outline font-bold">
                  {{ currentBranch }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="space-x-3">
          <router-link to="/admin/dashboard" class="btn btn-base">
            <font-awesome-icon icon="home" />
            Home
          </router-link>
          <button @click="this.$router.go(-1)"  class="btn btn-neutral">Cancel</button>
          <button :disabled="!hasChanges" @click="saveArticle" class="btn btn-success">Save Article</button>
        </div>
      </div>

      <!-- Part Card -->
      <div class="mb-5">
        <div class="flex justify-between px-2 py-3 border border-neutral rounded-t-lg">
          <div role="tablist" class="tabs tabs-boxed p-2">
            <a role="tab" class="tab btn btn-sm font-bold" :class="{ 'tab-active': activeTab === 'edit' }"
              @click="activeTab = 'edit'">
              <font-awesome-icon icon="pen-to-square" size="xs" />
              Edit
            </a>
            <a role="tab" class="tab btn btn-sm font-bold" :class="{ 'tab-active': activeTab === 'preview' }"
              @click="activeTab = 'preview'">
              <font-awesome-icon icon="eye" size="xs" />
              Preview
            </a>
          </div>
          <div class="flex justify-end btn btn-warning">
            <font-awesome-icon icon="newspaper" />
            Article Preview
          </div>
        </div>
        <div v-if="activeTab === 'edit'" class="border border-neutral p-5">
          <div class="flex justify-between">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text font-medium">Title : </span>
              </label>
              <input type="text" v-model="article.title" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text font-medium">Date : </span>
              </label>
              <input id="date" type="date" v-model="article.date" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="dropdown dropdown-end mt-5">
              <label tabindex="0" class="btn m-1 font-semibold">
                Category
                <font-awesome-icon icon="sort" size="sm" />
              </label>
              <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li class="form-control" v-for="category in categories" :key="category.name">
                  <label class="label">
                    <input type="checkbox" 
                          class="checkbox checkbox-warning" 
                          :checked="article.categorie.includes(category.name)"
                          @change="toggleCategory(category.name)" />
                    <span class="label-text font-semibold">{{ category.icon }}{{ category.name }}</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-medium">Description : </span>
            </label>
            <textarea v-model="article.content" class="textarea textarea-bordered w-full "></textarea>
          </div>
        </div>

        <!-- Part Preview -->
        <div v-if="activeTab === 'preview'" class="border border-neutral p-5">
          <div>
            <div class="card border mb-4 bg-base-100 shadow-lg">
              <div class="card-body">
                <div>
                  <h2 class="text-2xl inline-block mr-2 font-bold max-sm:text-xl">
                    {{ article.title }}
                  </h2>
                  <div class="flex flex-wrap gap-1 mt-2">
                    <div v-for="categoryName in article.categorie" :key="categoryName" :class="getBadgeClass(categoryName)" 
                      class="badge inline-block badge-outline font-semibold badge-lg max-sm:text-xs text-sm">
                      {{ getBadgeText(categoryName) }}
                    </div>
                  </div>
                  <p class="text-gray-500 mt-2 mb-5">{{ article.content }}</p>
                  <span class="text-gray-500">{{ formatDate(article.date) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Part Editor -->
      <div class="flex justify-between px-2 py-3 border border-neutral rounded-t-lg">
        <div role="tablist" class="tabs tabs-boxed p-3">
          <a role="tab" class="tab btn btn-sm font-bold" :class="{ 'tab-active': activeTab2 === 'edit' }"
            @click="activeTab2 = 'edit'">
            <font-awesome-icon icon="pen-to-square" size="xs" />
            Edit
          </a>
          <a role="tab" class="tab btn btn-sm font-bold" :class="{ 'tab-active': activeTab2 === 'preview' }"
            @click="activeTab2 = 'preview'">
            <font-awesome-icon icon="eye" size="xs" />
            Preview
          </a>
        </div>
        <div class="flex justify-end space-x-2 mt-2">
          <div class="btn btn-warning">
            <font-awesome-icon icon="newspaper" />
            Article Content
          </div>
        </div>
      </div>
      <div class="border border-neutral rounded-b-lg">
        <div v-if="activeTab2 === 'edit'">
          <MdEditor v-model="articleContent" :editorId="id" language="en-US" placeholder="# Write Article"  class="rounded-b-lg bg-current" :theme="editorTheme"/>
        </div>

        <div v-if="activeTab2 === 'preview'">
          <MdPreview v-model="articleContent" :editorId="id" class="rounded-b-lg" :theme="editorTheme" style="background-color: transparent;"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, shallowRef } from "vue";
import { useRoute } from "vue-router";

// Data
import NewsData from "@data/newsData.json";
// Format Date
import { formatDate } from '@js/formatDate';

// Markdown Editor
import { MdEditor, MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import 'md-editor-v3/lib/preview.css';
// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Use Store for theme
import { useThemeStore } from '@store/store.js';
import { has } from "markdown-it/lib/common/utils";
const themeStore = useThemeStore();
const editorTheme = computed(() => themeStore.isDarkMode ? 'dark' : 'light');

// Use route for get id
const route = useRoute();

// Part Card
const articleId = parseInt(route.params.id);
const article = ref(NewsData.find((article) => article.id === articleId));
const activeTab = ref('edit');

// Part Editor
const categories = [
  { name: "Feature", icon: "✨" },
  { name: "Release", icon: "🎉" },
  { name: "Epic", icon: "🎈" },
  { name: "Information", icon: "🔍" },
];

// This function toggles the item category.
const toggleCategory = (categoryName) => {
  if (!article.value.categorie) {
    article.value.categorie = [];
  }
  const index = article.value.categorie.indexOf(categoryName);
  if (index === -1) {
    article.value.categorie.push(categoryName);
  } else {
    article.value.categorie.splice(index, 1);
  }
};


const getBadgeClass = (categorie) => {
  const classes = {
    'Feature': 'badge-warning',
    'Release': 'badge-success',
    'Epic': 'badge-error',
    'Information': 'badge-primary'
  }
  return `badge ${classes[categorie] || 'badge-secondary'}`
};

const getBadgeText = (categorie) => {
  const texts = {
    'Feature': '✨Feature',
    'Release': '🎉Release',
    'Epic': '🎈Epic',
    'Information': '🔍Information'
  }
  return texts[categorie] || categorie
};

// Part Editor
const activeTab2 = ref('edit');
const id = ref('editor');
const articleContent = ref('');
const currentBranch = ref('dev');

// Utilisez shallowRef pour éviter la réactivité sur les objets imbriqués.
const originalArticle = shallowRef({});
const originalContent = shallowRef('');

// Lorsque le composant est monté, chargez les données et définissez les valeurs initiales.
onMounted(async () => {
  const articleData = NewsData.find(article => article.id === parseInt(route.params.id));
  if (articleData) {
    article.value = { ...articleData };
    originalArticle.value = JSON.parse(JSON.stringify(articleData)); // Copie profonde
    await loadArticleContent(article.value.viewName); // Assurez-vous que c'est terminé avant de continuer.
    originalContent.value = articleContent.value; // Après le chargement du contenu
  }
});

// Requete API
const loadArticleContent = async (viewName) => {
  try {
    const response = await fetch(`http://localhost:3000/api/markdown/get-markdown/${viewName}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.text();
    articleContent.value = content;
    originalContent.value = articleContent.value;
  } catch (e) {
    console.error("Erreur lors du chargement du contenu de l'article", e);
  }
};

// Look for changes in the article content and save them.
watch(() => article.value.viewName, (newViewName) => {
  if (newViewName) {
    loadArticleContent(newViewName);
  }
});


const hasChanges = computed(() => {
  const currentArticle = { ...article.value, content: articleContent.value };
  const initialArticle = { ...originalArticle.value, content: originalContent.value };
  return JSON.stringify(currentArticle) !== JSON.stringify(initialArticle);
});

const editArticleJson = async (articleData) => {
  try {
    console.log(articleData);
    const response = await fetch(`http://localhost:3000/api/article/edit-article-content/${articleData.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(articleData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("JSON modifié avec succès");
  } catch (e) {
    console.error("Erreur lors de l'édition du JSON de l'article", e);
  }
};

const editArticleContent = async (viewName, content) => {
  try {
    const response = await fetch(`http://localhost:3000/api/markdown/edit-markdown/${viewName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        viewName: viewName,
        content: content
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Markdown modifié avec succès");
  } catch (e) {
    console.error("Erreur lors de l'édition du contenu Markdown de l'article", e);
  }
};

const saveArticle = async () => {

  if (hasChanges.value) {
    // Vérifier s'il y a eu des modifications dans l'objet article
    if (JSON.stringify(article.value) !== JSON.stringify(originalArticle.value)) {
      // Appel de la fonction pour sauvegarder les modifications dans le JSON
      await editArticleJson(article.value);
    }

    // Vérifier s'il y a eu des modifications dans le contenu de l'article
    if (articleContent.value !== originalContent.value) {
      // Appel de la fonction pour sauvegarder les modifications dans le Markdown
      await editArticleContent(article.value.viewName, articleContent.value);
    }
  }

  // Indiquer à l'utilisateur que la sauvegarde a été effectuée
  toast.success("Article et/ou contenu édité(s) avec succès");
};




</script>

