/**
 * SHA-256 and Crockford base32, implemented in portable TypeScript.
 *
 * Michi identifies a resource by the hash of its canonical URL. That id is written
 * into content files, so it must be byte-identical whether it was produced by the
 * CLI curation script (Node), the Next.js build, or the admin UI in a browser.
 * `node:crypto` is not available in all three, and `crypto.subtle` is async —
 * which would force every id-producing call site to become async for no benefit.
 *
 * So: a small, synchronous, universal implementation, verified against the FIPS
 * 180-4 test vectors in `src/data/schema/__tests__/hash.test.mts`.
 */

/* -------------------------------------------------------------------------- */
/* SHA-256                                                                    */
/* -------------------------------------------------------------------------- */

/** Round constants: the first 32 bits of the fractional parts of the cube roots of the first 64 primes. */
const K = new Uint32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]);

/** Initial hash values: fractional parts of the square roots of the first 8 primes. */
const H0 = new Uint32Array([
  0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
]);

const rotr = (x: number, n: number): number => ((x >>> n) | (x << (32 - n))) >>> 0;

/** Computes the SHA-256 digest of `input` as 32 bytes. */
export function sha256(input: Uint8Array): Uint8Array {
  // Padding: message, 0x80, zeros, then the 64-bit big-endian bit length.
  // The padded form is the smallest multiple of 64 bytes that holds all three,
  // i.e. ceil((len + 1 + 8) / 64) * 64 — note that when `len + 9` is already an
  // exact multiple of 64 no extra block is added.
  const bitLength = input.length * 8;
  const paddedLength = ((input.length + 9 + 63) >> 6) << 6;
  const message = new Uint8Array(paddedLength);
  message.set(input);
  message[input.length] = 0x80;
  // Bit length as a 64-bit big-endian integer. Content URLs are far below 2^32
  // bits, but write both words so the function is correct for any input.
  const view = new DataView(message.buffer);
  view.setUint32(paddedLength - 8, Math.floor(bitLength / 0x100000000), false);
  view.setUint32(paddedLength - 4, bitLength >>> 0, false);

  const h = H0.slice();
  const w = new Uint32Array(64);

  for (let offset = 0; offset < paddedLength; offset += 64) {
    for (let t = 0; t < 16; t++) w[t] = view.getUint32(offset + t * 4, false);
    for (let t = 16; t < 64; t++) {
      const w15 = w[t - 15]!;
      const w2 = w[t - 2]!;
      const s0 = (rotr(w15, 7) ^ rotr(w15, 18) ^ (w15 >>> 3)) >>> 0;
      const s1 = (rotr(w2, 17) ^ rotr(w2, 19) ^ (w2 >>> 10)) >>> 0;
      w[t] = (w[t - 16]! + s0 + w[t - 7]! + s1) >>> 0;
    }

    let a = h[0]!, b = h[1]!, c = h[2]!, d = h[3]!;
    let e = h[4]!, f = h[5]!, g = h[6]!, hh = h[7]!;

    for (let t = 0; t < 64; t++) {
      const S1 = (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) >>> 0;
      const ch = ((e & f) ^ (~e & g)) >>> 0;
      const temp1 = (hh + S1 + ch + K[t]! + w[t]!) >>> 0;
      const S0 = (rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) >>> 0;
      const maj = ((a & b) ^ (a & c) ^ (b & c)) >>> 0;
      const temp2 = (S0 + maj) >>> 0;

      hh = g;
      g = f;
      f = e;
      e = (d + temp1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) >>> 0;
    }

    h[0] = (h[0]! + a) >>> 0;
    h[1] = (h[1]! + b) >>> 0;
    h[2] = (h[2]! + c) >>> 0;
    h[3] = (h[3]! + d) >>> 0;
    h[4] = (h[4]! + e) >>> 0;
    h[5] = (h[5]! + f) >>> 0;
    h[6] = (h[6]! + g) >>> 0;
    h[7] = (h[7]! + hh) >>> 0;
  }

  const digest = new Uint8Array(32);
  const out = new DataView(digest.buffer);
  for (let i = 0; i < 8; i++) out.setUint32(i * 4, h[i]!, false);
  return digest;
}

/** UTF-8 encodes `text` then hashes it. */
export function sha256Utf8(text: string): Uint8Array {
  return sha256(new TextEncoder().encode(text));
}

export function toHex(bytes: Uint8Array): string {
  let out = '';
  for (const byte of bytes) out += byte.toString(16).padStart(2, '0');
  return out;
}

/* -------------------------------------------------------------------------- */
/* Crockford base32                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Crockford's base32 alphabet, lowercased. Excludes `i`, `l`, `o` and `u`, so ids
 * survive being read aloud, typed from a screenshot, or pasted into a bug report
 * without transcription errors.
 */
const BASE32_ALPHABET = '0123456789abcdefghjkmnpqrstvwxyz';

/** Encodes bytes as unpadded Crockford base32. */
export function toBase32(bytes: Uint8Array): string {
  let out = '';
  let buffer = 0;
  let bits = 0;
  for (const byte of bytes) {
    buffer = (buffer << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      out += BASE32_ALPHABET[(buffer >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += BASE32_ALPHABET[(buffer << (5 - bits)) & 31];
  return out;
}

/**
 * Derives a short, stable, collision-resistant id from `text`.
 *
 * 12 base32 characters is 60 bits. Across the ~10,000 resources Michi will hold
 * at full build-out the collision probability is below 1 in 10^10, and the
 * validator asserts global id uniqueness anyway — so a collision is a loud build
 * failure, never silent data loss.
 */
export function shortHash(text: string, length = 12): string {
  return toBase32(sha256Utf8(text)).slice(0, length);
}
