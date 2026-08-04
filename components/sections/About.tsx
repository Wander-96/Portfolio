"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

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
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent-subtle)] mb-4">
            [ 01 ]
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-offwhite)] uppercase mb-6 tracking-tight">
            {t('about.title.1')} {t('about.title.2')}
          </h2>
          <div className="w-full h-px bg-white/10" />
        </motion.div>

        <div className="border border-white/10 p-6 sm:p-10 md:p-16 relative bg-[var(--color-charcoal)]">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-offwhite)]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-offwhite)]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-offwhite)]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-offwhite)]" />

          <div className="relative z-10 space-y-6 sm:space-y-8 font-mono text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed uppercase max-w-3xl mx-auto text-center sm:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: t('about.p1') }}
              className="[&>strong]:text-[var(--color-offwhite)] [&>strong]:font-bold"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: t('about.p2') }}
              className="[&>strong]:text-[var(--color-offwhite)] [&>strong]:font-bold"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: t('about.p3') }}
              className="[&>strong]:text-[var(--color-offwhite)] [&>strong]:font-bold"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: t('about.p4') }}
              className="[&>strong]:text-[var(--color-offwhite)] [&>strong]:font-bold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
