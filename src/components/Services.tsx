"use client";

import { useState } from "react";
import { services } from "@/lib/utils";
import RevealText from "./RevealText";

const groups = [services.postProduction, services.mediaHouse];

const previewImages: Record<string, string> = {
  "Video Editing": "/media/proj-aurora-shot-1.svg",
  "Color Grading": "/media/proj-glasshouse-hero.svg",
  VFX: "/media/proj-monolith-hero.svg",
  "Motion Graphics": "/media/proj-terraform-img-1.svg",
  "Sound Design": "/media/proj-driftwood-hero.svg",
  "Audio Mixing": "/media/proj-driftwood-img-1.svg",
  Compositing: "/media/proj-monolith-shot-2.svg",
  "Film Finishing": "/media/proj-aurora-hero.svg",
  "Commercial Films": "/media/proj-glasshouse-img-1.svg",
  "Brand Films": "/media/proj-glasshouse-hero.svg",
  "Corporate Films": "/media/proj-driftwood-shot-1.svg",
  "Product Films": "/media/proj-terraform-hero.svg",
  "Social Media Content": "/media/proj-nightfield-img-1.svg",
  "Music Videos": "/media/proj-aurora-img-1.svg",
  Documentaries: "/media/proj-driftwood-img-2.svg",
  Photography: "/media/proj-halo-hero.svg",
  "Campaign Content": "/media/proj-halo-img-1.svg",
};

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);
  const previewSrc = hovered ? previewImages[hovered] : null;

  return (
    <section className="relative border-t border-line px-6 py-28 md:px-12 md:py-40">
      <RevealText
        as="span"
        className="mb-16 block text-[11px] uppercase tracking-widest2 text-smoke"
      >
        What We Do
      </RevealText>

      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-12">
        {groups.map((group) => (
          <div key={group.title} id={group.id} className="scroll-mt-32">
            <RevealText
              as="h3"
              className="mb-10 font-display text-3xl italic leading-none text-paper md:text-4xl"
            >
              <span className="mr-3 not-italic text-smoke">{group.index} /</span>
              {group.title}
            </RevealText>

            <ul>
              {group.items.map((item) => (
                <li
                  key={item}
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered(null)}
                  className="group flex items-center justify-between border-t border-line py-5 last:border-b"
                >
                  <span className="font-display text-xl italic text-paper/60 transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent md:text-2xl">
                    {item}
                  </span>
                  <span className="translate-x-2 text-paper opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    &rarr;
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className={`pointer-events-none fixed right-12 top-1/2 z-30 hidden h-64 w-48 -translate-y-1/2 overflow-hidden rounded-sm border border-line transition-opacity duration-300 lg:block ${
          previewSrc ? "opacity-100" : "opacity-0"
        }`}
      >
        {previewSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={previewSrc} alt="" className="h-full w-full object-cover" />
        )}
      </div>
    </section>
  );
}
