export default function RoadmapsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header skeleton */}
        <div className="mb-10">
          <div className="h-10 w-64 bg-muted rounded-xl animate-pulse mb-4" />
          <div className="h-5 w-96 bg-muted/50 rounded-lg animate-pulse" />
        </div>
        {/* Filter pills skeleton */}
        <div className="flex gap-3 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-9 w-24 bg-muted rounded-full animate-pulse" />
          ))}
        </div>
        {/* Cards grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-64 bg-card border border-border rounded-[2rem] animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
