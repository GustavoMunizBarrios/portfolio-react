/* eslint-disable react/prop-types */
import JobIcon from "../assets/JobIcon";
import Timeline from "./Timeline";

export default function ExperienceSection({ languageToggle, theme }) {
  return (
    <section
      id="experience"
      className="w-full lg:w-[740px] xl:w-[1080px]  mx-auto pt-[8rem]"
    >
      <h2 className="text-3xl font-semibold text-[#111827] mb-[3rem] flex gap-x-3 items-center dark:text-veryLightGrayishBlue">
        <JobIcon className="size-8" theme={theme} />
        {languageToggle ? "Work Experience" : "Experiencia Laboral"}
      </h2>

      <Timeline languageToggle={languageToggle} />
    </section>
  );
}
