"use client";

import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiPython, SiMongodb, SiMysql, SiSupabase,
  SiGit, SiFigma, SiPostman, SiNpm
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface SkillItem {
  name: string;
  icon: React.ElementType;
}

const frontendSkills: SkillItem[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "Tailwind", icon: SiTailwindcss },
];

const backendSkills: SkillItem[] = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Supabase", icon: SiSupabase },
];

const toolSkills: SkillItem[] = [
  { name: "Git", icon: SiGit },
  { name: "VS Code", icon: TbBrandVscode },
  { name: "Figma", icon: SiFigma },
  { name: "Postman", icon: SiPostman },
  { name: "NPM", icon: SiNpm },
];

function SkillBadge({ skill }: { skill: SkillItem }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group flex flex-col items-center justify-center p-3 sm:p-4 border border-white/10 bg-[var(--color-charcoal)] hover:border-[var(--color-offwhite)] transition-colors gap-3"
    >
      <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-gray-600 group-hover:text-[var(--color-offwhite)] transition-colors" />
      <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-gray-600 group-hover:text-[var(--color-offwhite)] transition-colors text-center w-full break-normal whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: SkillItem[] }) {
  return (
    <div className="border border-white/10 p-5 sm:p-6 lg:p-8 relative bg-[var(--color-charcoal)] h-full">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-offwhite)]" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-offwhite)]" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-offwhite)]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-offwhite)]" />
      
      <div className="flex items-center mb-6 lg:mb-8 border-b border-white/10 pb-4">
        <h3 className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest text-[var(--color-offwhite)]">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 md:px-8 border-b-hairline">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent-subtle)] mb-4">
            [ 02 ]
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-offwhite)] uppercase mb-6 tracking-tight">
            {t('skills.title.1')} {t('skills.title.2')}
          </h2>
          <div className="w-full h-px bg-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col h-full max-w-sm sm:max-w-md md:max-w-none mx-auto w-full"
          >
            <SkillCard title={t('skills.category.frontend')} skills={frontendSkills} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col h-full max-w-sm sm:max-w-md md:max-w-none mx-auto w-full"
          >
            <SkillCard title={t('skills.category.backend')} skills={backendSkills} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col h-full md:col-span-2 lg:col-span-1 max-w-sm sm:max-w-md md:max-w-none mx-auto w-full"
          >
            <SkillCard title={t('skills.category.tools')} skills={toolSkills} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
