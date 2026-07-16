<template>
  <DetailCard title="Chỉ số đặc trưng">
    <AccordionItem
      v-for="group in groups"
      :key="group.id"
      :title="group.title"
      badge-text="Top 5"
      badge-variant="neutral"
      :default-open="group.id === groups[0]?.id"
    >
      <p v-if="group.hint" class="feature-group__hint">{{ group.hint }}</p>

      <ol class="feature-group__list">
        <li v-for="(item, i) in group.items" :key="i" class="feature-group__item">
          <span class="feature-group__rank">{{ i + 1 }}</span>
          <span class="feature-group__name">{{ item.name }}</span>
          <span class="feature-group__value">{{ item.value }}</span>
        </li>
      </ol>
    </AccordionItem>
  </DetailCard>
</template>

<script setup>
import DetailCard from '../../../common/components/MsDetailCard.vue';
import AccordionItem from '../../../common/components/MsAccordingItem.vue';

defineProps({
  // [{ id, title, hint, items: [{ name, value }] }]
  groups: { type: Array, default: () => [] },
});
</script>

<style scoped>
.feature-group__hint {
  margin: 0 0 var(--space-3) 0;
  padding-left: var(--space-3);
  border-left: 2px solid var(--color-primary);
}

.feature-group__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.feature-group__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-border);
}

.feature-group__item:last-child {
  border-bottom: none;
}

.feature-group__rank {
  flex-shrink: 0;
  width: 18px;
  color: var(--color-text-muted);
  font-weight: 700;
}

.feature-group__name {
  flex: 1;
  min-width: 0;
  color: var(--color-text);
}

.feature-group__value {
  flex-shrink: 0;
  font-weight: 700;
  color: var(--color-primary);
  font-variant-numeric: tabular-nums;
}
</style>