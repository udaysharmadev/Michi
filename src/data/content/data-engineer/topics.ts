import { TopicData } from '../../types';

export const topics: Record<string, TopicData> = {
  "sql_advanced": {
    title: "Advanced SQL",
    whyLearnThis: "SQL is the core query language for data engineering, enabling complex aggregations, window operations, and analytical transformations.",
    whenIsItUsed: "Used daily for data extraction, transformation, reporting, and database management.",
    whereIsItUsed: "PostgreSQL, Snowflake, BigQuery, Amazon Redshift, Databricks SQL.",
    learningOutcomes: [
      "Master Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD).",
      "Write optimized Common Table Expressions (CTEs) and subqueries.",
      "Understand query execution plans and index optimizations (B-Tree, GIN, BRIN)."
    ],
    commonMistakes: [
      "Performing SELECT * on multi-terabyte data warehouse tables.",
      "Using correlated subqueries instead of efficient JOINs."
    ],
    realWorldApplications: [
      "Calculating 7-day rolling average revenue across millions of transaction records.",
      "Deduplicating streaming event logs using ROW_NUMBER() OVER (PARTITION BY id)."
    ],
    resources: [
      { title: "Advanced SQL Course (freeCodeCamp)", type: "video_en", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { title: "Advanced SQL in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=1XkO-E01g7Y" },
      { title: "Mode Analytics: Advanced SQL Tutorial", type: "official", url: "https://mode.com/sql-tutorial/sql-window-functions/" }
    ]
  },
  "nosql_dbs": {
    title: "NoSQL Databases",
    whyLearnThis: "NoSQL databases provide scale-out storage for semi-structured, document, key-value, and graph data.",
    whenIsItUsed: "Used for high-throughput real-time ingestion, caching, and flexible schema applications.",
    whereIsItUsed: "MongoDB, Apache Cassandra, DynamoDB, Redis, Neo4j.",
    learningOutcomes: [
      "Differentiate Document, Key-Value, Wide-Column, and Graph stores.",
      "Understand data modeling techniques for MongoDB & Cassandra.",
      "Manage secondary indexes and partition key strategies."
    ],
    commonMistakes: [
      "Attempting complex JOIN operations across NoSQL collections.",
      "Choosing single partition keys that lead to write hotspotting."
    ],
    realWorldApplications: [
      "Storing unstructured clickstream logs in MongoDB.",
      "Ingesting high-frequency IoT telemetry data into Apache Cassandra."
    ],
    resources: [
      { title: "NoSQL Databases Explained (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=iAdTs4hVK8E" },
      { title: "NoSQL & MongoDB in Hindi (Thapa Technical)", type: "video_hi", url: "https://www.youtube.com/watch?v=rU9ZOBc4w7M" },
      { title: "AWS: What is NoSQL?", type: "official", url: "https://aws.amazon.com/nosql/" }
    ]
  },
  "db_modeling": {
    title: "Data Modeling",
    whyLearnThis: "Data modeling structures analytical data for fast reporting, efficient storage, and clear business analytics.",
    whenIsItUsed: "When designing data warehouses, data marts, and OLAP analytics storage.",
    whereIsItUsed: "Snowflake, BigQuery, Redshift, dbt.",
    learningOutcomes: [
      "Design Dimensional Models (Star Schema, Snowflake Schema).",
      "Define Fact Tables vs Dimension Tables (SCD Type 1, 2, 3).",
      "Apply Data Vault 2.0 modeling for enterprise data lakes."
    ],
    commonMistakes: [
      "Using OLTP normalized schemas directly for analytical OLAP querying.",
      "Failing to track historical attribute changes with Slowly Changing Dimensions (SCD)."
    ],
    realWorldApplications: [
      "Building a Star Schema data warehouse for financial sales reporting.",
      "Designing dbt models to transform raw staging tables into business data marts."
    ],
    resources: [
      { title: "Data Modeling Course (Seattle Data Guy)", type: "video_en", url: "https://www.youtube.com/watch?v=_jf7KZqne-8" },
      { title: "Data Warehousing & Modeling in Hindi (Gate Smashers)", type: "video_hi", url: "https://www.youtube.com/watch?v=k-Yaq8AHlBU" },
      { title: "Kimball Group: Dimensional Modeling Techniques", type: "official", url: "https://www.kimballgroup.com/data-warehouse-architecture/" }
    ]
  },
  "snowflake": {
    title: "Snowflake",
    whyLearnThis: "Snowflake is a leading cloud data platform with decoupled compute and storage, auto-scaling, and instant data sharing.",
    whenIsItUsed: "Used for enterprise cloud data warehousing, data lake queries, and BI analytics.",
    whereIsItUsed: "Cloud enterprise data stacks.",
    learningOutcomes: [
      "Understand Snowflake multi-cluster shared-data architecture.",
      "Manage Virtual Warehouses, Databases, Schemas, and Time Travel.",
      "Load data using COPY INTO, Snowpipe, and external stages (S3/GCS)."
    ],
    commonMistakes: [
      "Leaving large Virtual Warehouses running continuously without auto-suspend.",
      "Not optimizing clustering keys on multi-terabyte tables."
    ],
    realWorldApplications: [
      "Ingesting real-time logs via Snowpipe for instant executive dashboards.",
      "Sharing secure data shares with external business partners without copying files."
    ],
    resources: [
      { title: "Snowflake Architecture & Tutorial (freeCodeCamp)", type: "video_en", url: "https://www.youtube.com/watch?v=mP3QbYURT9k" },
      { title: "Snowflake Tutorial in Hindi (Krish Naik)", type: "video_hi", url: "https://www.youtube.com/watch?v=dDkynerzV-Q" },
      { title: "Snowflake Documentation", type: "official", url: "https://docs.snowflake.com/" }
    ]
  },
  "bigquery": {
    title: "BigQuery",
    whyLearnThis: "Google BigQuery is a serverless, highly scalable cloud data warehouse with built-in ML and SQL capabilities.",
    whenIsItUsed: "Used for massive-scale analytics on Google Cloud Platform.",
    whereIsItUsed: "GCP environments, Looker, dbt.",
    learningOutcomes: [
      "Understand BigQuery's columnar storage (Dremel) and slots compute engine.",
      "Partition and cluster tables for cost and query optimization.",
      "Use BigQuery ML to train machine learning models using standard SQL."
    ],
    commonMistakes: [
      "Querying unpartitioned tables costing hundreds of dollars per query execution.",
      "Not using dry-run query options to estimate scanned data size."
    ],
    realWorldApplications: [
      "Analyzing petabytes of Google Analytics 4 event streams.",
      "Running SQL queries across billions of rows in seconds."
    ],
    resources: [
      { title: "Google BigQuery Tutorial (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=17oYw-y4WG8" },
      { title: "BigQuery in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=8nXwitiaoJo" },
      { title: "Google Cloud: BigQuery Documentation", type: "official", url: "https://cloud.google.com/bigquery/docs" }
    ]
  },
  "redshift": {
    title: "Amazon Redshift",
    whyLearnThis: "Amazon Redshift is AWS's fully managed, petabyte-scale cloud data warehouse integrated into the AWS ecosystem.",
    whenIsItUsed: "Used for enterprise data warehousing on AWS infrastructure.",
    whereIsItUsed: "AWS, Amazon QuickSight, AWS Glue.",
    learningOutcomes: [
      "Understand Redshift RA3 instances with managed storage.",
      "Configure Distribution Styles (KEY, EVEN, ALL) and Sort Keys.",
      "Query S3 data lakes directly using Redshift Spectrum."
    ],
    commonMistakes: [
      "Choosing incorrect distribution keys causing heavy network data reshuffling.",
      "Neglecting VACUUM and ANALYZE table maintenance tasks."
    ],
    realWorldApplications: [
      "Aggregating AWS S3 server logs into Redshift tables.",
      "Running complex financial reporting queries over historical data."
    ],
    resources: [
      { title: "Amazon Redshift Complete Guide (AWS)", type: "video_en", url: "https://www.youtube.com/watch?v=7bfOllAyxlg" },
      { title: "AWS Redshift in Hindi (WsCube Tech)", type: "video_hi", url: "https://www.youtube.com/watch?v=DQk8HOVlumI" },
      { title: "AWS Redshift Documentation", type: "official", url: "https://docs.aws.amazon.com/redshift/" }
    ]
  },
  "hadoop": {
    title: "Hadoop",
    whyLearnThis: "Apache Hadoop pioneered big data distributed processing and storage, laying the groundwork for modern data infrastructure.",
    whenIsItUsed: "Used in legacy big data clusters and enterprise data lake architectures.",
    whereIsItUsed: "HDFS, YARN, MapReduce, Cloudera.",
    learningOutcomes: [
      "Understand HDFS architecture (NameNode, DataNode, Block storage).",
      "Manage cluster resources with YARN (ResourceManager, NodeManager).",
      "Explain the evolution from MapReduce to Apache Spark."
    ],
    commonMistakes: [
      "Storing millions of tiny files in HDFS causing NameNode memory exhaustion.",
      "Attempting low-latency real-time queries over HDFS."
    ],
    realWorldApplications: [
      "Storing multi-petabyte historical archive data in enterprise HDFS clusters.",
      "Processing batch data jobs with Hadoop YARN scheduling."
    ],
    resources: [
      { title: "Hadoop Architecture (Edureka)", type: "video_en", url: "https://www.youtube.com/watch?v=aReuLtY0YMI" },
      { title: "Hadoop Tutorial in Hindi (Gate Smashers)", type: "video_hi", url: "https://www.youtube.com/watch?v=k-Yaq8AHlBU" },
      { title: "Apache Hadoop Documentation", type: "official", url: "https://hadoop.apache.org/docs/current/" }
    ]
  },
  "spark": {
    title: "Apache Spark",
    whyLearnThis: "Apache Spark is the unified engine for large-scale distributed data processing, ETL pipelines, and machine learning.",
    whenIsItUsed: "When processing multi-gigabyte to petabyte datasets in memory.",
    whereIsItUsed: "PySpark, Databricks, AWS EMR, GCP Dataproc.",
    learningOutcomes: [
      "Master Spark DataFrames, Datasets, and RDDs.",
      "Understand PySpark transformations (map, filter, groupBy) vs actions (count, collect, save).",
      "Optimize Spark jobs (partitioning, broadcasting, shuffling, memory management)."
    ],
    commonMistakes: [
      "Calling .collect() on massive DataFrames causing driver OutOfMemory (OOM) crashes.",
      "Neglecting broadcast joins for large-to-small table joins."
    ],
    realWorldApplications: [
      "Processing 500GB of daily clickstream logs using PySpark on Databricks.",
      "Feature engineering pipelines for machine learning models."
    ],
    resources: [
      { title: "Apache Spark & PySpark Course (freeCodeCamp)", type: "video_en", url: "https://www.youtube.com/watch?v=_C8kWso4neU" },
      { title: "PySpark Tutorial in Hindi (Krish Naik)", type: "video_hi", url: "https://www.youtube.com/watch?v=dDkynerzV-Q" },
      { title: "Apache Spark Documentation", type: "official", url: "https://spark.apache.org/docs/latest/" }
    ]
  },
  "kafka": {
    title: "Apache Kafka",
    whyLearnThis: "Apache Kafka is the distributed event streaming platform used for real-time data pipelines and event-driven architectures.",
    whenIsItUsed: "Used for high-throughput stream processing, log aggregation, and real-time message brokering.",
    whereIsItUsed: "Confluent, Kafka Clusters, Event Streaming infrastructure.",
    learningOutcomes: [
      "Understand Topics, Partitions, Producers, Consumers, Consumer Groups, and Brokers.",
      "Configure log retention, replication factors, and partition keys.",
      "Build real-time streaming apps with Kafka Streams & KSQL."
    ],
    commonMistakes: [
      "Under-partitioning topics causing consumer group bottlenecking.",
      "Not handling consumer rebalancing smoothly."
    ],
    realWorldApplications: [
      "Streaming financial transactions in real-time for fraud detection engines.",
      "Decoupling microservice notifications across enterprise backends."
    ],
    resources: [
      { title: "Apache Kafka Complete Course (Stephane Maarek)", type: "video_en", url: "https://www.youtube.com/watch?v=R8_veQiYBjU" },
      { title: "Apache Kafka in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
      { title: "Apache Kafka Official Documentation", type: "official", url: "https://kafka.apache.org/documentation/" }
    ]
  },
  "flink": {
    title: "Apache Flink",
    whyLearnThis: "Apache Flink provides stateful stream processing with true event-time processing and low-latency computation.",
    whenIsItUsed: "When processing continuous real-time data streams requiring stateful windowing.",
    whereIsItUsed: "Real-time analytics, event-driven applications, anomaly detection.",
    learningOutcomes: [
      "Understand Stream & Batch processing unification.",
      "Master Event Time vs Processing Time and Watermarks.",
      "Manage Flink State Backends (RocksDB) and Checkpointing."
    ],
    commonMistakes: [
      "Confusing micro-batching (Spark Streaming) with true record-by-record streaming (Flink).",
      "Failing to tune watermarks for out-of-order event streams."
    ],
    realWorldApplications: [
      "Real-time fraud detection on credit card swipes in under 10 milliseconds.",
      "Calculating continuous sliding window metrics for gaming leaderboards."
    ],
    resources: [
      { title: "Apache Flink Stream Processing (Ververica)", type: "video_en", url: "https://www.youtube.com/watch?v=nfMANR13ZSA" },
      { title: "Apache Flink Explained in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
      { title: "Apache Flink Documentation", type: "official", url: "https://nightlies.apache.org/flink/flink-docs-stable/" }
    ]
  },
  "airflow": {
    title: "Apache Airflow",
    whyLearnThis: "Apache Airflow is the industry-standard workflow orchestration platform for scheduling and monitoring data pipelines.",
    whenIsItUsed: "Used to author, schedule, and monitor complex batch data pipelines as Directed Acyclic Graphs (DAGs).",
    whereIsItUsed: "Astronomer, AWS MWAA, GCP Cloud Composer.",
    learningOutcomes: [
      "Write Airflow DAGs in Python using Operators, Sensors, and TaskGroups.",
      "Understand Airflow Architecture (Webserver, Scheduler, Worker, Metadata DB).",
      "Implement XComs, dynamic DAG generation, and catchup configurations."
    ],
    commonMistakes: [
      "Executing heavy data transformation computations directly inside the Airflow worker process.",
      "Top-level code execution inside DAG files slowing down the Airflow scheduler."
    ],
    realWorldApplications: [
      "Orchestrating nightly ETL jobs: Extract from Postgres -> Transform via Spark -> Load to Snowflake.",
      "Triggering dbt data transformation models on schedule."
    ],
    resources: [
      { title: "Apache Airflow Course (Marc Lamberti)", type: "video_en", url: "https://www.youtube.com/watch?v=K9AnJ9_ZAXE" },
      { title: "Apache Airflow in Hindi (Krish Naik)", type: "video_hi", url: "https://www.youtube.com/watch?v=IiczxlbQb8s" },
      { title: "Apache Airflow Documentation", type: "official", url: "https://airflow.apache.org/docs/" }
    ]
  },
  "dagster": {
    title: "Dagster & Prefect",
    whyLearnThis: "Modern data orchestrators bring software engineering best practices like data asset-centric pipelines and native testing to data workflows.",
    whenIsItUsed: "Used as next-generation alternatives to Apache Airflow.",
    whereIsItUsed: "Modern data stack infrastructure.",
    learningOutcomes: [
      "Build Software-Defined Assets (SDAs) in Dagster.",
      "Implement type checking, automated data testing, and lineage tracking.",
      "Deploy Prefect flows with dynamic task mapping."
    ],
    commonMistakes: [
      "Treating data orchestration purely as task scheduling without monitoring data asset health.",
      "Failing to leverage local test execution before deploying to orchestrators."
    ],
    realWorldApplications: [
      "Managing data lineage and data quality testing across dbt and Snowflake.",
      "Orchestrating machine learning training pipelines with Dagster assets."
    ],
    resources: [
      { title: "Dagster vs Airflow (Seattle Data Guy)", type: "video_en", url: "https://www.youtube.com/watch?v=UCfLnv9X8jyHTe6gJ4hVBo9Q" },
      { title: "Modern Data Orchestration in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=IiczxlbQb8s" },
      { title: "Dagster Official Docs", type: "official", url: "https://docs.dagster.io/" }
    ]
  }
};
