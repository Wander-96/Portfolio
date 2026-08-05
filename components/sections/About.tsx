"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const sections = [
    { title: t('about.sec1.title'), quote: t('about.sec1.quote'), p: t('about.sec1.p') },
    { title: t('about.sec2.title'), quote: t('about.sec2.quote'), p: t('about.sec2.p') },
    { title: t('about.sec3.title'), quote: t('about.sec3.quote'), p: t('about.sec3.p') },
    { title: t('about.sec4.title'), quote: t('about.sec4.quote'), p: t('about.sec4.p') },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 md:px-8 border-b-hairline">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent-subtle)] mb-4 flex flex-col md:flex-row md:justify-between md:items-end gap-2 border-b border-[var(--color-ink)] pb-4">
            <span>[ 01 ]</span>
            <span className="text-[var(--color-accent-warm)] font-serif lowercase italic text-sm md:text-base tracking-normal">{t('about.subtitle')}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-offwhite)] uppercase mb-6 tracking-tight">
            {t('about.title.1')} {t('about.title.2')}
          </h2>
        </motion.div>

        <div className="border border-[var(--color-ink)] p-6 sm:p-10 md:p-16 relative bg-[var(--color-charcoal)]">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-accent-warm)]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-accent-warm)]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-accent-warm)]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-accent-warm)]" />

          <div className="relative z-10 space-y-12 sm:space-y-16 max-w-4xl mx-auto">
            {sections.map((sec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col gap-4 border-l border-[var(--color-ink)] pl-4 sm:pl-6 hover:border-[var(--color-accent-subtle)] transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[var(--color-offwhite)] tracking-wide">
                    {sec.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-[var(--color-accent-warm)] italic mb-2">
                    {sec.quote}
                  </p>
                </div>
                <p className="font-mono text-xs sm:text-sm md:text-base text-[var(--color-mid-tone)] leading-relaxed text-left">
                  {sec.p}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
