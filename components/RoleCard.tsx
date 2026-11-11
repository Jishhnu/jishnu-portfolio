"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

// Flip-board card that cycles through the roles.
export default function RoleCard({ roles }: { roles: string[] }) {
  const faceRef = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const face = faceRef.current;
    if (!face) return;
    let idx = 0;
    let swap: ReturnType<typeof setTimeout> | undefined;
    const id = setInterval(() => {
      face.classList.add("out");
      swap = setTimeout(() => {
        idx = (idx + 1) % roles.length;
        flushSync(() => setI(idx));
        face.classList.remove("out");
        face.classList.add("pre");
        void face.offsetWidth; // restart the transition from the "pre" state
        face.classList.remove("pre");
      }, 260);
    }, 2800);
    return () => {
      clearInterval(id);
      if (swap) clearTimeout(swap);
    };
  }, [roles]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="board">
      <div className="rings" aria-hidden="true">
        {Array.from({ length: 12 }, (_, k) => (
          <i key={k} />
        ))}
      </div>
      <div className="face" ref={faceRef}>
        {roles[i]}
      </div>
      <span className="count" aria-hidden="true">
        {pad(i + 1)} / {pad(roles.length)}
      </span>
    </div>
  );
}
