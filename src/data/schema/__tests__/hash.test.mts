/**
 * SHA-256 conformance tests.
 *
 * The hash function produces resource ids that get written into content files, so a
 * regression here would silently re-id every resource in the corpus. These tests
 * pin it against the FIPS 180-4 published vectors *and* against `node:crypto`
 * across every block-boundary length, so any drift fails loudly.
 *
 * Run with: `npm test`
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

import { sha256Utf8, toHex, toBase32, shortHash } from '../hash';

/** Published vectors from FIPS 180-4 / NIST CAVP. */
const FIPS_VECTORS: readonly [input: string, digest: string][] = [
  ['', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'],
  ['abc', 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'],
  [
    'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
    '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1',
  ],
  [
    'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
    'cf5b16a778af8380036ce59e7b0492370b249b11e8f07a51afac45037afee9d1',
  ],
];

test('sha256 matches the FIPS 180-4 published vectors', () => {
  for (const [input, expected] of FIPS_VECTORS) {
    assert.equal(toHex(sha256Utf8(input)), expected, `input length ${input.length}`);
  }
});

test('sha256 matches the one-million-a vector', () => {
  assert.equal(
    toHex(sha256Utf8('a'.repeat(1_000_000))),
    'cdc76e5c9914fb9281a1c7e284d73e67f1809a48a497200e046d39ccc7112cd0',
  );
});

test('sha256 agrees with node:crypto across every padding boundary', () => {
  // 55/56 and 119/120 are the lengths where the length field forces an extra block.
  const lengths = [0, 1, 2, 53, 54, 55, 56, 57, 63, 64, 65, 118, 119, 120, 121, 127, 128, 129, 255, 1000, 4096];
  for (const n of lengths) {
    const input = Array.from({ length: n }, (_, i) => String.fromCharCode(32 + ((i * 7) % 94))).join('');
    assert.equal(
      toHex(sha256Utf8(input)),
      createHash('sha256').update(input, 'utf8').digest('hex'),
      `length ${n}`,
    );
  }
});

test('sha256 agrees with node:crypto for multi-byte UTF-8', () => {
  // Hindi matters here: `video_hi` titles are stored in Devanagari.
  for (const input of ['héllo', '日本語テキスト', '🎉🚀 emoji', 'हिन्दी सीखें', 'Ünïcödé']) {
    assert.equal(
      toHex(sha256Utf8(input)),
      createHash('sha256').update(input, 'utf8').digest('hex'),
      input,
    );
  }
});

test('base32 output uses only unambiguous Crockford characters', () => {
  const encoded = toBase32(sha256Utf8('https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'));
  assert.match(encoded, /^[0-9abcdefghjkmnpqrstvwxyz]+$/, 'must exclude i, l, o, u and uppercase');
  assert.equal(encoded.length, 52, '32 bytes at 5 bits per character');
});

test('shortHash is deterministic, sensitive and correctly sized', () => {
  const url = 'https://react.dev/learn/thinking-in-react';
  assert.equal(shortHash(url), shortHash(url), 'same input must give the same id');
  assert.notEqual(shortHash(url), shortHash(`${url}/`), 'a different URL must give a different id');
  assert.equal(shortHash(url).length, 12);
  assert.equal(shortHash(url, 20).length, 20);
});

test('shortHash has no collisions across the current URL corpus size', () => {
  // 20k synthetic URLs — twice the projected full build-out — must stay unique.
  const seen = new Set<string>();
  for (let i = 0; i < 20_000; i++) {
    const id = shortHash(`https://example.invalid/resource/${i}`);
    assert.ok(!seen.has(id), `collision at i=${i} (${id})`);
    seen.add(id);
  }
});
