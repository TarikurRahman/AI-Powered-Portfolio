"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Code2,
  ShoppingBag,
  Award,
  Users,
  Coffee,
  Heart,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { icon: Award, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "40+", label: "Happy Clients" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Heart, value: "100%", label: "Dedication" },
];

const journeyItems = [
  {
    id: 1,
    year: "2024 - Present",
    title: "Frontend Developer",
    company: "Freelance & Personal Projects",
    description:
      "Building responsive and modern web applications using React, Next.js, Tailwind CSS, and modern frontend technologies.",
    icon: Code2,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 2,
    year: "2024 - Present",
    title: "Backend Developer",
    company: "Freelance & Personal Projects",
    description:
      "Working with backend technologies, APIs, databases, and full-stack application development.",
    icon: Code2,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    year: "2025 - Present",
    title: "Shopify Developer",
    company: "E-commerce Projects",
    description:
      "Developing and customizing Shopify stores with custom themes, Liquid, and modern e-commerce solutions.",
    icon: ShoppingBag,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    year: "2025 - Present",
    title: "Bubble.io Developer",
    company: "No-Code Web Applications",
    description:
      "Creating scalable no-code web applications and automation systems using Bubble.io.",
    icon: Code2,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    year: "2023 - 2024",
    title: "Computer Course",
    company: "Habiganj Polytechnic Institute",
    description:
      "Completed a computer course with practical training in basic computing and IT skills.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 6,
    year: "2023 - 2024",
    title: "HSC (Higher Secondary Certificate)",
    company: "Kamalganj Govt. College",
    description:
      "Completed HSC in 2024 with a GPA of 3.75 in Business Studies.",
    icon: GraduationCap,
    color: "from-orange-500 to-amber-500",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  About Me
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Building Modern
                  <br />
                  <span className="text-gradient">Web Experiences</span>
                </h1>

                <p className="text-muted-foreground text-lg mb-6">
                  Hi, I'm Tarikur — a passionate Frontend, Backend, Shopify, and
                  Bubble.io Developer based in Bangladesh. I specialize in
                  building modern, responsive, and high-performance web
                  applications, e-commerce stores, and scalable no-code
                  solutions. I love creating clean user experiences with modern
                  technologies and turning ideas into real digital products.
                </p>

                <p className="text-muted-foreground mb-8">
                  My journey started with a deep curiosity about how modern
                  websites and applications are built, which gradually turned
                  into a passion for web development and digital product
                  creation. I enjoy building clean, responsive, and
                  user-friendly experiences using modern technologies, Shopify,
                  and Bubble.io. I believe in clean code, creative design, and
                  developing solutions that provide real value to users.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="glow-primary" asChild>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>

                  <Button size="lg" variant="outline" asChild>
                    <a href="/Nafij.pdf" download>
                      Download CV
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
                  <img
                    src="/Tarikur-Rahman.png"
                    alt="Tarikur Rahman - Full-Stack Developer, Shopify & Bubble.io Expert"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 p-4 glass rounded-2xl"
                >
                  <Code2 className="text-primary" size={32} />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 p-4 glass rounded-2xl"
                >
                  <ShoppingBag className="text-primary" size={32} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 glass rounded-2xl"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="section-padding overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                My Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                Experience & Education
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {journeyItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="relative glass rounded-3xl p-6 lg:p-8 h-full border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Year badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-medium shadow-lg`}
                      >
                        <Briefcase size={14} />
                        {item.year}
                      </span>

                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                      >
                        <item.icon size={24} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl lg:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-primary/80 font-medium mb-4">
                        {item.company}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative */}
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
            <div className="pt-20">
              <h2 className="text-3xl text-center pb-5 md:pb-10 lg:pb-10 md:text-4xl lg:text-5xl font-display font-bold">
                THE MISSION
              </h2>
              <div>
                <img className="rounded-2xl w-full" src="/bannerimg.jpeg" alt="Tarikur Rahman Web Development & Digital Mission" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
