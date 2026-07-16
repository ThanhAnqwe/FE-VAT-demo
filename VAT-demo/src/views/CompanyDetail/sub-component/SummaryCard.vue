<template>
  <DetailCard title="Tóm tắt đánh giá">
    <p class="summary-card__text">{{ text }}</p>
  </DetailCard>
</template>

<script setup>
import DetailCard from '../../../common/components/MsDetailCard.vue';

defineProps({
  text: { type: String, required: true },
});
</script>

<style scoped>
.summary-card__text {
  margin: 0;
  font-size: var(--text-sm);
  line-height: 1.7;
  color: var(--color-text);
}
</style>