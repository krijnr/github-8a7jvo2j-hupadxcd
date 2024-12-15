<template>
  <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
    <div class="mb-4">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Welcome to PTC App</h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        Stay connected with your Parent Teacher Club community
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <router-link
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ link.name }}
        </h2>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ link.description }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  {
    name: 'Directory',
    path: '/directory',
    description: 'View committees and members'
  },
  {
    name: 'Messages',
    path: '/messaging',
    description: 'Send messages to groups'
  },
  {
    name: 'Reimbursement',
    path: '/reimbursement',
    description: 'Submit reimbursement requests'
  },
  {
    name: 'Budget',
    path: '/budget',
    description: 'View PTC budget details'
  },
  {
    name: 'Calendar',
    path: '/calendar',
    description: 'See upcoming events'
  }
]
</script>