"use client";

import { motion } from "framer-motion";

const groupCompanies = [
  {
    title: "Yaan Digital",
    accent: "bg-purple-600",
    services: ["CRM & ERP Consultancy", "Quality Assurance", "Enterprise Implementation", "Automation", "Cloud Solutions"],
    desc: "Empowering businesses through specialized enterprise software solutions.",
    image: "/images/digital.png",
  },
  {
    title: "Yaan AI & Data",
    accent: "bg-pink-600",
    services: ["Artificial Intelligence", "Business Intelligence", "Data Integration", "Machine Learning", "Data Analytics"],
    desc: "Transforming raw data into actionable business intelligence.",
    image: "/images/ai_data.png",
  },
  {
    title: "Yaan Managed Support",
    accent: "bg-green-600",
    services: ["24/7 Managed Services", "System Health Checks", "Technical Support", "Security Patching"],
    desc: "Reliable support and managed services for your critical systems.",
    image: "/images/support.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-primary)] mb-6">
            Yaan as a group
          </h2>
          <p className="text-xl text-[var(--color-muted)] max-w-3xl mx-auto font-medium">
            We believe in transformations with trust. Our specialized group divisions work together to deliver end-to-end digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {groupCompanies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 flex flex-col h-full group hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              {/* Top Accent Line */}
              <div className={`h-2.5 w-full ${company.accent}`} />
              
              <div className="p-10 flex-grow">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{company.title}</h3>
                <p className="text-[var(--color-muted)] mb-8 leading-relaxed font-medium">
                  {company.desc}
                </p>
                
                <ul className="space-y-4 mb-4">
                  {company.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] font-bold text-[var(--color-primary)]">
                      <div className={`w-2 h-2 rounded-full ${company.accent} opacity-60`} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-64 overflow-hidden mt-auto">
                <div className={`absolute inset-0 ${company.accent} opacity-5`} />
                <img 
                  src={company.image} 
                  alt={company.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <a 
                  href="#contact" 
                  className={`absolute bottom-6 right-6 py-3 px-8 rounded-full text-white font-bold text-sm shadow-2xl ${company.accent} transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}
                >
                  Explore {company.title.split(' ')[1]}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
