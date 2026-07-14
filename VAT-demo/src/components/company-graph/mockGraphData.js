// mockGraphData.js
// Mock data mô phỏng đúng cấu trúc DTO trả về từ BE (đã map từ Neo4j Query API response)
// Dùng để test UI component GraphViewer.vue mà không cần gọi API thật

export const mockGraphData = {
  nodes: [
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      labels: ["Company"],
      properties: { name: "Root Holdings", taxCode: "0100000001", industry: "Holding" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:1",
      labels: ["Company"],
      properties: { name: "Child Alpha", taxCode: "0100000002", industry: "Manufacturing" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:2",
      labels: ["Company"],
      properties: { name: "Child Beta", taxCode: "0100000003", industry: "Retail" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:3",
      labels: ["Company"],
      properties: { name: "Child Gamma", taxCode: "0100000004", industry: "Logistics" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:4",
      labels: ["Company"],
      properties: { name: "Child Delta", taxCode: "0100000005", industry: "Technology" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:5",
      labels: ["Company"],
      properties: { name: "Alpha Sub 1", taxCode: "0100000006", industry: "Manufacturing" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:6",
      labels: ["Company"],
      properties: { name: "Alpha Sub 2", taxCode: "0100000007", industry: "Manufacturing" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:7",
      labels: ["Company"],
      properties: { name: "Beta Sub 1", taxCode: "0100000008", industry: "Retail" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:8",
      labels: ["Company"],
      properties: { name: "Gamma Sub 1", taxCode: "0100000009", industry: "Logistics" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:9",
      labels: ["Company"],
      properties: { name: "Gamma Sub 2", taxCode: "0100000010", industry: "Logistics" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:10",
      labels: ["Company"],
      properties: { name: "Delta Sub 1", taxCode: "0100000011", industry: "Technology" }
    }
  ],

  edges: [
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:1152921504606846976",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:1",
      type: "OWNS",
      properties: { percent: 80, since: "2020-01-01" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:1155173304420532224",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:2",
      type: "OWNS",
      properties: { percent: 65, since: "2019-06-15" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:1152922604118474752",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:3",
      type: "INVESTS_IN",
      properties: { percent: 30, since: "2021-03-10" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:1155174403932160000",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:4",
      type: "INVESTS_IN",
      properties: { percent: 45, since: "2022-07-20" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:1152921504606846977",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:1",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:5",
      type: "OWNS",
      properties: { percent: 90, since: "2021-01-01" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:1152922604118474753",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:1",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:6",
      type: "INVESTS_IN",
      properties: { percent: 25, since: "2022-01-01" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:1152921504606846978",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:2",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:7",
      type: "OWNS",
      properties: { percent: 100, since: "2020-09-01" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:1152921504606846979",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:3",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:8",
      type: "OWNS",
      properties: { percent: 70, since: "2021-11-01" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:1152922604118474755",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:3",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:9",
      type: "INVESTS_IN",
      properties: { percent: 15, since: "2023-02-01" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:1152921504606846980",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:4",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:10",
      type: "OWNS",
      properties: { percent: 55, since: "2022-05-01" }
    }
  ]
}

export const mockGraphDataWithCycle = {
  nodes: [
    ...mockGraphData.nodes,
    {
      id: "person:1",
      labels: ["Person"],
      properties: { name: "Nguyễn Văn X", idCard: "001099012345" }
    },
    {
      id: "person:2",
      labels: ["Person"],
      properties: { name: "Trần Thị Y", idCard: "001099067890" }
    }
  ],
  edges: [
    ...mockGraphData.edges,
    {
      id: "edge:director:1",
      source: "person:1",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      type: "DIRECTOR_OF",
      properties: { since: "2020-01-01" }
    },
    {
      id: "edge:director:2",
      source: "person:1",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:8",
      type: "DIRECTOR_OF",
      properties: { since: "2021-11-01" }
    },
    {
      id: "edge:director:3",
      source: "person:2",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:9",
      type: "DIRECTOR_OF",
      properties: { since: "2023-02-01" }
    },
    // Vòng lặp sở hữu chéo giả lập: Gamma Sub 1 quay lại đầu tư vào Root Holdings
    {
      id: "edge:cycle:1",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:8",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      type: "INVESTS_IN",
      properties: { percent: 12, since: "2024-03-01" }
    }
  ]
}