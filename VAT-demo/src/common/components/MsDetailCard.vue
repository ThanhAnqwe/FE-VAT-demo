<template>
  <section class="detail-card">
    <h2 class="detail-card__title">{{ title }}</h2>
    <div class="detail-card__body">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
});
</script>

<style scoped>
.detail-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  flex-shrink: 0;
}

.detail-card__title {
  font-size: var(--text-header);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  margin: 0 0 var(--space-3) 0;
}
</style>