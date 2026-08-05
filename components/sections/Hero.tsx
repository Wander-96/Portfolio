"use client";

import { TerminalButton } from "@/components/ui/TerminalButton";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex flex-col lg:flex-row border-b-hairline">
      {/* Left Column: Text & Data */}
      <div className="w-full lg:w-1/2 flex flex-col p-6 sm:p-8 lg:p-16 lg:border-r-hairline border-white/10 relative order-1 min-w-0 max-w-full">
        {/* Top-left metadata */}
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent-subtle)] mb-12 text-center lg:text-left w-full">
          [ {t('hero.badge')} ]
        </div>

        <div className="mt-2 flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left min-w-0 max-w-full w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif leading-none tracking-tight mb-6 sm:mb-8 text-[var(--color-offwhite)] uppercase w-full break-words whitespace-pre-line min-w-0">
            {t('hero.title')}
          </h1>

          <p className="font-mono text-xs sm:text-sm md:text-base text-[var(--color-mid-tone)] max-w-md mb-8 sm:mb-12 uppercase leading-relaxed min-w-0">
            {t('hero.description')}
          </p>

          {/* MOBILE IMAGE INSERTION */}
          <div className="lg:hidden w-full relative aspect-square max-h-[500px] bg-[var(--color-charcoal)] border border-[var(--color-ink)] p-2 mb-12 mx-auto max-w-sm">
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

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-16 w-full sm:w-auto">
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

        {/* Bottom-left metadata (Now flows naturally to avoid absolute overlap) */}
        <div className="mt-auto pt-8 w-full text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent-subtle)] flex flex-col gap-1 items-center lg:items-start">
          <span>LAT: -34.6037</span>
          <span>LNG: -58.3816</span>
          <span>SYS_VER: 2.0.4</span>
        </div>
      </div>

      {/* Right Column: Image (Desktop only) */}
      <div className="hidden lg:flex w-1/2 relative min-h-full h-auto bg-[var(--color-charcoal)] p-8 order-2 items-center justify-center min-w-0 max-w-full">
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
