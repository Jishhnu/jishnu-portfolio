import Reveal from "./Reveal";
import Doors from "./Doors";

export default function Skills() {
  return (
    <section id="skills">
      <Reveal as="h2">Skills, one door each</Reveal>
      <Reveal as="p" className="sub">
        Tap a door to see the technologies behind it. They open one by one until you take over.
      </Reveal>
      <Doors />
    </section>
  );
}
