/* eslint-disable react/prop-types */
import ProjectsIcon from "../assets/ProjectsIcon";
//import Projecs from "./Projects";
import ProjectsCopy from "./ProjectsCopy";

export default function ProjectsSection({ languageToggle, theme }) {
  return (
    <section id="projects" className="w-full lg:w-[740px] mx-auto pt-[8rem]">
      <h2 className="text-3xl font-semibold text-[#1a202c] mb-7 flex gap-x-3 items-center dark:text-veryLightGrayishBlue">
        <ProjectsIcon
          theme={theme}
          className="w-full lg:w-[740px] mx-auto py-12 "
        />
        {languageToggle ? "Projects" : "Proyectos"}
      </h2>
      <ProjectsCopy languageToggle={languageToggle} />
    </section>
  );
}
