"use client";

import { TerminalButton } from "@/components/ui/TerminalButton";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex flex-col md:flex-row border-b-hairline">
      {/* Left Column: Text & Data */}
      <div className="w-full md:w-1/2 flex flex-col p-6 sm:p-8 md:p-16 md:border-r-hairline border-white/10 relative order-1">
        {/* Top-left metadata */}
        <div className="md:absolute top-8 left-8 text-xs font-mono uppercase tracking-widest text-[var(--color-accent-subtle)] mb-8 md:mb-0 hidden md:block text-center md:text-left">
          [ {t('hero.badge')} ]
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent-subtle)] mb-8 md:hidden text-center">
          [ {t('hero.badge')} ]
        </div>

        <div className="mt-2 md:mt-12 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-serif leading-none tracking-tight mb-6 sm:mb-8 text-[var(--color-offwhite)] uppercase w-full break-normal whitespace-pre-line">
            {t('hero.title')}
          </h1>

          <p className="font-mono text-xs sm:text-sm md:text-base text-[var(--color-mid-tone)] max-w-md mb-8 sm:mb-12 uppercase leading-relaxed">
            {t('hero.description')}
          </p>

          {/* MOBILE IMAGE INSERTION */}
          <div className="md:hidden w-full relative aspect-square max-h-[500px] bg-[var(--color-charcoal)] border border-[var(--color-ink)] p-2 mb-8 mx-auto max-w-sm">
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/hero_metatron.png")' }}
            />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-accent-warm)]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-accent-warm)]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-accent-warm)]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-accent-warm)]" />
          </div>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12 md:mb-0 w-full sm:w-auto">
            <Link href="#projects" className="focus:outline-none w-full sm:w-auto">
              <TerminalButton className="w-full sm:w-auto">{t('hero.viewProjects')}</TerminalButton>
            </Link>
            
            <Link href="#contact" className="focus:outline-none w-full sm:w-auto">
              <TerminalButton className="border-transparent underline underline-offset-4 hover:border-[var(--color-offwhite)] w-full sm:w-auto">
                {t('hero.contactMe')}
              </TerminalButton>
            </Link>
          </div>
        </div>

        {/* Bottom-left metadata */}
        <div className="mt-auto md:absolute bottom-8 left-8 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent-subtle)] flex flex-col gap-1 items-center md:items-start pb-4 md:pb-0">
          <span>LAT: -34.6037</span>
          <span>LNG: -58.3816</span>
          <span>SYS_VER: 2.0.4</span>
        </div>
      </div>

      {/* Right Column: Image (Desktop only) */}
      <div className="hidden md:flex w-1/2 relative min-h-full h-auto bg-[var(--color-charcoal)] p-8 order-2 items-center justify-center">
        <div className="absolute inset-8 border border-[var(--color-ink)] p-2">
          {/* Using fondo_port as requested. */}
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/hero_metatron.png")' }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-accent-warm)]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-accent-warm)]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-accent-warm)]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-accent-warm)]" />
        </div>
      </div>
    </section>
  );
}
