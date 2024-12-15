<template>
  <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
    <WelcomePanel />
    <QuickStats />
  </div>
</template>

<script setup lang="ts">
import WelcomePanel from '@/components/home/WelcomePanel.vue'
import QuickStats from '@/components/home/QuickStats.vue'
</script>