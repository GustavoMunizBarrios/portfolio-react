/* eslint-disable react/prop-types */
//import CountriesImage from "../Images/countries_of_the_world.png";

import { useState } from "react";
import SocialPill from "./SocialPill";
import GitHub from "../assets/Github";

export default function Card({
  image,
  description,
  title,
  link,
  github,
  tags,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative w-[22rem] h-[20rem] rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-800 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-105 hover:shadow-lg bg-[#f3f4f6] dark:bg-[#2a2c34]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`fill-current w-[16rem]  rounded transition-transform duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
          isHovered ? "scale-0" : "scale-100"
        }`}
        src={image}
        alt={`Screenshot of the project ${title}`}
      />

      {/* Contenido de texto: inicialmente escondido y visible en hover */}
      <div
        className="absolute top-0 left-0 w-full h-full p-5 box-border transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] bg-[#f3f4f6] text-veryDarkBlue dark:bg-[#2a2c34]"
        style={{
          transform: isHovered ? "rotateX(0deg)" : "rotateX(90deg)",
          transformOrigin: "bottom",
          backfaceVisibility: "hidden",
        }}
      >
        <p className="m-0 pl-1 text-2xl font-bold">
          <a href={link} className="hover:underline">
            {title}
          </a>
        </p>
        <p className="mt-2 text-sm leading-relaxed">{description}</p>

        <div className=" m-4">
          <SocialPill link={github}>
            <GitHub className="size-4 md:size-6 " />
            GitHub
          </SocialPill>
        </div>
        <ul className="flex gap-x-4 flex-row flex-wrap">
          {tags.map((tag) => (
            <li className="pb-4" key={tag.name}>
              <span
                className={`flex gap-x-2 border border-[#777a9247] rounded-full text-[0.7rem] ${tag.class} py-2 px-3`}
              >
                <tag.icon className="size-[1.2rem] " />
                {tag.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
