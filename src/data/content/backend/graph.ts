import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    // --- 1. Internet & Networking (Blue) ---
    { id: "s_int", type: "section", position: { x: 0, y: 0 }, data: { title: "Internet & Networking", sectionNumber: 1, color: "blue", sectionIcon: "globe" } },
    { id: "n_bint_1", type: "topic", parentId: "s_int", extent: "parent", position: { x: 0, y: 0 }, data: { title: "How the Internet Works", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", icon: "globe", row: 0, col: 0 } },
    { id: "n_bint_2", type: "topic", parentId: "s_int", extent: "parent", position: { x: 0, y: 0 }, data: { title: "HTTP / HTTPS", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "blue", row: 0, col: 1 } },
    { id: "n_bint_3", type: "topic", parentId: "s_int", extent: "parent", position: { x: 0, y: 0 }, data: { title: "DNS", difficulty: "Beginner", estimatedTime: "2 hrs", sectionColor: "blue", row: 1, col: 0 } },
    { id: "n_bint_4", type: "topic", parentId: "s_int", extent: "parent", position: { x: 0, y: 0 }, data: { title: "OSI Model", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "blue", row: 1, col: 1 } },

    // --- 2. Backend Languages (Purple) ---
    { id: "s_lang", type: "section", position: { x: 576, y: 0 }, data: { title: "Backend Languages", sectionNumber: 2, color: "purple", sectionIcon: "code" } },
    { id: "n_blang_1", type: "topic", parentId: "s_lang", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Node.js", difficulty: "Beginner", estimatedTime: "10 hrs", sectionColor: "purple", icon: "SiNodedotjs", row: 0, col: 0 } },
    { id: "n_blang_2", type: "topic", parentId: "s_lang", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Python", difficulty: "Beginner", estimatedTime: "15 hrs", sectionColor: "purple", icon: "SiPython", row: 0, col: 1 } },
    { id: "n_blang_3", type: "topic", parentId: "s_lang", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Java", difficulty: "Intermediate", estimatedTime: "20 hrs", sectionColor: "purple", icon: "SiJava", row: 1, col: 0 } },
    { id: "n_blang_4", type: "topic", parentId: "s_lang", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Go", difficulty: "Intermediate", estimatedTime: "12 hrs", sectionColor: "purple", icon: "SiGo", row: 1, col: 1 } },
    { id: "n_blang_5", type: "topic", parentId: "s_lang", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Rust", difficulty: "Advanced", estimatedTime: "25 hrs", sectionColor: "purple", icon: "SiRust", row: 2, col: 0 } },

    // --- 3. Relational Databases (Green) ---
    { id: "s_rdb", type: "section", position: { x: 1152, y: 0 }, data: { title: "Relational Databases", sectionNumber: 3, color: "green", sectionIcon: "database" } },
    { id: "n_rdb_1", type: "topic", parentId: "s_rdb", extent: "parent", position: { x: 0, y: 0 }, data: { title: "SQL Basics", difficulty: "Beginner", estimatedTime: "10 hrs", sectionColor: "green", row: 0, col: 0 } },
    { id: "n_rdb_2", type: "topic", parentId: "s_rdb", extent: "parent", position: { x: 0, y: 0 }, data: { title: "PostgreSQL", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "green", icon: "SiPostgresql", row: 0, col: 1 } },
    { id: "n_rdb_3", type: "topic", parentId: "s_rdb", extent: "parent", position: { x: 0, y: 0 }, data: { title: "MySQL", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "green", icon: "SiMysql", row: 1, col: 0 } },
    { id: "n_rdb_4", type: "topic", parentId: "s_rdb", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Database Design & Normalization", difficulty: "Advanced", estimatedTime: "12 hrs", sectionColor: "green", row: 1, col: 1 } },

    // --- 4. NoSQL Databases (Yellow) ---
    { id: "s_nosql", type: "section", position: { x: 1728, y: 0 }, data: { title: "NoSQL Databases", sectionNumber: 4, color: "yellow", sectionIcon: "database" } },
    { id: "n_nosql_1", type: "topic", parentId: "s_nosql", extent: "parent", position: { x: 0, y: 0 }, data: { title: "MongoDB", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "yellow", icon: "SiMongodb", row: 0, col: 0 } },
    { id: "n_nosql_2", type: "topic", parentId: "s_nosql", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Redis", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "yellow", icon: "SiRedis", row: 0, col: 1 } },
    { id: "n_nosql_3", type: "topic", parentId: "s_nosql", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Cassandra", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "yellow", row: 1, col: 0 } },

    // --- 5. APIs (Red) ---
    { id: "s_bapi", type: "section", position: { x: 0, y: 600 }, data: { title: "APIs", sectionNumber: 5, color: "red", sectionIcon: "api" } },
    { id: "n_bapi_1", type: "topic", parentId: "s_bapi", extent: "parent", position: { x: 0, y: 0 }, data: { title: "REST APIs", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "red", row: 0, col: 0 } },
    { id: "n_bapi_2", type: "topic", parentId: "s_bapi", extent: "parent", position: { x: 0, y: 0 }, data: { title: "GraphQL", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "red", icon: "SiGraphql", row: 0, col: 1 } },
    { id: "n_bapi_3", type: "topic", parentId: "s_bapi", extent: "parent", position: { x: 0, y: 0 }, data: { title: "gRPC", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "red", row: 1, col: 0 } },
    { id: "n_bapi_4", type: "topic", parentId: "s_bapi", extent: "parent", position: { x: 0, y: 0 }, data: { title: "WebSockets", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "red", row: 1, col: 1 } },

    // --- 6. Authentication & Security (Blue) ---
    { id: "s_auth", type: "section", position: { x: 576, y: 600 }, data: { title: "Authentication & Security", sectionNumber: 6, color: "blue", sectionIcon: "lock" } },
    { id: "n_auth_1", type: "topic", parentId: "s_auth", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Hashing & Salting", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "blue", row: 0, col: 0 } },
    { id: "n_auth_2", type: "topic", parentId: "s_auth", extent: "parent", position: { x: 0, y: 0 }, data: { title: "JWT & Session Auth", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "blue", row: 0, col: 1 } },
    { id: "n_auth_3", type: "topic", parentId: "s_auth", extent: "parent", position: { x: 0, y: 0 }, data: { title: "OAuth 2.0 & OIDC", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "blue", row: 1, col: 0 } },
    { id: "n_auth_4", type: "topic", parentId: "s_auth", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Web Security & CORS", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "blue", row: 1, col: 1 } },

    // --- 7. Caching & Message Brokers (Purple) ---
    { id: "s_cache", type: "section", position: { x: 1152, y: 600 }, data: { title: "Caching & Message Brokers", sectionNumber: 7, color: "purple", sectionIcon: "server" } },
    { id: "n_cache_1", type: "topic", parentId: "s_cache", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Caching Concepts", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", row: 0, col: 0 } },
    { id: "n_cache_2", type: "topic", parentId: "s_cache", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Redis Caching", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "purple", icon: "SiRedis", row: 0, col: 1 } },
    { id: "n_cache_3", type: "topic", parentId: "s_cache", extent: "parent", position: { x: 0, y: 0 }, data: { title: "RabbitMQ", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "purple", icon: "SiRabbitmq", row: 1, col: 0 } },
    { id: "n_cache_4", type: "topic", parentId: "s_cache", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Apache Kafka", difficulty: "Advanced", estimatedTime: "12 hrs", sectionColor: "purple", icon: "SiApachekafka", row: 1, col: 1 } },

    // --- 8. Web Servers & Proxies (Green) ---
    { id: "s_web", type: "section", position: { x: 1728, y: 600 }, data: { title: "Web Servers & Proxies", sectionNumber: 8, color: "green", sectionIcon: "server" } },
    { id: "n_web_1", type: "topic", parentId: "s_web", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Nginx", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "green", icon: "SiNginx", row: 0, col: 0 } },
    { id: "n_web_2", type: "topic", parentId: "s_web", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Apache", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "green", icon: "SiApache", row: 0, col: 1 } },
    { id: "n_web_3", type: "topic", parentId: "s_web", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Reverse Proxies & Load Balancers", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "green", row: 1, col: 0 } },

    // --- 9. Testing (Yellow) ---
    { id: "s_btest", type: "section", position: { x: 0, y: 1200 }, data: { title: "Testing", sectionNumber: 9, color: "yellow", sectionIcon: "check" } },
    { id: "n_btest_1", type: "topic", parentId: "s_btest", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Unit Testing", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "yellow", row: 0, col: 0 } },
    { id: "n_btest_2", type: "topic", parentId: "s_btest", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Integration Testing", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "yellow", row: 0, col: 1 } },
    { id: "n_btest_3", type: "topic", parentId: "s_btest", extent: "parent", position: { x: 0, y: 0 }, data: { title: "E2E Testing", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "yellow", row: 1, col: 0 } },

    // --- 10. CI/CD & Containers (Orange) ---
    { id: "s_cicd", type: "section", position: { x: 576, y: 1200 }, data: { title: "CI/CD & Containers", sectionNumber: 10, color: "orange", sectionIcon: "rocket" } },
    { id: "n_cicd_1", type: "topic", parentId: "s_cicd", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Docker Basics", difficulty: "Intermediate", estimatedTime: "8 hrs", sectionColor: "orange", icon: "SiDocker", row: 0, col: 0 } },
    { id: "n_cicd_2", type: "topic", parentId: "s_cicd", extent: "parent", position: { x: 0, y: 0 }, data: { title: "GitHub Actions / GitLab CI", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", row: 0, col: 1 } },
    { id: "n_cicd_3", type: "topic", parentId: "s_cicd", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Jenkins", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", icon: "SiJenkins", row: 1, col: 0 } },
    { id: "n_cicd_4", type: "topic", parentId: "s_cicd", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Kubernetes Basics", difficulty: "Advanced", estimatedTime: "12 hrs", sectionColor: "orange", icon: "SiKubernetes", row: 1, col: 1 } },

    // --- 11. Architecture (Red) ---
    { id: "s_arch", type: "section", position: { x: 1152, y: 1200 }, data: { title: "Architecture", sectionNumber: 11, color: "red", sectionIcon: "server" } },
    { id: "n_arch_1", type: "topic", parentId: "s_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Monolithic Architecture", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "red", row: 0, col: 0 } },
    { id: "n_arch_2", type: "topic", parentId: "s_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Microservices", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "red", row: 0, col: 1 } },
    { id: "n_arch_3", type: "topic", parentId: "s_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Serverless Architecture", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "red", row: 1, col: 0 } },
    { id: "n_arch_4", type: "topic", parentId: "s_arch", extent: "parent", position: { x: 0, y: 0 }, data: { title: "MVC Pattern", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "red", row: 1, col: 1 } },

    // --- 12. Cloud & Deployment (Blue) ---
    { id: "s_cloud", type: "section", position: { x: 1728, y: 1200 }, data: { title: "Cloud & Deployment", sectionNumber: 12, color: "blue", sectionIcon: "cloud" } },
    { id: "n_cloud_1", type: "topic", parentId: "s_cloud", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Linux Basics", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "blue", icon: "SiLinux", row: 0, col: 0 } },
    { id: "n_cloud_2", type: "topic", parentId: "s_cloud", extent: "parent", position: { x: 0, y: 0 }, data: { title: "AWS / GCP / Azure", difficulty: "Intermediate", estimatedTime: "12 hrs", sectionColor: "blue", icon: "SiAmazonwebservices", row: 0, col: 1 } },
    { id: "n_cloud_3", type: "topic", parentId: "s_cloud", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Server Provisioning", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "blue", row: 1, col: 0 } },
    { id: "n_cloud_4", type: "topic", parentId: "s_cloud", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Infrastructure as Code (Terraform)", difficulty: "Advanced", estimatedTime: "10 hrs", sectionColor: "blue", icon: "SiTerraform", row: 1, col: 1 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "be1", source: "n_bint_1", target: "n_bint_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be2", source: "n_bint_1", target: "n_bint_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be3", source: "n_bint_2", target: "n_bint_4", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be4", source: "s_int", target: "s_lang", sourceHandle: "right", targetHandle: "left" },

    { id: "be5", source: "n_blang_1", target: "n_blang_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be6", source: "n_blang_1", target: "n_blang_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be7", source: "n_blang_3", target: "n_blang_4", sourceHandle: "right", targetHandle: "left" },
    { id: "be8", source: "n_blang_3", target: "n_blang_5", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be9", source: "s_lang", target: "s_rdb", sourceHandle: "right", targetHandle: "left" },

    { id: "be10", source: "n_rdb_1", target: "n_rdb_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be11", source: "n_rdb_1", target: "n_rdb_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be12", source: "n_rdb_2", target: "n_rdb_4", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be13", source: "s_rdb", target: "s_nosql", sourceHandle: "right", targetHandle: "left" },

    { id: "be14", source: "n_nosql_1", target: "n_nosql_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be15", source: "n_nosql_1", target: "n_nosql_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be16", source: "s_nosql", target: "s_bapi", sourceHandle: "bottom", targetHandle: "top" },

    { id: "be17", source: "n_bapi_1", target: "n_bapi_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be18", source: "n_bapi_1", target: "n_bapi_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be19", source: "n_bapi_2", target: "n_bapi_4", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be20", source: "s_bapi", target: "s_auth", sourceHandle: "right", targetHandle: "left" },

    { id: "be21", source: "n_auth_1", target: "n_auth_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be22", source: "n_auth_1", target: "n_auth_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be23", source: "n_auth_2", target: "n_auth_4", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be24", source: "s_auth", target: "s_cache", sourceHandle: "right", targetHandle: "left" },

    { id: "be25", source: "n_cache_1", target: "n_cache_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be26", source: "n_cache_1", target: "n_cache_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be27", source: "n_cache_3", target: "n_cache_4", sourceHandle: "right", targetHandle: "left" },
    { id: "be28", source: "s_cache", target: "s_web", sourceHandle: "right", targetHandle: "left" },

    { id: "be29", source: "n_web_1", target: "n_web_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be30", source: "n_web_1", target: "n_web_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be31", source: "s_web", target: "s_btest", sourceHandle: "bottom", targetHandle: "top" },

    { id: "be32", source: "n_btest_1", target: "n_btest_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be33", source: "n_btest_1", target: "n_btest_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be34", source: "s_btest", target: "s_cicd", sourceHandle: "right", targetHandle: "left" },

    { id: "be35", source: "n_cicd_1", target: "n_cicd_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be36", source: "n_cicd_1", target: "n_cicd_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be37", source: "n_cicd_2", target: "n_cicd_4", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be38", source: "s_cicd", target: "s_arch", sourceHandle: "right", targetHandle: "left" },

    { id: "be39", source: "n_arch_1", target: "n_arch_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be40", source: "n_arch_1", target: "n_arch_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be41", source: "n_arch_3", target: "n_arch_4", sourceHandle: "right", targetHandle: "left" },
    { id: "be42", source: "s_arch", target: "s_cloud", sourceHandle: "right", targetHandle: "left" },

    { id: "be43", source: "n_cloud_1", target: "n_cloud_2", sourceHandle: "right", targetHandle: "left" },
    { id: "be44", source: "n_cloud_1", target: "n_cloud_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "be45", source: "n_cloud_2", target: "n_cloud_4", sourceHandle: "bottom", targetHandle: "top" },
];
