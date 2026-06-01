import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrubHero from "@/components/ScrubHero";
import { FadeUp, StaggerChildren, ImageRevealMask, TextReveal } from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";

const img = assetManifest.images;
const serviceImage: Record<string, string> = {
  "load-forecasting": img["service-load-forecasting"],
  "grid-optimization": img["service-grid-optimization"],
  "outage-intelligence": img["service-outage-intelligence"],
  "asset-health": img["service-asset-health"],
  "carbon-compliance": img["service-carbon-compliance"],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrubHero />

        {/* Trust bar */}
        <section className="border-y border-ink/10 bg-surface/50">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6">
            {siteConfig.trustBar.map((item) => (
              <span
                key={item}
                className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="px-6 py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center md:gap-20">
            <div>
              <FadeUp>
                <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-accent">
                  {siteConfig.platform.eyebrow}
                </span>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-tight text-ink md:text-[2.75rem]">
                  {siteConfig.platform.title}
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65">
                  {siteConfig.platform.body}
                </p>
              </FadeUp>
              <div className="mt-10 space-y-6">
                {siteConfig.platform.points.map((point, i) => (
                  <FadeUp key={point.title} delay={0.15 + i * 0.06}>
                    <div className="border-l border-ink/15 pl-5">
                      <h3 className="font-body text-sm font-semibold text-ink">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                        {point.description}
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
            <ImageRevealMask
              src={img["section-platform"]}
              alt="Horizon control-room platform overview"
              direction="left"
              aspectClass="aspect-[4/5]"
              className="rounded-sm ring-1 ring-ink/10"
            />
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="border-t border-ink/10 bg-surface/40 px-6 py-28 md:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <FadeUp>
                <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-accent">
                  Capabilities
                </span>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-tight text-ink md:text-[2.75rem]">
                  Five intelligences, one operating layer.
                </h2>
              </FadeUp>
            </div>

            <StaggerChildren
              staggerDelay={0.07}
              className="mt-16 grid gap-px overflow-hidden rounded-sm bg-ink/10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {siteConfig.services.map((service) => (
                <article
                  key={service.slug}
                  className="group flex flex-col bg-bg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={serviceImage[service.slug]}
                      alt={service.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-lg tracking-tight text-ink">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
              <div className="flex flex-col justify-center bg-ink p-7">
                <p className="font-display text-lg leading-snug tracking-tight text-bg">
                  {siteConfig.cta.primary}
                </p>
                <a
                  href={siteConfig.cta.primaryHref}
                  className="mt-4 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bg/80 transition-colors hover:text-bg"
                >
                  {siteConfig.cta.secondary} →
                </a>
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Approach — oversized type on dark ink for contrast */}
        <section id="approach" className="bg-ink px-6 py-32 text-bg md:py-44">
          <div className="mx-auto max-w-7xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-bg/50">
              {siteConfig.approach.eyebrow}
            </span>
            <TextReveal
              as="h2"
              className="mt-6 font-display text-[18vw] leading-[0.85] tracking-tight text-bg md:text-[12rem]"
            >
              {siteConfig.approach.themeWord}
            </TextReveal>
            <FadeUp delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-bg/70">
                {siteConfig.approach.lead}
              </p>
            </FadeUp>

            <div className="mt-20 grid gap-12 md:grid-cols-3">
              {siteConfig.approach.steps.map((step, i) => (
                <FadeUp key={step.title} delay={0.1 + i * 0.08}>
                  <div className="border-t border-bg/20 pt-6">
                    <span className="font-mono text-xs text-bg/40">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-2xl tracking-tight text-bg">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-bg/60">
                      {step.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Company */}
        <section id="company" className="px-6 py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
            <div>
              <FadeUp>
                <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-accent">
                  {siteConfig.company.eyebrow}
                </span>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-tight text-ink md:text-[2.75rem]">
                  {siteConfig.company.title}
                </h2>
              </FadeUp>
            </div>
            <div className="space-y-6">
              <FadeUp delay={0.1}>
                <p className="text-base leading-relaxed text-ink/65">
                  {siteConfig.company.body}
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="text-base leading-relaxed text-ink/65">
                  {siteConfig.company.body2}
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-ink/10"
        >
          <img
            src={img["section-cta"]}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
          />
          <div className="relative mx-auto max-w-3xl px-6 py-32 text-center md:py-44">
            <FadeUp>
              <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-ink md:text-6xl">
                {siteConfig.ctaBlock.heading}
              </h2>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/65">
                {siteConfig.ctaBlock.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.16}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="rounded-full bg-ink px-7 py-3 font-body text-sm font-medium text-bg transition-opacity hover:opacity-85"
                >
                  {siteConfig.cta.primary}
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                  className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70 transition-colors hover:text-ink"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
