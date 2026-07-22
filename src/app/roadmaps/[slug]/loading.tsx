export default function RoadmapViewerLoading() {
  return (
    <div className="h-screen w-full flex bg-background">
      {/* Sidebar skeleton */}
      <div className="w-80 border-r border-border p-6 hidden lg:flex flex-col gap-6 shrink-0">
        <div className="h-4 w-32 bg-muted rounded animate-pulse" />
        <div className="h-8 w-48 bg-muted rounded-xl animate-pulse" />
        <div className="h-16 w-full bg-muted/50 rounded-xl animate-pulse" />
        <div className="space-y-3 mt-4">
          <div className="h-5 w-full bg-muted/30 rounded animate-pulse" />
          <div className="h-5 w-3/4 bg-muted/30 rounded animate-pulse" />
          <div className="h-5 w-5/6 bg-muted/30 rounded animate-pulse" />
        </div>
        <div className="mt-auto">
          <div className="h-2.5 w-full bg-muted rounded-full animate-pulse mb-3" />
          <div className="h-12 w-full bg-muted/50 rounded-xl animate-pulse" />
        </div>
      </div>
      {/* Canvas area skeleton */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-medium text-muted-foreground">Loading roadmap...</p>
        </div>
      </div>
    </div>
  );
}
