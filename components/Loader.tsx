"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

// Counter screen that lifts like a curtain, then starts the hero animations (body.ready).
export default function Loader() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const finish = () => {
      document.body.classList.remove("loading");
      document.body.classList.add("ready");
      setDone(true);
      setTimeout(() => setGone(true), 1000);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    document.body.classList.add("loading");
    let v = 0;
    let t: ReturnType<typeof setTimeout> | undefined;
    const iv = setInterval(() => {
      v = Math.min(100, v + 3 + Math.floor(Math.random() * 9));
      setN(v);
      if (v >= 100) {
        clearInterval(iv);
        t = setTimeout(finish, 250);
      }
    }, 70);
    return () => {
      clearInterval(iv);
      if (t) clearTimeout(t);
    };
  }, []);

  if (gone) return null;
  return (
    <div className={`loader${done ? " done" : ""}`} aria-hidden="true">
      <div className="lbl">{profile.name} · Loading portfolio</div>
      <div className="num">{n}%</div>
      <div className="bar2">
        <i style={{ width: `${n}%` }} />
      </div>
    </div>
  );
}
