/**
 * Promotes topics out of `draft` once the gate says they are editorially finished.
 *
 * ## Why this is computed rather than hand-listed
 *
 * `publishStatus` decides how strictly a topic is validated, so it has to be set on
 * individual records — but it will be set three times over the life of this project:
 * once now, once after Phase 2 supplies verified resource languages, and once after
 * Phase 3 rewrites the generated prose. A hand-kept list of 506 ids would be wrong
 * within a week. So the criterion is expressed once, here, and re-applied by running
 * the script again.
 *
 * ## The criterion
 *
 * A topic is ready for `review` when it produces **no errors at `published`** other
 * than ones this repository has explicitly declared as awaiting an external
 * verification step — see {@link AWAITING_VERIFICATION}. Today that is exactly
 * `resource.lang.*`: 350 topics do not state the language of their video resources,
 * and the honest fix is for the Phase 2 pipeline to check each video and record what
 * it finds. Stamping `lang: 'hi'` on every `video_hi` slot by hand would assert
 * something nobody verified and would make `resource.lang.slot_mismatch` — the rule
 * that exists because the Hindi slot silently filled up with English videos —
 * impossible to trigger ever again.
 *
 * ## What it will not do
 *
 * - **It never promotes to `published`.** That would be circular: the gate would be
 *   deciding that content passes the bar and then raising the bar to match. Reaching
 *   `published` stays a human decision made against a green `review`.
 * - **It never demotes.** A status somebody set by hand outranks anything computed
 *   here. If a declared status no longer holds up, the gate reports that as errors,
 *   which is the loud outcome rather than a quiet rewrite.
 *
 * Promotion is not cosmetic. A `draft` topic has its quality rules suppressed
 * entirely, so replacing a real description with "This is an important topic" would
 * pass silently. At `review` that becomes a visible warning, and the per-code
 * baseline in `validate-content.mts` fails CI on the increase.
 *
 * Run with `node --import tsx` — not `tsx/esm`.
 *
 *   npm run promote            # print the plan, change nothing
 *   npm run promote -- --write # apply it
 */

import { Node, Project, QuoteKind, SyntaxKind } from 'ts-morph';
import { join } from 'node:path';

import { type PublishStatus, validateTopic } from '../src/data/schema/index';
import { REPO_ROOT, loadContent } from './lib/load-content.mjs';

/* -------------------------------------------------------------------------- */
/* Criterion                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Issue codes that block `published` but must not block `review`, because the fix
 * belongs to a verification step rather than to a writer.
 *
 * Keep this list short and keep every entry justified. Anything added here is a rule
 * the gate stops enforcing for promotion purposes, so an unjustified entry is
 * indistinguishable from switching the rule off.
 */
const AWAITING_VERIFICATION: readonly { readonly pattern: RegExp; readonly because: string }[] = [
  {
    pattern: /^resource\.lang\./,
    because: 'Phase 2 must watch each video and record its actual language.',
  },
];

function isAwaitingVerification(code: string): boolean {
  return AWAITING_VERIFICATION.some((entry) => entry.pattern.test(code));
}

/** The highest status a topic's current content actually earns. */
function readiness(topic: unknown, path: string): PublishStatus {
  const outcome = validateTopic(topic, { path, defaultStatus: 'published' });
  const blocking = outcome.errors.filter((issue) => !isAwaitingVerification(issue.code));
  return blocking.length === 0 ? 'review' : 'draft';
}

const RANK: Record<PublishStatus, number> = { draft: 0, review: 1, published: 2 };

/* -------------------------------------------------------------------------- */
/* Plan                                                                       */
/* -------------------------------------------------------------------------- */

interface Promotion {
  readonly roadmap: string;
  readonly nodeId: string;
  readonly from: PublishStatus;
  readonly to: PublishStatus;
}

async function buildPlan(): Promise<{
  readonly promotions: readonly Promotion[];
  readonly unchanged: number;
  readonly alreadyAtOrAbove: number;
}> {
  const load = await loadContent();
  const promotions: Promotion[] = [];
  let unchanged = 0;
  let alreadyAtOrAbove = 0;

  for (const source of load.sources) {
    // `topics` is `unknown` on the loader's type because validating its shape is the
    // gate's job, not the loader's. Narrowed here rather than in the loader so this
    // script cannot accidentally rely on a shape the gate has not checked.
    const topics = source.topics as Record<string, unknown>;
    for (const [nodeId, topic] of Object.entries(topics)) {
      const declared = (topic as { publishStatus?: PublishStatus }).publishStatus ?? 'draft';
      const earned = readiness(topic, `${source.slug}.${nodeId}`);
      if (RANK[earned] <= RANK[declared]) {
        if (RANK[declared] > 0) alreadyAtOrAbove++;
        else unchanged++;
        continue;
      }
      promotions.push({ roadmap: source.slug, nodeId, from: declared, to: earned });
    }
  }

  return { promotions, unchanged, alreadyAtOrAbove };
}

/* -------------------------------------------------------------------------- */
/* Apply                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Writes `publishStatus` into each topic literal with ts-morph.
 *
 * A regex would be shorter and would eventually match the word `title` inside a
 * resource URL. The topic records are nested object literals inside a larger one, so
 * the edit needs a parser that knows which brace it is inside.
 */
function apply(promotions: readonly Promotion[]): { files: number; written: number } {
  const project = new Project({
    tsConfigFilePath: join(REPO_ROOT, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
    manipulationSettings: { quoteKind: QuoteKind.Double },
  });

  const byRoadmap = new Map<string, Promotion[]>();
  for (const promotion of promotions) {
    const existing = byRoadmap.get(promotion.roadmap);
    if (existing) existing.push(promotion);
    else byRoadmap.set(promotion.roadmap, [promotion]);
  }

  let written = 0;
  for (const [roadmap, items] of byRoadmap) {
    const path = join(REPO_ROOT, 'src', 'data', 'content', roadmap, 'topics.ts');
    const file = project.addSourceFileAtPath(path);
    const wanted = new Map(items.map((item) => [item.nodeId, item.to]));

    // The topic record is the one object literal whose properties are node ids. Its
    // own property initialisers are the topic objects.
    for (const literal of file.getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression)) {
      for (const property of literal.getProperties()) {
        if (!Node.isPropertyAssignment(property)) continue;
        const key = property.getName().replace(/^["']|["']$/g, '');
        const status = wanted.get(key);
        if (status === undefined) continue;

        const topic = property.getInitializer();
        if (!Node.isObjectLiteralExpression(topic)) continue;
        if (topic.getProperty('publishStatus') !== undefined) continue;

        // Placed before `resources` so the editorial fields stay together and the
        // long resource array stays last, matching how the records are written.
        const resourcesIndex = topic
          .getProperties()
          .findIndex((p) => Node.isPropertyAssignment(p) && p.getName().replace(/^["']|["']$/g, '') === 'resources');
        const at = resourcesIndex === -1 ? topic.getProperties().length : resourcesIndex;

        topic.insertPropertyAssignment(at, {
          name: 'publishStatus',
          initializer: `"${status}"`,
        });
        wanted.delete(key);
        written++;
      }
    }

    if (wanted.size > 0) {
      throw new Error(
        `${roadmap}/topics.ts: could not locate ${wanted.size} topic literal(s): ${[...wanted.keys()].join(', ')}. ` +
          'Nothing was saved. The file shape is not what this codemod assumes.',
      );
    }
    file.saveSync();
  }

  return { files: byRoadmap.size, written };
}

/* -------------------------------------------------------------------------- */
/* Entry point                                                                */
/* -------------------------------------------------------------------------- */

const write = process.argv.includes('--write');

const { promotions, unchanged, alreadyAtOrAbove } = await buildPlan();

if (promotions.length === 0) {
  console.log(`Nothing to promote. ${unchanged} draft, ${alreadyAtOrAbove} already promoted.`);
  process.exit(0);
}

const byRoadmap = new Map<string, number>();
for (const promotion of promotions) {
  byRoadmap.set(promotion.roadmap, (byRoadmap.get(promotion.roadmap) ?? 0) + 1);
}

console.log(`${promotions.length} topic(s) have earned a promotion:\n`);
for (const [roadmap, count] of [...byRoadmap.entries()].sort()) {
  console.log(`  ${roadmap.padEnd(20)} ${String(count).padStart(3)} → review`);
}
console.log(`\n  ${unchanged} still draft, ${alreadyAtOrAbove} already at or above their earned status.`);
console.log('\nStill blocked for these, and deliberately so:');
for (const entry of AWAITING_VERIFICATION) {
  console.log(`  ${String(entry.pattern)} — ${entry.because}`);
}

if (!write) {
  console.log('\nDry run. Re-run with `--write` to apply.');
  process.exit(0);
}

const { files, written } = apply(promotions);
console.log(`\nWrote publishStatus into ${written} topic(s) across ${files} file(s).`);
console.log('Run `npm run validate` to see the corpus at its new statuses.');
