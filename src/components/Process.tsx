"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Search, PenTool, LayoutTemplate, Code2, ShieldCheck, Rocket, Wrench } from "lucide-react";

const steps = [
  { id: "01", icon: Search, title: "Discovery", desc: "Understanding your business goals, target audience, and technical requirements." },
  { id: "02", icon: PenTool, title: "Planning", desc: "Creating a comprehensive project roadmap and architecture design." },
  { id: "03", icon: LayoutTemplate, title: "Design", desc: "Crafting intuitive user interfaces and seamless user experiences." },
  { id: "04", icon: Code2, title: "Development", desc: "Writing clean, scalable, and secure code using agile methodologies." },
  { id: "05", icon: ShieldCheck, title: "Testing", desc: "Rigorous QA testing to ensure bug-free and performant delivery." },
  { id: "06", icon: Rocket, title: "Deployment", desc: "Smooth launch onto production servers with zero downtime." },
  { id: "07", icon: Wrench, title: "Maintenance", desc: "Ongoing support and updates to keep your product running perfectly." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="How We Work"
          subtitle="Our proven 7-step process ensures transparency, quality, and on-time delivery."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#06B6D4] to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#020617] border-2 border-[#06B6D4] flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                </div>

                {/* Content Box */}
                <div className={`ml-16 md:ml-0 md:w-[45%] p-6 glass rounded-2xl border border-white/5 hover:border-white/20 transition-all ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4]">
                      <step.icon size={20} />
                    </div>
                    <span className="text-3xl font-heading font-extrabold text-white/10 uppercase">{step.id}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-muted">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
