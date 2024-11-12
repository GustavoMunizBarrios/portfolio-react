import CountriesImage from "../Images/countries_of_the_world.png";

import { useState } from "react";

export default function Card() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative w-[250px] h-[250px] rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-800 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-105 hover:shadow-lg bg-veryLightGrayishBlue"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`fill-current w-[16rem]  rounded transition-transform duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
          isHovered ? "scale-0" : "scale-100"
        }`}
        src={CountriesImage}
        alt={`Screenshot of the project`}
      />

      {/* Contenido de texto: inicialmente escondido y visible en hover */}
      <div
        className="absolute top-0 left-0 w-full h-full p-5 box-border transition-transform duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] bg-veryLightGrayishBlue text-veryDarkBlue"
        style={{
          transform: isHovered ? "rotateX(0deg)" : "rotateX(90deg)",
          transformOrigin: "bottom",
          backfaceVisibility: "hidden",
        }}
      >
        <p className="m-0 pl-1 text-2xl font-bold">Lorem Ipsum</p>
        <p className="mt-2 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          justo vel lorem tincidunt ultrices at non nunc. Donec in sapien
          viverra, tincidunt augue id, efficitur massa.
        </p>
      </div>
    </section>
  );
}
