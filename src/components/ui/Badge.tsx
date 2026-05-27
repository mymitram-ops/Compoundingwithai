import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "blue" | "green" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
        variant === "default" && "bg-slate-800 text-slate-300 border border-slate-700",
        variant === "blue" && "bg-sky-500/10 text-sky-400 border border-sky-500/30",
        variant === "green" && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
        variant === "outline" && "border border-slate-600 text-slate-400",
        className
      )}
    >
      {children}
    </span>
  );
}
