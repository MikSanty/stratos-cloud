"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBadge from "@/components/ui/SectionBadge";
import { SOLUTIONS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useGSAP(
    () => {
      gsap.set([".solutions-heading", ".solutions-tabs"], { opacity: 0, y: 30 });

      gsap.to(".solutions-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(".solutions-tabs", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;

    gsap.to(contentRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveTab(index);
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      },
    });
  };

  const solution = SOLUTIONS[activeTab];

  return (
    <section id="solutions" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="solutions-heading mb-12 text-center">
          <SectionBadge text="Solutions" />
          <h2 className="mt-6 font-display text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Purpose-built for{" "}
            <span className="gradient-text">every workload</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            From streaming analytics to compliance automation, Stratos adapts to
            your most demanding use cases.
          </p>
        </div>

        {/* Tabs */}
        <div className="solutions-tabs mb-12 flex flex-wrap justify-center gap-2">
          {SOLUTIONS.map((sol, i) => (
            <button
              key={sol.id}
              onClick={() => handleTabChange(i)}
              className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
                i === activeTab
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "glass text-muted hover:text-foreground"
              }`}
            >
              <iconify-icon icon={sol.icon} width="18" height="18" />
              <span className="hidden sm:inline">{sol.title}</span>
              <span className="sm:hidden">{sol.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="glass mx-auto max-w-5xl rounded-3xl p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-light">
                <iconify-icon icon={solution.icon} width="28" height="28" />
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-foreground md:text-3xl">
                {solution.title}
              </h3>
              <p className="mb-2 font-display text-lg italic text-accent-light">
                {solution.subtitle}
              </p>
              <p className="text-muted leading-relaxed">{solution.description}</p>
            </div>

            <div className="flex items-center">
              <ul className="w-full space-y-3">
                {solution.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.02] p-4 text-sm text-foreground"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <iconify-icon
                        icon="solar:check-circle-bold-duotone"
                        width="18"
                        height="18"
                        style={{ color: "var(--color-accent-light)" }}
                      />
                    </div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
