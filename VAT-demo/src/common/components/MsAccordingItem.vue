<template>
  <div class="accordion-item">
    <button
      type="button"
      class="accordion-item__header"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <span class="accordion-item__left">
        <svg
          class="accordion-item__caret"
          :class="{ 'accordion-item__caret--open': isOpen }"
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="accordion-item__title" :class="titleClass">{{ title }}</span>
      </span>

      <StatusTag v-if="badgeText" :text="badgeText" :variant="badgeVariant" />
    </button>

    <Transition name="accordion-fade">
      <div v-if="isOpen" class="accordion-item__body">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StatusTag from './MsStatusBadge.vue';

const props = defineProps({
  title: { type: String, required: true },
  titleClass: { type: String, default: '' },
  badgeText: { type: String, default: '' },
  badgeVariant: { type: String, default: 'danger' },
  defaultOpen: { type: Boolean, default: false },
});

const isOpen = ref(props.defaultOpen);
</script>

<style scoped>
.accordion-item {
  border-bottom: 1px solid var(--color-border);
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-item__header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  padding: var(--space-3) 0;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--font-sans);
  text-align: left;
}

.accordion-item__left {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
}

.accordion-item__caret {
  flex-shrink: 0;
  color: var(--color-text-muted);
  transition: transform var(--transition-fast);
}

.accordion-item__caret--open {
  transform: rotate(90deg);
}

.accordion-item__title {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
}

.accordion-item__body {
  padding: 0 0 var(--space-4) var(--gap-6);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}

.accordion-fade-enter-active,
.accordion-fade-leave-active {
  transition: opacity var(--transition-fast);
}

.accordion-fade-enter-from,
.accordion-fade-leave-to {
  opacity: 0;
}
</style>