/**
 * Michi validation kernel — a dependency-free schema + content-quality validator.
 *
 * Why hand-rolled instead of Zod/Valibot: Michi's hard problem is not "is this a
 * string" — TypeScript already covers that. It is "is this resource *real, useful
 * and non-fabricated*". That needs domain rules with actionable, path-addressed
 * error messages that a curator can act on without reading code. This kernel is
 * built around that: every failure carries a stable machine-readable `code`, a
 * JSON path, and a `hint` describing the fix.
 *
 * Design constraints:
 *  - Zero dependencies, zero Node-only APIs. Runs in the Next.js build, in a CLI
 *    script, in a Route Handler, and in the browser (for the Phase 2 admin UI).
 *  - Deterministic issue ordering, so CI diffs are stable.
 *  - Refinements never cascade: quality rules only run once the value's *shape*
 *    is known-good, so a curator sees "this URL is a tracking link", not fifty
 *    downstream type errors.
 */

/** A JSON-ish address into the validated value, e.g. `topics.n_linux_1.resources[3].url`. */
export type IssuePath = string;

/**
 * `error` fails the build. `warning` is reported and counted but does not fail —
 * used for judgement calls (a paywalled article is discouraged, not forbidden).
 */
export type Severity = 'error' | 'warning';

export interface Issue {
  /** Where the problem is. */
  readonly path: IssuePath;
  /** Stable identifier, e.g. `resource.url.tracking_params`. Safe to grep, group and suppress. */
  readonly code: string;
  /** What is wrong, in one sentence, addressed to a human curator. */
  readonly message: string;
  readonly severity: Severity;
  /** What to do about it. Present on every rule a curator can act on. */
  readonly hint?: string;
  /** Compact preview of the offending value. */
  readonly received?: string;
}

/* -------------------------------------------------------------------------- */
/* Core types                                                                 */
/* -------------------------------------------------------------------------- */

/** Marks a validator as tolerating an absent key. Read by {@link object}. */
export const OPTIONAL: unique symbol = Symbol('michi.schema.optional');

export interface Validator<T> {
  /** Human-readable type name, used in default messages. */
  readonly typeName: string;
  /** Present only on validators produced by {@link optional}. */
  readonly [OPTIONAL]?: true;
  /**
   * Phantom. `T` appears nowhere in `check`, whose parameter is deliberately
   * `unknown`, so without this field every `Validator<A>` would be assignable to
   * every `Validator<B>` and {@link parse} would happily narrow to whatever the call
   * site asked for.
   *
   * Covariant, not invariant: `object`'s shape is a `Record<string, Validator<unknown>>`
   * and a `Validator<string>` field must be assignable to it. Covariance permits that
   * while still rejecting the confusion that matters — `Validator<Topic>` and
   * `Validator<Resource>` are unrelated in both directions.
   *
   * Never present at runtime; nothing may read it.
   */
  readonly __output?: T;
  /**
   * Returns every issue found in `value`. An empty array means valid.
   * Never throws — malformed input is data, not an exception.
   */
  check(value: unknown, path?: IssuePath): Issue[];
}

/** Extracts the validated TypeScript type from a validator. */
export type Infer<V> = V extends Validator<infer T> ? T : never;

/**
 * A quality rule applied *after* shape validation succeeds. Receives the value
 * already narrowed to `T`.
 */
export type Rule<T> = (value: T, path: IssuePath) => Issue[];

/* -------------------------------------------------------------------------- */
/* Issue construction                                                         */
/* -------------------------------------------------------------------------- */

/** Renders any value as a short single-line preview suitable for a CLI report. */
export function preview(value: unknown, max = 80): string {
  let s: string;
  if (typeof value === 'string') s = JSON.stringify(value);
  else if (value === undefined) s = 'undefined';
  else if (typeof value === 'function') s = '[Function]';
  else {
    try {
      s = JSON.stringify(value) ?? String(value);
    } catch {
      s = String(value);
    }
  }
  s = s.replace(/\s+/g, ' ');
  return s.length > max ? `${s.slice(0, max - 1)}…` : s;
}

export function issue(
  path: IssuePath,
  code: string,
  message: string,
  extra: { severity?: Severity; hint?: string; received?: unknown } = {},
): Issue {
  const out: Issue = {
    path,
    code,
    message,
    severity: extra.severity ?? 'error',
    ...(extra.hint !== undefined ? { hint: extra.hint } : {}),
    ...('received' in extra ? { received: preview(extra.received) } : {}),
  };
  return out;
}

/** Appends a key to a path, choosing dot or bracket notation appropriately. */
export function joinPath(base: IssuePath, key: string | number): IssuePath {
  if (typeof key === 'number') return `${base}[${key}]`;
  if (base === '') return key;
  return /^[A-Za-z_$][\w$]*$/.test(key) ? `${base}.${key}` : `${base}[${JSON.stringify(key)}]`;
}

/** Formats one issue as a single plain-text line. Colorization lives in the CLI. */
export function formatIssue(i: Issue): string {
  const parts = [`${i.severity === 'error' ? 'error' : 'warn '} ${i.path || '<root>'}: ${i.message}`];
  if (i.received !== undefined) parts.push(`    received: ${i.received}`);
  if (i.hint) parts.push(`    fix: ${i.hint}`);
  parts.push(`    code: ${i.code}`);
  return parts.join('\n');
}

/* -------------------------------------------------------------------------- */
/* Constructor                                                                */
/* -------------------------------------------------------------------------- */

export function define<T>(
  typeName: string,
  check: (value: unknown, path: IssuePath) => Issue[],
): Validator<T> {
  return { typeName, check: (value, path = '') => check(value, path) };
}

/**
 * Attaches quality rules to a validator. Rules run **only** when the base
 * validator reports no errors, so shape failures never produce cascading noise.
 * Warnings from the base do not block rules.
 */
export function refine<T>(base: Validator<T>, ...rules: Rule<T>[]): Validator<T> {
  return define<T>(base.typeName, (value, path) => {
    const issues = base.check(value, path);
    if (issues.some((i) => i.severity === 'error')) return issues;
    for (const rule of rules) issues.push(...rule(value as T, path));
    return issues;
  });
}

/* -------------------------------------------------------------------------- */
/* Primitives                                                                 */
/* -------------------------------------------------------------------------- */

export interface StringOptions {
  /** Inclusive minimum length, measured after trimming. */
  readonly minLength?: number;
  /** Inclusive maximum length. */
  readonly maxLength?: number;
  /** Value must match. */
  readonly pattern?: RegExp;
  /** Human description of `pattern`, used in the message (e.g. "kebab-case"). */
  readonly patternLabel?: string;
  /** Reject leading/trailing whitespace instead of tolerating it. Default `true`. */
  readonly strictTrim?: boolean;
  /** Namespace for emitted codes, e.g. `topic.slug`. */
  readonly code: string;
}

export function string(opts: StringOptions): Validator<string> {
  const { code } = opts;
  return define<string>('string', (value, path) => {
    if (typeof value !== 'string') {
      return [issue(path, `${code}.type`, `Expected a string.`, { received: value })];
    }
    const issues: Issue[] = [];
    if ((opts.strictTrim ?? true) && value !== value.trim()) {
      issues.push(
        issue(path, `${code}.untrimmed`, 'Has leading or trailing whitespace.', {
          hint: 'Trim the value.',
          received: value,
        }),
      );
    }
    const len = value.trim().length;
    if (len === 0) {
      issues.push(
        issue(path, `${code}.empty`, 'Must not be empty.', {
          hint: 'Provide real content, or remove the field if it is optional.',
        }),
      );
      return issues;
    }
    if (opts.minLength !== undefined && len < opts.minLength) {
      issues.push(
        issue(path, `${code}.too_short`, `Must be at least ${opts.minLength} characters (got ${len}).`, {
          hint: 'Short values here are almost always placeholders. Write the real thing.',
          received: value,
        }),
      );
    }
    if (opts.maxLength !== undefined && len > opts.maxLength) {
      issues.push(
        issue(path, `${code}.too_long`, `Must be at most ${opts.maxLength} characters (got ${len}).`, {
          received: value,
        }),
      );
    }
    if (opts.pattern && !opts.pattern.test(value)) {
      issues.push(
        issue(path, `${code}.pattern`, `Must be ${opts.patternLabel ?? `of the form ${opts.pattern}`}.`, {
          received: value,
        }),
      );
    }
    return issues;
  });
}

export interface NumberOptions {
  readonly int?: boolean;
  readonly min?: number;
  readonly max?: number;
  readonly code: string;
}

export function number(opts: NumberOptions): Validator<number> {
  const { code } = opts;
  return define<number>('number', (value, path) => {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      return [issue(path, `${code}.type`, 'Expected a finite number.', { received: value })];
    }
    const issues: Issue[] = [];
    if (opts.int && !Number.isInteger(value)) {
      issues.push(issue(path, `${code}.not_integer`, 'Expected an integer.', { received: value }));
    }
    if (opts.min !== undefined && value < opts.min) {
      issues.push(issue(path, `${code}.too_small`, `Must be >= ${opts.min}.`, { received: value }));
    }
    if (opts.max !== undefined && value > opts.max) {
      issues.push(issue(path, `${code}.too_large`, `Must be <= ${opts.max}.`, { received: value }));
    }
    return issues;
  });
}

export function boolean(code: string): Validator<boolean> {
  return define<boolean>('boolean', (value, path) =>
    typeof value === 'boolean'
      ? []
      : [issue(path, `${code}.type`, 'Expected a boolean.', { received: value })],
  );
}

/** Accepts only the listed literal values. `values` doubles as the error hint. */
export function enumOf<const T extends readonly string[]>(
  values: T,
  code: string,
): Validator<T[number]> {
  const set = new Set<string>(values);
  return define<T[number]>(`enum(${values.join('|')})`, (value, path) => {
    if (typeof value !== 'string') {
      return [issue(path, `${code}.type`, 'Expected a string.', { received: value })];
    }
    if (!set.has(value)) {
      return [
        issue(path, `${code}.unknown_value`, `Not one of the allowed values.`, {
          hint: `Allowed: ${values.join(', ')}.`,
          received: value,
        }),
      ];
    }
    return [];
  });
}

/** Passes any value through unchecked. Use only for genuinely opaque fields. */
export function unknown(): Validator<unknown> {
  return define<unknown>('unknown', () => []);
}

/* -------------------------------------------------------------------------- */
/* Composites                                                                 */
/* -------------------------------------------------------------------------- */

export interface ArrayOptions<T> {
  readonly minItems?: number;
  readonly maxItems?: number;
  /** Reject duplicate items. Compared by `keyOf`, or by normalized JSON. */
  readonly unique?: boolean;
  readonly keyOf?: (item: T) => string;
  readonly code: string;
}

export function arrayOf<T>(item: Validator<T>, opts: ArrayOptions<T>): Validator<T[]> {
  const { code } = opts;
  return define<T[]>(`${item.typeName}[]`, (value, path) => {
    if (!Array.isArray(value)) {
      return [issue(path, `${code}.type`, 'Expected an array.', { received: value })];
    }
    const issues: Issue[] = [];
    if (opts.minItems !== undefined && value.length < opts.minItems) {
      issues.push(
        issue(path, `${code}.too_few`, `Expected at least ${opts.minItems} items (got ${value.length}).`, {
          hint:
            opts.minItems > 1
              ? 'A thin list is a signal the topic has not really been written yet.'
              : undefined,
        }),
      );
    }
    if (opts.maxItems !== undefined && value.length > opts.maxItems) {
      issues.push(
        issue(path, `${code}.too_many`, `Expected at most ${opts.maxItems} items (got ${value.length}).`),
      );
    }
    value.forEach((el, i) => issues.push(...item.check(el, joinPath(path, i))));

    if (opts.unique && !issues.some((i) => i.severity === 'error')) {
      const seen = new Map<string, number>();
      value.forEach((el, i) => {
        const key = opts.keyOf ? opts.keyOf(el as T) : JSON.stringify(el);
        const first = seen.get(key);
        if (first !== undefined) {
          issues.push(
            issue(joinPath(path, i), `${code}.duplicate`, `Duplicates item at index ${first}.`, {
              hint: 'Remove the duplicate or replace it with distinct content.',
              received: el,
            }),
          );
        } else {
          seen.set(key, i);
        }
      });
    }
    return issues;
  });
}

/** Wraps a validator so that `undefined` (and an absent object key) is accepted. */
export function optional<T>(inner: Validator<T>): Validator<T | undefined> {
  return {
    typeName: `${inner.typeName}?`,
    [OPTIONAL]: true,
    check: (value, path = '') => (value === undefined ? [] : inner.check(value, path)),
  };
}

/** How to treat object keys the shape does not mention. */
export type UnknownKeyPolicy = 'allow' | 'warn' | 'error';

export interface ObjectOptions {
  readonly unknownKeys?: UnknownKeyPolicy;
  readonly code: string;
}

/**
 * Validates a plain object against a shape.
 *
 * Type the shape as `Record<keyof YourInterface, Validator<unknown>>` at the call
 * site: TypeScript then fails the build if the interface grows a field the
 * validator forgot, which is the failure mode that lets bad data in.
 */
export function object<T>(
  typeName: string,
  shape: Readonly<Record<string, Validator<unknown>>>,
  opts: ObjectOptions,
): Validator<T> {
  const { code } = opts;
  const policy = opts.unknownKeys ?? 'error';
  const known = new Set(Object.keys(shape));
  return define<T>(typeName, (value, path) => {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
      return [issue(path, `${code}.type`, `Expected a ${typeName} object.`, { received: value })];
    }
    const record = value as Record<string, unknown>;
    const issues: Issue[] = [];
    for (const key of Object.keys(shape)) {
      const validator = shape[key]!;
      const present = key in record;
      if (!present) {
        if (validator[OPTIONAL] !== true) {
          issues.push(
            issue(joinPath(path, key), `${code}.missing_field`, `Required field \`${key}\` is missing.`, {
              hint: `Expected ${validator.typeName}.`,
            }),
          );
        }
        continue;
      }
      issues.push(...validator.check(record[key], joinPath(path, key)));
    }
    if (policy !== 'allow') {
      for (const key of Object.keys(record)) {
        if (known.has(key)) continue;
        issues.push(
          issue(joinPath(path, key), `${code}.unknown_field`, `Unknown field \`${key}\`.`, {
            severity: policy === 'error' ? 'error' : 'warning',
            hint: 'Remove it, or add it to the schema if it is intentional.',
          }),
        );
      }
    }
    return issues;
  });
}

/**
 * Validates a dictionary whose keys are data (e.g. topic id -> topic).
 * `key` validates each key; `value` validates each value.
 */
export function record<V>(
  key: Validator<string>,
  value: Validator<V>,
  opts: { code: string; minEntries?: number },
): Validator<Record<string, V>> {
  return define<Record<string, V>>(`Record<string, ${value.typeName}>`, (input, path) => {
    if (typeof input !== 'object' || input === null || Array.isArray(input)) {
      return [issue(path, `${opts.code}.type`, 'Expected an object dictionary.', { received: input })];
    }
    const entries = Object.entries(input as Record<string, unknown>);
    const issues: Issue[] = [];
    if (opts.minEntries !== undefined && entries.length < opts.minEntries) {
      issues.push(
        issue(path, `${opts.code}.too_few`, `Expected at least ${opts.minEntries} entries (got ${entries.length}).`),
      );
    }
    for (const [k, v] of entries) {
      // Key problems are reported at the entry's own path so editors jump to it.
      for (const keyIssue of key.check(k, joinPath(path, k))) {
        issues.push({ ...keyIssue, code: `${opts.code}.key.${keyIssue.code}` });
      }
      issues.push(...value.check(v, joinPath(path, k)));
    }
    return issues;
  });
}

/**
 * Accepts a value matching any branch. Reports the *shortest* failure set when
 * all branches fail, which is empirically the most relevant one.
 */
export function union<T>(branches: readonly Validator<T>[], code: string): Validator<T> {
  return define<T>(branches.map((b) => b.typeName).join(' | '), (value, path) => {
    const attempts: Issue[][] = [];
    for (const branch of branches) {
      const issues = branch.check(value, path);
      if (!issues.some((i) => i.severity === 'error')) return issues;
      attempts.push(issues);
    }
    let best = attempts[0] ?? [];
    for (const attempt of attempts) if (attempt.length < best.length) best = attempt;
    return [
      issue(path, `${code}.no_branch_matched`, `Did not match any of: ${branches.map((b) => b.typeName).join(', ')}.`, {
        received: value,
      }),
      ...best,
    ];
  });
}

/* -------------------------------------------------------------------------- */
/* Entry points                                                               */
/* -------------------------------------------------------------------------- */

export type ValidationResult<T> =
  | { readonly ok: true; readonly value: T; readonly warnings: readonly Issue[] }
  | { readonly ok: false; readonly errors: readonly Issue[]; readonly warnings: readonly Issue[] };

/** Validates without throwing. Errors and warnings are returned separately. */
export function safeParse<T>(validator: Validator<T>, value: unknown, path = ''): ValidationResult<T> {
  const issues = validator.check(value, path);
  const errors = issues.filter((i) => i.severity === 'error');
  const warnings = issues.filter((i) => i.severity === 'warning');
  return errors.length === 0
    ? { ok: true, value: value as T, warnings }
    : { ok: false, errors, warnings };
}

export class ValidationError extends Error {
  constructor(
    message: string,
    readonly issues: readonly Issue[],
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

/** Validates and returns the value, throwing {@link ValidationError} on any error. */
export function parse<T>(validator: Validator<T>, value: unknown, path = ''): T {
  const result = safeParse(validator, value, path);
  if (result.ok) return result.value;
  const shown = result.errors.slice(0, 10).map(formatIssue).join('\n');
  const more = result.errors.length > 10 ? `\n… and ${result.errors.length - 10} more` : '';
  throw new ValidationError(
    `${validator.typeName} failed validation with ${result.errors.length} error(s):\n${shown}${more}`,
    result.errors,
  );
}

/** Type guard form. Warnings are ignored. */
export function is<T>(validator: Validator<T>, value: unknown): value is T {
  return !validator.check(value, '').some((i) => i.severity === 'error');
}
