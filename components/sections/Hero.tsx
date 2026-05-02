"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const text = "Full Stack Developer";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 1.5,
      ease: "linear",
      delay: 0.2,
    });
    return controls.stop;
  }, [count]);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden px-6">
      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-[#06b6d4]"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#06b6d4]"></span>
          </span>
          Disponible para nuevas oportunidades
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 flex items-center justify-center min-h-[120px] md:min-h-[160px]">
          <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#607BBA] via-[#8B5CF6] to-[#06B6D4]">
            {displayText}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="inline-block w-[0.1em] h-[1em] bg-[#06b6d4] ml-2 align-middle"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-10 font-light"
        >
          Creando experiencias digitales de alto rendimiento. Convirtiendo problemas complejos en interfaces hermosas e intuitivas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="#projects" className="focus:outline-none">
            <GlowingButton className="gap-2">
              Ver mis proyectos
              <ArrowRight className="w-4 h-4" />
            </GlowingButton>
          </Link>
          
          <Link 
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium"
          >
            Contáctame
          </Link>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#54628A] rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen" />
    </section>
  );
}
