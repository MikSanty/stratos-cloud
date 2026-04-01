"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import SectionBadge from "@/components/ui/SectionBadge";
import { BRAND, COMPANY_LOGOS } from "@/lib/data";

gsap.registerPlugin();

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const doorLeftRef = useRef<HTMLDivElement>(null);
  const doorRightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      tl.to(doorLeftRef.current, {
        xPercent: -100,
        duration: 1.2,
        delay: 0.3,
      })
        .to(
          doorRightRef.current,
          { xPercent: 100, duration: 1.2 },
          "<"
        )
        .set([doorLeftRef.current, doorRightRef.current], { display: "none" })
        .from(
          contentRef.current,
          { opacity: 0, y: 40, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          ".hero-badge",
          { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" },
          "-=0.6"
        )
        .from(
          ".hero-headline",
          { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          ".hero-sub",
          { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .from(
          ".hero-ctas",
          { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .from(
          ".hero-logos",
          { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:pt-0"
    >
      {/* Cinematic Door Panels */}
      <div
        ref={doorLeftRef}
        className="absolute inset-y-0 left-0 z-[60] w-1/2 pointer-events-none bg-surface"
        style={{ willChange: "transform" }}
      >
        <div className="flex h-full items-center justify-end pr-4">
          <span className="font-display text-4xl text-muted-foreground/30 md:text-6xl">
            {BRAND.name}
          </span>
        </div>
      </div>
      <div
        ref={doorRightRef}
        className="absolute inset-y-0 right-0 z-[60] w-1/2 pointer-events-none bg-surface"
        style={{ willChange: "transform" }}
      >
        <div className="flex h-full items-center justify-start pl-4">
          <span className="font-display text-4xl text-muted-foreground/30 md:text-6xl">
            Cloud
          </span>
        </div>
      </div>

      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_70%)]" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="hero-badge mb-8">
          <SectionBadge text="Now in General Availability" />
        </div>

        <h1 className="hero-headline mb-6 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
          Infrastructure at the{" "}
          <span className="gradient-text">Speed of Thought</span>
        </h1>

        <p className="hero-sub mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {BRAND.description}
        </p>

        <div className="hero-ctas flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-8 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
          >
            Start Free Trial
            <iconify-icon icon="solar:arrow-right-bold-duotone" width="18" height="18" />
          </a>
          <a
            href="#features"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-glass-border px-8 text-sm font-medium text-muted transition-all hover:border-white/20 hover:text-foreground hover:bg-white/5"
          >
            View Documentation
          </a>
        </div>
      </div>

      {/* Company Logo Marquee */}
      <div className="hero-logos relative z-10 mt-16 w-full max-w-5xl sm:mt-20">
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground sm:mb-6">
          Trusted by industry leaders
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
          <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />
          <div className="flex animate-marquee items-center gap-8 whitespace-nowrap sm:gap-12 md:gap-16">
            {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 text-muted-foreground/40 transition-all duration-300 hover:text-muted"
              >
                <iconify-icon
                  icon={logo.icon}
                  width="48"
                  height="48"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
