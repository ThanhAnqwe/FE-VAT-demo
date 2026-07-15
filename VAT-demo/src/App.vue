<script setup></script>

<template>
  <header v-if="true">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/test">Test Graph</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>