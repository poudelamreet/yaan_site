"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "", light = true }: LogoProps) {
  return (
    <motion.div 
      className={`flex items-center gap-2 font-heading font-extrabold text-2xl tracking-tighter ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center gap-0">
        <span className="text-[var(--color-accent)]">Y</span>
        <span className={light ? "text-white" : "text-[var(--color-primary)]"}>AAN</span>
      </div>
      <span className={`font-bold tracking-tight ${light ? "text-white" : "text-[var(--color-primary)]"}`}>
        Enterprise
      </span>
    </motion.div>
  );
}
