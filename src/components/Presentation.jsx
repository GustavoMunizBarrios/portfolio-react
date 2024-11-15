/* eslint-disable react/prop-types */
import GithubIcon from "../assets/GithubIcon";
import LinkedinIcon from "../assets/LinkedinIcon";
import MailIcon from "../assets/MailIcon";
import Badge from "./Badge";
import SocialPill from "./SocialPill";

export default function Presentation({ languageToggle }) {
  return (
    <div className="xl:w-[1080px]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
        {languageToggle ? "Hey, I'm Gustavo" : "Hola, soy Gustavo"}
        <a
          href="https://www.linkedin.com/in/developer-gustavo-mu%C3%B1iz-barrios-86708b121/"
          target="_blank"
          rel="noopener"
          className="flex justify-center items-center"
        >
          <Badge>
            {languageToggle ? "Available for hire" : "Disponible para trabajar"}
          </Badge>
        </a>
      </h1>
      <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px] xl:max-w-[1000px]">
        {languageToggle ? "I'm a " : "Soy un "}
        <span className="font-bold text-[#EF8354]">
          {languageToggle ? "Web Developer " : "Desarrollador Web "}
        </span>{" "}
        {languageToggle
          ? "with an engineering background and a passion for creating digital solutions. After three years leading projects, I specialized in web development, excelling in React and team-based applications. I aim to craft digital experiences that make a difference."
          : "con experiencia en ingeniería y pasión por crear soluciones digitales. Tras tres años liderando proyectos, me especialicé en programación web, realizando proyectos en equipo. Busco crear experiencias digitales que marquen la diferencia."}
      </h2>

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
    </div>
  );
}
