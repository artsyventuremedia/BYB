"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const isFirst = useRef(true);
  const [displayPath, setDisplayPath] = useState(pathname);
  const [content, setContent] = useState(children);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      setContent(children);
      setDisplayPath(pathname);
      return;
    }

    if (pathname === displayPath) {
      setContent(children);
      return;
    }

    const overlay = overlayRef.current;
    if (!overlay) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setContent(children);
      setDisplayPath(pathname);
      return;
    }

    const tl = gsap.timeline();
    tl.set(overlay, { display: "block" });
    tl.fromTo(
      overlay,
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: 0.55, ease: "power4.inOut" }
    );
    tl.call(() => {
      setContent(children);
      setDisplayPath(pathname);
    });
    tl.to(overlay, { clipPath: "inset(0 0 100% 0)", duration: 0.55, ease: "power4.inOut", delay: 0.05 });
    tl.set(overlay, { display: "none", clipPath: "inset(100% 0 0 0)" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[150] hidden bg-ink"
        aria-hidden="true"
      />
      {content}
    </>
  );
}
