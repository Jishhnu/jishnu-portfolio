import Reveal from "./Reveal";
import MagneticLink from "./MagneticLink";
import { Arrow } from "./icons";
import { profile } from "@/data/portfolio";

export default function Contact() {
  // Opens Gmail's compose window with only the recipient filled in.
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;
  return (
    <section id="contact" className="rule">
      <div className="two">
        <div>
          <Reveal as="h2">Need something built? Let’s make it happen.</Reveal>
          <Reveal as="p" className="sub">
            Send me an email or give me a call.
          </Reveal>
          <Reveal className="row">
            <MagneticLink className="btn dark" href={gmail} target="_blank" rel="noopener noreferrer">
              Write the email <Arrow />
            </MagneticLink>
            <a className="btn plain" href={`tel:${profile.phone}`}>
              Call {profile.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
