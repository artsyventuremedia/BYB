"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { socials } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (open) {
      document.body.style.overflow = "hidden";

      if (prefersReducedMotion) {
        gsap.set(panel, { clipPath: "inset(0 0 0% 0)" });
        gsap.set(panel.querySelectorAll(".menu-link"), { yPercent: 0, opacity: 1 });
        return;
      }

      gsap.fromTo(
        panel,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.65, ease: "power4.inOut" }
      );
      gsap.fromTo(
        panel.querySelectorAll(".menu-link"),
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.06, delay: 0.25, ease: "power4.out" }
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <div
      ref={panelRef}
      className={`fixed inset-0 z-[130] flex flex-col justify-between bg-ink px-6 py-8 md:hidden ${
        open ? "" : "pointer-events-none"
      }`}
      style={{ clipPath: "inset(0 0 100% 0)" }}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm tracking-widest2">BYB FILMS</span>
        <button
          onClick={onClose}
          className="text-[11px] uppercase tracking-widest2"
          aria-label="Close menu"
        >
          Close
        </button>
      </div>

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <div key={link.href} className="overflow-hidden">
            <Link
              href={link.href}
              className="menu-link block font-display text-[13vw] leading-[1.05] text-paper"
            >
              {link.label}
            </Link>
          </div>
        ))}
      </nav>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-widest2 text-smoke"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
