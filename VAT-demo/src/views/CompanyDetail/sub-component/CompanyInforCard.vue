<template>
  <DetailCard title="Thông tin doanh nghiệp">
    <h3 class="company-info__name">{{ company.name }}</h3>
    <p class="company-info__tax-code">{{ company.taxCode }}</p>

    <div class="company-info__rows">
      <InfoRow label="Tỉnh / TP" :value="company.province" />
      <InfoRow label="Mã ngành VSIC" :value="company.industryCode" />
      <InfoRow label="Lĩnh vực KD" :value="company.industryName" />
      <InfoRow label="Trạng thái" :value="company.status" />
      <InfoRow label="Ngày thành lập" :value="company.foundedAt" />
      <InfoRow label="Đại diện PL" :value="company.legalRep" />
      <InfoRow label="Điện thoại" :value="company.phone" />
      <InfoRow label="PP kê khai" :value="company.declarationMethod" />
      <InfoRow label="Loại thuế GTGT" :value="company.vatType" />
    </div>
  </DetailCard>
</template>

<script setup>
import DetailCard from '../../../common/components/MsDetailCard.vue';
import InfoRow from '../../../common/components/MsInforRow.vue';

defineProps({
  company: { type: Object, required: true },
});
</script>

<style scoped>
.company-info__name {
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.4;
  margin: 0;
}

.company-info__tax-code {
  font-size: var(--text-sm);
  color: var(--color-primary);
  margin: var(--space-1) 0 var(--space-3) 0;
}

.company-info__rows {
  display: flex;
  flex-direction: column;
}

.company-info__rows > :deep(.info-row) {
  border-bottom: 1px solid var(--color-border);
}

.company-info__rows > :deep(.info-row:last-child) {
  border-bottom: none;
}
</style>