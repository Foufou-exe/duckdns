<template>
    <div :id="id" :name="viewName">
        <component :is="dynamicComponent" />
    </div>
</template>

<script setup>
import { shallowRef , onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps(['id', 'viewName'])
const route = useRoute()
const dynamicComponent = shallowRef(null)

onMounted(async () => {
  const viewName = route.params.viewName
  if (viewName) {
    try {
      const component = await import(`@components/news/list-news/${viewName}.vue`)
      dynamicComponent.value = component.default
    } catch (error) {
      console.error("Erreur lors du chargement du composant:", error)
      // Vous pouvez rediriger vers une page d'erreur ou afficher un message ici
    }
  }
})
</script>
  