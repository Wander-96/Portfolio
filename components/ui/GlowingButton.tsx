"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlowingButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export function GlowingButton({ children, className, ...props }: GlowingButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-all duration-300 rounded-full",
        "bg-[#54628A]/10 backdrop-blur-md border border-[#54628A]/30 hover:bg-[#54628A]/20",
        "shadow-[0_0_15px_rgba(84,98,138,0.2)] hover:shadow-[0_0_25px_rgba(84,98,138,0.5)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
