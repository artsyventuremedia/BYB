import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacentProjects, getProjectBySlug, projects } from "@/lib/projects";
import CinematicMedia from "@/components/CinematicMedia";
import ProjectGallery from "@/components/ProjectGallery";
import RevealText from "@/components/RevealText";
import ThreeDShowcase from "@/components/ThreeDShowcase";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — BYB Films`,
      description: project.description,
      images: [project.heroImage],
      type: "article",
    },
  };
}

const categoryLabel: Record<string, string> = {
  photo: "Photography",
  video: "Film",
  "3d": "3D",
};

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article>
      <header className="px-6 pb-12 pt-40 md:px-12 md:pt-52">
        <div className="mb-10 flex flex-wrap gap-x-10 gap-y-2 text-[11px] uppercase tracking-widest2 text-smoke">
          <span>{project.client}</span>
          <span>{categoryLabel[project.category]}</span>
          <span>{project.year}</span>
        </div>
        <RevealText
          as="h1"
          className="font-display text-[13vw] font-light leading-[0.92] text-paper md:text-[6.5vw]"
        >
          {project.title}
        </RevealText>
      </header>

      <section className="px-6 md:px-12">
        <span className="mb-6 block text-[11px] uppercase tracking-widest2 text-smoke">
          Project Description
        </span>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line">
          <CinematicMedia
            poster={project.heroImage}
            videoSrc={project.video}
            alt={`${project.title} hero`}
            priority
          />
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="border-t border-line pt-10">
          <p className="max-w-3xl font-display text-2xl italic leading-snug text-paper md:text-3xl">
            {project.description}
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 text-sm md:grid-cols-4">
            <Detail term="Client" value={project.client} />
            <Detail term="Year" value={project.year} />
            <Detail term="Category" value={categoryLabel[project.category]} />
            <Detail term="Services" value={project.services.join(", ")} />
            {project.credits.map((c) => (
              <Detail key={c.role} term={c.role} value={c.name} />
            ))}
          </dl>
        </div>
      </section>

      {project.category === "3d" && (
        <section className="border-t border-line px-6 py-20 md:px-12 md:py-28">
          <span className="mb-8 block text-[11px] uppercase tracking-widest2 text-smoke">
            Interactive Preview
          </span>
          <ThreeDShowcase />
        </section>
      )}

      <section className="border-t border-line px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
          <div className="rounded-2xl border border-line p-6 md:col-span-7 md:p-8">
            <span className="mb-6 block text-[11px] uppercase tracking-widest2 text-smoke">
              Screenshots
            </span>
            <ProjectGallery title={project.title} images={project.screenshots} />
          </div>

          <div className="rounded-2xl border border-line p-6 md:col-span-5 md:p-8">
            <span className="mb-6 block text-[11px] uppercase tracking-widest2 text-smoke">
              Images
            </span>
            <ProjectGallery title={project.title} images={project.images} columns={1} />
          </div>
        </div>
      </section>

      <nav className="grid grid-cols-1 border-t border-line md:grid-cols-2">
        <ProjectNavLink label="Previous Project" project={prev} align="left" />
        <ProjectNavLink label="Next Project" project={next} align="right" />
      </nav>
    </article>
  );
}

function Detail({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line pb-3">
      <dt className="text-smoke">{term}</dt>
      <dd className="text-right text-paper">{value}</dd>
    </div>
  );
}

function ProjectNavLink({
  label,
  project,
  align,
}: {
  label: string;
  project: (typeof projects)[number];
  align: "left" | "right";
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="View"
      className={`group relative flex flex-col gap-2 overflow-hidden border-line p-10 md:p-16 ${
        align === "left" ? "md:border-r" : ""
      } ${align === "right" ? "items-end text-right" : ""}`}
    >
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-30">
        <Image src={project.thumbnail} alt="" fill className="object-cover" />
      </div>
      <span className="text-[11px] uppercase tracking-widest2 text-smoke">
        {label}
      </span>
      <span className="font-display text-3xl italic text-paper md:text-4xl">
        {project.title}
      </span>
    </Link>
  );
}
