<template>
    <div class="min-h-scren">
        <div class="flex space-x-10 mb-5 mt-5 justify-between">
            <h1 class="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-5">Domains <span class="badge badge-lg badge-success font-bold">{{ NumberDomain }}/5</span></h1>
            <div class="join border-secondary">
                <button class="btn bg-black no-animation join-item text-white">http://</button>
                <input class="input input-bordered join-item" placeholder="sub domain"/>
                <button class="btn bg-black  text-white no-animation   join-item ">.duckdns.org</button>
                <button class="btn join-item btn-secondary">Add Domain</button>
            </div>
        </div>
        <div class="overflow-x-auto bg-base-200 rounded p-5">
            <table class="table">
                <!-- head -->
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                    </th>
                    <th class="text-lg">Domain</th>
                    <th class="text-lg">Current IP</th>
                    <th class="text-lg">IPV6</th>
                    <th class="text-lg">Changed</th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div class="flex items-center">
                        <div class="font-bold">{{ Domain }}</div>
                    </div>
                    </td>
                    <td>
                        <div class="join">
                            <input class="input input-bordered join-item" placeholder="{{ IPcurrent }}"/>
                            <button class="btn join-item btn-secondary">Update ip</button>
                        </div>
                    </td>
                    <td>
                        <div class="join">
                            <input class="input input-bordered join-item" placeholder="{{ IPcurrent }}"/>
                            <button class="btn join-item btn-secondary">Update ipv6</button>
                        </div>
                    </td>
                    <th>
                        <span>{{ Time }} min</span>
                    </th>
                </tr>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div class="flex items-center">
                        <div class="font-bold">{{ Domain }}</div>
                    </div>
                    </td>
                    <td>
                        <div class="join">
                            <input class="input input-bordered join-item" placeholder="{{ IPcurrent }}"/>
                            <button class="btn join-item btn-secondary">Update ip</button>
                        </div>
                    </td>
                    <td>
                        <div class="join">
                            <input class="input input-bordered join-item" placeholder="{{ IPcurrent }}"/>
                            <button class="btn join-item btn-secondary">Update ipv6</button>
                        </div>
                    </td>
                    <th>
                        <span>{{ Time }} min</span>
                    </th>
                </tr>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div class="flex items-center">
                        <div class="font-bold">{{ Domain }}</div>
                    </div>
                    </td>
                    <td>
                        <div class="join">
                            <input class="input input-bordered join-item" placeholder="{{ IPcurrent }}"/>
                            <button class="btn join-item btn-secondary">Update ip</button>
                        </div>
                    </td>
                    <td>
                        <div class="join">
                            <input class="input input-bordered join-item" placeholder="{{ IPcurrent }}"/>
                            <button class="btn join-item btn-secondary">Update ipv6</button>
                        </div>
                    </td>
                    <th>
                        <span>{{ Time }} min</span>
                    </th>
                </tr>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div class="flex items-center">
                        <div class="font-bold">{{ Domain }}</div>
                    </div>
                    </td>
                    <td>
                        <div class="join">
                            <input class="input input-bordered join-item" placeholder="{{ IPcurrent }}"/>
                            <button class="btn join-item btn-secondary">Update ip</button>
                        </div>
                    </td>
                    <td>
                        <div class="join">
                            <input class="input input-bordered join-item" placeholder="{{ IPcurrent }}"/>
                            <button class="btn join-item btn-secondary">Update ipv6</button>
                        </div>
                    </td>
                    <th>
                        <span>{{ Time }} min</span>
                    </th>
                </tr>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div class="flex items-center">
                        <div class="font-bold">{{ Domain }}</div>
                    </div>
                    </td>
                    <td>
                        <div class="join">
                            <input class="input input-bordered join-item" placeholder="{{ IPcurrent }}"/>
                            <button class="btn join-item btn-secondary">Update ip</button>
                        </div>
                    </td>
                    <td>
                        <div class="join">
                            <input class="input input-bordered join-item" placeholder="{{ IPcurrent }}"/>
                            <button class="btn join-item btn-secondary">Update ipv6</button>
                        </div>
                    </td>
                    <th>
                        <span>{{ Time }} min</span>
                    </th>
                </tr>
                <!-- row 2 -->
                </tbody>
            </table>

        </div>
        <div class="flex flex-row-reverse mt-5">
            <button class="btn bg-red-600 hover:bg-red-700 text-white"><font-awesome-icon :icon="['fas', 'trash']" />delete</button>
            <button class="btn bg-red-600 hover:bg-red-700 text-white mr-3"><font-awesome-icon :icon="['fas', 'trash']" />all delete</button> 
        </div>
    </div>
    <div class="font-thin mt-5">
        <p>
            This site is protected by reCAPTCHA and the Google
            <br>
            <a href="https://policies.google.com/privacy" class="link">Privacy Policy</a> and <a href="https://policies.google.com/terms" class="link">Terms of Service </a>apply.
        </p>
    </div>
</template>

<script setup>

const NumberDomain = 0
const Domain = 'TEST'
const IPcurrent = '82.98.2.3'
const IPV6 = 'ff::fff::0000:3545:effewf:ffff'
const Time = 5
</script>