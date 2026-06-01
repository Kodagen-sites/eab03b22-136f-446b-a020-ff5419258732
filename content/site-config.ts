/**
 * VARIATION MANIFEST (Step 2.5 — committed picks)
 * {
 *   "generation_id": "gen-2026-06-01-horizon-ai-energy",
 *   "company": "Horizon AI Energy",
 *   "archetype": "G",                       // PRE-LOCKED
 *   "g_render_mode": "scrub-cinematic",     // PRE-LOCKED (ScrollCanvas + ffmpeg frames)
 *   "style": "S5",                          // Industrial Monochrome, light reinterpretation
 *   "scene_variant": "V2",
 *   "motion_variant": "M3",                 // cinematic push-in
 *   "card_variant": "CV3",                  // minimal hairline image card
 *   "hero_overlay_variant": "HO2",          // bottom-left (HeroScrollText)
 *   "hero_text_pattern": "H2",              // bottom-anchored
 *   "hero_entrance": "E3",
 *   "header_variant": "minimal-bar",
 *   "footer_variant": "FT3",
 *   "cta_variant": "CTA1",                  // magnetic standard
 *   "voice_family": "V6",                   // technical / grounded
 *   "color_palette": "pearl-platinum",      // PRE-LOCKED #FBFBFA/#EAEAEA/#9CA0A8/#3A3D45
 *   "typography_pair": "archivo-inter",     // PRE-LOCKED Archivo Black + Inter (+ IBM Plex Mono)
 *   "hero_treatment": "scrubbed-frames",
 *   "narrative_shape": "object-reveal",
 *   "camera_vocabulary": "push-in-macro",
 *   "composition_pattern": "right-third",
 *   "subject_position": "mid",
 *   "lighting_temperature": "studio-controlled",
 *   "industry_video_tone": "architecture-contemplative",
 *   "motion_vocabulary": "ease-cinematic",
 *   "background_treatment": "solid-color-disciplined",
 *   "card_material_variant": "image-reveal-mask",
 *   "glass_material": "frosted-hairline",
 *   "motion_bg_pattern": "geometric-grid-pulse",
 *   "motion_bg_density": "subtle",
 *   "industry_object": "suspended luminous platinum energy-core lattice",
 *   "rolled_at": "2026-06-01T00:00:00Z"
 * }
 *
 * Copy voice: V6 (technical, grounded, precise). Build mode: landing (single page).
 */

export interface HeroChapter {
  at: number;
  eyebrow?: string;
  headlineLines: string[];
  subline?: string;
  cta?: { label: string; href: string };
}

export interface Service {
  slug: string;
  name: string;
  description: string;
}

export const siteConfig = {
  brandName: "Horizon AI Energy",
  shortName: "Horizon",
  industry: "AI / Energy Tech — enterprise SaaS for utilities",
  tagline: "Grid intelligence for the modern utility",
  description:
    "Horizon AI Energy gives utilities a live, predictive view of generation, load, and grid risk — so operators act before the network does.",
  url: "https://horizonaienergy.com",

  contact: {
    email: "hello@horizonaienergy.com",
    phone: "+1 (415) 555-0142",
    location: "San Francisco, California",
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/horizon-ai-energy",
    x: "https://x.com/horizonaienergy",
  },

  nav: [
    { label: "Platform", href: "#platform" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Approach", href: "#approach" },
    { label: "Company", href: "#company" },
  ],

  cta: {
    primary: "Request a demo",
    primaryHref: "#contact",
    secondary: "Talk to our engineers",
    secondaryHref: "#contact",
  },

  hero: {
    chapters: [
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
        subline:
          "Dispatch, fault detection, and asset health resolved on one screen.",
        cta: { label: "Request a demo", href: "#contact" },
      },
    ] as HeroChapter[],
  },

  platform: {
    eyebrow: "Platform overview",
    title: "One model of your network, updated in real time.",
    body:
      "Horizon ingests SCADA, AMI, weather, and market signals into a single physics-aware model of your grid. Forecasts, dispatch recommendations, and risk scores are computed continuously — not in overnight batches — and surfaced to the operators and engineers who need them.",
    points: [
      {
        title: "Physics-aware, not just statistical",
        description:
          "Power-flow constraints are built into every forecast and recommendation.",
      },
      {
        title: "Five-minute refresh",
        description:
          "The model rebuilds as fast as your telemetry arrives — no overnight lag.",
      },
      {
        title: "Built for control rooms",
        description:
          "Read-only by default, with audited actions when you choose to act through Horizon.",
      },
    ],
  },

  services: [
    {
      slug: "load-forecasting",
      name: "Load forecasting",
      description:
        "Probabilistic demand and DER forecasts down to the feeder, refreshed every five minutes against live weather and market signals.",
    },
    {
      slug: "grid-optimization",
      name: "Grid optimization",
      description:
        "Real-time dispatch and distributed-energy orchestration that holds frequency and voltage within bounds — without manual intervention.",
    },
    {
      slug: "outage-intelligence",
      name: "Outage intelligence",
      description:
        "Predictive fault detection that flags failing assets and emerging faults weeks before they trip the network.",
    },
    {
      slug: "asset-health",
      name: "Asset health",
      description:
        "Sensor-fused condition scoring across transformers, lines, and substations, ranked by risk to service.",
    },
    {
      slug: "carbon-compliance",
      name: "Carbon & compliance",
      description:
        "Auditable emissions accounting and regulatory reporting drawn from the same operating data, in one ledger.",
    },
  ] as Service[],

  approach: {
    eyebrow: "How Horizon works",
    themeWord: "Foresight",
    lead:
      "We don't replace your control systems. We sit alongside them, turning the data they already produce into decisions you can make minutes — or weeks — earlier.",
    steps: [
      {
        title: "Connect",
        description:
          "Stream SCADA, AMI, GIS, weather, and market feeds through read-only connectors. No rip-and-replace.",
      },
      {
        title: "Model",
        description:
          "A physics-aware digital twin of your network is built and continuously reconciled against live telemetry.",
      },
      {
        title: "Act",
        description:
          "Forecasts, risk scores, and dispatch recommendations reach the right operators — with a full audit trail.",
      },
    ],
  },

  company: {
    eyebrow: "The company",
    title: "Built by grid operators and ML engineers.",
    body:
      "Horizon AI Energy was founded on a simple observation: utilities are rich in data and starved of foresight. Our team pairs people who have run real control rooms with engineers who build production machine-learning systems, so the platform earns trust on the operating floor rather than just in a demo.",
    body2:
      "We work with investor-owned utilities, public power, and cooperatives modernizing aging infrastructure under rising load and tighter decarbonization mandates.",
  },

  ctaBlock: {
    heading: "Bring foresight to your grid.",
    description:
      "See Horizon running against a sample of your own network. A focused, technical session with our engineering team — no slideware.",
  },

  trustBar: [
    "SCADA / AMI native",
    "Read-only by default",
    "Audited actions",
    "Deployed in your cloud or ours",
  ],

  footer: {
    statement:
      "A predictive operating layer for utilities — generation, load, and risk in one live model.",
  },

  seo: {
    title: "Horizon AI Energy — Grid intelligence for the modern utility",
    description:
      "Horizon AI Energy is a grid-intelligence platform that gives utilities a live, predictive view of generation, load, and risk — forecasting, dispatch, outage and asset intelligence on one screen.",
  },
};

export type SiteConfig = typeof siteConfig;
