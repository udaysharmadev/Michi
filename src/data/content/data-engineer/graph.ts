import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_de_db", type: "section", position: { x: 0, y: 0 }, data: { title: "Database Fundamentals", sectionNumber: 1, color: "blue", sectionIcon: "database" } },
    { id: "n_de_1", type: "topic", parentId: "s_de_db", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Advanced SQL", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "blue", icon: "SiPostgresql", row: 0, col: 0 } },
    { id: "n_de_2", type: "topic", parentId: "s_de_db", extent: "parent", position: { x: 0, y: 0 }, data: { title: "NoSQL Databases", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "blue", icon: "SiMongodb", row: 0, col: 1 } },
    { id: "n_de_3", type: "topic", parentId: "s_de_db", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Data Modeling", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "blue", icon: "layout", row: 1, col: 0 } },

    { id: "s_de_dw", type: "section", position: { x: 828, y: 0 }, data: { title: "Data Warehousing", sectionNumber: 2, color: "purple", sectionIcon: "server" } },
    { id: "n_de_4", type: "topic", parentId: "s_de_dw", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Snowflake", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "purple", icon: "SiSnowflake", row: 0, col: 0 } },
    { id: "n_de_5", type: "topic", parentId: "s_de_dw", extent: "parent", position: { x: 0, y: 0 }, data: { title: "BigQuery", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "purple", icon: "SiGooglebigquery", row: 0, col: 1 } },
    { id: "n_de_6", type: "topic", parentId: "s_de_dw", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Amazon Redshift", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", icon: "SiAmazonwebservices", row: 1, col: 0 } },

    { id: "s_de_batch", type: "section", position: { x: 1656, y: 0 }, data: { title: "Batch Processing", sectionNumber: 3, color: "green", sectionIcon: "layers" } },
    { id: "n_de_7", type: "topic", parentId: "s_de_batch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Hadoop", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "green", icon: "SiApachehadoop", row: 0, col: 0 } },
    { id: "n_de_8", type: "topic", parentId: "s_de_batch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Apache Spark", difficulty: "Intermediate", estimatedTime: "10 hrs", sectionColor: "green", icon: "SiApachespark", row: 0, col: 1 } },
    { id: "n_de_9", type: "topic", parentId: "s_de_batch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "MapReduce", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "green", icon: "server", row: 1, col: 0 } },

    { id: "s_de_stream", type: "section", position: { x: 0, y: 600 }, data: { title: "Stream Processing", sectionNumber: 4, color: "orange", sectionIcon: "zap" } },
    { id: "n_de_10", type: "topic", parentId: "s_de_stream", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Apache Kafka", difficulty: "Intermediate", estimatedTime: "10 hrs", sectionColor: "orange", icon: "SiApachekafka", row: 0, col: 0 } },
    { id: "n_de_11", type: "topic", parentId: "s_de_stream", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Apache Flink", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "orange", icon: "SiApacheflink", row: 0, col: 1 } },
    { id: "n_de_12", type: "topic", parentId: "s_de_stream", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Spark Streaming", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "orange", icon: "SiApachespark", row: 1, col: 0 } },

    { id: "s_de_orch", type: "section", position: { x: 828, y: 600 }, data: { title: "Data Orchestration", sectionNumber: 5, color: "red", sectionIcon: "git" } },
    { id: "n_de_13", type: "topic", parentId: "s_de_orch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Apache Airflow", difficulty: "Intermediate", estimatedTime: "10 hrs", sectionColor: "red", icon: "SiApacheairflow", row: 0, col: 0 } },
    { id: "n_de_14", type: "topic", parentId: "s_de_orch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Dagster", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "red", icon: "SiDagster", row: 0, col: 1 } },
    { id: "n_de_15", type: "topic", parentId: "s_de_orch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Prefect", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "red", icon: "SiPrefect", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_de_1", target: "n_de_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_de_1", target: "n_de_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_1", source: "n_de_2", target: "n_de_4", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_de_4", target: "n_de_5", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_de_4", target: "n_de_6", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_2", source: "n_de_5", target: "n_de_7", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_de_7", target: "n_de_8", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_de_7", target: "n_de_9", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_3", source: "n_de_9", target: "n_de_10", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_de_10", target: "n_de_11", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_de_10", target: "n_de_12", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_4", source: "n_de_12", target: "n_de_13", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_de_13", target: "n_de_14", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_de_13", target: "n_de_15", sourceHandle: "bottom", targetHandle: "top" },
];
