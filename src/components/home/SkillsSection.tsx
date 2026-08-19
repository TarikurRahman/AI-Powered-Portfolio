"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  ShoppingBag, 
  Zap, 
  Globe, 
  Smartphone,
  Database,
  GitBranch
} from "lucide-react";

const skills = [
  { icon: Code2, name: "Frontend Development", level: 95 },
  { icon: Palette, name: "React / Next.js", level: 90 },
  { icon: Smartphone, name: "Responsive Design", level: 95 },
  { icon: Zap, name: "JavaScript / TypeScript", level: 80 },
  { icon: ShoppingBag, name: "Shopify Development", level: 95 },
  { icon: Globe, name: "Bubble.io Development", level: 95 },
  { icon: Database, name: "Backend Development", level: 75 },
  { icon: GitBranch, name: "Git & GitHub", level: 90 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const SkillsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Skills & Technologies
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold mb-2">{skill.name}</h3>
              <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-primary"
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2 block">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
