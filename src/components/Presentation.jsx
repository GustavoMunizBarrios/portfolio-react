/* eslint-disable react/prop-types */
import LinkedinIcon from "../assets/LinkedinIcon";
import Badge from "./Badge";
import SocialPill from "./SocialPill";

export default function Presentation({ languageToggle }) {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
        {languageToggle ? "Hey, I'm Gustavo" : "Hola, soy Gustavo"}{" "}
        <a
          href="https://www.linkedin.com/in/developer-gustavo-mu%C3%B1iz-barrios-86708b121/"
          target="_blank"
          rel="noopener"
          className="flex justify-center items-center"
        >
          <Badge>
            {languageToggle ? "Available for hire" : "Disponible para trabajar"}
          </Badge>
        </a>
      </h1>
      <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px]">
        {languageToggle ? "Welcome! I'm a" : "¡Bienvenido! Soy un"}{" "}
        <span className="font-bold text-[#EF8354]">
          {languageToggle ? "Web Developer " : "Desarrollador Web "}
        </span>{" "}
        {languageToggle
          ? "with three years of experience in engineering project development. Feel free to explore my projects to see my skills as a web developer."
          : "con tres años de experiencia en desarrollo de proyectos de ingeniería. Puedes explorar mis proyectos para ver mis habilidades como desarrollador web."}
      </h2>

      <nav className="flex gap-4 mt-5 flex-wrap">
        {/* LINKEDIN */}
        <SocialPill link="https://www.linkedin.com/in/developer-gustavo">
          <LinkedinIcon />
          LinkedIn
        </SocialPill>

        {/* GITHUB */}
        <SocialPill link="https://github.com/GustavoMunizBarrios/">
          <div>
            <svg
              className="size-4 md:size-6"
              viewBox="0 0 256 250"
              width="256"
              height="250"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          GitHub
        </SocialPill>

        {/* MAIL */}
        <SocialPill link="mailto:j.gustavomb1984@hotmail.com">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 md:size-6 icon icon-tabler icon-tabler-mail-filled"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
              <path
                d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          Email
        </SocialPill>
      </nav>
    </>
  );
}