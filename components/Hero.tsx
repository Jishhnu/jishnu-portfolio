import { profile, roles } from "@/data/portfolio";
import RoleCard from "./RoleCard";
import PortraitStage from "./PortraitStage";
import MagneticLink from "./MagneticLink";
import { Arrow } from "./icons";

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>
          <span className="ln">
            <em>Hi, I’m {profile.firstName}.</em>
          </span>
          <span className="ln mute">
            <em>I am a</em>
          </span>
        </h1>
        <RoleCard roles={roles} />
        <div className="ctas">
          <MagneticLink className="btn dark" href="#contact">
            Hire me <Arrow />
          </MagneticLink>
          <a className="btn plain" href="#skills">
            See my skills
          </a>
        </div>
      </div>
      <PortraitStage />
    </div>
  );
}
