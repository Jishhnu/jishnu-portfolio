import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";

export default function Work() {
  return (
    <section id="work" className="rule">
      <Reveal as="h2">Selected work</Reveal>
      <Reveal as="p" className="sub">
        Client work is under NDA, so I describe it by what I built.
      </Reveal>
      <div className="grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} className="card" delay={Math.min(i, 4) * 0.1}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <span className="tags">{p.tags}</span>
            {p.href && (
              <p style={{ marginTop: 10 }}>
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  Visit {p.href.replace("https://", "")}
                </a>
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
