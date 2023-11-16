<template>
  <div>
    <div class="flex">
      <h1 class="text-3xl font-bold">Liste des articles</h1>
    </div>
    <div class="flex">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2"></th>
            <th class="px-4 py-2">Titre</th>
            <th class="px-4 py-2">Description</th>
            <th class="px-4 py-2">Catégorie</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(articles, index) in articles" :key="index">
            <td class="border px-4 py-2">
              <label>
                <input
                  :id="'categorie' + index"
                  :name="'categorie' + index"
                  type="checkbox"
                  class="checkbox"
                  @click="toggleSelection(articles)"
                />
              </label>
            </td>
            <td class="border px-4 py-2">
              <div class="flex">
                <p>{{ articles.title }}</p>
              </div>
            </td>
            <td class="border px-4 py-2">
              <div class="flex">
                <p>{{ articles.content }}</p>
              </div>
            </td>
            <td class="border px-4 py-2">
              <div class="flex">
                <p>{{ articles.categorie.join(', ') }}</p>
              </div>
            </td>
            <td class="border px-4 py-2">
              <div class="flex">
                <p>{{ articles.date }}</p>
              </div>
            </td>
            <td class="border px-4 py-2">
                <div class="flex">
                    <button
                    v-if="articles.selected"
                    @click="editArticle(articles)"
                    class="btn btn-edit"
                    >
                    Edit
                    </button>
                    <button
                    v-if="articles.selected"
                    @click="deleteArticle(articles)"
                    class="btn btn-delete"
                    >
                    Delete
                    </button>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script setup>
import NewsData from '@data/newsData.json'
const articles = NewsData

function editArticle(articles) {
  // Ajoutez ici la logique pour l'édition de l'article
  console.log("Édition de l'article :", articles.title);
}

function deleteArticle(articles) {
  // Ajoutez ici la logique pour la suppression de l'article
  console.log("Suppression de l'article :", articles.title);
}
</script>