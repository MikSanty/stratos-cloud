import { BRAND, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-glass-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <iconify-icon
                icon={BRAND.logoIconLinear}
                width="28"
                height="28"
                style={{ color: "var(--color-accent-light)" }}
              />
              <span className="text-lg font-semibold tracking-tighter">
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs">
              {BRAND.tagline}. Enterprise-grade cloud infrastructure for teams that move fast.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-all hover:bg-white/5 hover:text-foreground"
                >
                  <iconify-icon icon={icon} width="18" height="18" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-glass-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with precision for enterprise scale.
          </p>
        </div>
      </div>
    </footer>
  );
}
