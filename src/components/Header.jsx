import LanguageToggle from "./LanguageToggle"

export default function Header() {
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
                <a href="/" className="hover:underline hover:text-[#df5e4d]">Home</a>
                <a href="#projects" className="hover:underline hover:text-[#df5e4d]">Projects</a
                >
                <a href="#experience" className="hover:underline hover:text-[#df5e4d]"
                >Experience</a
                >
                <a href="#about" className="hover:underline hover:text-[#df5e4d]">About</a>
            </nav>
            <LanguageToggle />
        </header>
    )
}