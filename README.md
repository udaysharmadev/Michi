<div align="center">

# 🧭 Michi

**Navigate Developer Knowledge**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

*A visual, knowledge-first developer platform combining the exploratory power of Obsidian, the structure of Notion, and the infinite canvas of Figma.*

[Explore Roadmaps](#roadmaps) • [Features](#features) • [Getting Started](#getting-started) • [Contributing](#contributing)

</div>

---

## 🌟 About the Product

**Michi** is a next-generation visual developer knowledge platform. 

Traditional learning platforms treat roadmaps as static flowcharts. Michi fundamentally changes this by treating **Topics as first-class entities**. Roadmaps are simply visual views into a connected web of knowledge. 

When you explore Michi, learning becomes an interactive, explorable journey rather than a linear, top-down checklist.

### Why Michi?

The modern developer's learning journey is fundamentally broken:
- ❌ **Scattered Resources**: Information is fragmented across thousands of YouTube videos, MDN articles, and GitHub repos.
- ❌ **No Clear Order**: Beginners often learn advanced topics before fundamentals, leading to gaps in knowledge.
- ❌ **Endless Bookmarks**: Managing tutorials results in an unusable graveyard of browser tabs.
- ❌ **Missing Context**: Static diagrams fail to explain *how* two topics relate to each other in practice.

**Michi solves this by building a unified knowledge graph.** Every technology node contains a complete learning toolkit immediately after opening it—curated official docs, videos, cheat sheets, and deep dives—all mapped onto an infinite, interactive canvas.

---

## ✨ Features

### Current Features
- 🗺 **Infinite Canvas Navigation**: Pan, zoom, and explore complex topics smoothly using our Figma-style interaction engine.
- 🧠 **Rich Knowledge Entities**: Click any node to instantly reveal its "Why Learn This", "When is it Used", "Common Mistakes", and "Real World Apps".
- 🎯 **Curated Resource Kits**: Every node provides exactly 7 verified, high-quality resources (Official Docs, English/Hindi Videos, Articles, GitHub Repos, Cheat Sheets, Deep Dives).
- 🌓 **Beautiful UI**: Glassmorphism details, intelligent hover states, and smooth micro-animations powered by Tailwind and shadcn/ui.
- ⚡ **Zero Loading States**: Static pre-rendering ensures the knowledge graph loads instantly.

### Planned Features
- 🔍 **Global Graph Search**: Instantly find any topic, concept, or resource across all roadmaps.
- 📈 **Progress Tracking**: Local storage and cloud sync to track your mastery across different domains.
- 🛠 **Custom Roadmaps**: Allow users to drag-and-drop their own custom learning paths.

### Future Vision
Our ultimate goal is to become the **de facto standard for developer onboarding and learning**. We envision organizations using Michi's open-source architecture to map their own internal engineering platforms and proprietary systems.

---

## 📸 Screenshots

*(Replace these with actual screenshots of your running app)*

<div align="center">
  <img src="/public/screenshot-canvas.png" alt="Michi Infinite Canvas" width="800" style="border-radius: 8px; margin-bottom: 15px;"/>
  <p><em>The Infinite Interactive Canvas</em></p>

  <img src="/public/screenshot-drawer.png" alt="Michi Knowledge Drawer" width="800" style="border-radius: 8px;"/>
  <p><em>Rich Knowledge Drawer with Curated Resources</em></p>
</div>

---

## 🏗 Architecture

Michi is built on a scalable knowledge-graph philosophy:

- **Roadmaps**: Visual, directional views of connected knowledge (e.g., "Frontend Developer"). They manage the X/Y coordinates and the edges.
- **Topics**: The actual knowledge entities. A topic (e.g., "DNS") can exist in multiple roadmaps simultaneously without data duplication.
- **Resources**: The verified learning materials strictly attached to a specific Topic.
- **Knowledge Graph**: The underlying data structure that connects topics by prerequisites and conceptual relationships.

---

## 💻 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) & [Radix Primitives](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons (Si)](https://react-icons.github.io/react-icons/)
- **Graph State**: Custom Canvas Context Engine

---

## 📂 Project Structure

```text
michi/
├── src/
│   ├── app/                # Next.js App Router (Pages & Layouts)
│   ├── components/         # Reusable UI Components
│   │   ├── roadmap-viewer/ # The Infinite Canvas Engine & Drawers
│   │   └── ui/             # shadcn/ui atomic components
│   ├── data/               # The Knowledge Graph Layer
│   │   ├── content/        # Roadmap-specific nodes, edges, and rich topics
│   │   ├── roadmaps.ts     # Global roadmap registry
│   │   └── types.ts        # Strict TypeScript schemas (TopicData, Resource)
├── scripts/                # LLM & Puppeteer Automation Pipelines
├── public/                 # Static assets and icons
└── package.json
```

---

## 🗺 Supported Roadmaps

Michi is expanding to map the entirety of developer knowledge. 

- **Currently Mapped**:
  - 🎨 Frontend Developer
- **In Progress / Planned**:
  - ⚙️ Backend Developer
  - 🚀 DevOps Engineer
  - ☁️ Cloud Engineer
  - 🧠 AI Engineer
  - 📊 Data Engineer
  - 🛡️ Cyber Security
  - 📱 Mobile Developer
  - 🔬 Research Engineer
  - ...and more.

---

## 🎯 Design Philosophy

1. **Knowledge-First**: Content dictates the UI, not the other way around. Every node must have deep, technical context.
2. **Roadmaps as Views**: Roadmaps are just visual interpretations. The underlying data is a massive, interconnected database of concepts.
3. **Topics as Entities**: Topics are independent data objects. "Docker" is the same entity whether viewed in the DevOps roadmap or the Backend roadmap.
4. **Visual Learning**: Text-heavy lists are exhausting. Spatial positioning, zooming, and panning help developers intuitively grasp the scope of a discipline.
5. **Scalable Architecture**: Hand-writing data doesn't scale. Michi uses automated LLM and Puppeteer verification pipelines to ingest and verify thousands of resources.

---

## 🚀 Getting Started

Follow these steps to set up Michi locally on your machine.

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/michi.git
   cd michi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Navigate to `http://localhost:3000` in your browser.

### Build Commands
To create a production-optimized build:
```bash
npm run build
npm run start
```

---

## 🤝 Contributing

We welcome contributions from the community! Whether it's adding a new roadmap, fixing a bug, or improving documentation, your help makes Michi better.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

*Please ensure any new topics added follow the strict 7-resource verification rule defined in `src/data/types.ts`.*

---

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <h3><em>"The map is not the territory, but a beautiful map makes the territory worth exploring."</em></h3>
  <p>Built with ❤️ by the open-source community.</p>
</div>
