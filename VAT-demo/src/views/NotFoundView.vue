<template>
  <div class="not-found">
    <span class="not-found__code">404</span>
    <h1 class="not-found__title">Không tìm thấy trang</h1>
    <p class="not-found__desc">
      Đường dẫn <code>{{ path }}</code> không tồn tại trong hệ thống.
    </p>
    <RouterLink to="/summary" class="not-found__link">
      Quay về Tổng hợp
    </RouterLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const path = route.fullPath
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  min-height: 60vh;
  text-align: center;
  padding: var(--space-8);
}

.not-found__code {
  font-size: 72px;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}

.not-found__title {
  font-size: var(--text-xl);
  color: var(--color-text);
  font-weight: 600;
}

.not-found__desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.not-found__desc code {
  color: var(--color-danger);
  background: var(--color-surface);
  padding: 2px var(--space-2);
  border-radius: var(--radius-sm);
}

.not-found__link {
  margin-top: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  color: var(--color-text-inverse);
  font-size: var(--text-sm);
  font-weight: 600;
  transition: background-color var(--transition-fast);
}

.not-found__link:hover {
  background: var(--color-primary-hover);
}
</style>