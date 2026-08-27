/**
 * The roadmap catalogue, split by whether the roadmap actually has content.
 *
 * ## Why two lists
 *
 * All 36 entries below used to live in one array, and every consumer treated that
 * array as "roadmaps a learner can open". Twelve of them had no content directory at
 * all, so the catalogue linked to them, the sitemap submitted them to search
 * engines, the search palette offered them, and `/roadmaps/<slug>` rendered an empty
 * canvas. A learner following any of those twelve links got a blank page.
 *
 * Splitting the list fixes all of that at the source: `getAllRoadmaps()` returns
 * only what can be rendered, so the nine call sites that ask for "the roadmaps" get
 * the right answer without any of them having to know about this distinction.
 *
 * The twelve are kept in {@link plannedRoadmaps} rather than deleted — the titles,
 * descriptions and categories are real work, and a "planned" section can render them
 * honestly. `getRoadmapBySlug` deliberately does *not* find them, so their routes
 * return 404 instead of a blank canvas. A 404 is a true statement; an empty roadmap
 * is not.
 *
 * `content/registry.ts` is the other half of being reachable: a slug listed here
 * with a content directory that the registry never maps is still unrenderable.
 * `npm run validate` reports both directions.
 */

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
  /**
   * Advertised topic count.
   *
   * Currently a hand-written target rather than a measurement — `android` claims 95
   * and ships 32. Deriving it from content is a separate change, because the honest
   * number and the aspirational one are both useful and the UI should say which it
   * is showing.
   */
  estimatedTopics: number;
};

/**
 * Roadmaps with content on disk. These are the ones a learner can open.
 *
 * Adding an entry here without a `src/data/content/<slug>/` directory and a
 * `registry.ts` mapping is an error the content gate reports.
 */
export const roadmaps: RoadmapMeta[] = [
  // Development
  { id: "r_01", slug: "frontend", title: "Frontend Developer", description: "Learn how to build user interfaces and web applications.", category: "Development", difficulty: "Beginner", estimatedTopics: 120 },
  { id: "r_02", slug: "backend", title: "Backend Developer", description: "Master server-side programming, databases, and APIs.", category: "Development", difficulty: "Intermediate", estimatedTopics: 140 },
  { id: "r_03", slug: "fullstack", title: "Full Stack Developer", description: "Bridge the gap between frontend and backend systems.", category: "Development", difficulty: "Advanced", estimatedTopics: 200 },
  { id: "r_04", slug: "mobile", title: "Mobile Developer", description: "Build native and cross-platform mobile applications.", category: "Development", difficulty: "Intermediate", estimatedTopics: 110 },
  { id: "r_05", slug: "android", title: "Android Developer", description: "Create native applications for the Android ecosystem.", category: "Development", difficulty: "Beginner", estimatedTopics: 95 },
  { id: "r_06", slug: "ios", title: "iOS Developer", description: "Master Swift and the Apple ecosystem for app development.", category: "Development", difficulty: "Beginner", estimatedTopics: 90 },
  { id: "r_07", slug: "blockchain", title: "Blockchain Developer", description: "Understand decentralized systems, smart contracts, and Web3.", category: "Development", difficulty: "Advanced", estimatedTopics: 85 },
  { id: "r_08", slug: "game", title: "Game Developer", description: "Design and program video games using modern engines.", category: "Development", difficulty: "Intermediate", estimatedTopics: 130 },
  // Numbered last because it was added last; grouped here because it is a Development
  // roadmap, and the comment headings are what a reader trusts over the id order.
  { id: "r_36", slug: "qa-engineer", title: "QA Engineer", description: "Ensure software quality through manual and automated testing.", category: "Development", difficulty: "Beginner", estimatedTopics: 75 },

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
  { id: "r_19", slug: "dba", title: "Database Administrator", description: "Manage, optimize, and secure database systems.", category: "Infrastructure", difficulty: "Intermediate", estimatedTopics: 90 },

  // Security
  { id: "r_20", slug: "cyber-security", title: "Cyber Security Expert", description: "Protect systems, networks, and data from attacks.", category: "Security", difficulty: "Beginner", estimatedTopics: 170 },

  // Architecture
  { id: "r_25", slug: "software-architect", title: "Software Architect", description: "Design high-level software architectures.", category: "Architecture", difficulty: "Advanced", estimatedTopics: 180 },
  { id: "r_26", slug: "system-design", title: "System Design", description: "Learn how to design highly scalable systems.", category: "Architecture", difficulty: "Intermediate", estimatedTopics: 85 },

  // Design
  { id: "r_31", slug: "ux-ui", title: "UX/UI Designer", description: "Design intuitive and beautiful user experiences.", category: "Design", difficulty: "Beginner", estimatedTopics: 100 },

  // Product
  { id: "r_35", slug: "product-manager", title: "Product Manager", description: "Define product strategy and guide execution.", category: "Product", difficulty: "Intermediate", estimatedTopics: 90 },
];

/**
 * Roadmaps that are listed as intent but have no content yet.
 *
 * Not routable and not in the sitemap. Kept as data so a "planned" section can show
 * what is coming without pretending it has arrived. To promote one: create
 * `src/data/content/<slug>/`, map it in `content/registry.ts`, move the entry into
 * {@link roadmaps} above, and run `npm run validate`.
 *
 * `Research` currently has no live roadmap at all — all three of its entries are
 * here, which is why `getCategories()` does not offer it as a filter.
 */
export const plannedRoadmaps: RoadmapMeta[] = [
  // Infrastructure
  { id: "r_18", slug: "platform", title: "Platform Engineer", description: "Build internal developer platforms to increase productivity.", category: "Infrastructure", difficulty: "Advanced", estimatedTopics: 120 },

  // Security
  { id: "r_21", slug: "security-engineer", title: "Security Engineer", description: "Build secure systems and automate threat detection.", category: "Security", difficulty: "Intermediate", estimatedTopics: 130 },
  { id: "r_22", slug: "cloud-security", title: "Cloud Security Specialist", description: "Secure cloud infrastructure and environments.", category: "Security", difficulty: "Advanced", estimatedTopics: 110 },
  { id: "r_23", slug: "app-sec", title: "Application Security", description: "Ensure software is secure from the ground up.", category: "Security", difficulty: "Intermediate", estimatedTopics: 100 },
  { id: "r_24", slug: "pentester", title: "Penetration Tester", description: "Ethically hack systems to find vulnerabilities.", category: "Security", difficulty: "Advanced", estimatedTopics: 120 },

  // Architecture
  { id: "r_27", slug: "eng-manager", title: "Engineering Manager", description: "Lead teams and manage technical delivery.", category: "Architecture", difficulty: "Advanced", estimatedTopics: 75 },

  // Research
  { id: "r_28", slug: "ai-researcher", title: "AI Researcher", description: "Push the boundaries of artificial intelligence.", category: "Research", difficulty: "Advanced", estimatedTopics: 140 },
  { id: "r_29", slug: "computer-vision", title: "Computer Vision Engineer", description: "Enable machines to interpret visual data.", category: "Research", difficulty: "Advanced", estimatedTopics: 115 },
  { id: "r_30", slug: "nlp", title: "NLP Engineer", description: "Build systems that understand human language.", category: "Research", difficulty: "Advanced", estimatedTopics: 110 },

  // Design
  { id: "r_32", slug: "design-engineer", title: "Design Engineer", description: "Bridge the gap between design and frontend engineering.", category: "Design", difficulty: "Intermediate", estimatedTopics: 95 },

  // Product
  { id: "r_33", slug: "tpm", title: "Technical Product Manager", description: "Manage product strategy with deep technical insight.", category: "Product", difficulty: "Intermediate", estimatedTopics: 80 },
  { id: "r_34", slug: "scrum-master", title: "Scrum Master", description: "Facilitate agile development processes.", category: "Product", difficulty: "Beginner", estimatedTopics: 50 },
];

/** Roadmaps a learner can open. Excludes {@link plannedRoadmaps} by construction. */
export function getAllRoadmaps(): RoadmapMeta[] {
  return roadmaps;
}

/** Announced but not yet built. Never routable; never in the sitemap. */
export function getPlannedRoadmaps(): RoadmapMeta[] {
  return plannedRoadmaps;
}

/**
 * Finds a live roadmap.
 *
 * Deliberately blind to {@link plannedRoadmaps}, so `/roadmaps/<planned-slug>`
 * returns 404 rather than rendering a roadmap with no nodes in it.
 */
export function getRoadmapBySlug(slug: string): RoadmapMeta | undefined {
  return roadmaps.find((r) => r.slug === slug);
}

/** True when the slug is announced but unbuilt — useful for a "coming soon" route. */
export function isPlannedRoadmap(slug: string): boolean {
  return plannedRoadmaps.some((r) => r.slug === slug);
}

/** Categories that actually contain something. An empty filter chip is a dead end. */
export function getCategories(): Category[] {
  return Array.from(new Set(roadmaps.map((r) => r.category)));
}
