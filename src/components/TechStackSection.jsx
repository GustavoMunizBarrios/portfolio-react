/* eslint-disable react/prop-types */

import { TbDeviceDesktopCode } from "react-icons/tb";

export default function TechStackSection({ languageToggle }) {
  return (
    <section id="teckStack" className="pt-[8rem]">
      <h2 className="text-3xl font-semibold text-[#1a202c] mb-4 flex gap-x-3 items-center dark:text-veryLightGrayishBlue xl:mb-12">
        <TbDeviceDesktopCode />
        {languageToggle ? "Tech Stack" : "Herramientas y Tecnologías"}
      </h2>
      <div className="flex  items-center justify-center">
        <div
          className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-5 xl:gap-[3rem]"
          id="frameworks-integration"
        >
          <a
            className="grid w-full min-w-[10rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
          <a
            className="grid w-full min-w-[10rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
          <a
            className="grid w-full min-w-[10rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
          <a
            className="grid w-full min-w-[10rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
          <a
            className="grid w-full min-w-[10rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
          <a
            className="grid w-full min-w-[10rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
        </div>
      </div>
    </section>
  );
}
