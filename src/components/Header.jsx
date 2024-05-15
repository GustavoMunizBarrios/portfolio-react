import LanguageToggle from "./LanguageToggle"

// eslint-disable-next-line react/prop-types
export default function Header({ languageToggle, handleLanguageEN, handleLanguageES }) {
    return (
        <header
            className="sticky top-0 z-20 flex justify-center items-center py-5 w-[100%] mx-auto
            text-lg
            bg-[#4384da80] bg-opacity-50 backdrop-blur-[10px]"
        >
            <a
                className="relative mr-10 hidden xs:block z-50"
                href="https://www.linkedin.com/in/developer-gustavo-mu%C3%B1iz-barrios-86708b121/"
            >
                <img
                    className="rounded-full size-14 z-50 transform transition-all duration-200 hover:scale-110"
                    src="https://th.bing.com/th/id/OIP.Zd0M82wkkQcSla_pP1dGpgAAAA?rs=1&pid=ImgDetMain"
                    alt="profile of Gustavo"
                />
            </a>

            <nav className="flex flex-row gap-x-10 z-50">
                <a href="/" className="hover:underline hover:text-[#df5e4d]">{languageToggle ? 'Home' : 'Inicio'}</a>
                <a href="#projects" className="hover:underline hover:text-[#df5e4d]">{languageToggle ? 'Projects' : 'Proyectos'}</a>
                <a href="#experience" className="hover:underline hover:text-[#df5e4d]">{languageToggle ? 'Experience' : 'Experiencia'}</a>
                <a href="#about" className="hover:underline hover:text-[#df5e4d]">{languageToggle ? 'About me' : 'Acerca de mí'}</a>
            </nav>
            <LanguageToggle
                languageToggle={languageToggle}
                handleLanguageEN={handleLanguageEN}
                handleLanguageES={handleLanguageES} />
        </header>
    )
}