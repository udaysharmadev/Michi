/**
 * Shared test fixtures.
 *
 * One canonical known-good topic, defined once. Every negative test in the suite is
 * an override of this object, which means the fixture doubles as an executable
 * specification: if the published tier is unreachable, the tests that use it fail
 * rather than the corpus quietly staying empty.
 *
 * The prose is real prose about a real subject on purpose. Filler would trip the
 * boilerplate rules, so the fixture cannot be written lazily — which is the same
 * constraint the content itself is under.
 */

/** A complete, publishable seven-slot resource list drawn from six distinct hosts. */
export function sevenSlots(): Record<string, unknown>[] {
  return [
    {
      type: 'official',
      title: 'PostgreSQL — Connection Pooling',
      url: 'https://www.postgresql.org/docs/current/runtime-config-connection.html',
    },
    {
      type: 'video_en',
      title: 'Connection Pooling Explained',
      url: 'https://www.youtube.com/watch?v=Tn6-PIqc4UM',
      lang: 'en',
    },
    {
      type: 'video_hi',
      title: 'Connection Pool क्या है',
      url: 'https://www.youtube.com/watch?v=dGcsHMXbSOA',
      lang: 'hi',
    },
    {
      type: 'article',
      title: 'AWS — Managing Connections with RDS Proxy',
      url: 'https://aws.amazon.com/blogs/database/managing-connections-with-rds-proxy',
    },
    {
      type: 'github',
      title: 'PgBouncer — Lightweight Connection Pooler',
      url: 'https://github.com/pgbouncer/pgbouncer',
    },
    { type: 'cheat_sheet', title: 'Devhints — psql', url: 'https://devhints.io/postgresql' },
    {
      type: 'deep_dive',
      title: 'Brandur — Postgres Connection Limits',
      url: 'https://brandur.org/postgres-connections',
    },
  ];
}

/**
 * A topic that passes every rule at `publishStatus: 'published'`.
 *
 * Returned as a fresh object each call so a test that mutates it cannot affect the
 * next one, and typed as a plain record because most tests deliberately feed it
 * values the `Topic` type forbids.
 */
export function publishedTopic(over: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    slug: 'connection-pooling',
    title: 'Connection Pooling',
    publishStatus: 'published',
    difficulty: 'Intermediate',
    estimatedTime: '3 hours',
    description:
      'A pool keeps a fixed set of open Postgres connections so requests reuse sockets instead of paying a fork per query.',
    whyLearnThis:
      'Postgres forks a process per connection, so an unpooled service that opens one connection per request collapses under load long before the database runs out of CPU.',
    whenIsItUsed:
      'Whenever a web process talks to a relational database under concurrency — every request handler, every background worker.',
    whereIsItUsed:
      'PgBouncer in front of Postgres, HikariCP in Spring Boot, and the pool built into Rails ActiveRecord.',
    learningOutcomes: [
      'Size a pool from the database max_connections rather than the request rate.',
      'Recognise pool exhaustion in a latency graph that flatlines at the pool limit.',
      'Explain why a transaction-scoped pool breaks session-level prepared statements.',
    ],
    commonMistakes: [
      'Setting the pool larger than the database can accept, which moves the queue.',
      'Leaving a connection checked out across an external HTTP call.',
    ],
    realWorldApplications: [
      'Serverless functions fronting Postgres through PgBouncer in transaction mode.',
      'A Rails monolith tuned to survive a traffic spike without new connections.',
    ],
    resources: sevenSlots(),
    ...over,
  };
}
