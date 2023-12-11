<template>
  <div>
    <div
      class="flex flex-wrap md:flex-nowrap justify-between items-center space-x-0 md:space-x-10 mb-5 mt-5"
    >
      <h1 class="text-3xl lg:text-5xl font-extrabold mb-5 flex-shrink-0">
        Domains
        <span class="badge badge-lg badge-success font-bold"
          >{{ domains.length }}/5</span
        >
      </h1>
      <div class="flex flex-wrap items-center join">
        <button class="btn bg-black no-animation text-white flex-shrink-0">
          http://
        </button>
        <input
          v-model="newDomain"
          class="input input-bordered flex-grow"
          placeholder="sub domain"
        />
        <button class="btn bg-black text-white no-animation flex-shrink-0">
          .duckdns.org
        </button>
        <button @click="addDomain" class="btn btn-warning flex-shrink-0">
          Add Domain
        </button>
      </div>
    </div>

    <div class="overflow-x-auto bg-base-200 rounded p-5">
      <table class="table">
        <thead>
          <tr>
            <th>
              <label>
                <input
                  v-model="selectAll"
                  @change="toggleAll"
                  type="checkbox"
                  class="checkbox"
                />
              </label>
            </th>
            <th class="text-lg">Domain</th>
            <th class="text-lg">Current IP</th>
            <th class="text-lg">IPV6</th>
            <th class="text-lg">Changed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="domain in domains" :key="domain.id">
            <th>
              <label>
                <input
                  v-model="domain.selected"
                  type="checkbox"
                  class="checkbox"
                />
              </label>
            </th>
            <td>
              <div class="flex items-center">
                <div class="font-bold">{{ domain.name }}</div>
              </div>
            </td>
            <td>
              <div class="join">
                <input
                  class="input input-bordered join-item"
                  :value="domain.ip"
                />
                <button class="btn join-item btn-warning">Update ip</button>
              </div>
            </td>
            <td>
              <div class="join">
                <input
                  class="input input-bordered join-item"
                  :value="domain.ipv6"
                />
                <button class="btn join-item btn-warning">Update ipv6</button>
              </div>
            </td>
            <th>
              <span>{{ timeSince(domain.time) }}</span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Delete buttons -->
    <div
      class="flex flex-wrap-reverse md:flex-nowrap justify-end mt-5 space-x-1 md:space-x-3 space-y-2 md:space-y-0"
    >
      <button
        @click="deleteAll"
        class="btn bg-red-600 hover:bg-red-700 text-white"
        v-if="isAllSelected"
      >
        <font-awesome-icon :icon="['fas', 'trash']" /> Delete All
      </button>
      <button
        @click="deleteSelected"
        class="btn bg-red-600 hover:bg-red-700 text-white"
        v-if="isAnySelected"
      >
        <font-awesome-icon :icon="['fas', 'trash']" /> Delete
      </button>
    </div>
  </div>

  <!-- Pied de page -->
  <div class="font-thin mt-5">
    <p>
      This site is protected by reCAPTCHA and the Google
      <br />
      <a href="https://policies.google.com/privacy" class="link"
        >Privacy Policy</a
      >
      and
      <a href="https://policies.google.com/terms" class="link"
        >Terms of Service </a
      >apply.
    </p>
  </div>
</template>

<script setup>
// Importing view modules
import { ref, watch, onMounted, onUnmounted } from "vue";

import { useToast } from "vue-toastification";
const toast = useToast();


const newDomain = ref("");
const domains = ref([]);
const selectAll = ref(false);

const isAllSelected = ref(false);
const isAnySelected = ref(false);


function timeSince(timeStamp) {
  const now = Date.now();
  const secondsPast = (now - timeStamp) / 1000;

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)} sec`;
  } else if (secondsPast < 3600) {
    return `${Math.round(secondsPast / 60)} min`;
  } else if (secondsPast < 86400) {
    return `${Math.round(secondsPast / 3600)} h`;
  } else {
    return `${Math.round(secondsPast / 86400)} d`;
  }
}


function addDomain() {
  if (!newDomain.value.trim()) {
    return toast.info("Please enter a subdomain name. 📝");
  }
  if (domains.value.length >= 5) {
    return toast.warning("You can only add up to 5 domains. 🚫");
  }
  if (domains.value.some((domain) => domain.name === newDomain.value.trim())) {
    return toast.error(`This subdomain ${ newDomain.value.trim() }.duckdns.org already exists.🔍`);
  }
  domains.value.push({
    id: Date.now(),
    time: Date.now(),
    name: newDomain.value.trim(),
    ip: "Autodetect IPv4" ,
    ipv6: "Autodetect IPv6", 
    selected: false,
  });
  return toast.success(`Subdomain ${ newDomain.value.trim() }.duckdns.org added successfully. ✅`) && (newDomain.value = "");
}

function deleteSelected() {
  domains.value = domains.value.filter((domain) => !domain.selected);
  updateSelectionStatus();
  return toast.success(`Domain ${ newDomain.value.trim() }.duckdns.org deleted successfully. 🗑️`);
}

function deleteAll() {
  domains.value = [];
  updateSelectionStatus();
  return toast.success("All domains deleted successfully. 🗑️");
}

function toggleAll() {
  domains.value.forEach((domain) => (domain.selected = selectAll.value));
  updateSelectionStatus();
}

function updateSelectionStatus() {
  isAnySelected.value = domains.value.some((domain) => domain.selected);
  isAllSelected.value =
    domains.value.length > 0 &&
    domains.value.every((domain) => domain.selected);
  selectAll.value = isAllSelected.value;
}

watch(
  domains,
  () => {
    updateSelectionStatus();
  },
  { deep: true }
);

function updateDisplay() {
  // Force Vue to update the component
  domains.value = domains.value.map(domain => ({ ...domain }));
}

onMounted(() => {
  const interval = setInterval(updateDisplay, 60000); // Updates every minute
  onUnmounted(() => clearInterval(interval)); // Clears the gap when the component is destroyed
});


</script>

<style scoped>
.join {
  display: flex;
}

.join-item {
  margin-right: 5px;
}

.join-item:last-child {
  margin-right: 0;
}
</style>
