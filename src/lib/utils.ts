import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const services = {
  postProduction: {
    id: "post-production",
    index: "01",
    title: "Post Production",
    items: [
      "Video Editing",
      "Color Grading",
      "VFX",
      "Motion Graphics",
      "Sound Design",
      "Audio Mixing",
      "Compositing",
      "Film Finishing",
    ],
  },
  mediaHouse: {
    id: "media-house",
    index: "02",
    title: "Media House",
    items: [
      "Commercial Films",
      "Brand Films",
      "Corporate Films",
      "Product Films",
      "Social Media Content",
      "Music Videos",
      "Documentaries",
      "Photography",
      "Campaign Content",
    ],
  },
};

export const team = [
  {
    index: "01",
    name: "Maren Reyes",
    role: "Creative Director",
    image: "/media/team-01.svg",
  },
  {
    index: "02",
    name: "Idris Osei",
    role: "Director / Producer",
    image: "/media/team-02.svg",
  },
  {
    index: "03",
    name: "Luca Marchetti",
    role: "Editor / Cinematographer",
    image: "/media/team-03.svg",
  },
];

export const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Vimeo", href: "https://vimeo.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];
