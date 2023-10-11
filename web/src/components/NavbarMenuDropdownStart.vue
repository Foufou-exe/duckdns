<template>
    <details class="dropdown xl:hidden">
        <summary tabindex="0" class="btn btn-ghost">
            <font-awesome-icon icon="bars" size="xl" />
        </summary>
        <ul tabindex="0" class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
            <li class="flex">
                <h1 class="text-xl font-extrabold">Duck DNS</h1>
            </li>
            <li class="hover:font-bold">
                <router-link  :to="{ name: 'home' }">
                    <font-awesome-icon icon="house" />
                    Home
                </router-link>
            </li>
            <li class="hover:font-bold">
                <router-link  :to="{ name: 'about' }">
                    <font-awesome-icon icon="circle-info" />
                    About
                </router-link>
            </li>
            <li class="hover:font-bold">
                <router-link  :to="{ name: 'specification' }">
                    <font-awesome-icon icon="wrench" />
                    Spécifications
                </router-link>
            </li>
            <li class="hover:font-bold">
                <router-link  :to="{ name: 'documentation' }">
                    <font-awesome-icon icon="file" />
                    Documentation
                </router-link>
            </li>
            <li class="hover:font-bold">
                <router-link  :to="{ name: 'faq' }">
                    <font-awesome-icon icon="question" />
                    FAQ
                </router-link>
            </li>
            <li class="hover:font-bold">
                <router-link  :to="{ name: 'news' }">
                <font-awesome-icon icon="newspaper" />
                News
                </router-link>
            </li>
        </ul>
    </details>
</template>

<script setup>
//
</script>