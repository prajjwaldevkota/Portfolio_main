import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
  text?: string
}

export function LoadingSpinner({ size = "md", className, text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  }

  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      <div className={cn("animate-spin rounded-full border-2 border-muted border-t-primary", sizeClasses[size])} />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  )
}

export function LoadingDots({ className, text }: { className?: string; text?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  )
}

export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse space-y-3", className)}>
      <div className="h-4 bg-muted rounded w-3/4" />
      <div className="h-4 bg-muted rounded w-1/2" />
      <div className="h-4 bg-muted rounded w-5/6" />
    </div>
  )
}

export function LoadingCard() {
  return (
    <div className="rounded-lg border p-6 space-y-4 animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 bg-muted rounded-full" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-[250px]" />
          <div className="h-4 bg-muted rounded w-[200px]" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-[90%]" />
        <div className="h-4 bg-muted rounded w-[80%]" />
      </div>
    </div>
  )
} 