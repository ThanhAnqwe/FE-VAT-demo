<template>
  <header class="page-header">
    <h1 class="page-header__title">FraudGraph AI</h1>
    <MsStatusBadge :text=status variant="success" />
  </header>
</template>

<script setup>
import MsStatusBadge from '../components/MsStatusBadge.vue';
const status = 'Đã kết nối máy chủ';
</script>

<style scoped>
.page-header {
  height: var(--panel-header-height);
  padding: var(--space-6) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
}

.page-header__title {
  font-size: var(--text-header);
  font-weight: 700;
  color: var(--color-text);
}

.page-header__status {
  font-size: var(--text-xs);
  font-weight: 600;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-pill);
  background: var(--risk-low-bg);
  border: 1px solid var(--risk-low-border);
  color: var(--risk-low-text);
}
</style>