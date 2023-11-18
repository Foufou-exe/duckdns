<template>
  <div class="p-5">
    <div class="p-5 rounded-lg">
      <div class="flex justify-between mb-1">
        <div class="text-white breadcrumbs">
          <ul class="ml-2">
            <li>
              <a class="font-semibold text-secondary">
                <font-awesome-icon icon="home" />
                <span class="ml-1">duckdns</span>
              </a>
            </li>
            <li>
              <a class="font-semibold text-secondary">
                <font-awesome-icon icon="folder" />
                <span class="ml-1">web</span>
              </a>
            </li>
            <li>
              <a class="font-semibold text-secondary">
                <font-awesome-icon icon="folder" />
                <span class="ml-1">src</span>
              </a>
            </li>
            <li>
              <a class="font-semibold text-secondary">
                <font-awesome-icon icon="folder" />
                <span class="ml-1">compenents</span>
              </a>
            </li>
            <li>
              <a class="font-semibold text-secondary">
                <font-awesome-icon icon="folder" />
                <span class="ml-1">news</span>
              </a>
            </li>
            <li>
              <router-link
                to="/admin/dashboard/list-article"
                class="font-semibold text-secondary"
              >
                <font-awesome-icon icon="folder"  />
                <span class="ml-1">list-news</span>
              </router-link>
            </li>
            <li>
              <div>
                <input
                  type="text"
                  class="input input-secondary w-full max-w-xs text-secondary"
                  value="README"
                />
              </div>
              <div class="p-3 space-x-2">
                <span class="text-current">in</span>
                <div class="badge badge-primary badge-outline font-bold">
                  main
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="space-x-3 mr-2">
          <router-link to="/admin/dashboard/list-article" class="btn btn-neutral">Cancel change</router-link>
          <button class="btn btn-success">Saving change</button>
        </div>
      </div>

      <!-- Part Card -->
      <div class="mb-5">
        <div
          class="flex justify-between px-2 py-3 border border-neutral rounded-t-lg"
        >
          <div role="tablist" class="tabs tabs-boxed p-2">
            <a role="tab" class="tab btn btn-sm font-bold" :class="{ 'tab-active': activeTab === 'edit' }" @click="activeTab = 'edit'">
              <font-awesome-icon icon="pen-to-square" size="xs" />
              Edit
            </a>
            <a role="tab" class="tab btn btn-sm font-bold" :class="{ 'tab-active': activeTab === 'preview' }" @click="activeTab = 'preview'">
              <font-awesome-icon icon="eye" size="xs" />
              Preview
            </a>
          </div>
          <div class="flex justify-end btn btn-primary">
            <font-awesome-icon icon="newspaper" />
            Article Preview
          </div>
        </div>
        <div v-if="activeTab === 'edit'" class="border border-neutral p-5">
          <div class="flex justify-between">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-secondary">Title : </span>
              </label>
              <input
                type="text"
                v-model="article.title"
                class="input input-bordered w-full max-w-xs"
              />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-secondary">Date : </span>
              </label>
              <input
                id="date"
                type="date"
                v-model="article.date"
                class="input input-bordered w-full max-w-xs"
              />
            </div>

            <div class="dropdown dropdown-end mt-5">
              <label tabindex="0" class="btn m-1 font-semibold">
                Category
                <font-awesome-icon icon="sort" size="sm" />
              </label>
              <ul
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li
                  class="form-control"
                  v-for="category in categories"
                  :key="category.name"
                >
                  <label class="label">
                    <input
                      type="checkbox"
                      :checked="article.categorie.includes(category.name)"
                      class="checkbox checkbox-accent"
                      @change="toggleCategory(category.name)"
                    />
                    <span class="label-text font-semibold"
                      >{{ category.icon }}{{ category.name }}</span
                    >
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text text-secondary">Description : </span>
            </label>
            <textarea
              v-model="article.content"
              class="textarea textarea-bordered w-full"
            ></textarea>
          </div>
        </div>
        <div v-if="activeTab === 'preview'"  class="border border-neutral p-5">
          <div>
            <div class="card border border-secondary mb-4 bg-base-100 shadow-lg">
              <div class="card-body">
                <div>
                  <h2 class="text-2xl inline-block mr-2 font-bold max-sm:text-xl">
                    {{ article.title }}
                  </h2>
                  <div class="flex flex-wrap gap-1 mt-2">
                    <div v-for="categorie in article.categorie" :key="categorie" :class="getBadgeClass(categorie)" class="badge inline-block badge-outline font-semibold badge-lg max-sm:text-xs text-sm">
                      {{ getBadgeText(categorie) }}
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





      <!-- Part Markdown -->
      <div class="flex justify-between px-2 py-3 border border-neutral rounded-t-lg">
        <div class="tabs tabs-boxed p-2">
          <a class="tab btn btn-sm font-bold" @click="activeTab2 = 'edit'" :class="{ 'tab-active': activeTab2 === 'edit' }">
            <font-awesome-icon icon="pen-to-square" size="xs" />
            Edit
          </a>
          <a class="tab btn btn-sm font-bold" @click="activeTab2 = 'preview'" :class="{ 'tab-active': activeTab2 === 'preview' }">
            <font-awesome-icon icon="eye" size="xs" />
            Preview
          </a>
        </div>
        <div class="flex justify-end space-x-2 mt-2">
          <select class="select select-bordered select-sm w-1/4 max-w-xs">
            <option disabled class="font-semibold">Indent mode</option>
            <option selected>Spaces</option>
            <option>Tabs</option>
          </select>
          <select class="select select-bordered select-sm w-1/6 max-w-xs">
            <option disabled class="font-semibold">Indent size</option>
            <option selected>2</option>
            <option>4</option>
            <option>8</option>
          </select>
          <select class="select select-bordered select-sm w-1/3 max-w-xs">
            <option disabled class="font-semibold">Line wrap mode</option>
            <option selected>No wrap</option>
            <option>Soft wrap</option>
          </select>
        </div>
      </div>
      <div class="editor-container">
        <!-- CodeMirror Editor -->
        <codemirror
          v-if="activeTab2 === 'edit'"
          v-model="markdownContent"
          :options="cmOptions"
          :extensions="extensions"
          @ready="handleReady"
          @change="handleMarkdownChange"
        />

        <!-- Markdown Preview -->
        <div v-if="activeTab2 === 'preview'" class="markdown-preview" v-html="compiledMarkdown" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, computed } from "vue";
import { useRoute } from "vue-router";
import NewsData from "@data/newsData.json";
import { formatDate } from '@js/formatDate';

import { Codemirror } from 'vue-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import { marked } from 'marked';


const route = useRoute();
const articleId = parseInt(route.params.id);
const article = ref(NewsData.find((article) => article.id === articleId));
const activeTab = ref('edit');

const categories = [
  { name: "Feature", icon: "✨" },
  { name: "Release", icon: "🎉" },
  { name: "Epic", icon: "🎈" },
  { name: "Information", icon: "🔍" },
];

// Cette fonction bascule la catégorie de l'article.
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

const activeTab2 = ref('edit');

const markdownContent = ref(''); // Markdown content
const extensions = [markdown(), oneDark]; // Markdown language extension and theme
const cmOptions = { lineNumbers: true }; // Add more CodeMirror options as needed

const compiledMarkdown = computed(() => {
  return marked(markdownContent.value); // Convert Markdown to HTML
});

// Codemirror EditorView instance ref
const view = shallowRef();

const handleReady = (payload) => {
  view.value = payload.view;
};

const handleMarkdownChange = (value) => {
  // Handle the change event
  markdownContent.value = value;
};


</script>
