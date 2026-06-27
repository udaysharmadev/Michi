import { TopicData } from "@/data/types";

export const fullstackTopics: Record<string, Partial<TopicData>> = {
  // Pre-requisites
  n_fs_prereq_1: {
    title: "Frontend Roadmap",
    slug: "frontend",
    whyLearnThis: "Frontend development is half of the full stack equation.",
    whenIsItUsed: "Used when building the user interface of an application.",
    whereIsItUsed: "In the browser, mobile web, or desktop web apps.",
    whatComesNext: "Backend Development",
    learningOutcomes: ["Build UIs", "Manage state", "Fetch data from APIs"],
    commonMistakes: ["Ignoring accessibility", "Poor state management"],
    realWorldApplications: ["Web apps", "Dashboards"],
    resources: [
      { type: "official", title: "Frontend Roadmap", url: "/roadmaps/frontend" },
      { type: "video_en", title: "Frontend Web Development Bootcamp", url: "https://www.youtube.com/watch?v=zJSY8tbf_ys" },
      { type: "video_hi", title: "Frontend Web Development Course in Hindi", url: "https://www.youtube.com/watch?v=l1EssrLxt7E" },
      { type: "article", title: "How to become a Frontend Developer", url: "https://www.freecodecamp.org/news/how-to-become-a-frontend-developer/" },
      { type: "github", title: "Frontend Developer Roadmap Repo", url: "https://github.com/kamranahmedse/developer-roadmap" },
      { type: "cheat_sheet", title: "Frontend Cheat Sheet", url: "https://htmlcheatsheet.com/" },
      { type: "deep_dive", title: "Advanced Frontend Architecture", url: "https://frontendmastery.com/" }
    ]
  },
  n_fs_prereq_2: {
    title: "Backend Roadmap",
    slug: "backend",
    whyLearnThis: "Backend development powers the logic, data, and security of applications.",
    whenIsItUsed: "When building APIs, databases, and server logic.",
    whereIsItUsed: "On cloud servers, virtual machines, and serverless platforms.",
    whatComesNext: "Full Stack Integration",
    learningOutcomes: ["Design APIs", "Manage databases", "Implement auth"],
    commonMistakes: ["Poor database schema", "Security vulnerabilities"],
    realWorldApplications: ["REST APIs", "Microservices"],
    resources: [
      { type: "official", title: "Backend Roadmap", url: "/roadmaps/backend" },
      { type: "video_en", title: "Backend Web Development Bootcamp", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
      { type: "video_hi", title: "Backend Web Development Course in Hindi", url: "https://www.youtube.com/watch?v=7EhRvLSbFvg" },
      { type: "article", title: "How to become a Backend Developer", url: "https://www.freecodecamp.org/news/how-to-become-a-backend-developer/" },
      { type: "github", title: "Backend Developer Roadmap Repo", url: "https://github.com/kamranahmedse/developer-roadmap" },
      { type: "cheat_sheet", title: "Backend Cheat Sheet", url: "https://devhints.io/" },
      { type: "deep_dive", title: "Backend System Design", url: "https://github.com/donnemartin/system-design-primer" }
    ]
  },

  // Integration
  n_fs_integ_1: {
    title: "REST & GraphQL Integration",
    slug: "rest-graphql-integration",
    whyLearnThis: "You must connect your frontend to your backend securely and efficiently.",
    whenIsItUsed: "When making API calls from React/Vue to Node/Python.",
    whereIsItUsed: "In API services, data fetching hooks, and state management.",
    whatComesNext: "CORS Handling",
    learningOutcomes: ["Fetch data securely", "Handle loading/error states", "Type-safe APIs"],
    commonMistakes: ["Overfetching data", "Not handling loading states"],
    realWorldApplications: ["Dashboard metrics", "User profile pages"],
    resources: [
      { type: "official", title: "Apollo GraphQL Docs", url: "https://www.apollographql.com/docs/" },
      { type: "video_en", title: "Connecting React to Node", url: "https://www.youtube.com/watch?v=kYAWsVvH2tE" },
      { type: "video_hi", title: "React & Node Integration in Hindi", url: "https://www.youtube.com/watch?v=7EhRvLSbFvg" },
      { type: "article", title: "Best Practices for REST API Integration", url: "https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/" },
      { type: "github", title: "TRPC for Type-Safe APIs", url: "https://github.com/trpc/trpc" },
      { type: "cheat_sheet", title: "Fetch API Cheat Sheet", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
      { type: "deep_dive", title: "Deep Dive into GraphQL caching", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" }
    ]
  },
  n_fs_integ_2: {
    title: "CORS Handling",
    slug: "cors-handling",
    whyLearnThis: "Cross-Origin Resource Sharing is the #1 issue when connecting frontends and backends.",
    whenIsItUsed: "When your frontend (e.g. localhost:3000) requests data from your backend (localhost:8080).",
    whereIsItUsed: "In backend middleware configuration.",
    whatComesNext: "BFF",
    learningOutcomes: ["Understand Preflight requests", "Configure allowed origins", "Handle credentials"],
    commonMistakes: ["Using wildcard '*' in production", "Failing to allow OPTIONS method"],
    realWorldApplications: ["Secure API endpoints", "Multi-domain architectures"],
    resources: [
      { type: "official", title: "MDN CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
      { type: "video_en", title: "CORS Explained Visually", url: "https://www.youtube.com/watch?v=4KHiSt0n2HQ" },
      { type: "video_hi", title: "CORS in Node.js Hindi", url: "https://www.youtube.com/watch?v=3R-a7E0V_wE" },
      { type: "article", title: "How to fix CORS errors", url: "https://javascript.info/fetch-crossorigin" },
      { type: "github", title: "Express CORS Middleware", url: "https://github.com/expressjs/cors" },
      { type: "cheat_sheet", title: "CORS Headers Cheat Sheet", url: "https://httptoolkit.com/blog/cors-guide/" },
      { type: "deep_dive", title: "Deep Dive into Same-Origin Policy", url: "https://web.dev/same-origin-policy/" }
    ]
  },
  n_fs_integ_3: {
    title: "BFF (Backend for Frontend)",
    slug: "bff-pattern",
    whyLearnThis: "BFF patterns decouple complex microservices from specific UI clients.",
    whenIsItUsed: "When building mobile apps and web apps that require different data shapes.",
    whereIsItUsed: "As a proxy layer between the frontend and core microservices.",
    whatComesNext: "Optimistic UI",
    learningOutcomes: ["Design a BFF layer", "Aggregate data", "Improve client performance"],
    commonMistakes: ["Adding business logic to BFF", "Creating a monolith BFF"],
    realWorldApplications: ["Netflix UI architecture", "Mobile vs Web APIs"],
    resources: [
      { type: "official", title: "Microservices BFF Pattern", url: "https://microservices.io/patterns/apigateway.html" },
      { type: "video_en", title: "Backend for Frontend Pattern Explained", url: "https://www.youtube.com/watch?v=mtnE_F9Tq6U" },
      { type: "video_hi", title: "BFF Architecture Hindi", url: "https://www.youtube.com/watch?v=1F2yVq4qH4Y" },
      { type: "article", title: "Sam Newman on BFF", url: "https://samnewman.io/patterns/architectural/bff/" },
      { type: "github", title: "BFF Boilerplate", url: "https://samnewman.io/patterns/architectural/bff/" },
      { type: "cheat_sheet", title: "API Gateway vs BFF", url: "https://blog.bitsrc.io/bff-pattern-backend-for-frontend-an-introduction-e4fa965128bf" },
      { type: "deep_dive", title: "Designing Resilient BFFs", url: "https://martinfowler.com/articles/micro-frontends.html" }
    ]
  },

  // State & Data Sync
  n_fs_sync_1: {
    title: "Optimistic UI",
    slug: "optimistic-ui",
    whyLearnThis: "It makes applications feel blazing fast by assuming success before server confirmation.",
    whenIsItUsed: "When liking a post, sending a message, or adding an item to a cart.",
    whereIsItUsed: "In React Query, SWR, or Apollo Client mutations.",
    whatComesNext: "WebSockets & Real-time",
    learningOutcomes: ["Implement optimistic updates", "Handle rollback on error", "Manage cache"],
    commonMistakes: ["Not rolling back state on API failure", "Complex cache invalidation"],
    realWorldApplications: ["Twitter Like button", "WhatsApp message sending"],
    resources: [
      { type: "official", title: "React Query Optimistic Updates", url: "https://tanstack.com/query/latest/docs/react/guides/optimistic-updates" },
      { type: "video_en", title: "Optimistic UI in React", url: "https://www.youtube.com/watch?v=2-G8Fbz_0iY" },
      { type: "video_hi", title: "Optimistic UI Concept Hindi", url: "https://www.youtube.com/watch?v=uX3B1u7M25c" },
      { type: "article", title: "True UI Performance with Optimistic UI", url: "https://uxplanet.org/optimistic-ui-a-guide-to-perceived-performance-786d7905d475" },
      { type: "github", title: "SWR Mutation Example", url: "https://github.com/vercel/swr" },
      { type: "cheat_sheet", title: "Cache Update Cheat Sheet", url: "https://tkdodo.eu/blog/mastering-mutations-in-react-query" },
      { type: "deep_dive", title: "Deep Dive into CQRS and Optimistic UI", url: "https://martinfowler.com/bliki/CQRS.html" }
    ]
  },
  n_fs_sync_2: {
    title: "WebSockets & Real-time",
    slug: "websockets-realtime",
    whyLearnThis: "Standard HTTP is request-response. WebSockets enable bi-directional real-time communication.",
    whenIsItUsed: "Live chat, stock tickers, collaborative editors.",
    whereIsItUsed: "Node.js (Socket.io) and React frontend.",
    whatComesNext: "Cross-origin Cookies",
    learningOutcomes: ["Establish WebSocket connections", "Emit and listen to events", "Handle connection drops"],
    commonMistakes: ["Memory leaks with multiple listeners", "Not handling reconnections"],
    realWorldApplications: ["Google Docs collaborative editing", "Discord chat"],
    resources: [
      { type: "official", title: "Socket.io Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
      { type: "video_en", title: "Build a Chat App with Socket.io", url: "https://www.youtube.com/watch?v=rxzOqP9YwmM" },
      { type: "video_hi", title: "WebSockets in Hindi", url: "https://www.youtube.com/watch?v=Fj-N3nL5N6c" },
      { type: "article", title: "WebSockets vs Server-Sent Events", url: "https://web.dev/eventsource-basics/" },
      { type: "github", title: "Socket.io Chat Example", url: "https://github.com/socketio/chat-example" },
      { type: "cheat_sheet", title: "WebSocket API Cheat Sheet", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket" },
      { type: "deep_dive", title: "Scaling WebSockets with Redis Pub/Sub", url: "https://redis.com/glossary/pub-sub/" }
    ]
  },

  // Auth
  n_fs_auth_1: {
    title: "Cross-origin Cookies",
    slug: "cross-origin-cookies",
    whyLearnThis: "Storing auth tokens in localStorage is vulnerable to XSS. HttpOnly cookies are much safer.",
    whenIsItUsed: "When setting up session-based or secure JWT authentication.",
    whereIsItUsed: "Backend response headers (`Set-Cookie`) and Frontend `credentials: 'include'`.",
    whatComesNext: "JWT Refresh Token Flows",
    learningOutcomes: ["Configure SameSite attributes", "Secure cookies", "Prevent CSRF"],
    commonMistakes: ["Setting SameSite=None without Secure flag", "Forgetting to send credentials"],
    realWorldApplications: ["Secure Login Systems", "Banking apps"],
    resources: [
      { type: "official", title: "MDN Set-Cookie", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie" },
      { type: "video_en", title: "Cookies vs LocalStorage", url: "https://www.youtube.com/watch?v=GihQAC1I39Q" },
      { type: "video_hi", title: "Secure Cookies in Node Hindi", url: "https://www.youtube.com/watch?v=8b2Q9V45K3M" },
      { type: "article", title: "The Ultimate Guide to Secure Cookies", url: "https://owasp.org/www-chapter-london/assets/slides/OWASPLondon20171130_Cookie_Security_Myths_Misconceptions_David_Johansson.pdf" },
      { type: "github", title: "Express Session Cookie", url: "https://github.com/expressjs/session" },
      { type: "cheat_sheet", title: "Cookie Attributes Map", url: "https://web.dev/samesite-cookies-explained/" },
      { type: "deep_dive", title: "Deep Dive into CSRF Mitigation", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" }
    ]
  },
  n_fs_auth_2: {
    title: "JWT Refresh Token Flows",
    slug: "jwt-refresh-token",
    whyLearnThis: "Access tokens should have short lifespans. Refresh tokens keep the user logged in securely.",
    whenIsItUsed: "In any OAuth or modern JWT implementation.",
    whereIsItUsed: "In the authentication service and Axios interceptors.",
    whatComesNext: "Nx",
    learningOutcomes: ["Rotate refresh tokens", "Implement Axios interceptors", "Handle silent authentication"],
    commonMistakes: ["Storing refresh tokens in localStorage", "Infinite interceptor loops"],
    realWorldApplications: ["Spotify API Auth", "Enterprise SaaS"],
    resources: [
      { type: "official", title: "OAuth 2.0 Refresh Token", url: "https://oauth.net/2/grant-types/refresh-token/" },
      { type: "video_en", title: "JWT Refresh Tokens Explained", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4" },
      { type: "video_hi", title: "Refresh Token implementation Hindi", url: "https://www.youtube.com/watch?v=7EhRvLSbFvg" },
      { type: "article", title: "Axios Interceptors for Token Refresh", url: "https://thedutchhacker.com/how-to-use-axios-interceptors-for-token-refreshing/" },
      { type: "github", title: "React JWT Refresh Example", url: "https://github.com/gitdagray/react_jwt_auth" },
      { type: "cheat_sheet", title: "Token Storage Cheat Sheet", url: "https://auth0.com/docs/secure/security-guidance/data-security/token-storage" },
      { type: "deep_dive", title: "Refresh Token Rotation Strategy", url: "https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation" }
    ]
  },

  // Monorepos
  n_fs_mono_1: {
    title: "Nx",
    slug: "nx-monorepo",
    whyLearnThis: "Managing separate repos for frontend and backend is painful. Nx unifies them.",
    whenIsItUsed: "When building full stack apps with shared types or design systems.",
    whereIsItUsed: "In large enterprise codebases and multi-app startups.",
    whatComesNext: "Turborepo",
    learningOutcomes: ["Set up an Nx workspace", "Share libraries", "Cache builds"],
    commonMistakes: ["Circular dependencies", "Not utilizing the cache"],
    realWorldApplications: ["Enterprise monorepos", "Angular + NestJS apps"],
    resources: [
      { type: "official", title: "Nx Documentation", url: "https://nx.dev/" },
      { type: "video_en", title: "Nx Crash Course", url: "https://www.youtube.com/watch?v=1F2yVq4qH4Y" },
      { type: "video_hi", title: "Monorepo with Nx Hindi", url: "https://www.youtube.com/watch?v=T_7h39zVzR4" },
      { type: "article", title: "Why you should use a Monorepo", url: "https://monorepo.tools/" },
      { type: "github", title: "Nx Examples", url: "https://github.com/nrwl/nx-examples" },
      { type: "cheat_sheet", title: "Nx CLI Commands", url: "https://nx.dev/features/generate-code" },
      { type: "deep_dive", title: "Deep Dive into Nx Computation Caching", url: "https://nx.dev/concepts/how-caching-works" }
    ]
  },
  n_fs_mono_2: {
    title: "Turborepo",
    slug: "turborepo",
    whyLearnThis: "Turborepo is Vercel's high-performance build system for TypeScript monorepos.",
    whenIsItUsed: "For Next.js + Express monorepos with fast CI/CD requirements.",
    whereIsItUsed: "In the `turbo.json` config and CI pipelines.",
    whatComesNext: "Shared Packages",
    learningOutcomes: ["Configure turbo.json", "Set up Remote Caching", "Manage workspaces"],
    commonMistakes: ["Incorrect cache inputs/outputs", "Missing dependencies in packages"],
    realWorldApplications: ["Next.js monorepos", "Vercel ecosystem apps"],
    resources: [
      { type: "official", title: "Turborepo Docs", url: "https://turbo.build/repo/docs" },
      { type: "video_en", title: "Turborepo in 100 Seconds", url: "https://www.youtube.com/watch?v=1F2yVq4qH4Y" },
      { type: "video_hi", title: "Turborepo Crash Course Hindi", url: "https://www.youtube.com/watch?v=Fj-N3nL5N6c" },
      { type: "article", title: "Turborepo vs Nx", url: "https://blog.logrocket.com/turborepo-vs-nx/" },
      { type: "github", title: "Turborepo Starter", url: "https://github.com/vercel/turbo/tree/main/examples/basic" },
      { type: "cheat_sheet", title: "Turbo CLI Options", url: "https://turbo.build/repo/docs/reference/command-line-reference" },
      { type: "deep_dive", title: "Remote Caching Architecture", url: "https://turbo.build/repo/docs/core-concepts/remote-caching" }
    ]
  },
  n_fs_mono_3: {
    title: "Shared Packages",
    slug: "shared-packages",
    whyLearnThis: "The main benefit of a monorepo is sharing code (Types, UI, Utils) across apps.",
    whenIsItUsed: "When you want to share a `User` TypeScript interface between React and Node.",
    whereIsItUsed: "In the `packages/` directory and `package.json` workspaces.",
    whatComesNext: "Full Stack Hosting",
    learningOutcomes: ["Create internal NPM packages", "Export types", "Use workspace protocols"],
    commonMistakes: ["Publishing internal packages accidentally", "Wrong main/module exports"],
    realWorldApplications: ["Internal Design Systems", "Shared API Types"],
    resources: [
      { type: "official", title: "NPM Workspaces", url: "https://docs.npmjs.com/cli/v7/using-npm/workspaces" },
      { type: "video_en", title: "Sharing Types in a Monorepo", url: "https://www.youtube.com/watch?v=68M-gN0B8-Q" },
      { type: "video_hi", title: "NPM Workspaces Tutorial Hindi", url: "https://www.youtube.com/watch?v=uX3B1u7M25c" },
      { type: "article", title: "How to share code in a Monorepo", url: "https://www.smashingmagazine.com/2021/04/monorepo-lerna-yarn-workspaces/" },
      { type: "github", title: "Yarn Workspaces Example", url: "https://github.com/yarnpkg/berry/tree/master/packages/plugin-workspace-tools" },
      { type: "cheat_sheet", title: "Package.json Exports", url: "https://nodejs.org/api/packages.html#exports" },
      { type: "deep_dive", title: "Deep Dive into Module Resolution", url: "https://www.typescriptlang.org/docs/handbook/module-resolution.html" }
    ]
  },

  // Deployment
  n_fs_dep_1: {
    title: "Full Stack Hosting (Vercel, AWS)",
    slug: "fullstack-hosting",
    whyLearnThis: "Deploying a full stack app is fundamentally different from a static site.",
    whenIsItUsed: "When taking your full stack app to production.",
    whereIsItUsed: "Vercel, AWS, Render, Heroku, or DigitalOcean.",
    whatComesNext: "Serverless vs Containers",
    learningOutcomes: ["Deploy Node.js apps", "Configure Environment Variables", "Set up CI/CD"],
    commonMistakes: ["Committing .env files", "Hardcoding API URLs"],
    realWorldApplications: ["Production Web Apps", "SaaS platforms"],
    resources: [
      { type: "official", title: "Vercel Deployment Docs", url: "https://vercel.com/docs/deployments/overview" },
      { type: "video_en", title: "Deploy Full Stack App to Render", url: "https://www.youtube.com/watch?v=l134cBAJCuc" },
      { type: "video_hi", title: "Deploying MERN stack app Hindi", url: "https://www.youtube.com/watch?v=eB1wW-UuQY4" },
      { type: "article", title: "Vercel vs AWS", url: "https://www.sst.dev/blog/vercel-vs-aws.html" },
      { type: "github", title: "AWS CDK Examples", url: "https://github.com/aws-samples/aws-cdk-examples" },
      { type: "cheat_sheet", title: "Deployment Checklist", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/Deployment_checklist" },
      { type: "deep_dive", title: "Infrastructure as Code", url: "https://www.terraform.io/intro" }
    ]
  },
  n_fs_dep_2: {
    title: "Serverless vs Containers",
    slug: "serverless-vs-containers",
    whyLearnThis: "Choosing the right deployment architecture affects cost, scaling, and maintenance.",
    whenIsItUsed: "When designing the architecture of a new full stack application.",
    whereIsItUsed: "AWS Lambda (Serverless) vs AWS ECS/EKS or Docker (Containers).",
    whatComesNext: "End of Full Stack Roadmap",
    learningOutcomes: ["Understand cold starts", "Know when to use Docker", "Analyze cloud costs"],
    commonMistakes: ["Using Serverless for heavy background jobs", "Over-engineering with Kubernetes"],
    realWorldApplications: ["Next.js API routes (Serverless)", "Microservices (Containers)"],
    resources: [
      { type: "official", title: "AWS Serverless vs Containers", url: "https://aws.amazon.com/compare/the-difference-between-containers-and-serverless/" },
      { type: "video_en", title: "Serverless vs Docker in 100 Seconds", url: "https://www.youtube.com/watch?v=7EhRvLSbFvg" },
      { type: "video_hi", title: "Serverless Architecture Hindi", url: "https://www.youtube.com/watch?v=1F2yVq4qH4Y" },
      { type: "article", title: "When to use Serverless vs Containers", url: "https://www.datadoghq.com/blog/serverless-vs-containers/" },
      { type: "github", title: "Serverless Framework", url: "https://github.com/serverless/serverless" },
      { type: "cheat_sheet", title: "Docker Cheat Sheet", url: "https://docker.com/" },
      { type: "deep_dive", title: "Deep Dive into Kubernetes", url: "https://kubernetes.io/docs/concepts/" }
    ]
  }
};
