<template>
  <div class="graph-wrapper">
    <div ref="graphContainer" class="graph-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Network } from 'vis-network/standalone'
import { DataSet } from 'vis-data/standalone'

const props = defineProps({
  graphData: {
    type: Object,
    required: true // { nodes: [...], edges: [...] }
  },
  centerNodeId: {
    type: String,
    default: null // nếu có, sẽ áp dụng radial layout quanh node này
  }
})

const emit = defineEmits(['expand-node'])

const graphContainer = ref(null)
let network = null

const LABEL_COLORS = {
  Company: { background: '#4C8EDA', border: '#2C5C9E', highlight: { background: '#6BA5EE', border: '#2C5C9E' } },
  Person: { background: '#F79767', border: '#C0562F', highlight: { background: '#FFAE7F', border: '#C0562F' } },
  Invoice: { background: '#57C7E3', border: '#2F9DB8', highlight: { background: '#7FDFF9', border: '#2F9DB8' } },
  default: { background: '#A5ABB6', border: '#7C828E', highlight: { background: '#C4C9D1', border: '#7C828E' } }
}

// Radial layout: tâm -> cấp 1 (vòng tròn đều) -> cấp 2 (tỏa theo hướng cha)
function buildRadialLayout(centerNodeId, allNodes, allEdges) {
  const RADIUS_LEVEL_1 = 200
  const RADIUS_LEVEL_2 = 380
  const SPREAD_ANGLE = Math.PI / 6

  const level1Ids = [...new Set(
    allEdges
      .filter(e => e.source === centerNodeId || e.target === centerNodeId)
      .map(e => (e.source === centerNodeId ? e.target : e.source))
  )]

  const angleStep = (2 * Math.PI) / (level1Ids.length || 1)
  const level1Angles = {}
  level1Ids.forEach((id, index) => {
    level1Angles[id] = angleStep * index
  })

  const level2Map = {}
  level1Ids.forEach(l1Id => {
    const children = allEdges
      .filter(e =>
        (e.source === l1Id || e.target === l1Id) &&
        e.source !== centerNodeId && e.target !== centerNodeId
      )
      .map(e => (e.source === l1Id ? e.target : e.source))
      .filter(id => !level1Ids.includes(id) && id !== centerNodeId)

    level2Map[l1Id] = [...new Set(children)]
  })

  return allNodes.map(n => {
    if (n.id === centerNodeId) {
      return { ...n, x: 0, y: 0, fixed: true }
    }

    if (level1Ids.includes(n.id)) {
      const angle = level1Angles[n.id]
      return {
        ...n,
        x: RADIUS_LEVEL_1 * Math.cos(angle),
        y: RADIUS_LEVEL_1 * Math.sin(angle),
        fixed: { x: true, y: true }
      }
    }

    const parentId = Object.keys(level2Map).find(l1Id => level2Map[l1Id].includes(n.id))
    if (parentId) {
      const siblings = level2Map[parentId]
      const siblingIndex = siblings.indexOf(n.id)
      const baseAngle = level1Angles[parentId]
      const offset = siblings.length > 1
        ? (siblingIndex - (siblings.length - 1) / 2) * (SPREAD_ANGLE / siblings.length)
        : 0
      const angle = baseAngle + offset

      return {
        ...n,
        x: RADIUS_LEVEL_2 * Math.cos(angle),
        y: RADIUS_LEVEL_2 * Math.sin(angle),
        fixed: { x: true, y: true }
      }
    }

    return n // cấp 3+ để physics tự lo (nếu physics đang bật)
  })
}

function buildTooltip(item) {
  const container = document.createElement('div')
  const props = item.properties || {}
  Object.entries(props).forEach(([k, v]) => {
    const line = document.createElement('div')
    line.innerHTML = `<b>${k}</b>: ${v}`
    container.appendChild(line)
  })
  return container
}

// Build dữ liệu cho vis-network
function buildVisData(graphData, centerNodeId) {
  const nodesRaw = centerNodeId
    ? buildRadialLayout(centerNodeId, graphData.nodes, graphData.edges)
    : graphData.nodes

  const nodes = new DataSet(
    nodesRaw.map(n => {
      const label = n.labels?.[0] || 'default'
      const colors = LABEL_COLORS[label] || LABEL_COLORS.default
      return {
        id: n.id,
        label: n.properties?.name || label,
        title: buildTooltip(n),
        color: colors,
        shape: 'dot',
        size: n.id === centerNodeId ? 30 : 20,
        x: n.x,
        y: n.y,
        fixed: n.fixed,
        font: { color: '#343434', size: 13, face: 'Inter, sans-serif' }
      }
    })
  )

  const edges = new DataSet(
    graphData.edges.map(e => ({
      id: e.id,
      from: e.source,
      to: e.target,
      label: e.type,
      arrows: { to: { enabled: true, scaleFactor: 0.6 } },
      color: { color: '#A5ABB6', highlight: '#4C8EDA' },
      font: { size: 10, align: 'middle', color: '#5C5C5C', strokeWidth: 4, strokeColor: '#ffffff' },
      title: buildTooltip(e),
      smooth: { type: 'continuous' }
    }))
  )

  return { nodes, edges }
}

// Render / re-render graph
function renderGraph() {
  if (!graphContainer.value) return

  const { nodes, edges } = buildVisData(props.graphData, props.centerNodeId)

  const usingFixedLayout = !!props.centerNodeId

  const options = {
    physics: {
      enabled: !usingFixedLayout,
      solver: 'barnesHut',
      barnesHut: {
        gravitationalConstant: -8000,
        springLength: 150,
        springConstant: 0.04,
        avoidOverlap: 1
      },
      stabilization: { iterations: 200 }
    },
    layout: {
      improvedLayout: !usingFixedLayout
    },
    interaction: {
      hover: true,
      tooltipDelay: 100,
      zoomView: true,
      dragView: true
    },
    nodes: {
      borderWidth: 2,
      shadow: false
    },
    edges: {
      width: 1.5,
      shadow: false
    }
  }

  if (network) network.destroy()
  network = new Network(graphContainer.value, { nodes, edges }, options)

  network.on('doubleClick', (params) => {
    if (params.nodes.length > 0) {
      emit('expand-node', params.nodes[0])
    }
  })
}

onMounted(renderGraph)
watch(() => [props.graphData, props.centerNodeId], renderGraph, { deep: true })
onBeforeUnmount(() => network?.destroy())
</script>

<style scoped>
.graph-wrapper {
  width: 100%;
  height: 100%;
}
.graph-container {
  width: 100%;
  height: 600px;
  background-color: #fafafa;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}
</style>