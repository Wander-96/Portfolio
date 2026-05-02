"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 glass-panel border-b border-b-white/5 rounded-none"
    >
      <Link href="/" className="flex items-center gap-2 text-white hover:text-[#06b6d4] transition-colors">
        <Terminal className="w-6 h-6 text-[#54628A]" aria-hidden="true" />
        <span className="font-bold text-xl tracking-tight">Santiago Lago</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <Link href="#about" className="hover:text-white transition-colors">Sobre mí</Link>
        <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
        <Link href="#projects" className="hover:text-white transition-colors">Proyectos</Link>
        <Link href="#contact" className="hover:text-white transition-colors">Contacto</Link>
      </div>

      <button className="md:hidden text-white" aria-label="Toggle menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
      </button>
    </motion.nav>
  );
}
