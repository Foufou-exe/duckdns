<!-- <template>
  <div :id="id" :name="viewName">
    <component :is="dynamicComponent" />
    <TheButtonsNavigations />
  </div>
</template>

<script setup>
import TheButtonsNavigations from '@components/TheButtonsNavigations.vue';
import { shallowRef, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps(['id', 'viewName']);
const route = useRoute();
const router = useRouter();
const dynamicComponent = shallowRef(null);

onMounted(async () => {
  const viewName = route.params.viewName;
  if (viewName) {
    try {
      const component = await import(`@components/news/list-news/${viewName}.vue`);
      dynamicComponent.value = component.default;
    } catch (error) {
      router.push({ name: 'not-found' });
    }
  }
});
</script> -->

<template>
  <div :id="id" :name="viewName">
    <!-- MdPreview pour afficher le contenu Markdown -->
    <MdPreview v-model="markdownContent" :theme="editorTheme" style="background-color: transparent;"/>

    <!-- Vos autres composants ici... -->
    <TheButtonsNavigations />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import TheButtonsNavigations from '@components/TheButtonsNavigations.vue';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css'; // Importez les styles nécessaires

// Use Store for theme
import { useThemeStore } from '@store/store.js';
const themeStore = useThemeStore();
const editorTheme = computed(() => themeStore.isDarkMode ? 'dark' : 'light');

// Props si nécessaire
const { id, viewName } = defineProps(['id', 'viewName']);

const route = useRoute();
const router = useRouter();
const markdownContent = ref(''); // Ici on va stocker le contenu Markdown

const loadArticleContent = async (viewName) => {
  try {
    const response = await fetch(`http://localhost:3000/api/markdown/get-markdown/${viewName}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.text();
    markdownContent.value = content;
  } catch (e) {
    console.error("Erreur lors du chargement du contenu de l'article", e);
  }
};

onMounted(async () => {
  const viewName = route.params.viewName;
  if (viewName) {
    try {
      loadArticleContent(viewName);
    } catch (error) {
      console.error(error);
      router.push({ name: 'not-found' });
    }
  }
});

watch(() => route.params.viewName, async (viewName) => {
  if (viewName) {
    try {
      loadArticleContent(viewName);
    } catch (error) {
      console.error(error);
      router.push({ name: 'not-found' });
    }
  }
});

</script>
