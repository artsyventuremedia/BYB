export type ProjectCategory = "photo" | "video" | "3d";

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  year: string;
  category: ProjectCategory;
  services: string[];
  description: string;
  size: "sm" | "md" | "lg";
  thumbnail: string;
  heroImage: string;
  heroVideo?: string;
  images: string[];
  screenshots: string[];
  video?: string;
  threeDAsset?: string;
  credits: ProjectCredit[];
}
