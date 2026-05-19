"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Language } from "@/lib/i18n/translations";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 lg:px-12 glass-panel border-b border-b-white/5 rounded-none"
    >
      <Link href="/" className="flex items-center gap-2 text-white hover:text-[#06b6d4] transition-colors">
        <Terminal className="w-6 h-6 text-[#54628A]" aria-hidden="true" />
        <span className="font-bold text-xl tracking-tight">Santiago Lago</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-300">
        <Link href="#about" className="hover:text-white transition-colors">{t('nav.about')}</Link>
        <Link href="#skills" className="hover:text-white transition-colors">{t('nav.skills')}</Link>
        <Link href="#projects" className="hover:text-white transition-colors">{t('nav.projects')}</Link>
        <Link href="#contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link>
      </div>

      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div className="relative group flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/10">
          <Globe className="w-4 h-4 text-slate-400" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-transparent text-xs font-medium text-slate-300 focus:outline-none cursor-pointer appearance-none px-1"
            aria-label="Select language"
          >
            <option value="es" className="bg-[#11131A] text-white">ES</option>
            <option value="en" className="bg-[#11131A] text-white">EN</option>
            <option value="pt" className="bg-[#11131A] text-white">PT</option>
          </select>
        </div>

        <button className="md:hidden text-white" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
        </button>
      </div>
    </motion.nav>
  );
}
