import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Presentation from "./components/Presentation";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutMeSection from "./components/AboutMeSection";

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
      <main className="w-full lg:w-[740px] mx-auto px-4 pt-[6rem] smm:px-3 mdm:px-10 ">
        <Presentation languageToggle={languageToggle} />

        <ProjectsSection languageToggle={languageToggle} theme={theme} />

        <ExperienceSection languageToggle={languageToggle} />

        <AboutMeSection languageToggle={languageToggle} />
      </main>
      <Footer />
    </>
  );
}

export default App;
