<template>
  <div class="flex flex-col items-center p-5 mt-5 mb-5">
    <div class="w-full max-w-4xl">
      <div class="flex flex-col mb-5">
        <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-5">
          List of Articles
        </h1>
        <p class="mt-2 font-thin">Here you can see all the articles</p>
      </div>
      <div class="mb-4 flex justify-start space-x-3">
        <router-link
          to="/admin/dashboard/create-news-article"
          class="btn btn-success"
        >
          <font-awesome-icon icon="plus" />
          New Article
        </router-link>
        <button
          class="btn btn-error"
          v-if="selectAll"
          @click="deleteSelectedArticles"
        >
          <font-awesome-icon icon="trash" />
          Delete All
        </button>
      </div>

      <div class="w-full flex justify-center">
        <div v-if="paginatedArticles.length > 0" class="overflow-x-auto p-4">
          <table class="table-lg min-w-full">
            <thead>
              <tr>
                <th class="px-4 py-2">
                  <input
                    type="checkbox"
                    class="checkbox checkbox-secondary"
                    v-model="selectAll"
                    @change="toggleSelectAll"
                  />
                </th>
                <th class="px-4 py-2 bg-base-300 border border-neutral">
                  Title
                </th>
                <th class="px-4 py-2 bg-base-300 border border-neutral">
                  Content
                </th>
                <th class="px-4 py-2 bg-base-300 border border-neutral">
                  Categories
                </th>
                <th class="px-4 py-2 bg-base-300 border border-neutral">
                  Date
                </th>
                <th class="px-4 py-2 bg-base-300 border border-neutral">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-md" v-for="article in paginatedArticles[currentPage - 1]" :key="article.id">
                <td class="px-4 py-2">
                  <input
                    type="checkbox"
                    class="checkbox checkbox-secondary"
                    v-model="selectedArticles"
                    :value="article.id"
                    @change="checkSelected"
                  />
                </td>
                <td class="border border-neutral px-4 py-2">
                  {{ article.title }}
                </td>
                <td class="border border-neutral px-4 py-2">
                  {{ truncateText(article.content, 50) }}
                </td>
                <td class="border border-neutral px-4 py-2">
                  <div
                    v-for="categorie in article.categorie"
                    :key="categorie"
                    :class="getBadgeClass(categorie)"
                    class="badge inline-block badge-outline font-semibold badge-lg max-sm:text-xs lg:text-sm md:text-sm"
                  >
                    {{ getBadgeText(categorie) }}
                  </div>
                </td>
                <td class="border border-neutral px-4 py-2">
                  {{ article.date }}
                </td>
                <td class="border border-neutral px-4 py-2 space-x-1 space-y-2">
                  <router-link
                    :to="`/admin/dashboard/edit-article/${article.id}`"
                    class="btn btn-success"
                    v-if="isSelectedForUpdate(article.id)"
                  >
                    <font-awesome-icon icon="pen-to-square" />
                    Edit
                  </router-link>
                  <button
                    class="btn btn-error"
                    v-if="isSelectedForDelete(article.id)"
                    @click="deleteArticle(article.id)"
                  >
                    <font-awesome-icon icon="trash" />
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mt-4 mb-2 flex justify-start">
        <div class="space-x-3">
            <router-link
            to="/admin/dashboard/create-news-article"
            class="btn btn-success"
          >
            <font-awesome-icon icon="plus" />
            New Article
          </router-link>
          <button
            class="btn btn-error"
            v-if="selectAll"
            @click="deleteSelectedArticles"
          >
            <font-awesome-icon icon="trash" />
            Delete All
          </button>
        </div>
      </div>
        <div v-if="numberOfPages > 1" class="flex justify-center join">
          <button
            v-for="page in numberOfPages"
            :key="page"
            :class="{'btn-active': page === currentPage}"
            class="join-item btn"
            @click="setCurrentPage(page)"
          >
            {{ page }}
          </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import NewsData from "@data/newsData.json";

const pageSize = 25;
const articles = ref(NewsData);
const selectedArticles = ref([]);
const selectAll = ref(false);
const currentPage = ref(1);

// Calculate the number of pages
const numberOfPages = computed(() => Math.ceil(articles.value.length / pageSize));

// Observe changes in articles to reset pagination
watch(articles, () => {
  currentPage.value = 1; // Return to the first page if the list of articles changes
});

// Divide articles into pages
const paginatedArticles = computed(() => {
  const pages = [];
  for (let i = 0; i < numberOfPages.value; i++) {
    pages.push(articles.value.slice(i * pageSize, (i + 1) * pageSize));
  }
  return pages;
});

// Set the current page
const setCurrentPage = (page) => {
  currentPage.value = page;
  window.scrollTo(0, 0); // Go to top of page
};

const truncateText = (text, length) => {
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length) + "...";
};

const toggleSelectAll = () => {
  selectedArticles.value = selectAll.value
    ? articles.value.map((a) => a.id)
    : [];
};

const checkSelected = () => {
  selectAll.value = articles.value.every((article) =>
    selectedArticles.value.includes(article.id)
  );
};

const isSelectedForUpdate = (id) =>
  selectedArticles.value.length === 1 && selectedArticles.value.includes(id);

const isSelectedForDelete = (id) =>
  !selectAll.value && selectedArticles.value.includes(id);

const getBadgeClass = (categorie) => {
  const classes = {
    Feature: "badge-warning",
    Release: "badge-success",
    Epic: "badge-error",
    Information: "badge-primary",
  };
  return `badge ${classes[categorie] || "badge-secondary"}`;
};

const getBadgeText = (categorie) => {
  const texts = {
    Feature: "✨Feature",
    Release: "🎉Release",
    Epic: "🎈Epic",
    Information: "🔍Information",
  };
  return texts[categorie] || categorie;
};


const deleteArticle = (id) => {
  // Create a new table by filtering the item to be deleted
  articles.value = articles.value.filter((article) => article.id !== id);
};

const deleteSelectedArticles = () => {
  // Handle bulk delete
};
</script>
