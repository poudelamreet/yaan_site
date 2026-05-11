"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services & Solutions", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Insights", href: "#services" },
    { name: "Our Approach", href: "#approach" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Logo light={!scrolled} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-colors ${scrolled ? 'text-[var(--color-primary)] hover:text-[var(--color-secondary)]' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={scrolled ? 'btn-primary' : 'btn-outline text-white border-white hover:bg-white hover:text-[var(--color-primary)]'}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${scrolled ? 'text-[var(--color-primary)]' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl py-6 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
               key={link.name}
                href={link.href}
                className="text-lg font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 text-center btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
