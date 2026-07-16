<template>
  <DetailCard title="Điểm rủi ro (0-1000)">
    <div class="risk-score__bars">
      <RiskBar label="Mô hình máy học" :score="scores.model" />
      <RiskBar label="Phát hiện bất thường" :score="scores.anomaly" />
      <RiskBar label="Phân tích đồ thị" :score="scores.graph" />
    </div>

    <ul class="risk-score__legend">
      <li><span class="risk-score__dot" style="background: var(--risk-low-text)" />0-399: Thấp</li>
      <li><span class="risk-score__dot" style="background: var(--risk-medium-text)" />400-599: Trung bình</li>
      <li><span class="risk-score__dot" style="background: var(--risk-high-text)" />600-799: Cao</li>
      <li><span class="risk-score__dot" style="background: var(--risk-critical-text)" />800+: Nghiêm trọng</li>
    </ul>
  </DetailCard>
</template>

<script setup>
import DetailCard from '../../../common/components/MsDetailCard.vue';
import RiskBar from '../../../common/components/MsRiskBar.vue';

defineProps({
  // { model, anomaly, graph } — mỗi giá trị 0-1000
  scores: { type: Object, required: true },
});
</script>

<style scoped>
.risk-score__bars {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.risk-score__legend {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2) var(--space-3);
  list-style: none;
  margin: 0;
  padding: var(--space-3) 0 0 0;
  border-top: 1px solid var(--color-border);
}

.risk-score__legend li {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.risk-score__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>