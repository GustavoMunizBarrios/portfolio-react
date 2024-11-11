import JobIcon from "../assets/JobIcon";

// eslint-disable-next-line react/prop-types
export default function Timeline({ languageToggle }) {
  return (
    <ol className="relative border-s border-[#e5e7eb] ml-3 dark:border-[#374151]">
      {/*  PROJECT MANAGER section */}
      <li className="mb-[3.5rem] ms-8">
        <span className="absolute flex items-center justify-center w-7 h-7 bg-[#dbeafe] rounded-full -start-3 ring-8 ring-[[#fffff]] dark:ring-[[#18181b]]  ">
          {/* dark:ring-[[#18181b]] dark:bg-[#1E3A8A] */}
          <JobIcon className="w-4 h-4 " />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold dark:text-[#fffff]">
          {/*  dark:text-[#fffff] */}
          {languageToggle ? "Project Manager" : "Jefe de Proyectos"}{" "}
          <span className="bg-[#dbeafe] text-[#1e40af] text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3 dark:bg-[#1e40af] dark:text-[#93c5fd]">
            {/* dark:bg-blue-900 dark:text-blue-300 */}
            {languageToggle ? "Latest" : "Último"}
          </span>
        </h3>
        <time className="block mb-4 text-sm font-normal leading-none text-[#9ca3af] dark:text-[#6b7280] ">
          {/*  text-[#a1a1aa] dark:text-gray-500  */}
          {languageToggle
            ? "Bommus de Mexico, May. 2021 -  Aug. 2022"
            : "Bommus de México, May. 2021 - Ago. 2022"}{" "}
        </time>
        <p className="mb-4 text-base font-normal text-[#6b7280] text-pretty dark:text-[#a1a1aa]">
          {/* dark:text-[#a1a1aa]  */}
          <ul className="text-[#6b7280] list-disc ml-3 dark:text-[#a1a1aa]">
            <li className="mb-3">
              {languageToggle
                ? "Together with my team, we developed a new product from a prototype, covering areas such as hardware and software design, commercial viability and quality testing."
                : "Junto con mi equipo, desarrollamos un nuevo producto a partir de un prototipo, abarcando áreas como el diseño de hardware y software, la viabilidad comercial y las pruebas de calidad"}
            </li>
            <li className="mb-3">
              {languageToggle
                ? "I was in charge of leading the dissemination of the new product by applying Marketing strategies, revamping the website and creating a new sub-brand."
                : "Me encargué de dirigir la difusión del nuevo producto aplicando estrategias de marketing, renovando el sitio web y creando una nueva submarca."}
            </li>
            <li className="mb-3">
              {" "}
              {languageToggle
                ? "The departament I led became the main profit contributor for the company."
                : "El departamento que dirigí se convirtió en el principal contribuyente de ganancias de la empresa."}
            </li>
          </ul>
        </p>
      </li>
      {/* <!-- PROJECT ENGINEER section --> */}
      <li className="mb-[3.5rem] ms-8">
        <span className="absolute flex items-center justify-center w-7 h-7 bg-[#dbeafe] rounded-full -start-3 ring-8 ring-[#fffff] dark:ring-[#18181b] ">
          {/* dark:ring-[#18181b] dark:bg-blue-900  */}
          <JobIcon className="w-4 h-4 " />
        </span>
        <h3 className="mb-1 text-lg font-semibold dark:text-[#fffff]">
          {/* dark:text-[#fffff]  */}
          {languageToggle ? "Project Engineer" : "Ingeniero de Proyectos"}
        </h3>
        <time className="block mb-4 text-sm font-normal leading-none text-[#a1a1aa] dark:text-[#6B7280]">
          {/*  dark:text-gray-500 */}
          Bommus de Mexico, Mar. 2021 - Abr. 2021
        </time>
        <p className="text-base font-normal text-[#71717a] text-pretty dark:text-[#a1a1aa]">
          {/* dark:text-[#a1a1aa] */}
          <ul className="text-[#71717a] list-disc ml-3 dark:text-[#a1a1aa]">
            <li className="mb-3">
              {languageToggle
                ? "Preparing , scheduling, coordinating and supervising the project, performing overall quality control of the work, assigning responsibilities and mentoring the project team."
                : "Preparar, programar, coordinar y supervisar el proyecto, realizar el control de calidad general del trabajo, asignar responsabilidades y orientar al equipo del proyecto."}{" "}
            </li>
            <li className="mb-3">
              {languageToggle
                ? "Succesfully completed the project together with my team, and presented the results achieved, which earned the company another contract with the client."
                : "Completé con éxito el proyecto junto con mi equipo, y presenté los resultados obtenidos, lo que le hizo ganar a la empresa otro contrato con el cliente."}
            </li>
          </ul>
        </p>
      </li>
    </ol>
  );
}
