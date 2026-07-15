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
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:11",
      labels: ["Company"],
      properties: { name: "Child Epsilon", taxCode: "0100000012", industry: "Real Estate" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:12",
      labels: ["Company"],
      properties: { name: "Child Zeta", taxCode: "0100000013", industry: "Construction" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:13",
      labels: ["Company"],
      properties: { name: "Child Eta", taxCode: "0100000014", industry: "Finance" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:14",
      labels: ["Company"],
      properties: { name: "Child Theta", taxCode: "0100000015", industry: "Retail" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:15",
      labels: ["Company"],
      properties: { name: "Child Iota", taxCode: "0100000016", industry: "Agriculture" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:16",
      labels: ["Company"],
      properties: { name: "Child Kappa", taxCode: "0100000017", industry: "Import-Export" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:17",
      labels: ["Company"],
      properties: { name: "Child Lambda", taxCode: "0100000018", industry: "Media" }
    },
    {
      id: "4:66de2c65-89b2-4785-9fe0-eb4054663298:18",
      labels: ["Company"],
      properties: { name: "Child Mu", taxCode: "0100000019", industry: "Energy" }
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
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:2000000000000000001",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:11",
      type: "OWNS",
      properties: { percent: 75, since: "2020-04-11" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:2000000000000000002",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:12",
      type: "INVESTS_IN",
      properties: { percent: 20, since: "2021-08-19" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:2000000000000000003",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:13",
      type: "OWNS",
      properties: { percent: 60, since: "2019-12-02" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:2000000000000000004",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:14",
      type: "INVESTS_IN",
      properties: { percent: 35, since: "2022-02-14" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:2000000000000000005",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:15",
      type: "OWNS",
      properties: { percent: 88, since: "2020-10-30" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:2000000000000000006",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:16",
      type: "INVESTS_IN",
      properties: { percent: 18, since: "2023-06-07" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:2000000000000000007",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:17",
      type: "OWNS",
      properties: { percent: 50, since: "2021-05-23" }
    },
    {
      id: "5:66de2c65-89b2-4785-9fe0-eb4054663298:2000000000000000008",
      source: "4:66de2c65-89b2-4785-9fe0-eb4054663298:0",
      target: "4:66de2c65-89b2-4785-9fe0-eb4054663298:18",
      type: "INVESTS_IN",
      properties: { percent: 40, since: "2022-09-12" }
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