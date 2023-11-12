<template>
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
</script>