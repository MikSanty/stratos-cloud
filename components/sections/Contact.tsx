"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBadge from "@/components/ui/SectionBadge";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".contact-heading", { opacity: 0, y: 40 });
      gsap.set(".contact-field", { opacity: 0, y: 30 });

      gsap.to(".contact-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(".contact-field", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="contact" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl">
          <div className="contact-heading mb-12 text-center">
            <SectionBadge text="Contact" />
            <h2 className="mt-6 font-display text-4xl tracking-tight md:text-5xl lg:text-6xl">
              Let&apos;s build{" "}
              <span className="gradient-text">together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Ready to scale your infrastructure? Reach out and our team will
              get back to you within 24 hours.
            </p>
          </div>

          <div className="contact-form glass rounded-3xl p-8 md:p-10">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="contact-field grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-glass-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted"
                  >
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-glass-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full rounded-xl border border-glass-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                />
              </div>

              <div className="contact-field">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project and infrastructure needs..."
                  className="w-full resize-none rounded-xl border border-glass-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
                />
              </div>

              <div className="contact-field">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
                >
                  Send Request
                  <iconify-icon icon="solar:arrow-right-bold-duotone" width="18" height="18" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
