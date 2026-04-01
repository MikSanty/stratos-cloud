"use client";

import { useState, useEffect, useCallback } from "react";
import { BRAND, NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleIntersection = useCallback(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const cleanup = handleIntersection();
    return cleanup;
  }, [handleIntersection]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Rail Nav */}
      <nav className="fixed left-0 top-0 z-50 hidden h-screen w-[68px] flex-col items-center justify-between border-r border-glass-border bg-surface/80 backdrop-blur-xl py-6 lg:flex">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="flex flex-col items-center gap-1"
        >
          <iconify-icon
            icon={BRAND.logoIconLinear}
            width="28"
            height="28"
            style={{ color: "var(--color-accent-light)" }}
          />
          <span className="text-[10px] font-semibold tracking-tighter text-foreground">
            {BRAND.name}
          </span>
        </button>

        {/* Nav Items */}
        <div className="flex flex-col items-center gap-1">
          {NAV_ITEMS.map(({ label, href, icon }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(href)}
                title={label}
                className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-accent/15 text-accent-light"
                    : "text-muted hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <iconify-icon icon={icon} width="20" height="20" />
                <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-surface-elevated px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
          title="Get Started"
        >
          <iconify-icon icon="solar:arrow-right-bold-duotone" width="18" height="18" />
        </button>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-glass-border bg-surface/80 px-5 backdrop-blur-xl lg:hidden">
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2"
        >
          <iconify-icon
            icon={BRAND.logoIconLinear}
            width="24"
            height="24"
            style={{ color: "var(--color-accent-light)" }}
          />
          <span className="text-sm font-semibold tracking-tighter text-foreground">
            {BRAND.name}
          </span>
        </button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:text-foreground"
          aria-label="Toggle menu"
        >
          <iconify-icon
            icon={mobileOpen ? "solar:close-circle-bold-duotone" : "solar:hamburger-menu-bold-duotone"}
            width="24"
            height="24"
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-16 bottom-0 w-72 border-l border-glass-border bg-surface/95 backdrop-blur-xl">
            <div className="flex flex-col gap-1 p-4">
              {NAV_ITEMS.map(({ label, href, icon }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(href)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-accent/15 text-accent-light"
                        : "text-muted hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    <iconify-icon icon={icon} width="20" height="20" />
                    {label}
                  </button>
                );
              })}
              <div className="mt-4 border-t border-glass-border pt-4">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-dark"
                >
                  Get Started
                  <iconify-icon icon="solar:arrow-right-bold-duotone" width="16" height="16" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

