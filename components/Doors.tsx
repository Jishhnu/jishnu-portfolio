"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { doors } from "@/data/portfolio";
import { DoorIcon } from "./icons";

// Five skill doors. They rise in on scroll, then open one by one until the visitor takes over.
export default function Doors() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [calm, setCalm] = useState(false);

  useEffect(() => {
    setCalm(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const auto = autoplay && seen && !calm;

  function spotlight(e: PointerEvent<HTMLButtonElement>) {
    const d = e.currentTarget;
    const r = d.getBoundingClientRect();
    d.style.setProperty("--mx", `${e.clientX - r.left}px`);
    d.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div ref={ref} className={`doors${seen ? " in" : ""}${auto ? " auto" : ""}`}>
      {doors.map((d, n) => (
        <button
          key={d.title}
          className="door"
          style={{ "--i": n } as CSSProperties}
          aria-expanded={active === n}
          onClick={() => {
            setAutoplay(false);
            setActive(n);
          }}
          onPointerMove={spotlight}
        >
          <span className="glow" />
          <span className="num">{String(n + 1).padStart(2, "0")}</span>
          <DoorIcon name={d.icon} />
          <span className="vt">{d.title}</span>
          <div className="pane">
            <h3>{d.title}</h3>
            <p className="blurb">{d.blurb}</p>
            <ul>
              {d.chips.map((c, k) => (
                <li key={c} style={{ "--k": k } as CSSProperties}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <span className="prog">
            <i onAnimationEnd={() => auto && setActive((n + 1) % doors.length)} />
          </span>
        </button>
      ))}
    </div>
  );
}
