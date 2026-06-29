import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    "id": "software-architect",
    "type": "roadmap",
    "position": {
      "x": 400,
      "y": 50
    },
    "data": {
      "label": "softwareArchitect"
    }
  },
  {
    "id": "core_principles",
    "type": "section",
    "position": {
      "x": 400,
      "y": 200
    },
    "data": {
      "label": "Core Principles",
      "color": "blue"
    }
  },
  {
    "id": "solid_principles",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 280
    },
    "data": {
      "label": "SOLID Principles",
      "color": "blue"
    }
  },
  {
    "id": "cap_theorem",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 280
    },
    "data": {
      "label": "CAP Theorem",
      "color": "blue"
    }
  },
  {
    "id": "dry_kiss_yagni",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 400
    },
    "data": {
      "label": "DRY, KISS, YAGNI",
      "color": "blue"
    }
  },
  {
    "id": "architectural_patterns",
    "type": "section",
    "position": {
      "x": 400,
      "y": 590
    },
    "data": {
      "label": "Architectural Patterns",
      "color": "purple"
    }
  },
  {
    "id": "monolith_vs_microservices",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 670
    },
    "data": {
      "label": "Monolith vs Microservices",
      "color": "purple"
    }
  },
  {
    "id": "event_driven",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 670
    },
    "data": {
      "label": "Event-Driven Architecture",
      "color": "purple"
    }
  },
  {
    "id": "serverless",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 790
    },
    "data": {
      "label": "Serverless Architecture",
      "color": "purple"
    }
  },
  {
    "id": "system_design_components",
    "type": "section",
    "position": {
      "x": 400,
      "y": 980
    },
    "data": {
      "label": "System Components",
      "color": "green"
    }
  },
  {
    "id": "load_balancing",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1060
    },
    "data": {
      "label": "Load Balancing",
      "color": "green"
    }
  },
  {
    "id": "caching_strategies",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1060
    },
    "data": {
      "label": "Caching Strategies",
      "color": "green"
    }
  },
  {
    "id": "message_queues",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1180
    },
    "data": {
      "label": "Message Queues",
      "color": "green"
    }
  },
  {
    "id": "data_architecture",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1370
    },
    "data": {
      "label": "Data Architecture",
      "color": "orange"
    }
  },
  {
    "id": "sql_vs_nosql",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1450
    },
    "data": {
      "label": "SQL vs NoSQL",
      "color": "orange"
    }
  },
  {
    "id": "sharding_replication",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1450
    },
    "data": {
      "label": "Sharding & Replication",
      "color": "orange"
    }
  },
  {
    "id": "event_sourcing_cqrs",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1570
    },
    "data": {
      "label": "Event Sourcing & CQRS",
      "color": "orange"
    }
  },
  {
    "id": "security_reliability",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1760
    },
    "data": {
      "label": "Security & Reliability",
      "color": "red"
    }
  },
  {
    "id": "identity_access",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1840
    },
    "data": {
      "label": "Identity & Access (IAM)",
      "color": "red"
    }
  },
  {
    "id": "rate_limiting",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1840
    },
    "data": {
      "label": "Rate Limiting",
      "color": "red"
    }
  },
  {
    "id": "disaster_recovery",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1960
    },
    "data": {
      "label": "Disaster Recovery",
      "color": "red"
    }
  }
];

export const edges: Edge[] = [
  {
    "id": "e-software-architect-core_principles",
    "source": "software-architect",
    "target": "core_principles",
    "animated": true
  },
  {
    "id": "e-core_principles-solid_principles",
    "source": "core_principles",
    "target": "solid_principles"
  },
  {
    "id": "e-core_principles-cap_theorem",
    "source": "core_principles",
    "target": "cap_theorem"
  },
  {
    "id": "e-core_principles-dry_kiss_yagni",
    "source": "core_principles",
    "target": "dry_kiss_yagni"
  },
  {
    "id": "e-core_principles-architectural_patterns",
    "source": "core_principles",
    "target": "architectural_patterns",
    "animated": true
  },
  {
    "id": "e-architectural_patterns-monolith_vs_microservices",
    "source": "architectural_patterns",
    "target": "monolith_vs_microservices"
  },
  {
    "id": "e-architectural_patterns-event_driven",
    "source": "architectural_patterns",
    "target": "event_driven"
  },
  {
    "id": "e-architectural_patterns-serverless",
    "source": "architectural_patterns",
    "target": "serverless"
  },
  {
    "id": "e-architectural_patterns-system_design_components",
    "source": "architectural_patterns",
    "target": "system_design_components",
    "animated": true
  },
  {
    "id": "e-system_design_components-load_balancing",
    "source": "system_design_components",
    "target": "load_balancing"
  },
  {
    "id": "e-system_design_components-caching_strategies",
    "source": "system_design_components",
    "target": "caching_strategies"
  },
  {
    "id": "e-system_design_components-message_queues",
    "source": "system_design_components",
    "target": "message_queues"
  },
  {
    "id": "e-system_design_components-data_architecture",
    "source": "system_design_components",
    "target": "data_architecture",
    "animated": true
  },
  {
    "id": "e-data_architecture-sql_vs_nosql",
    "source": "data_architecture",
    "target": "sql_vs_nosql"
  },
  {
    "id": "e-data_architecture-sharding_replication",
    "source": "data_architecture",
    "target": "sharding_replication"
  },
  {
    "id": "e-data_architecture-event_sourcing_cqrs",
    "source": "data_architecture",
    "target": "event_sourcing_cqrs"
  },
  {
    "id": "e-data_architecture-security_reliability",
    "source": "data_architecture",
    "target": "security_reliability",
    "animated": true
  },
  {
    "id": "e-security_reliability-identity_access",
    "source": "security_reliability",
    "target": "identity_access"
  },
  {
    "id": "e-security_reliability-rate_limiting",
    "source": "security_reliability",
    "target": "rate_limiting"
  },
  {
    "id": "e-security_reliability-disaster_recovery",
    "source": "security_reliability",
    "target": "disaster_recovery"
  }
];
