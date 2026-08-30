import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "linux", type: "section", position: { x: 0, y: 0 }, data: { title: "Linux & OS Basics", sectionNumber: 1, color: "blue", sectionIcon: "terminal" } },
    { id: "n_linux_1", type: "topic", parentId: "linux", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Linux Fundamentals", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "blue", icon: "SiLinux", row: 0, col: 0 } },
    { id: "n_linux_2", type: "topic", parentId: "linux", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Shell Scripting", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "blue", icon: "terminal", row: 0, col: 1 } },
    { id: "n_linux_3", type: "topic", parentId: "linux", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Process Management", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "blue", icon: "cpu", row: 1, col: 0 } },

    { id: "network", type: "section", position: { x: 700, y: 0 }, data: { title: "Networking & Security", sectionNumber: 2, color: "purple", sectionIcon: "globe" } },
    { id: "n_net_1", type: "topic", parentId: "network", extent: "parent", position: { x: 0, y: 0 }, data: { title: "OSI Model & TCP/IP", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "purple", icon: "network", row: 0, col: 0 } },
    { id: "n_net_2", type: "topic", parentId: "network", extent: "parent", position: { x: 0, y: 0 }, data: { title: "DNS & HTTP/HTTPS", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "purple", icon: "globe", row: 0, col: 1 } },
    { id: "n_net_3", type: "topic", parentId: "network", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Firewalls & Load Balancers", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "purple", icon: "shield", row: 1, col: 0 } },

    { id: "containers", type: "section", position: { x: 1400, y: 0 }, data: { title: "Containers & Virtualization", sectionNumber: 3, color: "green", sectionIcon: "box" } },
    { id: "n_cont_1", type: "topic", parentId: "containers", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Docker Basics", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "green", icon: "SiDocker", row: 0, col: 0 } },
    { id: "n_cont_2", type: "topic", parentId: "containers", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Docker Compose", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "green", icon: "SiDocker", row: 0, col: 1 } },
    { id: "n_cont_3", type: "topic", parentId: "containers", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Container Security", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "green", icon: "shield", row: 1, col: 0 } },

    { id: "cicd", type: "section", position: { x: 1400, y: 600 }, data: { title: "CI/CD Pipelines", sectionNumber: 4, color: "yellow", sectionIcon: "git" } },
    { id: "n_ci_1", type: "topic", parentId: "cicd", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Git & GitHub Actions", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "yellow", icon: "SiGithub", row: 0, col: 0 } },
    { id: "n_ci_2", type: "topic", parentId: "cicd", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Jenkins / GitLab CI", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "yellow", icon: "SiJenkins", row: 0, col: 1 } },
    { id: "n_ci_3", type: "topic", parentId: "cicd", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Artifact Management", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "yellow", icon: "package", row: 1, col: 0 } },

    { id: "orchestration", type: "section", position: { x: 700, y: 600 }, data: { title: "Container Orchestration", sectionNumber: 5, color: "red", sectionIcon: "server" } },
    { id: "n_orch_1", type: "topic", parentId: "orchestration", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Kubernetes Architecture", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "red", icon: "SiKubernetes", row: 0, col: 0 } },
    { id: "n_orch_2", type: "topic", parentId: "orchestration", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Pods, Services, Ingress", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "red", icon: "SiKubernetes", row: 0, col: 1 } },
    { id: "n_orch_3", type: "topic", parentId: "orchestration", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Helm Charts", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "red", icon: "SiHelm", row: 1, col: 0 } },

    { id: "iac", type: "section", position: { x: 0, y: 600 }, data: { title: "Infrastructure as Code", sectionNumber: 6, color: "orange", sectionIcon: "code" } },
    { id: "n_iac_1", type: "topic", parentId: "iac", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Terraform Basics", difficulty: "Beginner", estimatedTime: "8 hrs", sectionColor: "orange", icon: "SiTerraform", row: 0, col: 0 } },
    { id: "n_iac_2", type: "topic", parentId: "iac", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Ansible Configuration", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", icon: "SiAnsible", row: 0, col: 1 } },
    { id: "n_iac_3", type: "topic", parentId: "iac", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Immutable Infrastructure", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "orange", icon: "lock", row: 1, col: 0 } },

    { id: "monitoring", type: "section", position: { x: 0, y: 1200 }, data: { title: "Monitoring & Logging", sectionNumber: 7, color: "blue", sectionIcon: "monitor" } },
    { id: "n_mon_1", type: "topic", parentId: "monitoring", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Prometheus & Metrics", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "blue", icon: "SiPrometheus", row: 0, col: 0 } },
    { id: "n_mon_2", type: "topic", parentId: "monitoring", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Grafana Dashboards", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "blue", icon: "SiGrafana", row: 0, col: 1 } },
    { id: "n_mon_3", type: "topic", parentId: "monitoring", extent: "parent", position: { x: 0, y: 0 }, data: { title: "ELK / EFK Stack", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "blue", icon: "SiElasticsearch", row: 1, col: 0 } },

    { id: "cloud", type: "section", position: { x: 700, y: 1200 }, data: { title: "Cloud Providers", sectionNumber: 8, color: "purple", sectionIcon: "cloud" } },
    { id: "n_cloud_1", type: "topic", parentId: "cloud", extent: "parent", position: { x: 0, y: 0 }, data: { title: "AWS Core Services", difficulty: "Beginner", estimatedTime: "10 hrs", sectionColor: "purple", icon: "SiAmazonwebservices", row: 0, col: 0 } },
    { id: "n_cloud_2", type: "topic", parentId: "cloud", extent: "parent", position: { x: 0, y: 0 }, data: { title: "IAM & Security Groups", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "purple", icon: "lock", row: 0, col: 1 } },
    { id: "n_cloud_3", type: "topic", parentId: "cloud", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Serverless & Functions", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "purple", icon: "zap", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_linux_1", target: "n_linux_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_linux_2", target: "n_linux_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_1", source: "n_linux_3", target: "n_net_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_net_1", target: "n_net_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_net_2", target: "n_net_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_2", source: "n_net_3", target: "n_cont_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_cont_1", target: "n_cont_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_cont_2", target: "n_cont_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_3", source: "n_cont_3", target: "n_ci_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_ci_1", target: "n_ci_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_ci_2", target: "n_ci_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_4", source: "n_ci_3", target: "n_orch_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_orch_1", target: "n_orch_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_orch_2", target: "n_orch_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_5", source: "n_orch_3", target: "n_iac_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e11", source: "n_iac_1", target: "n_iac_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e12", source: "n_iac_2", target: "n_iac_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_6", source: "n_iac_3", target: "n_mon_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e13", source: "n_mon_1", target: "n_mon_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e14", source: "n_mon_2", target: "n_mon_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_7", source: "n_mon_3", target: "n_cloud_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e15", source: "n_cloud_1", target: "n_cloud_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e16", source: "n_cloud_2", target: "n_cloud_3", sourceHandle: "right", targetHandle: "left" },
];
