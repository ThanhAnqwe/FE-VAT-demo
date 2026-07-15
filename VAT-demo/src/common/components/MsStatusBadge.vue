<template>
  <span class="status-badge" :class="`status-badge--${variant}`">
    {{ text }}
  </span>
</template>

<script setup>
defineProps({
  text: { type: String, required: true },
  // 'success' | 'danger' | 'neutral'
  variant: { type: String, default: 'neutral' },
});
</script>

<style scoped>
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  font-size: var(--text-xs);
  font-weight: 600;
  line-height: 1.4;
  white-space: nowrap;
  border: 1px solid transparent;
}


.status-badge--success {
  color: var(--status-success-text);
  background: var(--status-success-bg);
  border-color: var(--status-success-border);
}

.status-badge--danger {
  color: var(--status-danger-text);
  background: var(--status-danger-bg);
  border-color: var(--status-danger-border);
}

.status-badge--neutral {
  color: var(--status-neutral-text);
  background: var(--status-neutral-bg);
  border-color: var(--status-neutral-border);
}
</style>