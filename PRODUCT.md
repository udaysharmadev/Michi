# Product

## Register

product

## Users

Developers and engineering students — ranging from complete beginners exploring their first roadmap to senior engineers brushing up on system design or SRE practices. They arrive with a specific learning goal (e.g. "learn Kubernetes" or "prepare for a backend interview") and expect structured, opinionated guidance rather than an open-ended content library. Usage context: desktop browser during study sessions, occasionally mobile for quick reference.

## Product Purpose

Michi maps the knowledge landscape for software engineering disciplines. Each roadmap is a directed graph of topics with curated resources (articles, videos, courses) in English and Hindi. The product exists to answer: "What should I learn next, and in what order?" Success looks like a developer following a roadmap from start to finish, marking topics complete, and building real confidence in a domain.

## Brand Personality

Precise, confident, minimal. The voice is that of a senior engineer who respects the learner's time — direct, no fluff, no hype. Visual tone: clean geometry, strong typography hierarchy, subtle depth through borders and tonal shifts rather than heavy shadows or gradients. Feels like opening a well-organized notebook, not a marketing landing page.

## Anti-references

- SaaS-cream aesthetics (warm beige/sand/ivory backgrounds, soft rounded cards, "friendly" gradients)
- Generic AI tool marketing (glassmorphism, neon accents on dark, purple-to-blue gradients)
- Tutorial-site clutter (dense sidebar navigation, ads, cookie banners, popup modals)
- Gamification overload (badges, streaks, leaderboards dominating the UI)
- Dashboard maximalism (chart-heavy homepages, data-for-impressiveness sake)

## Design Principles

1. **Structure is the product.** The roadmap graph IS the interface. Don't hide it behind dashboards or content lists.
2. **Opinionated curation over volume.** Every resource earns its place. Show fewer, better links rather than exhaustive lists.
3. **Progress is visible.** Topic completion, progress bars, and reading state should be clear at a glance without being noisy.
4. **Respect the learner's time.** No unnecessary steps, no decorative animations that delay content, no friction between intent and action.
5. **Bilingual by design.** English and Hindi resources coexist naturally, not as separate surfaces.

## Accessibility & Inclusion

- WCAG 2.1 AA compliance target
- Reduced motion: all entrance animations respect `prefers-reduced-motion`
- Color contrast: body text ≥4.5:1, large text ≥3:1 against background
- Keyboard navigation: full tab order through roadmap nodes and sidebar
- Screen reader: semantic landmarks, ARIA labels on interactive roadmap nodes
