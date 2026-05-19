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
  color: string;
}

const frontendSkills: SkillItem[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
];

const backendSkills: SkillItem[] = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
];

const toolSkills: SkillItem[] = [
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "NPM", icon: SiNpm, color: "#CB3837" },
];

function SkillBadge({ skill }: { skill: SkillItem }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className="flex flex-col items-center justify-center p-4 bg-[#11131A] rounded-2xl border border-white/5 shadow-lg gap-3"
    >
      <skill.icon className="w-8 h-8 md:w-10 md:h-10 transition-colors" style={{ color: skill.color }} />
      <span className="text-xs md:text-sm font-medium text-slate-400">{skill.name}</span>
    </motion.div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: SkillItem[] }) {
  return (
    <div className="bg-[#0A0D14]/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/5">
      <div className="flex items-center mb-8">
        <div className="w-1.5 h-6 bg-[#06b6d4] rounded-full mr-3" />
        <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('skills.title.1')} <span className="text-[#06b6d4]">{t('skills.title.2')}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#54628A] to-[#06b6d4] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <SkillCard title={t('skills.category.frontend')} skills={frontendSkills} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <SkillCard title={t('skills.category.backend')} skills={backendSkills} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <SkillCard title={t('skills.category.tools')} skills={toolSkills} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
