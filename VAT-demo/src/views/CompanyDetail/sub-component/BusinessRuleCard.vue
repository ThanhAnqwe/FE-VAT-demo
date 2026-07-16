<template>
  <DetailCard :title="`Quy tắc nghiệp vụ (${violations.length} vi phạm)`">
    <AccordionItem
      v-for="rule in violations"
      :key="rule.id"
      :title="rule.title"
      badge-text="VI PHẠM"
      badge-variant="danger"
      :default-open="rule.id === violations[0]?.id"
    >
      <p class="rule-block__desc">{{ rule.description }}</p>

      <div v-for="sub in rule.subRules" :key="sub.code" class="rule-block__sub">
        <p class="rule-block__sub-title">{{ sub.code }} — {{ sub.name }}</p>
        <p class="rule-block__sub-desc">{{ sub.desc }}</p>
        <p class="rule-block__legal">Căn cứ pháp lý: {{ sub.legal }}</p>
      </div>
    </AccordionItem>
  </DetailCard>
</template>

<script setup>
import DetailCard from '../../../common/components/MsDetailCard.vue';
import AccordionItem from '../../../common/components/MsAccordingItem.vue';

defineProps({
  // [{ id, title, description, subRules: [{ code, name, desc, legal }] }]
  violations: { type: Array, default: () => [] },
});
</script>

<style scoped>
.rule-block__desc {
  margin: 0 0 var(--space-3) 0;
}

.rule-block__sub {
  padding: var(--space-3);
  margin-bottom: var(--space-2);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.rule-block__sub:last-child {
  margin-bottom: 0;
}

.rule-block__sub-title {
  margin: 0 0 var(--space-1) 0;
  font-weight: 700;
  color: var(--color-text);
}

.rule-block__sub-desc {
  margin: 0 0 var(--space-2) 0;
}

.rule-block__legal {
  margin: 0;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-style: italic;
}
</style>