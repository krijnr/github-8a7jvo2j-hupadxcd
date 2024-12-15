<template>
  <aside id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
    <div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          <ul class="pb-2 space-y-2">
            <li>
              <router-link to="/" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 9l10 7 10-7-10-7zM2 15l10 7 10-7"/>
                </svg>
                <span class="ml-3">Dashboard</span>
              </router-link>
            </li>
            <li v-for="link in navLinks" :key="link.path">
              <router-link :to="link.path" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <span class="ml-3">{{ link.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const navLinks = [
  { name: 'Messages', path: '/messaging' },
  { name: 'Directory', path: '/directory' },
  { name: 'Reimbursement', path: '/reimbursement' },
  { name: 'Budget', path: '/budget' },
  { name: 'Calendar', path: '/calendar' },
]
</script>