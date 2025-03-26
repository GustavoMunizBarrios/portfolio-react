import { useState } from "react";
//import JobIcon from "../assets/JobIcon";
import bommus_logo from "../Images/bommus_logo.jpeg";
import henry_logo from "../Images/henry_logo.jpeg";
import noCountry_logo from "../Images/noCountry_logo.jpeg";
import userCoding_logo from "../Images/user-coding_logo.png";

// eslint-disable-next-line react/prop-types
export default function Timeline({ languageToggle }) {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: languageToggle
        ? "Front-end Developer"
        : "Desarrollador Front-end ",
      company: languageToggle
        ? "No Country  ---  Feb. 2025 -  Present"
        : "No Country  ---  Feb. 2025 - Actualidad",
      isLatest: true,
      companyLogo: noCountry_logo,
      companyLink: "https://www.nocountry.tech/",
      responsibilities: [
        languageToggle
          ? "Working alongside a team of developers to create web applications, from the initial planning to the design and logic involved."
          : "Trabajo junto a un equipo de desarrolladores para la creación de aplicaciones web, desde la planificación inicial hasta el diseño y la lógica involucrada.",
        languageToggle
          ? "I collaborate in the planning and execution of projects following agile methodologies, ensuring compliance with deadlines and objectives."
          : "Colaboro en la planificación y ejecución de proyectos siguiendo metodologías ágiles, asegurando el cumplimiento de plazos y objetivos.",
        languageToggle
          ? "Implement efficient solutions to ensure the scalability and performance of applications."
          : "Implemento soluciones eficientes para garantizar la escalabilidad y el rendimiento de las aplicaciones.",
      ],
    },
    {
      title: languageToggle
        ? "Freelance Web Developer"
        : "Desarrollador Web Freelance",
      company: languageToggle
        ? "Freelance  ---  Sep. 2023 -  Dec. 2024"
        : "Freelance  ---  Sep. 2023 - Dic. 2024",
      isLatest: false,
      companyLogo: userCoding_logo,
      companyLink: "https://portfolio-react-flax-three.vercel.app/",
      responsibilities: [
        languageToggle
          ? "I have worked on customized projects that integrate innovative technical solutions and functional design."
          : "He trabajado en proyectos personalizados que integran soluciones técnicas innovadoras y diseño funcional.",
        languageToggle
          ? "Designed and developed web applications using modern technologies such as React, TypeScript, Supabase and Tailwind CSS."
          : "Diseñé y desarrollare aplicaciones web utilizando tecnologías modernas como React, TypeScript, Supabase y Tailwind CSS.",
        languageToggle
          ? "I worked closely with clients to understand their needs and deliver scalable and optimized solutions."
          : "Colaboré estrechamente con clientes para comprender sus necesidades y ofrecer soluciones escalables y optimizadas.",
      ],
    },
    {
      title: languageToggle ? "Web Developer" : "Desarrollador Web ",
      company: languageToggle
        ? "Henry --- May. 2023 -  Aug. 2023"
        : "Henry (contrato de formación) --- May. 2023 - Ago. 2023",
      isLatest: false,
      companyLogo: henry_logo,
      companyLink: "https://www.soyhenry.com/",
      responsibilities: [
        languageToggle
          ? "I was responsible for the initial planning of the web application, as well as its design and the involved logic."
          : "Me encargué de la planeación inicial de la aplicación web, así como de su diseño y la lógica involucrada.",
        languageToggle
          ? "The Agile methodology was applied for the project development, which allowed for more dynamic and efficient teamwork."
          : "Se aplicó la metodología Agile para el desarrollo del proyecto, lo que permitió un trabajo en equipo más dinámico y eficiente.",
        languageToggle
          ? "The React library was used, applying Tailwind CSS for the styles."
          : "Se utilizó la librería React aplicando Tailwind CSS para los estilos.",
      ],
    },
    {
      title: languageToggle ? "Project Manager" : "Jefe de Proyectos",
      company: languageToggle
        ? "Bommus de Mexico, May. 2021 ---  Aug. 2022"
        : "Bommus de México, May. 2021 --- Ago. 2022",
      isLatest: false,
      companyLogo: bommus_logo,
      companyLink: "https://bommus.net/",
      responsibilities: [
        languageToggle
          ? "Together with my team, we developed a new product from a prototype, covering areas such as hardware and software design, commercial viability and quality testing."
          : "Junto con mi equipo, desarrollamos un nuevo producto a partir de un prototipo, abarcando áreas como el diseño de hardware y software, la viabilidad comercial y las pruebas de calidad",
        languageToggle
          ? "I was in charge of leading the dissemination of the new product by applying Marketing strategies, revamping the website and creating a new sub-brand."
          : "Me encargué de dirigir la difusión del nuevo producto aplicando estrategias de marketing, renovando el sitio web y creando una nueva submarca.",
        languageToggle
          ? "The departament I led became the main profit contributor for the company."
          : "El departamento que dirigí se convirtió en el principal contribuyente de ganancias de la empresa.",
      ],
    },
    {
      title: languageToggle ? "Project Engineer" : "Ingeniero de Proyectos",
      company: "Bommus de Mexico, Mar. 2021 --- Abr. 2021",
      isLatest: false,
      companyLogo: bommus_logo,
      companyLink: "https://bommus.net/",
      responsibilities: [
        languageToggle
          ? "Preparing , scheduling, coordinating and supervising the project, performing overall quality control of the work, assigning responsibilities and mentoring the project team."
          : "Preparar, programar, coordinar y supervisar el proyecto, realizar el control de calidad general del trabajo, asignar responsabilidades y orientar al equipo del proyecto.",
        languageToggle
          ? "Succesfully completed the project together with my team, and presented the results achieved, which earned the company another contract with the client."
          : "Completé con éxito el proyecto junto con mi equipo, y presenté los resultados obtenidos, lo que le hizo ganar a la empresa otro contrato con el cliente.",
      ],
    },
  ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <>
      <ol className="relative border-s border-[#e5e7eb] ml-3 dark:border-[#374151]">
        {displayedExperiences.map((experience, index) => (
          <li key={index} className="mb-[3.5rem] ms-8">
            <span className="absolute flex items-center justify-center -start-4  ">
              <a
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <img
                  src={experience.companyLogo}
                  alt="Company logo"
                  className="w-8 h-8 object-contain"
                />
              </a>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold dark:text-[#fffff]">
              {experience.title}
              {experience.isLatest && (
                <span className="bg-[#dbeafe] text-[#1e40af] text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3 dark:bg-[#1e40af] dark:text-[#93c5fd]">
                  {languageToggle ? "Latest" : "Último"}
                </span>
              )}
            </h3>
            <time className="block mb-4 text-sm font-medium leading-none text-[#9ca3af] dark:text-[#6b7280]">
              {experience.company}
            </time>
            <p className="mb-4 text-base font-normal text-[#6b7280] text-pretty dark:text-[#a1a1aa]">
              <ul className="text-[#6b7280] list-disc ml-3 dark:text-[#a1a1aa]">
                {experience.responsibilities.map((task, taskIndex) => (
                  <li key={taskIndex} className="mb-3">
                    {task}
                  </li>
                ))}
              </ul>
            </p>
          </li>
        ))}
      </ol>

      {experiences.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-[#1E88E5] dark:text-[#42A5F5] hover:underline text-md"
        >
          {showAll
            ? languageToggle
              ? "Show less"
              : "Ver menos"
            : languageToggle
            ? "Show more..."
            : "Ver más..."}
        </button>
      )}
    </>
  );
}
