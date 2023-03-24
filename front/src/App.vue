<script setup>
import { useIsMobile } from './composable/useIsMobile'
import Dashboard from './views/Dashboard.vue'

const { isMobile } = useIsMobile()
</script>

<template>
  <div :class="isMobile ? 'w-full p-5':'w-2/3 mx-auto my-10'">
    <Dashboard />
  </div>
</template>

<style scoped>
</style>
