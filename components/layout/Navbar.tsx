"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Language } from "@/lib/i18n/translations";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { href: "#about", label: t('nav.about') },
    { href: "#skills", label: t('nav.skills') },
    { href: "#projects", label: t('nav.projects') },
    { href: "#contact", label: t('nav.contact') },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[var(--color-charcoal)] border-b border-white/10 font-mono text-[var(--color-offwhite)]">
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-widest hover:text-[var(--color-accent-subtle)] transition-colors relative z-50"
        >
          Santiago Lago
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest">
          {menuItems.map(item => (
            <Link key={item.href} href={item.href} className="hover:underline underline-offset-4">{item.label}</Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4 relative z-50">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 border border-white/10 hover:bg-white/5 transition-colors">
            <Globe className="w-3 h-3" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-[10px] sm:text-xs uppercase cursor-pointer appearance-none outline-none"
              aria-label="Select language"
            >
              <option value="es" className="bg-[#121212]">ES</option>
              <option value="en" className="bg-[#121212]">EN</option>
              <option value="pt" className="bg-[#121212]">PT</option>
            </select>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-1.5 sm:p-2 border border-white/10 hover:bg-white/5 transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-charcoal)] flex flex-col items-center justify-center border-b border-white/10 lg:hidden"
          >
            {/* Corner styling */}
            <div className="absolute top-24 left-6 w-2 h-2 border-t border-l border-[var(--color-offwhite)]" />
            <div className="absolute top-24 right-6 w-2 h-2 border-t border-r border-[var(--color-offwhite)]" />
            <div className="absolute bottom-12 left-6 w-2 h-2 border-b border-l border-[var(--color-offwhite)]" />
            <div className="absolute bottom-12 right-6 w-2 h-2 border-b border-r border-[var(--color-offwhite)]" />

            <div className="absolute top-28 left-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest flex flex-col gap-2">
              <span>SYS_NAV_PROTOCOL_ACTIVE</span>
              <span>VER: 2.0.4</span>
            </div>

            <div className="flex flex-col items-center gap-10 text-3xl sm:text-4xl font-serif uppercase tracking-widest mt-10">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="hover:text-gray-400 transition-colors relative group"
                  >
                    <span className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-[var(--color-accent-subtle)] font-mono">[</span>
                    {item.label}
                    <span className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-[var(--color-accent-subtle)] font-mono">]</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute bottom-16 right-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest text-right flex flex-col gap-2">
              <span>LAT: -34.6037</span>
              <span>LNG: -58.3816</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
