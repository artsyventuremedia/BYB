import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Aurora",
    slug: "aurora",
    client: "Nordlys",
    year: "2026",
    category: "video",
    services: ["Direction", "Color Grading", "Sound Design", "Finishing"],
    description:
      "A commercial film built around light — shot across three time zones and cut into a single continuous emotional arc for Nordlys' seasonal campaign.",
    size: "lg",
    thumbnail: "/media/proj-aurora-thumb.svg",
    heroImage: "/media/proj-aurora-hero.svg",
    images: ["/media/proj-aurora-img-1.svg", "/media/proj-aurora-img-2.svg"],
    screenshots: ["/media/proj-aurora-shot-1.svg", "/media/proj-aurora-shot-2.svg"],
    credits: [
      { role: "Director", name: "M. Reyes" },
      { role: "DP", name: "K. Osei" },
      { role: "Editor", name: "L. Marchetti" },
    ],
  },
  {
    id: "2",
    title: "Monolith",
    slug: "monolith",
    client: "Ferro Labs",
    year: "2026",
    category: "3d",
    services: ["3D Direction", "Look Development", "Motion Design"],
    description:
      "A fully synthetic product film exploring material and form for Ferro Labs' flagship launch — built entirely in a virtual studio.",
    size: "md",
    thumbnail: "/media/proj-monolith-thumb.svg",
    heroImage: "/media/proj-monolith-hero.svg",
    images: ["/media/proj-monolith-img-1.svg", "/media/proj-monolith-img-2.svg"],
    screenshots: ["/media/proj-monolith-shot-1.svg", "/media/proj-monolith-shot-2.svg"],
    threeDAsset: "placeholder",
    credits: [
      { role: "3D Director", name: "A. Voss" },
      { role: "Lookdev Artist", name: "R. Chen" },
    ],
  },
  {
    id: "3",
    title: "Nightfield",
    slug: "nightfield",
    client: "Self-Initiated",
    year: "2025",
    category: "photo",
    services: ["Photography", "Retouching", "Art Direction"],
    description:
      "A quiet study of industrial landscapes at night, shot on long exposure across the outskirts of three port cities.",
    size: "sm",
    thumbnail: "/media/proj-nightfield-thumb.svg",
    heroImage: "/media/proj-nightfield-hero.svg",
    images: ["/media/proj-nightfield-img-1.svg", "/media/proj-nightfield-img-2.svg"],
    screenshots: ["/media/proj-nightfield-shot-1.svg", "/media/proj-nightfield-shot-2.svg"],
    credits: [
      { role: "Photographer", name: "S. Ibarra" },
      { role: "Retoucher", name: "N. Park" },
    ],
  },
  {
    id: "4",
    title: "Glasshouse",
    slug: "glasshouse",
    client: "Verdant",
    year: "2025",
    category: "video",
    services: ["Brand Film", "Color Grading", "Sound Design"],
    description:
      "A brand film for Verdant tracing the life of a single greenhouse across four seasons, told without dialogue.",
    size: "lg",
    thumbnail: "/media/proj-glasshouse-thumb.svg",
    heroImage: "/media/proj-glasshouse-hero.svg",
    images: ["/media/proj-glasshouse-img-1.svg", "/media/proj-glasshouse-img-2.svg"],
    screenshots: ["/media/proj-glasshouse-shot-1.svg", "/media/proj-glasshouse-shot-2.svg"],
    credits: [
      { role: "Director", name: "M. Reyes" },
      { role: "Composer", name: "J. Lindqvist" },
    ],
  },
  {
    id: "5",
    title: "Terraform",
    slug: "terraform",
    client: "Basalt",
    year: "2024",
    category: "3d",
    services: ["3D Visualization", "Motion Design", "Compositing"],
    description:
      "Procedural terrain visuals generated for Basalt's product reveal, blending simulation with hand-tuned art direction.",
    size: "md",
    thumbnail: "/media/proj-terraform-thumb.svg",
    heroImage: "/media/proj-terraform-hero.svg",
    images: ["/media/proj-terraform-img-1.svg", "/media/proj-terraform-img-2.svg"],
    screenshots: ["/media/proj-terraform-shot-1.svg", "/media/proj-terraform-shot-2.svg"],
    threeDAsset: "placeholder",
    credits: [{ role: "Technical Artist", name: "R. Chen" }],
  },
  {
    id: "6",
    title: "Halo",
    slug: "halo",
    client: "Feld & Co",
    year: "2024",
    category: "photo",
    services: ["Campaign Photography", "Art Direction", "Retouching"],
    description:
      "Editorial campaign imagery for Feld & Co's autumn collection, shot on location across the Baltic coast.",
    size: "sm",
    thumbnail: "/media/proj-halo-thumb.svg",
    heroImage: "/media/proj-halo-hero.svg",
    images: ["/media/proj-halo-img-1.svg", "/media/proj-halo-img-2.svg"],
    screenshots: ["/media/proj-halo-shot-1.svg", "/media/proj-halo-shot-2.svg"],
    credits: [
      { role: "Photographer", name: "S. Ibarra" },
      { role: "Stylist", name: "E. Kowalska" },
    ],
  },
  {
    id: "7",
    title: "Driftwood",
    slug: "driftwood",
    client: "Independent",
    year: "2023",
    category: "video",
    services: ["Documentary", "Editing", "Color Grading"],
    description:
      "A short documentary following three generations of boat builders on the northern coast, edited from sixty hours of footage.",
    size: "md",
    thumbnail: "/media/proj-driftwood-thumb.svg",
    heroImage: "/media/proj-driftwood-hero.svg",
    images: ["/media/proj-driftwood-img-1.svg", "/media/proj-driftwood-img-2.svg"],
    screenshots: ["/media/proj-driftwood-shot-1.svg", "/media/proj-driftwood-shot-2.svg"],
    credits: [
      { role: "Director", name: "L. Marchetti" },
      { role: "Editor", name: "L. Marchetti" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
