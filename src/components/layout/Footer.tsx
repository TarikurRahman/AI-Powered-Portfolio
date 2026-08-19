"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Youtube, Facebook, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/tarikurrahmanbd", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/tarikurrahman", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/tarikurrahmanbd", label: "Twitter" },
  { icon: Facebook, href: "https://www.facebook.com/tarikurrahman", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@tarikurrahman", label: "YouTube" },
  { icon: MessageCircle, href: "https://wa.me/8801633003462", label: "WhatsApp" },
  { icon: Mail, href: "mailto:tarikurrahman2008@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-display text-xl font-bold">
              <span className="text-gradient">Tarikur</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Frontend & Shopify Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tarikur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};