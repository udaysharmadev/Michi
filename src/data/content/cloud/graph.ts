import { RoadmapContentNode, RoadmapContentEdge } from '../../types';

export const nodes: RoadmapContentNode[] = [
  {
    "id": "fundamentals",
    "type": "section",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "1. Cloud Fundamentals",
      "color": "blue",
      "sectionNumber": 1
    }
  },
  {
    "id": "n_fund_1",
    "type": "topic",
    "parentId": "fundamentals",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Cloud Models (IaaS, PaaS, SaaS)",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_fund_2",
    "type": "topic",
    "parentId": "fundamentals",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Cloud Providers Overview",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_fund_3",
    "type": "topic",
    "parentId": "fundamentals",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Cost Management",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "blue",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "compute",
    "type": "section",
    "position": {
      "x": 700,
      "y": 0
    },
    "data": {
      "title": "2. Compute Services",
      "color": "purple",
      "sectionNumber": 2
    }
  },
  {
    "id": "n_comp_1",
    "type": "topic",
    "parentId": "compute",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Virtual Machines (EC2/GCE)",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_comp_2",
    "type": "topic",
    "parentId": "compute",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Serverless Computing (Lambda)",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_comp_3",
    "type": "topic",
    "parentId": "compute",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Container Services (ECS/GKE)",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "purple",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "storage",
    "type": "section",
    "position": {
      "x": 1400,
      "y": 0
    },
    "data": {
      "title": "3. Storage & Databases",
      "color": "green",
      "sectionNumber": 3
    }
  },
  {
    "id": "n_stor_1",
    "type": "topic",
    "parentId": "storage",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Object Storage (S3/GCS)",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "green",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_stor_2",
    "type": "topic",
    "parentId": "storage",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Block Storage (EBS)",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "green",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_stor_3",
    "type": "topic",
    "parentId": "storage",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Managed Databases (RDS)",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "green",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "network",
    "type": "section",
    "position": {
      "x": 1400,
      "y": 600
    },
    "data": {
      "title": "4. Networking & CDN",
      "color": "yellow",
      "sectionNumber": 4
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
      "title": "Virtual Private Cloud (VPC)",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "yellow",
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
      "title": "DNS (Route 53)",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "yellow",
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
      "title": "Content Delivery Networks (CDN)",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "yellow",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "security",
    "type": "section",
    "position": {
      "x": 700,
      "y": 600
    },
    "data": {
      "title": "5. Identity & Security",
      "color": "red",
      "sectionNumber": 5
    }
  },
  {
    "id": "n_sec_1",
    "type": "topic",
    "parentId": "security",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "IAM (Identity Access Management)",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "red",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_sec_2",
    "type": "topic",
    "parentId": "security",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Encryption & KMS",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "red",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_sec_3",
    "type": "topic",
    "parentId": "security",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Compliance & Auditing",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "red",
      "row": 1,
      "col": 0
    }
  },
  {
    "id": "architecture",
    "type": "section",
    "position": {
      "x": 0,
      "y": 600
    },
    "data": {
      "title": "6. High Availability",
      "color": "orange",
      "sectionNumber": 6
    }
  },
  {
    "id": "n_arch_1",
    "type": "topic",
    "parentId": "architecture",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Multi-AZ & Regions",
      "difficulty": "Beginner",
      "icon": "SiReact",
      "sectionColor": "orange",
      "row": 0,
      "col": 0
    }
  },
  {
    "id": "n_arch_2",
    "type": "topic",
    "parentId": "architecture",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Auto Scaling",
      "difficulty": "Intermediate",
      "icon": "SiReact",
      "sectionColor": "orange",
      "row": 0,
      "col": 1
    }
  },
  {
    "id": "n_arch_3",
    "type": "topic",
    "parentId": "architecture",
    "extent": "parent",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "title": "Disaster Recovery",
      "difficulty": "Advanced",
      "icon": "SiReact",
      "sectionColor": "orange",
      "row": 1,
      "col": 0
    }
  }
] as RoadmapContentNode[];

export const edges: RoadmapContentEdge[] = [
  {
    "id": "e_n_fund_1-n_fund_2",
    "source": "n_fund_1",
    "target": "n_fund_2"
  },
  {
    "id": "e_n_fund_2-n_fund_3",
    "source": "n_fund_2",
    "target": "n_fund_3"
  },
  {
    "id": "e_n_comp_1-n_comp_2",
    "source": "n_comp_1",
    "target": "n_comp_2"
  },
  {
    "id": "e_n_comp_2-n_comp_3",
    "source": "n_comp_2",
    "target": "n_comp_3"
  },
  {
    "id": "e_n_fund_3-n_comp_1",
    "source": "n_fund_3",
    "target": "n_comp_1"
  },
  {
    "id": "e_n_stor_1-n_stor_2",
    "source": "n_stor_1",
    "target": "n_stor_2"
  },
  {
    "id": "e_n_stor_2-n_stor_3",
    "source": "n_stor_2",
    "target": "n_stor_3"
  },
  {
    "id": "e_n_comp_3-n_stor_1",
    "source": "n_comp_3",
    "target": "n_stor_1"
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
    "id": "e_n_stor_3-n_net_1",
    "source": "n_stor_3",
    "target": "n_net_1"
  },
  {
    "id": "e_n_sec_1-n_sec_2",
    "source": "n_sec_1",
    "target": "n_sec_2"
  },
  {
    "id": "e_n_sec_2-n_sec_3",
    "source": "n_sec_2",
    "target": "n_sec_3"
  },
  {
    "id": "e_n_net_3-n_sec_1",
    "source": "n_net_3",
    "target": "n_sec_1"
  },
  {
    "id": "e_n_arch_1-n_arch_2",
    "source": "n_arch_1",
    "target": "n_arch_2"
  },
  {
    "id": "e_n_arch_2-n_arch_3",
    "source": "n_arch_2",
    "target": "n_arch_3"
  },
  {
    "id": "e_n_sec_3-n_arch_1",
    "source": "n_sec_3",
    "target": "n_arch_1"
  }
] as RoadmapContentEdge[];
