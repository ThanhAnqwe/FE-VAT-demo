<template>
  <label class="search-input">
    <span class="search-input__label">{{ label }}</span>
    <input
      class="search-input__control"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  placeholder: { type: String, default: '' },
  modelValue: { type: String, default: '' },
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.search-input {
  display: flex;
  flex-direction: column;
  gap: var(--gap-2);
  flex: 0 1;
  min-width: 220px;
}

.search-input__label {
  font-size: var(--text-label);
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #64748b;
  text-transform: uppercase;
}

.search-input__control {
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: var(--radius-sm);
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-input);
  color: var(--input-text);
  transition: border-color 0.15s ease;
}

.search-input__control::placeholder {
  color: var(--input-placeholder);
}

.search-input__control:hover {
  border-color: var(--input-border-hover);
}

.search-input__control:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}
</style>