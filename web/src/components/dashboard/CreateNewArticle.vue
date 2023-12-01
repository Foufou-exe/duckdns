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
        <div>
          <button class="btn btn-success" @click="createArticle" :disabled="!isFormValid">Create Article</button>
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
                    <input type="checkbox" class="checkbox checkbox-warning" @change="toggleCategory(category.name)" />
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
          <MdEditor v-model="articleContent" :editorId="id" language="en-US" placeholder="# Write Article"  class="rounded-b-lg bg-current" />
        </div>

        <div v-if="activeTab2 === 'preview'">
          <MdPreview v-model="articleContent" :editorId="id" class="rounded-b-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dataArticles from '@data/newsData.json'
import { ref, onMounted, computed  } from "vue";
import { formatDate } from '@js/formatDate';

import { MdEditor, MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import 'md-editor-v3/lib/preview.css';


const initialArticles = dataArticles;
const article = ref(initialArticles);
const selectedArticle = ref({});


const addArticle = () => {
  article.value.push({ ...selectedArticle.value });
};


const activeTab = ref('edit');

const categories = [
  { name: "Feature", icon: "✨" },
  { name: "Release", icon: "🎉" },
  { name: "Epic", icon: "🎈" },
  { name: "Information", icon: "🔍" },
];

const toggleCategory = (categoryName) => {
  if (article.value.categorie.includes(categoryName)) {
    article.value.categorie = article.value.categorie.filter(
      (name) => name !== categoryName
    );
  } else {
    article.value.categorie.push(categoryName);
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

// Check Branch
const currentBranch = ref('dev');


// Part Editor
const activeTab2 = ref('edit');
const articleContent = ref(''); // Stocke le contenu de l'article

const articles = ref({
  id: null,
  title: '',
  date: '',
  categorie: [],
  content: '',
  viewName: ''
});

onMounted(async () => {
  try {
    const response = await fetch('../../assets/data/newsData.json');
    if (!response.ok) {
      throw new Error('Failed to load articles');
    }
    const data = await response.json();
    articles.value = data;
  } catch (error) {
    console.error('Error loading articles:', error);
  }
});
const id = 'editor'; // Assurez-vous que cet ID est unique

const addArticleToState = () => {
  const maxId = articles.value.reduce((max, article) => article.id > max ? article.id : max, 0);
  const newArticle = {
    id: maxId, // Incrémentez le plus grand ID pour obtenir un nouvel ID unique
    title: article.value.title,
    date: article.value.date,
    content: article.value.content,
    viewName: article.value.title.replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase(),
    categorie: article.value.categorie
  };

  // Ensuite, sauvegardez cette liste mise à jour dans votre fichier JSON
  saveArticlesToJson(articles.value.push(newArticle));
};

const saveArticlesToJson = async (articles) => {
  // Faire une requête API pour sauvegarder la liste des articles dans un fichier JSON sur le serveur
  try {
    const response = await fetch('/api/save-articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articles })
    });

    if (!response.ok) throw new Error('Network response was not ok');
    // Gérer la réponse ici
    alert('Article créé avec succès !');
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du fichier JSON', error);
  }
};

const saveMarkdownFile = async (article) => {
  // Convertir l'objet article en Markdown
  const markdownContent = convertArticleToMarkdown(article);

  // Faire une requête API pour sauvegarder le contenu Markdown dans un fichier sur le serveur
  try {
    const response = await fetch('/api/save-markdown', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: markdownContent, viewName: article.viewName })
    });

    if (!response.ok) throw new Error('Network response was not ok');
    // Gérer la réponse ici
    alert('Fichier Markdown créé avec succès !');
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du fichier Markdown', error);
  }
};

const isFormValid = computed(() => {
  return article.value.title && article.value.date && article.value.content && article.value.categorie.length > 0;
});

const createArticle = () => {
  if (isFormValid.value) {
    addArticleToState();
    saveMarkdownFile(articleContent);
  }
};

</script>
