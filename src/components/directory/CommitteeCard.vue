<template>
  <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
    <h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">{{ committee.name }}</h3>
    <div class="space-y-3">
      <div v-for="member in committee.members" 
           :key="member.email"
           class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-gray-700">
        <div>
          <h4 class="font-medium text-gray-900 dark:text-white">{{ member.name }}</h4>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ member.role }}</p>
        </div>
        <a :href="`mailto:${member.email}`" 
           class="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400 text-sm mt-2 sm:mt-0">
          {{ member.email }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Committee } from '@/types/committee'

defineProps<{
  committee: Committee
}>()
</script>