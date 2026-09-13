import type { Metadata } from "next";
import RevealText from "@/components/RevealText";
import Services from "@/components/Services";
import ThreeDShowcase from "@/components/ThreeDShowcase";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Post production and media house services from BYB Films — editing, color grading, VFX, sound design, brand films, photography and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 md:px-12 md:pt-52">
        <RevealText
          as="h1"
          className="font-display text-[11vw] font-light leading-[0.95] text-paper md:text-[6vw]"
        >
          Capability, end to end.
        </RevealText>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-smoke md:text-base">
          From first frame to final master, BYB Films operates across two
          disciplines — building the raw material as a Media House, and
          shaping it into its final form in Post Production.
        </p>
      </section>

      <Services />

      <section className="border-t border-line px-6 py-28 md:px-12 md:py-40">
        <RevealText
          as="span"
          className="mb-10 block text-[11px] uppercase tracking-widest2 text-smoke"
        >
          Emerging Visual Technology
        </RevealText>
        <ThreeDShowcase />
      </section>
    </>
  );
}
