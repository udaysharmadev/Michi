export default function RoadmapViewerLoading() {
  return (
    <div className="h-screen w-full flex bg-background">
      <div className="w-[300px] border-r border-border p-5 hidden lg:flex flex-col gap-4 shrink-0">
        <div className="h-3 w-24 bg-muted rounded animate-pulse" />
        <div className="h-6 w-40 bg-muted rounded animate-pulse" />
        <div className="h-12 w-full bg-muted/50 rounded-lg animate-pulse" />
        <div className="space-y-2 mt-2">
          <div className="h-4 w-full bg-muted/30 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-muted/30 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-muted/30 rounded animate-pulse" />
        </div>
        <div className="mt-auto">
          <div className="h-2 w-full bg-muted rounded-full animate-pulse mb-3" />
          <div className="h-10 w-full bg-muted/50 rounded-lg animate-pulse" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-border border-t-primary rounded-full animate-spin" />
          <p className="text-xs font-medium text-muted-foreground">Loading roadmap...</p>
        </div>
      </div>
    </div>
  );
}
