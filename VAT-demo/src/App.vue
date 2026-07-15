<template>
  <MainLayout class="app">
    <RouterView />
  </MainLayout>
</template>

<script setup>
import MainLayout from './layouts/MainLayout.vue';

</script>

<style scoped>
.app{
  padding: var(--space-4);
}
</style>