"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Microsoft", role: "Solutions Partner", logo: "M" },
  { name: "Salesforce", role: "Ridge Partner", logo: "S" },
  { name: "AWS", role: "Advanced Tier", logo: "A" },
  { name: "Google Cloud", role: "Premier Partner", logo: "G" },
  { name: "Vercel", role: "Enterprise Partner", logo: "V" },
  { name: "Stripe", role: "Certified Partner", logo: "S" },
];

export default function Partnerships() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Strategic <span className="lime-highlight">Partnerships</span></h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We collaborate with global technology leaders to deliver state-of-the-art solutions to our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors border border-white/10">
                <span className="text-3xl font-bold text-white/40 group-hover:text-[var(--color-accent)] transition-colors">{partner.logo}</span>
              </div>
              <h4 className="font-bold text-lg">{partner.name}</h4>
              <p className="text-sm text-white/40">{partner.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
