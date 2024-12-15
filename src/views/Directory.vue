<template>
  <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
    <div class="mb-4">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Committee Directory</h1>
    </div>
    
    <CommitteeFilter v-model="searchQuery" />
    
    <div v-if="filteredCommittees.length > 0" class="space-y-4">
      <CommitteeCard
        v-for="committee in filteredCommittees"
        :key="committee.id"
        :committee="committee"
      />
    </div>
    
    <div v-else class="p-4 text-center">
      <p class="text-gray-500 dark:text-gray-400">No committees found matching your search.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommitteeCard from '@/components/directory/CommitteeCard.vue'
import CommitteeFilter from '@/components/directory/CommitteeFilter.vue'
import { useCommitteeSearch } from '@/composables/useCommitteeSearch'

const { searchQuery, filteredCommittees } = useCommitteeSearch()
</script>