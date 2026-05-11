"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Strategy & Consultation",
    description: "Recommendations from our expert consultants for successful digital transformation and software architecture planning.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Technology & Implementation",
    description: "Tailored software development and implementation services including cloud architecture, mobile apps, and custom web platforms.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Managed Services & Support",
    description: "Supporting your business with 24/7 managed services, health checks, and ongoing technical support for your critical systems.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BusinessFramework() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="approach" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Numbered Tabs and Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-primary)] mb-12">
              Our Business Framework
            </h2>
            
            <div className="flex gap-6 mb-12">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-xl font-bold transition-all ${
                    activeStep === step.id
                      ? "bg-[var(--color-secondary)] border-[var(--color-secondary)] text-white"
                      : "border-gray-200 text-gray-400 hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
                  }`}
                >
                  {step.id}
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                    {steps.find((s) => s.id === activeStep)?.title}
                  </h3>
                  <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
                    {steps.find((s) => s.id === activeStep)?.description}
                  </p>
                  <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                    Learn More <ArrowRight size={20} />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={steps.find((s) => s.id === activeStep)?.image} 
                  alt={steps.find((s) => s.id === activeStep)?.title}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </AnimatePresence>
            {/* Background decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[var(--color-accent)] rounded-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
