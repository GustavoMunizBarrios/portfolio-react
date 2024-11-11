/* eslint-disable react/prop-types */
import JobIcon from "../assets/JobIcon";
import profileCompress from "../Images/profileCompress.png";

export default function AboutMeSection({ languageToggle, theme }) {
  return (
    <section id="about" className="w-full lg:w-[740px] mx-auto py-[8rem]">
      <h2 className="text-3xl font-semibold text-[#111827] mb-7 flex gap-x-3 items-center dark:text-veryLightGrayishBlue">
        <JobIcon className="size-8" theme={theme} />
        {languageToggle ? "About Me" : "Acerca de mí"}
      </h2>
      <div className="flex items-center smm:flex-col">
        <img
          className="mr-5 rounded-full size-[10rem] -z-30 transform transition-all duration-200 hover:scale-110"
          src={profileCompress}
          alt="profile of Gustavo"
        />
        <p className="text-gray-700 text-lg mt-5 pl-4">
          {languageToggle ? "Hi! I'm " : "Hola! Soy "}
          <span className="font-bold text-[#ef8354]">Gustavo Muñiz </span>
          {languageToggle
            ? "I am a web developer and I have 3 years of experience in engineering project development, I've had the opportunity to work in different areas and develop skills in project management, programming and agile methodologies."
            : ", soy desarrollador web y tengo 3 años de experiencia en desarrollo de proyectos de ingeniería, he tenido la oportunidad de trabajar en diferentes áreas y desarrollar habilidades en gestión de proyectos, programación y metodologías ágiles."}
          <br />
          <br />
          {languageToggle
            ? "I am focused on "
            : "Estoy enfocado en desarrollo "}{" "}
          <span className="font-bold text-[#1e40af]">Front-end </span>
          {languageToggle
            ? "development. I have experience doing multiple projects and have worked in a real development environment with a team of developers."
            : ". He ganado experiencia realizando múltiples proyectos y he trabajado en un entorno de desarrollo real con un equipo de desarrolladores."}
        </p>
      </div>
    </section>
  );
}
