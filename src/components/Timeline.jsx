import JobIcon from "../assets/JobIcon"

export default function Timeline() {
    return (

        <ol className="relative border-s border-[#e5e7eb] ml-3">
            {/* dark:border-gray-700 */}
            {/*  PROJECT MANAGER section */}
            <li className="mb-10 ms-8">
                <span
                    className="absolute flex items-center justify-center w-7 h-7 bg-[#dbeafe] rounded-full -start-3 ring-8 ring-[[#fffff]]"
                >
                    {/* dark:ring-[#18181b] dark:bg-blue-900 */}
                    <JobIcon className="w-4 h-4 text-[#1e40af]" />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-[#111827]">
                    {/*  dark:text-[#fffff] */}
                    Project Manager <span
                        className="bg-[#dbeafe] text-[#1e40af] text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3"
                    >
                        {/* dark:bg-blue-900 dark:text-blue-300 */}
                        Latest</span
                    >
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-[#9ca3af]">
                    {/*  text-[#a1a1aa] dark:text-gray-500  */}
                    Bommus de Mexico, May. 2021 -
                    Aug. 2022</time
                >
                <p className="mb-4 text-base font-normal text-[#6b7280] text-pretty">
                    {/* dark:text-[#a1a1aa]  */}
                    <ul className="text-[#6b7280] list-disc ml-3">
                        <li>
                            Together with my team, we developed a new product from a prototype,
                            covering areas such as hardware and software design, commercial
                            viability and quality testing.
                        </li>
                        <li>
                            I was in charge of leading the dissemination of the new product by
                            applying Marketing strategies, revamping the website and creating a
                            new sub-brand.
                        </li>
                        <li>
                            The departament I led became the main profit contributor for the
                            company.
                        </li>
                    </ul>
                </p>
            </li>
            {/* <!-- PROJECT ENGINEER section --> */}
            <li className="mb-10 ms-8">
                <span
                    className="absolute flex items-center justify-center w-7 h-7 bg-[#dbeafe] rounded-full -start-3 ring-8 ring-[#fffff]"
                >
                    {/* dark:ring-[#18181b] dark:bg-blue-900  */}
                    <JobIcon className="w-4 h-4 text-[#1e40af]" />
                </span>
                <h3 className="mb-1 text-lg font-semibold text-[#18181b]">
                    {/* dark:text-[#fffff]  */}
                    Project Engineer
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-[#a1a1aa]">
                    {/*  dark:text-gray-500 */}
                    Bommus de Mexico, Mar. 2021 - Abr. 2021
                </time>
                <p className="text-base font-normal text-[#71717a] text-pretty">
                    {/* dark:text-[#a1a1aa] */}
                    <ul className="text-[#71717a] list-disc ml-3">
                        <li>
                            Preparing , scheduling, coordinating and supervising the project,
                            performing overall quality control of the work, assigning
                            responsibilities and mentoring the project team.
                        </li>
                        <li>
                            Succesfully completed the project together with my team, and presented
                            the results achieved, which earned the company another contract with
                            the client.
                        </li>
                    </ul>
                </p>
            </li>
        </ol>

    )
}