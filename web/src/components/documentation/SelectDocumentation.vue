
<template>
    <div class="mb-5 mt-5">
        <div class="join mb-10 flex flex-col md:flex-row">
        <select class="select select-bordered join-item" v-model="selectedCategory" @change="onCategoryChange">
            <option disabled value="">Choose to categorie</option>
            <option v-for="(options, category) in categories" :key="category">{{ category }}</option>
        </select>
        <select v-if="typeOptions.length > 0" class="select select-bordered join-item" v-model="selectedType" @change="onTypeChange">
            <option disabled value="">Type</option>
            <option v-for="type in typeOptions" :key="type">{{ type }}</option>
        </select>
        <select v-if="subtypeOptions.length > 0" class="select select-bordered join-item" v-model="selectedSubtype">
            <option disabled value="">Sub type</option>
            <option v-for="subtype in subtypeOptions" :key="subtype">{{ subtype }}</option>
        </select>
        </div>
        <div v-if="selectedSubtype" class="mb-5">
        <component :is="currentViewComponent" v-if="currentViewComponent"/>
        </div>
        <div v-if="selectedType && !selectedSubtype" class="mb-5">
        <component :is="currentViewComponentCategorie" v-if="currentViewComponentCategorie"/>
        </div>    
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import config from '@js/configDocumentation.js';

    const selectedCategory = ref('');
    const selectedType = ref('');
    const selectedSubtype = ref('');

    const categories = config.categories;
    const typeOptions = computed(() => categories[selectedCategory.value] || []);
    const subtypeOptions = computed(() => config.types[selectedType.value] || []);

    const onCategoryChange = () => {
        selectedType.value = '';
        selectedSubtype.value = '';
    }

    const onTypeChange = () => {
        selectedSubtype.value = '';
    }

    const currentViewComponent = computed(() => config.components[selectedSubtype.value]);
    const currentViewComponentCategorie = computed(() => config.components[selectedType.value]);
</script>
