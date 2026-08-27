/**
 * Validation-kernel tests.
 *
 * The kernel decides what counts as a defect, so a regression here does not produce
 * wrong output — it produces *confident* wrong output, which is worse. Three
 * properties matter enough to pin individually:
 *
 *  1. **No cascade.** Quality rules must not run on a value whose shape already
 *     failed, or one wrong type becomes fifty misleading issues.
 *  2. **Missing vs unknown.** A required field that is absent and an extra field
 *     nobody declared are different mistakes with different fixes.
 *  3. **Determinism.** Issue order must not depend on object key order, or every CI
 *     run produces a different diff.
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import {
  type Issue,
  type Validator,
  ValidationError,
  arrayOf,
  boolean,
  define,
  enumOf,
  formatIssue,
  is,
  issue,
  joinPath,
  number,
  object,
  optional,
  parse,
  preview,
  record,
  refine,
  safeParse,
  string,
  union,
} from '../validator';

const codes = (issues: readonly Issue[]): string[] => issues.map((i) => i.code);

/* -------------------------------------------------------------------------- */
/* Validator<T> is not decorative                                             */
/* -------------------------------------------------------------------------- */

test('a validator is not assignable to a validator of an unrelated type', () => {
  // A compile-time assertion, enforced by `tsc --noEmit` rather than at runtime.
  // `check` takes `unknown`, so `T` is structurally invisible; the phantom `__output`
  // field is the only thing that stops every validator being interchangeable and
  // `parse` narrowing to whatever the call site claimed. If someone deletes it as
  // dead code, the `@ts-expect-error` below becomes an unused-directive error and
  // says so.
  const numbers: Validator<number> = number({ code: 'n' });
  // @ts-expect-error — a number validator cannot stand in for a string one.
  const strings: Validator<string> = numbers;
  void strings;

  // Widening in the other direction stays legal: `object`'s shape parameter is a
  // `Record<string, Validator<unknown>>` and every field validator must fit it.
  const anything: Validator<unknown> = numbers;
  assert.deepEqual(anything.check(1, 'n'), []);
});

/* -------------------------------------------------------------------------- */
/* refine: no cascade                                                         */
/* -------------------------------------------------------------------------- */

test('refine does not run rules when the shape already failed', () => {
  const ran: string[] = [];
  const validator = refine(
    string({ code: 'field', minLength: 3 }),
    (value, path) => {
      ran.push(value);
      return [issue(path, 'field.rule', 'the rule ran')];
    },
  );

  assert.deepEqual(codes(validator.check('ab', 'at')), ['field.too_short']);
  assert.deepEqual(ran, [], 'rule must not see a value that failed its shape check');

  assert.deepEqual(codes(validator.check('abc', 'at')), ['field.rule']);
  assert.deepEqual(ran, ['abc']);
});

test('refine still runs rules when the base reported only warnings', () => {
  const warningOnly = define<string>('string', (_value, path) => [
    issue(path, 'base.advisory', 'advisory', { severity: 'warning' }),
  ]);
  const validator = refine(warningOnly, (_value, path) => [issue(path, 'rule.ran', 'ran')]);

  assert.deepEqual(codes(validator.check('anything')), ['base.advisory', 'rule.ran']);
});

test('a rule may add issues alongside base warnings without losing either', () => {
  const validator = refine(string({ code: 'f' }), (value, path) =>
    value === 'flag' ? [issue(path, 'f.flagged', 'flagged', { severity: 'warning' })] : [],
  );
  const issues = validator.check(' flag ', 'p');
  assert.deepEqual(codes(issues), ['f.untrimmed'], 'untrimmed is an error, so the rule is skipped');
  assert.deepEqual(codes(validator.check('flag', 'p')), ['f.flagged']);
});

/* -------------------------------------------------------------------------- */
/* string                                                                     */
/* -------------------------------------------------------------------------- */

test('string reports the type mismatch alone, never bounds as well', () => {
  const validator = string({ code: 'topic.title', minLength: 5, maxLength: 10 });
  assert.deepEqual(codes(validator.check(42, 'p')), ['topic.title.type']);
  assert.deepEqual(codes(validator.check(null, 'p')), ['topic.title.type']);
  assert.deepEqual(codes(validator.check(undefined, 'p')), ['topic.title.type']);
});

test('an empty string short-circuits, so `empty` is never reported with `too_short`', () => {
  const validator = string({ code: 'f', minLength: 20 });
  assert.deepEqual(codes(validator.check('', 'p')), ['f.empty']);
  // Whitespace-only is both untrimmed and empty; it must not also be too_short,
  // because "write 20 characters" is not the fix — "write something" is.
  assert.deepEqual(codes(validator.check('   ', 'p')), ['f.untrimmed', 'f.empty']);
});

test('string length is measured after trimming', () => {
  const validator = string({ code: 'f', minLength: 4, strictTrim: false });
  assert.deepEqual(codes(validator.check('  ab  ', 'p')), ['f.too_short']);
  assert.deepEqual(codes(validator.check('  abcd  ', 'p')), []);
});

test('pattern failures name the human label, not the regex', () => {
  const validator = string({
    code: 'topic.slug',
    pattern: /^[a-z-]+$/,
    patternLabel: 'lower-case kebab-case',
  });
  const [only] = validator.check('Not_A_Slug', 'p');
  assert.equal(only?.code, 'topic.slug.pattern');
  assert.match(only?.message ?? '', /lower-case kebab-case/);
});

/* -------------------------------------------------------------------------- */
/* number, boolean, enumOf                                                    */
/* -------------------------------------------------------------------------- */

test('number rejects non-finite values as a type error', () => {
  const validator = number({ code: 'n', int: true, min: 0, max: 10 });
  assert.deepEqual(codes(validator.check(Number.NaN, 'p')), ['n.type']);
  assert.deepEqual(codes(validator.check(Number.POSITIVE_INFINITY, 'p')), ['n.type']);
  assert.deepEqual(codes(validator.check('3', 'p')), ['n.type']);
  assert.deepEqual(codes(validator.check(1.5, 'p')), ['n.not_integer']);
  assert.deepEqual(codes(validator.check(-1, 'p')), ['n.too_small']);
  assert.deepEqual(codes(validator.check(11, 'p')), ['n.too_large']);
  assert.deepEqual(codes(validator.check(7, 'p')), []);
});

test('boolean does not coerce', () => {
  const validator = boolean('b');
  assert.deepEqual(codes(validator.check(false, 'p')), []);
  assert.deepEqual(codes(validator.check('true', 'p')), ['b.type']);
  assert.deepEqual(codes(validator.check(1, 'p')), ['b.type']);
});

test('enumOf lists the allowed values in the hint so the fix needs no docs', () => {
  const validator = enumOf(['Beginner', 'Intermediate', 'Advanced'] as const, 'topic.difficulty');
  assert.deepEqual(codes(validator.check('Beginner', 'p')), []);
  const [only] = validator.check('beginner', 'p');
  assert.equal(only?.code, 'topic.difficulty.unknown_value');
  assert.equal(only?.hint, 'Allowed: Beginner, Intermediate, Advanced.');
  assert.equal(only?.received, '"beginner"');
  assert.deepEqual(codes(validator.check(3, 'p')), ['topic.difficulty.type']);
});

/* -------------------------------------------------------------------------- */
/* object                                                                     */
/* -------------------------------------------------------------------------- */

const shape = {
  title: string({ code: 'x.title', minLength: 2 }),
  note: optional(string({ code: 'x.note', minLength: 2 })),
};

test('object distinguishes a missing required field from an absent optional one', () => {
  const validator = object('X', shape, { code: 'x' });
  assert.deepEqual(codes(validator.check({}, 'p')), ['x.missing_field']);
  assert.deepEqual(codes(validator.check({ title: 'ok' }, 'p')), []);
  assert.deepEqual(codes(validator.check({ title: 'ok', note: undefined }, 'p')), []);
});

test('a missing-field issue points at the field, not the object', () => {
  const validator = object('X', shape, { code: 'x' });
  const [only] = validator.check({}, 'topics.n_1');
  assert.equal(only?.path, 'topics.n_1.title');
  assert.match(only?.hint ?? '', /string/);
});

test('unknownKeys policy is honoured in all three modes', () => {
  const value = { title: 'ok', sectionId: 's1' };
  assert.deepEqual(codes(object('X', shape, { code: 'x' }).check(value, 'p')), ['x.unknown_field']);
  assert.deepEqual(
    object('X', shape, { code: 'x', unknownKeys: 'allow' }).check(value, 'p'),
    [],
  );
  const warned = object('X', shape, { code: 'x', unknownKeys: 'warn' }).check(value, 'p');
  assert.deepEqual(codes(warned), ['x.unknown_field']);
  assert.equal(warned[0]?.severity, 'warning');
});

test('object rejects arrays and null rather than treating them as records', () => {
  const validator = object('X', shape, { code: 'x' });
  assert.deepEqual(codes(validator.check([], 'p')), ['x.type']);
  assert.deepEqual(codes(validator.check(null, 'p')), ['x.type']);
  assert.deepEqual(codes(validator.check('{}', 'p')), ['x.type']);
});

test('issue order follows the shape, not the input key order', () => {
  const wide = object(
    'Wide',
    {
      a: string({ code: 'w.a', minLength: 5 }),
      b: string({ code: 'w.b', minLength: 5 }),
      c: string({ code: 'w.c', minLength: 5 }),
    },
    { code: 'w' },
  );
  const forwards = wide.check({ a: 'x', b: 'x', c: 'x' }, 'p').map((i) => i.path);
  const backwards = wide.check({ c: 'x', b: 'x', a: 'x' }, 'p').map((i) => i.path);
  assert.deepEqual(forwards, ['p.a', 'p.b', 'p.c']);
  assert.deepEqual(backwards, forwards, 'CI diffs must not depend on key order');
});

/* -------------------------------------------------------------------------- */
/* arrayOf                                                                    */
/* -------------------------------------------------------------------------- */

test('arrayOf reports per-item issues at indexed paths', () => {
  const validator = arrayOf(string({ code: 'item', minLength: 3 }), { code: 'list' });
  const issues = validator.check(['ok!', 'x'], 'p');
  assert.deepEqual(codes(issues), ['item.too_short']);
  assert.equal(issues[0]?.path, 'p[1]');
});

test('arrayOf enforces bounds and reports the actual count', () => {
  const validator = arrayOf(string({ code: 'i' }), { code: 'l', minItems: 2, maxItems: 3 });
  const [few] = validator.check(['a'], 'p');
  assert.equal(few?.code, 'l.too_few');
  assert.match(few?.message ?? '', /at least 2 items \(got 1\)/);
  assert.deepEqual(codes(validator.check(['a', 'b', 'c', 'd'], 'p')), ['l.too_many']);
});

test('uniqueness is checked only once every item is individually valid', () => {
  const validator = arrayOf(string({ code: 'i', minLength: 2 }), { code: 'l', unique: true });
  assert.deepEqual(codes(validator.check(['ab', 'ab'], 'p')), ['l.duplicate']);
  // Both items are too short, so duplicate-detection is suppressed: telling a
  // curator their two placeholders are identical is not the useful message.
  assert.deepEqual(codes(validator.check(['a', 'a'], 'p')), ['i.too_short', 'i.too_short']);
});

test('uniqueness can be keyed on a projection', () => {
  const validator = arrayOf(
    object<{ url: string }>('R', { url: string({ code: 'r.url' }) }, { code: 'r' }),
    { code: 'l', unique: true, keyOf: (item) => item.url.toLowerCase() },
  );
  const issues = validator.check([{ url: 'https://A.example' }, { url: 'https://a.example' }], 'p');
  assert.deepEqual(codes(issues), ['l.duplicate']);
  assert.equal(issues[0]?.path, 'p[1]');
});

/* -------------------------------------------------------------------------- */
/* optional, record, union                                                    */
/* -------------------------------------------------------------------------- */

test('optional accepts undefined but still validates a present value', () => {
  const validator = optional(string({ code: 'f', minLength: 3 }));
  assert.deepEqual(validator.check(undefined, 'p'), []);
  assert.deepEqual(codes(validator.check('ab', 'p')), ['f.too_short']);
  assert.deepEqual(codes(validator.check(null, 'p')), ['f.type'], 'null is a value, not an absence');
});

test('record validates keys and values, namespacing key failures', () => {
  const validator = record(
    string({ code: 'id', pattern: /^n_[a-z0-9_]+$/, patternLabel: 'a node id' }),
    string({ code: 'v', minLength: 3 }),
    { code: 'topics' },
  );
  assert.deepEqual(codes(validator.check({ n_a: 'okay' }, 'p')), []);
  assert.deepEqual(codes(validator.check({ 'Bad Key': 'okay' }, 'p')), ['topics.key.id.pattern']);
  const issues = validator.check({ n_a: 'no' }, 'p');
  assert.deepEqual(codes(issues), ['v.too_short']);
  assert.equal(issues[0]?.path, 'p.n_a');
});

test('record enforces a minimum entry count', () => {
  const validator = record(string({ code: 'k' }), string({ code: 'v' }), {
    code: 'topics',
    minEntries: 1,
  });
  assert.deepEqual(codes(validator.check({}, 'p')), ['topics.too_few']);
});

test('union returns the shortest failure set, plus a summary', () => {
  const short = object<{ a: string }>('Short', { a: string({ code: 's.a' }) }, { code: 's' });
  const long = object<{ a: string; b: string; c: string }>(
    'Long',
    {
      a: string({ code: 'l.a' }),
      b: string({ code: 'l.b' }),
      c: string({ code: 'l.c' }),
    },
    { code: 'l' },
  );
  const validator = union([long, short], 'u');
  assert.deepEqual(codes(validator.check({ a: 'x' }, 'p')), [], 'a matching branch reports nothing');

  const issues = codes(validator.check({}, 'p'));
  assert.equal(issues[0], 'u.no_branch_matched');
  assert.deepEqual(issues.slice(1), ['s.missing_field'], 'the one-field branch is the shortest');
});

/* -------------------------------------------------------------------------- */
/* Paths, previews, formatting                                                */
/* -------------------------------------------------------------------------- */

test('joinPath chooses dot, bracket or quoted notation', () => {
  assert.equal(joinPath('', 'topics'), 'topics');
  assert.equal(joinPath('topics', 'n_1'), 'topics.n_1');
  assert.equal(joinPath('topics.n_1.resources', 3), 'topics.n_1.resources[3]');
  assert.equal(joinPath('topics', 'not-an-identifier'), 'topics["not-an-identifier"]');
  assert.equal(joinPath('topics', '1abc'), 'topics["1abc"]');
});

test('preview collapses whitespace and truncates without breaking the line', () => {
  assert.equal(preview('a     b'), '"a b"');
  assert.equal(preview(undefined), 'undefined');
  assert.equal(preview({ a: 1 }), '{"a":1}');
  const long = preview('x'.repeat(500));
  assert.equal(long.length, 80);
  assert.ok(long.endsWith('…'));
  assert.equal(preview('abc', 10).length, 5, 'short values are untouched');
});

test('preview survives values JSON cannot represent', () => {
  const cyclic: Record<string, unknown> = {};
  cyclic['self'] = cyclic;
  assert.equal(typeof preview(cyclic), 'string');
  assert.equal(preview(() => 1), '[Function]');
  assert.equal(preview(Number.NaN), 'null', 'JSON renders NaN as null; the code is what matters');
});

test('formatIssue renders path, message, received, fix and code', () => {
  const text = formatIssue(
    issue('topics.n_1.url', 'resource.url.shortener', 'It is a shortener.', {
      hint: 'Store the destination.',
      received: 'https://bit.ly/x',
    }),
  );
  assert.equal(
    text,
    [
      'error topics.n_1.url: It is a shortener.',
      '    received: "https://bit.ly/x"',
      '    fix: Store the destination.',
      '    code: resource.url.shortener',
    ].join('\n'),
  );
});

test('an issue without a path renders as <root>', () => {
  assert.match(formatIssue(issue('', 'c', 'm')), /^error <root>: m/);
});

test('issue omits received entirely when it was not supplied', () => {
  assert.equal(issue('p', 'c', 'm').received, undefined);
  assert.equal(issue('p', 'c', 'm', { received: undefined }).received, 'undefined');
});

/* -------------------------------------------------------------------------- */
/* Entry points                                                               */
/* -------------------------------------------------------------------------- */

test('safeParse separates errors from warnings', () => {
  const validator = refine(string({ code: 'f' }), (_value, path) => [
    issue(path, 'f.advisory', 'advisory', { severity: 'warning' }),
  ]);
  const ok = safeParse(validator, 'value');
  assert.equal(ok.ok, true);
  assert.equal(ok.warnings.length, 1);

  const bad = safeParse(validator, 42);
  assert.equal(bad.ok, false);
  if (!bad.ok) {
    assert.deepEqual(codes(bad.errors), ['f.type']);
    assert.deepEqual(bad.warnings, []);
  }
});

test('parse throws ValidationError carrying every issue, and caps the message', () => {
  const validator = arrayOf(string({ code: 'i', minLength: 5 }), { code: 'l' });
  const tooMany = Array.from({ length: 14 }, () => 'x');
  assert.throws(
    () => parse(validator, tooMany),
    (error: unknown) => {
      assert.ok(error instanceof ValidationError);
      assert.equal(error.issues.length, 14);
      assert.match(error.message, /… and 4 more/);
      return true;
    },
  );
  assert.deepEqual(parse(validator, ['abcde']), ['abcde']);
});

test('is narrows on errors and ignores warnings', () => {
  const validator = refine(string({ code: 'f' }), (_value, path) => [
    issue(path, 'f.advisory', 'advisory', { severity: 'warning' }),
  ]);
  assert.equal(is(validator, 'text'), true);
  assert.equal(is(validator, 7), false);
});
