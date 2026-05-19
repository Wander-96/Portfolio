"use client";

import Link from "next/link";
import { Terminal, Briefcase, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full py-8 mt-24 border-t border-white/10 glass-panel rounded-none">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          {t('footer.copy', { year })}
        </p>
        
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Github Profile" className="text-slate-400 hover:text-white transition-colors">
            <Terminal className="w-5 h-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-[#06b6d4] transition-colors">
            <Briefcase className="w-5 h-5" />
          </Link>
          <Link href="#" aria-label="Twitter Profile" className="text-slate-400 hover:text-[#06b6d4] transition-colors">
            <MessageCircle className="w-5 h-5" />
          </Link>
          <Link href="mailto:hello@example.com" aria-label="Email Me" className="text-slate-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
