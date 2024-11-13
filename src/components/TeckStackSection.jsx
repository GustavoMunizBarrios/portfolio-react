export default function TechStackSection() {
  return (
    <div className="flex min-h-screen items-center justify-center px-24">
      <div>
        <div className="group relative -ml-4 flex scroll-mt-40 items-center pl-4">
          <a
            href="#"
            className="absolute z-50 -ml-10 mb-2.5 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 opacity-0 hover:opacity-100 group-hover:opacity-100"
          >
            icon
          </a>
          <h2 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug !mb-2 text-primary">
            Frameworks Integration
          </h2>
        </div>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit !mb-4 !text-gray-600">
          Framework-specific guides that cover our recommended approach to
          installing @material-tailwind/react in a number of popular
          environments. Select your preferred framework from the list below and
          follow the instructions.
        </p>
        <div
          className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4"
          id="frameworks-integration"
        >
          <a
            className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
          <a
            className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
          <a
            className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
          <a
            className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
          <a
            className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
          <a
            className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
            href="#"
          >
            <span className="my-6 grid h-24 w-24 place-items-center">icon</span>
          </a>
        </div>
      </div>
    </div>
  );
}
