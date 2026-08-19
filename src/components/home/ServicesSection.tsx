"use client";

import { motion } from "framer-motion";
import { Code2, ShoppingBag, Palette, Rocket, ArrowRight, Database } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building modern, responsive websites using React, Next.js, and cutting-edge frontend technologies.",
    features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"],
  },
  {
    icon: Database,
    title: "Full-Stack & Backend Development",
    description:
      "Developing robust APIs, database architecture, and full-stack web applications with modern stacks.",
    features: ["Node.js & APIs", "Database Systems", "Full-Stack Architecture", "RESTful Services"],
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "Custom Shopify themes, apps, and integrations to power your e-commerce business.",
    features: ["Custom Themes", "Liquid Development", "App Integration", "Store Setup"],
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Translating designs into pixel-perfect, accessible, and interactive user interfaces.",
    features: ["Figma to Code", "Responsive Design", "Animations", "Accessibility"],
  },
  {
    icon: Rocket,
    title: "Web Performance",
    description:
      "Optimizing websites for speed, SEO, and exceptional user experience across all devices.",
    features: ["Core Web Vitals", "SEO Optimization", "Code Splitting", "Image Optimization"],
  },
   {
  icon: Code2,
  title: "Bubble Web & App Performance",
  description:
    "Optimizing websites and mobile apps for blazing-fast speed, SEO, smooth performance, and exceptional user experience across all devices.",
  features: [
    "Core Web Vitals",
    "SEO Optimization",
    "App Performance",
    "Code Splitting",
    "Image Optimization"
  ]
}
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Services I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, I provide end-to-end development services
            tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <service.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
          >
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
