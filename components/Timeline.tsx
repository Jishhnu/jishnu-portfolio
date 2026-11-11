"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { timeline } from "@/data/portfolio";

// The vertical line draws itself as you scroll, and each dot fills in when you reach it.
export default function Timeline() {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const tl = ref.current;
    if (!tl) return;
    const items = Array.from(tl.querySelectorAll("li"));
    const update = () => {
      const r = tl.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh * 0.65 - r.top) / r.height));
      tl.style.setProperty("--p", p.toFixed(3));
      items.forEach((li) => {
        if (li.getBoundingClientRect().top < vh * 0.7) li.classList.add("on");
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <ol className="tl" ref={ref}>
      {timeline.map((it, i) => (
        <Reveal as="li" key={it.title} delay={Math.min(i, 4) * 0.1}>
          <span className="when">{it.when}</span>
          <h3>{it.title}</h3>
          <p className="org">{it.org}</p>
          <p>{it.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
