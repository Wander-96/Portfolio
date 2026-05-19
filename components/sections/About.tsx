"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">{t('about.title.1')} <span className="text-[#06b6d4]">{t('about.title.2')}</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#54628A] to-[#06b6d4] rounded-full" />
        </motion.div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#54628A] rounded-full blur-[80px] opacity-20 pointer-events-none" />

          <div className="relative z-10 space-y-6 text-slate-300 text-lg leading-relaxed font-light">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: t('about.p1') }}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: t('about.p2') }}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: t('about.p3') }}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: t('about.p4') }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
