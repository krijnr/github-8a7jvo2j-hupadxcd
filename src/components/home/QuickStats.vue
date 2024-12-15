<template>
  <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
    <div class="w-full">
      <h3 class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
        Quick Stats
      </h3>
      <div class="flex flex-col mt-2">
        <div class="overflow-x-auto rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow sm:rounded-lg">
              <div class="p-4 space-y-4">
                <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Total Budget
                  </p>
                  <p class="text-2xl font-bold text-gray-900 dark:text-white">
                    ${{ budget.total.toLocaleString() }}
                  </p>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Active Committees
                  </p>
                  <p class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ committees.length }}
                  </p>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Upcoming Events
                  </p>
                  <p class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ events.length }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'

const store = useAppStore()
const { budget, committees, events } = storeToRefs(store)
</script>