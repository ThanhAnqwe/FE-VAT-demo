<template>
  <div class="filter-bar">
    <MsSelect
      label="Tỉnh / Thành"
      placeholder="Tất cả"
      :options="regionOptions"
      v-model="regionModel"
    />

    <MsSelect
      label="Ngành (VSIC)"
      placeholder="Tất cả"
      :options="industryOptions"
      v-model="viscModel"
    />

    <MsInput
      label="Tìm mã số thuế"
      placeholder="Nhập tên công ty hoặc mã số thuế"
      v-model="taxCodeModel"
    />

    <div class="filter-bar__viewing">
      Đang xem: <strong>2887845945</strong>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MsInput from '../components/MsInput.vue';
import MsSelect from '../components/MsSelect.vue';

//mock data
import {regionOptions,industryOptions } from '../../../mockdata.js';

const regionModel = ref('');
const viscModel = ref('');
const taxCodeModel = ref('');


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
}

.filter-bar__viewing {
  margin-left: auto;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  white-space: nowrap;
}
</style>