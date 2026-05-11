"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-navy relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className={`w-20 h-1 bg-[var(--color-secondary)] rounded-full mx-auto mb-6`} />
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
              Ready to start your next big project? Contact us today for a free consultation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Let's build something great together.</h3>
            <p className="text-white/60 mb-10 leading-relaxed text-lg">
              Whether you need a custom enterprise solution, a sleek mobile app, or a complete digital transformation, our team in Nepal is ready to help you succeed.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <MapPin size={28} />
                </div>
                <div className="pt-2">
                  <h4 className="text-white font-bold text-xl mb-1">Office Location</h4>
                  <p className="text-white/60">Khumaltar, Lalitpur<br/>44700, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Mail size={28} />
                </div>
                <div className="pt-2">
                  <h4 className="text-white font-bold text-xl mb-1">Email Us</h4>
                  <p className="text-white/60">poudelamr@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Phone size={28} />
                </div>
                <div className="pt-2">
                  <h4 className="text-white font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-white/60">+977 9849232624</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-white/10">
              <a 
                href="https://wa.me/9779849232624" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold transition-colors text-lg"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 rounded-2xl shadow-xl"
          >
            {/* FormSubmit integration connected directly to the user's email */}
            <form className="space-y-6" action="https://formsubmit.co/poudelamr@gmail.com" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-[var(--color-primary)]">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    required
                    className="w-full bg-[var(--color-background)] border border-gray-200 rounded-lg px-4 py-3 text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-[var(--color-primary)]">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    required
                    className="w-full bg-[var(--color-background)] border border-gray-200 rounded-lg px-4 py-3 text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-[var(--color-primary)]">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-[var(--color-background)] border border-gray-200 rounded-lg px-4 py-3 text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-[var(--color-primary)]">Service Interested In</label>
                <select 
                  id="service" 
                  name="service"
                  required
                  className="w-full bg-[var(--color-background)] border border-gray-200 rounded-lg px-4 py-3 text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="software">Custom Software Development</option>
                  <option value="web">Website Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="ai">AI Solutions</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-[var(--color-primary)]">Project Details</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-[var(--color-background)] border border-gray-200 rounded-lg px-4 py-3 text-[var(--color-primary)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors resize-none"
                  placeholder="Tell us about your project goals, timeline, and budget..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 rounded-lg bg-[var(--color-secondary)] text-white font-bold text-lg hover:bg-opacity-90 transition-all shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
