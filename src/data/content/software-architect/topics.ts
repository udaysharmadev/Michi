import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "solid_principles": {
    whyLearnThis: "Writing code that works is easy. Writing code that survives changing business requirements without collapsing into a tangled mess of spaghetti is hard. SOLID principles are the foundation of maintainable, scalable Object-Oriented Design.",
    whenIsItUsed: "Designing classes, reviewing pull requests, and refactoring legacy code.",
    whereIsItUsed: "Object-Oriented Programming (Java, C#, TypeScript, Python).",
    whatComesNext: "DRY, KISS, YAGNI",
    learningOutcomes: [
      "Understand the Single Responsibility Principle (SRP): A class should have one reason to change.",
      "Understand the Open/Closed Principle (OCP): Open for extension, closed for modification.",
      "Understand the Liskov Substitution Principle (LSP): Subclasses must be substitutable for their base classes.",
      "Understand the Interface Segregation Principle (ISP): Many client-specific interfaces are better than one general-purpose interface.",
      "Understand the Dependency Inversion Principle (DIP): Depend upon abstractions, not concretions."
    ],
    commonMistakes: [
      "Creating massive 'God Classes' (e.g., `UserManager`) that handle database connections, email sending, and validation all at once (violates SRP).",
      "Using `if/else` chains to check the type of an object instead of using polymorphism (violates OCP).",
      "Forcing a class to implement an interface method it doesn't need, throwing a `NotImplementedException` (violates ISP)."
    ],
    realWorldApplications: [
      "Refactoring a `ReportGenerator` class so it only formats data (SRP), while a separate `ReportSender` class handles emailing the PDF.",
      "Using Dependency Injection in Spring Boot or NestJS to pass a `DatabaseRepository` interface into a service, rather than hardcoding a MySQL connection (DIP).",
      "Adding a new `CreditCardPayment` class that implements `IPaymentStrategy` without modifying the existing `Checkout` service code (OCP)."
    ],
    resources: [
      { type: "official", title: "Clean Code (Uncle Bob)", url: "https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html" },
      { type: "video_en", title: "SOLID Principles in 8 Minutes", url: "https://www.youtube.com/watch?v=rtmFCcjEgEw" },
      { type: "video_hi", title: "SOLID Principles Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "SOLID Principles Explained", url: "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/" },
      { type: "github", title: "SOLID Principles in TypeScript", url: "https://github.com/labs42io/clean-code-typescript#solid" },
      { type: "cheat_sheet", title: "SOLID Principles Cheat Sheet", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" },
      { type: "deep_dive", title: "The Clean Architecture (Uncle Bob)", url: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" }
    ]
  },
  "dry_kiss_yagni": {
    whyLearnThis: "Over-engineering is the silent killer of software projects. These three acronyms—Don't Repeat Yourself, Keep It Simple Stupid, and You Aren't Gonna Need It—are the philosophical guardrails that keep architecture pragmatic rather than purely academic.",
    whenIsItUsed: "Making design decisions, preventing premature optimization, and arguing against unnecessary features.",
    whereIsItUsed: "Every software engineering discipline.",
    whatComesNext: "Monolith vs Microservices",
    learningOutcomes: [
      "Understand DRY: Every piece of knowledge must have a single, unambiguous representation.",
      "Understand KISS: Simplicity should be a key goal in design; avoid unnecessary complexity.",
      "Understand YAGNI: Always implement things when you actually need them, never when you just foresee that you need them.",
      "Recognize the trade-off between DRY and coupling (sometimes repeating code is better than creating a highly coupled abstraction).",
      "Identify premature optimization."
    ],
    commonMistakes: [
      "Applying DRY to two blocks of code that look identical but represent completely different business domains (false duplication), resulting in a tightly coupled nightmare.",
      "Building a highly abstracted plugin system (violating YAGNI) for a feature that the product team isn't even sure users want yet.",
      "Writing 'clever' one-liners that are impossible for junior developers to read (violating KISS)."
    ],
    realWorldApplications: [
      "Extracting a shared `calculateTax()` function so you don't have to update tax logic in 5 different files when the law changes (DRY).",
      "Refusing to implement a multi-tenant database sharding strategy for a startup with only 100 users (YAGNI).",
      "Choosing a simple REST API over a complex GraphQL + Apollo Federation setup for a basic CRUD application (KISS)."
    ],
    resources: [
      { type: "official", title: "Martin Fowler: YAGNI", url: "https://martinfowler.com/bliki/Yagni.html" },
      { type: "video_en", title: "DRY, KISS, YAGNI Explained", url: "https://www.youtube.com/watch?v=hS5xSAyPzHs" },
      { type: "video_hi", title: "Programming Principles Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "The Rule of Three (Refactoring)", url: "https://blog.codinghorror.com/rule-of-three/" },
      { type: "github", title: "Clean Code JavaScript", url: "https://github.com/ryanmcdermott/clean-code-javascript" },
      { type: "cheat_sheet", title: "Software Design Principles Summary", url: "https://java-design-patterns.com/principles/" },
      { type: "deep_dive", title: "The Pragmatic Programmer (Book)", url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/" }
    ]
  },
  "monolith_vs_microservices": {
    whyLearnThis: "Choosing between a Monolith and Microservices is the most consequential architectural decision you can make. Get it wrong, and you either build a system that cannot scale with your organization, or you drown a small team in distributed systems complexity.",
    whenIsItUsed: "Starting a new project, scaling an engineering team, or modernizing legacy software.",
    whereIsItUsed: "System Architecture, DevOps, Organizational Design.",
    whatComesNext: "Event-Driven Architecture",
    learningOutcomes: [
      "Understand the benefits of a Monolith (simple deployment, easy debugging, no network latency).",
      "Understand the drivers for Microservices (independent deployability, scaling specific components, autonomous teams).",
      "Explain the concept of Conway's Law and how it impacts architecture.",
      "Understand the 'Distributed Monolith' anti-pattern.",
      "Explain the Strangler Fig pattern for migrating from a monolith."
    ],
    commonMistakes: [
      "Starting a new startup with 15 microservices before achieving product-market fit (Microservice Envy).",
      "Building microservices that all share the exact same relational database (violating the database-per-service rule).",
      "Ignoring the massive operational overhead of microservices (CI/CD, distributed tracing, network failure handling)."
    ],
    realWorldApplications: [
      "A 5-person startup building a robust Ruby on Rails monolith to iterate quickly and find product-market fit.",
      "Netflix breaking their monolith into hundreds of microservices so that 1,000+ engineers can deploy code independently without stepping on each other.",
      "Using an API Gateway to slowly route traffic away from a legacy monolith to new microservices one endpoint at a time (Strangler Fig)."
    ],
    resources: [
      { type: "official", title: "Martin Fowler: Microservices", url: "https://martinfowler.com/articles/microservices.html" },
      { type: "video_en", title: "Monolith vs Microservices (ByteByteGo)", url: "https://www.youtube.com/watch?v=k-Yaq8AHlFA" },
      { type: "video_hi", title: "Microservices Explained Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "MonolithFirst (Martin Fowler)", url: "https://martinfowler.com/bliki/MonolithFirst.html" },
      { type: "github", title: "Microservices Design Patterns", url: "https://github.com/mfornos/awesome-microservices" },
      { type: "cheat_sheet", title: "Microservices Patterns Overview", url: "https://microservices.io/" },
      { type: "deep_dive", title: "Building Microservices (Sam Newman)", url: "https://samnewman.io/books/building_microservices/" }
    ]
  },
  "event_driven": {
    whyLearnThis: "When microservices communicate via synchronous REST APIs, a failure in one service cascades through the system. Event-Driven Architecture (EDA) decouples services: they simply publish events to a broker and react to events asynchronously.",
    whenIsItUsed: "Building highly decoupled microservices, real-time data pipelines, and reactive systems.",
    whereIsItUsed: "Kafka, RabbitMQ, AWS EventBridge, SQS/SNS.",
    whatComesNext: "Event Sourcing & CQRS",
    learningOutcomes: [
      "Differentiate between Command (do this) and Event (this happened).",
      "Understand the Publisher-Subscriber (Pub/Sub) pattern.",
      "Explain Event Notification vs Event-Carried State Transfer.",
      "Understand the Saga pattern (Choreography vs Orchestration) for distributed transactions.",
      "Identify the debugging challenges in heavily asynchronous systems."
    ],
    commonMistakes: [
      "Creating 'Eventual Consistency' bugs where the UI assumes a write is finished immediately, but the backend event hasn't processed yet.",
      "Implementing a Choreography Saga that becomes too complex to track, forming an 'Event Spaghetti' architecture.",
      "Using a message queue for operations where the user is actively waiting for an immediate HTTP response."
    ],
    realWorldApplications: [
      "An E-commerce `OrderService` publishing an `OrderPlaced` event to Kafka. The `InventoryService` and `EmailService` consume it at their own pace.",
      "Implementing an Orchestration Saga using AWS Step Functions to manage a complex payment, fulfillment, and shipping workflow.",
      "Using AWS EventBridge to trigger a Lambda function every time a file is uploaded to an S3 bucket."
    ],
    resources: [
      { type: "official", title: "AWS: Event-Driven Architecture", url: "https://aws.amazon.com/event-driven-architecture/" },
      { type: "video_en", title: "Event-Driven Architecture (GOTO)", url: "https://www.youtube.com/watch?v=STKCRSUsyP0" },
      { type: "video_hi", title: "Event Driven Microservices Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "What do you mean by Event-Driven?", url: "https://martinfowler.com/articles/201701-event-driven.html" },
      { type: "github", title: "Eventuate: Event-Driven Framework", url: "https://github.com/eventuate-tram/eventuate-tram-core" },
      { type: "cheat_sheet", title: "Enterprise Integration Patterns", url: "https://www.enterpriseintegrationpatterns.com/" },
      { type: "deep_dive", title: "Designing Event-Driven Systems (Book)", url: "https://www.confluent.io/designing-event-driven-systems/" }
    ]
  },
  "serverless": {
    whyLearnThis: "Serverless architectures abstract away infrastructure management. You don't provision servers; you write code, deploy functions, and pay only for the exact milliseconds of compute time used. It fundamentally changes software economics.",
    whenIsItUsed: "Event-driven workloads, highly variable traffic (spiky loads), and rapid prototyping.",
    whereIsItUsed: "AWS Lambda, Google Cloud Functions, Vercel, DynamoDB.",
    whatComesNext: "Load Balancing",
    learningOutcomes: [
      "Understand the Serverless compute model (FaaS - Functions as a Service).",
      "Explain 'Cold Starts' and how to mitigate them.",
      "Understand the economic difference between Serverless (pay-per-invocation) and Provisioned (pay-per-hour).",
      "Design a Serverless API using API Gateway + Lambda + DynamoDB.",
      "Identify workloads that are terrible fits for Serverless (long-running, constant high compute)."
    ],
    commonMistakes: [
      "Using Serverless for a consistent, heavy 24/7 workload (it will be exponentially more expensive than an EC2 instance).",
      "Ignoring connection pooling when a Serverless function connects to a Relational Database, instantly exhausting the database connections.",
      "Failing to monitor timeout limits (e.g., AWS Lambda has a 15-minute maximum execution time)."
    ],
    realWorldApplications: [
      "A video processing app that triggers a Lambda function to compress a video every time a user uploads an MP4 to S3.",
      "Hosting a Next.js frontend on Vercel, which automatically deploys API routes as serverless functions worldwide.",
      "A startup using DynamoDB and Lambda to handle 0 traffic at night (costing $0) and instantly scaling to handle a viral traffic spike without manual intervention."
    ],
    resources: [
      { type: "official", title: "AWS Serverless", url: "https://aws.amazon.com/serverless/" },
      { type: "video_en", title: "Serverless Architecture (Fireship)", url: "https://www.youtube.com/watch?v=vxJobGtqKVM" },
      { type: "video_hi", title: "Serverless Computing Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Serverless Architectures (Martin Fowler)", url: "https://martinfowler.com/articles/serverless.html" },
      { type: "github", title: "Serverless Framework", url: "https://github.com/serverless/serverless" },
      { type: "cheat_sheet", title: "AWS Lambda Developer Guide", url: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" },
      { type: "deep_dive", title: "Serverless Best Practices", url: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html" }
    ]
  },
  "event_sourcing_cqrs": {
    whyLearnThis: "Traditional databases store only the *current* state. Event Sourcing stores every *change* as an immutable event (like a bank ledger). CQRS separates read models from write models, allowing massive scalability for complex domains.",
    whenIsItUsed: "Financial ledgers, complex collaborative domains (Google Docs), and high-scale enterprise systems.",
    whereIsItUsed: "Kafka, EventStoreDB, Axon Framework.",
    whatComesNext: "CAP Theorem",
    learningOutcomes: [
      "Explain Event Sourcing (storing state as a sequence of events).",
      "Understand how to rebuild application state by 'replaying' events.",
      "Explain Command Query Responsibility Segregation (CQRS).",
      "Understand how CQRS pairs with Event Sourcing to build highly optimized Read Projections.",
      "Identify the immense complexity and eventual consistency challenges these patterns introduce."
    ],
    commonMistakes: [
      "Applying CQRS and Event Sourcing to a simple CRUD application, increasing complexity by 10x for zero benefit.",
      "Designing mutable events (events must be immutable facts of things that happened in the past).",
      "Assuming the Read Model will update instantaneously after a Write (it is strictly eventually consistent)."
    ],
    realWorldApplications: [
      "A banking system where the balance isn't a column in a database, but the calculated sum of every `Deposit` and `Withdrawal` event ever recorded.",
      "An e-commerce cart that uses Event Sourcing so analysts can study exactly how users add, remove, and abandon items over time.",
      "Using CQRS to write commands to a normalized SQL database, which then publishes events to update a highly denormalized ElasticSearch read model."
    ],
    resources: [
      { type: "official", title: "Microsoft: CQRS Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs" },
      { type: "video_en", title: "CQRS and Event Sourcing Explained", url: "https://www.youtube.com/watch?v=hS5xSAyPzHs" },
      { type: "video_hi", title: "Event Sourcing Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Event Sourcing (Martin Fowler)", url: "https://martinfowler.com/eaaDev/EventSourcing.html" },
      { type: "github", title: "Axon Framework (Java CQRS)", url: "https://github.com/AxonFramework/AxonFramework" },
      { type: "cheat_sheet", title: "CQRS Cheat Sheet", url: "https://www.architect.io/blog/2021-02-23/cqrs-architecture-pattern/" },
      { type: "deep_dive", title: "Greg Young: CQRS and Event Sourcing", url: "https://www.youtube.com/watch?v=JHGkaShoyNs" }
    ]
  },
  "cap_theorem": {
    whyLearnThis: "The CAP Theorem is the law of physics for distributed systems. It dictates that in the presence of a network partition, you must choose between Consistency and Availability. This dictates your database architecture.",
    whenIsItUsed: "Choosing database technologies and designing disaster recovery systems.",
    whereIsItUsed: "Cassandra, MongoDB, PostgreSQL, DynamoDB.",
    whatComesNext: "SQL vs NoSQL",
    learningOutcomes: [
      "Define Consistency, Availability, and Partition Tolerance.",
      "Explain why Partition Tolerance is a hard requirement for network systems.",
      "Compare CP databases (Consistency over Availability) vs AP databases (Availability over Consistency).",
      "Understand the PACELC theorem as a modern extension of CAP.",
      "Understand tunable consistency (e.g., Cassandra's Quorum reads)."
    ],
    commonMistakes: [
      "Claiming a system is 'CA'—in a distributed system over the internet, network partitions WILL happen. You must choose CP or AP.",
      "Confusing 'Consistency' in CAP with 'Consistency' in ACID.",
      "Thinking the choice is binary (modern systems allow tuning consistency per query)."
    ],
    realWorldApplications: [
      "A banking ledger choosing CP (Consistency): if a network link goes down, the ATM refuses service rather than showing an incorrect balance.",
      "Amazon's shopping cart choosing AP (Availability): it is better to occasionally show an outdated cart than prevent a user from buying.",
      "Configuring a Cassandra read query to require a `QUORUM` of nodes to respond before returning data to the user."
    ],
    resources: [
      { type: "official", title: "AWS: What is the CAP Theorem?", url: "https://aws.amazon.com/what-is/cap-theorem/" },
      { type: "video_en", title: "CAP Theorem in 3 Minutes", url: "https://www.youtube.com/watch?v=k-Yaq8AHlFA" },
      { type: "video_hi", title: "CAP Theorem Hindi (Gaurav Sen)", url: "https://www.youtube.com/watch?v=xpDnVSmNFX0" },
      { type: "article", title: "IBM: What is the CAP Theorem?", url: "https://www.ibm.com/topics/cap-theorem" },
      { type: "github", title: "System Design Primer: CAP Theorem", url: "https://github.com/donnemartin/system-design-primer#cap-theorem" },
      { type: "cheat_sheet", title: "Understanding the CAP Theorem", url: "https://www.ibm.com/topics/cap-theorem" },
      { type: "deep_dive", title: "Please stop calling databases CP or AP", url: "https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html" }
    ]
  },
  "sql_vs_nosql": {
    whyLearnThis: "The database is the hardest part of an architecture to change later. Choosing between a relational (SQL) and non-relational (NoSQL) model dictates your data integrity, query flexibility, and horizontal scalability.",
    whenIsItUsed: "Architecting a new application or migrating an overwhelmed database.",
    whereIsItUsed: "PostgreSQL, MySQL vs MongoDB, DynamoDB, Cassandra.",
    whatComesNext: "Sharding & Replication",
    learningOutcomes: [
      "Compare ACID properties (SQL) with BASE properties (NoSQL).",
      "Understand schema-on-write (SQL) vs schema-on-read (NoSQL).",
      "Evaluate vertical scaling vs horizontal scaling implications.",
      "Choose the right NoSQL type: Document, Key-Value, Column-Family, or Graph.",
      "Understand polyglot persistence (using multiple database types in one architecture)."
    ],
    commonMistakes: [
      "Choosing MongoDB 'because it's web scale' when the data is highly relational (users, orders, products) and requires complex joins.",
      "Trying to use a relational database for massive, high-velocity, unstructured IoT time-series data.",
      "Failing to realize that modern PostgreSQL has excellent JSONb support that rivals document databases."
    ],
    realWorldApplications: [
      "Using PostgreSQL for the core transactional billing system (ACID required).",
      "Using DynamoDB (Key-Value) to store millions of user session tokens for a web application.",
      "Using Neo4j (Graph) to build a recommendation engine based on social connections."
    ],
    resources: [
      { type: "official", title: "AWS: SQL vs NoSQL", url: "https://aws.amazon.com/nosql/relational/" },
      { type: "video_en", title: "SQL vs NoSQL Explained", url: "https://www.youtube.com/watch?v=k-Yaq8AHlFA" },
      { type: "video_hi", title: "SQL vs NoSQL in Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "When to use SQL vs NoSQL", url: "https://www.digitalocean.com/community/tutorials/sql-vs-nosql-a-brief-history" },
      { type: "github", title: "System Design Database Section", url: "https://github.com/donnemartin/system-design-primer#sql-or-nosql" },
      { type: "cheat_sheet", title: "Database Selection Cheat Sheet", url: "https://www.ibm.com/topics/sql-vs-nosql" },
      { type: "deep_dive", title: "Martin Fowler: NoSQL Databases", url: "https://martinfowler.com/nosql.html" }
    ]
  },
  "sharding_replication": {
    whyLearnThis: "When a database becomes too large for a single server, or the read load becomes too high, you must distribute it. Replication copies data for safety and read speed; Sharding splits data for write throughput and massive storage.",
    whenIsItUsed: "Scaling databases for massive user bases and ensuring high availability.",
    whereIsItUsed: "MongoDB Sharded Clusters, MySQL Read Replicas, Vitess.",
    whatComesNext: "Caching Strategies",
    learningOutcomes: [
      "Differentiate between Replication (HA/Reads) and Sharding (Writes/Storage).",
      "Understand Master-Slave and Master-Master replication architectures.",
      "Explain Sharding strategies: Range-based, Hash-based, and Directory-based.",
      "Understand the challenges of sharding (cross-shard joins, rebalancing).",
      "Explain Consistent Hashing and why it solves the node-rebalancing problem."
    ],
    commonMistakes: [
      "Sharding prematurely. Sharding adds massive operational complexity; you should exhaust vertical scaling and read-replicas first.",
      "Choosing a bad Shard Key (e.g., sharding by timestamp, causing all new writes to hit a single 'hot' shard).",
      "Assuming read replicas solve a write-heavy bottleneck."
    ],
    realWorldApplications: [
      "Adding 3 Read Replicas to a PostgreSQL database so that BI reporting queries don't slow down the main transactional writes.",
      "Sharding a massive user database by hashing the `user_id`, distributing 100 million users evenly across 10 database nodes.",
      "Using Cross-Region Replication to ensure data survives an entire AWS region outage."
    ],
    resources: [
      { type: "official", title: "MongoDB Sharding Concepts", url: "https://www.mongodb.com/docs/manual/sharding/" },
      { type: "video_en", title: "Database Sharding Explained", url: "https://www.youtube.com/watch?v=k-Yaq8AHlFA" },
      { type: "video_hi", title: "Database Sharding Hindi", url: "https://www.youtube.com/watch?v=xpDnVSmNFX0" },
      { type: "article", title: "Understanding Database Sharding", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding" },
      { type: "github", title: "Vitess (Database Clustering System)", url: "https://github.com/vitessio/vitess" },
      { type: "cheat_sheet", title: "Scaling Databases Guide", url: "https://github.com/donnemartin/system-design-primer#database" },
      { type: "deep_dive", title: "Facebook: History of Database Infrastructure", url: "https://engineering.fb.com/category/core-data/" }
    ]
  },
  "load_balancing": {
    whyLearnThis: "A single server can only handle so much traffic. Load balancers sit in front of your servers, distributing incoming traffic across multiple instances to ensure high availability and horizontal scalability.",
    whenIsItUsed: "Scaling web applications, ensuring zero-downtime deployments.",
    whereIsItUsed: "AWS ALB/NLB, Nginx, HAProxy, Cloudflare.",
    whatComesNext: "Rate Limiting",
    learningOutcomes: [
      "Differentiate between Layer 4 (Transport) and Layer 7 (Application) load balancing.",
      "Understand routing algorithms: Round Robin, Least Connections, IP Hash.",
      "Explain SSL/TLS Termination at the load balancer.",
      "Understand Health Checks and how failed nodes are removed from the pool.",
      "Explain Sticky Sessions and why they are usually an anti-pattern."
    ],
    commonMistakes: [
      "Using sticky sessions instead of moving session state to a distributed cache (like Redis), defeating the purpose of stateless horizontal scaling.",
      "Making the Load Balancer a single point of failure (not having redundancy).",
      "Using Round Robin for servers with vastly different processing capacities."
    ],
    realWorldApplications: [
      "Using an AWS Application Load Balancer (Layer 7) to route `/api` traffic to a Node.js cluster and `/images` to an S3 bucket.",
      "HAProxy terminating SSL connections, offloading the CPU-intensive cryptography from the backend web servers.",
      "Configuring health checks so that if a backend server crashes, the load balancer stops sending it traffic within 5 seconds."
    ],
    resources: [
      { type: "official", title: "AWS: What is Load Balancing?", url: "https://aws.amazon.com/what-is/load-balancing/" },
      { type: "video_en", title: "Load Balancing Explained", url: "https://www.youtube.com/watch?v=K0Ta65OqQkY" },
      { type: "video_hi", title: "Load Balancer Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Layer 4 vs Layer 7 Load Balancing", url: "https://www.haproxy.com/blog/layer-4-and-layer-7-proxy-mode/" },
      { type: "github", title: "HAProxy Source Code", url: "https://github.com/haproxy/haproxy" },
      { type: "cheat_sheet", title: "NGINX: Load Balancing Guide", url: "https://www.nginx.com/resources/glossary/load-balancing/" },
      { type: "deep_dive", title: "System Design: Load Balancers", url: "https://github.com/donnemartin/system-design-primer#load-balancer" }
    ]
  },
  "rate_limiting": {
    whyLearnThis: "Public APIs will be abused. Rate limiters protect your system from DDoS attacks, brute-force login attempts, and noisy neighbors (users who consume all your resources).",
    whenIsItUsed: "Securing APIs, enforcing pricing tiers, and protecting downstream microservices.",
    whereIsItUsed: "API Gateways, Redis, Cloudflare, Nginx.",
    whatComesNext: "Caching Strategies",
    learningOutcomes: [
      "Understand the Token Bucket and Leaky Bucket algorithms.",
      "Understand Fixed Window vs Sliding Window rate limiting.",
      "Implement a distributed rate limiter using Redis.",
      "Explain the HTTP 429 Too Many Requests status code and `Retry-After` headers.",
      "Design a rate limiter for a distributed system."
    ],
    commonMistakes: [
      "Implementing rate limiting in application memory on a multi-server setup, meaning a user gets 100 requests *per server* instead of globally.",
      "Applying the same rate limit to simple GET requests and computationally expensive POST/Search requests.",
      "Failing to communicate rate limits back to the client via HTTP headers."
    ],
    realWorldApplications: [
      "Twitter rate limiting free API users to 100 tweets per hour using a Redis-backed Token Bucket algorithm.",
      "Cloudflare automatically blocking IP addresses that attempt 50 failed logins in 1 minute.",
      "An API Gateway enforcing different rate limits based on a user's subscription tier (Free vs Pro)."
    ],
    resources: [
      { type: "official", title: "Redis: Rate Limiting Patterns", url: "https://redis.com/glossary/rate-limiting/" },
      { type: "video_en", title: "Rate Limiting System Design", url: "https://www.youtube.com/watch?v=FU4WlwfS3G0" },
      { type: "video_hi", title: "Rate Limiting Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Stripe: Rate Limiters and Architecture", url: "https://stripe.com/blog/rate-limiters" },
      { type: "github", title: "System Design: Rate Limiter", url: "https://github.com/donnemartin/system-design-primer" },
      { type: "cheat_sheet", title: "Cloudflare: What is Rate Limiting?", url: "https://www.cloudflare.com/learning/bots/what-is-rate-limiting/" },
      { type: "deep_dive", title: "Design a Rate Limiter (ByteByteGo)", url: "https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter" }
    ]
  },
  "caching_strategies": {
    whyLearnThis: "Caching is the ultimate cheat code for system performance. It reduces database load and cuts latency from milliseconds to microseconds. However, caching invalidation is notoriously difficult.",
    whenIsItUsed: "Optimizing read-heavy systems, protecting databases from traffic spikes, and delivering static assets via CDNs.",
    whereIsItUsed: "Redis, Memcached, CloudFront, Browser Cache.",
    whatComesNext: "Message Queues",
    learningOutcomes: [
      "Understand caching layers: Client, CDN, Web Server, Application, Database.",
      "Explain Cache-Aside, Read-Through, Write-Through, and Write-Behind patterns.",
      "Understand eviction policies: LRU, LFU, FIFO.",
      "Mitigate Cache Stampedes (Thundering Herd problem).",
      "Configure HTTP Cache-Control headers properly."
    ],
    commonMistakes: [
      "Caching highly volatile data, causing constant invalidations and making the system slower than if there was no cache.",
      "Not handling cache misses properly during a traffic spike, leading to a Thundering Herd that crashes the database.",
      "Failing to set a TTL (Time to Live), causing the Redis instance to eventually run out of memory."
    ],
    realWorldApplications: [
      "Using the Cache-Aside pattern: The API checks Redis for a user profile; if missing, it queries PostgreSQL and writes the result to Redis for next time.",
      "Using a Write-Behind cache to absorb millions of 'Likes' on a viral post, then flushing them to the database asynchronously in batches.",
      "Using a CDN to cache static images globally, reducing load on the origin server by 90%."
    ],
    resources: [
      { type: "official", title: "AWS: ElastiCache Overview", url: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html" },
      { type: "video_en", title: "Caching Strategies Explained", url: "https://www.youtube.com/watch?v=dGAgxozNWFE" },
      { type: "video_hi", title: "Caching System Design Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "AWS: Caching Best Practices", url: "https://aws.amazon.com/caching/best-practices/" },
      { type: "github", title: "System Design: Cache", url: "https://github.com/donnemartin/system-design-primer#cache" },
      { type: "cheat_sheet", title: "Azure: Cache-Aside Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside" },
      { type: "deep_dive", title: "Scaling Memcache at Facebook (Paper)", url: "https://www.usenix.org/system/files/conference/nsdi13/nsdi13-final170_update.pdf" }
    ]
  },
  "message_queues": {
    whyLearnThis: "Synchronous systems fail when under heavy load. Message queues allow you to decouple services and process tasks asynchronously, smoothing out traffic spikes and providing extreme fault tolerance.",
    whenIsItUsed: "Background job processing, decoupling microservices, and load leveling.",
    whereIsItUsed: "RabbitMQ, Apache Kafka, AWS SQS, Celery.",
    whatComesNext: "Identity & Access",
    learningOutcomes: [
      "Understand the Producer -> Queue -> Consumer architecture.",
      "Explain the difference between Point-to-Point (Queue) and Publish-Subscribe (Topic).",
      "Understand Dead Letter Queues (DLQ) and retry mechanisms.",
      "Differentiate between Message Queues (RabbitMQ) and Event Streams (Kafka).",
      "Understand Idempotency and why consumers must safely handle duplicate messages."
    ],
    commonMistakes: [
      "Using a message queue for operations where the user interface is actively waiting for an immediate response.",
      "Writing consumers that are not idempotent. If a message is delivered twice (At-Least-Once delivery), the consumer might charge a credit card twice.",
      "Not setting up a Dead Letter Queue, causing a 'poison pill' message to crash the consumer in an infinite loop."
    ],
    realWorldApplications: [
      "A user uploads a video. The API immediately returns 'Success' and places a task on an SQS queue. A background worker picks it up and compresses the video.",
      "Sending 100,000 promotional emails by pushing 100,000 tasks to RabbitMQ, rather than blocking the main web server thread.",
      "An e-commerce order system publishing an `OrderPlaced` event to an SNS Topic, which fans out to three SQS queues (Inventory, Shipping, Billing)."
    ],
    resources: [
      { type: "official", title: "RabbitMQ Getting Started", url: "https://www.rabbitmq.com/getstarted.html" },
      { type: "video_en", title: "Message Queues Explained", url: "https://www.youtube.com/watch?v=k-Yaq8AHlFA" },
      { type: "video_hi", title: "RabbitMQ vs Kafka Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "AWS: What is a Message Queue?", url: "https://aws.amazon.com/message-queue/" },
      { type: "github", title: "System Design: Asynchronism", url: "https://github.com/donnemartin/system-design-primer#asynchronism" },
      { type: "cheat_sheet", title: "Messaging Patterns Overview", url: "https://www.enterpriseintegrationpatterns.com/" },
      { type: "deep_dive", title: "Stripe: Idempotency in APIs", url: "https://stripe.com/blog/idempotency" }
    ]
  },
  "identity_access": {
    whyLearnThis: "Security cannot be an afterthought. Implementing custom authentication is a massive security risk. Understanding OAuth2, OIDC, JWTs, and RBAC is mandatory for securing modern distributed applications.",
    whenIsItUsed: "Securing APIs, Single Sign-On (SSO), and managing user permissions.",
    whereIsItUsed: "Auth0, Keycloak, AWS Cognito, OAuth2, JWT.",
    whatComesNext: "Disaster Recovery",
    learningOutcomes: [
      "Differentiate between Authentication (Who are you?) and Authorization (What can you do?).",
      "Understand the OAuth 2.0 Authorization Code Flow.",
      "Explain OpenID Connect (OIDC) and how it adds authentication on top of OAuth2.",
      "Understand JSON Web Tokens (JWT): signing, verification, and expiration.",
      "Implement Role-Based Access Control (RBAC)."
    ],
    commonMistakes: [
      "Rolling your own cryptographic password hashing instead of using standard libraries (bcrypt, Argon2) or identity providers (Auth0).",
      "Storing sensitive data inside a JWT (JWTs are signed, not encrypted; anyone can decode the payload).",
      "Failing to implement JWT token revocation strategies (like short-lived access tokens paired with long-lived refresh tokens)."
    ],
    realWorldApplications: [
      "Using OAuth2 to allow a user to 'Sign in with Google' without your app ever seeing their password.",
      "Passing a JWT from a React frontend to a microservice API, which cryptographically verifies the token's signature without querying the database.",
      "Implementing RBAC so that users with the 'Admin' role can access the `/dashboard` route, while 'Users' receive a 403 Forbidden."
    ],
    resources: [
      { type: "official", title: "Auth0: What is OAuth 2.0?", url: "https://auth0.com/intro-to-iam/what-is-oauth-2" },
      { type: "video_en", title: "OAuth 2.0 and OpenID Connect (Okta)", url: "https://www.youtube.com/watch?v=996OiexHze0" },
      { type: "video_hi", title: "JWT Authentication Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Understanding JWTs", url: "https://jwt.io/introduction" },
      { type: "github", title: "Keycloak Identity and Access Management", url: "https://github.com/keycloak/keycloak" },
      { type: "cheat_sheet", title: "OWASP Authentication Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
      { type: "deep_dive", title: "OAuth 2.0 RFC Specification", url: "https://datatracker.ietf.org/doc/html/rfc6749" }
    ]
  },
  "disaster_recovery": {
    whyLearnThis: "Servers will burn, data centers will flood, and rogue interns will drop production databases. Hope is not a strategy. A Software Architect must design systems that can survive catastrophic failures with minimal data loss and downtime.",
    whenIsItUsed: "Architecting cloud infrastructure, passing compliance audits, and sleeping well at night.",
    whereIsItUsed: "AWS Multi-AZ, Cross-Region Replication, Backups.",
    whatComesNext: "Software Architect Complete",
    learningOutcomes: [
      "Understand RTO (Recovery Time Objective) and RPO (Recovery Point Objective).",
      "Differentiate between Active-Passive and Active-Active architectures.",
      "Design Multi-AZ (Availability Zone) and Multi-Region architectures.",
      "Explain the concept of Chaos Engineering.",
      "Develop comprehensive backup, restore, and failover testing strategies."
    ],
    commonMistakes: [
      "Backing up a database regularly but never actually testing the restore process (Schrödinger's Backup).",
      "Storing backups in the exact same physical region as the primary database.",
      "Designing an 'Active-Active' multi-region database without understanding the immense complexity of resolving write conflicts."
    ],
    realWorldApplications: [
      "Configuring Amazon RDS in Multi-AZ mode, so if a data center goes offline, the database automatically fails over to a standby replica in 60 seconds.",
      "Netflix using 'Chaos Monkey' to randomly terminate production servers during business hours to ensure the system automatically recovers.",
      "Using S3 Cross-Region Replication to ensure every uploaded document is stored in both Virginia and Oregon."
    ],
    resources: [
      { type: "official", title: "AWS Disaster Recovery Architecture", url: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/disaster-recovery-dr-architecture.html" },
      { type: "video_en", title: "Disaster Recovery in the Cloud", url: "https://www.youtube.com/watch?v=hS5xSAyPzHs" },
      { type: "video_hi", title: "Disaster Recovery Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Principles of Chaos Engineering", url: "https://principlesofchaos.org/" },
      { type: "github", title: "Chaos Mesh", url: "https://github.com/chaos-mesh/chaos-mesh" },
      { type: "cheat_sheet", title: "RTO vs RPO Cheat Sheet", url: "https://www.druva.com/blog/understanding-rpo-and-rto" },
      { type: "deep_dive", title: "Google SRE Book: Embracing Risk", url: "https://sre.google/sre-book/embracing-risk/" }
    ]
  }
};
