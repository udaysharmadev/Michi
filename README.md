<div align="center">

# 🧭 Michi

**Navigate Developer Knowledge**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

*Visual developer roadmaps with curated resources, interactive canvas navigation, and progress tracking.*

[Explore Roadmaps](#roadmaps) • [Features](#features) • [Getting Started](#getting-started) • [Contributing](#contributing)

</div>

---

## About

**Michi** is a visual developer knowledge platform. Each roadmap is an interactive graph of topics with curated resources (articles, videos, courses) in English and Hindi, mapped onto an infinite canvas you can pan, zoom, and explore.

Traditional learning platforms treat roadmaps as static flowcharts. Michi treats **topics as first-class entities** — a topic like "Docker" exists once and appears in multiple roadmaps (DevOps, Backend, Full Stack) without duplication.

---

## Features

- **Infinite Canvas Navigation**: Pan, zoom, and explore complex topic graphs with Figma-style interactions powered by React Flow.
- **Rich Knowledge Nodes**: Click any topic to see "Why Learn This", learning outcomes, common mistakes, real-world applications, and curated resources.
- **Curated Resource Kits**: Every topic provides verified resources — official docs, English/Hindi videos, articles, GitHub repos, cheat sheets, and deep dives.
- **Progress Tracking**: Mark topics complete, track your journey across roadmaps with local storage and cloud sync.
- **Global Search**: Find any topic, concept, or resource instantly across all roadmaps with ⌘K command palette.
- **Clean Design**: Cool-tinted oklch color system, strong typography hierarchy, minimal UI with border-based depth.
- **Bilingual Resources**: English and Hindi video resources coexist naturally on every topic.
- **Responsive**: Works on desktop and mobile with collapsible sidebar and adaptive layouts.

---

## Roadmaps

### Active (20)

| Roadmap | Description |
|---------|-------------|
| 🎨 Frontend Developer | HTML, CSS, JavaScript, React, and modern frontend tooling |
| ⚙️ Backend Developer | Node.js, Python, databases, APIs, and server architecture |
| 🚀 Full Stack Developer | End-to-end web development across frontend and backend |
| 📱 Mobile Developer | Cross-platform mobile with React Native and Flutter |
| 🤖 Android Developer | Native Android with Kotlin and Android SDK |
| 🍎 iOS Developer | Native iOS with Swift and Apple ecosystem |
| 🔗 Blockchain Developer | Web3, Solidity, smart contracts, and DeFi |
| 🎮 Game Developer | Game design and programming with modern engines |
| 🧪 QA Engineer | Manual and automated testing strategies |
| 🧠 AI Engineer | AI/ML engineering, LLMs, RAG, and deployment |
| 📊 Machine Learning Engineer | ML algorithms, deep learning, and model training |
| 📈 Data Scientist | Statistical analysis, visualization, and ML |
| 🗄️ Data Engineer | Data pipelines, ETL, and data infrastructure |
| 🤖 LLM Engineer | Large language models, fine-tuning, and inference |
| ⚙️ DevOps Engineer | CI/CD, containerization, and infrastructure automation |
| ☁️ Cloud Engineer | AWS, Azure, GCP, and cloud architecture |
| 🛡️ Cyber Security | Network security, penetration testing, and compliance |
| 🏗️ Software Architect | System design patterns and architectural decisions |
| 📐 System Design | Scalability, distributed systems, and design patterns |
| 🎨 UX/UI Designer | User research, prototyping, and design systems |

### Planned (16)

SRE, Platform Engineer, DBA, MLOps, Security Engineer, Cloud Security, Application Security, Penetration Tester, Engineering Manager, AI Researcher, Computer Vision, NLP, Design Engineer, Technical PM, Scrum Master, Product Manager.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with oklch color system
- **Components**: [shadcn/ui](https://ui.shadcn.com/) & [Radix Primitives](https://www.radix-ui.com/)
- **Graph Engine**: [React Flow](https://reactflow.dev/) (`@xyflow/react`)
- **Animations**: [Motion](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: Geist Sans, Geist Mono, Outfit

---

## Project Structure

```text
src/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Homepage
│   ├── roadmaps/           # Roadmap discovery page
│   │   └── [slug]/         # Individual roadmap viewer
│   └── api/                # API routes (auth, progress)
├── components/
│   ├── roadmap-viewer/     # Canvas engine, nodes, sidebar, toolbar
│   ├── ui/                 # shadcn/ui atomic components
│   ├── hero.tsx            # Homepage hero
│   ├── navbar.tsx          # Global navigation
│   └── ...                 # Other shared components
├── data/
│   ├── content/            # Per-roadmap graphs, topics, resources
│   │   ├── frontend/       # graph.ts, topics.ts, index.ts
│   │   ├── backend/
│   │   └── ...             # 24 content directories
│   ├── roadmaps.ts         # Roadmap catalogue
│   ├── types.ts            # TypeScript schemas
│   └── schema/             # Validation and content schema
├── features/
│   └── auth/               # Authentication (GitHub, Google, Guest)
└── lib/                    # Utilities and helpers
```

---

## Design System

Michi uses a **product-first** design system documented in `DESIGN.md`:

- **Colors**: oklch with blue-tinted neutrals (hue 260), single indigo-blue primary accent
- **Typography**: Outfit for display headings, Geist for body text, Geist Mono for code
- **Elevation**: Flat-by-default with border-based depth; shadows only on hover/overlay
- **Components**: Compact buttons, filter pills, cards with 12px radius, consistent across all surfaces

---

## Getting Started

### Prerequisites
- Node.js ≥ 24
- npm

### Setup

```bash
git clone https://github.com/yourusername/michi.git
cd michi
npm install
npm run dev
```

Open `http://localhost:3000`.

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript type checking |
| `npm run test` | Run test suite |
| `npm run validate` | Validate content corpus |
| `npm run inventory` | Generate corpus inventory |
| `npm run verify-youtube` | Verify all YouTube video links |

---

## Content Pipeline

Each roadmap follows a strict content schema:

1. **Graph definition** (`graph.ts`): Defines section nodes and topic nodes with positions, colors, and icons.
2. **Topic data** (`topics.ts`): Rich topic data with descriptions, learning outcomes, common mistakes, and 7 curated resources per topic.
3. **Registry wiring** (`index.ts`): Merges graph and topic data into the `RoadmapContent` shape.
4. **Validation** (`npm run validate`): Checks all resources, URLs, and content quality.

### Resource Types per Topic
Every topic provides up to 7 resource types:
- Official documentation
- English video tutorial
- Hindi video tutorial
- Written article/tutorial
- GitHub repository
- Cheat sheet
- Deep dive / advanced resource

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Adding a New Roadmap

1. Create `src/data/content/{slug}/` with `graph.ts`, `topics.ts`, and `index.ts`
2. Follow the graph schema from `frontend/graph.ts` as reference
3. Add the roadmap entry to `src/data/roadmaps.ts`
4. Register in `src/data/content/registry.ts`
5. Run `npm run validate` to verify content

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ by the open-source community.</p>
</div>
