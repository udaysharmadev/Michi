import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_sd_basics", type: "section", position: { x: 0, y: 0 }, data: { title: "Core Concepts", sectionNumber: 1, color: "blue", sectionIcon: "lightbulb" } },
    { id: "n_sdb_1", type: "topic", parentId: "s_sd_basics", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Scalability vs Performance", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", icon: "trending-up", row: 0, col: 0 } },
    { id: "n_sdb_2", type: "topic", parentId: "s_sd_basics", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Latency vs Throughput", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "blue", icon: "gauge", row: 0, col: 1 } },
    { id: "n_sdb_3", type: "topic", parentId: "s_sd_basics", extent: "parent", position: { x: 0, y: 0 }, data: { title: "CAP Theorem", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "blue", icon: "SiReact", row: 1, col: 0 } },

    { id: "s_sd_net", type: "section", position: { x: 576, y: 0 }, data: { title: "Networking & Communication", sectionNumber: 2, color: "purple", sectionIcon: "globe" } },
    { id: "n_sdn_1", type: "topic", parentId: "s_sd_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Load Balancing", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "purple", icon: "server", row: 0, col: 0 } },
    { id: "n_sdn_2", type: "topic", parentId: "s_sd_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "API Gateways", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", icon: "SiPostman", row: 0, col: 1 } },
    { id: "n_sdn_3", type: "topic", parentId: "s_sd_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "WebSockets & Long Polling", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "purple", icon: "Zap", row: 1, col: 0 } },

    { id: "s_sd_data", type: "section", position: { x: 1152, y: 0 }, data: { title: "Data & Storage", sectionNumber: 3, color: "green", sectionIcon: "database" } },
    { id: "n_sdd_1", type: "topic", parentId: "s_sd_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "SQL vs NoSQL", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "green", icon: "SiMongodb", row: 0, col: 0 } },
    { id: "n_sdd_2", type: "topic", parentId: "s_sd_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Database Sharding & Replication", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "green", icon: "server", row: 0, col: 1 } },
    { id: "n_sdd_3", type: "topic", parentId: "s_sd_data", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Consistent Hashing", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "green", icon: "hash", row: 1, col: 0 } },

    { id: "s_sd_cache", type: "section", position: { x: 0, y: 600 }, data: { title: "Caching & CDNs", sectionNumber: 4, color: "yellow", sectionIcon: "database" } },
    { id: "n_sdc_1", type: "topic", parentId: "s_sd_cache", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Caching Strategies", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "yellow", icon: "layers", row: 0, col: 0 } },
    { id: "n_sdc_2", type: "topic", parentId: "s_sd_cache", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Redis & Memcached", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "yellow", icon: "SiRedis", row: 0, col: 1 } },
    { id: "n_sdc_3", type: "topic", parentId: "s_sd_cache", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Content Delivery Networks (CDN)", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "yellow", icon: "SiCloudflare", row: 1, col: 0 } },

    { id: "s_sd_queue", type: "section", position: { x: 576, y: 600 }, data: { title: "Message Queues & Streams", sectionNumber: 5, color: "red", sectionIcon: "server" } },
    { id: "n_sdq_1", type: "topic", parentId: "s_sd_queue", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Message Queues (RabbitMQ)", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "red", icon: "SiRabbitmq", row: 0, col: 0 } },
    { id: "n_sdq_2", type: "topic", parentId: "s_sd_queue", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Event Streaming (Kafka)", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "red", icon: "SiApachekafka", row: 0, col: 1 } },
    { id: "n_sdq_3", type: "topic", parentId: "s_sd_queue", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Pub/Sub Model", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "red", icon: "radio", row: 1, col: 0 } },

    { id: "s_sd_arch", type: "section", position: { x: 1152, y: 600 }, data: { title: "Architecture Patterns", sectionNumber: 6, color: "orange", sectionIcon: "server" } },
    { id: "n_sdp_1", type: "topic", parentId: "s_sd_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Microservices Architecture", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "orange", icon: "grid", row: 0, col: 0 } },
    { id: "n_sdp_2", type: "topic", parentId: "s_sd_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Event-Driven Architecture", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "orange", icon: "zap", row: 0, col: 1 } },
    { id: "n_sdp_3", type: "topic", parentId: "s_sd_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Rate Limiting & Circuit Breakers", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "orange", icon: "shield", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_sdb_1", target: "n_sdb_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_sdb_2", target: "n_sdb_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_1", source: "n_sdb_3", target: "n_sdn_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_sdn_1", target: "n_sdn_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_sdn_2", target: "n_sdn_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_2", source: "n_sdn_3", target: "n_sdd_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_sdd_1", target: "n_sdd_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_sdd_2", target: "n_sdd_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_3", source: "n_sdd_3", target: "n_sdc_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_sdc_1", target: "n_sdc_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_sdc_2", target: "n_sdc_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_4", source: "n_sdc_3", target: "n_sdq_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_sdq_1", target: "n_sdq_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_sdq_2", target: "n_sdq_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_5", source: "n_sdq_3", target: "n_sdp_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e11", source: "n_sdp_1", target: "n_sdp_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e12", source: "n_sdp_2", target: "n_sdp_3", sourceHandle: "right", targetHandle: "left" },
];
