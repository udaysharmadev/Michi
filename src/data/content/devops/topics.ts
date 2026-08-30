import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "n_linux_1": {
    slug: "linux-fundamentals",
    whyLearnThis: "Linux powers over 96% of the world's servers. As a DevOps engineer you will spend your entire career SSHing into Linux machines, reading logs, running processes, and configuring services. There is no shortcut around it.",
    whenIsItUsed: "From the moment you SSH into any cloud server, container, or virtual machine. Every CI/CD pipeline step runs on Linux by default.",
    whereIsItUsed: "AWS EC2, Google Compute Engine, Docker containers, Kubernetes nodes, GitHub Actions runners, Raspberry Pi, on-premises data centers.",
    whatComesNext: "Shell Scripting",
    learningOutcomes: [
      "Navigate the filesystem confidently using cd, ls, find, and locate.",
      "Manage file permissions with chmod, chown, and understand octal notation.",
      "Use package managers (apt, yum, dnf) to install and update software.",
      "View and follow logs using tail -f, journalctl, and grep.",
      "Understand the Linux filesystem hierarchy (/etc, /var, /usr, /home)."
    ],
    commonMistakes: [
      "Running commands as root by default instead of using sudo for specific tasks.",
      "Not understanding the difference between absolute and relative paths.",
      "Forgetting that Linux is case-sensitive (README.md vs readme.md are different files)."
    ],
    realWorldApplications: [
      "Configuring a new EC2 instance by SSHing in and setting up packages.",
      "Debugging a crashing service by reading /var/log/syslog.",
      "Setting correct file permissions on SSL certificate files."
    ],
    resources: [
      { type: "official", title: "Linux Foundation: Introduction to Linux", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
      { type: "video_en", title: "Linux Crash Course (Joseph Delgadillo)", url: "https://www.youtube.com/watch?v=wBp0Rb-ZJak" },
      { type: "video_hi", title: "Linux Tutorial for Beginners in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=_tCY-c-sPZc" },
      { type: "article", title: "DigitalOcean: An Introduction to Linux Basics", url: "https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-basics" },
      { type: "github", title: "awesome-linux: Curated Linux resources", url: "https://github.com/inputsh/awesome-linux" },
      { type: "cheat_sheet", title: "Linux Command Line Cheat Sheet (guru99)", url: "https://www.guru99.com/linux-commands-cheat-sheet.html" },
      { type: "deep_dive", title: "The Linux Command Line (full free book)", url: "https://linuxcommand.org/tlcl.php" }
    ]
  },
  "n_linux_2": {
    slug: "shell-scripting",
    whyLearnThis: "Shell scripts automate repetitive tasks — from deployments to backups to log rotation. A DevOps engineer who can't write Bash is constantly doing manually what should be automated.",
    whenIsItUsed: "Writing deployment scripts, cron jobs, CI pipeline steps, startup scripts, and database backup routines.",
    whereIsItUsed: "Every Linux server, Docker entrypoints, GitHub Actions steps, Kubernetes init containers, Jenkins pipeline stages.",
    whatComesNext: "Process Management",
    learningOutcomes: [
      "Write Bash scripts with variables, conditionals (if/else), and loops (for/while).",
      "Use functions and pass arguments to scripts.",
      "Understand exit codes and how to check command success with $?.",
      "Use common text processing tools: grep, awk, sed, cut, sort, uniq.",
      "Handle file I/O: reading files line by line, writing output to files."
    ],
    commonMistakes: [
      "Not quoting variables (using $VAR instead of \"$VAR\"), which breaks on paths with spaces.",
      "Forgetting to add error handling — scripts that silently fail are dangerous in production.",
      "Using Bash-specific features in scripts with #!/bin/sh shebang."
    ],
    realWorldApplications: [
      "A deployment script that pulls the latest Docker image, stops the old container, and starts the new one.",
      "A nightly backup script that archives databases and uploads them to S3.",
      "A log rotation script triggered by cron."
    ],
    resources: [
      { type: "official", title: "GNU Bash Reference Manual", url: "https://linuxize.com/post/bash-scripting-tutorial/" },
      { type: "video_en", title: "Bash Scripting Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=v-F3YLd6oMw" },
      { type: "video_hi", title: "Shell Scripting in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=TtGM9GfBuok" },
      { type: "article", title: "DigitalOcean: How To Write a Bash Script", url: "https://www.digitalocean.com/community/tutorials/how-to-write-a-bash-script" },
      { type: "github", title: "pure-bash-bible: Pure Bash solutions to common tasks", url: "https://github.com/dylanaraps/pure-bash-bible" },
      { type: "cheat_sheet", title: "devhints.io Bash cheatsheet", url: "https://devhints.io/bash" },
      { type: "deep_dive", title: "Advanced Bash-Scripting Guide", url: "https://tldp.org/LDP/abs/html/" }
    ]
  },
  "n_linux_3": {
    slug: "process-management",
    whyLearnThis: "In production, you need to understand what is running, how much CPU/memory it consumes, and how to manage service lifecycles with systemd. Process management is the first tool you reach for when a server is behaving unexpectedly.",
    whenIsItUsed: "Diagnosing high CPU usage, restarting crashed services, setting up services to start on boot, and troubleshooting zombie processes.",
    whereIsItUsed: "Every Linux production server, both cloud and on-premises.",
    whatComesNext: "OSI Model & TCP/IP",
    learningOutcomes: [
      "Use ps, top, and htop to inspect running processes.",
      "Send signals to processes using kill, pkill, and killall.",
      "Manage systemd services: start, stop, restart, enable, status.",
      "Write a basic .service unit file for a custom application.",
      "Understand process priorities with nice and renice."
    ],
    commonMistakes: [
      "Using kill -9 as the first resort instead of kill -15 (SIGTERM), which allows graceful shutdown.",
      "Not using systemd to manage long-running services, relying instead on manual background processes with & that don't survive reboots.",
      "Confusing zombie processes (defunct) with orphan processes."
    ],
    realWorldApplications: [
      "Restarting a Node.js API server managed by systemd after a crash.",
      "Investigating why a server is at 100% CPU using htop and tracing it to a runaway process.",
      "Setting up a background worker to start automatically on server reboot."
    ],
    resources: [
      { type: "official", title: "systemd Documentation", url: "https://www.freedesktop.org/wiki/Software/systemd/" },
      { type: "video_en", title: "Linux Process Management (tutorialspoint)", url: "https://www.youtube.com/watch?v=OrM7nZcxXZU" },
      { type: "video_hi", title: "Linux Process Management Hindi (Abhishek Veeramalla)", url: "https://www.youtube.com/watch?v=H9DAWegYpag" },
      { type: "article", title: "DigitalOcean: How To Use Systemctl to Manage Systemd Services", url: "https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units" },
      { type: "github", title: "systemd: System and Service Manager", url: "https://github.com/systemd/systemd" },
      { type: "cheat_sheet", title: "systemd cheat sheet", url: "https://systemd.io/" },
      { type: "deep_dive", title: "systemd Man Pages", url: "https://www.freedesktop.org/software/systemd/man/latest/" }
    ]
  },
  "n_net_1": {
    slug: "osi-model-tcpip",
    whyLearnThis: "Understanding the OSI and TCP/IP models lets you reason about where in the network stack a problem is occurring — is it a DNS issue (Layer 7), a routing issue (Layer 3), or a physical connection issue (Layer 1)? This mental model is essential for debugging any network problem.",
    whenIsItUsed: "Debugging connectivity issues between microservices, configuring VPCs, setting up load balancers, and troubleshooting API timeouts.",
    whereIsItUsed: "AWS VPC networking, Kubernetes cluster networking, on-premises datacenter design, Nginx/HAProxy configuration.",
    whatComesNext: "DNS & HTTP/HTTPS",
    learningOutcomes: [
      "Name and describe all 7 layers of the OSI model.",
      "Explain the difference between TCP (connection-oriented) and UDP (connectionless).",
      "Understand how IP addressing and subnetting works (CIDR notation).",
      "Use ping, traceroute, netstat, and ss to diagnose network issues.",
      "Explain the three-way TCP handshake."
    ],
    commonMistakes: [
      "Memorizing OSI layer names without understanding what protocols operate at each layer.",
      "Confusing TCP and UDP use cases — choosing TCP for everything when UDP would be faster for streaming/gaming.",
      "Not understanding subnetting, leading to misconfigured VPCs and security groups."
    ],
    realWorldApplications: [
      "Diagnosing why two microservices in different subnets can't communicate.",
      "Understanding why a timeout is occurring at the TCP level vs DNS resolution.",
      "Configuring security groups in AWS to allow only specific ports."
    ],
    resources: [
      { type: "official", title: "Cloudflare: What is the OSI Model?", url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/" },
      { type: "video_en", title: "OSI Model Explained (TechTerms)", url: "https://www.youtube.com/watch?v=vv4y_uOneC0" },
      { type: "video_hi", title: "OSI Model in Hindi (Gate Smashers)", url: "https://www.youtube.com/watch?v=YfUYA3WRHXo" },
      { type: "article", title: "DigitalOcean: An Introduction to Networking Terminology", url: "https://www.digitalocean.com/community/tutorials/an-introduction-to-networking-terminology-interfaces-and-protocols" },
      { type: "github", title: "computer-science: OSI + networking concepts", url: "https://github.com/ossu/computer-science" },
      { type: "cheat_sheet", title: "TCP/IP Overview (Cloudflare)", url: "https://www.cloudflare.com/learning/ddos/glossary/transmission-control-protocol-tcp/" },
      { type: "deep_dive", title: "High Performance Browser Networking (free book)", url: "https://hpbn.co/" }
    ]
  },
  "n_net_2": {
    slug: "dns-http-https",
    whyLearnThis: "Every web request starts with DNS resolution and uses HTTP/HTTPS. Misconfigured DNS propagation, missing TLS certificates, or misunderstood HTTP caching are among the most common production issues DevOps engineers debug.",
    whenIsItUsed: "Setting up custom domains, configuring TLS certificates with Let's Encrypt, debugging 404/502 errors, and configuring CORS.",
    whereIsItUsed: "Cloudflare, AWS Route 53, Nginx virtual hosts, Let's Encrypt, Vercel/Netlify custom domains.",
    whatComesNext: "Firewalls & Load Balancers",
    learningOutcomes: [
      "Explain the DNS resolution chain: resolver → root → TLD → authoritative.",
      "Know the purpose of A, CNAME, MX, TXT, and NS records.",
      "Understand HTTP methods, status codes, and headers.",
      "Explain how TLS/SSL works, including certificate chains and SNI.",
      "Configure an Nginx server block with HTTPS using a certificate."
    ],
    commonMistakes: [
      "Forgetting that DNS changes can take up to 48 hours to propagate globally.",
      "Exposing sensitive data in URLs (which get logged) instead of request bodies or headers.",
      "Confusing HTTP 301 (permanent) and 302 (temporary) redirects and their caching implications."
    ],
    realWorldApplications: [
      "Pointing a custom domain to a Vercel or Netlify deployment.",
      "Configuring an Nginx server with a Let's Encrypt TLS certificate.",
      "Debugging why an API returns 404 in production but not in staging."
    ],
    resources: [
      { type: "official", title: "Cloudflare: How Does DNS Work?", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
      { type: "video_en", title: "DNS Explained (PowerCert Animated Videos)", url: "https://www.youtube.com/watch?v=mpQZVYPuDGU" },
      { type: "video_hi", title: "DNS Explained in Hindi (Thapa Technical)", url: "https://www.youtube.com/watch?v=FmgIQBQ87fo" },
      { type: "article", title: "MDN: An overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
      { type: "github", title: "curl: Everything you need to understand HTTP requests", url: "https://github.com/curl/curl" },
      { type: "cheat_sheet", title: "HTTP Status Codes Cheat Sheet", url: "https://www.restapitutorial.com/httpstatuscodes.html" },
      { type: "deep_dive", title: "Cloudflare: How TLS Works", url: "https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/" }
    ]
  },
  "n_net_3": {
    slug: "firewalls-load-balancers",
    whyLearnThis: "Firewalls and load balancers are the gatekeepers of your infrastructure. A misconfigured firewall can expose your entire database to the internet, while a well-configured load balancer enables zero-downtime deployments and horizontal scaling.",
    whenIsItUsed: "Designing multi-tier architectures (public subnet → private subnet), setting up blue/green deployments, and protecting services from unauthorized access.",
    whereIsItUsed: "AWS Security Groups, AWS ALB/NLB, Nginx as a reverse proxy, HAProxy, Cloudflare WAF, GCP Firewall Rules.",
    whatComesNext: "Docker Basics",
    learningOutcomes: [
      "Configure AWS Security Groups to allow only specific ports from specific IP ranges.",
      "Understand the difference between L4 (TCP) and L7 (HTTP) load balancers.",
      "Set up Nginx as a reverse proxy and load balancer.",
      "Explain round-robin, least-connections, and IP-hash load balancing algorithms.",
      "Configure health checks so the load balancer removes unhealthy instances."
    ],
    commonMistakes: [
      "Allowing 0.0.0.0/0 on port 22 (SSH) — expose SSH only to your IP range.",
      "Using stateful session routing without sticky sessions when the app requires it.",
      "Forgetting that load balancers terminate TLS, so backend connections may be HTTP-only."
    ],
    realWorldApplications: [
      "An AWS ALB distributing traffic across 3 EC2 instances with health checks.",
      "An Nginx reverse proxy terminating TLS and passing requests to a Node.js app on port 3000.",
      "A firewall rule blocking all traffic to the database port except from the app server's security group."
    ],
    resources: [
      { type: "official", title: "AWS: Elastic Load Balancing Documentation", url: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html" },
      { type: "video_en", title: "Load Balancing Explained (ByteByteGo)", url: "https://www.youtube.com/watch?v=K0Ta65OqQkY" },
      { type: "video_hi", title: "Load Balancer Explained in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=qIcEpCX5zOA" },
      { type: "article", title: "DigitalOcean: An Introduction to HAProxy and Load Balancing Concepts", url: "https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts" },
      { type: "github", title: "Nginx: High Performance Load Balancer and Web Server", url: "https://github.com/nginx/nginx" },
      { type: "cheat_sheet", title: "Nginx Cheat Sheet (devhints)", url: "https://nginx.org/en/docs/" },
      { type: "deep_dive", title: "AWS: What is Load Balancing?", url: "https://aws.amazon.com/what-is/load-balancing/" }
    ]
  },
  "n_cont_1": {
    slug: "docker-basics",
    whyLearnThis: "Docker eliminated the 'it works on my machine' problem by packaging applications with all their dependencies into portable containers. It is the foundation of all modern DevOps workflows and a prerequisite for Kubernetes.",
    whenIsItUsed: "Running local development environments, building CI/CD artifacts, packaging applications for deployment, and running dependencies like databases in isolation.",
    whereIsItUsed: "Every CI/CD pipeline, Kubernetes clusters, Docker Swarm, local development with Docker Desktop, AWS ECS, Google Cloud Run.",
    whatComesNext: "Docker Compose",
    learningOutcomes: [
      "Build a Docker image from a Dockerfile with proper layer caching.",
      "Run, stop, and remove containers using docker run, stop, rm.",
      "Understand the difference between images and containers.",
      "Use docker exec to debug a running container.",
      "Push images to Docker Hub or a private registry."
    ],
    commonMistakes: [
      "Running containers as root by default — always specify a non-root USER in the Dockerfile.",
      "Storing application state inside the container instead of using volumes.",
      "Building fat images by not using multi-stage builds — keep production images minimal."
    ],
    realWorldApplications: [
      "Packaging a Node.js API into a Docker image and deploying it to a cloud server.",
      "Running a PostgreSQL database locally in a container instead of installing it on the host.",
      "Building a Docker image in GitHub Actions and pushing it to AWS ECR."
    ],
    resources: [
      { type: "official", title: "Docker Documentation: Get Started", url: "https://docs.docker.com/get-started/" },
      { type: "video_en", title: "Docker Tutorial for Beginners (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
      { type: "video_hi", title: "Docker Tutorial in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=Gw2Jrid4SaQ" },
      { type: "article", title: "DigitalOcean: How To Install and Use Docker", url: "https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04" },
      { type: "github", title: "awesome-docker: Docker resources and tools", url: "https://github.com/veggiemonk/awesome-docker" },
      { type: "cheat_sheet", title: "Docker Cheat Sheet (wsargent)", url: "https://github.com/wsargent/docker-cheat-sheet" },
      { type: "deep_dive", title: "Docker Security Best Practices", url: "https://docs.docker.com/develop/security-best-practices/" }
    ]
  },
  "n_cont_2": {
    slug: "docker-compose",
    whyLearnThis: "Docker Compose lets you define and run multi-container applications (app + database + cache + message broker) with a single command. It is the standard tool for local development environments and smaller production deployments.",
    whenIsItUsed: "Local development setups with multiple services, integration testing, and deploying small-scale multi-service applications.",
    whereIsItUsed: "Local development, CI/CD integration testing stages, Docker Swarm production deployments.",
    whatComesNext: "Container Security",
    learningOutcomes: [
      "Write a docker-compose.yml with multiple services, volumes, and networks.",
      "Use environment variables and .env files in Compose configurations.",
      "Use docker compose up, down, logs, and exec commands.",
      "Configure service dependencies with depends_on and healthchecks.",
      "Use bind mounts for hot-reloading during local development."
    ],
    commonMistakes: [
      "Committing .env files with secrets to version control — use .env.example and .gitignore.",
      "Not defining health checks, causing a service to start before its database is ready.",
      "Using the same docker-compose.yml for development and production — they need different configurations."
    ],
    realWorldApplications: [
      "A local stack with a React frontend, Express API, PostgreSQL, and Redis all started with docker compose up.",
      "An integration test suite in CI that spins up a MySQL container, runs tests, then tears it down.",
      "A WordPress + MySQL deployment on a small VPS managed with Compose."
    ],
    resources: [
      { type: "official", title: "Docker Compose Documentation", url: "https://docs.docker.com/compose/" },
      { type: "video_en", title: "Docker Compose Tutorial (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=SXwC9fSwct8" },
      { type: "video_hi", title: "Docker Compose in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=wdjPuDMeHS4" },
      { type: "article", title: "DigitalOcean: How To Install and Use Docker Compose", url: "https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04" },
      { type: "github", title: "awesome-compose: Docker Compose examples", url: "https://github.com/docker/awesome-compose" },
      { type: "cheat_sheet", title: "Docker Compose Cheat Sheet (devhints)", url: "https://devhints.io/docker-compose" },
      { type: "deep_dive", title: "Compose Specification (the official spec)", url: "https://compose-spec.io/" }
    ]
  },
  "n_cont_3": {
    slug: "container-security",
    whyLearnThis: "Containers share the host kernel, which means a container breakout attack can compromise the entire host. Container security is not an afterthought — it is foundational to running containers in production safely.",
    whenIsItUsed: "Building Dockerfiles for production, configuring Kubernetes pod security policies, and setting up container scanning in CI/CD pipelines.",
    whereIsItUsed: "Docker Hub image scanning, AWS ECR image scanning, Kubernetes Pod Security Standards, Snyk, Trivy.",
    whatComesNext: "Git & GitHub Actions",
    learningOutcomes: [
      "Run containers as non-root by specifying USER in Dockerfile.",
      "Use read-only filesystems and drop unnecessary Linux capabilities.",
      "Scan container images for vulnerabilities using Trivy or Snyk.",
      "Understand the risks of privileged containers.",
      "Use secrets management (Docker Secrets, Kubernetes Secrets, Vault) instead of environment variables for sensitive data."
    ],
    commonMistakes: [
      "Embedding secrets and API keys directly in Dockerfile ENV or ARG instructions.",
      "Using the latest tag for base images instead of pinned, specific versions.",
      "Using large official images (ubuntu:latest) instead of minimal images (alpine or distroless) in production."
    ],
    realWorldApplications: [
      "Running a Trivy scan in CI that fails the build if a critical vulnerability is found.",
      "Kubernetes Pod Security Admission blocking privileged containers in the production namespace.",
      "Multi-stage Dockerfile producing a distroless production image with no shell."
    ],
    resources: [
      { type: "official", title: "Docker Security Documentation", url: "https://docs.docker.com/engine/security/" },
      { type: "video_en", title: "Container Security Best Practices (DevSecOps)", url: "https://www.youtube.com/watch?v=mBiUKUycvts" },
      { type: "video_hi", title: "Container Security Best Practices in Hindi", url: "https://www.youtube.com/watch?v=PE94mMYiQfE" },
      { type: "article", title: "Snyk: 10 Docker Security Best Practices", url: "https://snyk.io/blog/10-docker-image-security-best-practices/" },
      { type: "github", title: "Trivy: Vulnerability scanner for containers", url: "https://github.com/aquasecurity/trivy" },
      { type: "cheat_sheet", title: "Docker Security Cheat Sheet (OWASP)", url: "https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html" },
      { type: "deep_dive", title: "Google Distroless: Container Images with no package manager or shell", url: "https://github.com/GoogleContainerTools/distroless" }
    ]
  },
  "n_ci_1": {
    slug: "git-github-actions",
    whyLearnThis: "GitHub Actions is the most widely adopted CI/CD system, directly integrated into where your code lives. Mastering it means you can automate testing, building, and deploying on every push without managing separate CI infrastructure.",
    whenIsItUsed: "On every git push, pull request, or scheduled event to automatically test, build, and deploy code.",
    whereIsItUsed: "GitHub repositories, integrated with AWS, GCP, Azure, Vercel, Docker Hub, npm, and any service with an API.",
    whatComesNext: "Jenkins / GitLab CI",
    learningOutcomes: [
      "Write a GitHub Actions workflow with jobs, steps, and triggers.",
      "Use the GitHub Actions Marketplace to find and use pre-built actions.",
      "Cache dependencies (npm, pip, Maven) between runs to speed up builds.",
      "Configure secrets securely and reference them in workflow steps.",
      "Set up matrix builds to test across multiple OS and language versions."
    ],
    commonMistakes: [
      "Storing secrets directly in workflow YAML instead of using GitHub Secrets.",
      "Running all steps serially when they could be parallelized with multiple jobs.",
      "Not caching dependencies, causing slow builds that re-download packages every run."
    ],
    realWorldApplications: [
      "A workflow that runs tests on every PR, builds a Docker image on merge to main, and deploys to AWS ECS.",
      "Automated NPM package publishing triggered when a new Git tag is pushed.",
      "Scheduled security scanning of all Docker images every Monday morning."
    ],
    resources: [
      { type: "official", title: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
      { type: "video_en", title: "GitHub Actions Tutorial (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
      { type: "video_hi", title: "GitHub Actions in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=TLB5MY9BBa4" },
      { type: "article", title: "DigitalOcean: How To Build a Node.js CI/CD Pipeline with GitHub Actions", url: "https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker" },
      { type: "github", title: "actions/starter-workflows: Official GitHub Actions workflow templates", url: "https://github.com/actions/starter-workflows" },
      { type: "cheat_sheet", title: "GitHub Actions Overview", url: "https://github.com/features/actions" },
      { type: "deep_dive", title: "GitHub Actions Security Hardening Guide", url: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions" }
    ]
  },
  "n_ci_2": {
    slug: "jenkins-gitlab-ci",
    whyLearnThis: "Jenkins and GitLab CI are the dominant CI/CD platforms in enterprise environments. Many large organizations still run Jenkins for its flexibility and extensive plugin ecosystem. GitLab CI is the default for teams using GitLab.",
    whenIsItUsed: "In enterprise environments that need self-hosted CI infrastructure, or when using GitLab as the source control platform.",
    whereIsItUsed: "Banks, telecoms, and large tech companies with self-hosted infrastructure. GitLab CI/CD for GitLab-based teams.",
    whatComesNext: "Artifact Management",
    learningOutcomes: [
      "Write a Jenkins Declarative Pipeline (Jenkinsfile) with stages and steps.",
      "Configure GitLab CI/CD with a .gitlab-ci.yml file and multiple stages.",
      "Set up Jenkins with Docker agents to run pipeline steps in isolated containers.",
      "Use GitLab environments and deployment approvals for production gates.",
      "Integrate Slack notifications and test reports into pipelines."
    ],
    commonMistakes: [
      "Running Jenkins as root — it should run as a dedicated jenkins user.",
      "Not using Shared Libraries in Jenkins, leading to copy-pasted Jenkinsfiles across repos.",
      "Storing credentials in plain text in Jenkinsfiles instead of using the Credentials Manager."
    ],
    realWorldApplications: [
      "An enterprise bank running all deployments through a Jenkins pipeline with manual approval gates.",
      "A GitLab CI pipeline that builds, tests, security-scans, and deploys a Java microservice.",
      "A Jenkins Shared Library that standardizes Docker build and push steps for 50 teams."
    ],
    resources: [
      { type: "official", title: "Jenkins Pipeline Documentation", url: "https://www.jenkins.io/doc/book/pipeline/" },
      { type: "video_en", title: "Jenkins Full Course (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=7KCS70sCoK0" },
      { type: "video_hi", title: "Jenkins Tutorial in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=7SPe0_P8XPs" },
      { type: "article", title: "DigitalOcean: How To Set Up a Continuous Deployment Pipeline with GitLab CI/CD", url: "https://www.digitalocean.com/community/tutorials/how-to-set-up-a-continuous-deployment-pipeline-with-gitlab-on-ubuntu" },
      { type: "github", title: "jenkinsci: Official Jenkins organization", url: "https://github.com/jenkinsci/jenkins" },
      { type: "cheat_sheet", title: "Jenkins Declarative Pipeline Syntax Reference", url: "https://www.jenkins.io/doc/book/pipeline/syntax/" },
      { type: "deep_dive", title: "GitLab CI/CD Best Practices", url: "https://docs.gitlab.com/ee/ci/yaml/index.html" }
    ]
  },
  "n_ci_3": {
    slug: "artifact-management",
    whyLearnThis: "Artifact management ensures that the exact version of a build artifact (Docker image, JAR, NPM package) deployed to production is identical to what was tested. Without it, builds are not reproducible and deployments are not reliable.",
    whenIsItUsed: "Storing Docker images, npm packages, Maven JARs, and binary releases between CI build and deployment.",
    whereIsItUsed: "AWS ECR, Google Artifact Registry, JFrog Artifactory, Nexus Repository, GitHub Packages, Docker Hub.",
    whatComesNext: "Kubernetes Architecture",
    learningOutcomes: [
      "Push and pull Docker images from AWS ECR and Docker Hub.",
      "Tag images with semantic versions and commit SHAs for traceability.",
      "Use GitHub Packages to publish private npm packages.",
      "Understand the difference between SNAPSHOT and RELEASE versions in Maven.",
      "Set up a retention policy to delete old images and save storage costs."
    ],
    commonMistakes: [
      "Always using the latest tag for Docker images in production — pin to a specific SHA or version.",
      "Not cleaning up old artifacts, leading to ballooning storage costs in ECR or Artifactory.",
      "Missing the link between a deployed artifact version and the git commit that produced it."
    ],
    realWorldApplications: [
      "A CI pipeline that tags Docker images with the git commit SHA and pushes to AWS ECR.",
      "JFrog Artifactory serving as the single source of truth for all Maven dependencies in an enterprise.",
      "GitHub Packages hosting private npm packages for a company's internal component library."
    ],
    resources: [
      { type: "official", title: "AWS ECR: Container Registry Documentation", url: "https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html" },
      { type: "video_en", title: "Artifact Management (JFrog)", url: "https://www.youtube.com/watch?v=bKp1Vif9oO4" },
      { type: "video_hi", title: "Artifact Management (JFrog)", url: "https://www.youtube.com/watch?v=bKp1Vif9oO4" },
      { type: "article", title: "DigitalOcean: How To Set Up a Private Docker Registry", url: "https://www.digitalocean.com/community/tutorials/how-to-set-up-a-private-docker-registry-on-ubuntu-22-04" },
      { type: "github", title: "distribution: The CNCF Distribution Registry", url: "https://github.com/distribution/distribution" },
      { type: "cheat_sheet", title: "Docker Registry CLI Reference", url: "https://docs.docker.com/engine/reference/commandline/registry/" },
      { type: "deep_dive", title: "JFrog: Understanding Artifact Management", url: "https://jfrog.com/artifactory/" }
    ]
  },
  "n_orch_1": {
    slug: "kubernetes-architecture",
    whyLearnThis: "Kubernetes is the de-facto standard for container orchestration. It automates deployment, scaling, and healing of containerized applications. Every major cloud provider offers managed Kubernetes, and understanding its architecture is essential to operating it.",
    whenIsItUsed: "Running microservices at scale with high availability requirements, managing hundreds of containers across multiple nodes.",
    whereIsItUsed: "AWS EKS, Google GKE, Azure AKS, on-premises with kubeadm or Rancher, DigitalOcean Kubernetes.",
    whatComesNext: "Pods, Services, Ingress",
    learningOutcomes: [
      "Explain the role of the control plane: API Server, Scheduler, Controller Manager, etcd.",
      "Explain the role of worker nodes: kubelet, kube-proxy, container runtime.",
      "Use kubectl to interact with a cluster: get, describe, apply, delete, logs.",
      "Understand how Kubernetes schedules pods to nodes.",
      "Set up a local cluster using kind or minikube for development."
    ],
    commonMistakes: [
      "Treating Kubernetes as 'just Docker but bigger' — it has fundamentally different networking and storage abstractions.",
      "Not setting resource requests and limits, causing noisy-neighbor problems on nodes.",
      "Running kubectl apply without understanding what the manifests are declaring."
    ],
    realWorldApplications: [
      "An e-commerce company running 50 microservices on a 10-node GKE cluster.",
      "Kubernetes automatically replacing a crashed pod (self-healing) within seconds.",
      "Rolling out a new version of an API with zero downtime using a RollingUpdate deployment."
    ],
    resources: [
      { type: "official", title: "Kubernetes Documentation: Concepts", url: "https://kubernetes.io/docs/concepts/" },
      { type: "video_en", title: "Kubernetes Tutorial for Beginners (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=X48VuDVv0do" },
      { type: "video_hi", title: "Kubernetes in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=KVBON1lA9N8" },
      { type: "article", title: "DigitalOcean: An Introduction to Kubernetes", url: "https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes" },
      { type: "github", title: "kubernetes/kubernetes: The Kubernetes source repository", url: "https://github.com/kubernetes/kubernetes" },
      { type: "cheat_sheet", title: "kubectl Cheat Sheet (official)", url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/" },
      { type: "deep_dive", title: "The Kubernetes Book (sample chapters)", url: "https://kubernetes.io/docs/concepts/architecture/" }
    ]
  },
  "n_orch_2": {
    slug: "pods-services-ingress",
    whyLearnThis: "Pods, Services, and Ingress are the three primitives that every Kubernetes workload is built on. Pods run your containers, Services expose them inside the cluster, and Ingress routes external traffic to them.",
    whenIsItUsed: "Every time you deploy an application to Kubernetes and need to expose it — internally to other services or externally to users.",
    whereIsItUsed: "All Kubernetes clusters — AWS EKS, GKE, AKS, on-premises.",
    whatComesNext: "Helm Charts",
    learningOutcomes: [
      "Write a Deployment manifest with appropriate resource requests/limits.",
      "Expose a Deployment with a ClusterIP, NodePort, and LoadBalancer Service.",
      "Configure an Ingress with path-based and host-based routing rules.",
      "Use ConfigMaps and Secrets to inject configuration into pods.",
      "Understand how DNS works inside a Kubernetes cluster (service.namespace.svc.cluster.local)."
    ],
    commonMistakes: [
      "Using NodePort in production — it is for testing only; use LoadBalancer or Ingress instead.",
      "Not setting readinessProbes, causing traffic to be sent to a pod before it's ready to serve requests.",
      "Forgetting to set resource limits, which can cause a pod to consume all CPU/memory on a node."
    ],
    realWorldApplications: [
      "An Ingress controller routing /api to the backend service and / to the frontend service on the same domain.",
      "A ConfigMap storing database connection strings mounted as environment variables in a pod.",
      "HPA (Horizontal Pod Autoscaler) scaling a Deployment from 2 to 10 replicas based on CPU usage."
    ],
    resources: [
      { type: "official", title: "Kubernetes: Deployments, Services, and Ingress", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" },
      { type: "video_en", title: "Kubernetes Services Explained (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=T4Z7visMM4E" },
      { type: "video_hi", title: "Kubernetes Pods and Services Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=DFnV4Gp_OT0" },
      { type: "article", title: "DigitalOcean: How To Set Up an Nginx Ingress Controller", url: "https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nginx-ingress-on-digitalocean-kubernetes-using-helm" },
      { type: "github", title: "kubernetes/examples: Official Kubernetes example applications", url: "https://github.com/kubernetes/examples" },
      { type: "cheat_sheet", title: "Kubernetes YAML Cheat Sheet", url: "https://kubernetes.io/docs/reference/kubernetes-api/" },
      { type: "deep_dive", title: "Kubernetes Networking Deep Dive", url: "https://learnk8s.io/kubernetes-network-packets" }
    ]
  },
  "n_orch_3": {
    slug: "helm-charts",
    whyLearnThis: "Helm is the package manager for Kubernetes. Instead of applying dozens of raw YAML files, Helm packages them into Charts that can be versioned, shared, and configured. It is the standard way to deploy complex applications to Kubernetes.",
    whenIsItUsed: "Deploying third-party software (Prometheus, cert-manager, Nginx Ingress) to Kubernetes, and packaging your own applications for repeatable deployments.",
    whereIsItUsed: "Artifact Hub (public chart repository), Helm repos on GitHub, internal chart museums for enterprise deployments.",
    whatComesNext: "Terraform Basics",
    learningOutcomes: [
      "Install a Helm chart and customize it with values.yaml or --set flags.",
      "Create a Helm chart from scratch with templates, helpers, and default values.",
      "Use Helm lifecycle hooks for pre/post-install and pre/post-upgrade operations.",
      "Manage Helm releases: upgrade, rollback, and uninstall.",
      "Add and search Helm repositories using helm repo add and helm search."
    ],
    commonMistakes: [
      "Hard-coding values in templates instead of using .Values to make charts configurable.",
      "Not using helm diff (the plugin) before applying upgrades in production.",
      "Ignoring Helm chart security — always review third-party charts before deploying to production."
    ],
    realWorldApplications: [
      "Installing the Prometheus + Grafana stack with a single helm install command.",
      "A company maintaining a private Helm chart for their microservices, with all teams consuming it.",
      "Rolling back a bad release with helm rollback app 3."
    ],
    resources: [
      { type: "official", title: "Helm Documentation", url: "https://helm.sh/docs/" },
      { type: "video_en", title: "Helm Tutorial (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=-ykwb1d0DXU" },
      { type: "video_hi", title: "Helm Charts in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=7A5cH8iqgHU" },
      { type: "article", title: "DigitalOcean: How To Install Software on Kubernetes Clusters with Helm", url: "https://www.digitalocean.com/community/tutorials/how-to-install-software-on-kubernetes-clusters-with-the-helm-3-package-manager" },
      { type: "github", title: "helm/charts: Official Helm chart repository", url: "https://github.com/helm/helm" },
      { type: "cheat_sheet", title: "Helm Commands Cheat Sheet", url: "https://helm.sh/docs/helm/helm/" },
      { type: "deep_dive", title: "Helm Best Practices Guide", url: "https://helm.sh/docs/chart_best_practices/" }
    ]
  },
  "n_iac_1": {
    slug: "terraform-basics",
    whyLearnThis: "Terraform lets you define infrastructure as code — VPCs, EC2 instances, databases, DNS records — in declarative configuration files. Infrastructure changes become reviewable, versioned, and reproducible instead of ad-hoc console clicks.",
    whenIsItUsed: "Provisioning cloud infrastructure, managing multi-cloud environments, automating infrastructure changes through CI/CD pipelines.",
    whereIsItUsed: "AWS, GCP, Azure, DigitalOcean, Cloudflare, and 100+ providers. Used in virtually all modern infrastructure teams.",
    whatComesNext: "Ansible Configuration",
    learningOutcomes: [
      "Write Terraform configuration files (.tf) with providers, resources, and variables.",
      "Use the Terraform workflow: init, plan, apply, destroy.",
      "Manage state with a remote backend (S3 + DynamoDB for AWS).",
      "Use modules to organize and reuse infrastructure code.",
      "Import existing cloud resources into Terraform state."
    ],
    commonMistakes: [
      "Storing terraform.tfstate locally — always use a remote backend with state locking.",
      "Running terraform apply directly in production without reviewing the plan output first.",
      "Hardcoding credentials in .tf files — use environment variables or a credentials provider."
    ],
    realWorldApplications: [
      "Provisioning an entire AWS VPC with subnets, an EKS cluster, and an RDS database using Terraform.",
      "A CI pipeline that runs terraform plan on PRs and terraform apply on merge to main.",
      "Managing Cloudflare DNS records for 50 domains using Terraform."
    ],
    resources: [
      { type: "official", title: "Terraform Documentation", url: "https://developer.hashicorp.com/terraform/docs" },
      { type: "video_en", title: "Terraform Tutorial for Beginners (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=l5k1ai_GBDE" },
      { type: "video_hi", title: "Terraform Tutorial in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=HmxkYNv1ksg" },
      { type: "article", title: "DigitalOcean: How To Use Terraform with DigitalOcean", url: "https://www.digitalocean.com/community/tutorials/how-to-use-terraform-with-digitalocean" },
      { type: "github", title: "terraform-aws-modules: Production-ready AWS Terraform modules", url: "https://github.com/terraform-aws-modules/terraform-aws-vpc" },
      { type: "cheat_sheet", title: "Terraform CLI Commands Cheat Sheet", url: "https://developer.hashicorp.com/terraform/cli/commands" },
      { type: "deep_dive", title: "Terraform: Up & Running (sample chapters)", url: "https://www.terraformupandrunning.com/" }
    ]
  },
  "n_iac_2": {
    slug: "ansible-configuration",
    whyLearnThis: "While Terraform provisions infrastructure, Ansible configures it. Ansible uses SSH to run idempotent playbooks across server fleets — installing packages, copying files, and managing services — without requiring any agent on remote machines.",
    whenIsItUsed: "Configuring servers after provisioning, patching fleets, deploying applications to VMs, and automating compliance checks.",
    whereIsItUsed: "Red Hat Enterprise Linux environments, server fleet management, hybrid cloud configuration, legacy infrastructure automation.",
    whatComesNext: "Immutable Infrastructure",
    learningOutcomes: [
      "Write an Ansible inventory file (static and dynamic) and playbook.",
      "Use Ansible modules to manage packages, services, files, and users.",
      "Create reusable roles with galaxy and organize complex playbooks.",
      "Run ad-hoc commands with ansible for quick one-off tasks.",
      "Use Ansible Vault to encrypt sensitive variables."
    ],
    commonMistakes: [
      "Writing non-idempotent tasks that change state on every run — tasks should report 'ok' if nothing changed.",
      "Not testing playbooks against a staging environment before applying to production.",
      "Using the shell module when a proper Ansible module exists (e.g., using shell: apt-get install instead of the apt module)."
    ],
    realWorldApplications: [
      "Patching 200 servers overnight with an Ansible playbook that updates packages and reboots if needed.",
      "Configuring Nginx with SSL certificates on all web servers after Terraform provisions them.",
      "Ensuring all servers comply with a security baseline (disabled root login, specific firewall rules) using Ansible."
    ],
    resources: [
      { type: "official", title: "Ansible Documentation", url: "https://docs.ansible.com/ansible/latest/index.html" },
      { type: "video_en", title: "Ansible Full Course (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=1id6ERvfozo" },
      { type: "video_hi", title: "Ansible Tutorial in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=MNGfPn0Yvs8" },
      { type: "article", title: "DigitalOcean: How To Install and Configure Ansible on Ubuntu", url: "https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-ansible-on-ubuntu-22-04" },
      { type: "github", title: "ansible/ansible-examples: Ansible example playbooks", url: "https://github.com/ansible/ansible-examples" },
      { type: "cheat_sheet", title: "Ansible Cheat Sheet (devhints)", url: "https://devhints.io/ansible" },
      { type: "deep_dive", title: "Ansible Best Practices Guide", url: "https://docs.ansible.com/ansible/latest/tips_tricks/ansible_tips_tricks.html" }
    ]
  },
  "n_iac_3": {
    slug: "immutable-infrastructure",
    whyLearnThis: "Immutable infrastructure replaces 'mutable' servers (SSH in and change things) with a model where every update is a full replacement: build a new AMI or container image, deploy it, and discard the old one. This eliminates configuration drift and makes rollbacks trivial.",
    whenIsItUsed: "Modern cloud-native deployments, blue/green deployment strategies, and any environment where reproducibility and consistency are critical.",
    whereIsItUsed: "AWS AMIs with Packer, container-based deployments, Netflix Spinnaker, Kubernetes rolling updates.",
    whatComesNext: "Prometheus & Metrics",
    learningOutcomes: [
      "Explain the difference between mutable and immutable infrastructure patterns.",
      "Use Packer to build machine images (AMIs) with pre-installed software.",
      "Implement blue/green and canary deployment strategies.",
      "Understand how containers naturally implement immutability.",
      "Configure auto-scaling groups to replace instances using new AMIs."
    ],
    commonMistakes: [
      "Mixing mutable changes (SSHing into running instances) with immutable deployments, creating configuration drift.",
      "Not automating the image build pipeline, which makes immutable deployments slow and impractical.",
      "Keeping state inside containers/VMs — state must live in external stores (databases, S3, EFS)."
    ],
    realWorldApplications: [
      "Netflix replacing thousands of EC2 instances daily with freshly baked AMIs as new code is deployed.",
      "A Kubernetes rolling update deploying a new container image with zero downtime.",
      "Blue/green deployment where DNS shifts from the old environment to the new one after validation."
    ],
    resources: [
      { type: "official", title: "Packer Documentation: Build Images", url: "https://developer.hashicorp.com/packer/docs" },
      { type: "video_en", title: "Immutable Infrastructure Explained (HashiCorp)", url: "https://www.youtube.com/watch?v=RO7VcUAsf-I" },
      { type: "video_hi", title: "Blue Green Deployment & Rolling Updates in Hindi", url: "https://www.youtube.com/watch?v=HFMTbScRk3M" },
      { type: "article", title: "HashiCorp: What is Immutable Infrastructure?", url: "https://www.hashicorp.com/resources/what-is-immutable-infrastructure" },
      { type: "github", title: "hashicorp/packer: Build automated machine images", url: "https://github.com/hashicorp/packer" },
      { type: "cheat_sheet", title: "Blue/Green Deployment Patterns (AWS)", url: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_tracking_change_management_immutable_infrastructure.html" },
      { type: "deep_dive", title: "Martin Fowler: Immutable Server", url: "https://martinfowler.com/bliki/ImmutableServer.html" }
    ]
  },
  "n_mon_1": {
    slug: "prometheus-metrics",
    whyLearnThis: "You can't improve what you can't measure. Prometheus collects time-series metrics from your services and infrastructure, giving you the data needed to set alerts, diagnose issues, and understand system behavior over time.",
    whenIsItUsed: "Monitoring application health (request rates, error rates, latency), infrastructure metrics (CPU, memory, disk), and business metrics (orders per minute).",
    whereIsItUsed: "Kubernetes clusters (kube-prometheus-stack), microservices with /metrics endpoints, AWS EC2 with node_exporter.",
    whatComesNext: "Grafana Dashboards",
    learningOutcomes: [
      "Understand Prometheus's pull-based metric collection model.",
      "Instrument an application with a Prometheus client library to expose /metrics.",
      "Write basic PromQL queries for rate(), sum(), and avg_over_time().",
      "Configure scrape targets in prometheus.yml.",
      "Set up AlertManager to send alerts via email, PagerDuty, or Slack."
    ],
    commonMistakes: [
      "Using high-cardinality labels (like user ID) which cause memory explosion in Prometheus.",
      "Not understanding the difference between Counter, Gauge, Histogram, and Summary metric types.",
      "Scraping too frequently for slow-changing metrics, wasting storage and compute."
    ],
    realWorldApplications: [
      "A Prometheus alert fires when HTTP error rate exceeds 5% for 5 consecutive minutes.",
      "Tracking a business metric (signups per hour) in Prometheus alongside technical metrics.",
      "The kube-prometheus-stack monitoring all Kubernetes nodes, pods, and services out of the box."
    ],
    resources: [
      { type: "official", title: "Prometheus Documentation", url: "https://prometheus.io/docs/introduction/overview/" },
      { type: "video_en", title: "Prometheus & Grafana Tutorial (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=h4Sl21AKiDg" },
      { type: "video_hi", title: "Prometheus in Hindi (Kunal Kushwaha)", url: "https://www.youtube.com/watch?v=ddZjhv66o_o" },
      { type: "article", title: "DigitalOcean: How To Install Prometheus on Ubuntu 22.04", url: "https://www.digitalocean.com/community/tutorials/how-to-install-prometheus-on-ubuntu-22-04" },
      { type: "github", title: "prometheus/prometheus: Monitoring system & TSDB", url: "https://github.com/prometheus/prometheus" },
      { type: "cheat_sheet", title: "PromQL Cheat Sheet", url: "https://promlabs.com/promql-cheat-sheet/" },
      { type: "deep_dive", title: "Prometheus Metric & Label Naming Best Practices", url: "https://prometheus.io/docs/practices/naming/" }
    ]
  },
  "n_mon_2": {
    slug: "grafana-dashboards",
    whyLearnThis: "Prometheus collects the data; Grafana turns it into actionable dashboards. A well-built Grafana dashboard is the first screen a team looks at in an incident — it needs to show the right information at a glance.",
    whenIsItUsed: "Creating operations dashboards, sharing system health with non-technical stakeholders, correlating metrics across different data sources.",
    whereIsItUsed: "Grafana Cloud, self-hosted Grafana, Kubernetes monitoring dashboards, business analytics.",
    whatComesNext: "ELK / EFK Stack",
    learningOutcomes: [
      "Connect Prometheus (and other data sources) to Grafana.",
      "Build dashboards with panels: time series, stat, gauge, and table visualizations.",
      "Use Grafana variables to make dashboards dynamic (e.g., filter by environment or service).",
      "Import community dashboards from grafana.com/grafana/dashboards.",
      "Configure Grafana alerts and contact points."
    ],
    commonMistakes: [
      "Building dashboards with 40+ panels, making them impossible to read during an incident. Keep dashboards focused.",
      "Not using Grafana variables, resulting in dozens of duplicate dashboards for different environments.",
      "Using wall clock time ranges instead of relative ranges (last 1h), making dashboards useless during incidents."
    ],
    realWorldApplications: [
      "An operations team's main dashboard showing RED metrics (Rate, Error, Duration) for all services.",
      "An exec-level dashboard showing business KPIs (daily active users, revenue) next to system health.",
      "An alert that pages the on-call engineer when p99 API latency exceeds 500ms."
    ],
    resources: [
      { type: "official", title: "Grafana Documentation", url: "https://grafana.com/docs/grafana/latest/" },
      { type: "video_en", title: "Grafana Tutorial (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=yNRnLyVntUw" },
      { type: "video_hi", title: "Grafana Dashboard Tutorial in Hindi", url: "https://www.youtube.com/watch?v=9JyX1KxPtdg" },
      { type: "article", title: "DigitalOcean: How To Install Grafana on Ubuntu", url: "https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-grafana-on-ubuntu-22-04" },
      { type: "github", title: "grafana/grafana: Open source observability platform", url: "https://github.com/grafana/grafana" },
      { type: "cheat_sheet", title: "Grafana Dashboard Best Practices", url: "https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/" },
      { type: "deep_dive", title: "Building Effective Observability Dashboards", url: "https://grafana.com/docs/grafana/latest/dashboards/" }
    ]
  },
  "n_mon_3": {
    slug: "elk-efk-stack",
    whyLearnThis: "Metrics tell you WHAT is wrong; logs tell you WHY. The ELK Stack (Elasticsearch, Logstash, Kibana) or EFK Stack (Elasticsearch, Fluentd, Kibana) centralizes logs from all your services, making it possible to search, filter, and correlate logs across a distributed system.",
    whenIsItUsed: "Aggregating logs from microservices, debugging production incidents, security auditing, and compliance log retention.",
    whereIsItUsed: "AWS Elasticsearch Service (OpenSearch), Elastic Cloud, self-hosted ELK, Kubernetes with Fluentd/Fluent Bit DaemonSets.",
    whatComesNext: "AWS Core Services",
    learningOutcomes: [
      "Set up a Fluent Bit DaemonSet to collect logs from all Kubernetes pods and ship them to Elasticsearch.",
      "Write Logstash pipeline configurations to parse and enrich log entries.",
      "Create Kibana visualizations and searches with KQL (Kibana Query Language).",
      "Index lifecycle management: define hot-warm-cold-delete phases to manage costs.",
      "Set up Kibana alerts based on log patterns."
    ],
    commonMistakes: [
      "Not defining index templates and mappings upfront, leading to dynamic mapping issues.",
      "Storing logs indefinitely without a retention policy, causing Elasticsearch clusters to run out of disk space.",
      "Logging too much (every DEBUG line) or too little (only errors) — log at the right level."
    ],
    realWorldApplications: [
      "During an incident, searching all pod logs across a 100-microservice system in a single Kibana query.",
      "A security team auditing all authentication failures across 50 services in the past 30 days.",
      "Log-based alerting that triggers a PagerDuty alert when the string 'database connection failed' appears more than 10 times in a minute."
    ],
    resources: [
      { type: "official", title: "Elastic Stack Documentation", url: "https://www.elastic.co/guide/index.html" },
      { type: "video_en", title: "ELK Stack Tutorial (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=4X0WLg05ASw" },
      { type: "video_hi", title: "ELK Stack in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=jT-y6oS10jk" },
      { type: "article", title: "DigitalOcean: How To Install Elasticsearch, Logstash, and Kibana", url: "https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-logstash-and-kibana-elastic-stack-on-ubuntu-22-04" },
      { type: "github", title: "elastic/elasticsearch: Distributed search and analytics", url: "https://github.com/elastic/elasticsearch" },
      { type: "cheat_sheet", title: "Elasticsearch Query Cheat Sheet", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html" },
      { type: "deep_dive", title: "Elasticsearch at scale: Architecture patterns", url: "https://www.elastic.co/blog/how-many-shards-should-i-have-in-my-elasticsearch-cluster" }
    ]
  },
  "n_cloud_1": {
    slug: "aws-core-services",
    whyLearnThis: "AWS is the world's leading cloud provider with over 33% market share. Understanding its core services (EC2, S3, RDS, IAM, VPC) is a fundamental skill for any DevOps or infrastructure engineer.",
    whenIsItUsed: "Provisioning compute (EC2), storing files (S3), running managed databases (RDS), deploying containers (ECS/EKS), and managing access control (IAM).",
    whereIsItUsed: "Millions of companies from startups to enterprises — Netflix, Airbnb, Slack, and the majority of the internet run on AWS.",
    whatComesNext: "IAM & Security Groups",
    learningOutcomes: [
      "Launch and connect to an EC2 instance, configure security groups, and attach EBS volumes.",
      "Create S3 buckets with proper access policies and enable versioning.",
      "Launch an RDS instance and connect to it from an EC2 instance in the same VPC.",
      "Use the AWS CLI to perform common operations without the console.",
      "Understand VPC fundamentals: subnets, route tables, internet gateways, and NAT gateways."
    ],
    commonMistakes: [
      "Leaving EC2 instances running when not needed — always stop or terminate instances to avoid costs.",
      "Making S3 buckets public by default — explicitly block public access unless the bucket is meant to be public.",
      "Using the root account for daily operations instead of creating IAM users with least-privilege permissions."
    ],
    realWorldApplications: [
      "Hosting a static website on S3 with CloudFront CDN.",
      "Running a web application on EC2 with an RDS database in a private subnet.",
      "Using S3 for storing application uploads, logs, and deployment artifacts."
    ],
    resources: [
      { type: "official", title: "AWS Documentation: Getting Started", url: "https://docs.aws.amazon.com/getting-started/latest/userguide/getting-started-overview.html" },
      { type: "video_en", title: "AWS Solutions Architect Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=c3Cn4xYfxJY" },
      { type: "video_hi", title: "AWS Tutorial in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=ZB5ONbD_SMY" },
      { type: "article", title: "DigitalOcean: Getting Started with AWS", url: "https://www.digitalocean.com/community/tutorials/what-is-aws" },
      { type: "github", title: "open-guides/og-aws: Practical AWS guide", url: "https://github.com/open-guides/og-aws" },
      { type: "cheat_sheet", title: "AWS CLI Cheat Sheet", url: "https://www.bluematador.com/learn/aws-cli-cheatsheet" },
      { type: "deep_dive", title: "AWS Well-Architected Framework", url: "https://aws.amazon.com/architecture/well-architected/" }
    ]
  },
  "n_cloud_2": {
    slug: "iam-security-groups",
    whyLearnThis: "IAM and Security Groups are AWS's primary access control mechanisms. Misconfigured IAM permissions are the #1 cause of cloud security breaches. Getting them right protects your infrastructure from both accidental and malicious access.",
    whenIsItUsed: "Every time you need to grant access to AWS resources — to users, services, EC2 instances, Lambda functions, or other AWS accounts.",
    whereIsItUsed: "Every AWS account, all AWS services, and cross-account role assumption patterns.",
    whatComesNext: "Serverless & Functions",
    learningOutcomes: [
      "Create IAM users, groups, and roles with appropriate policies.",
      "Write IAM policies using the principle of least privilege.",
      "Configure Security Groups to allow only necessary ports from specific sources.",
      "Use IAM roles for EC2 instances and Lambda to avoid hardcoding credentials.",
      "Enable and enforce MFA for all IAM users."
    ],
    commonMistakes: [
      "Attaching AdministratorAccess to service accounts that only need read access.",
      "Creating inbound Security Group rules for 0.0.0.0/0 (the world) on non-public ports.",
      "Storing AWS credentials in application code or environment files committed to git."
    ],
    realWorldApplications: [
      "An EC2 instance with an IAM role that can read from S3 but write nowhere else.",
      "A Security Group on a database that only allows connections from the application server's Security Group.",
      "AWS Organizations SCP preventing any IAM user in the org from disabling CloudTrail."
    ],
    resources: [
      { type: "official", title: "AWS IAM Documentation", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html" },
      { type: "video_en", title: "AWS IAM Full Tutorial (freeCodeCamp)", url: "https://www.youtube.com/watch?v=iF9fs8Rw4Uo" },
      { type: "video_hi", title: "AWS IAM in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=quWqrbIdQJQ" },
      { type: "article", title: "AWS Security Best Practices for IAM", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html" },
      { type: "github", title: "toniblyx/prowler: AWS Security Tool", url: "https://github.com/prowler-cloud/prowler" },
      { type: "cheat_sheet", title: "IAM Policy Conditions Cheat Sheet", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html" },
      { type: "deep_dive", title: "AWS: Security Pillar - Well-Architected Framework", url: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html" }
    ]
  },
  "n_cloud_3": {
    slug: "serverless-functions",
    whyLearnThis: "Serverless computing (AWS Lambda, Google Cloud Functions) lets you run code without managing servers. You pay only for what you use, scale automatically to zero when idle, and respond to events — making it ideal for event-driven architectures and unpredictable workloads.",
    whenIsItUsed: "Building event-driven microservices, processing S3 upload events, running scheduled jobs, implementing API backends with API Gateway, and handling webhooks.",
    whereIsItUsed: "AWS Lambda + API Gateway, Google Cloud Functions, Azure Functions, Vercel Edge Functions, Cloudflare Workers.",
    whatComesNext: "Complete DevOps Journey",
    learningOutcomes: [
      "Write and deploy an AWS Lambda function using the console, CLI, and SAM/CDK.",
      "Trigger Lambda from S3 events, API Gateway, SQS, and EventBridge.",
      "Configure Lambda concurrency, timeouts, and memory appropriately.",
      "Understand cold starts and strategies to mitigate them.",
      "Monitor Lambda with CloudWatch Logs, X-Ray tracing, and Lambda Insights."
    ],
    commonMistakes: [
      "Using Lambda for long-running tasks (max 15 minutes) — use ECS Fargate or batch instead.",
      "Not handling cold starts for latency-sensitive APIs — use provisioned concurrency or warm-up strategies.",
      "Creating monolithic Lambda functions with too much logic — keep functions focused on a single task."
    ],
    realWorldApplications: [
      "An image resizing Lambda triggered when a user uploads a photo to S3.",
      "A nightly Lambda that queries a database, generates a report, and emails it via SES.",
      "A serverless API backend using Lambda + API Gateway with DynamoDB as the database."
    ],
    resources: [
      { type: "official", title: "AWS Lambda Documentation", url: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" },
      { type: "video_en", title: "AWS Lambda Tutorial for Beginners (freeCodeCamp)", url: "https://www.youtube.com/watch?v=NWzfgAw_DYA" },
      { type: "video_hi", title: "AWS Lambda in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=NWzfgAw_DYA" },
      { type: "article", title: "DigitalOcean: Introduction to Serverless Architecture", url: "https://www.digitalocean.com/community/tutorials/serverless-functions-introduction" },
      { type: "github", title: "aws/aws-lambda-go: Go Lambda runtime", url: "https://github.com/aws/aws-lambda-go" },
      { type: "cheat_sheet", title: "Serverless Framework Documentation", url: "https://www.serverless.com/framework/docs/" },
      { type: "deep_dive", title: "AWS Serverless Application Lens", url: "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/welcome.html" }
    ]
  }
};
