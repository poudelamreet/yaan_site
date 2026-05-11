"use client";

import { motion } from "framer-motion";
import { MessageCircle, Globe, Camera, Briefcase, Code } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center">
              <Logo light={true} />
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Building the future of digital solutions. We help enterprises and startups transform their ideas into scalable, production-ready software.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/9779849232624" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="text-white/60 hover:text-[#25D366] transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="text-white/60 hover:text-[var(--color-accent)] transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-white/60 hover:text-[var(--color-accent)] transition-colors"><Camera size={20} /></a>
              <a href="#" className="text-white/60 hover:text-[var(--color-accent)] transition-colors"><Briefcase size={20} /></a>
              <a href="#" className="text-white/60 hover:text-[var(--color-accent)] transition-colors"><Code size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors">Our Work</a></li>
              <li><a href="#process" className="text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors">How We Work</a></li>
              <li><a href="#pricing" className="text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors">Web Development</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[var(--color-secondary)] transition-colors">Cloud Infrastructure</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">Subscribe to our newsletter for the latest tech insights and company updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-secondary)]"
              />
              <button className="px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Yaan Enterprise. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/60 hover:text-[var(--color-accent)] transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/60 hover:text-[var(--color-accent)] transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/60 hover:text-[var(--color-accent)] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
