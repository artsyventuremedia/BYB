"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function RevealText({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  once = true,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inner = el.querySelector(".reveal-inner");
    if (!inner) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(inner, { yPercent: 0 });
      return;
    }

    gsap.set(inner, { yPercent: 110 });

    const anim = gsap.to(inner, {
      yPercent: 0,
      duration: 1.1,
      delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [delay, once]);

  const Comp = Tag as any;

  return (
    <Comp ref={ref} className={className}>
      <span className="split-line">
        <span className="reveal-inner inline-block">{children}</span>
      </span>
    </Comp>
  );
}
