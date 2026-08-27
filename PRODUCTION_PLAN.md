# Michi — Production Plan

> **Baseline audit date**: 27 August 2026
> **Method**: static + runtime analysis of all 24 content directories, 48 data files,
> 515 topic nodes and 2,774 resource URLs, plus the app, viewer, auth and infra layers.
> **Verdict**: the user's estimate of *"1% done"* is roughly correct. ~2.5% of the
> advertised product is production-grade.

---

## Part 0 — Ground truth (the audit)

### 0.1 The catalogue is 12% real

`src/data/roadmaps.ts` advertises **36 roadmaps / 4,160 topics**. What exists:

| | Count |
|---|---|
| Roadmaps advertised in `roadmaps.ts` | **36** |
| Content directories on disk | 24 |
| Slugs wired into `src/data/content/registry.ts` | **18** |
| Slugs that render a "Coming Soon" placeholder (HTTP 200, indexed in sitemap) | **18** |
| Topic nodes advertised | 4,160 |
| Topic nodes that actually exist | **515 (12.4%)** |

Every roadmap over-claims. The worst offenders: `fullstack` advertises 200 topics and has
14. `software-architect` advertises 180 and has 15. `cyber-security` advertises 170 and has
21. Ten slugs (`platform`, `security-engineer`, `cloud-security`, `app-sec`, `pentester`,
`eng-manager`, `ai-researcher`, `computer-vision`, `nlp`, `design-engineer`, `tpm`,
`scrum-master`) have **no content directory at all**.

### 0.2 Of the 515 topics that exist, 48% are fabricated

Every topic was graded against the PRD's own contract (title + 7 resources covering all 7
types + no duplicate URLs + `whyLearnThis`/`whenIsItUsed`/`whereIsItUsed`/`whatComesNext` +
≥3 learning outcomes + ≥2 common mistakes + ≥2 real-world applications):

| Tier | Definition | Topics | Share |
|---|---|---|---|
| **A — production-ready** | Meets the full contract | **101** | 19.6% |
| **B — renders, but thin** | Real resources, missing deep-knowledge layer or incomplete 7-kit | 152 | 29.5% |
| **C — fabricated filler** | Machine-generated boilerplate prose + placeholder resources | **247** | 48.0% |
| **D — broken** | Renders as an empty card: no title, no resources | 15 | 2.9% |

Tier A is **frontend only** (18 of 56 topics fully clear the bar; the rest of frontend,
plus all of backend and fullstack, sit in B because `commonMistakes` has 2 entries not 3).
**101 of 4,160 advertised topics = 2.4% of the product is production-grade.**

Tier C is verifiably synthetic. Every one of the 247 topics in `devops`, `cloud`,
`ai-engineer`, `cyber-security`, `blockchain`, `game`, `machine-learning`, `system-design`,
`data-scientist`, `dba`, `llm`, `mlops`, `sre`, `product-manager` contains strings like:

```
"whyLearnThis": "This is a foundational concept required for career progression."
"whenIsItUsed":  "Used continuously throughout your day-to-day workflow."
"commonMistakes": ["Skipping the fundamentals.", "Not reading the official documentation.", …]
```

…identical across all 247 topics. Their "7 resources" are the **same URL repeated into 5–7
slots** with different labels:

```
{ "type": "official",     "url": "https://ubuntu.com/tutorials/command-line-for-beginners" }
{ "type": "article",      "url": "https://ubuntu.com/tutorials/command-line-for-beginners" }
{ "type": "cheat_sheet",  "url": "https://ubuntu.com/tutorials/command-line-for-beginners" }
{ "type": "deep_dive",    "url": "https://ubuntu.com/tutorials/command-line-for-beginners" }
```

This is the single most damaging thing in the repo. It is worse than an empty roadmap,
because it looks finished. Git history records these as "✅ Complete"; the PRD reports them
at 100%. **The reporting layer is lying, so no one is fixing it.**

### 0.3 Resource-layer defects (the part that matters most)

2,774 URLs across the whole corpus:

| Defect | Count | Why it's a problem |
|---|---|---|
| Unique URLs | 1,920 / 2,774 | **30.8% duplication rate** with no dedup mechanism |
| Topics reusing one URL across ≥2 different resource *types* | **174** | A cheat sheet and a deep dive cannot be the same page |
| Topics missing ≥1 of the 7 required types | **151** | The "7-resource kit" contract is unmet on 29% of topics |
| `github.com/topics/<tag>` used as the `github` resource | **65** | A tag search page, not a curated repo |
| `en.wikipedia.org` used as a learning resource | **141** | Encyclopedia entries are not tutorials |
| YouTube links | **910 (32.8%)** | Zero availability/duration/age metadata; highest churn source on the web |
| Live-verified URLs | **0** | No link checker exists, ever ran, or is scheduled |
| Resources carrying `lastVerified`, `publishedAt`, author, or provenance | **0** | No freshness or accountability model |

There is **no validation, no link health check, no deduplication, no provenance, and no
freshness policy** anywhere in the codebase. Resource correctness is currently maintained by
hope.

### 0.4 Three incompatible data schemas

| Schema | Roadmaps | Shape |
|---|---|---|
| **S1 — hand-authored** | frontend, backend, fullstack, mobile, android, ios | `RoadmapContentNode`, `data.title`, `parentId` + `row`/`col` |
| **S2 — generated boilerplate** | devops, cloud, ai-engineer, cyber-security, blockchain, game, machine-learning, system-design | Same shape as S1, filler content |
| **S3 — raw React Flow** | data-engineer, qa-engineer, software-architect, ux-ui, data-scientist, dba, llm, mlops, product-manager, sre | `@xyflow/react` `Node`, **`data.label`** not `title`, absolute positions, **no `parentId`**, plus a `type: "roadmap"` node |

**S3 roadmaps are visually broken on the live site.** Two independent failures:

1. `src/components/roadmap-viewer/roadmap-canvas.tsx:24` registers only `topic` and
   `section` node types. S3's `type: "roadmap"` node has no renderer → React Flow error +
   fallback default node. 10 roadmaps affected.
2. `src/components/roadmap-viewer/use-layout.ts:28` groups topics under sections via
   `parentId`. S3 nodes have none, so every topic falls into `standaloneNodes` and keeps its
   raw authored coordinate, while each section is placed at its own authored coordinate with
   a hardcoded 400×300 box and zero children. **Sections and topics overlap.**

Additionally, in `ux-ui` only **3 of 15** graph node IDs match keys in `topics.ts`:
12 nodes render as blank cards, and 6 authored topic objects are never rendered at all.

### 0.5 Fabricated platform features

Git history claims *"Phase 4 — Authentication, User Profiles, and Cloud Progress Sync"* and
*"Phase 5 — Bookmarks, Favorites System, and Analytics Engine"*. In reality:

| Claim | Reality |
|---|---|
| GitHub / Google OAuth | `src/features/auth/auth-context.tsx:81` — `setTimeout(600ms)` then fabricates a user with a hardcoded Unsplash avatar and `developer@github.com`. No OAuth, no token, no server. |
| Cloud progress sync | `src/hooks/use-cloud-sync.ts:13` — `setTimeout(800ms)` then sets status to `"synced"`. Syncs nothing. |
| Auth API | `src/app/api/auth/session/route.ts` — returns `{ authenticated: false }` unconditionally. |
| Database | `prisma.config.ts` points at `prisma/schema.prisma`. **That file and directory do not exist**, and `prisma` is not in `package.json`. `docker-compose.yml` starts an unused Postgres. |
| Analytics engine | `src/lib/analytics.ts` — `localStorage`, capped at 200 events, never leaves the device. No product telemetry exists. |

### 0.6 Engineering hygiene

- **0 tests.** No test runner installed. No `.github/` directory — **no CI of any kind.**
- **17 debug scripts committed to the repo root**: `test-elk.mjs`,
  `test-elk-bisect{,2}.mjs`, `test-elk-frontend{,2}.mjs`, `test-elk-print{,2..7}.mjs`,
  `test_yt.js`, `fix-resources.js`, `rebuild-resources.js`, `update-ios-resources.js`,
  `update-mobile-resources.js`. Plus a 132 KB `tsconfig.tsbuildinfo`.
- **`elkjs` is a dependency and is never imported.** The PRD and README both advertise
  "ELK.js layout engine integration"; `use-layout.ts` is a hand-rolled synchronous grid.
  `ts-morph`, `puppeteer`, `cheerio`, `yt-search` are also unused in `src/`.
- `src/data/content/registry.ts:46` wraps every dynamic import in `try/catch` and returns
  `null` — **import failures are silently converted into "Coming Soon" pages.**
- `src/app/manifest.ts` references `/icon-192.png` and `/icon-512.png`. `public/` contains
  only six SVGs. **PWA install is broken.**
- `src/app/sitemap.ts` hardcodes `https://michi.dev` and submits all 36 slugs at priority
  0.8 — including the 18 placeholder pages. **18 near-duplicate thin pages offered to
  Google.**
- `package.json` `"name": "temp"`. No `LICENSE` file despite MIT badges in the README.
- No CSP, no rate limiting, no error tracking, no `.env.example`.

### 0.7 What is genuinely good

Worth protecting — this is the 12% that works:

- The **viewer engine** is well-built: `roadmap-renderer`, `roadmap-canvas`, `roadmap-node`,
  `node-details-drawer`, `command-palette`, hover-connectivity dimming, progress borders,
  sessionStorage layout cache. Clean, memoized, readable.
- The **frontend / backend / fullstack content** (116 topics, ~810 resources) is real,
  specific, human-quality work. `n_vc_4` (Pull Requests) is a good model for the bar.
- The **design language** is coherent: OKLCH tokens, Outfit + Geist, dark mode, section
  colour system.
- `tsc --noEmit` passes clean. Security headers exist in `next.config.ts`.

### 0.8 The root cause

Resources live as **hand-written TypeScript object literals inside 48 files with three
incompatible schemas, validated by nothing**. That makes the most important asset in the
product the least verifiable thing in the repo, and it makes fabrication cheaper than
curation. Every plan below is downstream of fixing that.

---

## Plan overview

Five phases. **Phase 2 is the centre of gravity** — resources become a validated,
verified, deduplicated, dated data asset with a curation pipeline behind them.

| Phase | Theme | Duration | Exit condition |
|---|---|---|---|
| **1** | Truth & Foundation | 3 weeks | Catalogue tells the truth. CI blocks bad data. One schema. |
| **2** | The Resource Engine | 5 weeks | Every published resource is live-verified, typed, deduped, dated, scored. |
| **3** | Content Buildout | 8 weeks | 12 roadmaps × ~60 topics, all Tier A, ~5,000 verified resources. |
| **4** | Real Platform | 6 weeks | Real auth, real DB, real sync, real telemetry, fixed canvas, WCAG AA. |
| **5** | Hardening & Launch | 6 weeks | SLOs met, budgets enforced, observability live, launched. |

**Total: 28 weeks.** Assumes **2 engineers + 1 full-time content curator** (the curator is
non-negotiable — see §Staffing). Phases 2 and 3 overlap by design: the engine ships first,
then the curator runs at full rate against it.

---

## Phase 1 — Truth & Foundation (weeks 1–3)

**Goal:** make the codebase incapable of lying. Nothing ships that a machine hasn't checked.

### 1.1 One canonical schema

Collapse S1/S2/S3 into a single Zod-validated schema. Zod, not TypeScript alone — types
vanish at runtime and the content pipeline needs runtime checks.

```
src/data/schema/
  resource.ts        # Resource + ResourceType, refined
  topic.ts           # Topic entity (roadmap-independent)
  roadmap.ts         # Roadmap = ordered sections referencing topic IDs
  index.ts
```

```ts
// src/data/schema/resource.ts
export const ResourceType = z.enum([
  'official','video_en','video_hi','article','github','cheat_sheet','deep_dive',
]);

export const Resource = z.object({
  id:          z.string().regex(/^res_[a-z0-9]{12}$/),   // content-addressed from canonical URL
  type:        ResourceType,
  title:       z.string().min(8).max(120),
  url:         z.string().url().startsWith('https://'),
  source:      z.string(),                               // normalised host, e.g. "developer.mozilla.org"
  author:      z.string().optional(),                    // channel / org / person
  lang:        z.enum(['en','hi']),
  publishedAt: z.string().date().optional(),
  durationSec: z.number().int().positive().optional(),   // videos
  lastVerified:z.string().date(),                        // REQUIRED — set by the checker, not by hand
  health:      z.enum(['ok','redirect','dead','blocked','stale']),
  score:       z.number().min(0).max(100),               // rubric output, see 2.4
  provenance:  z.enum(['curated','harvested','community']),
  paywalled:   z.boolean().default(false),
});
```

```ts
// src/data/schema/topic.ts — the 7-kit contract, enforced
export const Topic = z.object({
  id:    z.string().regex(/^t_[a-z0-9-]+$/),   // GLOBAL, not roadmap-local (see 3.1)
  title: z.string().min(2),
  slug:  z.string(),
  status: z.enum(['draft','review','published']),   // ← nothing but `published` renders
  difficulty: z.enum(['Beginner','Intermediate','Advanced']),
  estimatedTime: z.string().regex(/^\d+ (min|hours?|days?)$/),
  icon: z.string().refine(k => k in iconMap, 'icon must exist in iconMap'),

  whyLearnThis:  z.string().min(80),
  whenIsItUsed:  z.string().min(40),
  whereIsItUsed: z.string().min(40),
  whatComesNext: z.string().min(10),
  learningOutcomes:      z.array(z.string().min(15)).min(3).max(8),
  commonMistakes:        z.array(z.string().min(25)).min(3).max(6),
  realWorldApplications: z.array(z.string().min(20)).min(2).max(5),

  resourceIds: z.array(z.string()).length(7),
  prerequisites: z.array(z.string()).default([]),
})
.superRefine(banBoilerplate)     // rejects the 247 known filler strings, verbatim
.superRefine(requireAll7Types)   // one resource per type, exactly
.superRefine(banDuplicateUrls)   // no URL in two slots  → kills the 174 defects
.superRefine(banBadSources);     // no github.com/topics/, no wikipedia as `official`
```

`banBoilerplate` seeds from the exact 14 strings the audit found. It is a **permanent
regression guard**: filler can never re-enter the corpus.

### 1.2 The validator + CI gate — the linchpin

`scripts/validate-content.ts`, run by `npm run validate` and by CI on every PR:

| Check | Fails the build when |
|---|---|
| Schema | Any topic or resource fails Zod |
| Graph integrity | A node ID has no topic; a topic is never rendered; an edge points nowhere |
| Registry integrity | A slug in `roadmaps.ts` has no content dir, or a content dir isn't wired |
| Count honesty | `estimatedTopics` ≠ actual topic count |
| Duplicate URLs | Same URL in ≥2 slots of one topic |
| Type coverage | A published topic lacks any of the 7 types |
| Boilerplate | Any known filler string appears |
| Icon validity | `data.icon` not present in `iconMap` (catches the 65 wrong `SiReact`) |
| Cycles | Prerequisite graph is not a DAG |

CI (`.github/workflows/ci.yml`): `typecheck` → `lint` → `validate` → `test` → `build`.
Branch protection on `main`. **This gate is what makes every later phase safe.**

### 1.3 Quarantine, don't delete

Add `status` to every topic and roadmap. Then:

- **247 Tier C topics** → `status: 'draft'`. They stay in git as raw material for Phase 3's
  taxonomy work; they stop rendering immediately.
- **15 Tier D topics** → `draft`.
- **10 roadmaps with no content** → removed from `roadmaps.ts`, moved to a
  `plannedRoadmaps` list rendered as a non-linkable "Coming next" section on `/roadmaps`.
- 8 S3 roadmaps → `draft` until migrated (§1.4).

After Phase 1 the site honestly presents **3 roadmaps** (frontend, backend, fullstack —
116 real topics) plus mobile/android/ios in a clearly-labelled *Beta: resources only, no
deep-dive layer* state. That is a smaller, credible product. Shipping 18 half-real roadmaps
is worse than shipping 3 real ones.

### 1.4 Migrate S3 → canonical

Codemod (`scripts/migrate-schema.ts`, using the already-installed `ts-morph`):
`data.label` → `data.title`; strip `type: "roadmap"` nodes; derive `parentId` + `row`/`col`
from authored coordinates; reconcile the ux-ui ID mismatch by hand (12 nodes). Verify with
Playwright screenshots per roadmap — these are the ones that render broken today.

### 1.5 Fix the lies in the app layer

- `registry.ts`: replace the 18-case `switch` with generated auto-discovery; **remove the
  `try/catch`** so import failures fail the build instead of silently 404ing.
- `roadmaps.ts`: derive `estimatedTopics` from content at build time. Delete the field as a
  hand-maintained number.
- `sitemap.ts`: emit `published` roadmaps only. `NEXT_PUBLIC_SITE_URL` env var, not
  hardcoded `michi.dev`.
- `manifest.ts`: generate the missing `icon-192.png` / `icon-512.png` / `apple-touch-icon`.
- Rewrite `PRD.md` §6 progress tables to be **generated** by `npm run report:content`.
  Hand-maintained progress tables are how the project got here.

### 1.6 Repo hygiene

Delete the 17 root debug scripts and `tsconfig.tsbuildinfo` (add to `.gitignore`). Drop
unused deps (`elkjs` until §4.5 actually uses it, `yt-search`, `cheerio`, `puppeteer` →
move to the pipeline package in Phase 2). Rename `"temp"` → `"michi"`. Add `LICENSE` (MIT),
`.env.example`, `CONTRIBUTING.md`, Prettier, stricter ESLint, `tsconfig` `strict` +
`noUncheckedIndexedAccess`. Install Vitest + Playwright + axe-core and write the first
tests: **the validator's own test suite, using the 247 known-bad topics as fixtures.**

### Phase 1 exit criteria

- [ ] One schema; every content file validates
- [ ] `npm run validate` green; CI blocks PRs on it
- [ ] Zero fabricated content rendering; Tier C/D quarantined as `draft`
- [ ] Catalogue counts match reality exactly
- [ ] S3 roadmaps render correctly (screenshot-verified)
- [ ] Generated content report replaces hand-written progress tables
- [ ] Repo clean, licensed, linted, tested, CI-gated

---

## Phase 2 — The Resource Engine (weeks 4–8) ★ the core of the product

**Goal:** a resource is not a string in a file. It is a verified, dated, scored, deduplicated
record with provenance and a freshness SLA — and nothing reaches a user without passing
through the engine.

### 2.1 Global resource registry

Today MDN's Fetch API page appears in ≥4 files as ≥4 unrelated literals. Invert it: one
record, many references.

```
src/data/resources/
  registry.json        # id → Resource, the single source of truth
  health.json          # id → last check result (CI-written, git-committed for auditability)
  index.ts             # typed loader + O(1) lookups
```

- `id = 'res_' + base32(sha256(canonicalUrl)).slice(0,12)` — content-addressed, so
  duplicates are **impossible by construction**. The 30.8% reuse rate becomes intentional
  sharing with correct attribution instead of accidental copy-paste.
- Topics hold `resourceIds: string[]` (length 7). Fixing a dead link once fixes it
  everywhere.
- URL canonicalisation before hashing: strip `utm_*`/`si`/`feature`, normalise
  `youtu.be/X` → `youtube.com/watch?v=X`, force https, lowercase host, drop trailing slash.
  This alone collapses a large share of the existing corpus.

### 2.2 Link health service

`packages/resource-pipeline/` (its own workspace — Puppeteer and API clients must never
enter the Next.js bundle).

**Generic HTTP checker.** `HEAD`, `GET` fallback, 10s timeout, 3 retries with jitter,
polite concurrency 8, per-host rate limiting, ETag caching. Classifies:
`ok` / `redirect` (records the target — a redirect chain is a curation signal) /
`dead` (4xx/5xx) / `blocked` (403/429/bot wall) / `timeout`.

**YouTube (910 URLs, 32.8% of the corpus — the highest-risk class).** YouTube Data API v3
`videos.list`, batched 50 IDs/request:
- Existence, privacy status, **`regionRestriction`** (Indian learners are a stated primary
  audience — a US-only video is dead to them)
- `duration` → reject <4 min for a primary tutorial slot; reject >4 h for `video_en`
- `publishedAt` → **volatility-aware staleness**: React/Next/AWS content older than 2 years
  is flagged; SQL/HTTP/algorithms content is not
- `viewCount`, `likeCount`, `channelId`, `channelSubscribers` → score inputs
- Captions availability → accessibility input
- **Language verification** — `video_hi` must genuinely be Hindi. Check
  `defaultAudioLanguage` and title script. The 409 `video_hi` slots have never been checked.

**GitHub (380 URLs).** REST API: stars, `archived`, `pushed_at`, license, default branch.
Reject `archived: true`, `pushed_at` > 2 years, stars < 200 for a `github` slot, and
**reject every `github.com/topics/*` URL outright** — that kills all 65 in one rule.

**Nightly CI job** (`.github/workflows/link-health.yml`) writes `health.json`, opens an
issue for every newly-`dead` resource, and fails the nightly build if
`dead > 0.5%` of published resources. Any `dead` resource is auto-hidden from the UI within
24 h with a graceful "we're re-verifying this" state.

### 2.3 Curation pipeline

Six stages, each independently runnable and resumable:

```
1  HARVEST   Per topic, gather 30–60 candidates from a fixed source allowlist:
             official docs sitemaps, MDN, YouTube search (top-N by relevance+views,
             per language), GitHub search (awesome-*, stars>500), curated indices
             (freeCodeCamp, web.dev, DigitalOcean, Baeldung, Real Python, …).
2  NORMALISE Canonicalise URL → content-address → dedupe against registry.json.
             Extract title/author/date/duration from oEmbed + OpenGraph + APIs.
3  GATE      Hard automated rejects, no human time spent: dead, blocked, paywalled,
             archived, region-locked, wrong language, too short/long, banned source,
             AI-spam heuristics (title patterns, channel age, view/like ratio).
4  GRADE     LLM-assisted scoring against the §2.4 rubric. The model reads the topic's
             learning outcomes and the resource's actual content and returns a score
             per dimension WITH quoted evidence. Never a bare number.
5  REVIEW    Human approval queue, ranked by score. Curator sees the top 3 candidates
             per slot side by side and picks. Target: ~4 min per 7-resource kit.
6  PUBLISH   Writes registry.json + topic resourceIds, runs `npm run validate`,
             opens a PR. Every resource change is a reviewable diff.
```

**Stage 4 is assistive, stage 5 is authoritative.** No resource is ever published on a
model's word alone — that is precisely how the 247 fabricated topics happened. The pipeline
is designed so the *cheapest* path is the *verified* path.

### 2.4 Quality rubric

Six dimensions, 0–5 each, weighted → 0–100. Published minimum: **70**. Slot-specific
weights (a `cheat_sheet` is graded on scannability; a `deep_dive` on depth).

| Dimension | What it measures | Weight |
|---|---|---|
| Authority | Official source / recognised author / high-signal community | 25 |
| Pedagogical fit | Actually teaches *this topic's* stated learning outcomes | 25 |
| Currency | Age vs the topic's volatility class | 20 |
| Completeness | Covers the topic, not a fragment | 15 |
| Accessibility | Free, no signup, captions, readable, mobile-usable | 10 |
| Production quality | Audio/video/prose quality, code correctness | 5 |

**Slot rules** (validator-enforced, derived directly from the audit's findings):

- `official` — must be first-party domain for the technology. **Wikipedia is never
  `official`** (fixes 141 misuses).
- `article` / `deep_dive` / `cheat_sheet` — must be three *different* URLs (fixes 174).
- `github` — real repo, ≥200 stars, active, non-archived. **Never a `/topics/` page.**
- `video_hi` — API-verified Hindi audio. Not a title guess.
- `video_en` / `video_hi` — 4 min–4 h, not region-locked for IN or US.
- No URL may appear twice within one topic. Ever.

### 2.5 Feedback loop

Ship this in Phase 2 even though the backend lands in Phase 4 — queue events locally, flush
when auth exists:

- **"Report this resource"** on every resource row → `dead` / `wrong language` /
  `paywalled` / `outdated` / `off-topic`. Two reports auto-flag for re-review.
- **Click-through tracking** per resource → a resource nobody clicks is a bad resource.
- **Helpful / not helpful** thumbs, aggregated into the score as a live 7th dimension.

This closes the loop: users become the continuous verification layer that no crawler can
replace.

### 2.6 Curation UI (internal)

`/admin` behind auth: the review queue, side-by-side candidates with metadata and score
breakdown, one-key approve/reject, the health dashboard (dead/stale/blocked by roadmap),
and the flag queue. Without this, stage 5 happens in a spreadsheet and the pipeline rots.

### Phase 2 exit criteria

- [ ] Global content-addressed registry; zero accidental duplicate URLs corpus-wide
- [ ] 100% of published resources have `lastVerified` within 30 days and `health: 'ok'`
- [ ] Zero `github.com/topics/*`, zero Wikipedia-as-`official`, zero same-URL-two-slots
- [ ] All 910 YouTube links verified: exists, unrestricted, correct language, sane duration
- [ ] Nightly health CI live; dead-link SLO enforced at <0.5%
- [ ] Pipeline produces a reviewed, publishable 7-kit in **≤5 curator-minutes**
- [ ] `/admin` queue + health dashboard live
- [ ] The 101 existing Tier A topics re-verified through the engine (dogfooding)

---

## Phase 3 — Content Buildout (weeks 9–16)

**Goal:** with the engine proven, produce real content at volume. This is where the product
becomes worth using.

### 3.1 Build the topic library the PRD already promised

The PRD's stated core principle — *"A topic like Docker is ONE data entity"* — **is not
implemented.** Topic IDs are roadmap-local (`n_hc_6`, `n_linux_1`), so Docker is duplicated
across DevOps, Backend and Cloud with divergent resources.

Fix it properly:

```
src/data/topics/            # ~700 global topic entities, one file per topic
  t_docker-fundamentals.json
  t_http-basics.json
src/data/roadmaps/          # a roadmap is an ORDERED VIEW over topic IDs
  devops.json               # { sections: [{ title, color, topicIds: [...] }], edges }
```

This delivers what the product claims, and it makes Phase 3's economics work: ~700 topics
cover 12 roadmaps because ~35% of topics are shared. Curate once, reuse everywhere.

### 3.2 Ship order — depth before breadth

Twelve roadmaps, all Tier A. Sequenced by (search demand × topic reuse):

| Wave | Weeks | Roadmaps | New topics |
|---|---|---|---|
| 1 | 9–10 | frontend, backend, fullstack — **upgrade existing B→A** | 0 new, 116 upgraded |
| 2 | 11–12 | devops, system-design | ~110 |
| 3 | 13–14 | android, ios, mobile — **upgrade B→A** (add the missing deep-knowledge layer to all 92) | ~30 |
| 4 | 15 | cloud, data-engineer | ~100 |
| 5 | 16 | machine-learning, ai-engineer, cyber-security | ~150 |

**~700 topics, ~4,900 verified resources.** The remaining 24 advertised roadmaps stay in
`plannedRoadmaps` — visible as a roadmap for the product, not as broken pages.

Wave 1 is deliberately "no new roadmaps". Bringing 116 already-good topics to full Tier A
(and re-verifying their 810 resources through the engine) proves the pipeline on content the
team can judge, before betting eight weeks on it.

### 3.3 Production runbook

Per roadmap, a fixed 5-day cycle: SME outline & taxonomy → graph + prerequisite DAG →
deep-knowledge authoring → pipeline harvest + curator review → validate, screenshot, publish.
Every step has a checklist and a CI gate. Content velocity target: **~55 Tier A topics/week
sustained** with 1 curator + pipeline assist. Measured weekly; the plan adjusts to the
measured rate rather than the hoped-for one.

### 3.4 Hindi as a real dimension, not a slot

409 `video_hi` slots exist and none has been language-verified. Either commit properly —
Hindi resources curated by a Hindi speaker, verified via API, with a language toggle in the
drawer — or drop `video_hi` from the required 7 and make it optional. **Shipping unverified
Hindi slots to a stated primary audience is the worst of the three options.**
*Recommendation: commit properly. It is a genuine differentiator versus roadmap.sh.*

### Phase 3 exit criteria

- [ ] ~700 global topic entities; topic sharing across roadmaps working
- [ ] 12 roadmaps at 100% Tier A, validator-green
- [ ] ~4,900 resources, all engine-verified, all scored ≥70
- [ ] Zero `draft` content reachable in production
- [ ] `plannedRoadmaps` honestly presented
- [ ] Hindi decision made and executed

---

## Phase 4 — Real Platform (weeks 17–22)

**Goal:** replace every simulated feature with a real one, and close the telemetry loop that
Phase 2's scoring depends on.

### 4.1 Real authentication

Delete the `setTimeout` OAuth in `auth-context.tsx`. The repo already contains a `.clerk/`
directory — **recommendation: Clerk**, for speed and managed session security. Auth.js +
Postgres is the alternative if vendor independence matters more than 2 weeks.
Requirements either way: GitHub + Google OAuth, email magic link, real sessions
(httpOnly, SameSite, rotation), route protection via middleware, `/admin` gated by role,
and **guest mode preserved** — progress must work without an account.

### 4.2 Real database

Create the `prisma/schema.prisma` that `prisma.config.ts` has been pointing at all along.
Install Prisma. Managed Postgres (Neon or Supabase) for prod; keep `docker-compose.yml`
for local.

```
User            id, email, name, avatar, provider, role, createdAt
Progress        userId, topicId, state(not_started|learning|completed), updatedAt, deviceId
Bookmark        userId, topicId | resourceId, createdAt
Note            userId, topicId, markdown, updatedAt
ResourceFeedback userId, resourceId, kind, comment, createdAt   ← feeds §2.5
ResourceEvent    resourceId, topicId, userId?, kind(view|click|complete), ts  ← feeds §2.4
Streak          userId, date, activeMinutes
```

`ResourceFeedback` and `ResourceEvent` are the point of this phase. **They are how resource
quality keeps improving after launch instead of decaying.**

### 4.3 Real sync

Offline-first: localStorage/IndexedDB is the write path, server is the durable replica.
Last-write-wins per `(userId, topicId)` with `updatedAt`; monotonic promotion for progress
state (`completed` never regresses to `learning` from a stale device). Batched flush,
exponential backoff, honest sync indicator (`synced` / `pending` / `offline` / `error` — the
current one only ever says `synced`). Full merge-on-login for guest→account upgrade.

### 4.4 Real analytics

Replace the localStorage stub with a real pipeline (PostHog self-hosted, or Vercel
Analytics + a custom events table). Instrument: roadmap views, topic opens, **resource
clicks per resource ID**, completion funnels, drop-off nodes, search queries with zero
results (→ content gaps), time-to-first-resource-click. Consent banner, IP anonymisation,
GDPR-compliant retention.

### 4.5 Fix the canvas properly

- **Use ELK, or remove it.** `elkjs` has been an unused dependency since day one while the
  README advertises it. Either wire real hierarchical layout with a Web Worker + async
  layout + skeleton, or delete the dep and stop claiming it. *Recommendation: wire it* —
  the hand-rolled grid can't handle cross-section prerequisite edges, which is the whole
  point of a knowledge graph.
- Virtualise: 700-topic roadmaps need `onlyRenderVisibleElements` + LOD (hide badges and
  icons below 0.5 zoom).
- Mobile/tablet: the canvas is unusable under 768px. Ship a **list/accordion view** that
  reuses the same data and the same drawer — not a pinch-zoom canvas.
- Deep links: `/roadmaps/frontend?topic=t_pull-requests` opens the drawer and centres the
  node, server-rendered for SEO.

### 4.6 Accessibility to WCAG 2.2 AA

Real keyboard navigation on the canvas (arrow keys between connected nodes, Enter to open,
Esc to close), focus trap and restore in the drawer, `aria-live` on progress changes, skip
links, verified contrast on all six section colours in both themes, `prefers-reduced-motion`
honoured. Automated axe in CI + one manual screen-reader pass.

### Phase 4 exit criteria

- [ ] Real OAuth; zero simulated auth code remaining
- [ ] Prisma schema, migrations, seeds; `prisma.config.ts` points at something real
- [ ] Cross-device sync verified on 3 devices incl. offline→online and guest→account merge
- [ ] Resource click-through and feedback flowing into the Phase 2 score
- [ ] Canvas: ELK layout, virtualised, mobile list view
- [ ] axe clean; manual screen-reader pass signed off

---

## Phase 5 — Hardening & Launch (weeks 23–28)

### 5.1 Performance budgets, CI-enforced

LCP < 2.0s / INP < 200ms / CLS < 0.1 on mobile 4G. Route JS budget: 180 KB gzipped
(`/roadmaps/[slug]` is the risk — React Flow + ELK + 700 nodes). Lighthouse CI on every PR,
`@next/bundle-analyzer`, PPR for roadmap shells, `next/font` self-hosting, dynamic import of
the canvas below the fold, tree-shaken icons (currently pulling both `lucide-react` and
`react-icons`).

### 5.2 SEO — the compounding asset

**Per-topic pages are the biggest untapped win in the whole plan.** ~700 statically
generated `/topics/[slug]` pages, each with the deep-knowledge layer and its 7 verified
resources, each cross-linked to every roadmap containing it. That is 700 long-tail landing
pages targeting exactly the queries this audience searches ("what is DNS", "learn docker
fundamentals").

Plus: `Course` + `LearningResource` JSON-LD, generated OG images per roadmap and topic,
canonical URLs, breadcrumbs, real domain, Search Console. Only `published` content is ever
indexed — never repeat the 18-thin-pages mistake.

### 5.3 Security & compliance

CSP with nonces (headers exist; CSP does not), rate limiting on all mutating routes and
`/admin`, secrets in the platform's secret manager with `.env.example` in git, `npm audit` +
Dependabot in CI, `/admin` RBAC + audit log, `rel="noopener noreferrer"` on all 4,900
outbound links, privacy policy, terms, cookie consent, DSAR export/delete endpoints.
One external pentest before launch.

### 5.4 Observability & SLOs

Sentry (frontend + server, sourcemaps), uptime monitoring, structured logs, and a public
**content health dashboard**:

| SLO | Target |
|---|---|
| Uptime | 99.9% |
| Dead published resources | **< 0.5%** |
| Resources verified within 30 days | **> 99%** |
| Topics at Tier A among published | **100%** |
| p95 roadmap page load | < 2.5s |
| Error rate | < 0.1% of sessions |

Alerting on each. The dead-link SLO is a **release blocker**, not a dashboard number — it is
the one metric that expresses whether the product's core promise holds.

### 5.5 Testing

Unit (Vitest): schema refinements, scoring rubric, URL canonicalisation, progress merge,
prerequisite DAG. Integration: pipeline stages against recorded API fixtures; auth and sync
routes. E2E (Playwright): browse → open topic → click resource → mark complete → reload →
still complete; guest→login merge; offline→online sync. Visual regression: one screenshot
per published roadmap (this is what catches an S3-style layout break). A11y: axe on every
route. Load: k6 at 10× expected peak.

### 5.6 Launch

Staging with prod-like data → 10% canary → 100%. Runbooks for dead-link spike, pipeline
failure, DB failover, rollback. Weekly content-freshness cron. Public
`CONTRIBUTING.md` + resource-submission PR template routing community submissions into the
Phase 2 pipeline as `provenance: 'community'` — so the engine scales past the team.

### Phase 5 exit criteria

- [ ] All budgets and SLOs met in production for 7 consecutive days
- [ ] Lighthouse ≥ 95 across all four categories on key routes
- [ ] 700 topic pages indexed; structured data validating
- [ ] Pentest findings resolved; CSP enforced
- [ ] Full test suite green in CI; visual regression baselined
- [ ] Runbooks written; on-call rotation staffed
- [ ] Launched

---

## Cross-cutting

### Definition of Done for a resource

A resource may reach a user only if **all** hold:

1. Live-verified within 30 days (`health: 'ok'`)
2. HTTPS, no auth wall, no paywall, no region block for IN or US
3. Correct type slot per §2.4 rules
4. Language API-verified
5. Rubric score ≥ 70 with recorded evidence
6. Human-approved by a named curator (`provenance`, `reviewedBy`, `reviewedAt`)
7. Unique within its topic
8. Currency appropriate to the topic's volatility class

### Definition of Done for a topic

Tier A per §0.2, plus 7 DoD-passing resources, plus a validated position in the
prerequisite DAG, plus a rendered screenshot in the visual baseline.

### Staffing

The **full-time content curator is the load-bearing role.** Two engineers can build the
engine in 5 weeks; nobody can hand-write 4,900 verified resources as a side task — the
attempt to do so is exactly what produced the 247 fabricated topics. The engine exists to
make one curator as productive as ten, not to remove the curator.

### Guiding principles

1. **Nothing ships that a machine hasn't checked.** The validator is the product's
   conscience.
2. **An honest gap beats a fabricated fill.** A "Coming soon" page costs a bounce. A
   fake resource costs trust, permanently.
3. **Resources are data, not code.** Content-addressed, deduplicated, dated, scored,
   traceable to a named reviewer.
4. **Verification is continuous.** The web rots. A resource verified once is a resource
   unverified.
5. **Depth before breadth.** 12 excellent roadmaps beat 36 shallow ones. The competitor to
   beat (roadmap.sh) already won breadth; depth is the open position.
6. **Progress reports are generated, never written.** Hand-maintained status tables are how
   48% fabricated content came to be reported as 100% complete.

### The single highest-leverage decision

Phase 1's validator and Phase 2's engine are ~8 weeks of work that produce **zero new
content**. Skipping them to "just add roadmaps faster" is the path that got the project to
2.4% production-ready with 247 fabricated topics reported as done. Build the engine first.

---

*Baseline measured 27 August 2026 against commit `a178109`. All figures in Part 0 are
reproducible; Phase 1 turns them into `npm run report:content`.*
