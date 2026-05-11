"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "15+", label: "Expert Developers" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <span className="text-[#06B6D4] font-semibold tracking-wider uppercase text-sm">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              A Mission-Driven Technology Partner from Nepal
            </h2>
            <p className="text-muted text-lg mb-6 leading-relaxed">
              Based in the heart of Nepal, Yaan Enterprise is a collective of innovative minds dedicated to pushing the boundaries of technology. We don't just write code; we engineer scalable, secure, and beautiful digital products that empower businesses to thrive in the modern economy.
            </p>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Our experienced developers and designers blend Silicon Valley standards with local ingenuity, ensuring every project we deliver meets the highest global benchmarks for quality and scalability.
            </p>

            <div className="space-y-4 mb-10">
              {['Innovative and client-focused approach', 'World-class engineering standards', 'Commitment to scalable architecture'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-[#2563EB]" size={20} />
                  <span className="text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a href="#portfolio" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-all">
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract visual representation instead of a placeholder image */}
            <div className="aspect-square w-full max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] rounded-3xl rotate-6 opacity-20 blur-xl" />
              <div className="absolute inset-0 glass rounded-3xl border border-white/10 flex flex-col p-8 overflow-hidden">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="h-4 w-3/4 bg-white/10 rounded-md animate-pulse" />
                  <div className="h-4 w-full bg-white/10 rounded-md animate-pulse delay-75" />
                  <div className="h-4 w-5/6 bg-white/10 rounded-md animate-pulse delay-150" />
                  <div className="h-4 w-1/2 bg-white/10 rounded-md animate-pulse delay-200" />
                  <div className="mt-8 flex gap-4">
                     <div className="h-20 w-20 bg-gradient-to-br from-[#2563EB]/20 to-transparent rounded-xl" />
                     <div className="h-20 w-20 bg-gradient-to-br from-[#06B6D4]/20 to-transparent rounded-xl" />
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl border border-white/10 shadow-2xl">
                <p className="text-4xl font-heading font-bold gradient-text">100%</p>
                <p className="text-sm font-medium text-white/80 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 glass rounded-2xl border border-white/5"
            >
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-muted font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
