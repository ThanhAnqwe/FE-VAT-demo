<template>
  <div class="info-row">
    <span class="info-row__label">{{ label }}</span>
    <span class="info-row__value">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
});
</script>

<style scoped>
.info-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) 0;
}

.info-row__label {
  flex-shrink: 0;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.info-row__value {
  font-size: var(--text-sm);
  color: var(--color-text);
  font-weight: 600;
  text-align: right;
}
</style>