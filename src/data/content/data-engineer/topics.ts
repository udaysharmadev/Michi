import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "sql_advanced": {
    whyLearnThis: "SQL is the lingua franca of data. While data analysts use basic SELECT and JOIN statements, Data Engineers must write highly optimized, complex queries using Window Functions, CTEs, and index tuning to process terabytes of data efficiently.",
    whenIsItUsed: "Building ETL/ELT pipelines, transforming data in the warehouse (dbt), and optimizing slow queries.",
    whereIsItUsed: "PostgreSQL, Snowflake, BigQuery, Redshift.",
    whatComesNext: "NoSQL Databases",
    learningOutcomes: [
      "Master Window Functions (ROW_NUMBER, RANK, LEAD, LAG).",
      "Use Common Table Expressions (CTEs) to make complex queries readable.",
      "Understand query execution plans (EXPLAIN) and index optimization.",
      "Write aggregate queries with GROUPING SETS and CUBE.",
      "Handle JSON and array data types natively within SQL."
    ],
    commonMistakes: [
      "Using correlated subqueries instead of JOINs or Window Functions, resulting in O(N^2) performance.",
      "Failing to understand the difference between WHERE (pre-aggregation) and HAVING (post-aggregation).",
      "Overusing nested subqueries instead of CTEs, making the SQL unreadable and hard to debug."
    ],
    realWorldApplications: [
      "Using `ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY event_time DESC)` to find the most recent login for every user.",
      "Writing a dbt model that transforms raw JSON event logs into a clean, dimensional table.",
      "Analyzing a query plan to realize a sequential scan is occurring, and adding a compound index to speed the query up by 100x."
    ],
    resources: [
      { type: "official", title: "PostgreSQL Window Functions", url: "https://www.postgresql.org/docs/current/tutorial-window.html" },
      { type: "video_en", title: "Advanced SQL Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=-u-kCJmJHCk" },
      { type: "video_hi", title: "Advanced SQL Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=5peQThvQmQk" },
      { type: "article", title: "Use The Index, Luke! (SQL Indexing Guide)", url: "https://explain.dalibo.com/" },
      { type: "github", title: "SQL Style Guide", url: "https://github.com/mattm/sql-style-guide" },
      { type: "cheat_sheet", title: "Advanced SQL Cheat Sheet", url: "https://learnsql.com/blog/sql-basics-cheat-sheet/" },
      { type: "deep_dive", title: "Modern SQL Analytics", url: "https://modern-sql.com/" }
    ]
  },
  "nosql_dbs": {
    whyLearnThis: "Relational databases cannot handle unstructured data or scale horizontally without massive complexity. NoSQL databases provide flexible schemas, high write throughput, and global distribution.",
    whenIsItUsed: "Storing JSON logs, user sessions, real-time analytics, and wide-column data.",
    whereIsItUsed: "MongoDB (Document), Cassandra (Columnar), DynamoDB (Key-Value), Neo4j (Graph).",
    whatComesNext: "Database Modeling",
    learningOutcomes: [
      "Differentiate between Document, Key-Value, Column-Family, and Graph databases.",
      "Understand the CAP theorem and Eventual Consistency.",
      "Design a schema for a Document database (embedding vs referencing).",
      "Understand partition keys and sort keys in DynamoDB/Cassandra.",
      "Identify the use cases where NoSQL is a terrible choice."
    ],
    commonMistakes: [
      "Designing a NoSQL database schema exactly like a relational schema (normalizing everything), which destroys performance since NoSQL lacks efficient JOINs.",
      "Choosing a partition key that causes 'hot partitions' (e.g., partitioning by Date in a time-series app).",
      "Using NoSQL for highly relational data with strict ACID requirements (like financial ledgers)."
    ],
    realWorldApplications: [
      "Using Cassandra to ingest 1 million IoT sensor readings per second globally.",
      "Storing unstructured, highly variable product catalog data in MongoDB.",
      "Using a Graph database (Neo4j) to map complex fraud rings and social networks."
    ],
    resources: [
      { type: "official", title: "MongoDB Manual", url: "https://www.mongodb.com/docs/manual/" },
      { type: "video_en", title: "SQL vs NoSQL Explained (Exponent)", url: "https://www.youtube.com/watch?v=_Ss42Vb1SU4" },
      { type: "video_hi", title: "NoSQL Databases Hindi", url: "https://www.youtube.com/watch?v=KSFgVzKDP6g" },
      { type: "article", title: "Data Modeling in DynamoDB", url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html" },
      { type: "github", title: "System Design Database Primer", url: "https://github.com/donnemartin/system-design-primer#database" },
      { type: "cheat_sheet", title: "NoSQL DB Comparisons", url: "https://www.mongodb.com/nosql-explained" },
      { type: "deep_dive", title: "Designing Data-Intensive Applications (Book)", url: "https://dataintensive.net/" }
    ]
  },
  "db_modeling": {
    whyLearnThis: "Data modeling is the architectural blueprint of data engineering. A poorly modeled data warehouse will result in slow queries, massive cloud computing bills, and frustrated data analysts. You must understand how to model data for analytical workloads.",
    whenIsItUsed: "Designing Data Warehouses, building ETL pipelines, and structuring tables for BI tools.",
    whereIsItUsed: "Snowflake, BigQuery, dbt.",
    whatComesNext: "Snowflake",
    learningOutcomes: [
      "Understand Dimensional Modeling (Kimball Methodology).",
      "Differentiate between Fact Tables (events/metrics) and Dimension Tables (context).",
      "Design Star Schemas and Snowflake Schemas.",
      "Understand Slowly Changing Dimensions (SCD Types 1, 2, and 3).",
      "Transition from normalized (OLTP) models to denormalized (OLAP) models."
    ],
    commonMistakes: [
      "Applying 3rd Normal Form (3NF) to a Data Warehouse, resulting in queries that require 15 JOINs and take hours to run.",
      "Failing to implement SCD Type 2, resulting in the loss of historical context (e.g., if a customer moves states, past sales are attributed to their new state).",
      "Mixing facts and dimensions in the same table."
    ],
    realWorldApplications: [
      "Designing a Star Schema for an e-commerce company: a `fact_sales` table surrounded by `dim_customer`, `dim_product`, and `dim_date` tables.",
      "Using SCD Type 2 to track a user's subscription tier changes over time, allowing analysts to query historical revenue accurately.",
      "Using dbt (data build tool) to automate the transformation of raw data into a Kimball dimensional model."
    ],
    resources: [
      { type: "official", title: "Kimball Dimensional Modeling Techniques", url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/" },
      { type: "video_en", title: "Data Modeling Masterclass For Data Engineers", url: "https://www.youtube.com/watch?v=K7C1sWKQU-o" },
      { type: "video_hi", title: "Star Schema and Data Modeling Hindi", url: "https://www.youtube.com/watch?v=tmT3hbl8i2Q" },
      { type: "article", title: "dbt: What is Dimensional Modeling?", url: "https://www.getdbt.com/analytics-engineering/modular-data-modeling-technique/" },
      { type: "github", title: "Awesome Data Engineering", url: "https://github.com/igorbarinov/awesome-data-engineering" },
      { type: "cheat_sheet", title: "Slowly Changing Dimensions (SCD) Cheat Sheet", url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/" },
      { type: "deep_dive", title: "The Data Warehouse Toolkit (Ralph Kimball)", url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/" }
    ]
  },
  "snowflake": {
    whyLearnThis: "Snowflake revolutionized the Data Warehouse by separating compute and storage, allowing infinite, instant scalability. It is one of the most dominant modern data platforms.",
    whenIsItUsed: "Building modern cloud data warehouses, sharing data securely between organizations, and running complex analytical SQL.",
    whereIsItUsed: "Enterprise Data Teams, ELT architectures.",
    whatComesNext: "BigQuery",
    learningOutcomes: [
      "Understand Snowflake's architecture: Storage, Compute (Virtual Warehouses), and Cloud Services.",
      "Explain the separation of compute and storage and why it saves money.",
      "Use Snowflake Time Travel to query historical data and recover dropped tables.",
      "Understand Micro-partitions and Data Clustering for query optimization.",
      "Load data efficiently using Snowpipe."
    ],
    commonMistakes: [
      "Leaving massive Virtual Warehouses running 24/7 when no queries are executing, wasting thousands of dollars.",
      "Creating traditional indexes (Snowflake doesn't use indexes; it uses micro-partitions).",
      "Failing to set up auto-suspend and auto-resume policies on Virtual Warehouses."
    ],
    realWorldApplications: [
      "Scaling a Virtual Warehouse from Medium to 4XL instantly to run a massive month-end financial report in 5 minutes, then scaling back down.",
      "Using Time Travel to 'undrop' a critical table that a junior engineer accidentally deleted.",
      "Securely sharing live data with an external partner organization via Snowflake Data Sharing without copying files."
    ],
    resources: [
      { type: "official", title: "Snowflake Documentation", url: "https://docs.snowflake.com/" },
      { type: "video_en", title: "Snowflake Architecture Explained (Data Engineer Academy)", url: "https://www.youtube.com/watch?v=mP3QbYURT9k" },
      { type: "video_hi", title: "Snowflake Data Warehouse Hindi", url: "https://www.youtube.com/watch?v=V_ssdKJn94s" },
      { type: "article", title: "Snowflake Micro-partitions Explained", url: "https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions" },
      { type: "github", title: "dbt-snowflake Adapters", url: "https://github.com/dbt-labs/dbt-snowflake" },
      { type: "cheat_sheet", title: "Snowflake SQL Cheat Sheet", url: "https://docs.snowflake.com/en/sql-reference-commands" },
      { type: "deep_dive", title: "Under the Hood of Snowflake (Paper)", url: "https://dbdb.io/db/bigquery" }
    ]
  },
  "bigquery": {
    whyLearnThis: "Google BigQuery is a fully managed, serverless data warehouse. Unlike Snowflake, you don't provision compute nodes at all; Google manages the compute and bills you by the terabyte scanned. It's incredibly fast for massive datasets.",
    whenIsItUsed: "Ad-hoc analytics on petabyte-scale data, machine learning via SQL, and GCP-centric data architectures.",
    whereIsItUsed: "Google Cloud Platform (GCP).",
    whatComesNext: "Redshift",
    learningOutcomes: [
      "Understand BigQuery's serverless architecture (Dremel and Colossus).",
      "Optimize query costs by clustering and partitioning tables.",
      "Handle nested and repeated data (ARRAYs and STRUCTs) seamlessly in SQL.",
      "Train machine learning models directly inside the database using BigQuery ML.",
      "Understand the difference between on-demand (per TB) and flat-rate pricing."
    ],
    commonMistakes: [
      "Running `SELECT *` on a petabyte table, costing the company hundreds of dollars in a single query.",
      "Not partitioning large tables by Date, leading to full table scans on every query.",
      "Treating BigQuery like an OLTP database (it does not handle high-frequency single-row updates well)."
    ],
    realWorldApplications: [
      "Querying a 5-terabyte Wikipedia dataset in 10 seconds to find the most edited articles.",
      "Training a Logistic Regression model to predict customer churn using only SQL (`CREATE MODEL ...`).",
      "Streaming real-time event logs directly into BigQuery and querying them instantly."
    ],
    resources: [
      { type: "official", title: "BigQuery Documentation", url: "https://cloud.google.com/bigquery/docs" },
      { type: "video_en", title: "BigQuery Architecture (Google Cloud)", url: "https://www.youtube.com/watch?v=MYAfyPlVVak" },
      { type: "video_hi", title: "BigQuery Tutorial Hindi", url: "https://www.youtube.com/watch?v=P4d7Oz9NfLc" },
      { type: "article", title: "Optimizing BigQuery Costs", url: "https://cloud.google.com/bigquery/docs/best-practices-costs" },
      { type: "github", title: "BigQuery Public Datasets", url: "https://github.com/GoogleCloudPlatform/bigquery-utils" },
      { type: "cheat_sheet", title: "BigQuery Standard SQL Syntax", url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax" },
      { type: "deep_dive", title: "Dremel: Interactive Analysis of Web-Scale Datasets (Paper)", url: "https://research.google/pubs/pub36632/" }
    ]
  },
  "redshift": {
    whyLearnThis: "Amazon Redshift is AWS's flagship petabyte-scale data warehouse. It uses columnar storage and massively parallel processing (MPP). If your company is heavily invested in AWS, Redshift is often the default choice.",
    whenIsItUsed: "Enterprise data warehousing, migrating off legacy on-prem appliances (Teradata), and integrating tightly with AWS S3.",
    whereIsItUsed: "AWS ecosystem.",
    whatComesNext: "Hadoop",
    learningOutcomes: [
      "Understand Columnar Storage and Massively Parallel Processing (MPP).",
      "Optimize performance using Sort Keys and Distribution Keys (DISTSTYLE).",
      "Use Redshift Spectrum to query data directly in S3 without loading it.",
      "Explain the difference between RA3 instances (managed storage) and older dense compute nodes.",
      "Perform workload management (WLM) to prioritize critical queries."
    ],
    commonMistakes: [
      "Choosing the wrong Distribution Key (DISTSTYLE ALL on a huge table), causing massive storage duplication and slow writes.",
      "Failing to run VACUUM and ANALYZE regularly, leading to degraded query performance and wasted storage.",
      "Using Redshift for transactional (OLTP) workloads."
    ],
    realWorldApplications: [
      "Setting a DISTKEY on `user_id` so that JOINs between the `sales` and `users` tables happen locally on the compute nodes (avoiding network broadcast).",
      "Using Redshift Spectrum to join 'hot' recent data in Redshift with 'cold' historical data in an S3 Data Lake.",
      "Migrating a legacy on-premise Oracle data warehouse to Redshift for cost savings."
    ],
    resources: [
      { type: "official", title: "Amazon Redshift Developer Guide", url: "https://docs.aws.amazon.com/redshift/latest/dg/welcome.html" },
      { type: "video_en", title: "AWS Redshift Masterclass (Nitin Srivastava)", url: "https://www.youtube.com/watch?v=cIDthifXneE" },
      { type: "video_hi", title: "Amazon Redshift Hindi", url: "https://www.youtube.com/watch?v=j0XmyHjQ2L0" },
      { type: "article", title: "Redshift Distribution Styles Guide", url: "https://docs.aws.amazon.com/redshift/latest/dg/t_Distributing_data.html" },
      { type: "github", title: "AWS Redshift Utils", url: "https://github.com/awslabs/amazon-redshift-utils" },
      { type: "cheat_sheet", title: "Redshift Tuning Cheat Sheet", url: "https://aws.amazon.com/blogs/big-data/top-10-performance-tuning-techniques-for-amazon-redshift/" },
      { type: "deep_dive", title: "AWS Advanced Redshift Architecture", url: "https://aws.amazon.com/architecture/" }
    ]
  },
  "hadoop": {
    whyLearnThis: "Hadoop is the grandfather of Big Data. While MapReduce is largely obsolete for new development (replaced by Spark), the Hadoop Distributed File System (HDFS) and the concepts of distributed computing it introduced remain the foundation of modern data engineering.",
    whenIsItUsed: "Understanding the origins of Big Data, maintaining legacy on-premise clusters, and understanding distributed file systems.",
    whereIsItUsed: "Cloudera, legacy enterprise data lakes, HDFS.",
    whatComesNext: "Spark",
    learningOutcomes: [
      "Understand the architecture of HDFS (NameNode, DataNode, Block sizes).",
      "Explain the concept of Data Locality (moving compute to the data, not data to compute).",
      "Understand the Hadoop ecosystem (Hive, HBase, YARN).",
      "Explain why MapReduce is slow (disk I/O between stages) compared to modern in-memory frameworks.",
      "Compare HDFS with modern cloud object storage (S3/GCS)."
    ],
    commonMistakes: [
      "Writing new data pipelines in MapReduce instead of Spark.",
      "Storing millions of tiny files in HDFS, which exhausts the NameNode's RAM (HDFS is optimized for large files).",
      "Thinking Hadoop is just a database (it's a distributed file system and compute framework ecosystem)."
    ],
    realWorldApplications: [
      "A bank maintaining a 1000-node on-premise Hadoop cluster because regulatory requirements prevent them from moving to the public cloud.",
      "Using Apache Hive to write SQL queries that get translated into MapReduce jobs to process log files stored in HDFS.",
      "Understanding HDFS block replication to explain how data survives even if 2 out of 3 racks in a datacenter lose power."
    ],
    resources: [
      { type: "official", title: "Apache Hadoop Documentation", url: "https://hadoop.apache.org/docs/current/" },
      { type: "video_en", title: "Hadoop Ecosystem Explained", url: "https://www.youtube.com/watch?v=rQNNdXkmjJ0" },
      { type: "video_hi", title: "Hadoop Architecture Hindi (TG117 Hindi)", url: "https://www.youtube.com/watch?v=LSvAoo4pYjs" },
      { type: "article", title: "Hadoop vs Spark", url: "https://www.ibm.com/cloud/blog/hadoop-vs-spark" },
      { type: "github", title: "Hadoop Source Code", url: "https://github.com/apache/hadoop" },
      { type: "cheat_sheet", title: "HDFS Commands Cheat Sheet", url: "https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/FileSystemShell.html" },
      { type: "deep_dive", title: "The Google File System Paper (Inspiration for HDFS)", url: "https://research.google.com/archive/gfs.html" }
    ]
  },
  "spark": {
    whyLearnThis: "Apache Spark is the industry standard for distributed data processing. It processes data 100x faster than Hadoop MapReduce by keeping data in-memory. If you are a Data Engineer, you must know Spark.",
    whenIsItUsed: "Processing massive datasets (ETL), running machine learning algorithms at scale, and streaming data.",
    whereIsItUsed: "Databricks, AWS EMR, GCP Dataproc, open-source clusters.",
    whatComesNext: "MapReduce",
    learningOutcomes: [
      "Understand Spark's core architecture: Driver, Executors, and the DAG (Directed Acyclic Graph).",
      "Differentiate between Transformations (lazy) and Actions (eager execution).",
      "Use the DataFrame and Spark SQL APIs.",
      "Understand Shuffling, Partitions, and how to optimize them (`repartition` vs `coalesce`).",
      "Handle data skew (when one executor gets 90% of the data)."
    ],
    commonMistakes: [
      "Calling `.collect()` on a massive DataFrame, which pulls all data to the Driver node and causes an OutOfMemory error.",
      "Not understanding lazy evaluation, leading to confusing debugging when an error is thrown on an Action rather than the Transformation where the bug exists.",
      "Failing to cache/persist DataFrames that are reused multiple times, forcing Spark to recalculate them from scratch."
    ],
    realWorldApplications: [
      "Using Databricks (Spark) to read 10 TB of JSON logs from S3, clean the data, and write it to Delta Lake tables.",
      "Optimizing a Spark job that takes 4 hours down to 15 minutes by broadcasting a small dimension table to avoid a massive shuffle join.",
      "Running distributed Machine Learning (Spark MLlib) on a cluster to train a recommendation model on 1 billion user interactions."
    ],
    resources: [
      { type: "official", title: "Apache Spark Documentation", url: "https://spark.apache.org/docs/latest/" },
      { type: "video_en", title: "Spark Tutorial (Ansh Lamba)", url: "https://www.youtube.com/watch?v=FNJze2Ea780" },
      { type: "video_hi", title: "Apache Spark in Hindi (TG117 Hindi)", url: "https://www.youtube.com/watch?v=N64f6XbhdGY" },
      { type: "article", title: "Spark Architecture: Driver & Executors", url: "https://databricks.com/glossary/what-is-apache-spark" },
      { type: "github", title: "Spark Examples", url: "https://github.com/apache/spark/tree/master/examples" },
      { type: "cheat_sheet", title: "PySpark Cheat Sheet", url: "https://s3.amazonaws.com/assets.datacamp.com/blog_assets/PySpark_SQL_Cheat_Sheet_Python.pdf" },
      { type: "deep_dive", title: "Spark: The Definitive Guide (Book)", url: "https://spark.apache.org/docs/latest/api/python/" }
    ]
  },
  "mapreduce": {
    whyLearnThis: "Even though you won't write raw Java MapReduce jobs today, MapReduce is a programming model. Understanding the 'Map' (filter/transform) and 'Reduce' (aggregate) paradigm is crucial because it underlies Spark, distributed SQL engines, and NoSQL aggregation.",
    whenIsItUsed: "Understanding distributed computing theory, optimizing big data queries, and understanding legacy Hadoop.",
    whereIsItUsed: "Under the hood of distributed systems.",
    whatComesNext: "Kafka",
    learningOutcomes: [
      "Explain the Map phase (transforming inputs into key-value pairs).",
      "Explain the Shuffle and Sort phase (grouping by key over the network).",
      "Explain the Reduce phase (aggregating values for a key).",
      "Understand why Shuffling is the most expensive operation in distributed computing.",
      "Translate a SQL `GROUP BY` query into a conceptual MapReduce workflow."
    ],
    commonMistakes: [
      "Writing modern applications in MapReduce.",
      "Failing to understand that a network 'shuffle' is the bottleneck in almost all distributed big data jobs."
    ],
    realWorldApplications: [
      "Writing a conceptual Word Count program: Map emits `(word, 1)`, Reduce sums the counts for each word.",
      "Understanding that a SQL `JOIN` on un-partitioned data requires a massive Shuffle phase to bring matching keys to the same node.",
      "Using the MapReduce paradigm conceptually within MongoDB's aggregation framework."
    ],
    resources: [
      { type: "official", title: "Hadoop MapReduce Tutorial", url: "https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html" },
      { type: "video_en", title: "MapReduce Explained (edureka!)", url: "https://www.youtube.com/watch?v=SqvAaB3vK8U" },
      { type: "video_hi", title: "MapReduce Architecture Hindi (TG117 Hindi)", url: "https://www.youtube.com/watch?v=ik9792OwM1k" },
      { type: "article", title: "MapReduce Programming Model", url: "https://www.ibm.com/topics/mapreduce" },
      { type: "github", title: "MapReduce Examples", url: "https://github.com/apache/hadoop/tree/master/hadoop-mapreduce-project/hadoop-mapreduce-examples" },
      { type: "cheat_sheet", title: "Big Data Processing Concepts", url: "https://github.com/donnemartin/system-design-primer" },
      { type: "deep_dive", title: "MapReduce: Simplified Data Processing on Large Clusters (Google Paper)", url: "https://research.google.com/archive/mapreduce.html" }
    ]
  },
  "kafka": {
    whyLearnThis: "Data doesn't arrive in daily batches anymore; it arrives continuously. Apache Kafka is the nervous system of modern data architectures. It handles trillions of events per day, providing highly scalable, fault-tolerant event streaming.",
    whenIsItUsed: "Building real-time data pipelines, event-driven microservices, and clickstream analytics.",
    whereIsItUsed: "Confluent Cloud, AWS MSK, LinkedIn, Uber.",
    whatComesNext: "Flink",
    learningOutcomes: [
      "Understand Topics, Partitions, Producers, and Consumers.",
      "Explain how Consumer Groups scale read throughput and handle failures.",
      "Understand Kafka's append-only log architecture and retention policies.",
      "Configure message delivery semantics (At-Least-Once, Exactly-Once).",
      "Use Kafka Connect to move data between Kafka and databases without writing code."
    ],
    commonMistakes: [
      "Creating topics with a single partition, completely bottlenecking parallel consumption.",
      "Configuring consumer applications to automatically commit offsets before processing is actually complete, leading to data loss on failure.",
      "Treating Kafka like a traditional message queue (RabbitMQ) and attempting to delete individual messages."
    ],
    realWorldApplications: [
      "An e-commerce site pushing every page view, click, and cart addition to Kafka, where an analytics engine processes it in real-time.",
      "Using Kafka Connect (Debezium) to capture every row change (CDC) in a MySQL database and stream it to Snowflake.",
      "A microservice architecture where services communicate purely by publishing and subscribing to Kafka events."
    ],
    resources: [
      { type: "official", title: "Apache Kafka Documentation", url: "https://kafka.apache.org/documentation/" },
      { type: "video_en", title: "Kafka in 100 Seconds (James Cutajar)", url: "https://www.youtube.com/watch?v=Ch5VhJzaoaI" },
      { type: "video_hi", title: "Kafka Tutorial Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=irLb27k5a7Y" },
      { type: "article", title: "Kafka Architecture Guide", url: "https://kafka.apache.org/documentation/#design" },
      { type: "github", title: "Kafka Source Code", url: "https://github.com/apache/kafka" },
      { type: "cheat_sheet", title: "Kafka CLI Commands Cheat Sheet", url: "https://kafka.apache.org/quickstart" },
      { type: "deep_dive", title: "Designing Event-Driven Systems", url: "https://www.confluent.io/designing-event-driven-systems/" }
    ]
  },
  "flink": {
    whyLearnThis: "While Spark was built for batch processing and adapted for streams (micro-batching), Apache Flink was built for true, low-latency stream processing. It is the gold standard for real-time analytics and stateful stream processing.",
    whenIsItUsed: "Real-time fraud detection, real-time leaderboards, and complex event processing where sub-second latency is required.",
    whereIsItUsed: "Uber, Alibaba, AWS Managed Flink.",
    whatComesNext: "Spark Streaming",
    learningOutcomes: [
      "Differentiate between Batch processing, Micro-batching (Spark), and True Streaming (Flink).",
      "Understand Stateful Stream Processing and how Flink manages state (RocksDB).",
      "Explain Event Time vs Processing Time and the concept of Watermarks.",
      "Implement tumbling, sliding, and session windows over streaming data.",
      "Understand Flink's exactly-once state consistency via Checkpointing."
    ],
    commonMistakes: [
      "Using Processing Time instead of Event Time for analytics, causing data to be incorrectly grouped if there is network latency.",
      "Failing to configure Watermarks properly, leading to infinitely delayed windows waiting for late data.",
      "Using Flink for a simple daily batch ETL job where Spark or SQL would be much simpler."
    ],
    realWorldApplications: [
      "A credit card company using Flink to analyze a stream of transactions in real-time, matching patterns over a 5-minute sliding window to block fraud before the transaction is approved.",
      "Uber calculating surge pricing in real-time based on the stream of rider requests and driver locations.",
      "Aggregating website clicks into 1-minute tumbling windows to power a live traffic dashboard."
    ],
    resources: [
      { type: "official", title: "Apache Flink Documentation", url: "https://flink.apache.org/docs/" },
      { type: "video_en", title: "Stream Processing with Flink (Confluent)", url: "https://www.youtube.com/watch?v=X1bhZZgAlCI" },
      { type: "video_hi", title: "Apache Flink Architecture Hindi (TG117 Hindi)", url: "https://www.youtube.com/watch?v=PVXF8NCEND8" },
      { type: "article", title: "Flink vs Spark Streaming", url: "https://nightlies.apache.org/flink/flink-docs-stable/" },
      { type: "github", title: "Flink Source Code", url: "https://github.com/apache/flink" },
      { type: "cheat_sheet", title: "Flink Windowing Guide", url: "https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/dev/datastream/operators/windows/" },
      { type: "deep_dive", title: "Stateful Stream Processing", url: "https://flink.apache.org/learn-flink/" }
    ]
  },
  "spark_streaming": {
    whyLearnThis: "Spark Structured Streaming allows you to write stream processing jobs using the exact same DataFrame API you use for batch jobs. It makes the transition from batch to streaming incredibly easy for existing Spark developers.",
    whenIsItUsed: "When you already have a Spark cluster and need to process streaming data (from Kafka) without adding a new technology like Flink.",
    whereIsItUsed: "Databricks, AWS EMR.",
    whatComesNext: "Airflow",
    learningOutcomes: [
      "Understand the Micro-batch architecture of Spark Streaming.",
      "Use `readStream` and `writeStream` with the Spark DataFrame API.",
      "Integrate Spark Structured Streaming with Apache Kafka.",
      "Handle late data using Watermarks.",
      "Output modes: Append, Complete, and Update."
    ],
    commonMistakes: [
      "Expecting millisecond latency (Spark Streaming uses micro-batches, so latency is typically hundreds of milliseconds to seconds).",
      "Using Complete output mode on a massive dataset, causing Spark to keep all historical state in memory and eventually crash.",
      "Forgetting to specify a checkpoint location, meaning the stream cannot recover after a failure."
    ],
    realWorldApplications: [
      "Reading a Kafka topic of JSON logs, flattening the JSON, and writing the structured data to a Delta Lake table every 10 seconds.",
      "Calculating the running average of sensor temperatures over a 1-hour window and alerting if it exceeds a threshold.",
      "Joining a static dimension table (users) with a live stream (clicks) to enrich the stream with demographic data."
    ],
    resources: [
      { type: "official", title: "Spark Structured Streaming Guide", url: "https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html" },
      { type: "video_en", title: "Spark Streaming Tutorial (Great Learning)", url: "https://www.youtube.com/watch?v=zC9cnh8rJd0" },
      { type: "video_hi", title: "Spark Streaming Hindi (TG117 Hindi)", url: "https://www.youtube.com/watch?v=N64f6XbhdGY" },
      { type: "article", title: "Structured Streaming vs DStreams", url: "https://databricks.com/blog/2016/07/28/structured-streaming-in-apache-spark.html" },
      { type: "github", title: "Spark Streaming Examples", url: "https://github.com/apache/spark/tree/master/examples/src/main/python/sql/streaming" },
      { type: "cheat_sheet", title: "Spark SQL and Streaming Cheat Sheet", url: "https://spark.apache.org/docs/latest/sql-ref.html" },
      { type: "deep_dive", title: "Databricks: Deep Dive into Structured Streaming", url: "https://www.youtube.com/watch?v=rl8dIzTpxrI" }
    ]
  },
  "airflow": {
    whyLearnThis: "Data pipelines are complex webs of dependencies (Task B cannot start until Task A finishes). Apache Airflow is the industry-standard orchestrator that schedules, monitors, and manages these workflows using Python-based DAGs.",
    whenIsItUsed: "Scheduling ETL jobs, managing ML training pipelines, and orchestrating cloud services.",
    whereIsItUsed: "AWS MWAA, Google Cloud Composer, Astronomer.",
    whatComesNext: "Dagster",
    learningOutcomes: [
      "Understand Airflow Architecture: Scheduler, Webserver, Worker, Metadata Database.",
      "Define workflows as Directed Acyclic Graphs (DAGs) in Python.",
      "Use Operators (BashOperator, PythonOperator, PostgresOperator) to execute tasks.",
      "Manage task dependencies using bitshift operators (`task1 >> task2`).",
      "Understand scheduling concepts: `execution_date`, backfilling, and idempotency."
    ],
    commonMistakes: [
      "Doing heavy data processing *inside* the Airflow PythonOperator. Airflow is an orchestrator, not an execution engine—it should trigger Spark/Snowflake to do the heavy lifting.",
      "Writing non-idempotent tasks, causing duplicate data if a failed task is retried.",
      "Putting dynamic code (like API calls or `datetime.now()`) outside of the execution function, causing the Scheduler to spam the API every time it parses the file."
    ],
    realWorldApplications: [
      "A daily DAG that triggers an AWS EMR Spark job, waits for it to finish, loads the output to Redshift, and sends a Slack notification on success/failure.",
      "Backfilling 6 months of historical data by running an Airflow DAG for past `execution_dates` automatically.",
      "A pipeline that waits for a file to arrive in an S3 bucket (S3Sensor) before triggering the processing steps."
    ],
    resources: [
      { type: "official", title: "Apache Airflow Documentation", url: "https://airflow.apache.org/docs/" },
      { type: "video_en", title: "Airflow Tutorial for Beginners (Ansh Lamba)", url: "https://www.youtube.com/watch?v=IiczxlbQb8s" },
      { type: "video_hi", title: "Apache Airflow Hindi (TG117 Hindi)", url: "https://www.youtube.com/watch?v=c3m8KmaSnq4" },
      { type: "article", title: "Best Practices for writing Airflow DAGs", url: "https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html" },
      { type: "github", title: "Airflow Source Code", url: "https://github.com/apache/airflow" },
      { type: "cheat_sheet", title: "Airflow Cheat Sheet", url: "https://airflow.apache.org/docs/apache-airflow/stable/cheat-sheet.html" },
      { type: "deep_dive", title: "Data Pipelines with Apache Airflow (Book)", url: "https://www.manning.com/books/data-pipelines-with-apache-airflow" }
    ]
  },
  "dagster": {
    whyLearnThis: "While Airflow focuses on task execution, Dagster is a modern orchestrator built around *Data Assets*. It focuses on what data is being produced rather than just the tasks being run, making testing and local development much easier.",
    whenIsItUsed: "Modern data stack orchestration, building highly testable data pipelines, and dbt integration.",
    whereIsItUsed: "Software-Defined Assets (SDA) architectures.",
    whatComesNext: "Prefect",
    learningOutcomes: [
      "Understand the concept of Software-Defined Assets (SDA).",
      "Explain how Dagster differs from Airflow (Asset-first vs Task-first).",
      "Write a basic Dagster pipeline (Ops and Graphs).",
      "Run and test Dagster pipelines locally without a massive infrastructure setup.",
      "Integrate Dagster natively with dbt to visualize data lineage."
    ],
    commonMistakes: [
      "Trying to use Dagster exactly like Airflow (focusing on tasks instead of embracing the Software-Defined Asset paradigm).",
      "Failing to type-hint inputs and outputs, missing out on Dagster's built-in type checking.",
      "Ignoring the powerful local testing capabilities that Dagster provides over older tools."
    ],
    realWorldApplications: [
      "Defining a machine learning model as a Software-Defined Asset, so Dagster knows exactly which datasets need to be refreshed before retraining the model.",
      "Visualizing the entire data lineage from raw S3 files, through dbt transformations, to the final BI dashboard in a single UI.",
      "Unit testing a data pipeline entirely on a local laptop using mock data before deploying."
    ],
    resources: [
      { type: "official", title: "Dagster Documentation", url: "https://docs.dagster.io/" },
      { type: "video_en", title: "Introduction to Dagster (Dagster Labs)", url: "https://www.youtube.com/watch?v=NaaF7sw1W_8" },
      { type: "video_hi", title: "Dagster vs Airflow Hindi (Dagster Labs)", url: "https://www.youtube.com/watch?v=NaaF7sw1W_8" },
      { type: "article", title: "Why we built Dagster", url: "https://dagster.io/blog/dagster-the-data-orchestrator" },
      { type: "github", title: "Dagster Source Repository", url: "https://github.com/dagster-io/dagster" },
      { type: "cheat_sheet", title: "Dagster Core Concepts", url: "https://docs.dagster.io/concepts" },
      { type: "deep_dive", title: "Software-Defined Assets Concept", url: "https://docs.dagster.io/concepts/assets/software-defined-assets" }
    ]
  },
  "prefect": {
    whyLearnThis: "Prefect is a modern orchestration tool designed as 'Airflow but Pythonic.' It allows data engineers to write normal Python code with decorators, removing the boilerplate of Airflow while providing dynamic DAGs and hybrid execution.",
    whenIsItUsed: "When you need highly dynamic pipelines, easy local testing, and want to avoid Airflow's rigid execution paradigms.",
    whereIsItUsed: "Modern data engineering stacks, Prefect Cloud.",
    whatComesNext: "Data Engineer Complete",
    learningOutcomes: [
      "Use the `@flow` and `@task` decorators to turn standard Python code into a Prefect pipeline.",
      "Understand Prefect's hybrid execution model (Prefect Cloud manages scheduling; your infrastructure executes code).",
      "Explain how Prefect handles dynamic DAG generation (creating tasks at runtime).",
      "Implement state handlers and retries natively in Python.",
      "Deploy a Prefect flow using infrastructure blocks (Docker, Kubernetes)."
    ],
    commonMistakes: [
      "Overcomplicating the code—Prefect is designed to let you write native Python, so you don't need custom Operators for everything.",
      "Misunderstanding the hybrid model and thinking Prefect Cloud has access to your proprietary data (it only sees metadata).",
      "Creating monolithic flows instead of breaking logic down into distinct `@task` functions for better observability."
    ],
    realWorldApplications: [
      "Writing a flow that dynamically generates a task for every file present in an S3 bucket at runtime (hard to do in Airflow).",
      "Using Prefect Cloud to monitor pipeline execution while the actual data processing happens securely inside a company's private AWS VPC.",
      "Decorating an existing Python web scraping script with `@flow` to instantly get retries, scheduling, and logging."
    ],
    resources: [
      { type: "official", title: "Prefect Documentation", url: "https://docs.prefect.io/" },
      { type: "video_en", title: "Prefect 2.0 Crash Course (Coding Is Fun)", url: "https://www.youtube.com/watch?v=4WfwsrJOtAM" },
      { type: "video_hi", title: "Prefect vs Airflow Hindi (Coding Is Fun)", url: "https://www.youtube.com/watch?v=4WfwsrJOtAM" },
      { type: "article", title: "Why we chose Prefect over Airflow", url: "https://www.prefect.io/blog/" },
      { type: "github", title: "Prefect Source Repository", url: "https://github.com/PrefectHQ/prefect" },
      { type: "cheat_sheet", title: "Prefect Core Concepts Overview", url: "https://docs.prefect.io/latest/concepts/flows/" },
      { type: "deep_dive", title: "Negative Engineering and Prefect", url: "https://docs.prefect.io/latest/" }
    ]
  }
};
