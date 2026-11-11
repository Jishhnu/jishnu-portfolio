import type { IconName } from "@/data/portfolio";

// pathLength={1} lets the stroke-draw animation work on every shape.
const paths: Record<IconName, React.ReactNode> = {
  stack: (
    <>
      <path pathLength={1} d="M12 3 3 8l9 5 9-5-9-5z" />
      <path pathLength={1} d="M3 12.5l9 5 9-5" />
      <path pathLength={1} d="M3 17l9 5 9-5" />
    </>
  ),
  front: (
    <>
      <rect pathLength={1} x="3" y="4" width="18" height="16" rx="2" />
      <path pathLength={1} d="M3 9h18" />
      <path pathLength={1} d="M8 13.5 6 15.5l2 2" />
      <path pathLength={1} d="m16 13.5 2 2-2 2" />
    </>
  ),
  cube: (
    <>
      <path pathLength={1} d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
      <path pathLength={1} d="M3 7l9 5 9-5" />
      <path pathLength={1} d="M12 12v10" />
    </>
  ),
  db: (
    <>
      <ellipse pathLength={1} cx="12" cy="5.5" rx="8" ry="3" />
      <path pathLength={1} d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
      <path pathLength={1} d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  cloud: (
    <>
      <path pathLength={1} d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5 4.3 4.3 0 0 1 17.5 18H7z" />
      <path pathLength={1} d="M12 12v5" />
      <path pathLength={1} d="m9.5 14.5 2.5-2.5 2.5 2.5" />
    </>
  ),
};

export function DoorIcon({ name }: { name: IconName }) {
  return (
    <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function Arrow() {
  return (
    <span className="arr">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 12h16M14 6l6 6-6 6" />
      </svg>
    </span>
  );
}
