"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp", "GlobalTech", "Nexus", "Pioneer", "Vanguard", 
  "Bonhill", "Caxton", "NICE", "Digital First", "TechFlow"
];

export default function LogoBanner() {
  return (
    <div className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">
          Trusted by 600+ Global Organizations
        </p>
      </div>
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <span key={index} className="text-3xl font-heading font-black text-gray-200 hover:text-[var(--color-secondary)] transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
