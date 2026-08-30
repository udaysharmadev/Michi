import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "fundamentals", type: "section", position: { x: 0, y: 0 }, data: { title: "Cloud Fundamentals", sectionNumber: 1, color: "blue", sectionIcon: "cloud" } },
    { id: "n_fund_1", type: "topic", parentId: "fundamentals", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Cloud Models (IaaS, PaaS, SaaS)", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "blue", icon: "layers", row: 0, col: 0 } },
    { id: "n_fund_2", type: "topic", parentId: "fundamentals", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Cloud Providers Overview", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "blue", icon: "SiAmazonwebservices", row: 0, col: 1 } },
    { id: "n_fund_3", type: "topic", parentId: "fundamentals", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Cost Management", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "blue", icon: "dollar-sign", row: 1, col: 0 } },

    { id: "compute", type: "section", position: { x: 700, y: 0 }, data: { title: "Compute Services", sectionNumber: 2, color: "purple", sectionIcon: "cpu" } },
    { id: "n_comp_1", type: "topic", parentId: "compute", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Virtual Machines (EC2/GCE)", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "purple", icon: "server", row: 0, col: 0 } },
    { id: "n_comp_2", type: "topic", parentId: "compute", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Serverless Computing (Lambda)", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "purple", icon: "SiAwslambda", row: 0, col: 1 } },
    { id: "n_comp_3", type: "topic", parentId: "compute", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Container Services (ECS/GKE)", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "purple", icon: "SiDocker", row: 1, col: 0 } },

    { id: "storage", type: "section", position: { x: 1400, y: 0 }, data: { title: "Storage & Databases", sectionNumber: 3, color: "green", sectionIcon: "database" } },
    { id: "n_stor_1", type: "topic", parentId: "storage", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Object Storage (S3/GCS)", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "green", icon: "SiAmazons3", row: 0, col: 0 } },
    { id: "n_stor_2", type: "topic", parentId: "storage", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Block Storage (EBS)", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "green", icon: "hard-drive", row: 0, col: 1 } },
    { id: "n_stor_3", type: "topic", parentId: "storage", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Managed Databases (RDS)", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "green", icon: "SiPostgresql", row: 1, col: 0 } },

    { id: "network", type: "section", position: { x: 1400, y: 600 }, data: { title: "Networking & CDN", sectionNumber: 4, color: "yellow", sectionIcon: "globe" } },
    { id: "n_net_1", type: "topic", parentId: "network", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Virtual Private Cloud (VPC)", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "yellow", icon: "network", row: 0, col: 0 } },
    { id: "n_net_2", type: "topic", parentId: "network", extent: "parent", position: { x: 0, y: 0 }, data: { title: "DNS (Route 53)", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "yellow", icon: "globe", row: 0, col: 1 } },
    { id: "n_net_3", type: "topic", parentId: "network", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Content Delivery Networks (CDN)", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "yellow", icon: "SiCloudflare", row: 1, col: 0 } },

    { id: "security", type: "section", position: { x: 700, y: 600 }, data: { title: "Identity & Security", sectionNumber: 5, color: "red", sectionIcon: "shield" } },
    { id: "n_sec_1", type: "topic", parentId: "security", extent: "parent", position: { x: 0, y: 0 }, data: { title: "IAM (Identity Access Management)", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "red", icon: "lock", row: 0, col: 0 } },
    { id: "n_sec_2", type: "topic", parentId: "security", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Encryption & KMS", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "red", icon: "key", row: 0, col: 1 } },
    { id: "n_sec_3", type: "topic", parentId: "security", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Compliance & Auditing", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "red", icon: "check-circle", row: 1, col: 0 } },

    { id: "architecture", type: "section", position: { x: 0, y: 600 }, data: { title: "High Availability", sectionNumber: 6, color: "orange", sectionIcon: "server" } },
    { id: "n_arch_1", type: "topic", parentId: "architecture", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Multi-AZ & Regions", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "orange", icon: "grid", row: 0, col: 0 } },
    { id: "n_arch_2", type: "topic", parentId: "architecture", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Auto Scaling", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "orange", icon: "trending-up", row: 0, col: 1 } },
    { id: "n_arch_3", type: "topic", parentId: "architecture", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Disaster Recovery", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "orange", icon: "refresh-cw", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_fund_1", target: "n_fund_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_fund_2", target: "n_fund_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_1", source: "n_fund_3", target: "n_comp_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_comp_1", target: "n_comp_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_comp_2", target: "n_comp_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_2", source: "n_comp_3", target: "n_stor_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_stor_1", target: "n_stor_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_stor_2", target: "n_stor_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_3", source: "n_stor_3", target: "n_net_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_net_1", target: "n_net_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_net_2", target: "n_net_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_4", source: "n_net_3", target: "n_sec_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_sec_1", target: "n_sec_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_sec_2", target: "n_sec_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_5", source: "n_sec_3", target: "n_arch_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e11", source: "n_arch_1", target: "n_arch_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e12", source: "n_arch_2", target: "n_arch_3", sourceHandle: "right", targetHandle: "left" },
];
