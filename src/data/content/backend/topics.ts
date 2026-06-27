import { TopicData } from "@/data/types";

export const backendTopics: Record<string, TopicData> = {
  // --- 1. Internet & Networking ---
  "n_bint_1": {
    title: "How The Internet Works",
    slug: "how-the-internet-works",
    whyLearnThis: "As a backend developer, your code lives on servers connected via the internet. Understanding how data travels across the globe is foundational.",
    whenIsItUsed: "Whenever debugging network latency, configuring firewalls, or designing distributed systems.",
    whereIsItUsed: "Routers, Switches, TCP/IP Stack.",
    whatComesNext: "HTTP / HTTPS",
    learningOutcomes: [
      "Understand packets and routing.",
      "Explain the difference between TCP and UDP.",
      "Understand IP addresses and ports.",
      "Grasp the concept of latency and bandwidth."
    ],
    commonMistakes: [
      "Assuming the internet is a single cloud rather than a physical network of cables.",
      "Confusing bandwidth (capacity) with latency (speed/delay)."
    ],
    realWorldApplications: [
      "Choosing UDP for a real-time multiplayer game server.",
      "Using ping and traceroute to debug why a server is unreachable."
    ],
    resources: [
      { type: "video_en", title: "How the Internet Works in 5 Minutes", url: "https://www.youtube.com/watch?v=7_LPdttKXPc" },
      { type: "article", title: "MDN: How does the Internet work?", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work" },
      { type: "official", title: "Stanford Intro to Networking", url: "https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm" },
      { type: "video_hi", title: "How Internet Works? (Hindi)", url: "https://www.youtube.com/watch?v=4pPEw3-a3b0" },
      { type: "github", title: "Networking Roadmap", url: "https://github.com/kamranahmedse/developer-roadmap" },
      { type: "cheat_sheet", title: "Networking Cheat Sheet", url: "https://www.comparitech.com/net-admin/network-admin-cheat-sheet/" },
      { type: "deep_dive", title: "Submarine Cable Map", url: "https://www.submarinecablemap.com/" }
    ]
  },
  "n_bint_2": {
    title: "Http Https",
    slug: "http-https",
    whyLearnThis: "HTTP is the language of the Web. Your backend APIs will constantly receive HTTP requests and send HTTP responses.",
    whenIsItUsed: "Handling API requests, setting headers, configuring security, and debugging client-server communication.",
    whereIsItUsed: "Node.js (req/res), Postman, cURL.",
    whatComesNext: "DNS",
    learningOutcomes: [
      "Understand the HTTP request/response cycle.",
      "Master HTTP Methods (GET, POST, PUT, DELETE, PATCH).",
      "Understand HTTP Status Codes (2xx, 3xx, 4xx, 5xx).",
      "Explain how HTTPS encrypts traffic using TLS/SSL."
    ],
    commonMistakes: [
      "Returning a 200 OK status code when an error occurred.",
      "Sending sensitive data (like passwords) over plain HTTP."
    ],
    realWorldApplications: [
      "Setting CORS headers to allow a frontend app to access the backend.",
      "Configuring a reverse proxy to terminate SSL."
    ],
    resources: [
      { type: "official", title: "MDN: An overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
      { type: "video_en", title: "HTTP Crash Course & Exploration", url: "https://www.youtube.com/watch?v=iYM2zFP3Zn0" },
      { type: "video_hi", title: "HTTP vs HTTPS in Hindi", url: "https://www.youtube.com/watch?v=eXN3T4BvG2c" },
      { type: "article", title: "How HTTPS Works", url: "https://howhttps.works/" },
      { type: "github", title: "Public APIs for HTTP Testing", url: "https://github.com/public-apis/public-apis" },
      { type: "cheat_sheet", title: "HTTP Status Codes", url: "https://httpstatuses.com/" },
      { type: "deep_dive", title: "High Performance Browser Networking", url: "https://hpbn.co/" }
    ]
  },
  "n_bint_3": {
    title: "Dns",
    slug: "dns",
    whyLearnThis: "DNS (Domain Name System) translates human-readable domain names (google.com) into machine-readable IP addresses. You must understand it to deploy apps.",
    whenIsItUsed: "When pointing a domain name to a server or load balancer.",
    whereIsItUsed: "Cloudflare, Route 53, Namecheap, GoDaddy.",
    whatComesNext: "OSI Model",
    learningOutcomes: [
      "Understand A, AAAA, and CNAME records.",
      "Understand TXT records and MX records.",
      "Explain how DNS propagation works.",
      "Understand the role of Nameservers."
    ],
    commonMistakes: [
      "Using an A record to point to another domain instead of a CNAME.",
      "Forgetting that DNS changes can take up to 48 hours to propagate globally."
    ],
    realWorldApplications: [
      "Configuring a custom domain for a newly launched API.",
      "Setting up TXT records to verify domain ownership for email sending (SPF/DKIM)."
    ],
    resources: [
      { type: "official", title: "Cloudflare: What is DNS?", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
      { type: "video_en", title: "DNS Explained (PowerCert)", url: "https://www.youtube.com/watch?v=mpQZVYPuDGU" },
      { type: "video_hi", title: "DNS Tutorial in Hindi", url: "https://www.youtube.com/watch?v=R9p0kS-E1_8" },
      { type: "article", title: "A guide to DNS records", url: "https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts" },
      { type: "github", title: "DNS Tools", url: "https://github.com/topics/dns-tools" },
      { type: "cheat_sheet", title: "DNS Record Types Cheat Sheet", url: "https://simpledns.plus/help/dns-record-types" },
      { type: "deep_dive", title: "Comic: How DNS Works", url: "https://howdns.works/" }
    ]
  },
  "n_bint_4": {
    title: "Osi Model",
    slug: "osi-model",
    whyLearnThis: "The OSI model is a conceptual framework that helps you understand how different network protocols interact. It is essential for advanced debugging.",
    whenIsItUsed: "When debugging complex network issues or learning about firewalls and load balancing (e.g., L4 vs L7 load balancing).",
    whereIsItUsed: "Network architecture, DevOps, System Design.",
    whatComesNext: "Backend Languages",
    learningOutcomes: [
      "Memorize the 7 layers (Physical, Data Link, Network, Transport, Session, Presentation, Application).",
      "Understand where TCP/UDP fits (Layer 4).",
      "Understand where HTTP fits (Layer 7).",
      "Explain the difference between Layer 4 and Layer 7 load balancing."
    ],
    commonMistakes: [
      "Overcomplicating the model (it's just a conceptual tool, real networking usually uses the simpler TCP/IP model).",
      "Confusing Layer 3 (IP) with Layer 4 (TCP/UDP)."
    ],
    realWorldApplications: [
      "Setting up an AWS Application Load Balancer (Layer 7) to route traffic based on URL paths.",
      "Configuring a Network Load Balancer (Layer 4) for extreme low latency."
    ],
    resources: [
      { type: "official", title: "Cloudflare: What is the OSI Model?", url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/" },
      { type: "video_en", title: "OSI Model Explained (NetworkChuck)", url: "https://www.youtube.com/watch?v=kjtMg3zUswg" },
      { type: "video_hi", title: "OSI Model in Hindi", url: "https://www.youtube.com/watch?v=Gk743wB_JvI" },
      { type: "article", title: "L4 vs L7 Load Balancing", url: "https://www.nginx.com/resources/glossary/layer-4-load-balancing/" },
      { type: "github", title: "Computer Networking Notes", url: "https://www.nginx.com/resources/glossary/layer-4-load-balancing/" },
      { type: "cheat_sheet", title: "OSI Model Cheat Sheet", url: "https://www.stationx.net/osi-model-cheat-sheet/" },
      { type: "deep_dive", title: "TCP/IP vs OSI Model", url: "https://www.geeksforgeeks.org/differences-between-tcp-ip-and-osi-model/" }
    ]
  },
  // --- 2. Backend Languages ---
  "n_blang_1": {
    title: "Nodejs",
    slug: "nodejs",
    whyLearnThis: "Node.js allows you to run JavaScript on the server, meaning you can write your entire stack in one language. It is incredibly fast and excels at I/O heavy operations.",
    whenIsItUsed: "Building real-time apps, APIs, microservices, and streaming services.",
    whereIsItUsed: "Express.js, NestJS, AWS Lambda.",
    whatComesNext: "Python",
    learningOutcomes: [
      "Understand the Event Loop and non-blocking I/O.",
      "Work with the File System (fs) and Path modules.",
      "Use Streams and Buffers for large data.",
      "Build a simple HTTP server."
    ],
    commonMistakes: [
      "Writing CPU-intensive synchronous code that blocks the entire Event Loop.",
      "Not understanding how `require` (CommonJS) differs from `import` (ESM)."
    ],
    realWorldApplications: [
      "Building a real-time chat server with Socket.io.",
      "Creating a high-throughput REST API using Express."
    ],
    resources: [
      { type: "official", title: "Node.js Documentation", url: "https://nodejs.org/en/docs/" },
      { type: "video_en", title: "Node.js Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
      { type: "video_hi", title: "Node.js Tutorial in Hindi", url: "https://www.youtube.com/watch?v=BLl32FvcdVM" },
      { type: "article", title: "The Node.js Event Loop", url: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" },
      { type: "github", title: "Awesome Node.js", url: "https://github.com/sindresorhus/awesome-nodejs" },
      { type: "cheat_sheet", title: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" },
      { type: "deep_dive", title: "Understanding Node.js Architecture", url: "https://www.youtube.com/watch?v=zphcsoSJMvM" }
    ]
  },
  "n_blang_2": {
    title: "Python",
    slug: "python",
    whyLearnThis: "Python is readable, versatile, and the undisputed king of Data Science, AI, and Machine Learning. In backend, Django and FastAPI are immensely popular.",
    whenIsItUsed: "When building data-heavy applications, rapid prototyping, or integrating with machine learning models.",
    whereIsItUsed: "Django, Flask, FastAPI.",
    whatComesNext: "Java",
    learningOutcomes: [
      "Master Python data structures (lists, dicts, sets).",
      "Understand OOP and magic methods in Python.",
      "Use decorators and generators.",
      "Understand the Global Interpreter Lock (GIL)."
    ],
    commonMistakes: [
      "Trying to write Python code exactly like Java (ignoring 'Pythonic' idioms).",
      "Not managing dependencies with virtual environments (venv, poetry)."
    ],
    realWorldApplications: [
      "Building a high-performance ML inference API using FastAPI.",
      "Rapidly developing a content management system using Django."
    ],
    resources: [
      { type: "official", title: "Python Official Docs", url: "https://docs.python.org/3/" },
      { type: "video_en", title: "Python Tutorial for Beginners (Programming with Mosh)", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
      { type: "video_hi", title: "Python in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=aqvDTCpNRek" },
      { type: "article", title: "Real Python Tutorials", url: "https://realpython.com/" },
      { type: "github", title: "Awesome Python", url: "https://github.com/vinta/awesome-python" },
      { type: "cheat_sheet", title: "Python Cheat Sheet", url: "https://www.pythoncheatsheet.org/" },
      { type: "deep_dive", title: "Understanding the Python GIL", url: "https://realpython.com/python-gil/" }
    ]
  },
  "n_blang_3": {
    title: "Java",
    slug: "java",
    whyLearnThis: "Java is the backbone of enterprise software. It is strictly typed, highly scalable, and runs anywhere via the JVM.",
    whenIsItUsed: "Building large-scale enterprise systems, banking applications, and complex architectures.",
    whereIsItUsed: "Spring Boot, Android Development, Hadoop.",
    whatComesNext: "Go",
    learningOutcomes: [
      "Master core Object-Oriented Programming principles.",
      "Understand the Java Virtual Machine (JVM) and Garbage Collection.",
      "Work with the Java Collections Framework.",
      "Understand multi-threading and concurrency in Java."
    ],
    commonMistakes: [
      "Overusing class inheritance instead of composition, leading to rigid class hierarchies.",
      "Ignoring memory leaks caused by holding references to unused objects."
    ],
    realWorldApplications: [
      "Building a highly secure, transaction-heavy banking system with Spring Boot.",
      "Creating microservices that run efficiently in a Kubernetes cluster."
    ],
    resources: [
      { type: "official", title: "Java Documentation", url: "https://docs.oracle.com/en/java/" },
      { type: "video_en", title: "Java Full Course (FreeCodeCamp)", url: "https://www.youtube.com/watch?v=grEKMHGYyns" },
      { type: "video_hi", title: "Java Tutorial in Hindi", url: "https://www.youtube.com/watch?v=UmnCZ7-9yDY" },
      { type: "article", title: "Baeldung: Deep Dive into Spring", url: "https://www.baeldung.com/" },
      { type: "github", title: "Awesome Java", url: "https://github.com/akullpp/awesome-java" },
      { type: "cheat_sheet", title: "Java Cheat Sheet", url: "https://www.codecademy.com/learn/learn-java/modules/learn-java-variables/cheatsheet" },
      { type: "deep_dive", title: "How the JVM works", url: "https://dzone.com/articles/jvm-architecture-explained" }
    ]
  },
  "n_blang_4": {
    title: "Go",
    slug: "go",
    whyLearnThis: "Go (Golang) was built by Google for modern, concurrent, and highly scalable network services. It compiles to machine code and is blazing fast.",
    whenIsItUsed: "Building high-performance microservices, CLI tools, and cloud-native infrastructure (Docker/K8s are written in Go).",
    whereIsItUsed: "Microservices, gRPC servers, cloud tools.",
    whatComesNext: "Rust",
    learningOutcomes: [
      "Master Go syntax and structs.",
      "Understand Interfaces and implicit implementation.",
      "Use Goroutines and Channels for easy concurrency.",
      "Handle errors explicitly using the `error` interface."
    ],
    commonMistakes: [
      "Trying to use traditional OOP patterns (classes/inheritance) instead of interfaces and structs.",
      "Ignoring error returns, causing silent failures."
    ],
    realWorldApplications: [
      "Building a high-throughput websocket server capable of handling millions of connections.",
      "Creating a custom Kubernetes controller."
    ],
    resources: [
      { type: "official", title: "Tour of Go", url: "https://go.dev/tour/welcome/1" },
      { type: "video_en", title: "Go Crash Course (FreeCodeCamp)", url: "https://www.youtube.com/watch?v=YS4e4q9oBaU" },
      { type: "video_hi", title: "Golang Tutorial in Hindi", url: "https://www.youtube.com/watch?v=P_XqR_x-vX8" },
      { type: "article", title: "Go by Example", url: "https://gobyexample.com/" },
      { type: "github", title: "Awesome Go", url: "https://github.com/avelino/awesome-go" },
      { type: "cheat_sheet", title: "Go Cheat Sheet", url: "https://devhints.io/go" },
      { type: "deep_dive", title: "Concurrency in Go", url: "https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/" }
    ]
  },
  "n_blang_5": {
    title: "Rust",
    slug: "rust",
    whyLearnThis: "Rust offers the speed of C++ with guaranteed memory safety. It prevents segfaults and data races at compile time via its unique ownership model.",
    whenIsItUsed: "When writing system-level tools, WebAssembly, or backend services where performance and safety are absolutely critical.",
    whereIsItUsed: "Actix-web, CLI tools, embedded systems.",
    whatComesNext: "SQL Basics",
    learningOutcomes: [
      "Master the Ownership, Borrowing, and Lifetimes concepts.",
      "Understand the Cargo package manager.",
      "Use Enums and Pattern Matching.",
      "Handle errors using `Result` and `Option` types."
    ],
    commonMistakes: [
      "Fighting the borrow checker instead of rethinking how data ownership should flow.",
      "Using `.unwrap()` indiscriminately instead of properly handling errors."
    ],
    realWorldApplications: [
      "Writing an ultra-fast REST API using Actix-Web that uses fractions of a megabyte of RAM.",
      "Building a CLI tool that processes gigabytes of text instantly."
    ],
    resources: [
      { type: "official", title: "The Rust Programming Language (The Book)", url: "https://doc.rust-lang.org/book/" },
      { type: "video_en", title: "Rust Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=zF34dRivLOw" },
      { type: "video_hi", title: "Rust Programming in Hindi", url: "https://www.youtube.com/watch?v=eB1xU0M392c" },
      { type: "article", title: "Rust by Example", url: "https://doc.rust-lang.org/rust-by-example/" },
      { type: "github", title: "Awesome Rust", url: "https://github.com/rust-unofficial/awesome-rust" },
      { type: "cheat_sheet", title: "Rust Cheat Sheet", url: "https://cheats.rs/" },
      { type: "deep_dive", title: "Fearless Concurrency in Rust", url: "https://doc.rust-lang.org/book/ch16-00-concurrency.html" }
    ]
  },
  // --- 3. Relational Databases ---
  "n_rdb_1": {
    title: "Sql Basics",
    slug: "sql-basics",
    whyLearnThis: "SQL (Structured Query Language) is how you talk to relational databases. It has been the industry standard for decades and is absolutely essential.",
    whenIsItUsed: "Whenever retrieving, inserting, updating, or deleting structured data.",
    whereIsItUsed: "PostgreSQL, MySQL, SQLite, Oracle.",
    whatComesNext: "PostgreSQL",
    learningOutcomes: [
      "Write standard CRUD queries (SELECT, INSERT, UPDATE, DELETE).",
      "Understand filtering (WHERE, LIKE, IN).",
      "Perform INNER, LEFT, and RIGHT JOINs.",
      "Use aggregation functions (GROUP BY, COUNT, SUM)."
    ],
    commonMistakes: [
      "Writing raw SQL with user input directly concatenated, causing SQL Injection vulnerabilities.",
      "Running an UPDATE or DELETE without a WHERE clause, destroying entire tables."
    ],
    realWorldApplications: [
      "Writing a query to find the top 5 highest-paying customers in an e-commerce database.",
      "Joining a 'Users' table with a 'Posts' table to render a timeline."
    ],
    resources: [
      { type: "official", title: "SQL Tutorial (W3Schools)", url: "https://www.w3schools.com/sql/" },
      { type: "video_en", title: "SQL Crash Course (FreeCodeCamp)", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { type: "video_hi", title: "SQL Full Course in Hindi", url: "https://www.youtube.com/watch?v=BpHJE-HnE6k" },
      { type: "article", title: "Select Star SQL", url: "https://selectstarsql.com/" },
      { type: "github", title: "Awesome SQL", url: "https://selectstarsql.com/" },
      { type: "cheat_sheet", title: "SQL Cheat Sheet", url: "https://www.sqltutorial.org/sql-cheat-sheet/" },
      { type: "deep_dive", title: "Use The Index, Luke! (SQL Performance)", url: "https://use-the-index-luke.com/" }
    ]
  },
  "n_rdb_2": {
    title: "Postgresql",
    slug: "postgresql",
    whyLearnThis: "PostgreSQL is the world's most advanced open-source relational database. It is incredibly robust, highly compliant with SQL standards, and widely used.",
    whenIsItUsed: "As the primary datastore for complex backend architectures needing ACID compliance.",
    whereIsItUsed: "AWS RDS, Supabase, Heroku Postgres.",
    whatComesNext: "MySQL",
    learningOutcomes: [
      "Understand Postgres-specific data types (JSONB, Arrays, UUIDs).",
      "Use advanced features like CTEs (Common Table Expressions).",
      "Understand Window Functions.",
      "Configure basic indexing (B-Tree)."
    ],
    commonMistakes: [
      "Not utilizing `JSONB` when you have semi-structured data, resorting to NoSQL prematurely.",
      "Failing to add indexes on foreign keys, causing massive performance drops on JOINs."
    ],
    realWorldApplications: [
      "Storing and querying complex JSON payloads efficiently using JSONB.",
      "Running window functions to calculate running totals for accounting software."
    ],
    resources: [
      { type: "official", title: "PostgreSQL Documentation", url: "https://www.postgresql.org/docs/" },
      { type: "video_en", title: "PostgreSQL Tutorial (FreeCodeCamp)", url: "https://www.youtube.com/watch?v=qw--VYLpxG4" },
      { type: "video_hi", title: "PostgreSQL in Hindi", url: "https://www.youtube.com/watch?v=O1HkQpMht4g" },
      { type: "article", title: "Postgres Guide", url: "http://postgresguide.com/" },
      { type: "github", title: "Awesome Postgres", url: "https://github.com/dhamaniasad/awesome-postgres" },
      { type: "cheat_sheet", title: "PostgreSQL Cheat Sheet", url: "https://www.postgresqltutorial.com/postgresql-cheat-sheet/" },
      { type: "deep_dive", title: "Explain Analyze: Profiling Postgres Queries", url: "https://thoughtbot.com/blog/reading-an-explain-analyze-query-plan" }
    ]
  },
  "n_rdb_3": {
    title: "Mysql",
    slug: "mysql",
    whyLearnThis: "MySQL is arguably the most popular open-source database on the web. It's the engine behind WordPress and countless massive scale applications.",
    whenIsItUsed: "In highly read-heavy applications, LAMP stack apps, or when simple horizontal replication is desired.",
    whereIsItUsed: "AWS RDS, PlanetScale, PHP/Laravel stacks.",
    whatComesNext: "Database Design & Normalization",
    learningOutcomes: [
      "Understand the InnoDB storage engine.",
      "Master MySQL date/time functions.",
      "Set up basic Master/Slave replication concepts.",
      "Optimize slow queries."
    ],
    commonMistakes: [
      "Using the wrong character set/collation (use `utf8mb4` instead of `utf8` to support emojis).",
      "Leaving the default configuration settings in production, leaving performance on the table."
    ],
    realWorldApplications: [
      "Handling the database for a high-traffic WordPress blog.",
      "Using PlanetScale (Vitess/MySQL) for a serverless, highly-scalable database."
    ],
    resources: [
      { type: "official", title: "MySQL Reference Manual", url: "https://dev.mysql.com/doc/" },
      { type: "video_en", title: "MySQL Crash Course", url: "https://www.youtube.com/watch?v=9ylj9nr0Lcg" },
      { type: "video_hi", title: "MySQL Tutorial in Hindi", url: "https://www.youtube.com/watch?v=E_P-sN_kIJU" },
      { type: "article", title: "MySQL Indexing Basics", url: "https://www.digitalocean.com/community/tutorials/how-to-optimize-mysql-queries-with-indexes" },
      { type: "github", title: "Awesome MySQL", url: "https://github.com/shlomi-noach/awesome-mysql" },
      { type: "cheat_sheet", title: "MySQL Cheat Sheet", url: "https://devhints.io/mysql" },
      { type: "deep_dive", title: "High Performance MySQL (Book excerpt)", url: "https://www.oreilly.com/library/view/high-performance-mysql/9781449332471/" }
    ]
  },
  "n_rdb_4": {
    title: "Database Design Normalization",
    slug: "database-design-normalization",
    whyLearnThis: "A bad database schema will ruin an application before it even scales. Proper design ensures data integrity, avoids duplication, and keeps queries fast.",
    whenIsItUsed: "During the initial architecture phase of building a new feature or application.",
    whereIsItUsed: "Entity-Relationship Diagrams (ERD), Schema migrations.",
    whatComesNext: "MongoDB",
    learningOutcomes: [
      "Understand Primary, Foreign, and Composite Keys.",
      "Learn the rules of Normalization (1NF, 2NF, 3NF).",
      "Understand when to explicitly Denormalize data for performance.",
      "Design one-to-one, one-to-many, and many-to-many relationships."
    ],
    commonMistakes: [
      "Failing to set up proper Foreign Key constraints, leading to orphaned records.",
      "Over-normalizing a database to the point where simple reads require 10 table joins."
    ],
    realWorldApplications: [
      "Designing a schema for a social network (Users, Posts, Likes, Comments).",
      "Denormalizing a 'total_likes' count column on a Post table to avoid heavy aggregation on every read."
    ],
    resources: [
      { type: "official", title: "Database Normalization (Microsoft)", url: "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description" },
      { type: "video_en", title: "Database Design Course", url: "https://www.youtube.com/watch?v=ztHopE5Wnpc" },
      { type: "video_hi", title: "Database Design & ERD in Hindi", url: "https://www.youtube.com/watch?v=uK8f-7Z1w-I" },
      { type: "article", title: "A Guide to DB Schema Design", url: "https://www.lucidchart.com/pages/database-diagram/database-design" },
      { type: "github", title: "Schema Design Patterns", url: "https://github.com/topics/database-design" },
      { type: "cheat_sheet", title: "ER Diagram Cheat Sheet", url: "https://www.lucidchart.com/pages/er-diagram-symbols-and-meaning" },
      { type: "deep_dive", title: "Data Intensive Applications (Book Preview)", url: "https://dataintensive.net/" }
    ]
  },
  // --- 4. NoSQL Databases ---
  "n_nosql_1": {
    title: "Mongodb",
    slug: "mongodb",
    whyLearnThis: "MongoDB is the most popular document database. It stores data in JSON-like objects (BSON), allowing for incredibly flexible and rapid development.",
    whenIsItUsed: "For prototyping, handling unstructured data, or building real-time analytics dashboards.",
    whereIsItUsed: "MERN stack apps, MongoDB Atlas, Node.js.",
    whatComesNext: "Redis",
    learningOutcomes: [
      "Understand Collections and Documents.",
      "Perform CRUD operations using the MongoDB shell/driver.",
      "Understand the Aggregation Framework.",
      "Design flexible schemas without rigid tables."
    ],
    commonMistakes: [
      "Designing MongoDB schemas exactly like SQL schemas, ignoring the power of embedded documents.",
      "Not realizing that MongoDB historically didn't support transactions (though it does now)."
    ],
    realWorldApplications: [
      "Storing varying product catalog items where some items have 'voltage' and others have 'size'.",
      "Storing rapid telemetry data from IoT devices."
    ],
    resources: [
      { type: "official", title: "MongoDB University", url: "https://learn.mongodb.com/" },
      { type: "video_en", title: "MongoDB Crash Course", url: "https://www.youtube.com/watch?v=ofme2o29ngU" },
      { type: "video_hi", title: "MongoDB Tutorial in Hindi", url: "https://www.youtube.com/watch?v=W-sZOCTexZg" },
      { type: "article", title: "SQL vs NoSQL", url: "https://www.mongodb.com/nosql-explained/nosql-vs-sql" },
      { type: "github", title: "Awesome MongoDB", url: "https://github.com/ramnes/awesome-mongodb" },
      { type: "cheat_sheet", title: "MongoDB Cheat Sheet", url: "https://www.mongodb.com/developer/products/mongodb/cheat-sheet/" },
      { type: "deep_dive", title: "MongoDB Aggregation Pipeline", url: "https://www.mongodb.com/docs/manual/core/aggregation-pipeline/" }
    ]
  },
  "n_nosql_2": {
    title: "Redis",
    slug: "redis",
    whyLearnThis: "Redis is an in-memory key-value data store. Because it reads/writes from RAM rather than a hard drive, it is unfathomably fast.",
    whenIsItUsed: "Caching API responses, managing user sessions, rate limiting, and real-time leaderboards.",
    whereIsItUsed: "Sidecar to a main database, Redis Labs, Elasticache.",
    whatComesNext: "Cassandra",
    learningOutcomes: [
      "Store strings, hashes, lists, sets, and sorted sets.",
      "Understand TTL (Time to Live) for automatic data expiration.",
      "Use Redis for Pub/Sub messaging.",
      "Implement simple caching logic (Check cache -> If miss, fetch DB -> Store in cache)."
    ],
    commonMistakes: [
      "Using Redis as the sole, persistent database without configuring disk backups.",
      "Failing to set TTLs on cache keys, eventually exhausting server RAM."
    ],
    realWorldApplications: [
      "Caching a heavily accessed GraphQL query response to drop load times from 500ms to 5ms.",
      "Storing real-time user session tokens."
    ],
    resources: [
      { type: "official", title: "Redis Documentation", url: "https://redis.io/docs/" },
      { type: "video_en", title: "Redis Crash Course", url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ" },
      { type: "video_hi", title: "Redis Tutorial in Hindi", url: "https://www.youtube.com/watch?v=kYJjZ3L1dEI" },
      { type: "article", title: "Caching Strategies with Redis", url: "https://aws.amazon.com/caching/best-practices/" },
      { type: "github", title: "Awesome Redis", url: "https://github.com/zhemingwang/awesome-redis" },
      { type: "cheat_sheet", title: "Redis CLI Cheat Sheet", url: "https://lzone.de/cheat-sheet/Redis" },
      { type: "deep_dive", title: "Redis Persistence Explained", url: "https://redis.io/docs/management/persistence/" }
    ]
  },
  "n_nosql_3": {
    title: "Cassandra",
    slug: "cassandra",
    whyLearnThis: "Apache Cassandra is a wide-column NoSQL store built for massive scale, high availability, and writing vast amounts of data with zero single points of failure.",
    whenIsItUsed: "When you have huge volumes of write-heavy data across multiple geographical datacenters.",
    whereIsItUsed: "Netflix, Discord (messages), Uber.",
    whatComesNext: "REST APIs",
    learningOutcomes: [
      "Understand the Dynamo architecture and decentralized rings.",
      "Write CQL (Cassandra Query Language).",
      "Understand Partition Keys vs Clustering Keys.",
      "Grasp the concept of eventual consistency and tunable replication."
    ],
    commonMistakes: [
      "Designing schemas based on entities (like SQL) rather than designing tables to answer specific read queries.",
      "Trying to use complex JOINs or aggregations (Cassandra is not built for this)."
    ],
    realWorldApplications: [
      "Storing billions of chat messages per day across global servers without downtime.",
      "Handling high-throughput sensor telemetry logs."
    ],
    resources: [
      { type: "official", title: "Cassandra Basics", url: "https://cassandra.apache.org/_/quickstart.html" },
      { type: "video_en", title: "Cassandra Crash Course", url: "https://www.youtube.com/watch?v=3q-vOq7v3z8" },
      { type: "video_hi", title: "Cassandra Intro in Hindi", url: "https://www.youtube.com/watch?v=qT_R0t8qFkY" },
      { type: "article", title: "Basic Rules of Cassandra Data Modeling", url: "https://www.datastax.com/blog/basic-rules-cassandra-data-modeling" },
      { type: "github", title: "Awesome Cassandra", url: "https://cassandra.apache.org/doc/latest/cassandra/data_modeling/index.html" },
      { type: "cheat_sheet", title: "CQL Cheat Sheet", url: "https://www.datastax.com/cql-cheat-sheet" },
      { type: "deep_dive", title: "How Discord stores billions of messages", url: "https://discord.com/blog/how-discord-stores-billions-of-messages" }
    ]
  },
  // --- 5. APIs ---
  "n_bapi_1": {
    title: "Rest Apis",
    slug: "rest-apis",
    whyLearnThis: "REST is the architectural standard for the internet. Almost all web applications communicate with backend servers via REST APIs.",
    whenIsItUsed: "Whenever exposing backend functionality to clients (web, mobile, or public third parties).",
    whereIsItUsed: "Node.js (Express), Python (FastAPI), Java (Spring).",
    whatComesNext: "GraphQL",
    learningOutcomes: [
      "Design robust URL structures for resources.",
      "Implement proper HTTP Verbs (GET, POST, PUT, PATCH, DELETE).",
      "Return appropriate HTTP status codes.",
      "Implement pagination and filtering."
    ],
    commonMistakes: [
      "Using verbs in URLs (e.g., `/create-user`) instead of standard methods (`POST /users`).",
      "Returning a `200 OK` code when an internal error occurred."
    ],
    realWorldApplications: [
      "Building a public-facing API for an e-commerce platform.",
      "Exposing CRUD operations for a mobile application."
    ],
    resources: [
      { type: "official", title: "REST Architectural Style", url: "https://restfulapi.net/" },
      { type: "video_en", title: "REST API Concepts", url: "https://www.youtube.com/watch?v=-mN3VyJuCjM" },
      { type: "video_hi", title: "REST API Explained (Hindi)", url: "https://www.youtube.com/watch?v=T_T5Z0iB3Fk" },
      { type: "article", title: "Best Practices for REST API Design", url: "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/" },
      { type: "github", title: "API Guidelines", url: "https://github.com/microsoft/api-guidelines" },
      { type: "cheat_sheet", title: "REST API Cheat Sheet", url: "https://www.restapitutorial.com/lessons/httpmethods.html" },
      { type: "deep_dive", title: "Richardson Maturity Model", url: "https://martinfowler.com/articles/richardsonMaturityModel.html" }
    ]
  },
  "n_bapi_2": {
    title: "Graphql",
    slug: "graphql",
    whyLearnThis: "GraphQL lets clients request exactly the data they need, solving the 'over-fetching' and 'under-fetching' issues of standard REST APIs.",
    whenIsItUsed: "In complex applications where clients need heavily nested data, or when aggregating data from multiple backend microservices.",
    whereIsItUsed: "Apollo Server, Hasura, Prisma.",
    whatComesNext: "gRPC",
    learningOutcomes: [
      "Define GraphQL Schemas and Types.",
      "Implement Query and Mutation resolvers.",
      "Understand the N+1 query problem and how Dataloaders solve it.",
      "Write self-documenting APIs."
    ],
    commonMistakes: [
      "Failing to implement Dataloaders, causing one GraphQL request to hit the database 100 times.",
      "Exposing overly complex queries that allow a client to easily DDoS the server."
    ],
    realWorldApplications: [
      "Providing a unified API gateway for a mobile app to fetch user data, posts, and comments in a single request.",
      "Replacing a bloated REST API endpoint that returns hundreds of unused fields."
    ],
    resources: [
      { type: "official", title: "GraphQL Official Learn", url: "https://graphql.org/learn/" },
      { type: "video_en", title: "GraphQL Full Course", url: "https://www.youtube.com/watch?v=ed8SzALpx1Q" },
      { type: "video_hi", title: "GraphQL in Hindi", url: "https://www.youtube.com/watch?v=LqUe7-4n_gE" },
      { type: "article", title: "Solving the N+1 Problem in GraphQL", url: "https://www.apollographql.com/blog/graphql/n-plus-one/" },
      { type: "github", title: "Awesome GraphQL", url: "https://github.com/chentsulin/awesome-graphql" },
      { type: "cheat_sheet", title: "GraphQL Cheat Sheet", url: "https://devhints.io/graphql" },
      { type: "deep_dive", title: "GraphQL Security Guide", url: "https://devhints.io/graphql" }
    ]
  },
  "n_bapi_3": {
    title: "Grpc",
    slug: "grpc",
    whyLearnThis: "gRPC is a high-performance framework developed by Google. It uses Protocol Buffers (protobufs) and HTTP/2 to communicate incredibly fast between services.",
    whenIsItUsed: "For backend-to-backend communication in microservice architectures where JSON parsing is too slow.",
    whereIsItUsed: "Go microservices, Kubernetes clusters, Envoy proxies.",
    whatComesNext: "WebSockets",
    learningOutcomes: [
      "Define services and messages using `.proto` files.",
      "Understand the benefits of binary serialization over JSON text.",
      "Generate client/server code automatically from protobufs.",
      "Understand HTTP/2 multiplexing."
    ],
    commonMistakes: [
      "Trying to use gRPC directly in the browser without a proxy (gRPC-Web).",
      "Changing existing protobuf fields in a non-backwards-compatible way (breaking the binary format)."
    ],
    realWorldApplications: [
      "Connecting an Auth microservice to a Billing microservice with ultra-low latency.",
      "Streaming large binary data chunks bi-directionally between servers."
    ],
    resources: [
      { type: "official", title: "gRPC Documentation", url: "https://grpc.io/docs/" },
      { type: "video_en", title: "gRPC Crash Course (Hussein Nasser)", url: "https://www.youtube.com/watch?v=Yw4rkaTc0f8" },
      { type: "video_hi", title: "gRPC in Hindi", url: "https://www.youtube.com/watch?v=KzE_5N0_j9Y" },
      { type: "article", title: "REST vs gRPC", url: "https://cloud.google.com/blog/products/api-management/understanding-grpc-openapi-and-rest-and-when-to-use-them" },
      { type: "github", title: "Awesome gRPC", url: "https://github.com/grpc-ecosystem/awesome-grpc" },
      { type: "cheat_sheet", title: "Protobuf Cheat Sheet", url: "https://gist.github.com/erikstmartin/f311ebc0bb0cf9625da6" },
      { type: "deep_dive", title: "gRPC Architecture Principles", url: "https://grpc.io/blog/principles/" }
    ]
  },
  "n_bapi_4": {
    title: "Websockets",
    slug: "websockets",
    whyLearnThis: "WebSockets allow for full-duplex, persistent, real-time communication between the client and server. HTTP is request-response; WebSockets are continuous.",
    whenIsItUsed: "Building chat apps, live sports tickers, collaborative editing tools, or real-time dashboards.",
    whereIsItUsed: "Socket.io, WS (Node.js), ActionCable (Rails).",
    whatComesNext: "Hashing & Salting",
    learningOutcomes: [
      "Establish a WebSocket connection (ws://).",
      "Listen for messages and emit events.",
      "Handle connection drops and reconnections.",
      "Broadcast messages to multiple clients or rooms."
    ],
    commonMistakes: [
      "Forgetting that WebSocket connections hold the server process open (which can exhaust connections on high traffic).",
      "Not authenticating WebSocket handshakes, leaving the stream open to abuse."
    ],
    realWorldApplications: [
      "A real-time multiplayer game server.",
      "A live stock trading dashboard where prices update instantly."
    ],
    resources: [
      { type: "official", title: "MDN: WebSockets API", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
      { type: "video_en", title: "WebSockets Crash Course", url: "https://www.youtube.com/watch?v=1BfCnjr_Vjg" },
      { type: "video_hi", title: "WebSockets & Socket.io in Hindi", url: "https://www.youtube.com/watch?v=R9K1G4G66K0" },
      { type: "article", title: "HTTP vs WebSockets", url: "https://www.wallarm.com/what/what-is-websocket-and-how-does-it-differ-from-http" },
      { type: "github", title: "Socket.io GitHub", url: "https://github.com/socketio/socket.io" },
      { type: "cheat_sheet", title: "Socket.io Emit Cheatsheet", url: "https://socket.io/docs/v4/emit-cheatsheet/" },
      { type: "deep_dive", title: "Scaling WebSockets (Redis PubSub)", url: "https://socket.io/docs/v4/emit-cheatsheet/" }
    ]
  },
  // --- 6. Authentication & Security ---
  "n_auth_1": {
    title: "Hashing And Salting",
    slug: "hashing-and-salting",
    whyLearnThis: "Never store plaintext passwords in a database. Hashing and salting ensure that even if your database is compromised, user passwords remain secure.",
    whenIsItUsed: "Whenever implementing a user registration or login system.",
    whereIsItUsed: "bcrypt, Argon2, PBKDF2.",
    whatComesNext: "JWT & Session Auth",
    learningOutcomes: [
      "Understand why hashing is a one-way mathematical function.",
      "Understand what a 'Salt' is and why it defends against Rainbow Table attacks.",
      "Use libraries like `bcrypt` to hash and verify passwords.",
      "Understand hash collisions."
    ],
    commonMistakes: [
      "Using fast algorithms like MD5 or SHA-256 for passwords (they can be brute-forced too quickly).",
      "Using the same salt for every user."
    ],
    realWorldApplications: [
      "Securing user credentials during sign-up.",
      "Validating a password during the login flow."
    ],
    resources: [
      { type: "official", title: "OWASP Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
      { type: "video_en", title: "Hashing vs Encryption (Computerphile)", url: "https://www.youtube.com/watch?v=O6cmuiTBZVs" },
      { type: "video_hi", title: "Password Hashing & Salting in Hindi", url: "https://www.youtube.com/watch?v=HkQj7d-8Z-M" },
      { type: "article", title: "Salted Password Hashing - Doing it Right", url: "https://crackstation.net/hashing-security.htm" },
      { type: "github", title: "Bcrypt.js Repo", url: "https://github.com/dcodeIO/bcrypt.js" },
      { type: "cheat_sheet", title: "Argon2 Config Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#argon2id" },
      { type: "deep_dive", title: "How Rainbow Tables Work", url: "https://www.comparitech.com/blog/information-security/rainbow-table-attack/" }
    ]
  },
  "n_auth_2": {
    title: "Jwt And Session Auth",
    slug: "jwt-and-session-auth",
    whyLearnThis: "HTTP is stateless. You need a mechanism to remember that a user is logged in as they navigate your site. Sessions and JWTs solve this.",
    whenIsItUsed: "In every application that requires user accounts.",
    whereIsItUsed: "Cookies, HTTP Headers, Redis, LocalStorage.",
    whatComesNext: "OAuth 2.0 & OIDC",
    learningOutcomes: [
      "Understand the difference between Stateful (Sessions) and Stateless (JWT) authentication.",
      "Implement secure HTTP-only cookies.",
      "Understand the structure of a JWT (Header, Payload, Signature).",
      "Implement Refresh and Access token flows."
    ],
    commonMistakes: [
      "Storing JWTs in LocalStorage, making them vulnerable to XSS.",
      "Putting sensitive information (like passwords) inside a JWT payload (which is easily decoded)."
    ],
    realWorldApplications: [
      "Protecting an API route so only logged-in users can access it.",
      "Using Redis to store active session IDs for fast validation."
    ],
    resources: [
      { type: "official", title: "JWT.io Introduction", url: "https://jwt.io/introduction" },
      { type: "video_en", title: "Session vs Token Authentication", url: "https://www.youtube.com/watch?v=UBUNrFtufWo" },
      { type: "video_hi", title: "JWT Authentication in Node.js (Hindi)", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4" },
      { type: "article", title: "Stop Using JWT for Sessions", url: "http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/" },
      { type: "github", title: "Passport.js", url: "https://github.com/jaredhanson/passport" },
      { type: "cheat_sheet", title: "OWASP Session Management", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" },
      { type: "deep_dive", title: "The Refresh Token Rotation Flow", url: "https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation" }
    ]
  },
  "n_auth_3": {
    title: "Oauth2 And Oidc",
    slug: "oauth2-and-oidc",
    whyLearnThis: "OAuth 2.0 allows users to log into your app using Google, GitHub, or Facebook without creating a new password. OIDC builds identity on top of it.",
    whenIsItUsed: "When implementing 'Log in with Google' or delegating access to third-party services.",
    whereIsItUsed: "Auth0, NextAuth, Social Login.",
    whatComesNext: "Web Security & CORS",
    learningOutcomes: [
      "Understand Authentication (OIDC) vs Authorization (OAuth).",
      "Understand the Authorization Code Flow.",
      "Understand the roles: Resource Owner, Client, Authorization Server, Resource Server.",
      "Implement a social login flow."
    ],
    commonMistakes: [
      "Confusing OAuth 2.0 (which grants access) with an Authentication protocol (which is what OpenID Connect is for).",
      "Leaking Client Secrets."
    ],
    realWorldApplications: [
      "Allowing a third-party app to read a user's GitHub repositories on their behalf.",
      "Logging into a SaaS dashboard using a Google Workspace account."
    ],
    resources: [
      { type: "official", title: "OAuth 2.0 Official Specs", url: "https://oauth.net/2/" },
      { type: "video_en", title: "OAuth 2.0 Explained in Simple Terms", url: "https://www.youtube.com/watch?v=CPbvxxSlDTU" },
      { type: "video_hi", title: "OAuth 2.0 Tutorial in Hindi", url: "https://www.youtube.com/watch?v=Z3I-NeqP4mI" },
      { type: "article", title: "An Illustrated Guide to OAuth and OIDC", url: "https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc" },
      { type: "github", title: "Awesome Auth", url: "https://github.com/casbin/awesome-auth" },
      { type: "cheat_sheet", title: "OAuth 2.0 Threat Model Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/OAuth2_Threat_Model_Cheat_Sheet.html" },
      { type: "deep_dive", title: "RFC 6749: The OAuth 2.0 Framework", url: "https://datatracker.ietf.org/doc/html/rfc6749" }
    ]
  },
  "n_auth_4": {
    title: "Web Security Cors",
    slug: "web-security-cors",
    whyLearnThis: "The web is hostile. Understanding common attacks (XSS, CSRF, SQLi) and browser security policies (CORS) is mandatory to protect user data.",
    whenIsItUsed: "Whenever deploying a backend that communicates with web browsers or handles user input.",
    whereIsItUsed: "Helmet.js, WAFs, API Gateways.",
    whatComesNext: "Caching Concepts",
    learningOutcomes: [
      "Understand and prevent Cross-Site Scripting (XSS).",
      "Understand and prevent Cross-Site Request Forgery (CSRF).",
      "Configure Cross-Origin Resource Sharing (CORS) headers properly.",
      "Implement Rate Limiting."
    ],
    commonMistakes: [
      "Setting `Access-Control-Allow-Origin: *` blindly on an authenticated API.",
      "Trusting user input without sanitization."
    ],
    realWorldApplications: [
      "Using `helmet` in Node.js to set proper HTTP security headers.",
      "Configuring CORS so only your specific frontend domain can fetch data from your backend API."
    ],
    resources: [
      { type: "official", title: "MDN: CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
      { type: "video_en", title: "Web Security Crash Course (FreeCodeCamp)", url: "https://www.youtube.com/watch?v=2Kz-211-73k" },
      { type: "video_hi", title: "CORS Explained in Hindi", url: "https://www.youtube.com/watch?v=3R-sOQ802rA" },
      { type: "article", title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
      { type: "github", title: "Helmet.js", url: "https://github.com/helmetjs/helmet" },
      { type: "cheat_sheet", title: "CORS Cheat Sheet", url: "https://enable-cors.org/" },
      { type: "deep_dive", title: "How CSRF Attacks Work", url: "https://www.imperva.com/learn/application-security/csrf-cross-site-request-forgery/" }
    ]
  },
  // --- 7. Caching & Message Brokers ---
  "n_cache_1": {
    title: "Caching Concepts",
    slug: "caching-concepts",
    whyLearnThis: "Database queries are slow and expensive. Caching stores the result of an expensive operation in fast memory so subsequent requests are nearly instant.",
    whenIsItUsed: "When an application scales and database reads become a bottleneck.",
    whereIsItUsed: "CDNs, Redis, Memcached, Application memory.",
    whatComesNext: "Redis Caching",
    learningOutcomes: [
      "Understand the concept of Cache Hit vs Cache Miss.",
      "Understand Cache Invalidation strategies (Write-through, Write-behind, Cache-aside).",
      "Understand Time To Live (TTL).",
      "Grasp the concept of the 'Cache Stampede' problem."
    ],
    commonMistakes: [
      "Never invalidating the cache, causing users to see stale, outdated data indefinitely.",
      "Caching data that is unique to every user without properly keying it, leaking private data."
    ],
    realWorldApplications: [
      "Storing the HTML of a public blog post in a cache so the database is never hit.",
      "Caching heavy aggregations (like 'Total Global Sales') that only need to update once an hour."
    ],
    resources: [
      { type: "official", title: "AWS: Caching Overview", url: "https://aws.amazon.com/caching/" },
      { type: "video_en", title: "System Design: Caching", url: "https://www.youtube.com/watch?v=U3RkDLtS7uY" },
      { type: "video_hi", title: "Caching in System Design (Hindi)", url: "https://www.youtube.com/watch?v=Yw4rkaTc0f8" },
      { type: "article", title: "Cache Invalidation Strategies", url: "https://www.cloudflare.com/learning/cdn/caching-strategies/" },
      { type: "github", title: "System Design Primer - Cache", url: "https://github.com/donnemartin/system-design-primer#cache" },
      { type: "cheat_sheet", title: "Cache Eviction Policies (LRU, LFU)", url: "https://en.wikipedia.org/wiki/Cache_replacement_policies" },
      { type: "deep_dive", title: "Phil Karlton: There are only two hard things in Computer Science...", url: "https://martinfowler.com/bliki/TwoHardThings.html" }
    ]
  },
  "n_cache_2": {
    title: "Redis Caching",
    slug: "redis-caching",
    whyLearnThis: "Redis is the industry standard for distributed caching. It provides extremely fast, memory-based storage accessible across multiple backend servers.",
    whenIsItUsed: "When you have multiple backend instances that need to share a single, fast cache layer.",
    whereIsItUsed: "Redis Clusters, AWS ElastiCache.",
    whatComesNext: "RabbitMQ",
    learningOutcomes: [
      "Install and configure Redis.",
      "Connect to Redis from a backend language.",
      "Store and retrieve serialized JSON strings.",
      "Implement a basic 'Cache-Aside' pattern in code."
    ],
    commonMistakes: [
      "Storing large, deeply nested JSON objects in a single Redis key and updating it frequently (inefficient compared to Redis Hashes).",
      "Not handling Redis connection drops gracefully."
    ],
    realWorldApplications: [
      "Caching GitHub API responses to prevent hitting rate limits.",
      "Using Redis to store temporary one-time password (OTP) codes with a 5-minute TTL."
    ],
    resources: [
      { type: "official", title: "Redis Documentation", url: "https://redis.io/docs/" },
      { type: "video_en", title: "Redis Crash Course (Traversy Media)", url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ" },
      { type: "video_hi", title: "Redis Cache Node.js (Hindi)", url: "https://www.youtube.com/watch?v=kYJjZ3L1dEI" },
      { type: "article", title: "How to use Redis for Caching", url: "https://www.digitalocean.com/community/tutorials/how-to-implement-caching-in-node-js-using-redis" },
      { type: "github", title: "Node Redis Client", url: "https://github.com/redis/node-redis" },
      { type: "cheat_sheet", title: "Redis Commands", url: "https://redis.io/commands/" },
      { type: "deep_dive", title: "Advanced Redis Data Structures (HyperLogLog)", url: "https://redis.io/docs/data-types/hyperloglogs/" }
    ]
  },
  "n_cache_3": {
    title: "Rabbitmq",
    slug: "rabbitmq",
    whyLearnThis: "RabbitMQ is a widely used message broker. It allows different parts of your system to communicate asynchronously, improving reliability and decoupling services.",
    whenIsItUsed: "When processing background jobs (like sending emails) or routing messages in a microservices architecture.",
    whereIsItUsed: "Celery (Python), BullMQ (Node), Spring AMQP.",
    whatComesNext: "Apache Kafka",
    learningOutcomes: [
      "Understand Producers, Queues, and Consumers.",
      "Understand the Advanced Message Queuing Protocol (AMQP).",
      "Configure Exchanges and Routing Keys.",
      "Handle message acknowledgments (ACK/NACK)."
    ],
    commonMistakes: [
      "Forgetting to acknowledge messages, causing the queue to fill up indefinitely and crash.",
      "Not configuring dead-letter queues for messages that repeatedly fail to process."
    ],
    realWorldApplications: [
      "Offloading heavy video-processing tasks to a background worker.",
      "Routing an 'Order Placed' event to the Inventory, Billing, and Shipping microservices simultaneously via a Fanout exchange."
    ],
    resources: [
      { type: "official", title: "RabbitMQ Tutorials", url: "https://www.rabbitmq.com/getstarted.html" },
      { type: "video_en", title: "RabbitMQ in 100 Seconds", url: "https://www.youtube.com/watch?v=CjieE2F_YlU" },
      { type: "video_hi", title: "RabbitMQ Tutorial in Hindi", url: "https://www.youtube.com/watch?v=Zp8mXF7QY2M" },
      { type: "article", title: "Understanding RabbitMQ Exchanges", url: "https://www.cloudamqp.com/blog/part4-rabbitmq-for-beginners-exchanges-routing-keys-bindings.html" },
      { type: "github", title: "Awesome RabbitMQ", url: "https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html" },
      { type: "cheat_sheet", title: "RabbitMQ Cheat Sheet", url: "https://lzone.de/cheat-sheet/RabbitMQ" },
      { type: "deep_dive", title: "RabbitMQ vs Kafka", url: "https://gist.github.com/videlalvaro/8468237" }
    ]
  },
  "n_cache_4": {
    title: "Apache Kafka",
    slug: "apache-kafka",
    whyLearnThis: "Kafka is a distributed event streaming platform built for massive scale. Unlike RabbitMQ which deletes messages when read, Kafka stores them as a persistent log.",
    whenIsItUsed: "For real-time data pipelines, massive telemetry ingestion, and event-driven microservices at scale.",
    whereIsItUsed: "LinkedIn, Uber, Netflix.",
    whatComesNext: "Nginx",
    learningOutcomes: [
      "Understand Topics, Partitions, and Offsets.",
      "Understand Consumer Groups.",
      "Explain the append-only log concept.",
      "Grasp Kafka's high-throughput architecture."
    ],
    commonMistakes: [
      "Using Kafka for simple background job queues (over-engineering).",
      "Using the wrong partitioning key, causing hot partitions and bottlenecks."
    ],
    realWorldApplications: [
      "Ingesting millions of GPS coordinates per second from Uber drivers.",
      "Processing a real-time stream of credit card transactions for fraud detection."
    ],
    resources: [
      { type: "official", title: "Apache Kafka Docs", url: "https://kafka.apache.org/documentation/" },
      { type: "video_en", title: "Kafka in 100 Seconds", url: "https://www.youtube.com/watch?v=Ch5VhJzaoaI" },
      { type: "video_hi", title: "Kafka Tutorial in Hindi", url: "https://www.youtube.com/watch?v=R9_u2-o0Tgw" },
      { type: "article", title: "Kafka vs RabbitMQ (When to use which)", url: "https://tanzu.vmware.com/developer/guides/rabbitmq-vs-kafka/" },
      { type: "github", title: "Awesome Kafka", url: "https://github.com/monksy/awesome-kafka" },
      { type: "cheat_sheet", title: "Kafka CLI Cheat Sheet", url: "https://gist.github.com/steveloughran/59b1525afc21ce486f0c" },
      { type: "deep_dive", title: "The Log: What every software engineer should know", url: "https://gist.github.com/urs-simon/8724213" }
    ]
  },
  // --- 8. Web Servers & Proxies ---
  "n_web_1": {
    title: "Nginx",
    slug: "nginx",
    whyLearnThis: "Nginx is a lightning-fast web server and reverse proxy. It sits in front of your application servers, handling raw HTTP traffic efficiently.",
    whenIsItUsed: "Deploying production applications, terminating SSL, serving static files, or load balancing.",
    whereIsItUsed: "Linux servers, Docker containers, Ingress controllers.",
    whatComesNext: "Apache",
    learningOutcomes: [
      "Understand the Nginx configuration syntax (`nginx.conf`).",
      "Configure Server Blocks (Virtual Hosts).",
      "Serve static HTML/CSS/JS files directly.",
      "Configure Nginx as a reverse proxy for a Node/Python app."
    ],
    commonMistakes: [
      "Forgetting the trailing slash in `proxy_pass`, causing unexpected URL routing.",
      "Running the app server on port 80 directly as root instead of using Nginx to proxy."
    ],
    realWorldApplications: [
      "Routing `api.example.com` to a Node server on port 3000, and `example.com` to static files.",
      "Setting up Let's Encrypt SSL certificates automatically via Certbot and Nginx."
    ],
    resources: [
      { type: "official", title: "Nginx Beginner's Guide", url: "https://nginx.org/en/docs/beginners_guide.html" },
      { type: "video_en", title: "Nginx Crash Course (Hussein Nasser)", url: "https://www.youtube.com/watch?v=JKxlsvZXG7c" },
      { type: "video_hi", title: "Nginx Tutorial in Hindi", url: "https://www.youtube.com/watch?v=J9zFmXF7uB4" },
      { type: "article", title: "How to Configure Nginx", url: "https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04" },
      { type: "github", title: "Nginx Boilerplate", url: "https://github.com/h5bp/server-configs-nginx" },
      { type: "cheat_sheet", title: "Nginx Cheat Sheet", url: "https://devhints.io/nginx" },
      { type: "deep_dive", title: "Inside NGINX: How We Designed for Performance & Scale", url: "https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/" }
    ]
  },
  "n_web_2": {
    title: "Apache",
    slug: "apache",
    whyLearnThis: "Apache HTTP Server is the historically dominant web server. While Nginx has surpassed it for modern apps, Apache is incredibly flexible and heavily used in PHP environments.",
    whenIsItUsed: "Working with legacy systems, LAMP stack (Linux, Apache, MySQL, PHP), or complex `.htaccess` routing.",
    whereIsItUsed: "cPanel, Shared Hosting, WordPress.",
    whatComesNext: "Reverse Proxies & Load Balancers",
    learningOutcomes: [
      "Understand Virtual Hosts in Apache.",
      "Use `.htaccess` for directory-level configuration.",
      "Enable and configure modules (e.g., `mod_rewrite`).",
      "Compare the process-based model of Apache vs the event-driven model of Nginx."
    ],
    commonMistakes: [
      "Leaving directory listing enabled, exposing source code or sensitive files.",
      "Writing overly complex Regex in `.htaccess` that causes infinite redirect loops."
    ],
    realWorldApplications: [
      "Deploying a traditional WordPress blog using the LAMP stack.",
      "Using `mod_rewrite` to create SEO-friendly URLs."
    ],
    resources: [
      { type: "official", title: "Apache Documentation", url: "https://httpd.apache.org/docs/" },
      { type: "video_en", title: "Apache Web Server in 10 Minutes", url: "https://www.youtube.com/watch?v=a3tL9ZqR3wY" },
      { type: "video_hi", title: "Apache Server Installation in Hindi", url: "https://www.youtube.com/watch?v=O1HkQpMht4g" },
      { type: "article", title: "Apache vs Nginx", url: "https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations" },
      { type: "github", title: "Apache Server Configs", url: "https://github.com/h5bp/server-configs-apache" },
      { type: "cheat_sheet", title: "Apache htaccess Cheat Sheet", url: "https://github.com/phanan/htaccess" },
      { type: "deep_dive", title: "Apache Performance Tuning", url: "https://httpd.apache.org/docs/2.4/misc/perf-tuning.html" }
    ]
  },
  "n_web_3": {
    title: "Reverse Proxies Load Balancers",
    slug: "reverse-proxies-load-balancers",
    whyLearnThis: "A reverse proxy handles incoming traffic and distributes it to your backend servers. It enables high availability, scaling, and security.",
    whenIsItUsed: "Whenever scaling an application beyond a single server.",
    whereIsItUsed: "HAProxy, AWS ALB/NLB, Traefik.",
    whatComesNext: "Unit Testing",
    learningOutcomes: [
      "Understand the difference between a Forward Proxy and a Reverse Proxy.",
      "Configure Load Balancing algorithms (Round Robin, Least Connections).",
      "Understand Health Checks.",
      "Implement SSL/TLS termination at the proxy layer."
    ],
    commonMistakes: [
      "Not passing the `X-Forwarded-For` header, causing the backend to think all traffic is coming from the load balancer's IP.",
      "Failing to configure sticky sessions when the backend architecture relies on stateful memory."
    ],
    realWorldApplications: [
      "Distributing traffic evenly across 5 different Node.js servers to handle thousands of concurrent users.",
      "Using HAProxy to automatically reroute traffic if a backend server crashes."
    ],
    resources: [
      { type: "official", title: "HAProxy Documentation", url: "https://www.haproxy.org/#docs" },
      { type: "video_en", title: "What is a Reverse Proxy? (Hussein Nasser)", url: "https://www.youtube.com/watch?v=T_e42uO-N4c" },
      { type: "video_hi", title: "Load Balancer Explained in Hindi", url: "https://www.youtube.com/watch?v=ZcMhFz_zC0Q" },
      { type: "article", title: "AWS: What is Load Balancing?", url: "https://aws.amazon.com/what-is/load-balancing/" },
      { type: "github", title: "Traefik Proxy Repo", url: "https://github.com/traefik/traefik" },
      { type: "cheat_sheet", title: "HAProxy Cheat Sheet", url: "https://cheatsheet.camelsoftware.com/haproxy/" },
      { type: "deep_dive", title: "System Design Primer: Load Balancers", url: "https://github.com/donnemartin/system-design-primer#load-balancer" }
    ]
  },
  // --- 9. Testing ---
  "n_btest_1": {
    title: "Unit Testing",
    slug: "unit-testing",
    whyLearnThis: "Unit testing ensures that individual, isolated functions in your backend work correctly. It builds the foundation of a reliable codebase.",
    whenIsItUsed: "Testing utility functions, complex math, data formatting, or isolated class methods.",
    whereIsItUsed: "Jest, Mocha (Node), PyTest (Python), JUnit (Java).",
    whatComesNext: "Integration Testing",
    learningOutcomes: [
      "Write basic assertions (equals, throws, is true).",
      "Mock dependencies (like mocking a database call to return a fixed object).",
      "Understand Code Coverage metrics.",
      "Practice Test-Driven Development (TDD)."
    ],
    commonMistakes: [
      "Writing unit tests that actually hit a real database (that's an integration test).",
      "Aiming for 100% code coverage by testing trivial getters/setters, wasting time."
    ],
    realWorldApplications: [
      "Testing a function that calculates tax rates for an e-commerce cart based on region.",
      "Testing a password validation regex to ensure it requires special characters."
    ],
    resources: [
      { type: "official", title: "Jest Documentation", url: "https://jestjs.io/docs/getting-started" },
      { type: "video_en", title: "Node.js Testing with Jest", url: "https://www.youtube.com/watch?v=FgnxcUQ5vho" },
      { type: "video_hi", title: "Jest Testing in Hindi", url: "https://www.youtube.com/watch?v=4CjA1f1vHjE" },
      { type: "article", title: "Martin Fowler: Unit Test", url: "https://martinfowler.com/bliki/UnitTest.html" },
      { type: "github", title: "Awesome Testing", url: "https://github.com/TheJambo/awesome-testing" },
      { type: "cheat_sheet", title: "Jest Cheat Sheet", url: "https://github.com/sapegin/jest-cheat-sheet" },
      { type: "deep_dive", title: "Mocks Aren't Stubs", url: "https://martinfowler.com/articles/mocksArentStubs.html" }
    ]
  },
  "n_btest_2": {
    title: "Integration Testing",
    slug: "integration-testing",
    whyLearnThis: "Integration tests verify that different parts of your system work together. For a backend, this usually means testing API endpoints against a real database.",
    whenIsItUsed: "Ensuring an API route behaves as expected from request to database insertion.",
    whereIsItUsed: "Supertest (Node), Django Test Client, Testcontainers.",
    whatComesNext: "E2E Testing",
    learningOutcomes: [
      "Spin up an isolated test database (e.g., using Docker).",
      "Send HTTP requests to the API locally and assert the responses.",
      "Seed a database before tests run and tear it down afterward.",
      "Test authentication middleware."
    ],
    commonMistakes: [
      "Running integration tests against a shared staging database, causing tests to fail when someone else modifies data.",
      "Failing to clean up the database between tests, causing state leakage."
    ],
    realWorldApplications: [
      "Testing that `POST /users` returns a 201 status and actually creates a row in the database.",
      "Testing that accessing `/dashboard` without a token returns a 401 Unauthorized."
    ],
    resources: [
      { type: "official", title: "Supertest npm package", url: "https://github.com/ladjs/supertest" },
      { type: "video_en", title: "Integration Testing Node.js Apps", url: "https://www.youtube.com/watch?v=r2U8F_A3i3E" },
      { type: "video_hi", title: "API Testing Tutorial in Hindi", url: "https://www.youtube.com/watch?v=FgnxcUQ5vho" },
      { type: "article", title: "Integration Testing Best Practices", url: "https://kentcdodds.com/blog/write-tests" },
      { type: "github", title: "Testcontainers", url: "https://testcontainers.com/" },
      { type: "cheat_sheet", title: "Node API Testing Guide", url: "https://github.com/goldbergyoni/javascript-testing-best-practices" },
      { type: "deep_dive", title: "The Practical Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html" }
    ]
  },
  "n_btest_3": {
    title: "E2e Testing",
    slug: "e2e-testing",
    whyLearnThis: "End-to-end testing simulates real users interacting with the full stack, including the frontend UI, backend API, and database.",
    whenIsItUsed: "Testing critical business flows (like Checkout or Login) before deployment.",
    whereIsItUsed: "Cypress, Playwright, Selenium.",
    whatComesNext: "Docker Basics",
    learningOutcomes: [
      "Write scripts to drive a headless browser.",
      "Intercept network requests to mock or assert on backend traffic.",
      "Execute full-stack flows (e.g., UI click -> API call -> DB insert).",
      "Run tests in CI environments."
    ],
    commonMistakes: [
      "Relying too heavily on E2E tests (they are slow and flaky) instead of unit/integration tests.",
      "Using fixed timeouts instead of waiting for DOM elements or network calls."
    ],
    realWorldApplications: [
      "A script that fills out a signup form, submits it, checks an email inbox API, and clicks a verification link.",
      "Testing the entire payment flow using Stripe test cards."
    ],
    resources: [
      { type: "official", title: "Playwright Documentation", url: "https://playwright.dev/" },
      { type: "video_en", title: "Playwright Crash Course", url: "https://www.youtube.com/watch?v=aQOSPA-XqXQ" },
      { type: "video_hi", title: "Cypress Testing in Hindi", url: "https://www.youtube.com/watch?v=wX-y0Xo1EFE" },
      { type: "article", title: "Just Say No to More End-to-End Tests", url: "https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html" },
      { type: "github", title: "Awesome Playwright", url: "https://github.com/mxschmitt/awesome-playwright" },
      { type: "cheat_sheet", title: "Cypress Cheat Sheet", url: "https://docs.cypress.io/api/table-of-contents" },
      { type: "deep_dive", title: "Flaky Tests at Google and How We Mitigate Them", url: "https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html" }
    ]
  },
  // --- 10. CI/CD & Containers ---
  "n_cicd_1": {
    title: "Docker Basics",
    slug: "docker-basics",
    whyLearnThis: "Docker solves the 'it works on my machine' problem. It packages your application and its environment (OS, libraries, dependencies) into a single, portable container.",
    whenIsItUsed: "Whenever deploying a modern application, sharing dev environments, or running integration tests.",
    whereIsItUsed: "Docker Hub, Kubernetes, ECS.",
    whatComesNext: "Docker Compose",
    learningOutcomes: [
      "Understand Images vs Containers.",
      "Write a `Dockerfile` to build an image.",
      "Understand container port mapping and volumes.",
      "Minimize image size using multi-stage builds."
    ],
    commonMistakes: [
      "Running the container as the root user (a massive security risk).",
      "Copying all files (including `node_modules` or `.git`) into the container instead of using a `.dockerignore`."
    ],
    realWorldApplications: [
      "Running a local instance of PostgreSQL via Docker instead of installing it on your host machine.",
      "Packaging a Node.js backend into a 50MB alpine image for deployment."
    ],
    resources: [
      { type: "official", title: "Docker Official Tutorial", url: "https://docs.docker.com/get-started/" },
      { type: "video_en", title: "Docker in 100 Seconds", url: "https://www.youtube.com/watch?v=Gjnup-PuquQ" },
      { type: "video_hi", title: "Docker Tutorial in Hindi", url: "https://www.youtube.com/watch?v=3c-iZaI7x8o" },
      { type: "article", title: "Docker Best Practices", url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" },
      { type: "github", title: "Awesome Docker", url: "https://github.com/veggiemonk/awesome-docker" },
      { type: "cheat_sheet", title: "Docker CLI Cheat Sheet", url: "https://docs.docker.com/get-started/docker_cheatsheet.pdf" },
      { type: "deep_dive", title: "Namespaces and Cgroups (How Docker works)", url: "https://www.nginx.com/blog/what-are-namespaces-cgroups-how-do-they-work/" }
    ]
  },
  "n_cicd_2": {
    title: "Docker Compose",
    slug: "docker-compose",
    whyLearnThis: "Real applications require multiple containers (e.g., a backend container, a database container, a Redis container). Docker Compose allows you to define and run them all together.",
    whenIsItUsed: "For local development and testing complex multi-container architectures.",
    whereIsItUsed: "Local dev environments, single-server deployments.",
    whatComesNext: "CI/CD Pipelines",
    learningOutcomes: [
      "Write a `docker-compose.yml` file.",
      "Understand container networking (how containers talk to each other).",
      "Use environment variables inside compose files.",
      "Persist database data using named volumes."
    ],
    commonMistakes: [
      "Using Docker Compose for large-scale production deployments (Kubernetes or ECS is usually better).",
      "Not setting up health checks, causing a backend container to crash because the DB container hasn't finished booting."
    ],
    realWorldApplications: [
      "Running `docker-compose up` to instantly start a local dev environment with Node, Postgres, and Redis.",
      "Setting up a full ELK stack (Elasticsearch, Logstash, Kibana) locally for log analysis."
    ],
    resources: [
      { type: "official", title: "Docker Compose Overview", url: "https://docs.docker.com/compose/" },
      { type: "video_en", title: "Docker Compose Crash Course", url: "https://www.youtube.com/watch?v=Qw9zlE3t8Ko" },
      { type: "video_hi", title: "Docker Compose in Hindi", url: "https://www.youtube.com/watch?v=4CjA1f1vHjE" },
      { type: "article", title: "A Guide to Docker Compose", url: "https://gabrieltanner.org/blog/docker-compose/" },
      { type: "github", title: "Awesome Compose Examples", url: "https://github.com/docker/awesome-compose" },
      { type: "cheat_sheet", title: "Docker Compose Cheat Sheet", url: "https://devhints.io/docker-compose" },
      { type: "deep_dive", title: "Docker Compose Networking", url: "https://docs.docker.com/compose/networking/" }
    ]
  },
  "n_cicd_3": {
    title: "Cicd Pipelines",
    slug: "cicd-pipelines",
    whyLearnThis: "Continuous Integration / Continuous Deployment (CI/CD) automates the testing and deployment of your code. It prevents broken code from reaching production.",
    whenIsItUsed: "Every time a developer pushes code to a repository.",
    whereIsItUsed: "GitLab CI, CircleCI, Jenkins, AWS CodePipeline.",
    whatComesNext: "GitHub Actions",
    learningOutcomes: [
      "Understand the difference between Continuous Integration and Continuous Deployment.",
      "Configure automated test runs on Pull Requests.",
      "Automate Docker image builds.",
      "Implement deployment strategies (Blue/Green, Canary)."
    ],
    commonMistakes: [
      "Deploying to production automatically without running tests first.",
      "Hardcoding secrets (AWS keys, DB passwords) directly into the pipeline config instead of using secret managers."
    ],
    realWorldApplications: [
      "Blocking a PR from being merged because the Unit Tests failed in CI.",
      "Automatically deploying the `main` branch to a staging server on every push."
    ],
    resources: [
      { type: "official", title: "What is CI/CD? (RedHat)", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
      { type: "video_en", title: "CI/CD Explained (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=scEDHsr3APg" },
      { type: "video_hi", title: "CI/CD Pipeline in Hindi", url: "https://www.youtube.com/watch?v=4W_3FfPj0bE" },
      { type: "article", title: "Continuous Delivery vs Continuous Deployment", url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment" },
      { type: "github", title: "Awesome CI/CD", url: "https://github.com/ligurio/awesome-ci" },
      { type: "cheat_sheet", title: "GitLab CI Cheat Sheet", url: "https://docs.gitlab.com/ee/ci/yaml/" },
      { type: "deep_dive", title: "The Deployment Pipeline", url: "https://martinfowler.com/bliki/DeploymentPipeline.html" }
    ]
  },
  "n_cicd_4": {
    title: "Github Actions",
    slug: "github-actions",
    whyLearnThis: "GitHub Actions is built directly into GitHub. It is currently the most popular and accessible way to set up CI/CD for modern repositories.",
    whenIsItUsed: "For linting, testing, building, and deploying code hosted on GitHub.",
    whereIsItUsed: "GitHub Repositories (`.github/workflows`).",
    whatComesNext: "Monoliths vs Microservices",
    learningOutcomes: [
      "Write a basic GitHub Actions workflow YAML file.",
      "Understand Triggers (`on: push`, `on: pull_request`).",
      "Use pre-built community Actions (e.g., checkout code, setup Node).",
      "Manage GitHub Secrets."
    ],
    commonMistakes: [
      "Not pinning community actions to a specific version or commit hash, leading to supply chain vulnerabilities.",
      "Running untrusted code (like PRs from public forks) in a privileged environment."
    ],
    realWorldApplications: [
      "Publishing an npm package automatically when a new GitHub Release is created.",
      "Building a Docker image and pushing it to AWS ECR on every merge to `main`."
    ],
    resources: [
      { type: "official", title: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
      { type: "video_en", title: "GitHub Actions Crash Course", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
      { type: "video_hi", title: "GitHub Actions in Hindi", url: "https://www.youtube.com/watch?v=wX-y0Xo1EFE" },
      { type: "article", title: "Building a CI/CD Pipeline with GitHub Actions", url: "https://www.freecodecamp.org/news/build-a-ci-cd-pipeline-with-github-actions/" },
      { type: "github", title: "Awesome Actions", url: "https://github.com/sdras/awesome-actions" },
      { type: "cheat_sheet", title: "GitHub Actions Cheat Sheet", url: "https://github.github.io/actions-cheat-sheet/actions-cheat-sheet.pdf" },
      { type: "deep_dive", title: "Security Hardening for GitHub Actions", url: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions" }
    ]
  },
  // --- 11. Architecture ---
  "n_arch_1": {
    title: "Monoliths Vs Microservices",
    slug: "monoliths-vs-microservices",
    whyLearnThis: "Choosing the right architecture is critical. Monoliths are easier to build and test; microservices allow independent scaling and deployment.",
    whenIsItUsed: "When designing a new application or scaling an existing one that has become too large and complex.",
    whereIsItUsed: "System Design, CTO-level decisions.",
    whatComesNext: "Serverless Architecture",
    learningOutcomes: [
      "Understand the pros and cons of a Monolithic architecture.",
      "Understand what a Microservice is.",
      "Explain Conway's Law.",
      "Understand the complexities introduced by microservices (network latency, distributed tracing)."
    ],
    commonMistakes: [
      "Building microservices for a brand new startup before product-market fit (over-engineering).",
      "Creating a 'Distributed Monolith' (microservices that are so tightly coupled they must all be deployed together)."
    ],
    realWorldApplications: [
      "Splitting a monolithic e-commerce app into a 'Billing Service' and an 'Inventory Service'.",
      "Choosing a Monolith for a simple blog engine to keep deployments easy."
    ],
    resources: [
      { type: "official", title: "Microservices Architecture (Microsoft)", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices" },
      { type: "video_en", title: "Monolith vs Microservices", url: "https://www.youtube.com/watch?v=q6gEqtYgZ5Q" },
      { type: "video_hi", title: "Microservices Explained in Hindi", url: "https://www.youtube.com/watch?v=T_e42uO-N4c" },
      { type: "article", title: "Microservices by Martin Fowler", url: "https://martinfowler.com/articles/microservices.html" },
      { type: "github", title: "Awesome Microservices", url: "https://github.com/mfornos/awesome-microservices" },
      { type: "cheat_sheet", title: "Microservice Patterns", url: "https://microservices.io/patterns/index.html" },
      { type: "deep_dive", title: "Monolith First", url: "https://martinfowler.com/bliki/MonolithFirst.html" }
    ]
  },
  "n_arch_2": {
    title: "Serverless Architecture",
    slug: "serverless-architecture",
    whyLearnThis: "Serverless abstracts away server management. You write functions, and the cloud provider automatically scales them from zero to millions of requests.",
    whenIsItUsed: "For unpredictable workloads, cron jobs, or rapidly scaling APIs without managing infrastructure.",
    whereIsItUsed: "AWS Lambda, Google Cloud Functions, Vercel.",
    whatComesNext: "API Gateway & BFF",
    learningOutcomes: [
      "Understand FaaS (Function as a Service).",
      "Understand 'Cold Starts' and how to mitigate them.",
      "Explain the pricing model of serverless (pay per execution).",
      "Understand the stateless nature of serverless functions."
    ],
    commonMistakes: [
      "Opening a new database connection inside every function invocation, instantly exhausting the database's connection pool.",
      "Using serverless for long-running, continuous processes (it becomes very expensive)."
    ],
    realWorldApplications: [
      "An image resizing function that triggers automatically when a user uploads a photo to an S3 bucket.",
      "A Next.js API route deployed on Vercel."
    ],
    resources: [
      { type: "official", title: "AWS Serverless Overview", url: "https://aws.amazon.com/serverless/" },
      { type: "video_en", title: "Serverless in 100 Seconds", url: "https://www.youtube.com/watch?v=vxJobGtqKWA" },
      { type: "video_hi", title: "What is Serverless? (Hindi)", url: "https://www.youtube.com/watch?v=KzE_5N0_j9Y" },
      { type: "article", title: "Serverless Architectures", url: "https://martinfowler.com/articles/serverless.html" },
      { type: "github", title: "Awesome Serverless", url: "https://github.com/anaibol/awesome-serverless" },
      { type: "cheat_sheet", title: "Serverless Framework CLI", url: "https://www.serverless.com/framework/docs/providers/aws/cli-reference/" },
      { type: "deep_dive", title: "Mitigating Serverless Cold Starts", url: "https://mikhail.io/serverless/coldstarts/aws/" }
    ]
  },
  "n_arch_3": {
    title: "Api Gateway Bff",
    slug: "api-gateway-bff",
    whyLearnThis: "In a microservices world, clients shouldn't need to know the IP address of 20 different services. An API Gateway or BFF (Backend for Frontend) handles routing.",
    whenIsItUsed: "When aggregating data from multiple services or tailoring responses for specific clients (Mobile vs Web).",
    whereIsItUsed: "AWS API Gateway, Apollo Federation, Kong.",
    whatComesNext: "Event-Driven Architecture",
    learningOutcomes: [
      "Understand the role of an API Gateway (Routing, Auth, Rate Limiting).",
      "Understand the Backend-For-Frontend (BFF) pattern.",
      "Explain GraphQL Federation.",
      "Understand how Gateways reduce client-side complexity."
    ],
    commonMistakes: [
      "Putting too much business logic into the API Gateway, essentially turning it into a monolithic chokepoint.",
      "Not securing the internal microservices, assuming the Gateway handles all security."
    ],
    realWorldApplications: [
      "Creating a mobile-specific BFF that crops images and strips unnecessary data to save mobile bandwidth.",
      "Using AWS API Gateway to route `/billing` to a Lambda function and `/users` to an EC2 instance."
    ],
    resources: [
      { type: "official", title: "API Gateway Pattern", url: "https://microservices.io/patterns/apigateway.html" },
      { type: "video_en", title: "What is an API Gateway?", url: "https://www.youtube.com/watch?v=1vjnCEGZq3Y" },
      { type: "video_hi", title: "API Gateway in Hindi", url: "https://www.youtube.com/watch?v=ZcMhFz_zC0Q" },
      { type: "article", title: "Pattern: Backends For Frontends", url: "https://samnewman.io/patterns/architectural/bff/" },
      { type: "github", title: "Kong API Gateway", url: "https://github.com/Kong/kong" },
      { type: "cheat_sheet", title: "GraphQL Federation Docs", url: "https://www.apollographql.com/docs/federation/" },
      { type: "deep_dive", title: "Building a BFF with Node.js", url: "https://www.apollographql.com/docs/federation/" }
    ]
  },
  "n_arch_4": {
    title: "Event Driven Architecture",
    slug: "event-driven-architecture",
    whyLearnThis: "Event-Driven architectures react to state changes (events) rather than relying on synchronous API calls. It creates highly decoupled, scalable systems.",
    whenIsItUsed: "When building real-time systems, IoT backends, or complex asynchronous workflows.",
    whereIsItUsed: "Kafka, AWS EventBridge, Serverless.",
    whatComesNext: "Cloud Providers (AWS/GCP/Azure)",
    learningOutcomes: [
      "Understand Event Sourcing.",
      "Explain the CQRS pattern (Command Query Responsibility Segregation).",
      "Differentiate between Events (something happened) and Commands (do something).",
      "Design systems using an Event Bus."
    ],
    commonMistakes: [
      "Failing to handle duplicate events (lack of idempotency).",
      "Assuming event delivery is always instantaneous and strictly ordered."
    ],
    realWorldApplications: [
      "An e-commerce system where a 'Payment Succeeded' event triggers the shipping, invoice, and loyalty points microservices independently.",
      "Rebuilding the exact state of a database at any point in time using Event Sourcing."
    ],
    resources: [
      { type: "official", title: "AWS: Event-Driven Architecture", url: "https://aws.amazon.com/event-driven-architecture/" },
      { type: "video_en", title: "Event-Driven Architecture in 5 Minutes", url: "https://www.youtube.com/watch?v=l_Q-gLwA_X0" },
      { type: "video_hi", title: "Event Driven Architecture (Hindi)", url: "https://www.youtube.com/watch?v=T_e42uO-N4c" },
      { type: "article", title: "What do you mean by Event-Driven?", url: "https://martinfowler.com/articles/201701-event-driven.html" },
      { type: "github", title: "Event Sourcing Examples", url: "https://github.com/cer/event-sourcing-examples" },
      { type: "cheat_sheet", title: "CQRS Pattern", url: "https://microservices.io/patterns/data/cqrs.html" },
      { type: "deep_dive", title: "The Many Meanings of Event-Driven Architecture", url: "https://www.youtube.com/watch?v=STKCRSUsyP0" }
    ]
  },
  // --- 12. Cloud & Deployment ---
  "n_cloud_1": {
    title: "Cloud Providers",
    slug: "cloud-providers",
    whyLearnThis: "Modern applications run in the cloud. Understanding the core primitives (Compute, Storage, Networking) of major providers is essential for deploying apps.",
    whenIsItUsed: "Whenever launching a production application.",
    whereIsItUsed: "AWS (EC2, S3), GCP, Azure, DigitalOcean.",
    whatComesNext: "Infrastructure as Code",
    learningOutcomes: [
      "Understand IaaS, PaaS, and SaaS.",
      "Provision a virtual machine (e.g., EC2) and SSH into it.",
      "Configure Object Storage (e.g., S3) for file uploads.",
      "Understand basic cloud networking (VPCs, Security Groups, Firewalls)."
    ],
    commonMistakes: [
      "Leaving port 22 (SSH) or port 3306 (Database) open to the public internet.",
      "Committing cloud credentials to a public GitHub repository."
    ],
    realWorldApplications: [
      "Hosting a static React app on an S3 bucket served by a CloudFront CDN.",
      "Running a Node.js backend on an EC2 instance behind an Application Load Balancer."
    ],
    resources: [
      { type: "official", title: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
      { type: "video_en", title: "Cloud Computing Explained", url: "https://www.youtube.com/watch?v=M988_fsOSWo" },
      { type: "video_hi", title: "AWS Basics in Hindi", url: "https://www.youtube.com/watch?v=Z3I-NeqP4mI" },
      { type: "article", title: "IaaS vs PaaS vs SaaS", url: "https://www.ibm.com/cloud/learn/iaas-paas-saas" },
      { type: "github", title: "Awesome AWS", url: "https://github.com/donnemartin/awesome-aws" },
      { type: "cheat_sheet", title: "AWS Cheat Sheet", url: "https://tutorialsdojo.com/aws-cheat-sheets/" },
      { type: "deep_dive", title: "Cloud Design Patterns", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/" }
    ]
  },
  "n_cloud_2": {
    title: "Infrastructure As Code",
    slug: "infrastructure-as-code",
    whyLearnThis: "Clicking around a cloud console to create servers is error-prone and unrepeatable. IaC allows you to define your entire infrastructure using code.",
    whenIsItUsed: "When provisioning infrastructure in a repeatable, version-controlled manner.",
    whereIsItUsed: "Terraform, AWS CloudFormation, Pulumi, Ansible.",
    whatComesNext: "Kubernetes",
    learningOutcomes: [
      "Understand the declarative nature of Terraform.",
      "Define basic resources (VPC, EC2) in code.",
      "Manage infrastructure state files.",
      "Use Configuration Management tools (Ansible) to provision software on servers."
    ],
    commonMistakes: [
      "Losing or corrupting the Terraform `.tfstate` file, causing Terraform to lose track of reality.",
      "Hardcoding secrets in IaC files instead of using variables."
    ],
    realWorldApplications: [
      "Writing a Terraform script to instantly spin up an exact replica of your production environment for staging.",
      "Using Ansible to automatically install Docker on 100 different servers simultaneously."
    ],
    resources: [
      { type: "official", title: "Terraform Documentation", url: "https://developer.hashicorp.com/terraform/docs" },
      { type: "video_en", title: "Terraform Crash Course", url: "https://www.youtube.com/watch?v=l5k1ai_GBDE" },
      { type: "video_hi", title: "Terraform Tutorial in Hindi", url: "https://www.youtube.com/watch?v=W-sZOCTexZg" },
      { type: "article", title: "What is Infrastructure as Code?", url: "https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac" },
      { type: "github", title: "Awesome Terraform", url: "https://github.com/shuaibiyy/awesome-terraform" },
      { type: "cheat_sheet", title: "Terraform CLI Cheat Sheet", url: "https://spacelift.io/blog/terraform-commands-cheat-sheet" },
      { type: "deep_dive", title: "Immutable Infrastructure", url: "https://spacelift.io/blog/terraform-commands-cheat-sheet" }
    ]
  },
  "n_cloud_3": {
    title: "Kubernetes",
    slug: "kubernetes",
    whyLearnThis: "Kubernetes (K8s) is the industry standard for orchestrating containers. It automates the deployment, scaling, and management of containerized applications.",
    whenIsItUsed: "When running complex, large-scale microservice architectures that require high availability.",
    whereIsItUsed: "EKS (AWS), GKE (Google), AKS (Azure).",
    whatComesNext: "Monitoring & Observability",
    learningOutcomes: [
      "Understand Nodes, Pods, Deployments, and Services.",
      "Write Kubernetes YAML manifests.",
      "Understand Ingress for routing external traffic into the cluster.",
      "Configure HPA (Horizontal Pod Autoscaling)."
    ],
    commonMistakes: [
      "Using Kubernetes for a simple, single-container app (massive overkill).",
      "Not setting CPU/Memory limits on Pods, causing one greedy app to crash an entire Node."
    ],
    realWorldApplications: [
      "Automatically scaling up the number of backend API pods from 3 to 50 during a massive traffic spike (e.g., Black Friday).",
      "Performing zero-downtime rolling updates of an application."
    ],
    resources: [
      { type: "official", title: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/" },
      { type: "video_en", title: "Kubernetes in 100 Seconds", url: "https://www.youtube.com/watch?v=VnvRFRk_51k" },
      { type: "video_hi", title: "Kubernetes Tutorial in Hindi", url: "https://www.youtube.com/watch?v=T_e42uO-N4c" },
      { type: "article", title: "Kubernetes Concepts", url: "https://kubernetes.io/docs/concepts/" },
      { type: "github", title: "Awesome Kubernetes", url: "https://github.com/ramitsurana/awesome-kubernetes" },
      { type: "cheat_sheet", title: "kubectl Cheat Sheet", url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/" },
      { type: "deep_dive", title: "Kubernetes Architecture Detailed", url: "https://kubernetes.io/docs/concepts/architecture/" }
    ]
  },
  "n_cloud_4": {
    title: "Monitoring Observability",
    slug: "monitoring-observability",
    whyLearnThis: "If your app crashes in the forest and there are no logs, did it really crash? Monitoring lets you know your app is healthy; Observability helps you debug it when it's not.",
    whenIsItUsed: "Constantly in production to ensure uptime and debug issues.",
    whereIsItUsed: "Prometheus, Grafana, Datadog, ELK stack.",
    whatComesNext: "Keep Learning! (End of Roadmap)",
    learningOutcomes: [
      "Understand the Three Pillars of Observability: Logs, Metrics, and Traces.",
      "Implement structured logging (JSON logs).",
      "Set up alerting for critical metrics (e.g., CPU > 90% or 5xx error rate spikes).",
      "Understand Distributed Tracing (OpenTelemetry)."
    ],
    commonMistakes: [
      "Logging sensitive user data (passwords, credit cards, PII) into plain text files.",
      "Setting up too many noisy alerts, causing 'alert fatigue' where engineers ignore them."
    ],
    realWorldApplications: [
      "Using Grafana to build a dashboard showing real-time API response times.",
      "Tracing a slow request as it travels from the Frontend -> API Gateway -> Auth Service -> Database."
    ],
    resources: [
      { type: "official", title: "OpenTelemetry Documentation", url: "https://opentelemetry.io/docs/" },
      { type: "video_en", title: "Observability vs Monitoring", url: "https://www.youtube.com/watch?v=vVj2i5K6Q3U" },
      { type: "video_hi", title: "Prometheus & Grafana (Hindi)", url: "https://www.youtube.com/watch?v=wX-y0Xo1EFE" },
      { type: "article", title: "Metrics, Tracing, and Logging", url: "https://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html" },
      { type: "github", title: "Awesome Observability", url: "https://opentelemetry.io/docs/concepts/signals/" },
      { type: "cheat_sheet", title: "PromQL (Prometheus) Cheat Sheet", url: "https://promlabs.com/promql-cheat-sheet/" },
      { type: "deep_dive", title: "Google SRE Book: Monitoring Distributed Systems", url: "https://sre.google/sre-book/monitoring-distributed-systems/" }
    ]
  }
};
