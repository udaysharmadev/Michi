/**
 * Boilerplate and filler detection.
 *
 * This module exists because of a measured failure in this repository. A content
 * generation pass wrote 156 topics whose entire pedagogical body was the same
 * sixteen sentences, and 247 topics whose `description` was the template
 * `"Learn about <topic> in the context of <roadmap>."`. Every one of those topics
 * type-checked, rendered, and looked finished. Nothing caught it, because nothing
 * was looking.
 *
 * The rules below are that missing check. They are deliberately literal: each
 * banned string was extracted from the repository, not imagined, so the false
 * positive rate is close to zero and the messages can name the exact defect.
 *
 * Adding to this list is expected. When a new filler phrase appears, add it here
 * in the same commit that removes it from the content — that is what stops the
 * same phrase coming back.
 */

import { type Issue, type IssuePath, type Rule, issue } from './validator';

/* -------------------------------------------------------------------------- */
/* Normalization                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Collapses a string to a comparable fingerprint: lowercased, punctuation
 * stripped, whitespace collapsed. `"Understand core concepts."` and
 * `"understand  core concepts"` fingerprint identically, so cosmetic edits do
 * not smuggle banned filler back in.
 */
export function fingerprint(text: string): string {
  return text
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[^\p{L}\p{N}'\s]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* -------------------------------------------------------------------------- */
/* The banned corpus                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Exact filler sentences found in the generated content, grouped by the field
 * they were injected into. Every entry appeared 60+ times across unrelated
 * roadmaps, which is the tell: real pedagogy is topic-specific.
 */
export const BANNED_PROSE: readonly string[] = [
  // whyLearnThis / whenIsItUsed / whereIsItUsed / whatComesNext — 156 topics each.
  'This is a foundational concept required for career progression.',
  'Used continuously throughout your day-to-day workflow.',
  'Applied in production environments across the industry.',
  'Mastering this opens up advanced topics.',
  // learningOutcomes — 156 topics each.
  'Understand core concepts.',
  'Apply best practices in real projects.',
  'Debug common issues effectively.',
  // commonMistakes — 156 topics each.
  'Skipping the fundamentals.',
  'Not reading the official documentation.',
  'Over-engineering simple problems.',
  // realWorldApplications — 156 topics each.
  'Building scalable distributed systems.',
  'Automating manual workflows.',
  'Improving performance and security.',
  // Additional generic phrasings that carry no topic-specific information.
  'This is an important concept.',
  'Learn the fundamentals.',
  'Understand the basics.',
  'Coming soon.',
  'TODO',
  'TBD',
  'Lorem ipsum dolor sit amet.',
];

/**
 * Generic resource titles found in the generated content. A resource title is the
 * only thing a learner sees before clicking, so `"Comprehensive Guide"` is worse
 * than useless — it is indistinguishable from every other row in the list.
 */
export const BANNED_RESOURCE_TITLES: readonly string[] = [
  'Comprehensive Guide',
  'GitHub Examples',
  'Quick Reference Cheat Sheet',
  'Deep Dive Architecture',
  'Video Tutorial',
  'Video Tutorial (English)',
  'Video Tutorial (Hindi)',
  'Hindi Tutorial',
  'Tutorial',
  'Documentation',
  'Official Documentation',
  'Official Docs',
  'Docs',
  'Article',
  'Guide',
  'Cheat Sheet',
  'Deep Dive',
  'Read more',
  'Click here',
  'Link',
  'Here',
  'Website',
  'Homepage',
  'Learn more',
  'Introduction',
  'Overview',
  'Getting Started',
];

/**
 * Templated shapes. Unlike {@link BANNED_PROSE} these vary per topic, so they
 * cannot be caught by string equality — but the mould is still visible.
 */
export const BANNED_PATTERNS: readonly { readonly pattern: RegExp; readonly label: string }[] = [
  {
    // 247 occurrences: "Learn about Linux Fundamentals in the context of devops."
    pattern: /^learn about .+ in the context of .+$/,
    label: 'the generated template "Learn about <topic> in the context of <roadmap>."',
  },
  {
    // 156 occurrences: "Official Docs: Linux Fundamentals"
    pattern: /^official docs\s+.+$/,
    label: 'the generated template "Official Docs: <topic>"',
  },
  {
    pattern: /^(everything|all) you need to know about\b/,
    label: 'clickbait phrasing that describes no specific content',
  },
  {
    // The article is arbitrary — "Complete Guide", "A Complete Guide to" and "The
    // Ultimate Tutorial" are the same non-title. A trailing subject saves it: "The
    // complete guide to CSS Grid" names something and does not match.
    pattern: /^(?:(?:a|an|the) )?(complete|ultimate|definitive) (guide|tutorial|course)( to| for)?\s*$/,
    label: 'a superlative with no subject',
  },
  {
    pattern: /\b(lorem ipsum|placeholder|fill(er)? text|dummy (text|content)|xxx+|asdf)\b/,
    label: 'placeholder text',
  },
  {
    pattern: /^(this|it) (is|will be) (a|an) .{0,20}(concept|topic|subject)\.?$/,
    label: 'a self-referential non-statement',
  },
];

const BANNED_PROSE_SET: ReadonlySet<string> = new Set(BANNED_PROSE.map(fingerprint));
const BANNED_TITLE_SET: ReadonlySet<string> = new Set(BANNED_RESOURCE_TITLES.map(fingerprint));

/* -------------------------------------------------------------------------- */
/* Rules                                                                      */
/* -------------------------------------------------------------------------- */

export interface BoilerplateOptions {
  /** Code namespace, e.g. `topic.whyLearnThis`. */
  readonly code: string;
  /** Also reject the generic resource-title corpus. Used for resource titles. */
  readonly includeTitleCorpus?: boolean;
  /** Skip pattern rules. Used where a templated shape is legitimate. */
  readonly skipPatterns?: boolean;
}

/**
 * Rejects text that matches known fabricated filler, by exact fingerprint or by
 * template shape.
 */
export function banBoilerplate(opts: BoilerplateOptions): Rule<string> {
  return (value, path) => {
    const fp = fingerprint(value);
    if (fp.length === 0) return [];

    if (BANNED_PROSE_SET.has(fp)) {
      return [
        issue(path, `${opts.code}.boilerplate`, 'This is known generated filler, not real content.', {
          hint: 'Write something true of this topic and no other topic. If you cannot, the topic is not ready to publish.',
          received: value,
        }),
      ];
    }
    if (opts.includeTitleCorpus && BANNED_TITLE_SET.has(fp)) {
      return [
        issue(path, `${opts.code}.generic_title`, 'Title is generic and does not identify the resource.', {
          hint: 'Use the resource\'s own title, e.g. "MDN — Using Fetch" instead of "Comprehensive Guide".',
          received: value,
        }),
      ];
    }
    if (!opts.skipPatterns) {
      for (const { pattern, label } of BANNED_PATTERNS) {
        if (pattern.test(fp)) {
          return [
            issue(path, `${opts.code}.boilerplate_pattern`, `Matches ${label}.`, {
              hint: 'Replace with content specific to this topic.',
              received: value,
            }),
          ];
        }
      }
    }
    return [];
  };
}

/**
 * Rejects prose that is technically long enough but carries no information:
 * no concrete noun, or padded entirely with hedging verbs.
 */
export function requireSubstance(opts: { code: string; minWords: number }): Rule<string> {
  const FILLER_WORDS = new Set([
    'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'this', 'that', 'these',
    'those', 'it', 'its', 'and', 'or', 'but', 'of', 'to', 'in', 'on', 'for', 'with', 'as', 'by',
    'very', 'really', 'important', 'essential', 'crucial', 'key', 'good', 'great', 'many', 'various',
    'etc', 'more', 'most', 'some', 'any', 'all', 'you', 'your', 'we', 'our', 'will', 'can', 'may',
  ]);
  return (value, path) => {
    const words = fingerprint(value).split(' ').filter(Boolean);
    if (words.length < opts.minWords) {
      return [
        issue(path, `${opts.code}.too_few_words`, `Only ${words.length} word(s); expected at least ${opts.minWords}.`, {
          hint: 'One concrete sentence is the minimum. Name the tool, the situation, or the failure mode.',
          received: value,
        }),
      ];
    }
    const substantive = words.filter((w) => !FILLER_WORDS.has(w));
    if (substantive.length < Math.max(2, Math.ceil(words.length * 0.35))) {
      return [
        issue(path, `${opts.code}.low_substance`, 'Almost every word is filler; the sentence says nothing specific.', {
          hint: 'Replace hedging ("very important", "essential concept") with a concrete fact.',
          received: value,
        }),
      ];
    }
    return [];
  };
}

/* -------------------------------------------------------------------------- */
/* Corpus-wide duplication                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Tracks prose fingerprints across an entire corpus so that *newly invented*
 * filler is caught too — a phrase repeated across unrelated topics is filler by
 * definition, whether or not it is in {@link BANNED_PROSE}.
 *
 * Usage: feed every prose value through {@link add} while walking the corpus,
 * then call {@link report} once at the end.
 */
export class DuplicateProseDetector {
  private readonly seen = new Map<string, { readonly sample: string; readonly paths: IssuePath[] }>();

  constructor(
    /** Number of distinct occurrences tolerated before it counts as filler. */
    private readonly threshold = 3,
  ) {}

  add(value: string, path: IssuePath): void {
    const fp = fingerprint(value);
    // Very short strings (list items like "Idempotency") legitimately recur.
    if (fp.split(' ').length < 4) return;
    const entry = this.seen.get(fp);
    if (entry) entry.paths.push(path);
    else this.seen.set(fp, { sample: value, paths: [path] });
  }

  report(code = 'corpus.duplicate_prose'): Issue[] {
    const issues: Issue[] = [];
    for (const { sample, paths } of this.seen.values()) {
      if (paths.length < this.threshold) continue;
      const shown = paths.slice(0, 5).join(', ');
      const more = paths.length > 5 ? ` (+${paths.length - 5} more)` : '';
      issues.push(
        issue(paths[0]!, code, `This exact text appears in ${paths.length} places; it cannot be specific to any of them.`, {
          hint: `Rewrite each occurrence. Locations: ${shown}${more}`,
          received: sample,
        }),
      );
    }
    // Deterministic order: worst offenders first, then by path.
    return issues.sort((a, b) => a.path.localeCompare(b.path));
  }
}
