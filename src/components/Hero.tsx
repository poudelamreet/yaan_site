"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Transformation", "Yaan", "Innovation", "Excellence"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-navy">
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 mb-8 bg-white/5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-sm font-bold text-white tracking-wide uppercase">Premier IT Company in Nepal</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-tight mb-8 tracking-tight h-[180px] md:h-[220px] flex flex-col justify-center items-center">
            <span>Driving Digital</span>
            <div className="relative h-32 md:h-48 w-full flex justify-center mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute whitespace-nowrap ${words[wordIndex] === "Yaan" ? "" : "lime-highlight"}`}
                >
                  {words[wordIndex] === "Yaan" ? (
                    <span className="flex items-center justify-center">
                      <motion.span 
                        className="text-[var(--color-accent)]"
                        animate={{ 
                          textShadow: ["0 0 0px #25D366", "0 0 20px #25D366", "0 0 0px #25D366"],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Y
                      </motion.span>
                      <span className="text-white">AAN</span>
                    </span>
                  ) : (
                    words[wordIndex]
                  )}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Yaan Enterprise helps startups and enterprises turn complex challenges into scalable, future-proof digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="btn-primary flex items-center justify-center gap-2 group w-full sm:w-auto text-lg px-8 py-4"
            >
              Explore Services & Solutions
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
