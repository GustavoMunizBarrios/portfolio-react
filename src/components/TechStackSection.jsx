/* eslint-disable react/prop-types */

import { TbDeviceDesktopCode } from "react-icons/tb";
import JavascriptIcon from "../assets/JavascriptIcon";
import CssIcon from "../assets/CssIcon";
import HtmlIcon from "../assets/HtmlIcon";
import TailwindIcon from "../assets/TailwindIcon";
import ReactIcon from "../assets/ReactIcon";
import TypescriptIcon from "../assets/TypescriptIcon";
import ExpressIcon from "../assets/ExpressIcon";
import PostgreSQL from "../assets/PostgreSQL";
import SupabaseIcon from "../assets/SupabaseIcon";
import NodejsIcon from "../assets/NodejsIcon";
import StyledComponentsIcon from "../assets/StyledComponentsIcon";

export default function TechStackSection({ languageToggle }) {
  const techStack = [
    {
      icon: <JavascriptIcon className="size-[5rem]" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      title: "JavaScript",
    },
    {
      icon: <TypescriptIcon className="size-[5rem]" />,
      href: "https://www.typescriptlang.org/",
      title: "TypeScript",
    },
    {
      icon: <StyledComponentsIcon className="w-[6rem] h-[5rem]" />,
      href: "https://styled-components.com/",
      title: "Styled Components",
    },
    {
      icon: <CssIcon className="size-[5rem]" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      title: "CSS",
    },
    {
      icon: <HtmlIcon className="size-[5rem]" />,
      href: "https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics",
      title: "HTML",
    },
    {
      icon: <TailwindIcon className="size-[5rem]" />,
      href: "https://tailwindcss.com/",
      title: "Tailwind CSS",
    },
    {
      icon: <ReactIcon className="size-[5rem]" />,
      href: "https://react.dev/",
      title: "React",
    },

    {
      icon: <ExpressIcon className="size-[5rem]" />,
      href: "https://expressjs.com/",
      title: "Express",
    },
    {
      icon: <PostgreSQL className="size-[5rem]" />,
      href: "https://www.postgresql.org/",
      title: "PostgreSQL",
    },
    {
      icon: <SupabaseIcon className="size-[5rem]" />,
      href: "https://supabase.com/",
      title: "Supabase",
    },
    {
      icon: <NodejsIcon className="size-[5rem]" />,
      href: "",
      title: "Node JS",
    },
  ];

  return (
    <section id="teckStack" className="pt-[8rem]">
      <h2 className="text-3xl font-semibold text-[#1a202c] mb-4 flex gap-x-3 items-center dark:text-veryLightGrayishBlue xl:mb-12">
        <TbDeviceDesktopCode />
        {languageToggle ? "Tech Stack" : "Herramientas y Tecnologías"}
      </h2>
      <div className="flex items-center justify-center">
        <div
          className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-5 xl:gap-[3rem] "
          id="frameworks-integration"
        >
          {techStack.map((tech, index) => (
            <a
              key={index}
              className=" dark:bg-[#2a2c34] bg-[#f3f4f6] grid w-full min-w-[8rem] sm:min-w-[10rem] transform cursor-pointer place-items-center rounded-xl px-3 py-2 transition-all hover:scale-110 hover:bg-[#2a2c34] dark:hover:bg-[#737881] hover:bg-opacity-25"
              href={tech.href}
              title={tech.title}
            >
              <span className="my-6 grid h-24 w-24 place-items-center">
                {tech.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
