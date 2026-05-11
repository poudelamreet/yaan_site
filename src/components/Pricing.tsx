"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Custom",
    desc: "Perfect for small businesses looking to establish a digital presence.",
    features: ["Responsive Website", "Basic SEO Optimization", "Contact Form Integration", "1 Month Support", "Shared Hosting"],
    popular: false,
  },
  {
    name: "Business",
    price: "Custom",
    desc: "Ideal for growing companies needing advanced features and scalable architecture.",
    features: ["Custom Web/App Development", "Advanced SEO & Analytics", "CMS Integration", "E-commerce Capabilities", "6 Months Support", "Cloud Hosting Setup"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Comprehensive solutions for large organizations requiring dedicated resources.",
    features: ["Full Stack Enterprise Systems", "AI & Automation Solutions", "Dedicated Team", "Custom Infrastructure Design", "24/7 Priority Support", "High Availability Architecture"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Transparent Pricing"
          subtitle="Flexible engagement models tailored to your project scale and complexity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border transition-all ${
                plan.popular 
                  ? "glass border-[#2563EB]/50 shadow-[0_0_30px_-10px_rgba(37,99,235,0.3)] md:-translate-y-4" 
                  : "bg-[#0F172A]/40 border-white/10 hover:border-white/20"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-xs font-bold text-white uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-heading font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-muted text-sm mb-6 h-10">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-muted"> / project</span>
              </div>

              <a 
                href="#contact" 
                className={`block text-center w-full py-3 rounded-lg font-medium transition-all mb-8 ${
                  plan.popular
                    ? "bg-white text-[#0F172A] hover:bg-white/90"
                    : "glass border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Get a Quote
              </a>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className={plan.popular ? "text-[#06B6D4]" : "text-muted"} />
                    <span className="text-sm text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
