"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function TechStack() {
  const technologies = [
    "React", "Next.js", "Node.js", "Python", "Django", 
    "Flutter", "AWS", "Docker", "MongoDB", "PostgreSQL"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0F172A]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Our Technology Stack"
          subtitle="We use the most modern and reliable technologies to build scalable enterprise solutions."
        />

        {/* Marquee effect using CSS and Framer Motion */}
        <div className="relative flex overflow-x-hidden group">
          <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-[#020617] to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-[#0F172A] to-transparent" />

          <motion.div
            className="flex whitespace-nowrap gap-12 py-8 items-center"
            animate={{ x: [0, -1035] }} // Adjust based on content width
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Double the list for seamless loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div 
                key={index}
                className="flex items-center justify-center px-8 py-4 glass rounded-xl border border-white/10 hover:border-[#06B6D4]/50 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] transition-all min-w-[200px]"
              >
                <span className="text-xl font-heading font-semibold text-white/90">{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
