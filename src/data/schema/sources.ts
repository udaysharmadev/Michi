/**
 * Source authority and URL hygiene rules.
 *
 * Resources are the product. A topic with a broken link, a tracking-laden URL, a
 * GitHub *homepage* standing in for a repo, or a content farm masquerading as
 * official documentation is worse than an empty topic, because it consumes the
 * learner's trust before it wastes their time.
 *
 * This module encodes the judgement a good curator applies in their head:
 *  - Does the host match the slot?  (a YouTube link is not `official` docs)
 *  - Is the URL *specific*?         (`https://github.com` teaches nothing)
 *  - Is the host authoritative?     (MDN yes, a scraped-answers farm no)
 *  - Is the URL clean?              (no tracking, no session ids, no shorteners)
 *
 * Every host list below is a policy decision, not a fact. They are grouped and
 * commented so the policy can be argued with and changed deliberately.
 */

import { type Issue, type IssuePath, issue } from './validator';
import type { ResourceType } from './resource-type';

/* -------------------------------------------------------------------------- */
/* Host classification                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Strips a `www.`/`m.`/`amp.` prefix so policy lists stay short.
 *
 * The prefix is only folded away when a real domain is left behind: `amp.dev` is
 * Google's AMP documentation, not an AMP mirror of a site called `dev`, and
 * blindly stripping the first label turns it into a host that does not exist.
 */
export function normalizeHost(hostname: string): string {
  const host = hostname.toLowerCase();
  const folded = host.replace(/^(www|m|amp)\./, '');
  return folded.includes('.') ? folded : host;
}

/** True when `host` is `suffix` or a subdomain of it. */
function hostMatches(host: string, suffix: string): boolean {
  return host === suffix || host.endsWith(`.${suffix}`);
}

function inList(host: string, list: readonly string[]): string | undefined {
  return list.find((entry) => hostMatches(host, entry));
}

/**
 * URL shorteners. Banned outright: they hide the destination, break dedup by
 * canonical URL, and rot independently of the resource they point at.
 */
export const SHORTENER_HOSTS: readonly string[] = [
  'bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'ow.ly', 'buff.ly', 'is.gd', 'cutt.ly',
  'rb.gy', 'shorturl.at', 'rebrand.ly', 'lnkd.in', 'tiny.cc', 'shorte.st', 'adf.ly',
  'bl.ink', 'trib.al', 'dub.sh', 'l.ly',
];

/** Placeholder and non-public hosts. Their presence means the URL was never filled in. */
export const NON_PUBLIC_HOSTS: readonly string[] = [
  'localhost', '127.0.0.1', '0.0.0.0', '[::1]',
  'example.com', 'example.org', 'example.net', 'test.com', 'foo.com', 'yoursite.com',
  'placeholder.com', 'lorem.com', 'domain.com',
];

/**
 * Hosts that scrape, syndicate or auto-generate technical content. They rank well
 * and are frequently wrong. Disallowed in the `official` and `deep_dive` slots
 * (where authority is the whole point) and a warning elsewhere.
 */
export const LOW_AUTHORITY_HOSTS: readonly string[] = [
  'w3schools.com', 'geeksforgeeks.org', 'tutorialspoint.com', 'javatpoint.com',
  'guru99.com', 'simplilearn.com', 'edureka.co', 'includehelp.com', 'studytonight.com',
  'sanfoundry.com', 'codegrepper.com', 'w3resource.com', 'w3schools.blog',
  'tutorialsteacher.com', 'programiz.com', 'techtarget.com', 'intellipaat.com',
  'knowledgehut.com', 'upgrad.com', 'naukri.com', 'toptal.com',
];

/**
 * Metered or hard paywalls. Not banned — some of the best writing lives here —
 * but flagged, because a learner who hits a paywall on 3 of 7 resources
 * reasonably concludes the roadmap is an affiliate funnel.
 */
export const PAYWALLED_HOSTS: readonly string[] = [
  'medium.com', 'towardsdatascience.com', 'levelup.gitconnected.com', 'betterprogramming.pub',
  'javascript.plainenglish.io', 'blog.devgenius.io', 'itnext.io', 'hackernoon.com',
  'oreilly.com', 'learning.oreilly.com', 'educative.io', 'pluralsight.com',
  'linkedin.com', 'datacamp.com', 'codecademy.com', 'udacity.com',
];

/** Hosts that legitimately serve video for the `video_en` / `video_hi` slots. */
export const VIDEO_HOSTS: readonly string[] = [
  'youtube.com', 'youtu.be', 'youtube-nocookie.com',
  'vimeo.com', 'player.vimeo.com',
  'egghead.io', 'frontendmasters.com', 'laracasts.com', 'wesbos.com',
  'ted.com', 'twitch.tv', 'odysee.com', 'peertube.tv',
  'coursera.org', 'edx.org', 'udemy.com', 'nptel.ac.in', 'swayam.gov.in',
];

/** Source-hosting platforms for the `github` slot. */
export const CODE_HOSTS: readonly string[] = [
  'github.com', 'gitlab.com', 'bitbucket.org', 'codeberg.org', 'sr.ht', 'gitea.com',
  'sourceforge.net', 'gist.github.com',
];

/**
 * Hosts that are genuinely first-party documentation for something. Used only to
 * *suppress* the "official slot looks unofficial" warning — the list is a
 * convenience, never a requirement, because no allowlist can cover every vendor.
 */
export const KNOWN_OFFICIAL_HOSTS: readonly string[] = [
  'developer.mozilla.org', 'developer.chrome.com', 'web.dev', 'whatwg.org', 'w3.org',
  'ecma-international.org', 'tc39.es', 'rfc-editor.org', 'ietf.org', 'iso.org',
  'nodejs.org', 'typescriptlang.org', 'react.dev', 'nextjs.org', 'vuejs.org',
  'svelte.dev', 'angular.dev', 'python.org', 'docs.python.org', 'rust-lang.org',
  'go.dev', 'golang.org', 'kotlinlang.org', 'swift.org', 'developer.apple.com',
  'developer.android.com', 'java.com', 'oracle.com', 'docs.oracle.com',
  'learn.microsoft.com', 'docs.microsoft.com', 'cloud.google.com', 'docs.aws.amazon.com',
  'aws.amazon.com', 'azure.microsoft.com', 'kubernetes.io', 'docker.com', 'docs.docker.com',
  'terraform.io', 'developer.hashicorp.com', 'postgresql.org', 'dev.mysql.com',
  'mongodb.com', 'redis.io', 'sqlite.org', 'nginx.org', 'httpd.apache.org',
  'git-scm.com', 'docs.github.com', 'docs.gitlab.com', 'linux.org', 'kernel.org',
  'ubuntu.com', 'debian.org', 'redhat.com', 'archlinux.org', 'gnu.org',
  'tailwindcss.com', 'sass-lang.com', 'postcss.org', 'vitejs.dev', 'webpack.js.org',
  'jestjs.io', 'vitest.dev', 'playwright.dev', 'cypress.io', 'testing-library.com',
  'pytorch.org', 'tensorflow.org', 'scikit-learn.org', 'numpy.org', 'pandas.pydata.org',
  'huggingface.co', 'openai.com', 'docs.anthropic.com', 'anthropic.com',
  'owasp.org', 'nist.gov', 'cisa.gov', 'portswigger.net',
  'ethereum.org', 'soliditylang.org', 'docs.soliditylang.org', 'bitcoin.org',
  'unity.com', 'docs.unity3d.com', 'unrealengine.com', 'godotengine.org',
  'figma.com', 'help.figma.com', 'material.io', 'm3.material.io',
  'spring.io', 'docs.spring.io', 'rubyonrails.org', 'laravel.com', 'symfony.com',
  'djangoproject.com', 'flask.palletsprojects.com', 'fastapi.tiangolo.com',
  'graphql.org', 'grpc.io', 'openapis.org', 'swagger.io', 'json-schema.org',
  'prometheus.io', 'grafana.com', 'opentelemetry.io', 'jaegertracing.io',
  'kafka.apache.org', 'spark.apache.org', 'airflow.apache.org', 'dbt.com', 'getdbt.com',
  'scrum.org', 'scrumguides.org', 'agilemanifesto.org', 'pmi.org', 'istqb.org',
  'w3.org/WAI', 'nngroup.com',
];

/** Which slots each classification is acceptable in. */
export interface HostClassification {
  readonly host: string;
  readonly isShortener: boolean;
  readonly isNonPublic: boolean;
  readonly isLowAuthority: string | undefined;
  readonly isPaywalled: string | undefined;
  readonly isVideoHost: string | undefined;
  readonly isCodeHost: string | undefined;
  readonly isKnownOfficial: string | undefined;
}

export function classifyHost(hostname: string): HostClassification {
  const host = normalizeHost(hostname);
  return {
    host,
    isShortener: inList(host, SHORTENER_HOSTS) !== undefined,
    isNonPublic: inList(host, NON_PUBLIC_HOSTS) !== undefined,
    isLowAuthority: inList(host, LOW_AUTHORITY_HOSTS),
    isPaywalled: inList(host, PAYWALLED_HOSTS),
    isVideoHost: inList(host, VIDEO_HOSTS),
    isCodeHost: inList(host, CODE_HOSTS),
    isKnownOfficial: inList(host, KNOWN_OFFICIAL_HOSTS),
  };
}

/* -------------------------------------------------------------------------- */
/* URL hygiene                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Query parameters that identify a *campaign or session*, not a resource.
 * They must be stripped: they leak referral data, and they break content-addressed
 * deduplication because the same page arrives under many URLs.
 */
export const TRACKING_PARAMS: readonly string[] = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id',
  'utm_name', 'utm_cid', 'utm_reader', 'utm_referrer',
  'fbclid', 'gclid', 'gclsrc', 'dclid', 'msclkid', 'twclid', 'igshid', 'igsh',
  'mc_cid', 'mc_eid', 'yclid', 'wickedid', 'ttclid', 'li_fat_id',
  'ref', 'ref_src', 'ref_url', 'referrer', 'source', 'src',
  '_hsenc', '_hsmi', 'hsCtaTracking', 'vero_id', 'vero_conv',
  'si', 'feature', 'pp', 'ab_channel', 'kw', 'gi',
  'sessionid', 'session_id', 'PHPSESSID', 'jsessionid',
  'sk', 'gi_token',
];

/** Params that are load-bearing on specific hosts and must survive normalization. */
const PRESERVED_PARAMS: ReadonlyMap<string, readonly string[]> = new Map([
  ['youtube.com', ['v', 'list', 'index', 't', 'start']],
  ['youtube-nocookie.com', ['v', 'list', 'index', 't', 'start']],
  ['stackoverflow.com', ['tab']],
  ['google.com', ['q']],
  ['scholar.google.com', ['q', 'cluster']],
  ['arxiv.org', ['id']],
  ['dev.mysql.com', ['doc']],
]);

/**
 * Produces the canonical form of a resource URL: https, lowercase host, no `www.`,
 * tracking parameters removed, remaining parameters sorted, empty fragment dropped.
 *
 * This is the value hashed to produce a content-addressed resource id, so it must
 * be **stable and total** — same page in, same string out, always.
 */
export interface CanonicalizeOptions {
  /**
   * What the canonical form is *for*.
   *
   * `'identity'` (the default) is the aggressive form used for content addressing
   * and duplicate detection: `www.`/`m.`/`amp.` folded away and a trailing slash
   * removed, so that `www.example.com/docs/` and `example.com/docs` hash to one id.
   *
   * `'storage'` is the conservative form the `resource.url.not_canonical` rule
   * demands of hand-written data. It fixes only what is unambiguously an
   * improvement — an `http` scheme, embedded credentials, a default port, tracking
   * parameters, an empty fragment — and leaves the host and trailing slash exactly
   * as the curator wrote them.
   *
   * The distinction is not fussiness. Roughly seven hundred URLs in this repository
   * carry a `www.` or a trailing slash, and whether the bare form works is a
   * per-site accident: many publishers 301 in the opposite direction, so
   * "normalising" the stored URL would add a redirect hop to every one of those
   * links, and break the ones that do not redirect at all. Identity wants one
   * spelling per page; storage wants the spelling that actually resolves.
   */
  readonly mode?: 'identity' | 'storage';
}

export function canonicalizeUrl(raw: string, options: CanonicalizeOptions = {}): string {
  const identity = options.mode !== 'storage';
  const url = new URL(raw.trim());
  url.protocol = 'https:';
  url.hostname = identity ? normalizeHost(url.hostname) : url.hostname.toLowerCase();
  url.username = '';
  url.password = '';
  if ((url.port === '443' && url.protocol === 'https:') || url.port === '80') url.port = '';

  const preserved = PRESERVED_PARAMS.get(normalizeHost(url.hostname)) ?? [];
  const kept: [string, string][] = [];
  for (const [key, value] of url.searchParams) {
    const lower = key.toLowerCase();
    if (preserved.includes(key)) {
      kept.push([key, value]);
      continue;
    }
    if (TRACKING_PARAMS.some((p) => p.toLowerCase() === lower)) continue;
    kept.push([key, value]);
  }
  kept.sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  url.search = '';
  for (const [key, value] of kept) url.searchParams.append(key, value);

  // A trailing slash is only removed for identity — `/docs` and `/docs/` are the
  // same page, but which spelling the publisher redirects *to* varies by site, so
  // the stored URL is left alone.
  if (identity && url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '');
  }

  // Drop a bare `#`. It cannot be removed through the `hash` property: the parser
  // records an empty-but-present fragment, so `url.hash` reads back as `''` while
  // the serializer still writes the `#`. Trimming the serialized form is the only
  // honest way to do it, and it is the last step so nothing can reintroduce one.
  const serialized = url.toString();
  return serialized.endsWith('#') ? serialized.slice(0, -1) : serialized;
}

/** True when the URL points at a site's front door rather than a specific page. */
export function isBareHomepage(url: URL): boolean {
  return (url.pathname === '/' || url.pathname === '') && url.search === '' && url.hash === '';
}

/* -------------------------------------------------------------------------- */
/* Slot-aware URL rules                                                      */
/* -------------------------------------------------------------------------- */

/** Slots where a front-door URL is never an acceptable learning resource. */
const HOMEPAGE_FORBIDDEN_SLOTS: readonly ResourceType[] = [
  'article', 'deep_dive', 'cheat_sheet', 'video_en', 'video_hi', 'github',
];

/**
 * The subset of URL checks that are structural rather than editorial.
 *
 * A URL that cannot be parsed, names a placeholder host, or carries credentials is
 * not a resource with fixable problems — it is unusable data. It breaks the resource
 * index, which is keyed by canonical URL, and no editorial state makes it acceptable.
 *
 * Extracted so that quarantined `draft` content can be held to exactly these rules
 * and no others. The publication policy lists `unparseable`, `non_public_host` and
 * `embedded_credentials` as structural — exempt from suppression at every status —
 * which is only true if something actually runs them against a draft.
 *
 * `url` is returned only when the remaining slot rules are worth running at all, so
 * callers can use its absence as the stop signal rather than re-deriving it.
 */
export function checkUrlIsAddressable(
  rawUrl: string,
  path: IssuePath,
): { readonly issues: Issue[]; readonly url?: URL } {
  const code = 'resource.url';
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return {
      issues: [
        issue(path, `${code}.unparseable`, 'Not a valid absolute URL.', {
          hint: 'Use a full URL including the https:// scheme.',
          received: rawUrl,
        }),
      ],
    };
  }

  // Checked before anything else. A placeholder host is not a resource with fixable
  // problems, it is an empty field, and "link to the https:// version of
  // localhost:3000" is advice nobody needs.
  const cls = classifyHost(url.hostname);
  if (cls.isNonPublic) {
    return {
      issues: [
        issue(path, `${code}.non_public_host`, `\`${cls.host}\` is a placeholder or local host.`, {
          hint: 'This URL was never filled in. Replace it with the real resource.',
          received: rawUrl,
        }),
      ],
    };
  }

  const issues: Issue[] = [];
  if (url.username || url.password) {
    issues.push(
      issue(path, `${code}.embedded_credentials`, 'URL contains embedded credentials.', {
        hint: 'Remove the userinfo component.',
      }),
    );
  }
  return { issues, url };
}

/**
 * Validates a resource URL against the slot it occupies. This is the single
 * highest-value rule set in the schema: it is what makes a fabricated resource
 * list fail the build.
 */
export function checkUrlForSlot(rawUrl: string, type: ResourceType, path: IssuePath): Issue[] {
  const code = 'resource.url';
  const addressable = checkUrlIsAddressable(rawUrl, path);
  const url = addressable.url;
  // An unparseable or placeholder URL stops here: nothing further is meaningful, and
  // a second opinion on its slot would only obscure the one fact that matters.
  if (url === undefined) return addressable.issues;

  const issues: Issue[] = [...addressable.issues];
  const cls = classifyHost(url.hostname);

  if (url.protocol !== 'https:') {
    issues.push(
      issue(path, `${code}.not_https`, `Uses ${url.protocol.replace(':', '')}, not https.`, {
        hint: 'Link to the https:// version. Browsers block or warn on mixed content.',
        received: rawUrl,
      }),
    );
  }

  if (cls.isShortener) {
    issues.push(
      issue(path, `${code}.shortener`, `\`${cls.host}\` is a URL shortener.`, {
        hint: 'Resolve it and store the destination URL. Shorteners hide the target and rot independently.',
        received: rawUrl,
      }),
    );
  }

  const tracking = [...url.searchParams.keys()].filter((k) => {
    const preserved = PRESERVED_PARAMS.get(cls.host) ?? [];
    if (preserved.includes(k)) return false;
    return TRACKING_PARAMS.some((p) => p.toLowerCase() === k.toLowerCase());
  });
  if (tracking.length > 0) {
    issues.push(
      issue(path, `${code}.tracking_params`, `Carries tracking parameter(s): ${tracking.join(', ')}.`, {
        hint: `Store the clean URL: ${canonicalizeUrl(rawUrl)}`,
        received: rawUrl,
      }),
    );
  }

  // --- Slot / host coherence ------------------------------------------------

  if (type === 'video_en' || type === 'video_hi') {
    if (!cls.isVideoHost) {
      issues.push(
        issue(path, `${code}.slot_mismatch`, `A \`${type}\` resource must be a video, but \`${cls.host}\` is not a video host.`, {
          hint: `Known video hosts: ${VIDEO_HOSTS.slice(0, 6).join(', ')}, … . If this is an article, move it to the \`article\` slot.`,
          received: rawUrl,
        }),
      );
    } else if (hostMatches(cls.host, 'youtube.com') || hostMatches(cls.host, 'youtube-nocookie.com')) {
      const hasVideo = url.searchParams.has('v');
      const hasList = url.searchParams.has('list');
      const isShortForm = /^\/(shorts|live|embed)\/[\w-]{6,}/.test(url.pathname);
      if (url.pathname === '/results' || url.searchParams.has('search_query')) {
        issues.push(
          issue(path, `${code}.search_results_page`, 'Links to a YouTube search results page, not a video.', {
            hint: 'Pick one specific video and link to it directly.',
            received: rawUrl,
          }),
        );
      } else if (/^\/(@|c\/|channel\/|user\/)/.test(url.pathname)) {
        issues.push(
          issue(path, `${code}.channel_not_video`, 'Links to a YouTube channel, not a video or playlist.', {
            hint: 'Link the specific video that teaches this topic.',
            received: rawUrl,
          }),
        );
      } else if (!hasVideo && !hasList && !isShortForm) {
        issues.push(
          issue(path, `${code}.no_video_id`, 'YouTube URL has no video (`v=`) or playlist (`list=`) identifier.', {
            received: rawUrl,
          }),
        );
      }
    } else if (hostMatches(cls.host, 'youtu.be') && !/^\/[\w-]{6,}/.test(url.pathname)) {
      issues.push(
        issue(path, `${code}.no_video_id`, 'youtu.be URL has no video id in its path.', { received: rawUrl }),
      );
    }
  }

  if (type === 'github') {
    if (!cls.isCodeHost) {
      issues.push(
        issue(path, `${code}.slot_mismatch`, `A \`github\` resource must live on a source host, but \`${cls.host}\` is not one.`, {
          hint: `Expected one of: ${CODE_HOSTS.slice(0, 4).join(', ')}.`,
          received: rawUrl,
        }),
      );
    } else {
      const segments = url.pathname.split('/').filter(Boolean);
      if (segments[0] === 'topics' || segments[0] === 'search' || segments[0] === 'trending') {
        issues.push(
          issue(path, `${code}.not_a_repository`, `Links to a ${cls.host} \`/${segments[0]}\` listing page, not a repository.`, {
            hint: 'Choose the single best repository and link to it. A tag listing is a search, not a resource.',
            received: rawUrl,
          }),
        );
      } else if (
        segments.length < 2 &&
        // `https://github.com` itself names neither an owner nor a repo, so the
        // homepage rule below describes it correctly and this one would not. Leaving
        // it to that rule keeps one defect to one issue.
        !isBareHomepage(url) &&
        !hostMatches(cls.host, 'gist.github.com')
      ) {
        issues.push(
          issue(path, `${code}.not_a_repository`, 'Links to a user or organisation, not a repository.', {
            hint: 'Use the full `https://github.com/<owner>/<repo>` form.',
            received: rawUrl,
          }),
        );
      }
    }
  }

  if (type === 'official') {
    if (cls.isVideoHost && !cls.isKnownOfficial) {
      issues.push(
        issue(path, `${code}.slot_mismatch`, `The \`official\` slot must hold first-party documentation, but \`${cls.host}\` is a video platform.`, {
          hint: 'Link the vendor\'s own docs. Move the video to `video_en` / `video_hi`.',
          received: rawUrl,
        }),
      );
    }
    if (cls.isLowAuthority) {
      issues.push(
        issue(path, `${code}.low_authority_official`, `\`${cls.host}\` is a third-party tutorial site and cannot be the \`official\` source.`, {
          hint: 'Find the vendor, standards body, or maintainer documentation.',
          received: rawUrl,
        }),
      );
    }
  }

  if (type === 'deep_dive' && cls.isLowAuthority) {
    issues.push(
      issue(path, `${code}.low_authority_deep_dive`, `\`${cls.host}\` publishes shallow syndicated content and cannot serve as a deep dive.`, {
        hint: 'Use a specification, a maintainer post, a conference talk, or a paper.',
        received: rawUrl,
      }),
    );
  }

  if (cls.isLowAuthority && type !== 'official' && type !== 'deep_dive') {
    issues.push(
      issue(path, `${code}.low_authority`, `\`${cls.host}\` is a low-authority source.`, {
        severity: 'warning',
        hint: 'Prefer first-party docs or a recognised author. Acceptable only if nothing better exists.',
        received: rawUrl,
      }),
    );
  }

  if (cls.isPaywalled) {
    issues.push(
      issue(path, `${code}.paywalled`, `\`${cls.host}\` is metered or paywalled.`, {
        severity: 'warning',
        hint: 'Keep at most one paywalled resource per topic, and never in the `official` slot.',
        received: rawUrl,
      }),
    );
  }

  // --- Specificity ---------------------------------------------------------

  if (isBareHomepage(url)) {
    if (HOMEPAGE_FORBIDDEN_SLOTS.includes(type)) {
      issues.push(
        issue(path, `${code}.bare_homepage`, `Links to the \`${cls.host}\` homepage, which teaches nothing about this topic.`, {
          hint: 'Link the specific page, article, video or repository.',
          received: rawUrl,
        }),
      );
    } else {
      issues.push(
        issue(path, `${code}.homepage_in_official_slot`, `Links to the \`${cls.host}\` homepage rather than a documentation page.`, {
          severity: 'warning',
          hint: 'Prefer the deep link, e.g. the docs index or the relevant guide.',
          received: rawUrl,
        }),
      );
    }
  }

  return issues;
}
