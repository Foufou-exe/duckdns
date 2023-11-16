<template>
    <ul class="menu menu-horizontal max-xl:hidden">
        <li class="font-semibold">
            <router-link  :to="{ name: 'home' }">
                <font-awesome-icon icon="house" />
                Home
            </router-link>
        </li>
        <li class="font-semibold">
            <router-link  :to="{ name: 'about' }">
                <font-awesome-icon icon="circle-info" />
                About
            </router-link>
        </li>
        <li class="font-semibold">
            <router-link  :to="{ name: 'specification' }">
                <font-awesome-icon icon="wrench" />
                Spécifications
            </router-link>
        </li>
        <li class="font-semibold ">
            <router-link  :to="{ name: 'documentation' }">
                <font-awesome-icon icon="file" />
                Documentation
            </router-link>
        </li>
        <li class="font-semibold">
            <router-link  :to="{ name: 'faq' }">
                <font-awesome-icon icon="question" />
                FAQ
            </router-link>
        </li>
        <li class="font-semibold">
            <router-link  :to="{ name: 'news' }">
                <font-awesome-icon icon="newspaper" />
                News
            </router-link>
        </li>
    </ul>
</template>