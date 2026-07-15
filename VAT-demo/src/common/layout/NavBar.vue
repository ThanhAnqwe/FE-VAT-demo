<template>
  <nav class="nav-bar">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.path"
      :to="tab.path"
      class="nav-bar__tab"
      active-class="is-active"
    >
      {{ tab.label }}
    </RouterLink>
  </nav>
</template>

<script setup>
const tabs = [
  { path: '/summary', label: 'Tổng hợp' },
  { path: '/detail', label: 'Chi tiết' },
  { path: '/graph', label: 'Phân tích đồ thị' },
  { path: '/realtime', label: 'Thời gian thực' },
]
</script>

<style scoped>
.nav-bar {
  display: flex;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg);
}

.nav-bar__tab {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.nav-bar__tab:hover {
  background: var(--color-surface-hover);
}

.nav-bar__tab.is-active {
  background: var(--color-surface);
  color: var(--color-primary);
}
</style>