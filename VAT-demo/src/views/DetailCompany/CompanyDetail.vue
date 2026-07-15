<template>
  <div class="mockup-view">
    <div class="mockup-view__col mockup-view__col--main">
      <div class="mockup-card">
        <h2 class="mockup-card__title">THÔNG TIN DOANH NGHIỆP</h2>
        <p class="mockup-card__hint">Card thông tin công ty sẽ nằm ở đây</p>
      </div>

      <div class="mockup-card">
        <h2 class="mockup-card__title">ĐIỂM RỦI RO (0-1000)</h2>
        <p class="mockup-card__hint">3 thanh progress bar sẽ nằm ở đây</p>
      </div>
    </div>

    <div class="mockup-view__col mockup-view__col--side">
      <div class="mockup-card">
        <h2 class="mockup-card__title">QUY TẮC NGHIỆP VỤ</h2>
        <p class="mockup-card__hint">Badge danh sách vi phạm</p>
      </div>

      <div class="mockup-card">
        <h2 class="mockup-card__title">LOẠI CỜ GIAN LẬN</h2>
        <p class="mockup-card__hint">Badge Buffer Firm, SCC Carousel...</p>
      </div>

      <div class="mockup-card">
        <h2 class="mockup-card__title">THÔNG TIN HOẠT ĐỘNG</h2>
        <p class="mockup-card__hint">Grid 2x2 số liệu doanh nghiệp</p>
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
  flex: 1;
}

.mockup-view__col--side {
  flex: 1;
}

.mockup-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
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