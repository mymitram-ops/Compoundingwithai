import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "green" | "none";
}

export function Card({ children, className, hover = false, glow = "none" }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card relative overflow-hidden",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:border-slate-600/80",
        glow === "blue" && "hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
        glow === "green" && "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
