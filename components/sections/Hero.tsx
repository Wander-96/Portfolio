"use client";

import { TerminalButton } from "@/components/ui/TerminalButton";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex flex-col md:flex-row border-b-hairline">
      {/* Left Column: Text & Data */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-16 md:border-r-hairline border-white/10 relative">
        {/* Top-left metadata */}
        <div className="md:absolute top-8 left-8 text-xs font-mono uppercase tracking-widest text-[var(--color-accent-subtle)] mb-8 md:mb-0 hidden md:block">
          [ {t('hero.badge')} ]
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent-subtle)] mb-8 md:hidden">
          [ {t('hero.badge')} ]
        </div>

        <div className="mt-4 md:mt-12 flex-1 flex flex-col justify-center">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif leading-none tracking-tight mb-6 sm:mb-8 text-[var(--color-offwhite)] uppercase">
            {t('hero.title').split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>

          <p className="font-mono text-xs sm:text-sm md:text-base text-gray-400 max-w-md mb-8 sm:mb-12 uppercase leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-0">
            <Link href="#projects" className="focus:outline-none">
              <TerminalButton>{t('hero.viewProjects')}</TerminalButton>
            </Link>
            
            <Link href="#contact" className="focus:outline-none">
              <TerminalButton className="border-transparent underline underline-offset-4 hover:border-[var(--color-offwhite)]">
                {t('hero.contactMe')}
              </TerminalButton>
            </Link>
          </div>
        </div>

        {/* Bottom-left metadata */}
        <div className="mt-8 md:mt-0 md:absolute bottom-8 left-8 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-gray-500 flex flex-col gap-1">
          <span>LAT: -34.6037</span>
          <span>LNG: -58.3816</span>
          <span>SYS_VER: 2.0.4</span>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="w-full md:w-1/2 relative h-[50vh] min-h-[400px] md:min-h-full md:h-auto bg-[var(--color-charcoal)] border-t border-white/10 md:border-t-0 p-6 md:p-8">
        <div className="absolute inset-6 md:inset-8 border border-white/10 p-2">
          {/* Using fondo_port as requested. */}
          <div 
            className="w-full h-full bg-cover bg-center grayscale contrast-125 bg-no-repeat"
            style={{ backgroundImage: 'url("/fondo_port.png")' }}
          />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-offwhite)]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-offwhite)]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-offwhite)]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-offwhite)]" />
        </div>
      </div>
    </section>
  );
}
