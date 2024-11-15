import JobIcon from "../assets/JobIcon";

// eslint-disable-next-line react/prop-types
export default function Timeline({ languageToggle }) {
  const experiences = [
    {
      title: languageToggle
        ? "Front-end Developer (Project)"
        : "Desarrollador Front-end (Proyecto)",
      company: languageToggle
        ? "Henry, May. 2023 -  Aug. 2023"
        : "Henry, May. 2023 - Ago. 2023",
      isLatest: true,
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
        ? "Bommus de Mexico, May. 2021 -  Aug. 2022"
        : "Bommus de México, May. 2021 - Ago. 2022",
      isLatest: false,
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
      company: "Bommus de Mexico, Mar. 2021 - Abr. 2021",
      isLatest: false,
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

  return (
    <ol className="relative border-s border-[#e5e7eb] ml-3 dark:border-[#374151]">
      {experiences.map((experience, index) => (
        <li key={index} className="mb-[3.5rem] ms-8">
          <span className="absolute flex items-center justify-center w-7 h-7 bg-[#dbeafe] rounded-full -start-3 ring-8 ring-[#fffff] dark:ring-[#18181b]">
            <JobIcon className="w-4 h-4" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold dark:text-[#fffff]">
            {experience.title}
            {experience.isLatest && (
              <span className="bg-[#dbeafe] text-[#1e40af] text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3 dark:bg-[#1e40af] dark:text-[#93c5fd]">
                {languageToggle ? "Latest" : "Último"}
              </span>
            )}
          </h3>
          <time className="block mb-4 text-sm font-normal leading-none text-[#9ca3af] dark:text-[#6b7280]">
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
  );
}
