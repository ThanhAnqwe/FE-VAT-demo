<template>
  <span class="status-badge" :class="`status-badge--${variant}`">
    {{ text }}
  </span>
</template>

<script setup>
defineProps({
  text: { type: String, required: true },
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

.status-badge--risk-low {
  color: var(--risk-low-text);
  background: var(--risk-low-bg);
  border-color: var(--risk-low-border);
}

.status-badge--risk-medium {
  color: var(--risk-medium-text);
  background: var(--risk-medium-bg);
  border-color: var(--risk-medium-border);
}

.status-badge--risk-high {
  color: var(--risk-high-text);
  background: var(--risk-high-bg);
  border-color: var(--risk-high-border);
}

.status-badge--risk-critical {
  color: var(--risk-critical-text);
  background: var(--risk-critical-bg);
  border-color: var(--risk-critical-border);
}
</style>