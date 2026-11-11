import { ticker } from "@/data/portfolio";

export default function Marquee() {
  const group = (
    <div className="group">
      {ticker.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
  // Two identical groups so the loop is seamless.
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {group}
        {group}
      </div>
    </div>
  );
}
