import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "n_sdb_1": {
    whyLearnThis: "Scalability and performance are often confused, but they solve different problems. A system can be fast for 10 users (performant) but crash with 10,000 (not scalable). Understanding the difference dictates whether you optimize code or change the architecture.",
    whenIsItUsed: "When diagnosing system bottlenecks, preparing for traffic spikes, and designing systems that need to grow.",
    whereIsItUsed: "Every system design interview, capacity planning, and architectural reviews.",
    whatComesNext: "Latency vs Throughput",
    learningOutcomes: [
      "Define Performance (speed) and Scalability (ability to handle load).",
      "Differentiate between Vertical Scaling (Scale Up) and Horizontal Scaling (Scale Out).",
      "Understand the limits of vertical scaling (cost, hardware ceilings, single point of failure).",
      "Identify architectural patterns that enable horizontal scalability (statelessness, load balancing).",
      "Diagnose whether a bottleneck requires performance optimization or horizontal scaling."
    ],
    commonMistakes: [
      "Throwing hardware at a performance problem (bad code) instead of fixing the code.",
      "Designing stateful applications (storing session data in memory) which breaks horizontal scalability.",
      "Assuming horizontal scaling is always better—vertical scaling is often cheaper and simpler for small to medium apps."
    ],
    realWorldApplications: [
      "Upgrading an RDS instance from 4 cores to 16 cores to handle a sudden traffic spike (Vertical Scaling).",
      "Adding 5 more stateless web servers behind an AWS Application Load Balancer to handle Black Friday traffic (Horizontal Scaling).",
      "A startup moving session state to Redis so they can safely spin up multiple backend nodes."
    ],
    resources: [
      { type: "official", title: "AWS: Scalability and Performance", url: "https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/performance-efficiency.html" },
      { type: "video_en", title: "Scalability vs Performance (Gaurav Sen)", url: "https://www.youtube.com/watch?v=xpDnVSmNFX0" },
      { type: "video_hi", title: "Scalability vs Performance Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=kFzHufJ8PVg" },
      { type: "article", title: "Performance vs Scalability", url: "https://highscalability.com/" },
      { type: "github", title: "System Design Primer: Scalability", url: "https://github.com/donnemartin/system-design-primer#performance-vs-scalability" },
      { type: "cheat_sheet", title: "Scalability Patterns Cheat Sheet", url: "https://github.com/donnemartin/system-design-primer" },
      { type: "deep_dive", title: "Designing Data-Intensive Applications (Chapter 1)", url: "https://dataintensive.net/" }
    ]
  },
  "n_sdb_2": {
    whyLearnThis: "Latency is the time it takes to process a single request; throughput is how many requests the system handles per second. High throughput doesn't guarantee low latency. Understanding this trade-off is critical when designing APIs and data pipelines.",
    whenIsItUsed: "Defining Service Level Agreements (SLAs), optimizing database queries, and designing batch processing vs real-time systems.",
    whereIsItUsed: "High-frequency trading (latency focus), big data processing (throughput focus), user-facing web apps.",
    whatComesNext: "CAP Theorem",
    learningOutcomes: [
      "Define Latency (milliseconds) and Throughput (requests/second or MB/s).",
      "Understand how latency is affected by network distance, processing time, and disk I/O.",
      "Explain the concept of percentiles (p50, p95, p99) and why averages are misleading.",
      "Understand Little's Law and how concurrency relates to throughput and latency.",
      "Identify scenarios where maximizing throughput increases latency (e.g., batching)."
    ],
    commonMistakes: [
      "Measuring system performance using average (mean) latency instead of p95 or p99, ignoring the long tail of slow requests.",
      "Assuming adding more servers always reduces latency (it increases throughput, but latency is bound by the slowest single component).",
      "Ignoring the speed of light—data takes time to travel globally, which is why CDNs exist."
    ],
    realWorldApplications: [
      "A video streaming service prioritizing high throughput (MB/s) over millisecond latency to deliver 4K video.",
      "A multiplayer gaming server prioritizing ultra-low latency (<20ms) over high throughput.",
      "Kafka batching messages: intentionally increasing latency by 10ms to increase throughput by 10x."
    ],
    resources: [
      { type: "official", title: "Google Cloud: Latency and Throughput", url: "https://cloud.google.com/architecture/framework/performance/monitor-latency" },
      { type: "video_en", title: "Latency vs Throughput Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=lJ8ydIuPFeU" },
      { type: "video_hi", title: "Latency vs Throughput Hindi (Gate Smashers)", url: "https://www.youtube.com/watch?v=VKO1K8qyR8c" },
      { type: "article", title: "Understanding Latency vs Throughput", url: "https://www.cloudflare.com/learning/performance/latency/" },
      { type: "github", title: "Latency Numbers Every Programmer Should Know", url: "https://gist.github.com/jboner/2841832" },
      { type: "cheat_sheet", title: "System Design Latency Cheat Sheet", url: "https://colin-scott.github.io/personal_website/research/interactive_latency.html" },
      { type: "deep_dive", title: "The Tail at Scale (Jeff Dean)", url: "https://research.google/pubs/the-tail-at-scale/" }
    ]
  },
  "n_sdb_3": {
    whyLearnThis: "The CAP Theorem is the most fundamental law of distributed systems. It dictates that in the presence of a network partition, you must choose between Consistency and Availability. You cannot have both. This defines which database you choose for a problem.",
    whenIsItUsed: "Choosing a database technology, designing disaster recovery plans, and defending architectural choices in interviews.",
    whereIsItUsed: "Database selection (Cassandra vs MongoDB vs PostgreSQL), distributed consensus algorithms.",
    whatComesNext: "Load Balancing",
    learningOutcomes: [
      "Define Consistency, Availability, and Partition Tolerance.",
      "Explain why Partition Tolerance is unavoidable in distributed systems over the internet.",
      "Compare CP databases (MongoDB, HBase) vs AP databases (Cassandra, DynamoDB).",
      "Understand Eventual Consistency and how it trades immediate consistency for high availability.",
      "Explain PACELC theorem as an extension of CAP."
    ],
    commonMistakes: [
      "Claiming a system is 'CA'—in a distributed system over a network, network failures (Partitions) will happen. You must choose CP or AP.",
      "Assuming Consistency in CAP means the same thing as Consistency in ACID (they are different concepts).",
      "Believing the choice is binary—modern databases offer tunable consistency."
    ],
    realWorldApplications: [
      "A banking application choosing CP (Consistency) to ensure account balances are never wrong, even if the system goes down.",
      "Amazon's shopping cart choosing AP (Availability)—it's better to occasionally show an outdated cart than prevent a user from adding an item.",
      "Cassandra allowing developers to choose consistency levels per read/write query."
    ],
    resources: [
      { type: "official", title: "AWS: What is the CAP Theorem?", url: "https://aws.amazon.com/what-is/cap-theorem/" },
      { type: "video_en", title: "CAP Theorem in 3 Minutes (ByteByteGo)", url: "https://www.youtube.com/watch?v=k-Yaq8AHlFA" },
      { type: "video_hi", title: "CAP Theorem Hindi (Engineering Digest)", url: "https://www.youtube.com/watch?v=rb2R5I9S5d8" },
      { type: "article", title: "IBM: What is the CAP Theorem?", url: "https://www.ibm.com/topics/cap-theorem" },
      { type: "github", title: "System Design Primer: CAP Theorem", url: "https://github.com/donnemartin/system-design-primer#cap-theorem" },
      { type: "cheat_sheet", title: "Understanding the CAP Theorem", url: "https://www.ibm.com/topics/cap-theorem" },
      { type: "deep_dive", title: "Please stop calling databases CP or AP", url: "https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html" }
    ]
  },
  "n_sdn_1": {
    whyLearnThis: "Load balancers distribute incoming traffic across multiple servers to ensure no single server gets overwhelmed. They are the entry point of almost every scalable system, providing high availability, fault tolerance, and SSL termination.",
    whenIsItUsed: "Scaling web applications horizontally, enabling zero-downtime deployments, and handling traffic spikes.",
    whereIsItUsed: "Nginx, HAProxy, AWS ALB/NLB, Cloudflare, F5 Networks.",
    whatComesNext: "API Gateways",
    learningOutcomes: [
      "Differentiate between Layer 4 (Transport) and Layer 7 (Application) load balancing.",
      "Explain common routing algorithms (Round Robin, Least Connections, IP Hash).",
      "Understand SSL/TLS Termination and why it's done at the load balancer.",
      "Explain health checks and how LB handles node failures.",
      "Understand sticky sessions and why they are generally an anti-pattern for scalability."
    ],
    commonMistakes: [
      "Using Round Robin for servers with vastly different processing capacities or requests that have highly variable processing times.",
      "Implementing sticky sessions instead of using a distributed cache (like Redis) for session data.",
      "Making the Load Balancer a single point of failure (not running LB in Active-Passive or Active-Active modes)."
    ],
    realWorldApplications: [
      "Using an AWS Application Load Balancer (L7) to route `/api` traffic to one set of servers and `/images` to another.",
      "HAProxy terminating SSL connections, offloading the cryptographic CPU burden from backend web servers.",
      "Using IP Hashing to ensure a specific client's WebSocket connection always hits the same backend server."
    ],
    resources: [
      { type: "official", title: "AWS: What is Load Balancing?", url: "https://aws.amazon.com/what-is/load-balancing/" },
      { type: "video_en", title: "Load Balancing Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=K0Ta65OqQkY" },
      { type: "video_hi", title: "Load Balancer Hindi (Engineering Digest)", url: "https://www.youtube.com/watch?v=bIBC_RQtS2E" },
      { type: "article", title: "Layer 4 vs Layer 7 Load Balancing", url: "https://www.haproxy.com/blog/layer-4-and-layer-7-proxy-mode/" },
      { type: "github", title: "HAProxy Documentation", url: "https://github.com/haproxy/haproxy" },
      { type: "cheat_sheet", title: "NGINX: Load Balancing Guide", url: "https://www.nginx.com/resources/glossary/load-balancing/" },
      { type: "deep_dive", title: "System Design Interview: Design a Load Balancer", url: "https://www.educative.io/courses/grokking-the-system-design-interview" }
    ]
  },
  "n_sdn_2": {
    whyLearnThis: "In microservices architectures, exposing 50 different internal services to clients is a security and routing nightmare. An API Gateway sits between clients and services, handling authentication, rate limiting, logging, and request routing.",
    whenIsItUsed: "Transitioning from monolith to microservices, managing public APIs, and implementing centralized security.",
    whereIsItUsed: "Kong, Amazon API Gateway, Apigee, Express Gateway, Netflix Zuul.",
    whatComesNext: "WebSockets & Long Polling",
    learningOutcomes: [
      "Understand the difference between a Load Balancer and an API Gateway.",
      "Explain the cross-cutting concerns an API Gateway handles (Auth, Rate Limiting, CORS, Analytics).",
      "Understand Request/Response transformation and composition.",
      "Explain the Backend For Frontend (BFF) pattern.",
      "Identify the performance trade-offs of adding an extra network hop via a Gateway."
    ],
    commonMistakes: [
      "Putting business logic in the API Gateway—it should only handle routing and cross-cutting concerns.",
      "Creating a single monolithic API Gateway for a massive org, leading to deployment bottlenecks (use BFFs instead).",
      "Overconfiguring the Gateway to the point where it becomes a severe latency bottleneck."
    ],
    realWorldApplications: [
      "Using Kong API Gateway to validate JWT tokens before passing traffic to internal microservices.",
      "Amazon API Gateway mapping a public REST API request to an internal AWS Lambda function.",
      "Implementing a BFF (Backend For Frontend) API Gateway specifically tailored to aggregate data for a mobile app in one network call."
    ],
    resources: [
      { type: "official", title: "AWS: What is an API Gateway?", url: "https://aws.amazon.com/api-gateway/" },
      { type: "video_en", title: "API Gateway Pattern (Microservices)", url: "https://www.youtube.com/watch?v=jcibXVFiFek" },
      { type: "video_en", title: "Using The BFF Pattern Instead of API Gateway (ByteMonk)", url: "https://www.youtube.com/watch?v=b8wPnMtL_xU" },
      { type: "article", title: "Microservices: API Gateway Pattern (Chris Richardson)", url: "https://microservices.io/patterns/apigateway.html" },
      { type: "github", title: "Kong API Gateway", url: "https://github.com/Kong/kong" },
      { type: "cheat_sheet", title: "API Security Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" },
      { type: "deep_dive", title: "Netflix Tech Blog: Simian Army", url: "https://netflixtechblog.com/fault-tolerance-in-a-high-volume-distributed-system-91ab4faae74a" }
    ]
  },
  "n_sdn_3": {
    whyLearnThis: "HTTP is unidirectional (client requests, server responds). For real-time applications (chat, live sports, stock tickers), the server needs to push data to the client. Understanding the trade-offs between Polling, Long Polling, Server-Sent Events (SSE), and WebSockets is crucial for real-time architecture.",
    whenIsItUsed: "Building chat apps, live collaboration tools (Google Docs), real-time dashboards, and notifications.",
    whereIsItUsed: "Socket.io, SignalR, Pusher, MQTT, financial trading platforms.",
    whatComesNext: "SQL vs NoSQL",
    learningOutcomes: [
      "Differentiate between Short Polling (REST) and Long Polling.",
      "Explain how WebSockets provide full-duplex, persistent connections over TCP.",
      "Compare Server-Sent Events (SSE) (unidirectional) with WebSockets (bidirectional).",
      "Understand the challenges of load balancing and scaling stateful WebSocket connections.",
      "Choose the right real-time protocol based on application requirements."
    ],
    commonMistakes: [
      "Using WebSockets when Server-Sent Events (SSE) would suffice (e.g., for a one-way stock ticker).",
      "Forgetting that WebSocket connections are stateful—scaling requires a Pub/Sub backend (like Redis) so nodes can share messages.",
      "Using short polling for real-time features, hammering the server with useless HTTP requests."
    ],
    realWorldApplications: [
      "A chat application using WebSockets for real-time, two-way messaging between users.",
      "A live sports dashboard using Server-Sent Events (SSE) to push score updates to browsers efficiently.",
      "A legacy enterprise app using Long Polling because corporate firewalls aggressively block WebSocket traffic."
    ],
    resources: [
      { type: "official", title: "MDN: WebSockets API", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
      { type: "video_en", title: "WebSockets vs Long Polling vs SSE (Hussein Nasser)", url: "https://www.youtube.com/watch?v=1BfCnjr_Vjg" },
      { type: "video_hi", title: "WebSockets Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=xr5BLGxSuFs" },
      { type: "article", title: "The WebSocket API (Javascript.info)", url: "https://javascript.info/websocket" },
      { type: "github", title: "Socket.IO Source Code", url: "https://github.com/socketio/socket.io" },
      { type: "cheat_sheet", title: "Real-time Protocols Comparison", url: "https://ably.com/blog/websockets-vs-long-polling" },
      { type: "deep_dive", title: "Scaling WebSockets at Discord", url: "https://discord.com/blog/how-discord-handles-two-and-half-million-concurrent-voice-users-using-webrtc" }
    ]
  },
  "n_sdd_1": {
    whyLearnThis: "Choosing a database is a one-way door decision that impacts the entire lifecycle of an application. Understanding the relational vs non-relational divide helps you match the data model, scalability needs, and consistency requirements to the right tool.",
    whenIsItUsed: "Starting a new project, migrating a bottlenecked database, or answering the most common system design interview question.",
    whereIsItUsed: "PostgreSQL, MySQL (SQL) vs MongoDB, DynamoDB, Cassandra (NoSQL).",
    whatComesNext: "Database Sharding & Replication",
    learningOutcomes: [
      "Explain the ACID properties of relational databases.",
      "Understand the BASE properties of NoSQL databases.",
      "Compare schema-on-write (SQL) vs schema-on-read (NoSQL).",
      "Identify the 4 main types of NoSQL DBs (Key-Value, Document, Column-Family, Graph).",
      "Choose the right database paradigm for a given use case."
    ],
    commonMistakes: [
      "Choosing NoSQL 'because it's web scale' when the data is highly relational and requires complex joins.",
      "Choosing SQL for high-velocity, unstructured IoT time-series data.",
      "Ignoring that modern SQL databases (like Postgres) have excellent JSON/NoSQL capabilities."
    ],
    realWorldApplications: [
      "Using PostgreSQL for a financial application where ACID transactions (money transfers) are strictly required.",
      "Using MongoDB to store user profiles with highly variable, schema-less attributes.",
      "Using Cassandra (Column-Family) for a high-write-volume IoT sensor logging system."
    ],
    resources: [
      { type: "official", title: "AWS: SQL vs NoSQL", url: "https://aws.amazon.com/nosql/relational/" },
      { type: "video_en", title: "SQL vs NoSQL Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=ZSvTxVeoVBE" },
      { type: "video_hi", title: "SQL vs NoSQL in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=Oqz6Jp5raCo" },
      { type: "article", title: "When to use SQL vs NoSQL", url: "https://www.digitalocean.com/community/tutorials/sql-vs-nosql-a-brief-history" },
      { type: "github", title: "System Design: Database Section", url: "https://github.com/donnemartin/system-design-primer#sql-or-nosql" },
      { type: "cheat_sheet", title: "Database Selection Cheat Sheet", url: "https://www.ibm.com/topics/sql-vs-nosql" },
      { type: "deep_dive", title: "Martin Fowler: NoSQL Databases", url: "https://martinfowler.com/nosql.html" }
    ]
  },
  "n_sdd_2": {
    whyLearnThis: "When a database becomes too large for one server (vertical scaling ceiling) or too slow due to read volume, you must use replication and sharding. These are the primary techniques for horizontal database scaling.",
    whenIsItUsed: "Scaling databases for massive user bases, improving read throughput, and ensuring high availability/disaster recovery.",
    whereIsItUsed: "MongoDB Sharded Clusters, MySQL Read Replicas, Cassandra, Vitess.",
    whatComesNext: "Consistent Hashing",
    learningOutcomes: [
      "Differentiate between Replication (copying data) and Sharding/Partitioning (splitting data).",
      "Explain Master-Slave and Master-Master replication architectures.",
      "Understand asynchronous vs synchronous replication and the data loss implications.",
      "Explain Sharding strategies (Hash-based, Range-based, Directory-based).",
      "Identify the challenges of Sharding (complex queries, rebalancing, celebrity problem)."
    ],
    commonMistakes: [
      "Sharding too early—sharding adds massive operational complexity and should be avoided until vertical scaling and read replicas are exhausted.",
      "Choosing a bad Shard Key, resulting in 'hot spots' (e.g., sharding by country, overloading the US server).",
      "Assuming read replicas solve write bottlenecks."
    ],
    realWorldApplications: [
      "Adding 3 Read Replicas to a PostgreSQL database so analytical queries don't slow down primary transactional writes.",
      "Sharding a massive user database by hashing the `user_id`, distributing 100 million users evenly across 10 database nodes.",
      "Using Cross-Region Replication to ensure data survives an entire AWS region going down."
    ],
    resources: [
      { type: "official", title: "MongoDB: Sharding Documentation", url: "https://www.mongodb.com/docs/manual/sharding/" },
      { type: "video_en", title: "Database Sharding Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=ZSvTxVeoVBE" },
      { type: "video_hi", title: "Database Sharding Hindi (Gaurav Sen)", url: "https://www.youtube.com/watch?v=xpDnVSmNFX0" },
      { type: "article", title: "Understanding Database Sharding", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding" },
      { type: "github", title: "Vitess: Database clustering system for horizontal scaling", url: "https://github.com/vitessio/vitess" },
      { type: "cheat_sheet", title: "Database Scaling Cheat Sheet", url: "https://github.com/donnemartin/system-design-primer#database" },
      { type: "deep_dive", title: "Facebook: History of Database Infrastructure", url: "https://engineering.fb.com/category/core-data/" }
    ]
  },
  "n_sdd_3": {
    whyLearnThis: "If you shard a database using `hash(key) % N` servers, adding or removing a single server changes the remainder for almost every key, requiring a massive data migration. Consistent Hashing solves this, making caching and sharding dynamically scalable.",
    whenIsItUsed: "Designing distributed caches (Memcached), NoSQL databases (Cassandra, DynamoDB), and CDN load balancing.",
    whereIsItUsed: "Amazon Dynamo, Apache Cassandra, Discord (routing gateways), Memcached clients.",
    whatComesNext: "Caching Strategies",
    learningOutcomes: [
      "Explain the flaw with standard modulo hashing (`hash % N`) when node counts change.",
      "Understand the Consistent Hashing ring and how keys map to the nearest node on the ring.",
      "Explain how adding or removing a node only affects its immediate neighbors on the ring.",
      "Understand Virtual Nodes (vnodes) and how they solve data distribution imbalances on the ring.",
      "Apply consistent hashing to load balancing or caching scenarios."
    ],
    commonMistakes: [
      "Failing to use virtual nodes, resulting in one server holding 40% of the data and another holding 10% due to unequal ring placement.",
      "Overcomplicating architectures by implementing consistent hashing manually instead of using existing tools (like HAProxy or Cassandra) that handle it natively.",
      "Confusing consistent hashing with cryptographic hashing."
    ],
    realWorldApplications: [
      "Discord using consistent hashing to route websocket connections to the correct gateway server handling a specific guild.",
      "Cassandra using a consistent hashing ring to distribute terabytes of data across 100 nodes, allowing nodes to be added without downtime.",
      "A distributed Memcached cluster where adding a server only invalidates 1/N of the cache instead of the entire cache."
    ],
    resources: [
      { type: "official", title: "Cassandra: Consistent Hashing", url: "https://cassandra.apache.org/doc/latest/cassandra/architecture/dynamo.html" },
      { type: "video_en", title: "Consistent Hashing Explained (Gaurav Sen)", url: "https://www.youtube.com/watch?v=zaRkONvyGr8" },
      { type: "video_hi", title: "Consistent Hashing Hindi (Gate Smashers)", url: "https://www.youtube.com/watch?v=jqUNbqfsnuw" },
      { type: "article", title: "A Guide to Consistent Hashing", url: "https://highscalability.com/consistent-hashing-algorithm/" },
      { type: "github", title: "System Design Primer: Consistent Hashing", url: "https://github.com/donnemartin/system-design-primer#consistent-hashing" },
      { type: "cheat_sheet", title: "Dynamo Paper Summary", url: "https://www.allthingsdistributed.com/2007/10/amazons_dynamo.html" },
      { type: "deep_dive", title: "Stanford: Consistent Hashing Paper (Karger)", url: "https://www.akamai.com/es/es/multimedia/documents/technical-publication/consistent-hashing-and-random-trees-distributed-caching-protocols-for-relieving-hot-spots-on-the-world-wide-web-technical-publication.pdf" }
    ]
  },
  "n_sdc_1": {
    whyLearnThis: "Caching is the single most effective way to improve system performance and reduce database load. However, 'there are only two hard things in Computer Science: cache invalidation and naming things'. Understanding caching strategies prevents stale data bugs.",
    whenIsItUsed: "Optimizing API response times, reducing database load, and designing high-traffic read-heavy systems.",
    whereIsItUsed: "Application-level caching, Database caching, CDNs, Browser caching.",
    whatComesNext: "Redis & Memcached",
    learningOutcomes: [
      "Differentiate between Read-Through, Cache-Aside, Write-Through, and Write-Behind caching strategies.",
      "Understand cache eviction policies (LRU, LFU, FIFO).",
      "Explain the concept of Cache Stampede (Thundering Herd) and how to mitigate it with locking or jitter.",
      "Determine appropriate TTL (Time To Live) settings based on data volatility.",
      "Identify the trade-offs between local (in-memory) caching vs distributed caching."
    ],
    commonMistakes: [
      "Caching data that changes constantly (high write-to-read ratio), leading to massive invalidation overhead.",
      "Not handling cache misses efficiently, leading to database crashes during a Cache Stampede.",
      "Failing to set a TTL, causing the cache to eventually run out of memory."
    ],
    realWorldApplications: [
      "Using the Cache-Aside pattern in a Node.js API to fetch a user profile from Redis; if missing, fetch from Postgres and save to Redis.",
      "Implementing a Write-Behind cache to absorb millions of 'Likes' on a viral post, flushing to the database asynchronously in batches.",
      "Using an LRU (Least Recently Used) eviction policy to keep only active users in a memory-constrained Redis instance."
    ],
    resources: [
      { type: "official", title: "AWS: ElastiCache Overview", url: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html" },
      { type: "video_en", title: "Caching Strategies Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=dGAgxozNWFE" },
      { type: "video_hi", title: "Caching in System Design Hindi (Gate Smashers)", url: "https://www.youtube.com/watch?v=xBTGln828Ps" },
      { type: "article", title: "AWS: Caching Best Practices", url: "https://aws.amazon.com/caching/best-practices/" },
      { type: "github", title: "System Design: Caching", url: "https://github.com/donnemartin/system-design-primer#cache" },
      { type: "cheat_sheet", title: "Azure: Cache-Aside Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside" },
      { type: "deep_dive", title: "Facebook: Scaling Memcache", url: "https://www.usenix.org/system/files/conference/nsdi13/nsdi13-final170_update.pdf" }
    ]
  },
  "n_sdc_2": {
    whyLearnThis: "Redis and Memcached are the industry standards for distributed in-memory caching. Redis is basically the swiss army knife of system design, offering advanced data structures and persistence, while Memcached is a pure, ultra-fast key-value store.",
    whenIsItUsed: "Storing session data, caching API responses, rate limiting, leaderboards, and pub/sub messaging.",
    whereIsItUsed: "Redis (everywhere), Memcached (Facebook, legacy scaling), AWS ElastiCache.",
    whatComesNext: "CDN",
    learningOutcomes: [
      "Compare Redis and Memcached (data structures, persistence, threading model).",
      "Understand Redis data types (Strings, Hashes, Lists, Sets, Sorted Sets) and when to use them.",
      "Explain how Redis persists data (RDB snapshots vs AOF logs) and why it matters.",
      "Implement a basic Rate Limiter using Redis INCR and EXPIRE.",
      "Understand Redis Pub/Sub capabilities vs dedicated message queues."
    ],
    commonMistakes: [
      "Using the Redis `KEYS *` command in production, which blocks the single-threaded server and crashes the app.",
      "Treating Redis as a primary database without configuring persistence and high availability (Sentinel/Cluster).",
      "Using complex JSON strings in Redis instead of utilizing Hashes (`HSET`/`HGET`), wasting memory and CPU on serialization."
    ],
    realWorldApplications: [
      "A gaming application using Redis Sorted Sets (`ZADD`) to maintain a real-time global leaderboard.",
      "An API gateway using Redis to implement a distributed sliding-window rate limiter.",
      "A web app storing user session IDs in Redis, allowing any stateless backend server to authenticate requests."
    ],
    resources: [
      { type: "official", title: "Redis: LRU Cache Configuration", url: "https://redis.io/topics/lru-cache" },
      { type: "video_en", title: "Redis Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ" },
      { type: "video_hi", title: "Redis Tutorial in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=jNJIWQX64Bc" },
      { type: "article", title: "Redis vs Memcached: Which to Choose?", url: "https://aws.amazon.com/elasticache/redis-vs-memcached/" },
      { type: "github", title: "Redis Source Code", url: "https://github.com/redis/redis" },
      { type: "cheat_sheet", title: "Redis CLI Cheat Sheet", url: "https://gist.github.com/LeCoupa/985b82968d8285987dc3" },
      { type: "deep_dive", title: "Redis vs Memcached: Which to Choose?", url: "https://aws.amazon.com/elasticache/redis-vs-memcached/" }
    ]
  },
  "n_sdc_3": {
    whyLearnThis: "The speed of light limits how fast data can travel from a server in New York to a user in Tokyo. Content Delivery Networks (CDNs) solve this by pushing static assets (images, CSS, JS, videos) to edge servers physically located near the user.",
    whenIsItUsed: "Delivering static frontend assets, serving streaming video, and protecting against DDoS attacks.",
    whereIsItUsed: "Cloudflare, AWS CloudFront, Fastly, Akamai.",
    whatComesNext: "Message Queues (RabbitMQ)",
    learningOutcomes: [
      "Explain how a CDN utilizes Edge Locations and Origin Servers.",
      "Understand the difference between Push and Pull CDN configurations.",
      "Configure Cache-Control headers to optimize CDN edge caching.",
      "Explain how CDNs mitigate DDoS attacks.",
      "Understand edge computing (e.g., Cloudflare Workers, Lambda@Edge)."
    ],
    commonMistakes: [
      "Failing to set proper Cache-Control headers, causing the CDN to either not cache assets or cache dynamic user-specific data (privacy breach).",
      "Serving static assets directly from an expensive EC2 application server instead of offloading to S3 + CloudFront.",
      "Not versioning static assets (e.g., `app_v2.js`), making cache invalidation difficult during deployments."
    ],
    realWorldApplications: [
      "Netflix using a massive custom CDN (Open Connect) to cache 4K video files inside ISPs around the world.",
      "A React application deployed to an S3 bucket and served globally via AWS CloudFront.",
      "Using Cloudflare Workers to rewrite HTTP headers at the edge, before the request ever hits the origin server."
    ],
    resources: [
      { type: "official", title: "Cloudflare: What is a CDN?", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" },
      { type: "video_en", title: "CDN Explained (Hussein Nasser)", url: "https://www.youtube.com/watch?v=ouqqU0FJjhQ" },
      { type: "video_hi", title: "CDN Concept in Hindi (Gaurav Sen)", url: "https://www.youtube.com/watch?v=28fX5UaHmNs" },
      { type: "article", title: "AWS: Content Delivery Network", url: "https://aws.amazon.com/caching/cdn/" },
      { type: "github", title: "System Design: CDN Section", url: "https://github.com/donnemartin/system-design-primer#content-delivery-network" },
      { type: "cheat_sheet", title: "HTTP Cache-Control Headers Quick Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control" },
      { type: "deep_dive", title: "How Netflix distributes its content", url: "https://about.netflix.com/en/news/how-netflix-works-with-isps-around-the-globe-to-deliver-a-great-viewing-experience" }
    ]
  },
  "n_sdq_1": {
    whyLearnThis: "Synchronous API calls fail if the downstream service is slow or down. Message queues decouple services, allowing a fast producer to hand off work to a slow consumer asynchronously, ensuring durability and smoothing out traffic spikes.",
    whenIsItUsed: "Background task processing (email sending, video rendering), decoupling microservices, and load leveling.",
    whereIsItUsed: "RabbitMQ, AWS SQS, ActiveMQ, Celery (Python worker framework).",
    whatComesNext: "Event Streaming (Kafka)",
    learningOutcomes: [
      "Understand the Producer, Queue, and Consumer architecture.",
      "Explain the difference between synchronous (REST) and asynchronous (Queue) communication.",
      "Understand the concept of Dead Letter Queues (DLQ) for failed messages.",
      "Explain AMQP concepts (Exchanges, Bindings, Routing Keys) specific to RabbitMQ.",
      "Understand At-Most-Once, At-Least-Once, and Exactly-Once delivery semantics."
    ],
    commonMistakes: [
      "Using a message queue for operations where the user is actively waiting for an immediate response (increases latency).",
      "Failing to make consumers idempotent—if a message is delivered twice (At-Least-Once), the system must handle it safely.",
      "Not configuring a Dead Letter Queue, causing a 'poison pill' message to crash the consumer repeatedly."
    ],
    realWorldApplications: [
      "A user uploads a video; the API immediately returns 'Upload successful' and places a task on an SQS queue. A background worker picks it up to compress the video.",
      "An e-commerce checkout API places orders on a RabbitMQ queue. Inventory, Billing, and Shipping services consume the messages at their own pace.",
      "Sending 100,000 promotional emails by pushing 100,000 tasks to Celery/RabbitMQ, preventing the main web thread from blocking."
    ],
    resources: [
      { type: "official", title: "RabbitMQ: Getting Started", url: "https://www.rabbitmq.com/getstarted.html" },
      { type: "video_en", title: "Message Queues Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=OpcdvJLKSKU" },
      { type: "video_hi", title: "RabbitMQ Concept Hindi (Hindi)", url: "https://www.youtube.com/watch?v=khyHN9QEDTI" },
      { type: "article", title: "AWS: What is a Message Queue?", url: "https://aws.amazon.com/message-queue/" },
      { type: "github", title: "RabbitMQ Server Source", url: "https://github.com/rabbitmq/rabbitmq-server" },
      { type: "cheat_sheet", title: "RabbitMQ Exchange Types Visualized", url: "https://www.cloudamqp.com/blog/part4-rabbitmq-for-beginners-exchanges-routing-keys-bindings.html" },
      { type: "deep_dive", title: "Idempotency in Distributed Systems", url: "https://stripe.com/blog/idempotency" }
    ]
  },
  "n_sdq_2": {
    whyLearnThis: "Traditional message queues delete messages once consumed. Kafka acts as an immutable, distributed append-only log. This allows massive throughput and allows multiple different services to replay the same stream of events from any point in time.",
    whenIsItUsed: "Processing massive data streams, clickstream analysis, event sourcing, and real-time analytics.",
    whereIsItUsed: "Apache Kafka, AWS Kinesis, Confluent Cloud.",
    whatComesNext: "Pub/Sub Model",
    learningOutcomes: [
      "Differentiate between a Message Queue (RabbitMQ) and an Event Stream (Kafka).",
      "Explain Kafka architecture: Topics, Partitions, Brokers, and Zookeeper/Kraft.",
      "Understand Consumer Groups and how they enable horizontal scalability of consumers.",
      "Explain log retention and offset tracking in Kafka.",
      "Understand how partitioning guarantees message ordering for a specific key."
    ],
    commonMistakes: [
      "Using Kafka for simple background job queues (like sending emails) where RabbitMQ/SQS is much simpler.",
      "Assuming Kafka guarantees global ordering—Kafka only guarantees order *within a single partition*.",
      "Adding more consumers to a consumer group than there are partitions (the extra consumers will sit idle)."
    ],
    realWorldApplications: [
      "LinkedIn using Kafka to track every click, scroll, and view from millions of users in real-time.",
      "Uber processing millions of GPS location updates per second through Kafka for driver tracking and pricing.",
      "Microservices using Kafka as an Event Store for an Event Sourcing architecture, replaying history to build read models."
    ],
    resources: [
      { type: "official", title: "Apache Kafka Documentation", url: "https://kafka.apache.org/documentation/" },
      { type: "video_en", title: "Kafka in 100 Seconds", url: "https://www.youtube.com/watch?v=Ch5VhJzaoaI" },
      { type: "video_hi", title: "Apache Kafka Explained Hindi", url: "https://www.youtube.com/watch?v=HJsP4iqkhkI" },
      { type: "article", title: "Apache Kafka Introduction", url: "https://kafka.apache.org/intro" },
      { type: "github", title: "Apache Kafka Source", url: "https://github.com/apache/kafka" },
      { type: "cheat_sheet", title: "Kafka Quickstart Guide", url: "https://kafka.apache.org/quickstart" },
      { type: "deep_dive", title: "The World Beyond Batch: Streaming 101", url: "https://www.confluent.io/blog/apache-kafka-for-service-architectures/" }
    ]
  },
  "n_sdq_3": {
    whyLearnThis: "Pub/Sub (Publish/Subscribe) is a messaging pattern where publishers broadcast messages to topics without knowing who the subscribers are. It enables massive fan-out architectures where one event triggers dozens of independent reactions.",
    whenIsItUsed: "Real-time notifications, IoT telemetry, and triggering multi-service workflows from a single event.",
    whereIsItUsed: "Google Cloud Pub/Sub, AWS SNS, Redis Pub/Sub, MQTT.",
    whatComesNext: "Microservices Architecture",
    learningOutcomes: [
      "Understand the decoupling of Publishers and Subscribers via Topics.",
      "Differentiate between Point-to-Point (Queue) and Broadcast (Pub/Sub) patterns.",
      "Combine SNS (Pub/Sub) with SQS (Queue) for robust Fan-out architectures.",
      "Understand the push vs pull models of message delivery.",
      "Identify the limitations of Redis Pub/Sub (fire-and-forget, no persistence)."
    ],
    commonMistakes: [
      "Using Pub/Sub when exactly one worker should process a job (use a Queue instead).",
      "Using Redis Pub/Sub for critical data without realizing that messages sent when a subscriber is offline are permanently lost.",
      "Creating infinite message loops where Service A publishes Event X, Service B consumes X and publishes Y, and Service A consumes Y and publishes X."
    ],
    realWorldApplications: [
      "An IoT smart thermostat publishes temperature updates via MQTT. Both a mobile app and a data warehouse subscribe to the topic.",
      "AWS SNS receiving an 'Order Placed' event and fanning it out to three SQS queues: Inventory, Shipping, and Email.",
      "A chat application using Redis Pub/Sub to broadcast messages to all connected WebSocket servers."
    ],
    resources: [
      { type: "official", title: "Google Cloud: What is Pub/Sub?", url: "https://cloud.google.com/pubsub/docs/overview" },
      { type: "video_en", title: "Pub/Sub Pattern Explained", url: "https://www.youtube.com/watch?v=FMhbR_kQeHw" },
      { type: "video_hi", title: "Redis Pub/Sub Tutorial Hindi", url: "https://www.youtube.com/watch?v=uPMVIEfpjzo" },
      { type: "article", title: "AWS: SNS vs SQS", url: "https://aws.amazon.com/sns/faqs/#SQS_and_SNS" },
      { type: "github", title: "Redis Pub/Sub Documentation", url: "https://redis.io/docs/manual/pubsub/" },
      { type: "cheat_sheet", title: "Messaging Patterns Glossary", url: "https://www.enterpriseintegrationpatterns.com/" },
      { type: "deep_dive", title: "Enterprise Integration Patterns: Publish-Subscribe Channel", url: "https://www.enterpriseintegrationpatterns.com/patterns/messaging/PublishSubscribeChannel.html" }
    ]
  },
  "n_sdp_1": {
    whyLearnThis: "Microservices break a monolithic application into small, independently deployable services. While they solve organizational scaling problems, they introduce immense technical complexity (distributed data, network latency, deployment overhead).",
    whenIsItUsed: "When an engineering team grows too large to work in a single monolith, or when parts of an app have drastically different scaling profiles.",
    whereIsItUsed: "Netflix, Uber, Amazon, and almost every large tech company.",
    whatComesNext: "Event-Driven Architecture",
    learningOutcomes: [
      "Compare Monolithic vs Microservices architectures.",
      "Understand the principle of 'Database per Service' and why sharing databases violates microservices rules.",
      "Identify the operational requirements for microservices (CI/CD, Monitoring, Distributed Tracing).",
      "Explain the Strangler Fig pattern for migrating from Monolith to Microservices.",
      "Acknowledge the Fallacies of Distributed Computing."
    ],
    commonMistakes: [
      "Building a 'Distributed Monolith'—microservices that are so tightly coupled via synchronous REST calls that if one goes down, they all go down.",
      "Migrating to microservices prematurely before product-market fit or when the team is too small (e.g., < 10 engineers).",
      "Sharing a single database across multiple microservices."
    ],
    realWorldApplications: [
      "Netflix breaking their DVD rental monolith into hundreds of microservices to allow independent teams to deploy 100s of times per day.",
      "Uber splitting the passenger app, driver app, and billing system into separate services that scale independently.",
      "Using the Strangler Fig pattern to route `/api/new-feature` to a new microservice while `/api/old` still hits the legacy monolith."
    ],
    resources: [
      { type: "official", title: "AWS: What are Microservices?", url: "https://aws.amazon.com/microservices/" },
      { type: "video_en", title: "Microservices vs Monolith (ByteByteGo)", url: "https://www.youtube.com/watch?v=7IFJb-uLEaI" },
      { type: "video_hi", title: "Microservices Tutorial Hindi", url: "https://www.youtube.com/watch?v=ubHa5I3yP70" },
      { type: "article", title: "Martin Fowler: Microservices", url: "https://martinfowler.com/articles/microservices.html" },
      { type: "github", title: "Awesome Microservices", url: "https://github.com/mfornos/awesome-microservices" },
      { type: "cheat_sheet", title: "Microservices Design Patterns", url: "https://microservices.io/patterns/index.html" },
      { type: "deep_dive", title: "Building Microservices (Book by Sam Newman)", url: "https://samnewman.io/books/building_microservices/" }
    ]
  },
  "n_sdp_2": {
    whyLearnThis: "Synchronous microservices form fragile chains. Event-Driven Architecture (EDA) solves this by having services react to state changes (events) emitted to a central broker (like Kafka), creating highly decoupled and resilient systems.",
    whenIsItUsed: "Building robust microservices, real-time data pipelines, and complex business workflows spanning multiple domains.",
    whereIsItUsed: "E-commerce order fulfillment, financial ledgers, and IoT processing.",
    whatComesNext: "Rate Limiting & Circuit Breakers",
    learningOutcomes: [
      "Understand the core EDA components: Event Producers, Event Brokers, and Event Consumers.",
      "Differentiate between Event Notification, Event-Carried State Transfer, and Event Sourcing.",
      "Explain the CQRS (Command Query Responsibility Segregation) pattern.",
      "Understand the Saga pattern for distributed transactions across microservices.",
      "Identify the debugging challenges in heavily decoupled asynchronous systems."
    ],
    commonMistakes: [
      "Implementing distributed transactions using two-phase commit (2PC) instead of Sagas, ruining performance and availability.",
      "Relying on EDA without implementing Distributed Tracing (like Jaeger/OpenTelemetry), making it impossible to debug workflows.",
      "Confusing Commands (do this action) with Events (this thing happened)."
    ],
    realWorldApplications: [
      "An e-commerce site where the Order service emits `OrderPlaced`. The Payment and Inventory services react to it independently without the Order service knowing about them.",
      "Using Event Sourcing to store all account balance changes as an immutable sequence of events rather than just a current balance integer.",
      "Implementing a Choreography Saga: if Payment succeeds but Inventory fails, Inventory emits `InventoryFailed`, prompting Payment to issue a refund."
    ],
    resources: [
      { type: "official", title: "AWS: Event-Driven Architecture", url: "https://aws.amazon.com/event-driven-architecture/" },
      { type: "video_en", title: "Event-Driven Architecture (GOTO Conferences)", url: "https://www.youtube.com/watch?v=STKCRSUsyP0" },
      { type: "video_hi", title: "Event Driven Architecture Explained (Alex Hyett)", url: "https://www.youtube.com/watch?v=gOuAqRaDdHA" },
      { type: "article", title: "What do you mean by Event-Driven? (Martin Fowler)", url: "https://martinfowler.com/articles/201701-event-driven.html" },
      { type: "github", title: "Eventuate: Platform for Event-Driven Microservices", url: "https://github.com/eventuate-tram/eventuate-tram-core" },
      { type: "cheat_sheet", title: "Saga Pattern Reference", url: "https://microservices.io/patterns/data/saga.html" },
      { type: "deep_dive", title: "Designing Event-Driven Systems (O'Reilly PDF)", url: "https://www.confluent.io/designing-event-driven-systems/" }
    ]
  },
  "n_sdp_3": {
    whyLearnThis: "In distributed systems, failure is inevitable. If Service A is slow, and Service B keeps aggressively calling it, it will crash. Rate limiters protect from external abuse, while Circuit Breakers protect internal services from cascading failures.",
    whenIsItUsed: "Securing public APIs, maintaining system stability during traffic spikes, and preventing microservice chain reactions.",
    whereIsItUsed: "API Gateways, Hystrix, Resilience4j, Cloudflare.",
    whatComesNext: "System Design Complete",
    learningOutcomes: [
      "Explain the Circuit Breaker pattern states: Closed, Open, and Half-Open.",
      "Implement resilience patterns: Retries with Exponential Backoff and Jitter, and Timeouts.",
      "Understand Rate Limiting algorithms: Token Bucket, Leaky Bucket, and Sliding Window.",
      "Design a distributed rate limiter using Redis.",
      "Understand Load Shedding (dropping requests intentionally to save the system)."
    ],
    commonMistakes: [
      "Implementing aggressive retries without Exponential Backoff, inadvertently DDoS-ing your own failing service.",
      "Setting long timeouts on API calls, tying up server threads while waiting for a dead downstream service.",
      "Failing to provide a fallback response (e.g., returning cached data) when a Circuit Breaker opens."
    ],
    realWorldApplications: [
      "Netflix using Hystrix Circuit Breakers so that if the 'Recommendation Engine' fails, the UI falls back to showing a hardcoded 'Top 10' list instead of crashing.",
      "Twitter rate limiting users to 100 API calls per hour using a Redis Token Bucket algorithm to prevent abuse.",
      "AWS SDKs automatically applying Exponential Backoff and Jitter to failed requests."
    ],
    resources: [
      { type: "official", title: "Microsoft: Circuit Breaker Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker" },
      { type: "video_en", title: "Circuit Breaker Pattern (ByteByteGo)", url: "https://www.youtube.com/watch?v=ScIIc3IXg3A" },
      { type: "video_hi", title: "Rate Limiting Explained Hindi (Hindi)", url: "https://www.youtube.com/watch?v=A4t_q2mqTlo" },
      { type: "article", title: "Cloudflare: What is Rate Limiting?", url: "https://www.cloudflare.com/learning/bots/what-is-rate-limiting/" },
      { type: "github", title: "Resilience4j: Fault Tolerance Library", url: "https://github.com/resilience4j/resilience4j" },
      { type: "cheat_sheet", title: "Stripe: Rate Limiters and Architecture", url: "https://stripe.com/blog/rate-limiters" },
      { type: "deep_dive", title: "Amazon: Exponential Backoff and Jitter", url: "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/" }
    ]
  }
};
