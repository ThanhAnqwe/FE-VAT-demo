<template>
  <div class="test-page">
    <div class="controls">
      <h2>Test Graph Viewer</h2>
      <div class="button-group">
        <button @click="activeData = 'simple'" :class="{ active: activeData === 'simple' }">
          Dữ liệu đơn giản (11 node)
        </button>
        <button @click="activeData = 'cycle'" :class="{ active: activeData === 'cycle' }">
          Có Person + vòng lặp sở hữu
        </button>
      </div>
    </div>

    <GraphNode :graph-data="currentGraphData" @expand-node="handleExpandNode" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import GraphNode from './GraphNode.vue'
import { mockGraphData, mockGraphDataWithCycle } from './mockGraphData.js'

const activeData = ref('simple')

const currentGraphData = computed(() =>
  activeData.value === 'simple' ? mockGraphData : mockGraphDataWithCycle
)

function handleExpandNode(nodeId) {
  console.log('Double-clicked node:', nodeId)
  // Khi nối API thật, đây là chỗ gọi fetchNeighbors(nodeId) rồi merge vào graphData
}
</script>

<style scoped>
.test-page {
  padding: 20px;
}
.controls {
  margin-bottom: 16px;
}
.button-group {
  display: flex;
  gap: 8px;
}
button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
  cursor: pointer;
}
button.active {
  background: #4C8EDA;
  color: white;
  border-color: #2C5C9E;
}
</style>