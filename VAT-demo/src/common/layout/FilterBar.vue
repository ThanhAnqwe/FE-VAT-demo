<template>
  <div class="filter-bar">
    <MsInput
      label="tỉnh / thành"
      placeholder="tất cả"
      v-model="regionModel"
    />
    <MsInput
      label="ngành (VISC)"
      placeholder="tất cả"
      v-model="viscModel"
    />

    <MsInput
      label="tìm mã số thuế"
      placeholder="Nhập tên công ty hoặc mã số thuế"
      v-model="taxCodeModel"
    />

    <div class="filter-bar__viewing">
      Đang xem: <strong>2887845945</strong>
    </div>
  </div>
</template>

<script setup>
import MsInput from '../components/MsInput.vue';
</script>

<style scoped>
.filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-sm); 
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  z-index: 1;
}

.filter-bar__field {
  min-width: 150px;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.filter-bar__field--input {
  min-width: 280px;
}

.filter-bar__field label {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.filter-bar__field select,
.filter-bar__field input {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-2) var(--space-3);
  color: var(--color-text);
  font-size: var(--text-input);
}

.filter-bar__viewing {
  margin-left: auto;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}
</style>