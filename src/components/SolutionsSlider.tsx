"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, Settings, ShieldCheck } from "lucide-react";

const solutions = [
  {
    title: "System Health Checks",
    desc: "Comprehensive evaluation of your current IT infrastructure to identify bottlenecks and security risks.",
    icon: ShieldCheck,
  },
  {
    title: "Process Mapping",
    desc: "Detailed documentation and optimization of your business workflows for maximum efficiency.",
    icon: Search,
  },
  {
    title: "Legacy Migration",
    desc: "Seamlessly transition your old systems to modern, cloud-native architectures without data loss.",
    icon: Settings,
  },
  {
    title: "Security Audits",
    desc: "In-depth vulnerability assessments and implementation of enterprise-grade security protocols.",
    icon: CheckCircle2,
  },
];

export default function SolutionsSlider() {
  return (
    <section className="py-24 bg-[var(--color-background)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-primary)] mb-6">
              Find What You Are <span className="text-[var(--color-secondary)]">Looking For</span>
            </h2>
            <p className="text-lg text-[var(--color-muted)]">
              Specialized technical services designed to address the specific operational challenges of modern enterprises.
            </p>
          </div>
          <div className="hidden md:flex gap-4 mb-2">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all cursor-pointer">
              <ArrowRight size={24} className="rotate-180" />
            </div>
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all cursor-pointer">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              whileHover={{ y: -10 }}
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-background)] flex items-center justify-center text-[var(--color-secondary)] mb-6 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{item.title}</h3>
              <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
                {item.desc}
              </p>
              <a href="#contact" className="text-[var(--color-secondary)] font-bold flex items-center gap-2 group/link">
                Learn More <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
