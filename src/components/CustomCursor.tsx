"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    let raf = 0;
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    const onEnter = (e: Event) => {
      const el = e.target as HTMLElement;
      const cursorEl = el.closest?.("[data-cursor]") as HTMLElement | null;
      if (cursorEl) {
        setLabel(cursorEl.getAttribute("data-cursor") || "");
        setActive(true);
      }
    };

    const onLeave = (e: Event) => {
      const el = e.target as HTMLElement;
      const cursorEl = el.closest?.("[data-cursor]") as HTMLElement | null;
      if (cursorEl) {
        setActive(false);
        setLabel("");
      }
    };

    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div ref={cursorRef} className={`cursor ${active ? "is-active" : ""}`}>
      <div className="cursor-dot" />
      <div className="cursor-label">{label}</div>
    </div>
  );
}
