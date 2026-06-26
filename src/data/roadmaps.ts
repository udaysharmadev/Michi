export type Category = 
  | "Development" 
  | "AI & Data" 
  | "Infrastructure" 
  | "Security" 
  | "Architecture" 
  | "Research" 
  | "Design" 
  | "Product";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export type RoadmapMeta = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  estimatedTopics: number;
};

export const roadmaps: RoadmapMeta[] = [
  // Development
  { id: "r_01", slug: "frontend", title: "Frontend", description: "Learn how to build user interfaces and web applications.", category: "Development", difficulty: "Beginner", estimatedTopics: 120 },
  { id: "r_02", slug: "backend", title: "Backend", description: "Master server-side programming, databases, and APIs.", category: "Development", difficulty: "Intermediate", estimatedTopics: 140 },
  { id: "r_03", slug: "fullstack", title: "Full Stack", description: "Bridge the gap between frontend and backend systems.", category: "Development", difficulty: "Advanced", estimatedTopics: 200 },
  { id: "r_04", slug: "mobile", title: "Mobile Developer", description: "Build native and cross-platform mobile applications.", category: "Development", difficulty: "Intermediate", estimatedTopics: 110 },
  { id: "r_05", slug: "android", title: "Android Developer", description: "Create native applications for the Android ecosystem.", category: "Development", difficulty: "Beginner", estimatedTopics: 95 },
  { id: "r_06", slug: "ios", title: "iOS Developer", description: "Master Swift and the Apple ecosystem for app development.", category: "Development", difficulty: "Beginner", estimatedTopics: 90 },
  { id: "r_07", slug: "blockchain", title: "Blockchain Developer", description: "Understand decentralized systems, smart contracts, and Web3.", category: "Development", difficulty: "Advanced", estimatedTopics: 85 },
  { id: "r_08", slug: "game", title: "Game Developer", description: "Design and program video games using modern engines.", category: "Development", difficulty: "Intermediate", estimatedTopics: 130 },

  // AI & Data
  { id: "r_09", slug: "ai-engineer", title: "AI Engineer", description: "Apply artificial intelligence to solve real-world problems.", category: "AI & Data", difficulty: "Advanced", estimatedTopics: 150 },
  { id: "r_10", slug: "machine-learning", title: "Machine Learning Engineer", description: "Design, build, and deploy predictive models.", category: "AI & Data", difficulty: "Advanced", estimatedTopics: 145 },
  { id: "r_11", slug: "data-scientist", title: "Data Scientist", description: "Extract insights from complex datasets.", category: "AI & Data", difficulty: "Intermediate", estimatedTopics: 125 },
  { id: "r_12", slug: "data-engineer", title: "Data Engineer", description: "Build scalable data pipelines and warehousing solutions.", category: "AI & Data", difficulty: "Intermediate", estimatedTopics: 115 },
  { id: "r_13", slug: "mlops", title: "MLOps Engineer", description: "Bridge machine learning research and production deployment.", category: "AI & Data", difficulty: "Advanced", estimatedTopics: 105 },
  { id: "r_14", slug: "llm", title: "LLM Engineer", description: "Specialize in large language models and prompt engineering.", category: "AI & Data", difficulty: "Intermediate", estimatedTopics: 80 },

  // Infrastructure
  { id: "r_15", slug: "devops", title: "DevOps Engineer", description: "Unify software development and IT operations.", category: "Infrastructure", difficulty: "Intermediate", estimatedTopics: 160 },
  { id: "r_16", slug: "cloud", title: "Cloud Engineer", description: "Design and manage cloud infrastructure on AWS, GCP, or Azure.", category: "Infrastructure", difficulty: "Intermediate", estimatedTopics: 135 },
  { id: "r_17", slug: "sre", title: "Site Reliability Engineer", description: "Apply software engineering practices to infrastructure.", category: "Infrastructure", difficulty: "Advanced", estimatedTopics: 140 },
  { id: "r_18", slug: "platform", title: "Platform Engineer", description: "Build internal developer platforms to increase productivity.", category: "Infrastructure", difficulty: "Advanced", estimatedTopics: 120 },
  { id: "r_19", slug: "db-admin", title: "Database Administrator", description: "Manage, optimize, and secure database systems.", category: "Infrastructure", difficulty: "Intermediate", estimatedTopics: 90 },

  // Security
  { id: "r_20", slug: "cyber-security", title: "Cyber Security Expert", description: "Protect systems, networks, and data from attacks.", category: "Security", difficulty: "Beginner", estimatedTopics: 170 },
  { id: "r_21", slug: "security-engineer", title: "Security Engineer", description: "Build secure systems and automate threat detection.", category: "Security", difficulty: "Intermediate", estimatedTopics: 130 },
  { id: "r_22", slug: "cloud-security", title: "Cloud Security Specialist", description: "Secure cloud infrastructure and environments.", category: "Security", difficulty: "Advanced", estimatedTopics: 110 },
  { id: "r_23", slug: "app-sec", title: "Application Security", description: "Ensure software is secure from the ground up.", category: "Security", difficulty: "Intermediate", estimatedTopics: 100 },
  { id: "r_24", slug: "pentester", title: "Penetration Tester", description: "Ethically hack systems to find vulnerabilities.", category: "Security", difficulty: "Advanced", estimatedTopics: 120 },

  // Architecture
  { id: "r_25", slug: "software-architect", title: "Software Architect", description: "Design high-level software architectures.", category: "Architecture", difficulty: "Advanced", estimatedTopics: 180 },
  { id: "r_26", slug: "system-design", title: "System Design", description: "Learn how to design highly scalable systems.", category: "Architecture", difficulty: "Intermediate", estimatedTopics: 85 },
  { id: "r_27", slug: "eng-manager", title: "Engineering Manager", description: "Lead teams and manage technical delivery.", category: "Architecture", difficulty: "Advanced", estimatedTopics: 75 },

  // Research
  { id: "r_28", slug: "ai-researcher", title: "AI Researcher", description: "Push the boundaries of artificial intelligence.", category: "Research", difficulty: "Advanced", estimatedTopics: 140 },
  { id: "r_29", slug: "computer-vision", title: "Computer Vision Engineer", description: "Enable machines to interpret visual data.", category: "Research", difficulty: "Advanced", estimatedTopics: 115 },
  { id: "r_30", slug: "nlp", title: "NLP Engineer", description: "Build systems that understand human language.", category: "Research", difficulty: "Advanced", estimatedTopics: 110 },

  // Design
  { id: "r_31", slug: "ui-ux", title: "UI/UX Designer", description: "Design intuitive and beautiful user experiences.", category: "Design", difficulty: "Beginner", estimatedTopics: 100 },
  { id: "r_32", slug: "design-engineer", title: "Design Engineer", description: "Bridge the gap between design and frontend engineering.", category: "Design", difficulty: "Intermediate", estimatedTopics: 95 },

  // Product
  { id: "r_33", slug: "tpm", title: "Technical Product Manager", description: "Manage product strategy with deep technical insight.", category: "Product", difficulty: "Intermediate", estimatedTopics: 80 },
  { id: "r_34", slug: "scrum-master", title: "Scrum Master", description: "Facilitate agile development processes.", category: "Product", difficulty: "Beginner", estimatedTopics: 50 },
];

export function getAllRoadmaps(): RoadmapMeta[] {
  return roadmaps;
}

export function getRoadmapBySlug(slug: string): RoadmapMeta | undefined {
  return roadmaps.find((r) => r.slug === slug);
}

export function getCategories(): Category[] {
  return Array.from(new Set(roadmaps.map((r) => r.category)));
}
