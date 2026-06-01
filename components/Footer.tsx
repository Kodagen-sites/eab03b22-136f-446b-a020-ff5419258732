import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-surface/60 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="block h-2.5 w-2.5 rounded-sm bg-ink" aria-hidden />
              <span className="font-display text-lg tracking-tight text-ink">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
              {siteConfig.footer.statement}
            </p>
            <div className="mt-6">
              <SocialLinks socials={siteConfig.socials} className="text-ink/70" />
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
              Explore
            </div>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink/70 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-sm text-ink/70 transition-colors hover:text-ink"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
              Contact
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/70">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ink">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-ink"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>{siteConfig.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {siteConfig.brandName}. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
