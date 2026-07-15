<template>
  <div class="chat-message" :class="`chat-message--${role}`">
    <div v-if="role === 'bot'" class="chat-message__avatar" aria-hidden="true">
      <i class="icon_bot" />
    </div>

    <div class="chat-message__body">
      <div class="chat-message__bubble">
        <p class="chat-message__text">{{ text }}</p>
      </div>
      <span v-if="time" class="chat-message__time">{{ time }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  role: { type: String, default: 'bot' }, // 'bot' | 'user'
  text: { type: String, required: true },
  time: { type: String, default: '' },
});
</script>

<style scoped>
.chat-message {
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
  max-width: 100%;
}

.chat-message--user {
  flex-direction: row-reverse;
}

.chat-message__avatar {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-surface-hover);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 14px;
}

.chat-message__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  max-width: 80%;
}

.chat-message--user .chat-message__body {
  align-items: flex-end;
}

.chat-message--bot .chat-message__body {
  align-items: flex-start;
}

.chat-message__bubble {
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  word-break: break-word;
}

.chat-message--bot .chat-message__bubble {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-bottom-left-radius: var(--radius-sm);
}

.chat-message--user .chat-message__bubble {
  background: var(--color-primary);
  border-bottom-right-radius: var(--radius-sm);
}

.chat-message__text {
  margin: 0;
  font-size: var(--text-sm);
  line-height: 1.5;
}

.chat-message--bot .chat-message__text {
  color: var(--color-text);
}

.chat-message--user .chat-message__text {
  color: var(--color-text-inverse);
}

.chat-message__time {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  padding: 0 var(--space-1);
}
</style>