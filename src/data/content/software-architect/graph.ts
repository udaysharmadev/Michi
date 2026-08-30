import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_sa_cp", type: "section", position: { x: 0, y: 0 }, data: { title: "Core Principles", sectionNumber: 1, color: "blue", sectionIcon: "lightbulb" } },
    { id: "n_sa_1", type: "topic", parentId: "s_sa_cp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "SOLID Principles", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "blue", icon: "check-circle", row: 0, col: 0 } },
    { id: "n_sa_2", type: "topic", parentId: "s_sa_cp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CAP Theorem", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "blue", icon: "SiReact", row: 0, col: 1 } },
    { id: "n_sa_3", type: "topic", parentId: "s_sa_cp", extent: "parent", position: { x: 0, y: 0 }, data: { title: "DRY, KISS, YAGNI", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", icon: "scissors", row: 1, col: 0 } },

    { id: "s_sa_ap", type: "section", position: { x: 576, y: 0 }, data: { title: "Architectural Patterns", sectionNumber: 2, color: "purple", sectionIcon: "server" } },
    { id: "n_sa_4", type: "topic", parentId: "s_sa_ap", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Monolith vs Microservices", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", icon: "grid", row: 0, col: 0 } },
    { id: "n_sa_5", type: "topic", parentId: "s_sa_ap", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Event-Driven Architecture", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "purple", icon: "zap", row: 0, col: 1 } },
    { id: "n_sa_6", type: "topic", parentId: "s_sa_ap", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Serverless Architecture", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "purple", icon: "cloud", row: 1, col: 0 } },

    { id: "s_sa_sc", type: "section", position: { x: 1152, y: 0 }, data: { title: "System Components", sectionNumber: 3, color: "green", sectionIcon: "cpu" } },
    { id: "n_sa_7", type: "topic", parentId: "s_sa_sc", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Load Balancing", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "green", icon: "server", row: 0, col: 0 } },
    { id: "n_sa_8", type: "topic", parentId: "s_sa_sc", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Caching Strategies", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "green", icon: "database", row: 0, col: 1 } },
    { id: "n_sa_9", type: "topic", parentId: "s_sa_sc", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Message Queues", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "green", icon: "SiApachekafka", row: 1, col: 0 } },

    { id: "s_sa_da", type: "section", position: { x: 0, y: 600 }, data: { title: "Data Architecture", sectionNumber: 4, color: "orange", sectionIcon: "database" } },
    { id: "n_sa_10", type: "topic", parentId: "s_sa_da", extent: "parent", position: { x: 0, y: 0 }, data: { title: "SQL vs NoSQL", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "orange", icon: "SiMongodb", row: 0, col: 0 } },
    { id: "n_sa_11", type: "topic", parentId: "s_sa_da", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Sharding & Replication", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "orange", icon: "server", row: 0, col: 1 } },
    { id: "n_sa_12", type: "topic", parentId: "s_sa_da", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Event Sourcing & CQRS", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "orange", icon: "refresh-cw", row: 1, col: 0 } },

    { id: "s_sa_sr", type: "section", position: { x: 576, y: 600 }, data: { title: "Security & Reliability", sectionNumber: 5, color: "red", sectionIcon: "shield" } },
    { id: "n_sa_13", type: "topic", parentId: "s_sa_sr", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Identity & Access (IAM)", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "red", icon: "lock", row: 0, col: 0 } },
    { id: "n_sa_14", type: "topic", parentId: "s_sa_sr", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Rate Limiting", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "red", icon: "gauge", row: 0, col: 1 } },
    { id: "n_sa_15", type: "topic", parentId: "s_sa_sr", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Disaster Recovery", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "red", icon: "shield-off", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_sa_1", target: "n_sa_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_sa_1", target: "n_sa_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_1", source: "n_sa_2", target: "n_sa_4", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_sa_4", target: "n_sa_5", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_sa_4", target: "n_sa_6", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_2", source: "n_sa_6", target: "n_sa_7", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_sa_7", target: "n_sa_8", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_sa_7", target: "n_sa_9", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_3", source: "n_sa_9", target: "n_sa_10", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_sa_10", target: "n_sa_11", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_sa_10", target: "n_sa_12", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_4", source: "n_sa_12", target: "n_sa_13", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_sa_13", target: "n_sa_14", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_sa_13", target: "n_sa_15", sourceHandle: "bottom", targetHandle: "top" },
];
