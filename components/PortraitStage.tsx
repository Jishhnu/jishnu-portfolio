"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { badges, profile } from "@/data/portfolio";

// Portrait that tilts toward the pointer, with a soft spotlight and floating tech badges.
export default function PortraitStage() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    const set = (k: string, v: string) => stage.style.setProperty(k, v);

    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      const nx = clamp((e.clientX - (r.left + r.width / 2)) / (window.innerWidth * 0.5));
      const ny = clamp((e.clientY - (r.top + r.height / 2)) / (window.innerHeight * 0.5));
      set("--mx", nx.toFixed(3));
      set("--my", ny.toFixed(3));
      set("--ry", `${(nx * 7).toFixed(2)}deg`);
      set("--rx", `${(-ny * 5).toFixed(2)}deg`);
      set("--px", `${clamp(((e.clientX - r.left) / r.width) * 2 - 1) * 50 + 50}%`);
      set("--py", `${clamp(((e.clientY - r.top) / r.height) * 2 - 1) * 50 + 50}%`);
      set("--sp", "1");
    };
    const onLeave = () => {
      set("--mx", "0");
      set("--my", "0");
      set("--rx", "0deg");
      set("--ry", "0deg");
      set("--sp", "0");
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="stage" ref={stageRef}>
      <div className="portrait">
        <Image
          src="/jishnu.jpg"
          alt={`Portrait of ${profile.firstName} in a black suit and white shirt`}
          width={1024}
          height={1536}
          sizes="(max-width: 820px) 100vw, 480px"
          priority
        />
      </div>
      {badges.map((b, k) => (
        <span key={b} className={`fl ${"abcd"[k]}`} aria-hidden="true">
          {b}
        </span>
      ))}
    </div>
  );
}
