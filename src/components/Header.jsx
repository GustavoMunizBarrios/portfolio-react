/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { IoMenu, IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

export default function Header({
  languageToggle,
  handleLanguageEN,
  handleLanguageES,
  toggleTheme,
  theme,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenStyle = isOpen
    ? "flex items-center flex-wrap justify-center space-x-8"
    : "flex items-center space-x-8";

  const isOpenStyleNav = isOpen
    ? "flex flex-row gap-x-9 z-50 md:hidden w-full justify-center my-3 text-[0.9rem]"
    : "flex flex-row gap-x-10 z-50 mdm:hidden";

  return (
    <header
      className="sticky top-0 z-20 flex justify-center items-center py-5 w-[100%]  mx-auto
            text-lg bg-opacity-50 backdrop-blur-[10px] border-b border-black dark:border-githubThemeSecondary"
    >
      <div className={isOpenStyle}>
        <a
          className="relative  z-50"
          href="https://www.linkedin.com/in/developer-gustavo-mu%C3%B1iz-barrios-86708b121/"
        >
          <img
            className="rounded-full size-14 z-50 transform transition-all duration-200 hover:scale-110 mdm:size-12"
            src="https://th.bing.com/th/id/OIP.Zd0M82wkkQcSla_pP1dGpgAAAA?rs=1&pid=ImgDetMain"
            alt="profile of Gustavo"
          />
        </a>

        <h1 className="md:hidden text-xl font-bold">Gustavo Muñiz</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          {isOpen ? <IoIosArrowUp /> : <IoMenu />}
        </button>

        <nav className={isOpenStyleNav}>
          <a href="/" className="hover:underline hover:text-[#df5e4d]">
            {languageToggle ? "Home" : "Inicio"}
          </a>
          <a href="#projects" className="hover:underline hover:text-[#df5e4d]">
            {languageToggle ? "Projects" : "Proyectos"}
          </a>
          <a
            href="#experience"
            className="hover:underline hover:text-[#df5e4d]"
          >
            {languageToggle ? "Experience" : "Experiencia"}
          </a>
          <a href="#about" className="hover:underline hover:text-[#df5e4d]">
            {languageToggle ? "About me" : "Acerca de mí"}
          </a>
        </nav>

        <LanguageToggle
          languageToggle={languageToggle}
          handleLanguageEN={handleLanguageEN}
          handleLanguageES={handleLanguageES}
          isOpen={isOpen}
        />

        <button onClick={toggleTheme} className="text-2xl ">
          {theme === "light" ? <IoMoon /> : <IoSunny />}
        </button>
      </div>
    </header>
  );
}
