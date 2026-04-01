"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBadge from "@/components/ui/SectionBadge";
import { WORKFLOW_STEPS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Workflow() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".workflow-heading", { opacity: 0, y: 40 });
      gsap.set(".workflow-step", { opacity: 0, x: -40 });
      gsap.set(".workflow-line", { scaleY: 0, transformOrigin: "top" });

      gsap.to(".workflow-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(".workflow-step", {
        scrollTrigger: {
          trigger: ".workflow-timeline",
          start: "top 75%",
          toggleActions: "play none none none",
        },
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.to(".workflow-line", {
        scrollTrigger: {
          trigger: ".workflow-timeline",
          start: "top 75%",
          end: "bottom 60%",
          scrub: 1,
        },
        scaleY: 1,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="workflow" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="workflow-heading mb-16 text-center">
          <SectionBadge text="Workflow" />
          <h2 className="mt-6 font-display text-4xl tracking-tight md:text-5xl lg:text-6xl">
            From zero to production{" "}
            <span className="gradient-text">in minutes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Four simple steps to deploy your infrastructure globally. No
            PhD required.
          </p>
        </div>

        <div className="workflow-timeline relative mx-auto max-w-3xl">
          {/* Animated vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px -translate-x-1/2 md:left-1/2">
            <div className="workflow-line h-full w-full bg-gradient-to-b from-accent via-accent-light to-transparent" />
          </div>

          <div className="space-y-12">
            {WORKFLOW_STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="workflow-step relative pl-16 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-start"
                >
                  {/* Left content (visible on even steps) */}
                  <div className={`hidden md:block ${isEven ? "" : "order-2"}`}>
                    {isEven ? (
                      <div className="glass rounded-2xl p-6 text-right">
                        <span className="mb-1 text-xs font-bold uppercase tracking-widest text-accent-light">
                          Step {step.number}
                        </span>
                        <h3 className="mb-2 text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Node */}
                  <div className="absolute left-6 top-0 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-surface text-accent-light md:static md:translate-x-0 md:flex-shrink-0">
                    <iconify-icon icon={step.icon} width="22" height="22" />
                  </div>

                  {/* Right content (visible on odd steps) */}
                  <div className={`hidden md:block ${isEven ? "order-2" : ""}`}>
                    {!isEven ? (
                      <div className="glass rounded-2xl p-6">
                        <span className="mb-1 text-xs font-bold uppercase tracking-widest text-accent-light">
                          Step {step.number}
                        </span>
                        <h3 className="mb-2 text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Mobile card */}
                  <div className="glass rounded-2xl p-6 md:hidden">
                    <span className="mb-1 text-xs font-bold uppercase tracking-widest text-accent-light">
                      Step {step.number}
                    </span>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
