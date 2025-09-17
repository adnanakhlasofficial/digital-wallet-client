import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      {/* Sidebar Skeleton */}
      <aside className="w-64 border-r bg-muted/40 p-4 space-y-3">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-28" />
        <Skeleton className="h-6 w-24" />
      </aside>

      {/* Main Content Skeleton */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header Skeleton */}
        <header className="h-16 border-b px-4 flex items-center justify-between bg-muted/30">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </header>

        {/* Scrollable Content Skeleton */}
        <div className="flex-1 p-4 space-y-4 overflow-auto">
          <Skeleton className="h-96 w-full rounded-md" />
          <Skeleton className="h-96 w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}
