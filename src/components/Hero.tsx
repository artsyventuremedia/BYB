"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CinematicMedia from "./CinematicMedia";
import FocusDropdown from "./FocusDropdown";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const root = rootRef.current;
    if (!root) return;

    setReady(true);

    if (prefersReducedMotion) {
      gsap.set(
        [
          ".hero-logo",
          ".hero-line",
          ".hero-cta",
          ".hero-mask",
          ".hero-nav-fade",
        ],
        { clearProps: "all" }
      );
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.set(".hero-mask", { clipPath: "inset(100% 0 0 0)" })
      .set(".hero-line-inner", { yPercent: 120 })
      .set(".hero-logo", { opacity: 0, y: 16 })
      .fromTo(
        ".hero-logo",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9 },
        0.15
      )
      .to(
        ".hero-line-inner",
        { yPercent: 0, duration: 1, stagger: 0.09 },
        0.55
      )
      .to(
        ".hero-mask",
        { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "power4.inOut" },
        0.9
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.5
      )
      .fromTo(
        ".hero-nav-fade",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        1.2
      );
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex h-[92vh] min-h-[560px] w-full flex-col justify-end overflow-hidden bg-ink md:h-[100vh]"
    >
      <div className="hero-mask absolute inset-0" style={{ clipPath: "inset(100% 0 0 0)" }}>
        <CinematicMedia
          poster="/media/hero-poster.svg"
          alt="BYB Films cinematic showreel"
          priority
          className="h-full w-full"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col justify-between px-6 pb-10 pt-28 md:px-12 md:pb-16">
        <div className="hero-logo flex items-start justify-between gap-6">
          <span className="text-[11px] uppercase tracking-widest2 text-paper/80">
            BYB Films — Est. 2016
          </span>
          <FocusDropdown />
        </div>

        <div>
          <h1 className="font-display text-[13vw] font-light leading-[0.92] tracking-tight text-paper md:text-[7.5vw]">
            <span className="split-line">
              <span className="hero-line-inner inline-block">Post Production</span>
            </span>
            <span className="split-line">
              <span className="hero-line-inner inline-block italic text-paper/90">
                Media House
              </span>
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <p className="hero-cta max-w-md text-sm leading-relaxed text-smoke">
              A creative production house crafting film, photography and
              visual experiences for brands who don&rsquo;t want to look like
              everyone else.
            </p>

            <button
              data-cursor="Play"
              className="hero-cta group flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-paper focus-ring"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-paper/40 transition-colors group-hover:border-paper">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M0 0L12 7L0 14V0Z" fill="currentColor" />
                </svg>
              </span>
              Watch Showreel
            </button>
          </div>
        </div>
      </div>

      {ready && (
        <div
          className="hero-nav-fade pointer-events-none absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-widest2 text-smoke md:block"
          style={{ opacity: 0 }}
        >
          Scroll
        </div>
      )}
    </section>
  );
}
