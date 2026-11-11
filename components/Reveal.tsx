"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type Props = { as?: ElementType; className?: string; delay?: number; children: ReactNode };

// Fades and slides an element in the first time it scrolls into view.
export default function Reveal({ as: Tag = "div", className, delay = 0, children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.removeAttribute("data-reveal");
      return;
    }
    let timer: ReturnType<typeof setTimeout> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        el.classList.add("in");
        // hand the element back to its own hover transitions once revealed
        timer = setTimeout(() => el.removeAttribute("data-reveal"), 1300 + delay * 1000);
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={className} data-reveal="" style={{ "--d": `${delay}s` } as CSSProperties}>
      {children}
    </Tag>
  );
}
