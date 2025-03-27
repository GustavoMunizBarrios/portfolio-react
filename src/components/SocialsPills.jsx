import GithubIcon from "../assets/GithubIcon";
import LinkedinIcon from "../assets/LinkedinIcon";
import MailIcon from "../assets/MailIcon";
import SocialPill from "./SocialPill";

export default function SocialsPills() {
  return (
    <nav className="flex gap-4 mt-5 flex-wrap">
      {/* LINKEDIN */}
      <SocialPill link="https://www.linkedin.com/in/developer-gustavo">
        <LinkedinIcon />
        LinkedIn
      </SocialPill>

      {/* GITHUB */}
      <SocialPill link="https://github.com/GustavoMunizBarrios/">
        <GithubIcon />
        GitHub
      </SocialPill>

      {/* MAIL */}
      <SocialPill link="mailto:j.gustavomb1984@hotmail.com">
        <MailIcon />
        Email
      </SocialPill>
    </nav>
  );
}
