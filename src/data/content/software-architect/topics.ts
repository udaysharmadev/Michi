import { TopicData } from '../../types';

export const topics: Record<string, TopicData> = {
  "solid_principles": {
    title: "SOLID Principles",
    whyLearnThis: "SOLID principles form the foundation of maintainable, scalable, and testable object-oriented software design.",
    whenIsItUsed: "Applied daily when designing software classes, interfaces, and module boundaries.",
    whereIsItUsed: "Every OOP enterprise codebase across backend, desktop, and mobile architectures.",
    learningOutcomes: [
      "Master Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.",
      "Identify code smells that violate SOLID principles.",
      "Refactor monolithic classes into modular, decoupled interfaces."
    ],
    commonMistakes: [
      "Over-engineering simple code by creating excessive interfaces.",
      "Confusing Single Responsibility with 'a class should only have one method'."
    ],
    realWorldApplications: [
      "Designing pluggable payment gateway connectors.",
      "Building extensible logging and auditing frameworks."
    ],
    resources: [
      { title: "SOLID Principles Explained (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=v-2yFMzxwU4" },
      { title: "SOLID Principles in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=0h5U39O8Z9E" },
      { title: "DigitalOcean: SOLID Principles", type: "official", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" }
    ]
  },
  "cap_theorem": {
    title: "CAP Theorem",
    whyLearnThis: "Understanding CAP Theorem is mandatory when choosing database systems and architecting distributed systems across networks.",
    whenIsItUsed: "Used during high-level system design when evaluating trade-offs between Consistency, Availability, and Partition Tolerance.",
    whereIsItUsed: "Cloud infrastructure design, database selection (Cassandra vs PostgreSQL), and global microservice architectures.",
    learningOutcomes: [
      "Explain the trade-offs between Consistency, Availability, and Partition Tolerance.",
      "Categorize databases into CP, AP, or CA systems.",
      "Evaluate PACELC theorem extensions for latency trade-offs."
    ],
    commonMistakes: [
      "Thinking a system can abandon Partition Tolerance in a real distributed network.",
      "Assuming Strong Consistency is always required for all business domains."
    ],
    realWorldApplications: [
      "Choosing DynamoDB (AP) vs Spanner (CP) for global e-commerce systems.",
      "Designing event-driven banking ledgers vs social media feeds."
    ],
    resources: [
      { title: "CAP Theorem Explained (ByteByteGo)", type: "video_en", url: "https://www.youtube.com/watch?v=BHqjEjzAicA" },
      { title: "CAP Theorem in Hindi (Gate Smashers)", type: "video_hi", url: "https://www.youtube.com/watch?v=k-Yaq8AHlBU" },
      { title: "IBM: What is the CAP Theorem?", type: "official", url: "https://www.ibm.com/topics/cap-theorem" }
    ]
  },
  "dry_kiss_yagni": {
    title: "DRY, KISS, YAGNI",
    whyLearnThis: "Core software design heuristics that prevent premature optimization, code bloat, and maintenance nightmares.",
    whenIsItUsed: "Applied during code reviews and feature planning to keep codebases lean and readable.",
    whereIsItUsed: "All modern software engineering pipelines.",
    learningOutcomes: [
      "Apply Don't Repeat Yourself (DRY) without creating wrong abstractions.",
      "Practice Keep It Simple, Stupid (KISS) in system architecture.",
      "Avoid You Aren't Gonna Need It (YAGNI) premature feature building."
    ],
    commonMistakes: [
      "Applying DRY too early before domain boundaries are clear (coupling unrelated modules).",
      "Confusing simple code with simplistic or poorly performing code."
    ],
    realWorldApplications: [
      "Eliminating duplicate validation logic across API endpoints.",
      "Pruning unused framework abstractions before launching MVP."
    ],
    resources: [
      { title: "DRY, KISS & YAGNI Heuristics (Programming with Mosh)", type: "video_en", url: "https://www.youtube.com/watch?v=8JJ101D3knE" },
      { title: "Software Principles in Hindi (Thapa Technical)", type: "video_hi", url: "https://www.youtube.com/watch?v=RnwNq3878bY" },
      { title: "Martin Fowler: YAGNI", type: "official", url: "https://martinfowler.com/bliki/Yagni.html" }
    ]
  },
  "monolith_vs_microservices": {
    title: "Monolith vs Microservices",
    whyLearnThis: "Choosing the correct application layout dictates deployment velocity, organizational scaling, and infrastructure costs.",
    whenIsItUsed: "When designing a new product architecture or planning a migration strategy.",
    whereIsItUsed: "Enterprise backend strategy and cloud topology planning.",
    learningOutcomes: [
      "Understand Modular Monoliths vs Microservices vs Serverless.",
      "Identify the operational overhead of microservices (service discovery, distributed tracing).",
      "Plan a gradual Strangler Fig migration from monolith to services."
    ],
    commonMistakes: [
      "Migrating to microservices too early before team size demands it.",
      "Creating a distributed monolith with tight synchronous HTTP coupling between services."
    ],
    realWorldApplications: [
      "Scaling Uber or Netflix infrastructure for high traffic.",
      "Maintaining a modular monolith for early-stage startups."
    ],
    resources: [
      { title: "Monolith vs Microservices (ByteByteGo)", type: "video_en", url: "https://www.youtube.com/watch?v=1xRTTL-_Zbs" },
      { title: "Microservices Architecture in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=1XkO-E01g7Y" },
      { title: "AWS Microservices Guide", type: "official", url: "https://aws.amazon.com/microservices/" }
    ]
  },
  "event_driven": {
    title: "Event-Driven Architecture",
    whyLearnThis: "Event-driven architectures decouple producers from consumers, enabling high throughput and asynchronous scalability.",
    whenIsItUsed: "Used when building reactive, real-time, or distributed microservice ecosystems.",
    whereIsItUsed: "E-commerce order processing, real-time analytics, notification services.",
    learningOutcomes: [
      "Differentiate between Event Notification, Event-Carried State Transfer, and Event Sourcing.",
      "Understand publish/subscribe and message bus topologies.",
      "Design idempotent event consumers."
    ],
    commonMistakes: [
      "Losing event ordering guarantees without partition keys.",
      "Neglecting dead letter queues (DLQs) for failed message handling."
    ],
    realWorldApplications: [
      "Processing payment webhooks asynchronously via Kafka/RabbitMQ.",
      "Triggering order fulfillment and inventory updates upon checkout."
    ],
    resources: [
      { title: "Event-Driven Architecture in 10 Minutes", type: "video_en", url: "https://www.youtube.com/watch?v=oVd4BEEZ6u8" },
      { title: "Event Driven Architecture in Hindi (Gate Smashers)", type: "video_hi", url: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
      { title: "Martin Fowler: Event-Driven Architectures", type: "official", url: "https://martinfowler.com/articles/201701-event-driven-architecture.html" }
    ]
  },
  "serverless": {
    title: "Serverless Architecture",
    whyLearnThis: "Serverless eliminates infrastructure management, allowing engineers to focus on business logic with automatic scale-to-zero execution.",
    whenIsItUsed: "Used for event-driven microservices, API backends, and scheduled background workers.",
    whereIsItUsed: "AWS Lambda, Google Cloud Functions, Azure Functions, Vercel Serverless.",
    learningOutcomes: [
      "Understand Function-as-a-Service (FaaS) lifecycles and cold starts.",
      "Design stateless event handlers.",
      "Evaluate cost models for unpredictable workloads."
    ],
    commonMistakes: [
      "Experiencing cold-start latency spikes on user-critical HTTP requests.",
      "Exhausting relational database connection pools from thousands of concurrent functions."
    ],
    realWorldApplications: [
      "Image thumbnail generation on S3 upload.",
      "Processing Stripe webhooks via API Gateway and Lambda."
    ],
    resources: [
      { title: "Serverless Architecture (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=W_VV2IxEDCY" },
      { title: "AWS Lambda & Serverless in Hindi (Hitesh Choudhary)", type: "video_hi", url: "https://www.youtube.com/watch?v=PE94mMYiQfE" },
      { title: "Serverless Framework Docs", type: "official", url: "https://www.serverless.com/framework/docs" }
    ]
  },
  "load_balancing": {
    title: "Load Balancing",
    whyLearnThis: "Load balancers distribute incoming network traffic across multiple servers to prevent overload and ensure high availability.",
    whenIsItUsed: "Used at the perimeter of all production web services and between internal microservices.",
    whereIsItUsed: "NGINX, HAProxy, AWS ALB/NLB, Cloudflare.",
    learningOutcomes: [
      "Master Layer 4 (Transport) vs Layer 7 (Application) load balancing.",
      "Implement algorithms like Round Robin, Least Connections, and IP Hash.",
      "Configure health checks and sticky sessions."
    ],
    commonMistakes: [
      "Using Layer 7 balancing for raw TCP protocols without performance tuning.",
      "Forgetting health-check endpoints, causing traffic to hit dead instances."
    ],
    realWorldApplications: [
      "Distributing web traffic across 100 EC2 instances behind an AWS ALB.",
      "Terminating SSL/TLS certificates at the edge load balancer."
    ],
    resources: [
      { title: "Load Balancers Explained (ByteByteGo)", type: "video_en", url: "https://www.youtube.com/watch?v=K0Ta65OqQkY" },
      { title: "Load Balancers in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=Ip2TA2ijDmA" },
      { title: "NGINX Load Balancing Guide", type: "official", url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/" }
    ]
  },
  "caching_strategies": {
    title: "Caching Strategies",
    whyLearnThis: "Caching reduces latency, decreases database load, and improves application response times by storing hot data in memory.",
    whenIsItUsed: "When database queries or API calculations become bottlenecks.",
    whereIsItUsed: "Redis, Memcached, CDNs, In-memory application caches.",
    learningOutcomes: [
      "Understand Cache-Aside, Write-Through, Write-Behind, and Refresh-Ahead patterns.",
      "Implement Cache Eviction policies (LRU, LFU, FIFO).",
      "Mitigate Cache Stampede, Cache Penetration, and Cache Breakdown."
    ],
    commonMistakes: [
      "Setting infinite TTLs causing stale data issues.",
      "Not handling cache misses gracefully when Redis goes down."
    ],
    realWorldApplications: [
      "Caching user sessions in Redis for sub-millisecond retrieval.",
      "Storing catalog items at CDN edges to reduce backend load."
    ],
    resources: [
      { title: "Caching Strategies Explained (ByteByteGo)", type: "video_en", url: "https://www.youtube.com/watch?v=dGAgxozg8dM" },
      { title: "Redis Caching in Hindi (Gate Smashers)", type: "video_hi", url: "https://www.youtube.com/watch?v=pMN591gO9Y0" },
      { title: "Redis Developer Documentation", type: "official", url: "https://redis.io/docs/" }
    ]
  },
  "message_queues": {
    title: "Message Queues",
    whyLearnThis: "Message queues allow asynchronous task processing and smooth out traffic spikes by buffering workloads.",
    whenIsItUsed: "Used when handling background jobs, heavy computations, or inter-service communications.",
    whereIsItUsed: "RabbitMQ, Apache Kafka, AWS SQS, Celery.",
    learningOutcomes: [
      "Differentiate message queues (SQS/RabbitMQ) from event streams (Kafka).",
      "Understand at-most-once, at-least-once, and exactly-once delivery guarantees.",
      "Configure worker pools for parallel queue consumption."
    ],
    commonMistakes: [
      "Assuming message delivery is strictly ordered without explicit partition keying.",
      "Forgetting idempotent consumer processing, leading to duplicate writes."
    ],
    realWorldApplications: [
      "Sending confirmation emails asynchronously after user registration.",
      "Processing video rendering jobs in background worker fleets."
    ],
    resources: [
      { title: "Message Queues Explained (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=oUobqkLsmN8" },
      { title: "RabbitMQ vs Kafka in Hindi (Krish Naik)", type: "video_hi", url: "https://www.youtube.com/watch?v=ZJJHm_bd9Zo" },
      { title: "RabbitMQ Tutorials", type: "official", url: "https://www.rabbitmq.com/getstarted.html" }
    ]
  },
  "sql_vs_nosql": {
    title: "SQL vs NoSQL",
    whyLearnThis: "Selecting the correct database paradigm directly impacts query flexibility, schema evolution, and data integrity.",
    whenIsItUsed: "Used during data model architecture phase of system design.",
    whereIsItUsed: "PostgreSQL, MySQL vs MongoDB, Cassandra, DynamoDB.",
    learningOutcomes: [
      "Understand Relational (ACID) vs Document, Key-Value, Columnar, and Graph models.",
      "Compare schema-on-write vs schema-on-read flexibility.",
      "Evaluate horizontal vs vertical scaling characteristics."
    ],
    commonMistakes: [
      "Using NoSQL without understanding the lack of ACID multi-document transactions.",
      "Storing deeply nested relational data inside document stores causing huge payload updates."
    ],
    realWorldApplications: [
      "Using PostgreSQL for financial transactions and MongoDB for user activity feeds.",
      "Using Neo4j for social network graph relationships."
    ],
    resources: [
      { title: "SQL vs NoSQL (Fireship)", type: "video_en", url: "https://www.youtube.com/watch?v=zsjvFFKOm3c" },
      { title: "SQL vs NoSQL in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=hKB-YGF14SY" },
      { title: "MongoDB vs Relational Guide", type: "official", url: "https://www.mongodb.com/compare/mongodb-postgresql" }
    ]
  },
  "sharding_replication": {
    title: "Sharding & Replication",
    whyLearnThis: "Sharding and replication enable databases to scale past the storage and throughput limits of a single machine.",
    whenIsItUsed: "When database tables exceed millions of records or read/write IOPS saturate single node hardware.",
    whereIsItUsed: "PostgreSQL read-replicas, Vitess, MongoDB Sharded Clusters, CockroachDB.",
    learningOutcomes: [
      "Differentiate master-slave (primary-replica) from multi-master replication.",
      "Design effective sharding keys to avoid hotspotting.",
      "Understand read-after-write consistency challenges in replicated setups."
    ],
    commonMistakes: [
      "Choosing a low-cardinality shard key (like gender or country), creating massive data imbalance.",
      "Executing cross-shard JOIN queries that kill database performance."
    ],
    realWorldApplications: [
      "Sharding Twitter/X user data by User ID across thousands of DB nodes.",
      "Setting up read replicas in multiple AWS regions to reduce query latency."
    ],
    resources: [
      { title: "Database Sharding (ByteByteGo)", type: "video_en", url: "https://www.youtube.com/watch?v=5faMjKuB9bc" },
      { title: "Database Sharding & Replication in Hindi (Gate Smashers)", type: "video_hi", url: "https://www.youtube.com/watch?v=DQk8HOVlumI" },
      { title: "DigitalOcean: Understanding Database Sharding", type: "official", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding" }
    ]
  },
  "event_sourcing_cqrs": {
    title: "Event Sourcing & CQRS",
    whyLearnThis: "CQRS separates read and write models, while Event Sourcing captures every state change as an immutable stream of events.",
    whenIsItUsed: "Used in complex domains requiring complete audit trails, high read performance, or complex domain-driven design.",
    whereIsItUsed: "Banking systems, healthcare record tracking, inventory management.",
    learningOutcomes: [
      "Implement Command Query Responsibility Segregation (CQRS).",
      "Build event stores and project state snapshots.",
      "Handle eventual consistency in read projections."
    ],
    commonMistakes: [
      "Applying CQRS/Event Sourcing to simple CRUD applications.",
      "Handling breaking schema changes in historical event records poorly."
    ],
    realWorldApplications: [
      "Banking ledger systems recording every debit and credit transaction event.",
      "E-commerce order tracking systems storing order state transitions."
    ],
    resources: [
      { title: "CQRS & Event Sourcing (CodeOpinion)", type: "video_en", url: "https://www.youtube.com/watch?v=8JK101D3knE" },
      { title: "CQRS Pattern in Hindi (Tech Primers)", type: "video_hi", url: "https://www.youtube.com/watch?v=1XkO-E01g7Y" },
      { title: "Microsoft Architecture: CQRS Pattern", type: "official", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs" }
    ]
  },
  "identity_access": {
    title: "Identity & Access (IAM)",
    whyLearnThis: "IAM protocols ensure secure authentication and authorization across applications and distributed services.",
    whenIsItUsed: "When securing user logins, microservice APIs, and cloud infrastructure.",
    whereIsItUsed: "OAuth 2.0, OpenID Connect, JWT, Keycloak, Auth0, AWS IAM.",
    learningOutcomes: [
      "Master OAuth 2.0 authorization flows (Authorization Code + PKCE).",
      "Understand JWT structure, signing algorithms, and security risks.",
      "Implement Role-Based (RBAC) and Attribute-Based (ABAC) Access Control."
    ],
    commonMistakes: [
      "Storing JWT tokens in localStorage vulnerable to XSS instead of HttpOnly cookies.",
      "Using symmetric keys for multi-service token verification."
    ],
    realWorldApplications: [
      "Sign in with Google/GitHub on web applications.",
      "Securing microservices using API Gateway JWT validation."
    ],
    resources: [
      { title: "OAuth 2.0 and OpenID Connect (Okta)", type: "video_en", url: "https://www.youtube.com/watch?v=996gVCrblf8" },
      { title: "OAuth2 & JWT in Hindi (CodeWithHarry)", type: "video_hi", url: "https://www.youtube.com/watch?v=7Q17ubqLfaM" },
      { title: "Auth0: Learn OAuth 2.0", type: "official", url: "https://auth0.com/intro-to-iam" }
    ]
  },
  "rate_limiting": {
    title: "Rate Limiting",
    whyLearnThis: "Rate limiting protects APIs from abuse, DDoS attacks, and resource exhaustion by capping request rates.",
    whenIsItUsed: "At API Gateways and perimeter proxies for public and internal APIs.",
    whereIsItUsed: "Cloudflare, Kong API Gateway, Redis-backed middleware.",
    learningOutcomes: [
      "Implement Token Bucket, Leaky Bucket, Fixed Window, and Sliding Window Log algorithms.",
      "Configure HTTP 429 Too Many Requests responses with Retry-After headers.",
      "Design distributed rate limiters using Redis."
    ],
    commonMistakes: [
      "Rate limiting purely by IP address in environments behind NAT/proxies.",
      "Using unoptimized Redis keys causing race conditions during concurrency."
    ],
    realWorldApplications: [
      "Throttling OpenAI/Stripe API endpoints to 100 requests per minute.",
      "Protecting login endpoints from brute-force password attempts."
    ],
    resources: [
      { title: "Rate Limiting Algorithms (ByteByteGo)", type: "video_en", url: "https://www.youtube.com/watch?v=FU4WlwfS3G0" },
      { title: "Rate Limiting System Design in Hindi (Gate Smashers)", type: "video_hi", url: "https://www.youtube.com/watch?v=dDkynerzV-Q" },
      { title: "Cloudflare Rate Limiting Docs", type: "official", url: "https://www.cloudflare.com/learning/bots/what-is-rate-limiting/" }
    ]
  },
  "disaster_recovery": {
    title: "Disaster Recovery",
    whyLearnThis: "Disaster Recovery (DR) plans ensure business continuity when cloud regions fail, datacenters flood, or ransomware strikes.",
    whenIsItUsed: "When designing enterprise business continuity and cloud architecture.",
    whereIsItUsed: "Multi-region cloud deployments, automated backup pipelines.",
    learningOutcomes: [
      "Define Recovery Point Objective (RPO) and Recovery Time Objective (RTO).",
      "Compare Backup & Restore, Pilot Light, Warm Standby, and Multi-Region Active-Active configurations.",
      "Conduct automated chaos engineering tests (Chaos Mesh, Gremlin)."
    ],
    commonMistakes: [
      "Never performing actual disaster recovery failover drills to test backups.",
      "Forgetting to replicate DNS routing and secret stores across regions."
    ],
    realWorldApplications: [
      "Failing over AWS US-East-1 to US-West-2 in under 5 minutes during cloud outages.",
      "Restoring database state to a precise timestamp after accidental deletion."
    ],
    resources: [
      { title: "Disaster Recovery Strategies (AWS)", type: "video_en", url: "https://www.youtube.com/watch?v=doc2vhQ3FwU" },
      { title: "RPO and RTO Explained in Hindi", type: "video_hi", url: "https://www.youtube.com/watch?v=k-Yaq8AHlBU" },
      { title: "AWS Disaster Recovery Whitepaper", type: "official", url: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html" }
    ]
  }
};
