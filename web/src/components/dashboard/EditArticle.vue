<template>
    <div>
        <div class="">
            <div class=" breadcrumbs">
                <ul>
                    <li>
                    <router-link to="/admin/dashboard/list-article" class="font-semibold text-secondary">
                        <font-awesome-icon icon="folder" size="lg"/>
                        <span class="ml-1">list-news</span>
                    </router-link>
                    </li> 
                    <li>
                        <input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />
                    </li> 
                </ul>
            </div>
                            
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NewsData from "@data/newsData.json";

const route = useRoute();
const articleId = ref(route.params.id);
const article = ref(null);

onMounted(() => {
  article.value = NewsData.find(a => a.id === parseInt(articleId.value));
});
</script>