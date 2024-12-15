<template>
  <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between">
      <div class="flex-1">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {{ event.title }}
        </h3>
        <p class="text-base text-gray-500 dark:text-gray-400 mb-4">
          {{ event.description }}
        </p>
        <div class="space-y-2">
          <div class="flex items-center text-sm">
            <CalendarIcon class="h-5 w-5 text-gray-400 mr-2" />
            <span class="text-gray-600 dark:text-gray-300">{{ formatEventDate(event.date) }}</span>
          </div>
          <div v-if="event.location" class="flex items-center text-sm">
            <MapPinIcon class="h-5 w-5 text-gray-400 mr-2" />
            <span class="text-gray-600 dark:text-gray-300">{{ event.location }}</span>
          </div>
          <div v-if="event.committee" class="flex items-center text-sm">
            <UserGroupIcon class="h-5 w-5 text-gray-400 mr-2" />
            <span class="text-gray-600 dark:text-gray-300">{{ event.committee }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
import type { Event } from '@/types/event'
import { useEvents } from '@/composables/useEvents'

const props = defineProps<{
  event: Event
}>()

const { formatEventDate } = useEvents()
</script>