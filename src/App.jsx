import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Projecs from "./components/Projects";
import ProjectsIcon from "./assets/ProjectsIcon";
import profileCompress from "./Images/profileCompress.png";
import JobIcon from "./assets/JobIcon";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Presentation from "./components/Presentation";

function App() {
  const [languageToggle, setLanguageToggle] = useState(true);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleLanguageEN = () => {
    setLanguageToggle(true);
  };
  const handleLanguageES = () => {
    setLanguageToggle(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Header
        languageToggle={languageToggle}
        handleLanguageEN={handleLanguageEN}
        handleLanguageES={handleLanguageES}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      {/*   <!-- ---------------- -->
      <!-- Presentation -->
      <!-- ---------------- --> */}
      <main className="w-full lg:w-[740px] mx-auto px-4 pt-[6rem] smm:px-3 mdm:px-10 ">
        <Presentation languageToggle={languageToggle} />
        {/* 
        <!-- ---------------- -->
        <!-- Projects Section -->
        <!-- ---------------- --> */}
        <section
          id="projects"
          className="w-full lg:w-[740px] mx-auto pt-[8rem]"
        >
          <h2 className="text-3xl font-semibold text-[#1a202c] mb-7 flex gap-x-3 items-center">
            <ProjectsIcon className="w-full lg:w-[740px] mx-auto py-12" />
            {languageToggle ? "Projects" : "Proyectos"}
          </h2>
          <Projecs languageToggle={languageToggle} />
        </section>
        {/* 
        <!-- ----------------------------- -->
        <!-- Experience Section - Timeline  -->
        <!-- ----------------------------- -->
        */}
        <section
          id="experience"
          className="w-full lg:w-[740px] mx-auto pt-[8rem]"
        >
          <h2 className="text-3xl font-semibold text-[#111827] mb-[3rem] flex gap-x-3 items-center">
            <JobIcon className="size-8" />
            {languageToggle ? "Work Experience" : "Experiencia Laboral"}
          </h2>

          <Timeline languageToggle={languageToggle} />
        </section>
        {/*     
        <!-- ----------------------------- -->
        <!-- ------ About Me section ----- -->
        <!-- ----------------------------- --> 
        */}
        <section id="about" className="w-full lg:w-[740px] mx-auto py-[8rem]">
          <h2 className="text-3xl font-semibold text-[#111827] mb-7 flex gap-x-3 items-center">
            <JobIcon className="size-8" />
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
      </main>
      <Footer />
    </>
  );
}

export default App;
