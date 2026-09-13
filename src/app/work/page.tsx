import type { Metadata } from "next";
import RevealText from "@/components/RevealText";
import WorkFilter from "@/components/WorkFilter";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected film, photography and 3D work from BYB Films — commercial films, brand films, campaigns and documentaries.",
};

export default function WorkPage() {
  return (
    <section className="px-6 pb-28 pt-40 md:px-12 md:pt-52">
      <RevealText
        as="h1"
        className="mb-16 font-display text-[13vw] font-light leading-[0.9] text-paper md:text-[7vw]"
      >
        Work
      </RevealText>

      <WorkFilter projects={projects} />
    </section>
  );
}
