/* eslint-disable react/prop-types */
/* ICONS */
import JavascriptIcon from "../assets/JavascriptIcon";
import CssIcon from "../assets/CssIcon";
import HtmlIcon from "../assets/HtmlIcon";
import TailwindIcon from "../assets/TailwindIcon";
import ReactIcon from "../assets/ReactIcon";
import TypescriptIcon from "../assets/TypescriptIcon";
import ExpressIcon from "../assets/ExpressIcon";
import PostgreSQL from "../assets/PostgreSQL";
/* IMAGES OF PROJECTS */
import CountriesImage from "../Images/countriesImage.png";
import RickandmortyImage from "../Images/rickImage.png";
import CustomcraftImage from "../Images/customImage.png";
import TravelImage from "../Images/packingImage.png";
import TodoImage from "../Images/todoImage.png";
import usepopcornImage from "../Images/usepopcornImage.png";

import Card from "./Card";

export default function Projecs({ languageToggle }) {
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
      name: "Tailwind",
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
      name: "Express",
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
        ? "Project with a database of countries, covering everything from their population to their size, where you can save information about the activities available in each country."
        : "Proyecto con una base de datos de países, abarcando desde su población hasta su extensión, donde puedes guardar información sobre las actividades disponibles en cada país.",
      link: "https://pi-countries-frontend-production.up.railway.app/",
      github: "https://github.com/GustavoMunizBarrios/pi-countries-frontend",
      image: CountriesImage,
      tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.EXPRESS, TAGS.POSTGRESQL],
    },
    {
      title: "usePopcorn",
      description: languageToggle
        ? "Search for any movie you're interested in, check out relevant information about it, rate your favorite films and save them to your personal list."
        : "Busca cualquier película de tu interés, consulta la información relevante sobre ella, califica tus filmes favoritos y guárdalos en tu lista personal.",
      link: "https://use-popcorn-opal-nine.vercel.app/",
      github: "https://github.com/GustavoMunizBarrios/usePopcorn",
      image: usepopcornImage,
      tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.CSS],
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
        ? "A simple and aesthetic To-do app, you can create tasks, delete them and filter them, day and night modes for a better user experience."
        : "Una aplicación To-do sencilla y estetica, puedes crear tareas, eliminarlas y filtrarlas, modos de día y de noche para una mejor experiencia de usuario.",
      link: "https://todo-app-one-dun.vercel.app/",
      github: "https://github.com/GustavoMunizBarrios/todo-app",
      image: TodoImage,
      tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND],
    },
    {
      title: "Packing List",
      description: languageToggle
        ? "Travel List is an app to make sure you pack everything you need on your travels. Record the quantity and items you need, you can mark them as packed or delete them. You can also sort them by description or status."
        : "Travel List es una aplicación para que no falte nada en tus viajes. Registra la cantidad y los artículos que necesitas, puedes marcarlos como empaquetados o borrarlos.También puedes ordenarlos por descripción o estado.",
      link: "https://travel-list-pi-two.vercel.app/",
      github: "https://github.com/GustavoMunizBarrios/travel-list",
      image: TravelImage,
      tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.CSS],
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
    <article className="w-full lg:w-[740px] xl:w-[1080px] flex gap-4 xl:gap-6 flex-wrap items-center justify-center">
      {PROJECTS.map(({ image, title, description, tags, link, github }) => (
        <div key={title}>
          <Card
            image={image}
            description={description}
            title={title}
            link={link}
            github={github}
            tags={tags}
          />
        </div>
      ))}
    </article>
  );
}
