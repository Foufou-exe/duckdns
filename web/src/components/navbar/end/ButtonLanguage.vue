<template>
    <details class="dropdown dropdown-end">
        <summary tabindex="0" class="btn btn-ghost">
            <font-awesome-icon icon="language" class="text-lg"></font-awesome-icon>
            <font-awesome-icon icon="chevron-down" class="text-xs hidden sm:block"></font-awesome-icon>
        </summary>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
            <li>
                <routeur-link :to="{ path: '/fr' + $route.path.substr(3) }" class="hover:font-bold"><span
                        class="badge badge-outline badge-sm font-semibold">FR</span>Français</routeur-link>
            </li>
            <li>
                <routeur-link :to="{ path: '/en' + $route.path.substr(3) }" class="hover:font-bold"><span
                        class="badge badge-outline badge-sm font-semibold">EN</span>English</routeur-link>
            </li>
            <li>
                <routeur-link :to="{ path: '/es' + $route.path.substr(3) }" class="hover:font-bold"><span
                        class="badge badge-outline badge-sm font-semibold">ES</span>Español</routeur-link>
            </li>
            <li>
                <routeur-link :to="{ path: '/de' + $route.path.substr(3) }" class="hover:font-bold"><span
                        class="badge badge-outline badge-sm font-semibold">DE</span>Deutsch</routeur-link>
            </li>
            <li>
                <routeur-link :to="{ path: '/pt' + $route.path.substr(3) }" class="hover:font-bold"><span
                        class="badge badge-outline badge-sm font-semibold">PT</span>Português</routeur-link>
            </li>
            <li>
                <routeur-link :to="{ path: '/id' + $route.path.substr(3) }" class="hover:font-bold"><span
                        class="badge badge-outline badge-sm font-semibold">ID</span>Indonesian</routeur-link>
            </li>
            <li>
                <routeur-link :to="{ path: '/ja' + $route.path.substr(3) }" class="hover:font-bold"><span
                        class="badge badge-outline badge-sm font-semibold">JA</span>中文</routeur-link>
            </li>
            <li>
                <routeur-link :to="{ path: '/zh' + $route.path.substr(3) }" class="hover:font-bold"><span
                        class="badge badge-outline badge-sm font-semibold">ZH</span>日本語</routeur-link>
            </li>
            <li>
                <routeur-link :to="{ path: '/ru' + $route.path.substr(3) }" class="hover:font-bold"><span
                        class="badge badge-outline badge-sm font-semibold">RU</span>Русский</routeur-link>
        </li>
        <li>
            <routeur-link :to="{ path: '/ar' + $route.path.substr(3) }" class="hover:font-bold"><span
                    class="badge badge-outline badge-sm font-semibold">AR</span>عرب</routeur-link>
        </li>
    </ul>
</details></template>
