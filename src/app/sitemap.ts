import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const siteUrl = "https://bybfilms.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/work", "/connect"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
