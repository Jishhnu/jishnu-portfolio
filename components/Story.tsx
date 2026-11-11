import Reveal from "./Reveal";
import Timeline from "./Timeline";

export default function Story() {
  return (
    <section id="story" className="rule">
      <div className="two">
        <div>
          <Reveal as="h2">Let’s go back in time.</Reveal>
          <Reveal as="p" className="sub">
            From the classroom in Thrissur to client projects.
          </Reveal>
          <Timeline />
        </div>
      </div>
    </section>
  );
}
