import { RoadmapContentNode, RoadmapContentEdge } from '../../types';

export const nodes: RoadmapContentNode[] = [
  {
    "id": "linux",
    "type": "section",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "1. Linux & OS Basics",
      "color": "blue",
      "sectionNumber": 1
    }
  },
  {
    "id": "n_linux_1",
    "type": "topic",
    "parentId": "linux",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Linux Fundamentals",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_linux_2",
    "type": "topic",
    "parentId": "linux",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Shell Scripting",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_linux_3",
    "type": "topic",
    "parentId": "linux",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Process Management",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "network",
    "type": "section",
    "position": {
      "x": 700,
      "y": 0
    },
    "data": {
      "title": "2. Networking & Security",
      "color": "purple",
      "sectionNumber": 2
    }
  },
  {
    "id": "n_net_1",
    "type": "topic",
    "parentId": "network",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "OSI Model & TCP/IP",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_net_2",
    "type": "topic",
    "parentId": "network",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "DNS & HTTP/HTTPS",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_net_3",
    "type": "topic",
    "parentId": "network",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Firewalls & Load Balancers",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "containers",
    "type": "section",
    "position": {
      "x": 1400,
      "y": 0
    },
    "data": {
      "title": "3. Containers & Virtualization",
      "color": "green",
      "sectionNumber": 3
    }
  },
  {
    "id": "n_cont_1",
    "type": "topic",
    "parentId": "containers",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Docker Basics",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "green",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_cont_2",
    "type": "topic",
    "parentId": "containers",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Docker Compose",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "green",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_cont_3",
    "type": "topic",
    "parentId": "containers",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Container Security",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "green",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "cicd",
    "type": "section",
    "position": {
      "x": 1400,
      "y": 600
    },
    "data": {
      "title": "4. CI/CD Pipelines",
      "color": "yellow",
      "sectionNumber": 4
    }
  },
  {
    "id": "n_ci_1",
    "type": "topic",
    "parentId": "cicd",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Git & GitHub Actions",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "yellow",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_ci_2",
    "type": "topic",
    "parentId": "cicd",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Jenkins / GitLab CI",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "yellow",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_ci_3",
    "type": "topic",
    "parentId": "cicd",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Artifact Management",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "yellow",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "orchestration",
    "type": "section",
    "position": {
      "x": 700,
      "y": 600
    },
    "data": {
      "title": "5. Container Orchestration",
      "color": "red",
      "sectionNumber": 5
    }
  },
  {
    "id": "n_orch_1",
    "type": "topic",
    "parentId": "orchestration",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Kubernetes Architecture",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "red",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_orch_2",
    "type": "topic",
    "parentId": "orchestration",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Pods, Services, Ingress",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "red",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_orch_3",
    "type": "topic",
    "parentId": "orchestration",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Helm Charts",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "red",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "iac",
    "type": "section",
    "position": {
      "x": 0,
      "y": 600
    },
    "data": {
      "title": "6. Infrastructure as Code",
      "color": "orange",
      "sectionNumber": 6
    }
  },
  {
    "id": "n_iac_1",
    "type": "topic",
    "parentId": "iac",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Terraform Basics",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "orange",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_iac_2",
    "type": "topic",
    "parentId": "iac",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Ansible Configuration",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "orange",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_iac_3",
    "type": "topic",
    "parentId": "iac",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Immutable Infrastructure",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "orange",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "monitoring",
    "type": "section",
    "position": {
      "x": 0,
      "y": 1200
    },
    "data": {
      "title": "7. Monitoring & Logging",
      "color": "blue",
      "sectionNumber": 7
    }
  },
  {
    "id": "n_mon_1",
    "type": "topic",
    "parentId": "monitoring",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Prometheus & Metrics",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_mon_2",
    "type": "topic",
    "parentId": "monitoring",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Grafana Dashboards",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_mon_3",
    "type": "topic",
    "parentId": "monitoring",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "ELK / EFK Stack",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "cloud",
    "type": "section",
    "position": {
      "x": 700,
      "y": 1200
    },
    "data": {
      "title": "8. Cloud Providers",
      "color": "purple",
      "sectionNumber": 8
    }
  },
  {
    "id": "n_cloud_1",
    "type": "topic",
    "parentId": "cloud",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "AWS Core Services",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_cloud_2",
    "type": "topic",
    "parentId": "cloud",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "IAM & Security Groups",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_cloud_3",
    "type": "topic",
    "parentId": "cloud",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Serverless & Functions",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 1,
      "col": 0
    }
  }
] as RoadmapContentNode[];

export const edges: RoadmapContentEdge[] = [
  {
    "id": "e_n_linux_1-n_linux_2",
    "source": "n_linux_1",
    "target": "n_linux_2"
  },
  {
    "id": "e_n_linux_2-n_linux_3",
    "source": "n_linux_2",
    "target": "n_linux_3"
  },
  {
    "id": "e_n_net_1-n_net_2",
    "source": "n_net_1",
    "target": "n_net_2"
  },
  {
    "id": "e_n_net_2-n_net_3",
    "source": "n_net_2",
    "target": "n_net_3"
  },
  {
    "id": "e_n_linux_3-n_net_1",
    "source": "n_linux_3",
    "target": "n_net_1"
  },
  {
    "id": "e_n_cont_1-n_cont_2",
    "source": "n_cont_1",
    "target": "n_cont_2"
  },
  {
    "id": "e_n_cont_2-n_cont_3",
    "source": "n_cont_2",
    "target": "n_cont_3"
  },
  {
    "id": "e_n_net_3-n_cont_1",
    "source": "n_net_3",
    "target": "n_cont_1"
  },
  {
    "id": "e_n_ci_1-n_ci_2",
    "source": "n_ci_1",
    "target": "n_ci_2"
  },
  {
    "id": "e_n_ci_2-n_ci_3",
    "source": "n_ci_2",
    "target": "n_ci_3"
  },
  {
    "id": "e_n_cont_3-n_ci_1",
    "source": "n_cont_3",
    "target": "n_ci_1"
  },
  {
    "id": "e_n_orch_1-n_orch_2",
    "source": "n_orch_1",
    "target": "n_orch_2"
  },
  {
    "id": "e_n_orch_2-n_orch_3",
    "source": "n_orch_2",
    "target": "n_orch_3"
  },
  {
    "id": "e_n_ci_3-n_orch_1",
    "source": "n_ci_3",
    "target": "n_orch_1"
  },
  {
    "id": "e_n_iac_1-n_iac_2",
    "source": "n_iac_1",
    "target": "n_iac_2"
  },
  {
    "id": "e_n_iac_2-n_iac_3",
    "source": "n_iac_2",
    "target": "n_iac_3"
  },
  {
    "id": "e_n_orch_3-n_iac_1",
    "source": "n_orch_3",
    "target": "n_iac_1"
  },
  {
    "id": "e_n_mon_1-n_mon_2",
    "source": "n_mon_1",
    "target": "n_mon_2"
  },
  {
    "id": "e_n_mon_2-n_mon_3",
    "source": "n_mon_2",
    "target": "n_mon_3"
  },
  {
    "id": "e_n_iac_3-n_mon_1",
    "source": "n_iac_3",
    "target": "n_mon_1"
  },
  {
    "id": "e_n_cloud_1-n_cloud_2",
    "source": "n_cloud_1",
    "target": "n_cloud_2"
  },
  {
    "id": "e_n_cloud_2-n_cloud_3",
    "source": "n_cloud_2",
    "target": "n_cloud_3"
  },
  {
    "id": "e_n_mon_3-n_cloud_1",
    "source": "n_mon_3",
    "target": "n_cloud_1"
  }
] as RoadmapContentEdge[];
