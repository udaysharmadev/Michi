import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "n_fund_1": {
    whyLearnThis: "Understanding IaaS, PaaS, and SaaS helps you choose the right cloud service model for each use case. Choosing wrong means paying for infrastructure management you didn't need, or giving up flexibility you did.",
    whenIsItUsed: "When designing an architecture: should this be a managed service (PaaS/SaaS) or a self-managed VM (IaaS)?",
    whereIsItUsed: "AWS (EC2 = IaaS, RDS = PaaS, Workmail = SaaS), GCP (GCE = IaaS, Cloud SQL = PaaS), Azure (VMs = IaaS, Azure SQL = PaaS).",
    whatComesNext: "Cloud Providers Overview",
    learningOutcomes: [
      "Explain IaaS, PaaS, and SaaS with concrete examples from AWS, GCP, and Azure.",
      "Describe the shared responsibility model for each service type.",
      "Choose the appropriate service model based on a given business requirement.",
      "Explain the difference between public, private, and hybrid clouds."
    ],
    commonMistakes: [
      "Treating all cloud services as equivalent — a managed database (PaaS) has very different maintenance responsibilities than a self-hosted database on EC2 (IaaS).",
      "Defaulting to IaaS (VMs) for everything when PaaS would eliminate operational overhead."
    ],
    realWorldApplications: [
      "A startup choosing Cloud Run (PaaS) over managing Kubernetes to reduce operational burden.",
      "An enterprise keeping sensitive data in a private cloud while using public cloud for compute bursts."
    ],
    resources: [
      { type: "official", title: "AWS: Types of Cloud Computing", url: "https://aws.amazon.com/types-of-cloud-computing/" },
      { type: "video_en", title: "IaaS vs PaaS vs SaaS (IBM Technology)", url: "https://www.youtube.com/watch?v=9CVBohl6w0Q" },
      { type: "video_hi", title: "Cloud Computing Models in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=ZB5ONbD_SMY" },
      { type: "article", title: "Cloudflare: What is Cloud Computing?", url: "https://www.cloudflare.com/learning/cloud/what-is-the-cloud/" },
      { type: "github", title: "open-guides/og-aws: Practical AWS guide", url: "https://github.com/open-guides/og-aws" },
      { type: "cheat_sheet", title: "Cloud Computing Comparison Cheat Sheet", url: "https://www.bmc.com/blogs/saas-vs-paas-vs-iaas-whats-the-difference-and-how-to-choose/" },
      { type: "deep_dive", title: "NIST Definition of Cloud Computing", url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf" }
    ]
  },
  "n_fund_2": {
    whyLearnThis: "AWS, GCP, and Azure dominate the cloud market. Understanding each provider's strengths and differentiators lets you make informed technology choices and prevents vendor lock-in.",
    whenIsItUsed: "Choosing a cloud provider for a new project, evaluating multi-cloud strategies, or estimating costs for workloads.",
    whereIsItUsed: "Every company that runs workloads in the cloud — from startups to Fortune 500.",
    whatComesNext: "Cost Management",
    learningOutcomes: [
      "Compare core services across AWS, GCP, and Azure (compute, storage, database, networking).",
      "Explain AWS's market leadership and its unique services (Lambda, DynamoDB, SageMaker).",
      "Describe GCP's strengths in data analytics and ML (BigQuery, Vertex AI).",
      "Understand Azure's enterprise focus and Active Directory integration.",
      "Describe the basics of multi-cloud and hybrid cloud strategies."
    ],
    commonMistakes: [
      "Choosing a cloud provider based on popularity alone instead of fit for specific workloads.",
      "Assuming services with similar names are functionally identical across providers."
    ],
    realWorldApplications: [
      "A startup choosing AWS because of its largest ecosystem and extensive free tier.",
      "An enterprise with Microsoft-heavy infrastructure choosing Azure for seamless Active Directory integration.",
      "A data science team choosing GCP for BigQuery's superior OLAP performance."
    ],
    resources: [
      { type: "official", title: "Google Cloud: Compare AWS and Azure services to Google Cloud", url: "https://cloud.google.com/docs/get-started/aws-azure-gcp-service-comparison" },
      { type: "video_en", title: "AWS vs Azure vs GCP (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=FDM6HFEeKRo" },
      { type: "video_hi", title: "AWS vs Azure vs GCP Hindi (Hitesh Choudhary)", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { type: "article", title: "DigitalOcean: AWS vs Azure vs GCP", url: "https://aws.amazon.com/free/" },
      { type: "github", title: "open-guides/og-aws: Open Guide to AWS", url: "https://github.com/open-guides/og-aws" },
      { type: "cheat_sheet", title: "Cloud Provider Services Comparison", url: "https://comparecloud.in/" },
      { type: "deep_dive", title: "Gartner Magic Quadrant for Cloud Infrastructure", url: "https://aws.amazon.com/gartner-cloud-infrastructure/" }
    ]
  },
  "n_fund_3": {
    whyLearnThis: "Cloud costs can spiral out of control without active management. Unmonitored EC2 instances, forgotten data transfer fees, and oversized databases are among the most common reasons cloud bills exceed budgets by 2-5x.",
    whenIsItUsed: "Setting up a new cloud account, reviewing monthly bills, right-sizing infrastructure, and designing cost-aware architectures.",
    whereIsItUsed: "AWS Cost Explorer, GCP Billing, Azure Cost Management, Infracost, CloudHealth.",
    whatComesNext: "Virtual Machines (EC2/GCE)",
    learningOutcomes: [
      "Set up billing alerts and budget thresholds to prevent unexpected charges.",
      "Use AWS Cost Explorer to analyze spending by service, region, and tag.",
      "Explain the difference between on-demand, reserved, and spot instances.",
      "Tag resources systematically for cost attribution across teams.",
      "Identify and eliminate cloud waste (unused EBS volumes, idle load balancers, oversized instances)."
    ],
    commonMistakes: [
      "Not setting billing alerts — the first sign something is wrong should not be the monthly invoice.",
      "Running development environments 24/7 when they're only used 8 hours per day.",
      "Not using reserved instances for stable, predictable workloads — savings of 30-72% over on-demand."
    ],
    realWorldApplications: [
      "A company saving 40% on their AWS bill by converting long-running EC2 instances from on-demand to reserved pricing.",
      "Tagging all resources by team and project to accurately chargeback costs to business units.",
      "Scheduled Lambda functions that stop non-production EC2 instances at 7pm and restart them at 8am."
    ],
    resources: [
      { type: "official", title: "AWS Cost Management Documentation", url: "https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html" },
      { type: "video_en", title: "AWS Cost Optimization (freeCodeCamp)", url: "https://www.youtube.com/watch?v=0d0Q3-1N3cE" },
      { type: "video_hi", title: "AWS Cost Management in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=B0iG_lCzNI8" },
      { type: "article", title: "AWS: Cost Optimization Pillar — Well-Architected Framework", url: "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html" },
      { type: "github", title: "infracost/infracost: Cloud cost estimates for Terraform", url: "https://github.com/infracost/infracost" },
      { type: "cheat_sheet", title: "AWS Pricing Calculator", url: "https://aws.amazon.com/calculator/" },
      { type: "deep_dive", title: "FinOps Foundation: Cloud Financial Management", url: "https://www.finops.org/introduction/what-is-finops/" }
    ]
  },
  "n_comp_1": {
    whyLearnThis: "Virtual machines are the most flexible compute primitive — you get a full Linux/Windows server in the cloud that you control completely. EC2 on AWS and GCE on GCP are used for everything from web servers to databases to batch processing.",
    whenIsItUsed: "Hosting web applications, running databases, processing batch jobs, and when managed services don't fit the workload.",
    whereIsItUsed: "AWS EC2, Google Compute Engine, Azure Virtual Machines, DigitalOcean Droplets.",
    whatComesNext: "Serverless Computing (Lambda)",
    learningOutcomes: [
      "Launch an EC2 instance, configure its security group, and connect via SSH.",
      "Choose the right instance type for compute (c-series), memory (r-series), or storage (i-series) workloads.",
      "Create and manage AMIs (machine images) for repeatable deployments.",
      "Set up EBS volumes, snapshot them for backups, and attach them to instances.",
      "Use Auto Scaling groups to add and remove instances based on CPU or custom metrics."
    ],
    commonMistakes: [
      "Over-provisioning instance size — start small and scale up; it's easy to resize.",
      "Not using reserved instances for workloads running 24/7 — save up to 72% vs on-demand pricing.",
      "Not using spot instances for fault-tolerant batch workloads — up to 90% savings."
    ],
    realWorldApplications: [
      "A web application running on a fleet of EC2 instances behind an Application Load Balancer.",
      "A batch processing job running on spot instances that completes 10x faster for 80% less cost.",
      "A database server on a memory-optimized r5 instance with EBS io2 volumes for IOPS performance."
    ],
    resources: [
      { type: "official", title: "Amazon EC2 Documentation", url: "https://docs.aws.amazon.com/ec2/index.html" },
      { type: "video_en", title: "EC2 Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=0d0Q3-1N3cE" },
      { type: "video_hi", title: "AWS EC2 in Hindi (Hitesh Choudhary)", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { type: "article", title: "DigitalOcean: How To Set Up Your First Server on AWS EC2", url: "https://www.digitalocean.com/community/tutorials/how-to-set-up-a-new-ubuntu-server-on-digitalocean" },
      { type: "github", title: "open-guides/og-aws: AWS EC2 section", url: "https://github.com/open-guides/og-aws#ec2" },
      { type: "cheat_sheet", title: "EC2 Instance Types Cheat Sheet", url: "https://instances.vantage.sh/" },
      { type: "deep_dive", title: "AWS: EC2 Best Practices", url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-best-practices.html" }
    ]
  },
  "n_comp_2": {
    whyLearnThis: "AWS Lambda runs your code without any server management. You define a function, it runs in response to events, and you pay only for compute time consumed. For event-driven workloads, this eliminates idle capacity costs and operational overhead.",
    whenIsItUsed: "Event-driven processing (S3 uploads, API requests, scheduled tasks), building APIs, and handling bursty workloads.",
    whereIsItUsed: "AWS Lambda + API Gateway, Google Cloud Functions, Azure Functions, Cloudflare Workers.",
    whatComesNext: "Container Services (ECS/GKE)",
    learningOutcomes: [
      "Write and deploy a Lambda function in Python, Node.js, or Go.",
      "Trigger Lambda from S3, API Gateway, SQS, EventBridge, and DynamoDB Streams.",
      "Configure environment variables, memory, timeout, and concurrency limits.",
      "Monitor Lambda execution with CloudWatch Logs and Lambda Insights.",
      "Understand and mitigate cold starts with provisioned concurrency."
    ],
    commonMistakes: [
      "Using Lambda for long-running tasks (max 15 minutes) — use ECS Fargate for longer jobs.",
      "Not setting a concurrency limit, allowing a buggy function to consume your entire account's Lambda quota.",
      "Storing state inside a Lambda function — it must be stateless by design."
    ],
    realWorldApplications: [
      "An image thumbnail generator that runs every time a file is uploaded to an S3 bucket.",
      "A REST API backend built with Lambda + API Gateway serving 1 million requests/day.",
      "A scheduled Lambda that runs every night to archive old database records to S3 Glacier."
    ],
    resources: [
      { type: "official", title: "AWS Lambda Documentation", url: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" },
      { type: "video_en", title: "AWS Lambda Tutorial (Fireship)", url: "https://www.youtube.com/watch?v=vgisbCjtHz4" },
      { type: "video_hi", title: "AWS Lambda in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=B0iG_lCzNI8" },
      { type: "article", title: "Serverless Framework: AWS Lambda Guide", url: "https://www.serverless.com/aws-lambda/" },
      { type: "github", title: "aws/serverless-application-model: AWS SAM", url: "https://github.com/aws/serverless-application-model" },
      { type: "cheat_sheet", title: "AWS Lambda Limits Reference", url: "https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html" },
      { type: "deep_dive", title: "AWS Serverless Application Lens", url: "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/welcome.html" }
    ]
  },
  "n_comp_3": {
    whyLearnThis: "Container services (ECS, GKE) provide managed environments for running Docker containers at scale without managing the underlying Kubernetes control plane or scheduling logic yourself.",
    whenIsItUsed: "When you need to run containerized microservices in production but want to minimize Kubernetes operational complexity.",
    whereIsItUsed: "AWS ECS (Fargate), Amazon EKS, Google GKE Autopilot, Azure AKS, AWS App Runner.",
    whatComesNext: "Object Storage (S3/GCS)",
    learningOutcomes: [
      "Deploy a Docker container to AWS ECS using Fargate (serverless container execution).",
      "Configure ECS Task Definitions, Services, and Clusters.",
      "Use Application Load Balancer with ECS for traffic routing.",
      "Understand the difference between ECS (simpler) and EKS (full Kubernetes).",
      "Configure auto-scaling for ECS services based on CPU or custom metrics."
    ],
    commonMistakes: [
      "Choosing EKS when ECS Fargate would be simpler and cheaper for straightforward container workloads.",
      "Not setting container resource limits (CPU and memory), causing resource contention.",
      "Storing container images in public Docker Hub instead of a private registry (ECR)."
    ],
    realWorldApplications: [
      "A microservices application with 8 services deployed on ECS Fargate, auto-scaling based on request count.",
      "A company migrating from EC2 to ECS to eliminate OS patching and reduce infrastructure management.",
      "GKE Autopilot running a Kubernetes workload where Google manages all nodes automatically."
    ],
    resources: [
      { type: "official", title: "Amazon ECS Documentation", url: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/what-is-fargate.html" },
      { type: "video_en", title: "ECS Fargate Tutorial (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=esISkPlnxL0" },
      { type: "video_hi", title: "AWS ECS in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=ZbZSflqJeHs" },
      { type: "article", title: "DigitalOcean: Introduction to AWS ECS", url: "https://www.digitalocean.com/community/tutorials/the-docker-ecosystem-an-introduction-to-common-components" },
      { type: "github", title: "aws-samples: ECS blueprints", url: "https://github.com/aws-ia/ecs-blueprints" },
      { type: "cheat_sheet", title: "ECS vs EKS vs Fargate Comparison", url: "https://aws.amazon.com/ecs/faqs/" },
      { type: "deep_dive", title: "AWS: Containers on AWS Overview", url: "https://aws.amazon.com/containers/" }
    ]
  },
  "n_stor_1": {
    whyLearnThis: "S3 is Amazon's most used service — a virtually unlimited, highly durable object storage service for any type of file. It underpins static websites, backups, data lakes, and ML training datasets.",
    whenIsItUsed: "Storing static assets (images, videos, documents), backups, log archives, ML training data, and serving static websites.",
    whereIsItUsed: "AWS S3, Google Cloud Storage (GCS), Azure Blob Storage, Cloudflare R2.",
    whatComesNext: "Block Storage (EBS)",
    learningOutcomes: [
      "Create S3 buckets with versioning, server-side encryption, and appropriate access control.",
      "Use bucket policies and ACLs to control who can read/write objects.",
      "Configure static website hosting on S3 with a custom domain.",
      "Set up lifecycle policies to archive objects to Glacier or delete them after a retention period.",
      "Use S3 Transfer Acceleration or CloudFront for low-latency global access."
    ],
    commonMistakes: [
      "Making S3 buckets or objects publicly accessible when they should be private — the default should always be private.",
      "Not enabling versioning for important buckets, making accidental deletions unrecoverable.",
      "Storing small objects as individual S3 files instead of aggregating them — S3 is optimized for large objects."
    ],
    realWorldApplications: [
      "A Next.js application serving all images and videos from S3 via a CloudFront CDN.",
      "Daily database backups archived to S3, then automatically moved to Glacier after 30 days for 90% cost reduction.",
      "A data lake storing 10 TB of Parquet files on S3, queried with Athena."
    ],
    resources: [
      { type: "official", title: "Amazon S3 Documentation", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html" },
      { type: "video_en", title: "S3 Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=tfU0JEZjcsg" },
      { type: "video_hi", title: "AWS S3 in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=ZB5ONbD_SMY" },
      { type: "article", title: "DigitalOcean: How To Use AWS S3 in the CLI", url: "https://www.digitalocean.com/community/tutorials/how-to-use-aws-s3-with-the-aws-cli" },
      { type: "github", title: "open-guides/og-aws: S3 Guide", url: "https://github.com/open-guides/og-aws#s3" },
      { type: "cheat_sheet", title: "AWS S3 CLI Commands Reference", url: "https://docs.aws.amazon.com/cli/latest/reference/s3/" },
      { type: "deep_dive", title: "AWS S3 Security Best Practices", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html" }
    ]
  },
  "n_stor_2": {
    whyLearnThis: "EBS provides block storage for EC2 instances — the equivalent of a hard drive attached to your server. Unlike S3 (object storage), EBS provides low-latency block I/O suitable for databases and operating system volumes.",
    whenIsItUsed: "Persistent storage for EC2 instances, database storage (PostgreSQL, MySQL on EC2), and operating system root volumes.",
    whereIsItUsed: "AWS EBS, Google Persistent Disk, Azure Managed Disks.",
    whatComesNext: "Managed Databases (RDS)",
    learningOutcomes: [
      "Create and attach EBS volumes to EC2 instances, then format and mount them.",
      "Take EBS snapshots for point-in-time backups and restore from them.",
      "Choose the right EBS volume type for the workload: gp3, io2, st1, sc1.",
      "Understand EBS volume throughput and IOPS limitations for database workloads.",
      "Use EBS lifecycle policies to automate snapshot management."
    ],
    commonMistakes: [
      "Using gp2 volumes for database workloads that need consistent IOPS — use io2 Block Express instead.",
      "Forgetting that EBS volumes can only be attached to one EC2 instance at a time (unlike EFS).",
      "Not taking snapshots before major system changes — EBS snapshots are incremental and cheap."
    ],
    realWorldApplications: [
      "A PostgreSQL database running on EC2 with a 1TB io2 EBS volume for 10,000 IOPS performance.",
      "Automated daily EBS snapshots via Data Lifecycle Manager for a 30-day retention period.",
      "Resizing an EBS volume online (no downtime) using the ModifyVolume API."
    ],
    resources: [
      { type: "official", title: "Amazon EBS Documentation", url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html" },
      { type: "video_en", title: "AWS EBS Deep Dive (Stephane Maarek)", url: "https://www.youtube.com/watch?v=77qLAl-lRpo" },
      { type: "video_hi", title: "AWS EBS in Hindi (Hitesh Choudhary)", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { type: "article", title: "DigitalOcean: Block Storage vs Object Storage", url: "https://www.digitalocean.com/community/tutorials/object-storage-vs-block-storage-services" },
      { type: "github", title: "open-guides/og-aws: EBS section", url: "https://github.com/open-guides/og-aws#ebs" },
      { type: "cheat_sheet", title: "EBS Volume Types Comparison", url: "https://aws.amazon.com/ebs/volume-types/" },
      { type: "deep_dive", title: "EBS Performance Tuning Guide", url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html" }
    ]
  },
  "n_stor_3": {
    whyLearnThis: "Managed databases (RDS, Cloud SQL) eliminate the operational burden of running databases — no OS patching, automated backups, Multi-AZ failover, and read replicas are all handled for you. This is the right choice for most relational database workloads.",
    whenIsItUsed: "Running production relational databases without managing the underlying server, OS, or database engine upgrades.",
    whereIsItUsed: "AWS RDS (MySQL, PostgreSQL, Oracle, SQL Server), Aurora, Google Cloud SQL, Azure Database for PostgreSQL.",
    whatComesNext: "Virtual Private Cloud (VPC)",
    learningOutcomes: [
      "Launch an RDS instance with appropriate instance type and storage configuration.",
      "Configure Multi-AZ deployments for high availability and automatic failover.",
      "Set up read replicas to offload read traffic from the primary instance.",
      "Use parameter groups to tune database engine settings.",
      "Configure RDS backups with appropriate retention periods and restore from a snapshot."
    ],
    commonMistakes: [
      "Placing RDS instances in a public subnet — databases should always be in private subnets.",
      "Not enabling Multi-AZ for production databases — the cost increase is worth the availability guarantee.",
      "Using db.t3.micro for production workloads — size appropriately based on connections and query patterns."
    ],
    realWorldApplications: [
      "A SaaS application using RDS Aurora PostgreSQL with Multi-AZ failover under 30 seconds.",
      "Read replicas handling all SELECT queries from the reporting dashboard, reducing primary instance load by 40%.",
      "Automated RDS snapshots retained for 35 days enabling point-in-time recovery."
    ],
    resources: [
      { type: "official", title: "Amazon RDS Documentation", url: "https://docs.aws.amazon.com/rds/index.html" },
      { type: "video_en", title: "AWS RDS Tutorial (freeCodeCamp)", url: "https://www.youtube.com/watch?v=ulprqHHWlng" },
      { type: "video_hi", title: "AWS RDS in Hindi (Hitesh Choudhary)", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { type: "article", title: "DigitalOcean: Managed Database vs Self-Hosted", url: "https://www.digitalocean.com/products/managed-databases" },
      { type: "github", title: "open-guides/og-aws: RDS Guide", url: "https://github.com/open-guides/og-aws#rds" },
      { type: "cheat_sheet", title: "RDS Instance Types and Pricing", url: "https://aws.amazon.com/rds/instance-types/" },
      { type: "deep_dive", title: "AWS Aurora: High Performance Managed Database", url: "https://aws.amazon.com/rds/aurora/features/" }
    ]
  },
  "n_net_1": {
    whyLearnThis: "A VPC is your private network in the cloud. Every cloud resource you create lives inside a VPC, and its security boundaries determine what can communicate with what. A misconfigured VPC can expose your entire database to the internet.",
    whenIsItUsed: "Designing any cloud architecture — every EC2, RDS, Lambda, and EKS cluster lives inside a VPC.",
    whereIsItUsed: "AWS VPC, Google VPC, Azure Virtual Network. All cloud deployments use this concept.",
    whatComesNext: "DNS (Route 53)",
    learningOutcomes: [
      "Create a VPC with public and private subnets across multiple Availability Zones.",
      "Configure Internet Gateways for public internet access and NAT Gateways for private subnet outbound access.",
      "Set up route tables to control traffic flow between subnets.",
      "Use Security Groups (stateful) and NACLs (stateless) for network access control.",
      "Set up VPC Peering or Transit Gateway to connect multiple VPCs."
    ],
    commonMistakes: [
      "Putting databases in public subnets — they should always be in private subnets with no direct internet access.",
      "Using a single AZ for all resources — distribute across at least 2 AZs for high availability.",
      "Forgetting NAT Gateway costs — outbound internet from private subnets through a NAT Gateway is not free."
    ],
    realWorldApplications: [
      "A three-tier architecture: ALB in public subnet, EC2 instances in private subnet, RDS in isolated subnet.",
      "VPC Flow Logs capturing all network traffic for security auditing and anomaly detection.",
      "Transit Gateway connecting 5 VPCs across different AWS accounts in an organization."
    ],
    resources: [
      { type: "official", title: "Amazon VPC Documentation", url: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html" },
      { type: "video_en", title: "AWS VPC Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=7_NNlnH7sAg" },
      { type: "video_hi", title: "AWS VPC in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=KVBON1lA9N8" },
      { type: "article", title: "DigitalOcean: How VPCs Work", url: "https://www.digitalocean.com/community/tutorials/understanding-digitalocean-vpc" },
      { type: "github", title: "terraform-aws-modules/terraform-aws-vpc: Terraform VPC Module", url: "https://github.com/terraform-aws-modules/terraform-aws-vpc" },
      { type: "cheat_sheet", title: "AWS VPC Cheat Sheet (tutorials dojo)", url: "https://tutorialsdojo.com/amazon-vpc/" },
      { type: "deep_dive", title: "AWS: VPC Security Best Practices", url: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html" }
    ]
  },
  "n_net_2": {
    whyLearnThis: "Route 53 is AWS's DNS service. Whether you're pointing a domain to an EC2 instance, configuring failover between regions, or routing traffic based on geographic location, Route 53 handles it with a global anycast DNS network.",
    whenIsItUsed: "Registering or transferring domains, pointing custom domains to cloud resources, setting up health-check-based failover, and geographic routing.",
    whereIsItUsed: "AWS Route 53 (primary), integrated with CloudFront, ALB, API Gateway, S3 static sites.",
    whatComesNext: "Content Delivery Networks (CDN)",
    learningOutcomes: [
      "Create hosted zones and manage DNS records (A, CNAME, MX, TXT, NS) in Route 53.",
      "Use Alias records to point to AWS resources like ALBs and CloudFront distributions.",
      "Configure health checks and failover routing between primary and secondary endpoints.",
      "Set up latency-based routing to direct users to the closest region.",
      "Transfer domain registration to Route 53."
    ],
    commonMistakes: [
      "Using CNAME records at the zone apex (root domain) — use Route 53 Alias records instead.",
      "Not setting appropriate TTLs — low TTLs (60s) for failover scenarios, high TTLs (3600s) for stable records.",
      "Not enabling health checks for multi-region failover configurations."
    ],
    realWorldApplications: [
      "A global SaaS app using latency-based routing to direct US users to us-east-1 and EU users to eu-west-1.",
      "Active-passive failover: primary region health check fails, Route 53 automatically routes to the backup region.",
      "Route 53 Resolver for private DNS resolution within a VPC."
    ],
    resources: [
      { type: "official", title: "Amazon Route 53 Documentation", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html" },
      { type: "video_en", title: "Route 53 Full Tutorial (freeCodeCamp)", url: "https://www.youtube.com/watch?v=ulprqHHWlng" },
      { type: "video_hi", title: "AWS Route 53 in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=ZB5ONbD_SMY" },
      { type: "article", title: "Cloudflare: What is Route 53?", url: "https://www.cloudflare.com/learning/dns/dns-records/" },
      { type: "github", title: "open-guides/og-aws: Route 53 Guide", url: "https://github.com/open-guides/og-aws#route-53" },
      { type: "cheat_sheet", title: "Route 53 Routing Policies Comparison", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html" },
      { type: "deep_dive", title: "Route 53 Health Checks Deep Dive", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html" }
    ]
  },
  "n_net_3": {
    whyLearnThis: "CDNs cache your content at edge locations around the world, delivering it to users from the nearest point of presence. CloudFront reduces latency from hundreds of milliseconds to single digits for users globally, while also reducing origin server load.",
    whenIsItUsed: "Serving static assets (JS, CSS, images), caching API responses, protecting against DDoS attacks, and terminating TLS at the edge.",
    whereIsItUsed: "AWS CloudFront, Cloudflare, Fastly, Akamai, Azure CDN.",
    whatComesNext: "IAM (Identity Access Management)",
    learningOutcomes: [
      "Create a CloudFront distribution with an S3 or ALB origin.",
      "Configure cache behaviors, TTLs, and cache invalidation.",
      "Set up custom domains with ACM-issued TLS certificates on CloudFront.",
      "Use Lambda@Edge or CloudFront Functions for edge computing.",
      "Configure CloudFront geo-restriction to block specific countries."
    ],
    commonMistakes: [
      "Not setting appropriate Cache-Control headers on origin responses — CloudFront uses these to determine caching.",
      "Invalidating entire CloudFront distributions on every deploy instead of just changed paths.",
      "Not using Origin Access Control to prevent direct access to S3 buckets behind CloudFront."
    ],
    realWorldApplications: [
      "A Next.js static site hosted on S3 served globally through CloudFront with 10ms latency worldwide.",
      "Caching API GET responses at CloudFront to reduce database load by 70%.",
      "Using Cloudflare WAF + CDN to block DDoS attacks before they reach the origin servers."
    ],
    resources: [
      { type: "official", title: "Amazon CloudFront Documentation", url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html" },
      { type: "video_en", title: "CloudFront Tutorial (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=RI9np1LWzqw" },
      { type: "video_hi", title: "AWS CloudFront in Hindi (Hitesh Choudhary)", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { type: "article", title: "Cloudflare: What is a CDN?", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" },
      { type: "github", title: "open-guides/og-aws: CloudFront Guide", url: "https://github.com/open-guides/og-aws#cloudfront" },
      { type: "cheat_sheet", title: "CloudFront Behavior Settings Reference", url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html" },
      { type: "deep_dive", title: "CloudFront Performance Deep Dive", url: "https://aws.amazon.com/cloudfront/features/" }
    ]
  },
  "n_sec_1": {
    whyLearnThis: "IAM is the access control foundation for the entire AWS platform. Every API call, every resource access, and every service interaction is authorized through IAM. Getting it wrong means either locking yourself out or leaving the door open for breaches.",
    whenIsItUsed: "Creating service accounts for applications, granting developers access to specific services, and setting up cross-account access for multi-account organizations.",
    whereIsItUsed: "Every AWS service, AWS Organizations, cross-account role assumption, SAML federation for SSO.",
    whatComesNext: "Encryption & KMS",
    learningOutcomes: [
      "Create IAM users, groups, and roles with appropriate policies using the principle of least privilege.",
      "Write IAM policies in JSON with conditions for fine-grained access control.",
      "Assign IAM roles to EC2 instances and Lambda functions to avoid hardcoded credentials.",
      "Enable MFA for all IAM users and enforce it with policy conditions.",
      "Use AWS Organizations SCPs to enforce guardrails across all accounts."
    ],
    commonMistakes: [
      "Using the root account for any operations — create a dedicated IAM admin user and lock the root account away.",
      "Attaching AdministratorAccess to service accounts that only need S3 read access.",
      "Not using IAM Access Analyzer to identify overly permissive policies."
    ],
    realWorldApplications: [
      "A Lambda function with an IAM role that can only write to one specific DynamoDB table.",
      "AWS SSO (IAM Identity Center) granting engineers access to multiple accounts based on their team.",
      "SCP preventing any account in the organization from creating public S3 buckets."
    ],
    resources: [
      { type: "official", title: "AWS IAM Documentation", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html" },
      { type: "video_en", title: "AWS IAM Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=iF9fs8Rw4Uo" },
      { type: "video_hi", title: "AWS IAM in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=ZB5ONbD_SMY" },
      { type: "article", title: "AWS IAM Security Best Practices", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html" },
      { type: "github", title: "toniblyx/prowler: AWS Security Assessment Tool", url: "https://github.com/prowler-cloud/prowler" },
      { type: "cheat_sheet", title: "IAM Policy Statement Reference", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html" },
      { type: "deep_dive", title: "AWS: Security Pillar Well-Architected", url: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html" }
    ]
  },
  "n_sec_2": {
    whyLearnThis: "Encryption is the last line of defense when other controls fail. AWS KMS manages encryption keys for all AWS services — S3, RDS, EBS, DynamoDB — and provides auditable key usage logs through CloudTrail.",
    whenIsItUsed: "Encrypting data at rest in S3, RDS, EBS, and DynamoDB. Encrypting data in transit with TLS. Managing cryptographic keys for applications.",
    whereIsItUsed: "AWS KMS, AWS Secrets Manager, AWS Certificate Manager, every AWS service that supports encryption.",
    whatComesNext: "Compliance & Auditing",
    learningOutcomes: [
      "Create and manage KMS customer managed keys (CMKs) with appropriate key policies.",
      "Enable server-side encryption for S3 buckets using KMS or S3-managed keys.",
      "Encrypt RDS databases and EBS volumes at rest using KMS.",
      "Use AWS Secrets Manager to store and rotate database credentials automatically.",
      "Understand the difference between symmetric and asymmetric encryption in KMS."
    ],
    commonMistakes: [
      "Using AWS-managed keys when customer-managed keys are required for compliance — CMKs give you key usage control.",
      "Storing secrets (passwords, API keys) in environment variables or config files instead of Secrets Manager.",
      "Not enabling automatic key rotation for long-lived CMKs."
    ],
    realWorldApplications: [
      "All S3 buckets automatically encrypted with KMS, and all API calls logged in CloudTrail for HIPAA compliance.",
      "Secrets Manager auto-rotating a PostgreSQL database password every 30 days with no application restart.",
      "Client-side encryption of sensitive data with KMS before uploading to S3, ensuring even AWS cannot read the raw data."
    ],
    resources: [
      { type: "official", title: "AWS KMS Documentation", url: "https://docs.aws.amazon.com/kms/latest/developerguide/overview.html" },
      { type: "video_en", title: "AWS KMS Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=AQDCe585Lnc" },
      { type: "video_hi", title: "AWS KMS in Hindi (Hitesh Choudhary)", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { type: "article", title: "AWS Secrets Manager Documentation", url: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html" },
      { type: "github", title: "aws/aws-encryption-sdk: AWS Encryption SDK", url: "https://github.com/aws/aws-encryption-sdk-python" },
      { type: "cheat_sheet", title: "AWS Encryption Options Reference", url: "https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/crypto-cli-reference.html" },
      { type: "deep_dive", title: "AWS KMS Cryptographic Details", url: "https://docs.aws.amazon.com/kms/latest/cryptographic-details/intro.html" }
    ]
  },
  "n_sec_3": {
    whyLearnThis: "SOC 2, HIPAA, PCI-DSS, and ISO 27001 are compliance frameworks that many enterprise customers require. AWS provides tools (Config, Security Hub, CloudTrail) to prove you meet these requirements through continuous automated auditing.",
    whenIsItUsed: "When a customer asks for your SOC 2 report, when HIPAA regulations apply to healthcare data, or when PCI-DSS governs payment card data.",
    whereIsItUsed: "AWS CloudTrail, AWS Config, AWS Security Hub, AWS Audit Manager.",
    whatComesNext: "Multi-AZ & Regions",
    learningOutcomes: [
      "Enable CloudTrail in all regions and use S3 log archiving for audit trails.",
      "Use AWS Config rules to detect and remediate non-compliant resources automatically.",
      "Set up AWS Security Hub to aggregate findings from GuardDuty, Macie, and Inspector.",
      "Understand the shared responsibility model for specific compliance frameworks.",
      "Use AWS Artifact to download AWS compliance reports (SOC 2, ISO 27001) to share with auditors."
    ],
    commonMistakes: [
      "Not enabling CloudTrail multi-region logging — API calls in other regions won't be audited.",
      "Treating compliance as a one-time audit rather than continuous monitoring.",
      "Not understanding what the customer (you) vs. AWS is responsible for in the shared responsibility model."
    ],
    realWorldApplications: [
      "A healthcare startup enabling HIPAA controls on AWS and using Audit Manager to generate evidence for auditors.",
      "AWS Config rule automatically disabling any public S3 bucket that gets created, remediating it within minutes.",
      "Security Hub dashboard giving a unified view of security findings across 50 AWS accounts in an organization."
    ],
    resources: [
      { type: "official", title: "AWS Compliance Programs", url: "https://aws.amazon.com/compliance/programs/" },
      { type: "video_en", title: "AWS CloudTrail and Config Tutorial", url: "https://www.youtube.com/watch?v=ulprqHHWlng" },
      { type: "video_hi", title: "AWS Compliance Hindi (Hitesh Choudhary)", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { type: "article", title: "AWS: Shared Responsibility Model", url: "https://aws.amazon.com/compliance/shared-responsibility-model/" },
      { type: "github", title: "toniblyx/prowler: AWS Security and Compliance", url: "https://github.com/prowler-cloud/prowler" },
      { type: "cheat_sheet", title: "AWS SOC 2 Compliance Checklist", url: "https://aws.amazon.com/compliance/soc-faqs/" },
      { type: "deep_dive", title: "AWS Security Hub Best Practices", url: "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-best-practices.html" }
    ]
  },
  "n_arch_1": {
    whyLearnThis: "Multi-AZ deployments ensure that a single Availability Zone failure (power, cooling, network) doesn't take down your application. Regions allow you to serve users globally with low latency and meet data sovereignty requirements.",
    whenIsItUsed: "Designing any production system that requires high availability, disaster recovery, or global reach.",
    whereIsItUsed: "AWS Multi-AZ RDS, EKS node groups across AZs, ALB distributing traffic across AZs, Global Accelerator.",
    whatComesNext: "Auto Scaling",
    learningOutcomes: [
      "Explain the difference between Availability Zones and Regions in AWS.",
      "Deploy an RDS database with Multi-AZ for automatic failover.",
      "Spread EC2 instances across multiple AZs using Auto Scaling groups.",
      "Choose the right region for a workload based on latency, compliance, and service availability.",
      "Design for Regional failures using active-active or active-passive multi-region architectures."
    ],
    commonMistakes: [
      "Deploying everything in a single AZ to save money — a single AZ failure will cause a full outage.",
      "Confusing Multi-AZ (high availability) with Read Replicas (read scalability) — they serve different purposes.",
      "Not considering data residency requirements when choosing regions."
    ],
    realWorldApplications: [
      "An e-commerce site with EC2 instances in us-east-1a and us-east-1b behind an ALB — AZ failure causes 0 downtime.",
      "RDS Multi-AZ standby instance automatically promoted to primary within 60 seconds of a failure.",
      "A global application with active regions in us-east-1 and eu-west-1, using Route 53 latency routing."
    ],
    resources: [
      { type: "official", title: "AWS Regions and Availability Zones Documentation", url: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/" },
      { type: "video_en", title: "AWS High Availability (ByteByteGo)", url: "https://www.youtube.com/watch?v=K0Ta65OqQkY" },
      { type: "video_hi", title: "AWS Availability Zones in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=ZB5ONbD_SMY" },
      { type: "article", title: "AWS: Reliability Pillar — Well-Architected Framework", url: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html" },
      { type: "github", title: "aws-samples: Multi-Region architecture samples", url: "https://github.com/aws-samples/aws-multi-region-bc-dr-workshop" },
      { type: "cheat_sheet", title: "AWS Availability Zone Reference", url: "https://docs.aws.amazon.com/ram/latest/userguide/working-with-az-ids.html" },
      { type: "deep_dive", title: "AWS: Disaster Recovery Options in the Cloud", url: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html" }
    ]
  },
  "n_arch_2": {
    whyLearnThis: "Auto Scaling automatically adjusts the number of EC2 instances, ECS tasks, or Lambda concurrency based on demand. It ensures you have enough capacity during peak traffic while not over-provisioning during quiet periods.",
    whenIsItUsed: "Any workload with variable traffic — e-commerce sites with peak sale events, APIs with traffic spikes, batch processing with variable job queues.",
    whereIsItUsed: "AWS EC2 Auto Scaling, ECS Service Auto Scaling, Application Auto Scaling, AWS Lambda concurrency.",
    whatComesNext: "Disaster Recovery",
    learningOutcomes: [
      "Create an Auto Scaling group with launch template, min/max/desired capacity settings.",
      "Configure scaling policies: step scaling, target tracking, and predictive scaling.",
      "Set up CloudWatch alarms to trigger scaling actions based on CPU, memory, or custom metrics.",
      "Use warm pools to reduce scale-out latency for instances with slow startup times.",
      "Configure scale-in protection for instances that shouldn't be terminated during in-flight jobs."
    ],
    commonMistakes: [
      "Setting the minimum capacity to 0 for production workloads — you need at least 2 instances across AZs.",
      "Relying only on CPU for scaling — use custom metrics like SQS queue depth or request count instead.",
      "Not accounting for instance warm-up time in scaling policies, causing premature additional scale-out events."
    ],
    realWorldApplications: [
      "An e-commerce site scaling from 10 to 200 EC2 instances during Black Friday, then back down automatically.",
      "ECS service scaling up task count when the SQS queue exceeds 1000 messages.",
      "Predictive scaling launching extra instances before the 9am workday rush, based on historical patterns."
    ],
    resources: [
      { type: "official", title: "Amazon EC2 Auto Scaling Documentation", url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html" },
      { type: "video_en", title: "Auto Scaling Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=dGAgxozNWFE" },
      { type: "video_hi", title: "AWS Auto Scaling in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=KVBON1lA9N8" },
      { type: "article", title: "DigitalOcean: Introduction to Auto Scaling", url: "https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-22-04" },
      { type: "github", title: "aws-samples: Autoscaling examples", url: "https://github.com/aws-samples/amazon-ec2-auto-scaling-group-examples" },
      { type: "cheat_sheet", title: "Auto Scaling Scaling Policy Types", url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html" },
      { type: "deep_dive", title: "AWS Auto Scaling Best Practices", url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-best-practices.html" }
    ]
  },
  "n_arch_3": {
    whyLearnThis: "Disaster recovery planning ensures your business can survive major failures — region outages, database corruption, ransomware attacks. Without a tested DR plan, even a well-architected system can have unacceptable downtime when the unexpected happens.",
    whenIsItUsed: "Planning recovery from region-wide failures, corruption events, and ransomware. Defining RTO (Recovery Time Objective) and RPO (Recovery Point Objective) for business continuity.",
    whereIsItUsed: "AWS Backup, cross-region RDS snapshots, Route 53 failover, multi-region active-passive architectures.",
    whatComesNext: "Cloud Engineering Complete",
    learningOutcomes: [
      "Define and differentiate RTO (how quickly must you recover) and RPO (how much data can you afford to lose).",
      "Implement the four DR strategies: backup-and-restore, pilot light, warm standby, active-active.",
      "Set up cross-region RDS snapshot replication for database recovery.",
      "Use AWS Backup to automate backups of EC2, RDS, EFS, and DynamoDB.",
      "Test your DR plan by performing a mock failover to the recovery region."
    ],
    commonMistakes: [
      "Never testing the DR plan — a plan that hasn't been tested is not a plan, it's a guess.",
      "Confusing backup with disaster recovery — backups reduce RPO, but recovery also requires tested procedures.",
      "Not accounting for DNS TTL when calculating actual RTO — a 300s TTL adds 5 minutes to your RTO."
    ],
    realWorldApplications: [
      "A fintech company with RTO < 1 hour and RPO < 5 minutes implementing an active-passive multi-region setup.",
      "AWS Backup automating daily snapshots of all RDS databases with 35-day retention and cross-region replication.",
      "Annual DR drill where the team simulates a us-east-1 region failure and fails over to eu-west-1 within the RTO target."
    ],
    resources: [
      { type: "official", title: "AWS Disaster Recovery Documentation", url: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html" },
      { type: "video_en", title: "AWS Disaster Recovery Strategies (AWS re:Invent)", url: "https://www.youtube.com/watch?v=cJZw5mrxryA" },
      { type: "video_hi", title: "Disaster Recovery Hindi (TechPrimers)", url: "https://www.youtube.com/watch?v=4-I2RMXZJSM" },
      { type: "article", title: "AWS Reliability Pillar: DR Options", url: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/disaster-recovery-dr-objectives.html" },
      { type: "github", title: "aws-samples: disaster recovery samples", url: "https://github.com/aws-samples/aws-multi-region-bc-dr-workshop" },
      { type: "cheat_sheet", title: "DR Strategies Comparison (RTO/RPO)", url: "https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-i-strategies-for-recovery-in-the-cloud/" },
      { type: "deep_dive", title: "Building Resilient AWS Architectures", url: "https://aws.amazon.com/resilience/" }
    ]
  }
};
