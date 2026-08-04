import React from "react";
import { cn } from "@/lib/utils";

interface TerminalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function TerminalButton({ children, className, ...props }: TerminalButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 border border-[var(--color-offwhite)] bg-transparent text-[var(--color-offwhite)]",
        "font-mono text-sm uppercase tracking-widest transition-colors duration-200",
        "hover:bg-[var(--color-offwhite)] hover:text-[var(--color-charcoal)]",
        "flex items-center justify-center gap-3",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
