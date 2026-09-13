import RevealText from "./RevealText";

export default function About() {
  return (
    <section id="about" className="scroll-mt-32 border-t border-line px-6 py-28 md:px-12 md:py-40">
      <RevealText
        as="span"
        className="mb-16 block text-[11px] uppercase tracking-widest2 text-smoke"
      >
        About Us
      </RevealText>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <RevealText as="h2" className="font-display text-[9vw] font-light leading-[1] tracking-tight text-paper md:text-[4.2vw]">
            We don&rsquo;t just make content.
          </RevealText>
          <RevealText
            as="h2"
            delay={0.08}
            className="font-display text-[9vw] font-light italic leading-[1] tracking-tight text-paper/80 md:text-[4.2vw]"
          >
            We create visual stories.
          </RevealText>
        </div>

        <div className="flex flex-col justify-end gap-8 md:col-span-4">
          <p className="text-sm leading-relaxed text-smoke md:text-base">
            BYB Films is a creative production house creating films, visual
            experiences and high-quality media through production,
            post-production, photography and emerging visual technologies.
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-line pt-6 text-[11px] uppercase tracking-widest2 text-smoke">
            <div>
              <div className="text-2xl font-display italic text-paper">120+</div>
              Projects Delivered
            </div>
            <div>
              <div className="text-2xl font-display italic text-paper">9</div>
              Years in Motion
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
