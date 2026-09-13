import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import RevealText from "./RevealText";

export default function RecentWork() {
  const recent = projects.slice(0, 4);

  return (
    <section className="border-t border-line px-6 py-28 md:px-12 md:py-40">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <RevealText
          as="h2"
          className="font-display text-[9vw] italic leading-none text-paper md:text-[4vw]"
        >
          Recent Work
        </RevealText>
        <Link
          href="/work"
          className="group flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-smoke transition-colors hover:text-accent"
        >
          View All Work
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        {recent.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
