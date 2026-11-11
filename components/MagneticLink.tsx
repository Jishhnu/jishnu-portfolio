"use client";

import { useEffect, useRef, type AnchorHTMLAttributes } from "react";

// A link that leans slightly toward the pointer (desktop only).
export default function MagneticLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const b = ref.current;
    if (!b) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover:hover)").matches) return;
    const move = (e: MouseEvent) => {
      const r = b.getBoundingClientRect();
      b.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.12}px ${(e.clientY - r.top - r.height / 2) * 0.2}px`;
    };
    const leave = () => {
      b.style.translate = "";
    };
    b.addEventListener("mousemove", move);
    b.addEventListener("mouseleave", leave);
    return () => {
      b.removeEventListener("mousemove", move);
      b.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <a ref={ref} {...props}>
      {children}
    </a>
  );
}
