import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    "id": "dba",
    "type": "roadmap",
    "position": {
      "x": 400,
      "y": 50
    },
    "data": {
      "label": "dba"
    }
  },
  {
    "id": "database_basics",
    "type": "section",
    "position": {
      "x": 400,
      "y": 200
    },
    "data": {
      "label": "Database Basics",
      "color": "blue"
    }
  },
  {
    "id": "relational_vs_non_relational",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 280
    },
    "data": {
      "label": "Relational vs Non-Relational",
      "color": "blue"
    }
  },
  {
    "id": "acid_properties",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 280
    },
    "data": {
      "label": "ACID Properties",
      "color": "blue"
    }
  },
  {
    "id": "sql_mastery",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 400
    },
    "data": {
      "label": "Advanced SQL Mastery",
      "color": "blue"
    }
  },
  {
    "id": "database_design",
    "type": "section",
    "position": {
      "x": 400,
      "y": 590
    },
    "data": {
      "label": "Database Design",
      "color": "purple"
    }
  },
  {
    "id": "normalization",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 670
    },
    "data": {
      "label": "Database Normalization",
      "color": "purple"
    }
  },
  {
    "id": "entity_relationship",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 670
    },
    "data": {
      "label": "Entity-Relationship Modeling",
      "color": "purple"
    }
  },
  {
    "id": "indexing_strategies",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 790
    },
    "data": {
      "label": "Indexing Strategies",
      "color": "purple"
    }
  },
  {
    "id": "performance_tuning",
    "type": "section",
    "position": {
      "x": 400,
      "y": 980
    },
    "data": {
      "label": "Performance Tuning",
      "color": "green"
    }
  },
  {
    "id": "query_optimization",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1060
    },
    "data": {
      "label": "Query Optimization",
      "color": "green"
    }
  },
  {
    "id": "execution_plans",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1060
    },
    "data": {
      "label": "Execution Plans",
      "color": "green"
    }
  },
  {
    "id": "caching_redis",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1180
    },
    "data": {
      "label": "Caching with Redis",
      "color": "green"
    }
  },
  {
    "id": "administration",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1370
    },
    "data": {
      "label": "Administration",
      "color": "orange"
    }
  },
  {
    "id": "backup_recovery",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1450
    },
    "data": {
      "label": "Backup & Recovery",
      "color": "orange"
    }
  },
  {
    "id": "user_management",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1450
    },
    "data": {
      "label": "User & Role Management",
      "color": "orange"
    }
  },
  {
    "id": "monitoring_alerts",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1570
    },
    "data": {
      "label": "Monitoring & Alerts",
      "color": "orange"
    }
  },
  {
    "id": "high_availability",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1760
    },
    "data": {
      "label": "High Availability",
      "color": "red"
    }
  },
  {
    "id": "replication",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1840
    },
    "data": {
      "label": "Database Replication",
      "color": "red"
    }
  },
  {
    "id": "clustering",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1840
    },
    "data": {
      "label": "Database Clustering",
      "color": "red"
    }
  },
  {
    "id": "cloud_databases",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1960
    },
    "data": {
      "label": "Cloud Databases (RDS, Aurora)",
      "color": "red"
    }
  }
];

export const edges: Edge[] = [
  {
    "id": "e-dba-database_basics",
    "source": "dba",
    "target": "database_basics",
    "animated": true
  },
  {
    "id": "e-database_basics-relational_vs_non_relational",
    "source": "database_basics",
    "target": "relational_vs_non_relational"
  },
  {
    "id": "e-database_basics-acid_properties",
    "source": "database_basics",
    "target": "acid_properties"
  },
  {
    "id": "e-database_basics-sql_mastery",
    "source": "database_basics",
    "target": "sql_mastery"
  },
  {
    "id": "e-database_basics-database_design",
    "source": "database_basics",
    "target": "database_design",
    "animated": true
  },
  {
    "id": "e-database_design-normalization",
    "source": "database_design",
    "target": "normalization"
  },
  {
    "id": "e-database_design-entity_relationship",
    "source": "database_design",
    "target": "entity_relationship"
  },
  {
    "id": "e-database_design-indexing_strategies",
    "source": "database_design",
    "target": "indexing_strategies"
  },
  {
    "id": "e-database_design-performance_tuning",
    "source": "database_design",
    "target": "performance_tuning",
    "animated": true
  },
  {
    "id": "e-performance_tuning-query_optimization",
    "source": "performance_tuning",
    "target": "query_optimization"
  },
  {
    "id": "e-performance_tuning-execution_plans",
    "source": "performance_tuning",
    "target": "execution_plans"
  },
  {
    "id": "e-performance_tuning-caching_redis",
    "source": "performance_tuning",
    "target": "caching_redis"
  },
  {
    "id": "e-performance_tuning-administration",
    "source": "performance_tuning",
    "target": "administration",
    "animated": true
  },
  {
    "id": "e-administration-backup_recovery",
    "source": "administration",
    "target": "backup_recovery"
  },
  {
    "id": "e-administration-user_management",
    "source": "administration",
    "target": "user_management"
  },
  {
    "id": "e-administration-monitoring_alerts",
    "source": "administration",
    "target": "monitoring_alerts"
  },
  {
    "id": "e-administration-high_availability",
    "source": "administration",
    "target": "high_availability",
    "animated": true
  },
  {
    "id": "e-high_availability-replication",
    "source": "high_availability",
    "target": "replication"
  },
  {
    "id": "e-high_availability-clustering",
    "source": "high_availability",
    "target": "clustering"
  },
  {
    "id": "e-high_availability-cloud_databases",
    "source": "high_availability",
    "target": "cloud_databases"
  }
];
