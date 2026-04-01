"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";
import { PRICING_PLANS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isYearly, setIsYearly] = useState(false);

  useGSAP(
    () => {
      gsap.set(".pricing-heading", { opacity: 0, y: 40 });
      gsap.set(".pricing-card", { opacity: 0, y: 50, scale: 0.95 });

      gsap.to(".pricing-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(".pricing-card", {
        scrollTrigger: {
          trigger: ".pricing-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="pricing" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="pricing-heading mb-12 text-center">
          <SectionBadge text="Pricing" />
          <h2 className="mt-6 font-display text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Start free. Scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative h-7 w-12 rounded-full transition-colors ${
                isYearly ? "bg-accent" : "bg-surface-elevated"
              }`}
              aria-label="Toggle yearly pricing"
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                  isYearly ? "translate-x-[22px]" : "translate-x-[2px]"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted"}`}
            >
              Yearly
              <span className="ml-1.5 rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent-light">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="pricing-grid mx-auto grid max-w-md gap-6 md:max-w-none md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <GlassCard
              key={plan.name}
              className={`pricing-card relative flex flex-col ${
                plan.highlighted
                  ? "gradient-border ring-1 ring-accent/20"
                  : ""
              }`}
              glow={plan.highlighted}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <>
                    <span className="text-5xl font-bold text-foreground">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted"> / mo</span>
                    {isYearly && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        Billed annually
                      </p>
                    )}
                  </>
                ) : (
                  <span className="text-4xl font-bold text-foreground">
                    Custom
                  </span>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <iconify-icon
                      icon="solar:check-circle-bold-duotone"
                      width="18"
                      height="18"
                      style={{ color: "var(--color-accent-light)", flexShrink: 0, marginTop: "2px" }}
                    />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-full py-3 text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
                    : "border border-glass-border text-foreground hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
