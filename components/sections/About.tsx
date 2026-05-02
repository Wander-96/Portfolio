"use client";

import { motion } from "framer-motion";

export function About() {
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
          <h2 className="text-4xl font-bold text-white mb-2">Sobre <span className="text-[#06b6d4]">mí</span></h2>
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
            >
              ¡Hola! Soy <strong className="text-white font-semibold">Santiago</strong>. Mi camino en la tecnología es el resultado de una curiosidad constante por entender cómo funcionan las cosas y el compromiso de hacer que funcionen mejor.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Vengo del mundo del <strong className="text-white font-semibold">Diseño de Sonido</strong>, donde gestioné la precisión técnica en más de 230 shows por el Reino Unido. Esa experiencia me enseñó algo vital: bajo presión, la atención al detalle y un flujo de trabajo lógico lo son todo. Hoy, aplico esa misma rigurosidad al desarrollo de software.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Como <strong className="text-white font-semibold">Desarrollador Fullstack con alma de QA</strong>, no solo escribo código; lo pongo a prueba. Me especializo en el ecosistema de React y Next.js, pero siempre con una mirada preventiva. Mi objetivo es construir interfaces que no solo sean visualmente impactantes, sino también robustas, estables y seguras.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Actualmente, estoy profundizando mis conocimientos en el Backend (Node.js/Python) y bases de datos en la UTN, complementando mi formación técnica con certificaciones en <strong className="text-white font-semibold">QA Manual</strong> para cerrar el ciclo de calidad de cada producto que entrego.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
