export default function Footer() {
    return (
        <footer className="bg-[#ffff] pb-[3rem]">
            {/*  dark:bg-gray-900 */}
            <div
                className="w-full max-w-screen-xl mx-auto p-4  md:py-8 rounded-lg border border-[#6c738041] shadow"
            >
                <div className="sm:flex sm:items-center sm:justify-between py-5 px-[3rem]">
                    <a
                        href="https://www.linkedin.com/in/developer-gustavo-mu%C3%B1iz-barrios-86708b121/"
                        className="flex items-center mb-4 ml-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://th.bing.com/th/id/OIP.Zd0M82wkkQcSla_pP1dGpgAAAA?rs=1&pid=ImgDetMain"
                            className="rounded-full size-10"
                            alt="Profile image"
                        />
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap text-[#6b7280] hover:underline"
                        >Gustavo Muñiz B.</span
                        >
                        {/* dark:text-white */}
                    </a>
                    <ul
                        className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#6b7280] sm:mb-0"
                    >
                        {/* dark:text-gray-400 */}
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="mailto:j.gustavomb1984@hotmail.com" className="hover:underline"
                            >Contact</a
                            >
                        </li>
                    </ul>
                </div>
                <hr
                    className="my-6 border-[#e5e7eb] sm:mx-auto lg:my-8"
                />
                {/*  dark:border-gray-700 */}
                <span className="block text-sm text-[#6b7280] sm:text-center">
                    {/*  dark:text-gray-400 */}
                    © 2024 <a
                        href="https://flowbite.com/"
                        className="hover:underline"></a>. All Rights Reserved.</span
                >
            </div>
        </footer>

    )
}