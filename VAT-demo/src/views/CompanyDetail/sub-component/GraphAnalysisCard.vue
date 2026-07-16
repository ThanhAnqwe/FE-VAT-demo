<template>
  <DetailCard title="Phân tích đồ thị">
    <AccordionItem
      v-for="signal in signals"
      :key="signal.id"
      :title="signal.title"
      title-class="graph-signal__title"
      :badge-text="signal.badgeText"
      badge-variant="danger"
    >
      {{ signal.description }}
    </AccordionItem>

    <div class="graph-analysis__risk-line">
      Mức rủi ro đồ thị:
      <StatusTag :text="riskLabel" :variant="riskVariant" />
    </div>
  </DetailCard>
</template>

<script setup>
import { computed } from 'vue';
import DetailCard from '../../../common/components/MsDetailCard.vue';
import AccordionItem from '../../../common/components/MsAccordingItem.vue';
import StatusTag from '../../../common/components/MsStatusBadge.vue';

const props = defineProps({
  // [{ id, title, badgeText, description }]
  signals: { type: Array, default: () => [] },
  graphScore: { type: Number, required: true },
});

const riskInfo = computed(() => {
  if (props.graphScore >= 800) return { level: 'critical', label: 'Nghiêm trọng' };
  if (props.graphScore >= 600) return { level: 'high', label: 'Cao' };
  if (props.graphScore >= 400) return { level: 'medium', label: 'Trung bình' };
  return { level: 'low', label: 'Thấp' };
});

const riskLabel = computed(() => `${riskInfo.value.label} · ${props.graphScore}`);
const riskVariant = computed(() => `risk-${riskInfo.value.level}`);
</script>

<style scoped>
.graph-analysis__risk-line {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

:deep(.graph-signal__title) {
  color: var(--status-danger-text);
}
</style>