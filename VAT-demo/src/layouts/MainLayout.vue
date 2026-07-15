<template>
  <div class="main-layout">
    <!--blur orb -->
    <div class="glow-orb"></div>
    <div class="top-header">
    <PageHeader />

    <FilterBar />

    <NavBar />
    </div>
    <div class="layout-body">
      <main class="main-content">
        <slot />
      </main>

      <aside class="chatbot-aside">
        <ChatBot/>
      </aside>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../common/layout/NavBar.vue'
import FilterBar from '../common/layout/FilterBar.vue'
import PageHeader from '../common/layout/PageHeader.vue'
import ChatBot from '../common/layout/ChatBot.vue'
</script>

<style scoped>
.main-layout {
  position: relative;   /* thêm — làm mốc định vị cho glow-orb */
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg);

}

.glow-orb {
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.top-header{
  position: relative;
  z-index: 1;
}

.layout-body {
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 340px;
  min-height: 0;
  z-index: 0;
}

.main-content {
  overflow-y: auto;
  min-width: 0;
  padding: 0 var(--space-4);
}

.chatbot-aside {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  min-height: 0;
}

</style>