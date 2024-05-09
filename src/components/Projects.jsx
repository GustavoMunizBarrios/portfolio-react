import JavascriptIcon from "../assets/JavascriptIcon";
import CssIcon from "../assets/CssIcon";
import HtmlIcon from "../assets/HtmlIcon";
import TailwindIcon from "../assets/TailwindIcon";
import ReactIcon from "../assets/ReactIcon";
import TypescriptIcon from "../assets/TypescriptIcon";
import ExpressIcon from "../assets/TypescriptIcon";
import PostgreSQL from "../assets/PostgreSQL";

export default function Projecs() {
    const TAGS = {
        JAVASCRIPT: {
            name: "JavaScript",
            class: "text-black",
            icon: JavascriptIcon,
        },
        CSS: {
            name: "CSS",
            class: "text-black",
            icon: CssIcon,
        },
        HTML: {
            name: "HTML",
            class: "text-black",
            icon: HtmlIcon,
        },
        TAILWIND: {
            name: "Tailwind CSS",
            class: "text-black",
            icon: TailwindIcon,
        },
        REACT: {
            name: "React",
            class: "text-black",
            icon: ReactIcon,
        },
        TYPESCRIPT: {
            name: "Typescript",
            class: "text-black",
            icon: TypescriptIcon,
        },
        EXPRESS: {
            name: "Express.js",
            class: "text-black",
            icon: ExpressIcon,
        },
        POSTGRESQL: {
            name: "PostgreSQL",
            class: "text-black",
            icon: PostgreSQL,
        },
    };
    const PROJECTS = [
        {
            title: "Countries of the world",
            description:
                "Project that gathers an extensive database with information of all the countries of the world, from its population to its extension, you can also save information about the activities that you can do in each of the countries. The application is fully responsive.",
            link: "https://pi-countries-frontend-production.up.railway.app/",
            github: "https://github.com/GustavoMunizBarrios/pi-countries-frontend",
            image: CountriesImage,
            tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.EXPRESS, TAGS.POSTGRESQL],
        },
        {
            title: "Rick and Morty wiki",
            description:
                "Compilation of characters from the Rick and Morty series, the application has different filters to sort characters, and a search bar.",
            link: "https://rick-and-morty-frontend-production.up.railway.app/",
            github: "https://github.com/GustavoMunizBarrios/rick-and-morty-",
            image: RickandmortyImage,
            tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.EXPRESS, TAGS.POSTGRESQL],
        },
        {
            title: "TO-DO app",
            description:
                "The TO-DO app is great for all those activities you can't forget. From feeding your dog to grocery shopping, don't miss a thing with this app.",
            link: "https://todo-app-one-dun.vercel.app/",
            github: "https://github.com/GustavoMunizBarrios/todo-app",
            image: TodoImage,
            tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.CSS, TAGS.HTML],
        },
        {
            title: "Packing List",
            description:
                "Travel List is a perfect application for those trips where you can't forget anything. It records the amount and items you need, you can mark them as packed or delete them if you have made a mistake. You can also sort them by description or status. At the bottom you can see how many items you have left to pack.",
            link: "https://travel-list-pi-two.vercel.app/",
            github: "https://github.com/GustavoMunizBarrios/travel-list",
            image: TravelImage,
            tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.CSS, TAGS.HTML],
        },
        {
            title: "Custom Craft",
            description:
                "Custom Craft is an online store where you can pre-visualize your clothes in a 3D model with the possibility to customize your own clothes, adding color and size.",
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
            {
                PROJECTS.map(({ image, title, description, tags, link, github }) => (
                    <article className="ml-3">
                        <div className="flex items-center justify-between">
                            <h3 class="text-2xl font-semibold text-[#EF8354] mb-2">
                                {" "}
                                <a href={link} className="hover:underline">
                                    {title}
                                </a>{" "}
                            </h3>
                            <div className=" ml-6 mb-4">
                                <SocialPill href={github}>
                                    <Github className="size-4 md:size-6 " />
                                    GitHub
                                </SocialPill>
                            </div>
                        </div>
                        <p className="text-lg mb-4 text-pretty">{description}</p>
                        <ul className="flex gap-x-4 flex-row flex-wrap">
                            {tags.map((tag) => (
                                <li className="pb-4">
                                    <span
                                        className={`flex gap-x-2 border rounded-full text-sm ${tag.class} py-2 px-3`}
                                    >
                                        <tag.icon className="size-5 " />
                                        {tag.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <a href={link}>
                            <img
                                className="transform hover:scale-105 transition duration-300 ease-in-out"
                                src={image.src}
                                alt={`Screenshot of the project ${title}`}
                            />
                        </a>
                    </article>
                ))
            }</>)

}