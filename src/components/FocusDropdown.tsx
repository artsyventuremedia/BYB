"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const items = [
  { label: "Post", href: "/services#post-production" },
  { label: "Production", href: "/services#post-production" },
  { label: "Media", href: "/services#media-house" },
  { label: "House", href: "/services#media-house" },
];

export default function FocusDropdown() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-paper focus-ring"
      >
        What We Focus On
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>

      <div
        className={`absolute right-0 top-full z-30 mt-4 w-44 overflow-hidden border border-line bg-ink/95 backdrop-blur-md transition-all duration-300 ease-cinematic ${
          open ? "max-h-64 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        {items.map((item, i) => (
          <Link
            key={`${item.label}-${i}`}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block border-t border-line px-5 py-4 font-display text-lg italic text-paper/80 transition-colors first:border-t-0 hover:text-accent"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
