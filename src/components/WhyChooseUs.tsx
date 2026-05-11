"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Zap, ShieldCheck, Users, Clock, DollarSign, Layers } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast Delivery", desc: "Agile methodologies ensure rapid prototyping and quick time-to-market." },
  { icon: Layers, title: "Scalable Architecture", desc: "Built on robust cloud infrastructures designed to grow with your user base." },
  { icon: ShieldCheck, title: "Secure Systems", desc: "Enterprise-grade security protocols to protect your sensitive data." },
  { icon: Users, title: "Experienced Team", desc: "Top-tier developers and designers with global project experience." },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock maintenance and support to keep your systems running smoothly." },
  { icon: DollarSign, title: "Affordable Enterprise", desc: "Premium quality solutions at competitive pricing optimized for ROI." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0F172A]/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Why Choose Yaan"
          subtitle="We combine technical excellence with business acumen to deliver unmatched value."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-8 glass rounded-2xl border border-white/5 hover:border-[#2563EB]/50 transition-colors group"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#0F172A] border border-white/10 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
