"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Yaan Enterprize completely transformed our digital presence. Their team understood our vision and delivered a platform that exceeded our expectations.",
    author: "Rajesh Shrestha",
    role: "CEO, TechInnovate Nepal",
    rating: 5,
  },
  {
    quote: "The mobile app they built for us is fast, intuitive, and beautifully designed. Our user engagement has doubled since the launch.",
    author: "Sarah Jenkins",
    role: "Product Manager, GlobalFlow",
    rating: 5,
  },
  {
    quote: "Professional, communicative, and highly skilled. They are not just an IT vendor, but a true technology partner.",
    author: "Bikash Maharjan",
    role: "Founder, NextGen Retail",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0F172A]/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Client Testimonials"
          subtitle="Don't just take our word for it. Hear what our partners have to say."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 glass rounded-2xl border border-white/5 relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={60} />
              
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-white/90 text-lg leading-relaxed mb-8 relative z-10 italic">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-bold text-xl">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.author}</h4>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
