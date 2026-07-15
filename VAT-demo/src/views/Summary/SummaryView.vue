<template>
  <div class="mockup-view">
    <div class="mockup-view__col mockup-view__col--main">
      <div class="mockup-card">
        <h2 class="mockup-card__title">TỔNG HỢP ĐIỂM 4 PHƯƠNG PHÁP</h2>
        <p class="mockup-card__hint">Bảng danh sách công ty sẽ nằm ở đây</p>
      </div>
    </div>

    <div class="mockup-view__col mockup-view__col--side">
      <div class="mockup-card">
        <h2 class="mockup-card__title">SƠ ĐỒ VENN - TOÀN BỘ DỮ LIỆU</h2>
        <p class="mockup-card__hint">Venn diagram + bảng phân rã sẽ nằm ở đây</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.mockup-view {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.mockup-view__col {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.mockup-view__col--main {
  flex: 2;
}

.mockup-view__col--side {
  flex: 1;
}

.mockup-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  min-height: 400px;
}

.mockup-card__title {
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}

.mockup-card__hint {
  font-size: var(--text-sm);
  color: var(--slate-500);
  font-style: italic;
}
</style>