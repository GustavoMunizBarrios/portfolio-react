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

export default function TechStackSection({ languageToggle }) {
  const techStack = [
    { icon: <JavascriptIcon className="size-[6rem]" />, href: "#" },
    { icon: <CssIcon className="size-[6rem]" />, href: "#" },
    { icon: <HtmlIcon className="size-[6rem]" />, href: "#" },
    { icon: <TailwindIcon className="size-[6rem]" />, href: "#" },
    { icon: <ReactIcon className="size-[6rem]" />, href: "#" },
    { icon: <TypescriptIcon className="size-[6rem]" />, href: "#" },
    { icon: <ExpressIcon className="size-[6rem]" />, href: "#" },
    { icon: <PostgreSQL className="size-[6rem]" />, href: "#" },
  ];

  return (
    <section id="teckStack" className="pt-[8rem]">
      <h2 className="text-3xl font-semibold text-[#1a202c] mb-4 flex gap-x-3 items-center dark:text-veryLightGrayishBlue xl:mb-8">
        <TbDeviceDesktopCode />
        {languageToggle ? "Tech Stack" : "Herramientas y Tecnologías"}
      </h2>
      <div className="flex items-center justify-center">
        <div
          className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-5 xl:gap-[3rem]"
          id="frameworks-integration"
        >
          {techStack.map((tech, index) => (
            <a
              key={index}
              className="grid w-full min-w-[10rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
              href={tech.href}
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
