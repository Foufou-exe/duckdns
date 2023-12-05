<template>
    <div class="flex flex-col items-center">
        <div class="w-full max-w-4xl p-5">
            <div class="flex flex-col rounded p-3 mb-5 ">
                <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center bg-transparent">
                    Welcome <strong class="text-warning">{{ username }}</strong>✨
                </h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div class="md:col-span-4 p-5 bg-neutral rounded-lg shadow-2xl">
                    <h2 class="text-3xl font-bold mb-3 max-sm:text-2xl text-white">
                        About
                    </h2>
                    <div class="text-slate-200">
                        <p class="text-normal font-thin">This is a dashboard for the administration of the blog.</p>
                    </div>
                </div>
                <div class="md:col-span-2 p-5 bg-primary rounded-lg shadow-2xl">
                    <h2 class="text-3xl font-bold text-white mb-3 max-sm:text-2xl">
                        Articles
                    </h2>
                    <div class="text-white flex justify-end">
                        <p class="text-4xl font-semibold">{{ CountArticle }}</p>
                    </div>
                </div>
                <div class="md:col-span-2 p-5 bg-success rounded-lg shadow-2xl">
                    <h2 class="text-3xl font-bold text-white mb-3 max-sm:text-2xl">
                        Users
                    </h2>
                    <div class="text-white flex justify-end">
                        <p class="text-4xl font-semibold">{{ resultCountUsers }}</p>
                    </div>
                </div>
                <div class="md:col-span-2 p-5 bg-warning rounded-lg shadow-2xl">
                    <h2 class="text-3xl font-bold text-white mb-3 max-sm:text-2xl">
                        The last 5 articles
                    </h2>
                    <div class="overflow-x-auto">
                        <table class="table">
                            <!-- head -->
                            <thead class="text-white">
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody class="text-white">
                                <tr v-for="(article, index) in sortedArticles" :key="article.id">
                                    <th>{{ index + 1 }}</th>
                                    <td class="font-semibold">{{ article.title }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>      
                </div>
                <div class="md:col-span-2 p-5 bg-error rounded-lg shadow-2xl">
                    <h2 class="text-3xl font-bold text-white mb-3 max-sm:text-2xl">
                        List Users
                    </h2>
                    <div class="overflow-x-auto">
                        <table class="table ">
                            <!-- head -->
                            <thead class="text-white">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody class="text-white">
                                <tr v-for="(user, index) in usersList" :key="user.id">
                                    <th>{{ index + 1 }}</th>
                                    <td class="font-semibold">{{ user.name }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed,onMounted } from 'vue'
// Article
import DataArticle from '@data/newsData.json'

const username = ref('');
const usersList = ref([]);
const resultCountUsers = ref(0);
// User
const CountUser = async () => {
    const response = await fetch('http://localhost:3000/api/users/count-users')
    const data = await response.json()
    return data
}

const listeUsers = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/user/list-users');
        const data = await response.json();
        usersList.value = data; 
    } catch (error) {
        console.error("Erreur lors du chargement des utilisateurs", error);
    }
}

const CountArticle = computed(() => {
    return DataArticle.length
})

const sortedArticles = computed(() => {
    return DataArticle
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
});

onMounted(() => {
  username.value = localStorage.getItem('username');
  CountUser().then(data => {
    resultCountUsers.value = data.count
  });
  listeUsers();
});

</script>

