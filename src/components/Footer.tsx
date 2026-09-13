import Link from "next/link";
import { socials } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Connect", href: "/connect" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-16 md:px-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <h4 className="font-display text-3xl italic text-paper">BYB Films</h4>
          <p className="mt-2 text-[11px] uppercase tracking-widest2 text-smoke">
            Post Production
            <br />
            Media House
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-widest2 text-smoke transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-widest2 text-smoke transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-col justify-between gap-4 border-t border-line pt-6 text-[10px] uppercase tracking-widest2 text-smoke md:flex-row">
        <span>&copy; {new Date().getFullYear()} BYB Films</span>
        <span>Designed &amp; Built with Intention</span>
      </div>
    </footer>
  );
}
