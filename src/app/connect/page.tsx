import type { Metadata } from "next";
import RevealText from "@/components/RevealText";
import ContactForm from "@/components/ContactForm";
import { socials } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Start a project with BYB Films. Reach out via email, phone or the inquiry form below.",
};

export default function ConnectPage() {
  return (
    <section className="px-6 pb-28 pt-40 md:px-12 md:pt-52">
      <RevealText
        as="h1"
        className="font-display text-[13vw] font-light leading-[0.92] text-paper md:text-[7vw]"
      >
        Let&rsquo;s make
      </RevealText>
      <RevealText
        as="h1"
        delay={0.08}
        className="font-display text-[13vw] font-light italic leading-[0.92] text-paper/80 md:text-[7vw]"
      >
        something great.
      </RevealText>

      <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="space-y-12 md:col-span-4">
          <div>
            <span className="mb-3 block text-[11px] uppercase tracking-widest2 text-smoke">
              Email
            </span>
            <a
              href="mailto:hello@bybfilms.com"
              className="font-display text-2xl italic text-paper transition-colors hover:text-smoke"
            >
              hello@bybfilms.com
            </a>
          </div>

          <div>
            <span className="mb-3 block text-[11px] uppercase tracking-widest2 text-smoke">
              Phone
            </span>
            <a
              href="tel:+10000000000"
              className="font-display text-2xl italic text-paper transition-colors hover:text-smoke"
            >
              +1 (000) 000-0000
            </a>
          </div>

          <div>
            <span className="mb-3 block text-[11px] uppercase tracking-widest2 text-smoke">
              Location
            </span>
            <p className="font-display text-2xl italic text-paper">
              Los Angeles &middot; Berlin
            </p>
          </div>

          <div>
            <span className="mb-3 block text-[11px] uppercase tracking-widest2 text-smoke">
              Social
            </span>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-smoke transition-colors hover:text-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
