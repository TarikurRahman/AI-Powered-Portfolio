"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { ArrowDown, Code2, ShoppingBag, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  const [heroTitle, setHeroTitle] = useState("Hi, I'm Tarikur Rahman");
  const [heroSubtitle, setHeroSubtitle] = useState("I Build Digital Experiences");

  useEffect(() => {
    async function loadHeroSettings() {
      try {
        const { data, error } = await supabase
          .from("portfolio_settings")
          .select("*")
          .in("key", ["hero_title", "hero_subtitle"]);
        
        if (error) throw error;
        
        if (data) {
          data.forEach((item) => {
            if (item.key === "hero_title" && item.value) {
              setHeroTitle(item.value);
            }
            if (item.key === "hero_subtitle" && item.value) {
              setHeroSubtitle(item.value);
            }
          });
        }
      } catch (err) {
        console.warn("Could not load dynamic hero settings, using fallbacks:", err);
      }
    }
    loadHeroSettings();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            {heroTitle.includes("Tarikur") ? (
              <>
                {heroTitle.split("Tarikur")[0]}
                <span className="text-gradient">Tarikur</span>
                {heroTitle.split("Tarikur")[1]}
              </>
            ) : (
              heroTitle
            )}
            <br />
            <span className="text-muted-foreground">
              {heroSubtitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A passionate Frontend Developer & Shopify Expert crafting beautiful,
            performant websites and e-commerce solutions that drive results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="glow-primary" asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
          >
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl">
              <Code2 className="text-primary" size={24} />
              <div className="text-left">
                <p className="font-display font-semibold">Frontend</p>
                <p className="text-xs text-muted-foreground">React & Next.js</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl">
              <Database className="text-primary" size={24} />
              <div className="text-left">
                <p className="font-display font-semibold">Backend</p>
                <p className="text-xs text-muted-foreground">Node.js & APIs</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl">
              <ShoppingBag className="text-primary" size={24} />
              <div className="text-left">
                <p className="font-display font-semibold">Shopify</p>
                <p className="text-xs text-muted-foreground">Expert Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl">
              <Globe className="text-primary" size={24} />
              <div className="text-left">
                <p className="font-display font-semibold">Bubble.io</p>
                <p className="text-xs text-muted-foreground">No-Code Dev</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
