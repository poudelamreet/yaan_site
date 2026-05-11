"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export default function LeadGen() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-navy rounded-3xl p-8 md:p-16 overflow-hidden relative flex flex-col lg:flex-row items-center gap-12">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-secondary)] opacity-10 blur-[120px] -z-0" />
          
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] mb-6 font-bold text-sm uppercase tracking-wider">
              <BookOpen size={18} />
              Free Resource
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              An Insightful Whitepaper to Help You <span className="lime-highlight">Embrace Digital</span> Imperative
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl">
              Learn how modern enterprises are leveraging AI and Cloud infrastructure to thrive in a tech-driven global market. Download our latest expert guide.
            </p>
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group w-full sm:w-auto text-lg px-8 py-4">
              Download Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex-1 relative z-10 w-full max-w-md lg:max-w-none">
            <motion.div
              initial={{ rotate: 5, y: 40 }}
              whileInView={{ rotate: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-2xl p-4 transform"
            >
              <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800" 
                  alt="Whitepaper Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
