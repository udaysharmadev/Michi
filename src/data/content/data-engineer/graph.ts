import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    "id": "data-engineer",
    "type": "roadmap",
    "position": {
      "x": 400,
      "y": 50
    },
    "data": {
      "label": "dataEngineer"
    }
  },
  {
    "id": "db_fundamentals",
    "type": "section",
    "position": {
      "x": 400,
      "y": 200
    },
    "data": {
      "label": "Database Fundamentals",
      "color": "blue"
    }
  },
  {
    "id": "sql_advanced",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 280
    },
    "data": {
      "label": "Advanced SQL",
      "color": "blue"
    }
  },
  {
    "id": "nosql_dbs",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 280
    },
    "data": {
      "label": "NoSQL Databases",
      "color": "blue"
    }
  },
  {
    "id": "db_modeling",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 400
    },
    "data": {
      "label": "Data Modeling",
      "color": "blue"
    }
  },
  {
    "id": "data_warehousing",
    "type": "section",
    "position": {
      "x": 400,
      "y": 590
    },
    "data": {
      "label": "Data Warehousing",
      "color": "purple"
    }
  },
  {
    "id": "snowflake",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 670
    },
    "data": {
      "label": "Snowflake",
      "color": "purple"
    }
  },
  {
    "id": "bigquery",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 670
    },
    "data": {
      "label": "BigQuery",
      "color": "purple"
    }
  },
  {
    "id": "redshift",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 790
    },
    "data": {
      "label": "Amazon Redshift",
      "color": "purple"
    }
  },
  {
    "id": "batch_processing",
    "type": "section",
    "position": {
      "x": 400,
      "y": 980
    },
    "data": {
      "label": "Batch Processing",
      "color": "green"
    }
  },
  {
    "id": "hadoop",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1060
    },
    "data": {
      "label": "Hadoop",
      "color": "green"
    }
  },
  {
    "id": "spark",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1060
    },
    "data": {
      "label": "Apache Spark",
      "color": "green"
    }
  },
  {
    "id": "mapreduce",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1180
    },
    "data": {
      "label": "MapReduce",
      "color": "green"
    }
  },
  {
    "id": "stream_processing",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1370
    },
    "data": {
      "label": "Stream Processing",
      "color": "orange"
    }
  },
  {
    "id": "kafka",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1450
    },
    "data": {
      "label": "Apache Kafka",
      "color": "orange"
    }
  },
  {
    "id": "flink",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1450
    },
    "data": {
      "label": "Apache Flink",
      "color": "orange"
    }
  },
  {
    "id": "spark_streaming",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1570
    },
    "data": {
      "label": "Spark Streaming",
      "color": "orange"
    }
  },
  {
    "id": "orchestration",
    "type": "section",
    "position": {
      "x": 400,
      "y": 1760
    },
    "data": {
      "label": "Data Orchestration",
      "color": "red"
    }
  },
  {
    "id": "airflow",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1840
    },
    "data": {
      "label": "Apache Airflow",
      "color": "red"
    }
  },
  {
    "id": "dagster",
    "type": "topic",
    "position": {
      "x": 650,
      "y": 1840
    },
    "data": {
      "label": "Dagster",
      "color": "red"
    }
  },
  {
    "id": "prefect",
    "type": "topic",
    "position": {
      "x": 150,
      "y": 1960
    },
    "data": {
      "label": "Prefect",
      "color": "red"
    }
  }
];

export const edges: Edge[] = [
  {
    "id": "e-data-engineer-db_fundamentals",
    "source": "data-engineer",
    "target": "db_fundamentals",
    "animated": true
  },
  {
    "id": "e-db_fundamentals-sql_advanced",
    "source": "db_fundamentals",
    "target": "sql_advanced"
  },
  {
    "id": "e-db_fundamentals-nosql_dbs",
    "source": "db_fundamentals",
    "target": "nosql_dbs"
  },
  {
    "id": "e-db_fundamentals-db_modeling",
    "source": "db_fundamentals",
    "target": "db_modeling"
  },
  {
    "id": "e-db_fundamentals-data_warehousing",
    "source": "db_fundamentals",
    "target": "data_warehousing",
    "animated": true
  },
  {
    "id": "e-data_warehousing-snowflake",
    "source": "data_warehousing",
    "target": "snowflake"
  },
  {
    "id": "e-data_warehousing-bigquery",
    "source": "data_warehousing",
    "target": "bigquery"
  },
  {
    "id": "e-data_warehousing-redshift",
    "source": "data_warehousing",
    "target": "redshift"
  },
  {
    "id": "e-data_warehousing-batch_processing",
    "source": "data_warehousing",
    "target": "batch_processing",
    "animated": true
  },
  {
    "id": "e-batch_processing-hadoop",
    "source": "batch_processing",
    "target": "hadoop"
  },
  {
    "id": "e-batch_processing-spark",
    "source": "batch_processing",
    "target": "spark"
  },
  {
    "id": "e-batch_processing-mapreduce",
    "source": "batch_processing",
    "target": "mapreduce"
  },
  {
    "id": "e-batch_processing-stream_processing",
    "source": "batch_processing",
    "target": "stream_processing",
    "animated": true
  },
  {
    "id": "e-stream_processing-kafka",
    "source": "stream_processing",
    "target": "kafka"
  },
  {
    "id": "e-stream_processing-flink",
    "source": "stream_processing",
    "target": "flink"
  },
  {
    "id": "e-stream_processing-spark_streaming",
    "source": "stream_processing",
    "target": "spark_streaming"
  },
  {
    "id": "e-stream_processing-orchestration",
    "source": "stream_processing",
    "target": "orchestration",
    "animated": true
  },
  {
    "id": "e-orchestration-airflow",
    "source": "orchestration",
    "target": "airflow"
  },
  {
    "id": "e-orchestration-dagster",
    "source": "orchestration",
    "target": "dagster"
  },
  {
    "id": "e-orchestration-prefect",
    "source": "orchestration",
    "target": "prefect"
  }
];
