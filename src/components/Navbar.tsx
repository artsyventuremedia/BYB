"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Connect", href: "/connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 160);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[120] transition-transform duration-500 ease-cinematic ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 transition-all duration-500 md:px-12 ${
            scrolled ? "h-16 bg-ink/80 backdrop-blur-md" : "h-24 bg-transparent"
          }`}
        >
          <Link
            href="/"
            data-cursor=""
            className="font-sans text-sm font-medium tracking-widest2 focus-ring"
          >
            BYB FILMS
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[11px] uppercase tracking-widest2 focus-ring ${
                  pathname === link.href ? "text-paper" : "text-smoke"
                } transition-colors hover:text-accent`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-[11px] uppercase tracking-widest2 md:hidden focus-ring"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={links} />
    </>
  );
}
