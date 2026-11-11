"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const links = [
  ["#skills", "Skills"],
  ["#story", "My story"],
  ["#work", "Work"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [pulled, setPulled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date()
          .toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", timeZone: profile.timezone })
          .replace(/\s/g, "")
          .toLowerCase(),
      );
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const dark = getComputedStyle(root).getPropertyValue("--bg").trim().toLowerCase() === "#1a1818";
    const next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setPulled(true);
    setTimeout(() => setPulled(false), 180);
  }

  return (
    <>
      <button className={`cord${pulled ? " pulled" : ""}`} onClick={toggleTheme} aria-label="Switch between light and dark theme" />

      <div className={`sheet${open ? " open" : ""}`} role="dialog" aria-label="Menu">
        <button className="pill close" onClick={() => setOpen(false)}>
          Close
        </button>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>

      <div className="bar">
        <button className="pill menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
            <path d="M2 2h24M2 10h24M2 18h24" />
          </svg>
        </button>
        <div className="pill clock">
          Local time <b>{time || "\u00a0"}</b>
        </div>
      </div>
    </>
  );
}
