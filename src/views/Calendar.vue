<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Calendar</h2>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          View and manage upcoming PTC events
        </p>
      </div>
      <div class="mt-4 sm:mt-0">
        <button type="button" class="btn-primary">
          <PlusIcon class="h-5 w-5 mr-2 inline-block" />
          Add Event
        </button>
      </div>
    </div>

    <!-- Events List -->
    <div class="space-y-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Upcoming Events ({{ upcomingEvents.length }})
      </h3>
      
      <div v-if="upcomingEvents.length > 0" class="space-y-4">
        <EventCard
          v-for="event in upcomingEvents"
          :key="event.id"
          :event="event"
        />
      </div>
      
      <div v-else class="text-center py-12">
        <CalendarIcon class="mx-auto h-12 w-12 text-gray-400" />
        <h3 class="mt-2 text-sm font-semibold text-gray-900 dark:text-white">No upcoming events</h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by creating a new event.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlusIcon, CalendarIcon } from '@heroicons/vue/24/outline'
import EventCard from '@/components/calendar/EventCard.vue'
import { useEvents } from '@/composables/useEvents'

const { upcomingEvents } = useEvents()
</script>