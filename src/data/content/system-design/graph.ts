import { RoadmapContentNode, RoadmapContentEdge } from '../../types';

export const nodes: RoadmapContentNode[] = [
  {
    "id": "basics",
    "type": "section",
    "position": {
      "x": 50,
      "y": 50
    },
    "data": {
      "title": "1. Core Concepts",
      "color": "blue"
    }
  },
  {
    "id": "n_sdb_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 150
    },
    "data": {
      "title": "Scalability vs Performance",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "basics"
    }
  },
  {
    "id": "n_sdb_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 250
    },
    "data": {
      "title": "Latency vs Throughput",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "basics"
    }
  },
  {
    "id": "n_sdb_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 350
    },
    "data": {
      "title": "CAP Theorem",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "basics"
    }
  },
  {
    "id": "networking",
    "type": "section",
    "position": {
      "x": 50,
      "y": 550
    },
    "data": {
      "title": "2. Networking & Comm.",
      "color": "purple"
    }
  },
  {
    "id": "n_sdn_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 650
    },
    "data": {
      "title": "Load Balancing",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "networking"
    }
  },
  {
    "id": "n_sdn_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 750
    },
    "data": {
      "title": "API Gateways",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "networking"
    }
  },
  {
    "id": "n_sdn_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 850
    },
    "data": {
      "title": "WebSockets & Long Polling",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "networking"
    }
  },
  {
    "id": "data",
    "type": "section",
    "position": {
      "x": 50,
      "y": 1050
    },
    "data": {
      "title": "3. Data & Storage",
      "color": "green"
    }
  },
  {
    "id": "n_sdd_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1150
    },
    "data": {
      "title": "SQL vs NoSQL",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "data"
    }
  },
  {
    "id": "n_sdd_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1250
    },
    "data": {
      "title": "Database Sharding & Replication",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "data"
    }
  },
  {
    "id": "n_sdd_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1350
    },
    "data": {
      "title": "Consistent Hashing",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "data"
    }
  },
  {
    "id": "caching",
    "type": "section",
    "position": {
      "x": 50,
      "y": 1550
    },
    "data": {
      "title": "4. Caching & CDNs",
      "color": "yellow"
    }
  },
  {
    "id": "n_sdc_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1650
    },
    "data": {
      "title": "Caching Strategies",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "caching"
    }
  },
  {
    "id": "n_sdc_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1750
    },
    "data": {
      "title": "Redis & Memcached",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "caching"
    }
  },
  {
    "id": "n_sdc_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1850
    },
    "data": {
      "title": "Content Delivery Networks (CDN)",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "caching"
    }
  },
  {
    "id": "queues",
    "type": "section",
    "position": {
      "x": 50,
      "y": 2050
    },
    "data": {
      "title": "5. Message Queues & Streams",
      "color": "red"
    }
  },
  {
    "id": "n_sdq_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2150
    },
    "data": {
      "title": "Message Queues (RabbitMQ)",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "queues"
    }
  },
  {
    "id": "n_sdq_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2250
    },
    "data": {
      "title": "Event Streaming (Kafka)",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "queues"
    }
  },
  {
    "id": "n_sdq_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2350
    },
    "data": {
      "title": "Pub/Sub Model",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "queues"
    }
  },
  {
    "id": "patterns",
    "type": "section",
    "position": {
      "x": 50,
      "y": 2550
    },
    "data": {
      "title": "6. Architecture Patterns",
      "color": "orange"
    }
  },
  {
    "id": "n_sdp_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2650
    },
    "data": {
      "title": "Microservices Architecture",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "patterns"
    }
  },
  {
    "id": "n_sdp_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2750
    },
    "data": {
      "title": "Event-Driven Architecture",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "patterns"
    }
  },
  {
    "id": "n_sdp_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2850
    },
    "data": {
      "title": "Rate Limiting & Circuit Breakers",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "patterns"
    }
  }
] as RoadmapContentNode[];

export const edges: RoadmapContentEdge[] = [
  {
    "id": "e_n_sdb_1-n_sdb_2",
    "source": "n_sdb_1",
    "target": "n_sdb_2"
  },
  {
    "id": "e_n_sdb_2-n_sdb_3",
    "source": "n_sdb_2",
    "target": "n_sdb_3"
  },
  {
    "id": "e_n_sdn_1-n_sdn_2",
    "source": "n_sdn_1",
    "target": "n_sdn_2"
  },
  {
    "id": "e_n_sdn_2-n_sdn_3",
    "source": "n_sdn_2",
    "target": "n_sdn_3"
  },
  {
    "id": "e_n_sdb_3-n_sdn_1",
    "source": "n_sdb_3",
    "target": "n_sdn_1"
  },
  {
    "id": "e_n_sdd_1-n_sdd_2",
    "source": "n_sdd_1",
    "target": "n_sdd_2"
  },
  {
    "id": "e_n_sdd_2-n_sdd_3",
    "source": "n_sdd_2",
    "target": "n_sdd_3"
  },
  {
    "id": "e_n_sdn_3-n_sdd_1",
    "source": "n_sdn_3",
    "target": "n_sdd_1"
  },
  {
    "id": "e_n_sdc_1-n_sdc_2",
    "source": "n_sdc_1",
    "target": "n_sdc_2"
  },
  {
    "id": "e_n_sdc_2-n_sdc_3",
    "source": "n_sdc_2",
    "target": "n_sdc_3"
  },
  {
    "id": "e_n_sdd_3-n_sdc_1",
    "source": "n_sdd_3",
    "target": "n_sdc_1"
  },
  {
    "id": "e_n_sdq_1-n_sdq_2",
    "source": "n_sdq_1",
    "target": "n_sdq_2"
  },
  {
    "id": "e_n_sdq_2-n_sdq_3",
    "source": "n_sdq_2",
    "target": "n_sdq_3"
  },
  {
    "id": "e_n_sdc_3-n_sdq_1",
    "source": "n_sdc_3",
    "target": "n_sdq_1"
  },
  {
    "id": "e_n_sdp_1-n_sdp_2",
    "source": "n_sdp_1",
    "target": "n_sdp_2"
  },
  {
    "id": "e_n_sdp_2-n_sdp_3",
    "source": "n_sdp_2",
    "target": "n_sdp_3"
  },
  {
    "id": "e_n_sdq_3-n_sdp_1",
    "source": "n_sdq_3",
    "target": "n_sdp_1"
  }
] as RoadmapContentEdge[];
