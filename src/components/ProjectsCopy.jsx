/* eslint-disable no-unused-vars */
import JavascriptIcon from "../assets/JavascriptIcon";
import CssIcon from "../assets/CssIcon";
import HtmlIcon from "../assets/HtmlIcon";
import TailwindIcon from "../assets/TailwindIcon";
import ReactIcon from "../assets/ReactIcon";
import TypescriptIcon from "../assets/TypescriptIcon";
import ExpressIcon from "../assets/ExpressIcon";
import PostgreSQL from "../assets/PostgreSQL";
import Github from "../assets/Github";

import CountriesImage from "../Images/countries_of_the_world.png";
import RickandmortyImage from "../Images/rickandmorty_wbg_compress.png";
import CustomcraftImage from "../Images/customcraft01.png";
import TravelImage from "../Images/travel-list-withoutBG-compress.png";
import TodoImage from "../Images/TO-DO app.png";

import SocialPill from "./SocialPill";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
export default function ProjecsCopy({ languageToggle }) {
  const TAGS = {
    JAVASCRIPT: {
      name: "JavaScript",
      class: "text-[#777a92fa]",
      icon: JavascriptIcon,
    },
    CSS: {
      name: "CSS",
      class: "text-[#777a92fa]",
      icon: CssIcon,
    },
    HTML: {
      name: "HTML",
      class: "text-[#777a92fa]",
      icon: HtmlIcon,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "text-[#777a92fa]",
      icon: TailwindIcon,
    },
    REACT: {
      name: "React",
      class: "text-[#777a92fa]",
      icon: ReactIcon,
    },
    TYPESCRIPT: {
      name: "Typescript",
      class: "text-[#777a92fa]",
      icon: TypescriptIcon,
    },
    EXPRESS: {
      name: "Express.js",
      class: "text-[#777a92fa]",
      icon: ExpressIcon,
    },
    POSTGRESQL: {
      name: "PostgreSQL",
      class: "text-[#777a92fa]",
      icon: PostgreSQL,
    },
  };
  const PROJECTS = [
    {
      title: "Countries of the world",
      description: languageToggle
        ? "Project that gathers an extensive database with information of all the countries of the world, from its population to its extension, you can also save information about the activities that you can do in each of the countries. The application is fully responsive."
        : "Proyecto que recoge una extensa base de datos con información de todos los países del mundo, desde su población hasta su extensión, también puedes guardar información sobre las actividades que puedes realizar en cada uno de los países. La aplicación es totalmente responsive",
      link: "https://pi-countries-frontend-production.up.railway.app/",
      github: "https://github.com/GustavoMunizBarrios/pi-countries-frontend",
      image: CountriesImage,
      tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.EXPRESS, TAGS.POSTGRESQL],
    },
    {
      title: "Rick and Morty wiki",
      description: languageToggle
        ? "Compilation of characters from the Rick and Morty series, the application has different filters to sort characters, and a search bar."
        : "Recopilación de personajes de la serie Rick y Morty, la aplicación cuenta con diferentes filtros para ordenar los personajes, y una barra de búsqueda.",
      link: "https://rick-and-morty-frontend-production.up.railway.app/",
      github: "https://github.com/GustavoMunizBarrios/rick-and-morty-",
      image: RickandmortyImage,
      tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.EXPRESS, TAGS.POSTGRESQL],
    },
    {
      title: "TO-DO app",
      description: languageToggle
        ? "The TO-DO app is great for all those activities you can't forget. From feeding your dog to grocery shopping, don't miss a thing with this app."
        : "La aplicación TO-DO es genial para todas esas actividades que no puedes olvidar. Desde dar de comer al perro hasta hacer la compra, que no se te pase nada con esta app",
      link: "https://todo-app-one-dun.vercel.app/",
      github: "https://github.com/GustavoMunizBarrios/todo-app",
      image: TodoImage,
      tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.CSS, TAGS.HTML],
    },
    {
      title: "Packing List",
      description: languageToggle
        ? "Travel List is a perfect application for those trips where you can't forget anything. It records the amount and items you need, you can mark them as packed or delete them if you have made a mistake. You can also sort them by description or status. At the bottom you can see how many items you have left to pack."
        : "Travel List es una aplicación perfecta para esos viajes en los que no puedes olvidar nada. Registra la cantidad y los artículos que necesitas, puedes marcarlos como empaquetados o borrarlos si te has equivocado.También puedes ordenarlos por descripción o estado.En la parte inferior puedes ver cuántos artículos te quedan por empaquetar",
      link: "https://travel-list-pi-two.vercel.app/",
      github: "https://github.com/GustavoMunizBarrios/travel-list",
      image: TravelImage,
      tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.CSS, TAGS.HTML],
    },
    {
      title: "Custom Craft",
      description: languageToggle
        ? "Custom Craft is an online store where you can pre-visualize your clothes in a 3D model with the possibility to customize your own clothes, adding color and size."
        : "Custom Craft es una tienda online donde puedes pre-visualizar tu ropa en un modelo 3D y con la que tienes la posibilidad de personalizar tu prenda en tiempo real, añadiendo color y talla.",
      link: "https://proyecto-final-eight-beige.vercel.app/",
      github: "https://github.com/fedeMaidana/Proyecto_Final",
      image: CustomcraftImage,
      tags: [
        TAGS.REACT,
        TAGS.JAVASCRIPT,
        TAGS.TAILWIND,
        TAGS.EXPRESS,
        TAGS.POSTGRESQL,
      ],
    },
  ];
  return (
    <>
      {PROJECTS.map(({ image, title, description, tags, link, github }) => (
        <article className="w-full flex gap-4 flex-wrap" key={title}>
          <Card
            image={image}
            description={description}
            title={title}
            link={link}
            github={github}
          />

          {/*  <ul className="flex gap-x-4 flex-row flex-wrap">
              {tags.map((tag) => (
                <li className="pb-4" key={tag.name}>
                  <span
                    className={`flex gap-x-2 border border-[#777a9247] rounded-full text-sm ${tag.class} py-2 px-3`}
                  >
                    <tag.icon className="size-5 " />
                    {tag.name}
                  </span>
                </li>
              ))}
            </ul> */}
          {/* iconos de tecnologias usadas */}
        </article>
      ))}
    </>
  );
}
