"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionBadge from "@/components/ui/SectionBadge";
import { TESTIMONIALS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".testimonials-heading", { opacity: 0, y: 40 });
      gsap.set(".testimonial-card", { opacity: 0, y: 40 });

      gsap.to(".testimonials-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonial-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
          cards?.forEach((card, i) => {
            gsap.to(card, {
              y: `${(i % 2 === 0 ? -1 : 1) * 8}`,
              duration: 3 + i * 0.4,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="testimonials" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="testimonials-heading mb-16 text-center">
          <SectionBadge text="Testimonials" />
          <h2 className="mt-6 font-display text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Loved by teams{" "}
            <span className="gradient-text">everywhere</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Don&apos;t take our word for it. Hear from the engineers and leaders
            who rely on Stratos every day.
          </p>
        </div>

        <div className="testimonial-grid grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="testimonial-card glass rounded-2xl p-6 transition-all duration-300 hover:bg-glass-hover hover:border-white/12"
            >
              {/* Quote */}
              <div className="mb-6">
                <iconify-icon
                  icon="solar:quote-up-square-bold-duotone"
                  width="28"
                  height="28"
                  style={{ color: "var(--color-accent)", opacity: 0.4 }}
                />
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-glass-border pt-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
