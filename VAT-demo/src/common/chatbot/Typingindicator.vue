<template>
  <div class="chat-message chat-message--bot" aria-live="polite">
    <div class="chat-message__avatar" aria-hidden="true">
      <i class="icon_bot" />
    </div>
    <div class="typing-bubble" role="status" aria-label="Bot đang trả lời">
      <span class="typing-bubble__dot" />
      <span class="typing-bubble__dot" />
      <span class="typing-bubble__dot" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
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

.typing-bubble {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: var(--space-2) var(--space-3);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  border-bottom-left-radius: var(--radius-sm);
  width: fit-content;
}

.typing-bubble__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-text-muted);
  animation: typing-bounce 1.2s infinite ease-in-out;
}

.typing-bubble__dot:nth-child(2) {
  animation-delay: 0.15s;
}

.typing-bubble__dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes typing-bounce {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  30% {
    transform: translateY(-3px);
    opacity: 1;
  }
}
</style>