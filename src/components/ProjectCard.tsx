import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const sizeClasses: Record<Project["size"], string> = {
  lg: "md:col-span-8 aspect-[16/10]",
  md: "md:col-span-6 aspect-[4/5]",
  sm: "md:col-span-4 aspect-[3/4]",
};

const categoryLabel: Record<Project["category"], string> = {
  photo: "Photo",
  video: "Video",
  "3d": "3D",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor={project.category === "video" ? "Watch" : "View"}
      className={cn(
        "group relative col-span-1 block overflow-hidden bg-ink",
        sizeClasses[project.size]
      )}
    >
      <Image
        src={project.thumbnail}
        alt={`${project.title} — ${categoryLabel[project.category]} project`}
        fill
        sizes="(min-width: 768px) 60vw, 100vw"
        className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
        <div>
          <span className="mb-2 block text-[10px] uppercase tracking-widest2 text-smoke">
            {categoryLabel[project.category]} / {project.year}
          </span>
          <h3 className="font-display text-2xl italic text-paper transition-transform duration-500 ease-cinematic group-hover:-translate-y-1 md:text-3xl">
            {project.title}
          </h3>
        </div>

        <span className="translate-x-2 text-sm uppercase tracking-widest2 text-paper opacity-0 transition-all duration-400 ease-cinematic group-hover:translate-x-0 group-hover:opacity-100">
          {project.category === "video" ? "Watch →" : "View →"}
        </span>
      </div>
    </Link>
  );
}
