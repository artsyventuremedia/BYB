import Image from "next/image";
import { team } from "@/lib/utils";
import RevealText from "./RevealText";

export default function Team() {
  return (
    <section className="border-t border-line px-6 py-28 md:px-12 md:py-40">
      <RevealText
        as="span"
        className="mb-16 block text-[11px] uppercase tracking-widest2 text-smoke"
      >
        Team
      </RevealText>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {team.map((member) => (
          <div key={member.name} className="group relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink">
              <Image
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale transition-all duration-700 ease-cinematic group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 text-[11px] uppercase tracking-widest2 text-paper/70">
                {member.index}
              </span>
            </div>

            <div className="mt-5 overflow-hidden">
              <div className="translate-y-2 transition-transform duration-500 ease-cinematic group-hover:translate-y-0">
                <h4 className="font-display text-2xl italic text-paper">
                  {member.name}
                </h4>
                <p className="mt-1 text-[11px] uppercase tracking-widest2 text-smoke opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
