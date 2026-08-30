export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="w-7 h-7 border-2 border-border border-t-primary rounded-full animate-spin" />
        <p className="text-xs font-medium text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
