"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";
import { FEATURES } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".features-heading", { opacity: 0, y: 40 });
      gsap.set(".feature-card", { opacity: 0, y: 60 });

      gsap.to(".features-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(".feature-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="features" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="features-heading mb-16 text-center">
          <SectionBadge text="Features" />
          <h2 className="mt-6 font-display text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Everything you need to{" "}
            <span className="gradient-text">ship with confidence</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            A complete platform for building, deploying, and scaling modern
            applications. No compromises.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <GlassCard key={feature.title} className="feature-card group">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                <iconify-icon icon={feature.icon} width="24" height="24" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
              <div className="flex items-baseline gap-2 border-t border-glass-border pt-4">
                <span className="text-2xl font-bold text-accent-light">
                  {feature.stat}
                </span>
                <span className="text-xs text-muted-foreground">
                  {feature.statLabel}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
