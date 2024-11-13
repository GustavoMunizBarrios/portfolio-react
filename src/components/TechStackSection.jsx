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

export default function TechStackSection({ languageToggle }) {
  const techStack = [
    {
      icon: <JavascriptIcon className="size-[5rem]" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      title: "JavaScript",
    },
    { icon: <CssIcon className="size-[5rem]" />, href: "#", title: "CSS" },
    { icon: <HtmlIcon className="size-[5rem]" />, href: "#", title: "HTML" },
    {
      icon: <TailwindIcon className="size-[5rem]" />,
      href: "#",
      title: "Tailwind CSS",
    },
    { icon: <ReactIcon className="size-[5rem]" />, href: "#", title: "React" },
    {
      icon: <TypescriptIcon className="size-[5rem]" />,
      href: "#",
      title: "TypeScript",
    },
    {
      icon: <ExpressIcon className="size-[5rem]" />,
      href: "#",
      title: "Express",
    },
    {
      icon: <PostgreSQL className="size-[5rem]" />,
      href: "#",
      title: "PostgreSQL",
    },
    {
      icon: <SupabaseIcon className="size-[5rem]" />,
      href: "#",
      title: "Supabase",
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
              className=" bg-[#2a2c34] grid w-full min-w-[10rem] transform cursor-pointer place-items-center rounded-xl px-3 py-2 transition-all hover:scale-105 hover:bg-[#2a2c34] hover:bg-opacity-25"
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
