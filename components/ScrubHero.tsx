"use client";

import { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import { HeroScrollText } from "@/components/motion";
import type { HeroChapter } from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import framesManifest from "@/content/frames-manifest.json";

const chapters: HeroChapter[] = [
  {
    at: 0,
    eyebrow: "Grid intelligence platform",
    headlineLines: ["The grid,", "ahead of itself."],
    subline:
      "A predictive operating layer for utilities — generation, load, and risk in one live model.",
  },
  {
    at: 0.4,
    eyebrow: "Forecast",
    headlineLines: ["See load", "before it arrives."],
    subline:
      "Probabilistic demand and DER forecasts down to the feeder, refreshed every five minutes.",
  },
  {
    at: 0.75,
    eyebrow: "Operate",
    headlineLines: ["Run the network", "with foresight."],
    subline: "Dispatch, fault detection, and asset health resolved on one screen.",
    cta: { label: "Request a demo", href: "#contact" },
  },
];

export default function ScrubHero() {
  const [progress, setProgress] = useState(0);

  return (
    <section id="top" className="relative">
      <ScrollCanvas
        frameCount={framesManifest.frameCount}
        pattern={framesManifest.frameUrlTemplate}
        padLength={4}
        scrollDistance={5}
        loadingLabel={siteConfig.shortName}
        loadingVariant="L3"
        onProgress={setProgress}
      >
        <HeroScrollText
          progress={progress}
          chapters={chapters}
          position="bottom-left"
          textColor="#26282E"
          accentColor="#5B6168"
          accentTextColor="#FBFBFA"
        />

        <div className="pointer-events-none absolute left-6 top-24 md:left-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-ink/55">
            {siteConfig.industry}
          </span>
        </div>

        <div className="pointer-events-none absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/45">
          Scroll ↓
        </div>
      </ScrollCanvas>
    </section>
  );
}
