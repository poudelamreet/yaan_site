"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-primary)] mb-4">
          {title}
        </h2>
        <div className={`w-20 h-1 bg-[var(--color-secondary)] rounded-full mb-6 ${centered ? "mx-auto" : ""}`} />
        <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
}
