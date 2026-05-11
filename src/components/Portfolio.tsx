"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, FileText } from "lucide-react";

const projects = [
  { title: "SaaS Analytics Platform", category: "Web App", color: "from-blue-500/20 to-purple-500/20" },
  { title: "Enterprise Business Dashboard", category: "UI/UX & Frontend", color: "from-emerald-500/20 to-teal-500/20" },
  { title: "NextGen E-commerce App", category: "Mobile App", color: "from-orange-500/20 to-red-500/20" },
  { title: "Fintech Mobile Wallet", category: "Mobile App", color: "from-indigo-500/20 to-blue-500/20" },
  { title: "AI Customer Support Chatbot", category: "AI Solution", color: "from-pink-500/20 to-rose-500/20" },
  { title: "Smart School Management System", category: "Web App", color: "from-cyan-500/20 to-blue-500/20" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured Work"
          subtitle="Explore some of our recent projects that showcase our capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass border border-white/5"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[#0F172A]/50 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Mockup visual */}
                <div className="w-3/4 h-3/4 bg-[#020617] rounded-t-xl border border-white/10 shadow-2xl translate-y-8 group-hover:translate-y-4 transition-transform duration-500 flex flex-col">
                   <div className="h-6 border-b border-white/10 flex items-center px-3 gap-1">
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                   </div>
                   <div className="flex-1 p-4 flex flex-col gap-2">
                     <div className="h-4 w-1/3 bg-white/5 rounded" />
                     <div className="h-20 w-full bg-white/5 rounded mt-2" />
                     <div className="flex gap-2 mt-2">
                        <div className="h-10 w-1/2 bg-white/5 rounded" />
                        <div className="h-10 w-1/2 bg-white/5 rounded" />
                     </div>
                   </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-2">{project.category}</p>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">{project.title}</h3>
                
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                    <FileText size={16} /> Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 rounded-full glass border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
