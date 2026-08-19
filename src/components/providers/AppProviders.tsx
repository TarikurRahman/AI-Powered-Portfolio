"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Loader from "@/components/ui/Loader";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import AIChatbot from "@/components/ui/AIChatbot";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const pageRef = useRef<HTMLDivElement>(null);

  // Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  // Page transition animation on route changes
  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.inOut" }
      );
    }, pageRef);

    window.scrollTo(0, 0);

    return () => ctx.revert();
  }, [pathname, loading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {loading && <Loader onFinish={() => setLoading(false)} />}
        
        {!loading && (
          <div ref={pageRef}>
            {children}
            <WhatsAppFloat />
            <AIChatbot />
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
