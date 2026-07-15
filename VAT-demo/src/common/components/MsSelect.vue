<template>
  <div class="custom-select" ref="rootEl">
    <span class="custom-select__label">{{ label }}</span>

    <button
      type="button"
      class="custom-select__trigger"
      :class="{ 'custom-select__trigger--open': isOpen }"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="toggleOpen"
      @keydown.down.prevent="onArrowDown"
      @keydown.up.prevent="onArrowUp"
      @keydown.esc="close"
      @keydown.enter.prevent="onEnter"
    >
      <span class="custom-select__value">{{ selectedLabel }}</span>
      <svg class="custom-select__chevron" width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
          fill="currentColor"
        />
      </svg>
    </button>

    <Transition name="custom-select-fade">
      <ul
        v-if="isOpen"
        class="custom-select__list"
        role="listbox"
        :tabindex="-1"
      >
        <li
          v-for="(opt, i) in options"
          :key="opt[valueKey]"
          class="custom-select__option"
          :class="{
            'custom-select__option--selected': opt[valueKey] === modelValue,
            'custom-select__option--active': i === activeIndex,
          }"
          role="option"
          :aria-selected="opt[valueKey] === modelValue"
          @click="select(opt)"
          @mouseenter="activeIndex = i"
        >
          <span>{{ opt[labelKey] }}</span>
          <svg
            v-if="opt[valueKey] === modelValue"
            class="custom-select__check"
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
              fill="currentColor"
            />
          </svg>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

//
const props = defineProps({
  label: { type: String, required: true },
  modelValue: { type: [String, Number], default: '' },
  options: { type: Array, default: () => [] },
  labelKey: { type: String, default: 'label' },
  valueKey: { type: String, default: 'value' },
});

const emit = defineEmits(['update:modelValue']);

const rootEl = ref(null);
const isOpen = ref(false);
const activeIndex = ref(0);

const selectedLabel = computed(() => {
  const found = props.options.find((o) => o[props.valueKey] === props.modelValue);
  return found ? found[props.labelKey] : props.options[0]?.[props.labelKey] ?? '';
});

function toggleOpen() {
  isOpen.value ? close() : open();
}

function open() {
  activeIndex.value = Math.max(
    0,
    props.options.findIndex((o) => o[props.valueKey] === props.modelValue)
  );
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
}

function select(opt) {
  emit('update:modelValue', opt[props.valueKey]);
  close();
}

function onArrowDown() {
  if (!isOpen.value) return open();
  activeIndex.value = Math.min(activeIndex.value + 1, props.options.length - 1);
}

function onArrowUp() {
  if (!isOpen.value) return open();
  activeIndex.value = Math.max(activeIndex.value - 1, 0);
}

function onEnter() {
  if (!isOpen.value) return open();
  const opt = props.options[activeIndex.value];
  if (opt) select(opt);
}

function onClickOutside(e) {
  if (rootEl.value && !rootEl.value.contains(e.target)) close();
}

onMounted(() => document.addEventListener('click', onClickOutside));
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside));
</script>

<style scoped>
.custom-select {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 160px;
}

.custom-select__label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #64748b;
  text-transform: uppercase;
}

.custom-select__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: #0f1729;
  border: 1px solid #263248;
  border-radius: 8px;
  color: #e2e8f0;
  padding: 8px 10px;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 0.15s ease;
  font-family: inherit;
}

.custom-select__trigger:hover {
  border-color: #334155;
}

.custom-select__trigger:focus-visible,
.custom-select__trigger--open {
  outline: 2px solid #22d3ee;
  outline-offset: 1px;
  border-color: #22d3ee;
}

.custom-select__value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.custom-select__chevron {
  flex-shrink: 0;
  color: #64748b;
  transition: transform 0.15s ease;
}

.custom-select__trigger--open .custom-select__chevron {
  transform: rotate(180deg);
}

.custom-select__list {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 1;
  margin: 0;
  padding: 6px;
  list-style: none;
  background: #131b2c;
  border: 1px solid #263248;
  border-radius: 10px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  max-height: 240px;
  overflow-y: auto;
}

.custom-select__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  color: #cbd5e1;
  cursor: pointer;
}

.custom-select__option--active {
  background: #1c2740;
}

.custom-select__option--selected {
  color: #22d3ee;
  font-weight: 600;
}

.custom-select__check {
  flex-shrink: 0;
  color: #22d3ee;
}

/* Transition */
.custom-select-fade-enter-active,
.custom-select-fade-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}

.custom-select-fade-enter-from,
.custom-select-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>