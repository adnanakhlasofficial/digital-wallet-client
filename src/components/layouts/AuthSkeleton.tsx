import { Skeleton } from "@/components/ui/skeleton";

export default function AuthSkeleton() {
  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      {/* Left: Form Skeleton */}
      <div className="flex flex-col justify-center w-full max-w-md px-8 space-y-6">
        <Skeleton className="h-5 w-24" /> {/* Go to Home */}
        <Skeleton className="h-6 w-72" /> {/* Welcome Message */}
        <div className="space-y-4 pt-2">
          <Skeleton className="h-10 w-full" /> {/* Phone Input */}
          <Skeleton className="h-10 w-full" /> {/* Password Input */}
        </div>
        <div className="space-y-2">
          <Skeleton className="h-10 w-full" /> {/* Login Button */}
          <Skeleton className="h-10 w-full" /> {/* Login as Admin */}
        </div>
        <Skeleton className="h-4 w-40" /> {/* Register Link */}
      </div>

      {/* Right: Illustration Skeleton */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-muted/30">
        <Skeleton className="h-[300px] w-[200px] rounded-xl" />{" "}
        {/* Phone Illustration */}
      </div>
    </div>
  );
}
