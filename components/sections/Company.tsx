"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBadge from "@/components/ui/SectionBadge";
import { COMPANY_STATS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({
  value,
  suffix,
  label,
  triggered,
}: {
  value: number;
  suffix: string;
  label: string;
  triggered: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    const proxy = { val: 0 };
    gsap.to(proxy, {
      val: value,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.round(proxy.val * 100) / 100),
    });
  }, [triggered, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) return num.toLocaleString();
    if (num % 1 !== 0) return num.toFixed(num < 100 ? 3 : 0);
    return num.toString();
  };

  return (
    <div className="text-center">
      <div className="mb-2 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
        <span className="gradient-text">
          {formatNumber(display)}
          {suffix}
        </span>
      </div>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}

export default function Company() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [countersTriggered, setCountersTriggered] = useState(false);

  useGSAP(
    () => {
      gsap.set([".company-heading", ".company-narrative"], { opacity: 0, y: 30 });

      gsap.to(".company-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(".company-narrative", {
        scrollTrigger: {
          trigger: ".company-narrative",
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        trigger: ".company-stats",
        start: "top 80%",
        onEnter: () => setCountersTriggered(true),
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="company" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="company-heading mb-16 text-center">
          <SectionBadge text="Company" />
          <h2 className="mt-6 font-display text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Built by engineers,{" "}
            <span className="gradient-text">for engineers</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Narrative */}
          <div className="company-narrative">
            <h3 className="mb-6 font-display text-3xl text-foreground">
              The blueprint behind Stratos
            </h3>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                We started Stratos in 2019 because we were tired of stitching
                together fragmented cloud tools that were never designed to work
                together. Our founding team — veterans of AWS, Cloudflare, and
                Datadog — set out to build the unified infrastructure platform we
                always wished existed.
              </p>
              <p>
                Today, Stratos powers critical workloads for over 2,800
                enterprise clients across 47 countries. Our distributed edge
                network spans 310+ locations, delivering sub-millisecond
                response times to 1.2 billion end users daily.
              </p>
              <p>
                We believe infrastructure should be invisible — reliable enough
                that you forget it&apos;s there, yet powerful enough to handle
                whatever you throw at it. That&apos;s the promise we deliver on
                every single day.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="company-stats flex items-center">
            <div className="grid w-full grid-cols-2 gap-8">
              {COMPANY_STATS.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  triggered={countersTriggered}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
