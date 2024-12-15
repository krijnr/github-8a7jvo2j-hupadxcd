<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <Navbar />
    <Sidebar />
    
    <main class="p-4 md:ml-64 h-auto pt-20">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
import Sidebar from './components/layout/Sidebar.vue'
</script>