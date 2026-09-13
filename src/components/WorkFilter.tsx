"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { Project, ProjectCategory } from "@/lib/types";
import ProjectCard from "./ProjectCard";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Photo", value: "photo" },
  { label: "Video", value: "video" },
  { label: "3D", value: "3d" },
];

export default function WorkFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active, projects]
  );

  function handleFilter(value: ProjectCategory | "all") {
    if (value === active) return;
    const grid = gridRef.current;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!grid || prefersReducedMotion) {
      setActive(value);
      return;
    }

    gsap.to(grid.children, {
      opacity: 0,
      y: 16,
      duration: 0.3,
      stagger: 0.02,
      ease: "power2.in",
      onComplete: () => {
        setActive(value);
        requestAnimationFrame(() => {
          if (!gridRef.current) return;
          gsap.fromTo(
            gridRef.current.children,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" }
          );
        });
      },
    });
  }

  return (
    <div>
      <div className="mb-20 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => handleFilter(f.value)}
            className={`rounded-md border px-6 py-8 text-center text-[11px] uppercase tracking-widest2 transition-all duration-300 focus-ring md:py-10 ${
              active === f.value
                ? "border-accent text-paper"
                : "border-line text-smoke hover:border-accent/60 hover:text-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
