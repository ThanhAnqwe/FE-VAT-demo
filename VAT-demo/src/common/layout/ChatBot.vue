<template>
  <section class="chatbot" aria-label="Trợ lý MISA FraudEC">
    <header class="chatbot__header">
      <h2 class="chatbot__title">MISA FraudEC</h2>
    </header>

    <div class="chatbot__messages" role="log" aria-live="polite">
      <ChatMessage
        v-for="msg in messages"
        :key="msg.id"
        :role="msg.role"
        :text="msg.text"
        :time="msg.time"
      />
      <TypingIndicator v-if="isBotTyping" />
    </div>

    <div class="suggest_tag" aria-label="Gợi ý câu hỏi">
      <button class="suggest_tag__item">Công ty A có rủi ro không?</button>
      <button class="suggest_tag__item">Công ty B có liên quan đến công ty C không?</button>
      <button class="suggest_tag__item">Công ty D có đang bị điều tra không?</button>
    </div>

    <form class="chatbot__input-area" @submit.prevent="handleSend">
      <input
        id="chatbot-input"
        v-model="draft"
        type="text"
        placeholder="Hỏi về 2887845945..."
        :disabled="isBotTyping"
      />
      <button type="submit" aria-label="Gửi tin nhắn" :disabled="!draft.trim() || isBotTyping">
        <i class="icon_send"/>
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ChatMessage from '../chatbot/Chatmessage.vue';
import TypingIndicator from '../chatbot/Typingindicator.vue';

const isBotTyping = ref(false);
const draft = ref('');
let nextId = 4;

// demo data — thay bằng state thật từ store / API
const messages = ref([
  {
    id: 1,
    role: 'bot',
    text: 'Xin chào! Tôi là trợ lý phân tích rủi ro hóa đơn VAT. Chọn một công ty từ bảng, sau đó gõ /d để điều tra.',
    time: '09:12',
  },
  {
    id: 2,
    role: 'user',
    text: 'Công ty 2887845945 vi phạm rule gì?',
    time: '09:13',
  },
  {
    id: 3,
    role: 'bot',
    text: 'Công ty này vi phạm 3 rule: doanh thu tăng đột biến, tỷ lệ khấu trừ bất thường, và có giao dịch vòng tròn với 2 công ty khác trong cùng cụm.',
    time: '09:13',
  },
]);

async function handleSend() {
  const question = draft.value.trim();
  if (!question || isBotTyping.value) return;

  // 1. đẩy ngay câu hỏi của user lên UI (optimistic update)
  messages.value.push({
    id: nextId++,
    role: 'user',
    text: question,
    time: formatTime(new Date()),
  });

  draft.value = '';
  isBotTyping.value = true;

  try {


    const answer = await mockBotReply(question); 

    messages.value.push({
      id: nextId++,
      role: 'bot',
      text: answer,
      time: formatTime(new Date()),
    });
  } catch (err) {
    messages.value.push({
      id: nextId++,
      role: 'bot',
      text: 'Có lỗi xảy ra khi kết nối máy chủ. Vui lòng thử lại.',
      time: formatTime(new Date()),
    });
  } finally {
    isBotTyping.value = false;
  }
}

function formatTime(date) {
  return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
}

// giả lập độ trễ mạng — xoá hàm này khi đã nối API thật
function mockBotReply(question) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Đã nhận câu hỏi: "${question}". (đây là câu trả lời giả lập)`), 1200);
  });
}
</script>

<style scoped>
.chatbot {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: var(--space-6) var(--space-6);
  gap: var(--space-3);
}

.chatbot__header {
  flex-shrink: 0;
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border);
}

.chatbot__title {
  color: var(--color-text);
  font-size: var(--text-header);
  font-weight: 600;
}

.chatbot__messages {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.suggest_tag {
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.suggest_tag__item {
  flex: 0 1 auto;
  white-space: normal;
  text-align: left;
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-primary);
  font-size: var(--text-xs);
  line-height: 1.4;
}

.suggest_tag__item:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-primary);
}

.chatbot__input-area {
  flex-shrink: 0;
  display: flex;
  gap: var(--space-2);
}

.chatbot__input-area input {
  flex: 1;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-3);
  color: var(--input-text);
  font-size: var(--text-input);
  transition: border-color var(--transition-fast);
}

.chatbot__input-area input::placeholder {
  color: var(--input-placeholder);
}

.chatbot__input-area input:hover {
  border-color: var(--input-border-hover);
}

.chatbot__input-area input:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
  border-color: var(--color-primary);
}

.chatbot__input-area button {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--slate-100);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast);
}

.chatbot__input-area button:hover {
  background: var(--color-primary-hover);
}

.chatbot__input-area input:disabled {
  opacity: 0.6;
}

.chatbot__input-area button:disabled {
  opacity: 0.4;
  background: var(--slate-100);
}
</style>