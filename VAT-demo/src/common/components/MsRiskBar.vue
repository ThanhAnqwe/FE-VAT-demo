<template>
  <div class="risk-bar">
    <div class="risk-bar__head">
      <span class="risk-bar__label">{{ label }}</span>
      <span class="risk-bar__value" :style="{ color: levelColorVar }">{{ score }}</span>
    </div>
    <div class="risk-bar__track">
      <div
        class="risk-bar__fill"
        :style="{ width: `${Math.min(score / 10, 100)}%`, background: levelColorVar }"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: { type: String, required: true },
  score: { type: Number, required: true }, // 0-1000
});

// 0-399 thấp · 400-599 trung bình · 600-799 cao · 800+ nghiêm trọng
const level = computed(() => {
  if (props.score >= 800) return 'critical';
  if (props.score >= 600) return 'high';
  if (props.score >= 400) return 'medium';
  return 'low';
});

const levelColorVar = computed(() => `var(--risk-${level.value}-text)`);
</script>

<style scoped>
.risk-bar {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.risk-bar__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.risk-bar__label {
  font-size: var(--text-sm);
  color: var(--color-text);
}

.risk-bar__value {
  font-size: var(--text-sm);
  font-weight: 700;
}

.risk-bar__track {
  height: 6px;
  border-radius: var(--radius-pill);
  background: var(--color-surface-hover);
  overflow: hidden;
}

.risk-bar__fill {
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width var(--transition-base);
}
</style>