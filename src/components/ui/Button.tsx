import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer",
          size === "sm" && "px-5 py-2.5 text-sm",
          size === "md" && "px-7 py-3.5 text-base",
          size === "lg" && "px-9 py-4 text-lg",
          variant === "primary" && "btn-primary",
          variant === "outline" && "border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400",
          variant === "ghost" && "text-slate-400 hover:text-white hover:bg-slate-800",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
