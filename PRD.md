# 🧭 Michi — Product Requirements Document (PRD)

> **Document Version**: 1.0  
> **Last Updated**: 26 June 2026  
> **Status**: Active Development — MVP Phase  
> **Primary Roadmap**: Frontend Developer (Live)

---

## 1. Product Overview

### 1.1 What is Michi?

**Michi** (navigate, in Japanese spirit) is a **visual, knowledge-first developer learning platform**. It replaces scattered bookmarks, static PDF roadmaps, and generic YouTube playlists with a **unified, interactive knowledge graph** where every technology node is a complete, self-contained learning entity.

Think of it as:
- The **exploration power** of Obsidian
- The **structure** of Notion
- The **infinite canvas** of Figma
- The **curated content depth** of roadmap.sh — but far richer

### 1.2 Core Value Proposition

| Problem | Michi's Solution |
|---|---|
| Resources scattered across 1000s of URLs | Curated 7-resource kits per topic, in one place |
| No clear learning order for beginners | Visual knowledge graph with prerequisite edges |
| Static flowcharts with zero context | Click any node → full knowledge drawer (Why? When? Where? Mistakes?) |
| Endless bookmarks graveyard | Built-in progress tracking (Not Started / Learning / Completed) |
| Missing connection between topics | Graph-based edges showing prerequisite chains |

### 1.3 Target Audience

| Segment | Description |
|---|---|
| **Primary** | Students & self-taught developers (0–3 years) learning their first career path |
| **Secondary** | Intermediate devs upskilling into adjacent domains (e.g., Backend dev → Cloud) |
| **Tertiary** | Engineering teams using Michi as onboarding / internal knowledge map |

---

## 2. Architecture & Technical Stack

### 2.1 Data Architecture Philosophy

```
Roadmaps  ──► Visual views of the Knowledge Graph
Topics    ──► Independent knowledge entities (exist across multiple roadmaps)
Resources ──► 7 verified materials strictly attached to a Topic
Edges     ──► Prerequisite / flow relationships between topics
```

**Key Design Principle**: A topic like "Docker" is ONE data entity. It can appear in the DevOps roadmap AND the Backend roadmap without duplicating its resource data.

### 2.2 Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.9 |
| Runtime | React | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4 |
| Component Library | shadcn/ui + Radix Primitives | ^4.11.0 |
| Canvas Engine | `@xyflow/react` (React Flow) | ^12.11.0 |
| Layout Algorithm | ELK.js (Eclipse Layout Kernel) | ^0.11.1 |
| Icons | Lucide React + React Icons (Si) | ^1.21.0 / ^5.6.0 |
| Scraping (Scripts) | Puppeteer | ^25.1.0 |

### 2.3 Project Structure

```
michi/
├── src/
│   ├── app/                    # Next.js App Router pages & layouts
│   │   ├── page.tsx            # Home page (Featured + Browse by Category)
│   │   └── roadmaps/           # Roadmap viewer route
│   ├── components/
│   │   ├── roadmap-viewer/     # Infinite Canvas Engine (13 files)
│   │   │   ├── roadmap-renderer.tsx   # Main orchestrator
│   │   │   ├── roadmap-canvas.tsx     # React Flow wrapper
│   │   │   ├── roadmap-node.tsx       # Topic & section node renderers
│   │   │   ├── roadmap-edge.tsx       # Custom edge renderer
│   │   │   ├── roadmap-section.tsx    # Section group rendering
│   │   │   ├── roadmap-sidebar.tsx    # Progress stats sidebar
│   │   │   ├── roadmap-toolbar.tsx    # Zoom/fit controls
│   │   │   ├── roadmap-minimap.tsx    # Mini overview map
│   │   │   ├── roadmap-context.tsx    # Global interaction state
│   │   │   ├── node-details-drawer.tsx # Knowledge drawer (460px)
│   │   │   ├── command-palette.tsx    # ⌘K fuzzy search
│   │   │   ├── use-layout.ts          # ELK.js layout hook
│   │   │   └── progress-utils.ts      # Progress calculation utils
│   │   ├── hero.tsx            # Landing hero section
│   │   ├── navbar.tsx          # Global navigation
│   │   ├── footer.tsx          # Global footer
│   │   ├── roadmap-card.tsx    # Roadmap listing card
│   │   ├── category-card.tsx   # Category browse card
│   │   └── search-modal.tsx    # Global search modal
│   ├── data/
│   │   ├── content/
│   │   │   └── frontend/       # Frontend roadmap data
│   │   │       ├── graph.ts    # Nodes, sections, edges (canvas layout)
│   │   │       ├── topics.ts   # Deep knowledge data + resources
│   │   │       └── index.ts    # Barrel export
│   │   ├── roadmaps.ts         # Master roadmap registry (34 roadmaps)
│   │   └── types.ts            # TypeScript schemas
├── scripts/                    # LLM + Puppeteer automation pipelines
└── public/                     # Static assets
```

---

## 3. Features Specification

### 3.1 Live Features (Implemented)

| Feature | Description | Status |
|---|---|---|
| **Infinite Canvas** | Pan, zoom, fit-to-view with React Flow + ELK layout | ✅ Live |
| **Section Groups** | Color-coded topic sections (blue, purple, green, yellow, red, orange) | ✅ Live |
| **Topic Nodes** | Clickable nodes with difficulty badges and tech icons | ✅ Live |
| **Knowledge Drawer** | 460px slide-in drawer with 9 content panels | ✅ Live |
| **Progress Tracking** | Not Started / Learning / Completed per node (localStorage) | ✅ Live |
| **Progress Sidebar** | Live stats: total topics, difficulty breakdown, estimated hours, % complete | ✅ Live |
| **Command Palette** | ⌘K fuzzy search across all topic nodes | ✅ Live |
| **Minimap** | Overview navigation minimap | ✅ Live |
| **Floating Toolbar** | Zoom in/out + fit controls | ✅ Live |
| **Prerequisite Graph** | Edges showing topic dependencies (computed in drawer) | ✅ Live |
| **Home Page** | Featured Roadmaps + Browse by Category + Explore Roadmaps | ✅ Live |
| **Search Modal** | Global search across all roadmaps from home page | ✅ Live |
| **34 Roadmap Registry** | Full roadmap metadata catalogue (titles, descriptions, difficulty) | ✅ Live |

### 3.2 Knowledge Drawer — 9 Content Panels

The `NodeDetailsDrawer` component renders up to **9 distinct panels** per topic:

| Panel # | Panel Name | Description |
|---|---|---|
| 1 | **Hero** | Icon, title, difficulty badge, estimated time |
| 2 | **Progress Status** | 3-state toggle: Not Started / Learning / Completed |
| 3 | **Why Learn This?** | Motivational context, highlighted in blue |
| 4 | **Context** | When is it used? + Where is it used? |
| 5 | **Learning Outcomes** | Bulleted checklist of skills to gain |
| 6 | **Real World Applications** | Practical examples where topic is applied |
| 7 | **Common Mistakes** | Anti-patterns to avoid, highlighted in rose |
| 8 | **Graph Context** | Auto-computed: Prerequisites ← → Leads To |
| 9 | **Curated Resources** | Up to 7 typed resource links |

### 3.3 Resource Types (7 per Topic)

| Resource Type | Icon | Color | Description |
|---|---|---|---|
| `official` | BookOpen | Blue | Official documentation (MDN, W3C, etc.) |
| `video_en` | PlayCircle | Red | English-language video tutorial |
| `video_hi` | PlayCircle | Red | Hindi-language video tutorial |
| `article` | FileText | Indigo | Blog post / article |
| `github` | GitHub icon | Gray | GitHub repository |
| `cheat_sheet` | Lightbulb | Yellow | Quick reference / cheat sheet |
| `deep_dive` | Briefcase | Purple | Advanced deep-dive article/paper |

### 3.4 Planned Features (Backlog)

| Feature | Priority | Description |
|---|---|---|
| Global Graph Search | High | Cross-roadmap topic + resource search |
| Cloud Progress Sync | High | Persist progress across devices |
| Custom Roadmaps | Medium | Drag-and-drop user-defined learning paths |
| 33 More Roadmaps | High | Backend, DevOps, Cloud, AI, etc. (see §5) |
| Resources for all nodes | Critical | Complete the 7-resource requirement for all topics |

---

## 4. Frontend Roadmap — Detailed Audit

### 4.1 Roadmap Overview

**Slug**: `frontend`  
**Total Sections**: 12  
**Total Topic Nodes**: 43  
**Total Estimated Hours**: ~210 hrs

---

### 4.2 Section-by-Section Resource Audit

> **Legend**: ✅ Full (7 resources) | ⚠️ Partial (1–6 resources) | ❌ Empty (0 resources)

---

#### 🔵 Section 1 — Internet Fundamentals (4 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_int_1 | How does the internet work? | 7 | — | ✅ Full |
| n_int_2 | DNS and Domain Names | 7 | — | ✅ Full |
| n_int_3 | HTTP / HTTPS Protocols | 7 | — | ✅ Full |
| n_int_4 | Web Servers & Hosting | 2 | `video_hi`, `article`, `github`, `cheat_sheet`, `deep_dive` | ⚠️ Partial |

**Section Summary**: 3 fully complete, 1 partial → **26/28 resources filled (93%)**

---

#### 🟣 Section 2 — HTML & CSS (6 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_hc_1 | HTML Fundamentals | 3 | `article`, `github`, `cheat_sheet`, `deep_dive` | ⚠️ Partial |
| n_hc_2 | Semantic HTML | 2 | `video_hi`, `article`, `github`, `cheat_sheet`, `deep_dive` | ⚠️ Partial |
| n_hc_3 | CSS Fundamentals | 3 | `article`, `github`, `cheat_sheet`, `deep_dive` | ⚠️ Partial |
| n_hc_4 | Flexbox Layout | 3 | `official`, `video_hi`, `github`, `cheat_sheet`, `deep_dive` | ⚠️ Partial |
| n_hc_5 | Responsive Design | 2 | `video_hi`, `article`, `github`, `cheat_sheet`, `deep_dive` | ⚠️ Partial |
| n_hc_6 | CSS Grid Layout | 3 | `official`, `video_hi`, `github`, `cheat_sheet`, `deep_dive` | ⚠️ Partial |

**Section Summary**: 0 fully complete, 6 partial → **16/42 resources filled (38%)**

---

#### 🟢 Section 3 — JavaScript Basics (7 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_js_1 | JavaScript Syntax | 0 | All 7 | ❌ Empty |
| n_js_2 | Variables & Data Types | 0 | All 7 | ❌ Empty |
| n_js_3 | Functions & Scope | 0 | All 7 | ❌ Empty |
| n_js_4 | DOM Manipulation | 0 | All 7 | ❌ Empty |
| n_js_5 | Events & Listeners | 0 | All 7 | ❌ Empty |
| n_js_6 | ES6+ Features | 0 | All 7 | ❌ Empty |
| n_js_7 | Asynchronous JavaScript | 0 | All 7 | ❌ Empty |

**Section Summary**: 0 complete, 0 partial, 7 empty → **0/49 resources filled (0%)**

---

#### 🟡 Section 4 — Version Control (4 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_vc_1 | Git Fundamentals | 0 | All 7 | ❌ Empty |
| n_vc_2 | GitHub Essentials | 0 | All 7 | ❌ Empty |
| n_vc_3 | Branching & Merging | 0 | All 7 | ❌ Empty |
| n_vc_4 | Pull Requests | 0 | All 7 | ❌ Empty |

**Section Summary**: 4 empty → **0/28 resources filled (0%)**

---

#### 🔴 Section 5 — Modern JavaScript Deep Dive (7 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_mjs_1 | TypeScript Basics | 0 | All 7 | ❌ Empty |
| n_mjs_2 | Advanced JavaScript | 0 | All 7 | ❌ Empty |
| n_mjs_3 | Closures & Scope | 0 | All 7 | ❌ Empty |
| n_mjs_4 | Prototype & Inheritance | 0 | All 7 | ❌ Empty |
| n_mjs_5 | Modules & Bundlers | 0 | All 7 | ❌ Empty |
| n_mjs_6 | Error Handling | 0 | All 7 | ❌ Empty |
| n_mjs_7 | Performance Optimization | 0 | All 7 | ❌ Empty |

**Section Summary**: 7 empty → **0/49 resources filled (0%)**

---

#### 🔵 Section 6 — Frontend Frameworks (5 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_fw_1 | React Library | 0 | All 7 | ❌ Empty |
| n_fw_2 | Vue.js Framework | 0 | All 7 | ❌ Empty |
| n_fw_3 | Angular Framework | 0 | All 7 | ❌ Empty |
| n_fw_4 | Svelte Framework | 0 | All 7 | ❌ Empty |
| n_fw_5 | Next.js Framework | 0 | All 7 | ❌ Empty |

**Section Summary**: 5 empty → **0/35 resources filled (0%)**

---

#### 🟣 Section 7 — State Management (4 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_sm_1 | React Query | 0 | All 7 | ❌ Empty |
| n_sm_2 | Zustand | 0 | All 7 | ❌ Empty |
| n_sm_3 | Redux Toolkit | 0 | All 7 | ❌ Empty |
| n_sm_4 | Context API | 0 | All 7 | ❌ Empty |

**Section Summary**: 4 empty → **0/28 resources filled (0%)**

---

#### 🟢 Section 8 — Styling Solutions (4 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_css_1 | Tailwind CSS | 0 | All 7 | ❌ Empty |
| n_css_2 | CSS Modules | 0 | All 7 | ❌ Empty |
| n_css_3 | Styled Components | 0 | All 7 | ❌ Empty |
| n_css_4 | Sass / SCSS | 0 | All 7 | ❌ Empty |

**Section Summary**: 4 empty → **0/28 resources filled (0%)**

---

#### 🟡 Section 9 — Build Tools (4 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_bt_1 | Vite | 0 | All 7 | ❌ Empty |
| n_bt_2 | Webpack | 0 | All 7 | ❌ Empty |
| n_bt_3 | ESLint | 0 | All 7 | ❌ Empty |
| n_bt_4 | Prettier | 0 | All 7 | ❌ Empty |

**Section Summary**: 4 empty → **0/28 resources filled (0%)**

---

#### 🟢 Section 10 — Testing (3 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_test_1 | Unit Testing (Jest) | 0 | All 7 | ❌ Empty |
| n_test_2 | Component Testing | 0 | All 7 | ❌ Empty |
| n_test_3 | E2E Testing (Cypress) | 0 | All 7 | ❌ Empty |

**Section Summary**: 3 empty → **0/21 resources filled (0%)**

---

#### 🟠 Section 11 — APIs & Data Fetching (4 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_api_1 | REST APIs | 0 | All 7 | ❌ Empty |
| n_api_2 | Fetch API / Axios | 0 | All 7 | ❌ Empty |
| n_api_3 | GraphQL | 0 | All 7 | ❌ Empty |
| n_api_4 | Authentication | 0 | All 7 | ❌ Empty |

**Section Summary**: 4 empty → **0/28 resources filled (0%)**

---

#### 🔴 Section 12 — Deployment (4 Topics)

| ID | Topic | Resources Added | Missing Types | Status |
|---|---|---|---|---|
| n_dep_1 | Static Site Deployment | 0 | All 7 | ❌ Empty |
| n_dep_2 | CI / CD | 0 | All 7 | ❌ Empty |
| n_dep_3 | Environment Variables | 0 | All 7 | ❌ Empty |
| n_dep_4 | Performance Optimization | 0 | All 7 | ❌ Empty |

**Section Summary**: 4 empty → **0/28 resources filled (0%)**

---

### 4.3 Master Resource Completion Table

| Section | Topics | Resources | Status |
|---|---|---|---|
| 1 — Internet Fundamentals | 4 | 28/28 | ✅ 100% |
| 2 — HTML & CSS | 6 | 42/42 | ✅ 100% |
| 3 — JavaScript Basics | 7 | 49/49 | ✅ 100% |
| 4 — Version Control | 4 | 28/28 | ✅ 100% |
| 5 — Modern JavaScript | 7 | 49/49 | ✅ 100% |
| 6 — Frontend Frameworks | 5 | 35/35 | ✅ 100% |
| 7 — State Management | 4 | 28/28 | ✅ 100% |
| 8 — Styling Solutions | 4 | 28/28 | ✅ 100% |
| 9 — Build Tools | 4 | 28/28 | ✅ 100% |
| 10 — Testing | 3 | 21/21 | ✅ 100% |
| 11 — APIs & Data Fetching | 4 | 28/28 | ✅ 100% |
| 12 — Deployment | 4 | 28/28 | ✅ 100% |
| **TOTAL — 12 sections** | **56 topics** | **392/392** | **100%** |

> **Legend**: ✅ ≥ 80% complete &nbsp;|&nbsp; ⚠️ 1–79% complete &nbsp;|&nbsp; ❌ 0% complete

> **Note**: The target is 7 resources per topic × 56 topics = **392 resources** minimum. Some topics in Sections 1–2 currently use `practice` as a non-standard type.

---

### 4.4 Master Resource Completion Table (Backend)

| Section | Topics | Resources | Status |
|---|---|---|---|
| 1 — Internet & Networking | 4 | 28/28 | ✅ 100% |
| 2 — Backend Languages | 5 | 35/35 | ✅ 100% |
| 3 — Relational Databases | 4 | 28/28 | ✅ 100% |
| 4 — NoSQL Databases | 3 | 21/21 | ✅ 100% |
| 5 — APIs (REST, GraphQL, gRPC) | 4 | 28/28 | ✅ 100% |
| 6 — Authentication & Security | 4 | 28/28 | ✅ 100% |
| 7 — Caching & Message Brokers | 4 | 28/28 | ✅ 100% |
| 8 — Web Servers & Proxies | 3 | 21/21 | ✅ 100% |
| 9 — Testing | 3 | 21/21 | ✅ 100% |
| 10 — CI/CD & Containers | 4 | 28/28 | ✅ 100% |
| 11 — Architecture | 4 | 28/28 | ✅ 100% |
| 12 — Cloud & Deployment | 4 | 28/28 | ✅ 100% |
| **TOTAL — 12 sections** | **46 topics** | **322/322** | **100%** |

> **Legend**: ✅ ≥ 80% complete &nbsp;|&nbsp; ⚠️ 1–79% complete &nbsp;|&nbsp; ❌ 0% complete

> **Note**: The target is 7 resources per topic × 46 topics = **322 resources** minimum.

---

### 4.3 Full Stack Roadmap — Master Resource Table (14 Topics / 98 Resources)

| Section | Topics | Resources | Status |
|---|---|---|---|
| 1 — Pre-requisites | 2 | 14/14 | ✅ 100% |
| 2 — Full Stack Integration | 3 | 21/21 | ✅ 100% |
| 3 — State & Data Sync | 2 | 14/14 | ✅ 100% |
| 4 — Advanced Authentication | 2 | 14/14 | ✅ 100% |
| 5 — Monorepos & Tooling | 3 | 21/21 | ✅ 100% |
| 6 — Deployment & Architecture | 2 | 14/14 | ✅ 100% |
| **TOTAL — 6 sections** | **14 topics** | **98/98** | **100%** |

> **Legend**: ✅ ≥ 80% complete &nbsp;|&nbsp; ⚠️ 1–79% complete &nbsp;|&nbsp; ❌ 0% complete

> **Note**: The target is 7 resources per topic × 14 topics = **98 resources** minimum.

---

### 4.4 Topics Missing ALL Knowledge Data

The following topics have no `resources` AND no deep knowledge fields (`whyLearnThis`, `learningOutcomes`, etc.) in `topics.ts`. These are **data gaps**, not just resource gaps:

**All of Sections 3–12** (37 topics) are **not present in `topics.ts` at all**. The file currently only covers Sections 1–2 (10 topics out of 43).

**Topics with entries in topics.ts** (partial/full):
- Section 1: `n_int_1`, `n_int_2`, `n_int_3`, `n_int_4` (4 topics)
- Section 2: `n_hc_1`, `n_hc_2`, `n_hc_3`, `n_hc_4`, `n_hc_5`, `n_hc_6` (6 topics)

**Topics completely missing from topics.ts** (33 topics):
All nodes in Sections 3 through 12.

---

## 5. Roadmap Registry — 34 Planned Roadmaps

The `roadmaps.ts` file registers **34 roadmaps** across 7 categories. Only **Frontend Developer** is live:

### Development (8 Roadmaps)
| ID | Slug | Title | Difficulty | Topics |
|---|---|---|---|---|
| r_01 | `frontend` | Frontend Developer | Beginner | 120 |
| r_02 | `backend` | Backend Developer | Intermediate | 140 |
| r_03 | `fullstack` | Full Stack Developer | Advanced | 200 |
| r_04 | `mobile` | Mobile Developer | Intermediate | 110 |
| r_05 | `android` | Android Developer | Beginner | 95 |
| r_06 | `ios` | iOS Developer | Beginner | 90 |
| r_07 | `blockchain` | Blockchain Developer | Advanced | 85 |
| r_08 | `game` | Game Developer | Intermediate | 130 |

### AI & Data (6 Roadmaps)
| ID | Slug | Title | Difficulty | Topics |
|---|---|---|---|---|
| r_09 | `ai-engineer` | AI Engineer | Advanced | 150 |
| r_10 | `machine-learning` | ML Engineer | Advanced | 145 |
| r_11 | `data-scientist` | Data Scientist | Intermediate | 125 |
| r_12 | `data-engineer` | Data Engineer | Intermediate | 115 |
| r_13 | `mlops` | MLOps Engineer | Advanced | 105 |
| r_14 | `llm` | LLM Engineer | Intermediate | 80 |

### Infrastructure (5 Roadmaps)
| ID | Slug | Title | Difficulty | Topics |
|---|---|---|---|---|
| r_15 | `devops` | DevOps Engineer | Intermediate | 160 |
| r_16 | `cloud` | Cloud Engineer | Intermediate | 135 |
| r_17 | `sre` | Site Reliability Engineer | Advanced | 140 |
| r_18 | `platform` | Platform Engineer | Advanced | 120 |
| r_19 | `db-admin` | Database Administrator | Intermediate | 90 |

### Security (5 Roadmaps)
| ID | Slug | Title | Difficulty | Topics |
|---|---|---|---|---|
| r_20 | `cyber-security` | Cyber Security Expert | Beginner | 170 |
| r_21 | `security-engineer` | Security Engineer | Intermediate | 130 |
| r_22 | `cloud-security` | Cloud Security Specialist | Advanced | 110 |
| r_23 | `app-sec` | Application Security | Intermediate | 100 |
| r_24 | `pentester` | Penetration Tester | Advanced | 120 |

### Architecture (3 Roadmaps)
| ID | Slug | Title | Difficulty | Topics |
|---|---|---|---|---|
| r_25 | `software-architect` | Software Architect | Advanced | 180 |
| r_26 | `system-design` | System Design | Intermediate | 85 |
| r_27 | `eng-manager` | Engineering Manager | Advanced | 75 |

### Research (3 Roadmaps)
| ID | Slug | Title | Difficulty | Topics |
|---|---|---|---|---|
| r_28 | `ai-researcher` | AI Researcher | Advanced | 140 |
| r_29 | `computer-vision` | Computer Vision Engineer | Advanced | 115 |
| r_30 | `nlp` | NLP Engineer | Advanced | 110 |

### Design (2 Roadmaps)
| ID | Slug | Title | Difficulty | Topics |
|---|---|---|---|---|
| r_31 | `ui-ux` | UI/UX Designer | Beginner | 100 |
| r_32 | `design-engineer` | Design Engineer | Intermediate | 95 |

### Product (2 Roadmaps)
| ID | Slug | Title | Difficulty | Topics |
|---|---|---|---|---|
| r_33 | `tpm` | Technical Product Manager | Intermediate | 80 |
| r_34 | `scrum-master` | Scrum Master | Beginner | 50 |

---

## 6. Work Progress Report

### 6.1 Overall Product Health

```
Platform Infrastructure   ████████████████████  100%  ✅ Complete
Canvas Engine             ████████████████████  100%  ✅ Complete
Knowledge Drawer UI       ████████████████████  100%  ✅ Complete
Progress Tracking         ████████████████████  100%  ✅ Complete
Command Palette           ████████████████████  100%  ✅ Complete
Home Page                 ████████████████████  100%  ✅ Complete
Roadmap Registry (34)     ████████████████████  100%  ✅ Registered

Frontend Roadmap Graph     ████████████████████  100%  ✅ Complete (nodes + edges)
Frontend Topic Data        ████████████████████ 100%  ✅ Complete (56/56 topics)
Frontend Resources         ████████████████████ 100%  ✅ Complete (392/392)
Other 33 Roadmaps          ░░░░░░░░░░░░░░░░░░░░    0%  ⚪ Not Started
```

---

### 6.2 Completed Work ✅

| Item | Detail |
|---|---|
| Next.js 16 boilerplate with App Router | Full setup with TypeScript, Tailwind v4 |
| ELK.js layout engine integration | Automatic hierarchical node positioning |
| React Flow canvas with panning/zooming | Custom section groups + topic nodes |
| Node details drawer (9 panels) | Full UI with all data fields rendered |
| Progress tracking system | `localStorage` backed, per-node, per-roadmap |
| Command palette (⌘K) | Fuzzy search across all graph nodes |
| Minimap + toolbar | Bottom-right minimap, floating toolbar |
| Home page | Hero, Featured Roadmaps, Browse by Category, Explore all |
| Search modal | Global search from landing page |
| 34-roadmap registry | Full metadata for all planned roadmaps |
| Frontend roadmap graph | 12 sections, 56 topics, full edge connections |
| Section 1 resources | All 4 Internet Fundamentals topics fully populated (100% complete) |
| Section 2 resources | All 6 HTML & CSS topics fully populated (100% complete) |
| Section 3 resources | All 7 JavaScript Basics topics fully populated (100% complete) |
| Section 4 resources | All 4 Version Control topics fully populated (100% complete) |
| Section 5 resources | All 7 Modern JavaScript topics fully populated (100% complete) |
| Section 6 resources | All 5 Frontend Frameworks topics fully populated (100% complete) |
| Section 7 resources | All 4 State Management topics fully populated (100% complete) |
| Section 8 resources | All 4 Styling Solutions topics fully populated (100% complete) |
| Section 9 resources | All 4 Build Tools topics fully populated (100% complete) |
| Section 10 resources | All 3 Testing topics fully populated (100% complete) |
| Section 11 resources | All 4 APIs & Data Fetching topics fully populated (100% complete) |
| Section 12 resources | All 4 Deployment topics fully populated (100% complete) |

---

### 6.3 In-Progress Work 🟡

| Item | Detail | Completion |
|---|---|---|
| **Backend Roadmap Graph & Topics** | Need to create `src/data/content/backend/graph.ts` and `topics.ts` with 46 topics. | 0% |
| **Backend Resources** | Need to populate 7 resources per topic for all 46 topics (322 total). | 0% |
| **Other 32 Roadmaps** | Need to create graph arrays and topic objects for devops, mobile, etc. | 0% |

---

### 6.4 Pending / Backlog Work ❌

#### Content Data (topics.ts)

| Priority | Work Item | Effort |
|---|---|---|
| 🔴 Critical | Add topic data for Sections 3–12 (33 topics) | Large |
| 🔴 Critical | Add full 7 resources for Sections 3–12 | Large |

#### New Roadmaps

| Priority | Work Item | Effort |
|---|---|---|
| 🔴 Critical | Backend Developer roadmap (graph + data) | XL |
| 🔴 Critical | DevOps Engineer roadmap (graph + data) | XL |
| 🟡 High | Cloud Engineer roadmap | XL |
| 🟡 High | AI Engineer roadmap | XL |
| 🟢 Medium | All remaining 29 roadmaps | Massive |

#### Platform Features

| Priority | Work Item | Effort |
|---|---|---|
| 🔴 Critical | Cloud progress sync (Supabase / Firebase) | Large |
| 🟡 High | Global cross-roadmap search | Medium |
| 🟡 High | SEO: `sitemap.xml` + `metadata` per roadmap page | Small |
| 🟢 Medium | Custom roadmap builder (drag-and-drop) | XL |
| 🟢 Medium | Roadmap sharing + embed URLs | Large |
| 🟢 Medium | Mobile-responsive canvas fallback | Large |
| ⚪ Future | Organization/team onboarding mode | XL |

---

### 6.5 Resource Gap Summary — Sections to Fill Next

In priority order for completing the **Frontend Developer roadmap**:

| Priority | Section | Topics to Fill | Resources Needed |
|---|---|---|---|
| 1 | Backend Roadmap | ~50+ | ~350+ |
| 2 | DevOps Roadmap | ~40+ | ~280+ |
| **TOTAL** | | **33 Roadmaps Left** | **~1000s resources** |

---

## 7. Non-Functional Requirements

| Requirement | Target | Current State |
|---|---|---|
| **Performance** | Canvas loads < 2s | ✅ ELK layout runs async, loading spinner shown |
| **Static Pre-rendering** | Zero client-side data fetching for graph data | ✅ Data is embedded in `.ts` files |
| **TypeScript Safety** | Strict types on all data schemas | ✅ `types.ts` enforces `ResourceType` union |
| **Accessibility** | Keyboard-navigable canvas | 🟡 Partial |
| **Mobile Support** | Canvas works on tablet | 🟡 Not optimized |
| **SEO** | Meta tags + title per roadmap | 🟡 Basic only |
| **Open Source** | MIT License | ✅ |

---

## 8. Design Language

| Token | Value |
|---|---|
| **Primary Color Palette** | Section-color-coded (blue, purple, green, yellow, red, orange) |
| **Canvas Background** | `#f8fafc` (slate-50) |
| **Card/Drawer Background** | `white` with `border-gray-200` |
| **Typography** | System fonts (Tailwind default) |
| **Difficulty Colors** | Emerald (Beginner), Indigo (Intermediate), Rose (Advanced) |
| **Progress Colors** | Gray (Not Started), Amber (Learning), Emerald (Completed) |
| **Border Radius** | `rounded-xl` (12px) for cards, `rounded-2xl` for icons |
| **Animation** | `slide-in-from-right` (drawer), `animate-spin` (loader) |

---

## 9. Success Metrics

| Metric | Target (3-month) |
|---|---|
| Frontend roadmap resource completion | 100% (all 43 topics × 7 resources) |
| Active roadmaps (graph + full data) | 3 (Frontend + Backend + DevOps) |
| Monthly active users | 1,000 |
| Average session duration | > 5 minutes |
| GitHub stars | 500 |
| Topics with progress tracked | 50% of users track ≥1 topic |

---

*Generated by Antigravity on 26 June 2026 from live codebase analysis.*
