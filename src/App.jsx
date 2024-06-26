import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Badge from './components/Badge'
import Projecs from './components/Projects'
//import { Linkedin, Github, Mail } from './components/Icons'
import SocialPill from './components/SocialPill'
import ProjectsIcon from './assets/ProjectsIcon'
import profileCompress from './Images/profileCompress.png'
import JobIcon from './assets/JobIcon'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {

  const [languageToggle, setLanguageToggle] = useState(true)

  const handleLanguageEN = () => {
    setLanguageToggle(true)
    //console.log(`Estado true EN: ${languageToggle}`);
  }
  const handleLanguageES = () => {
    setLanguageToggle(false)
    //console.log(`Estado false ES: ${languageToggle}`);
  }


  return (
    <>
      <Header
        languageToggle={languageToggle}
        handleLanguageEN={handleLanguageEN}
        handleLanguageES={handleLanguageES} />
      {/*   <!-- ---------------- -->
      <!-- Presentation -->
      <!-- ---------------- --> */}
      <main className='w-full lg:w-[740px] mx-auto px-4 pt-[6rem] smm:px-3 mdm:px-10 '>
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10"
        >
          {languageToggle ? "Hey, I'm Gustavo" : 'Hola, soy Gustavo'} <a
            href="https://www.linkedin.com/in/developer-gustavo-mu%C3%B1iz-barrios-86708b121/"
            target="_blank"
            rel="noopener"
            className="flex justify-center items-center"
          >
            <Badge>{languageToggle ? 'Available for hire' : 'Disponible para trabajar'}</Badge>
          </a>
        </h1>
        <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px]">
          {languageToggle ? "Welcome! I'm a" : "¡Bienvenido! Soy un"} <span className="font-bold text-[#EF8354]"
          >{languageToggle ? "Web Developer " : "Desarrollador Web "}</span
          > {languageToggle ? "with three years of experience in engineering project development. Feel free to explore my projects to see my skills as a web developer." : "con tres años de experiencia en desarrollo de proyectos de ingeniería. Puedes explorar mis proyectos para ver mis habilidades como desarrollador web."}
        </h2>

        <nav className="flex gap-4 mt-5 flex-wrap">

          {/* LINKEDIN */}
          <SocialPill link="https://www.linkedin.com/in/developer-gustavo">
            <div>
              <svg
                className='size-4 md:size-6'
                width="256"
                height="256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256"
              ><path
                d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                fill="currentColor"></path></svg
              >
            </div>
            LinkedIn
          </SocialPill>

          {/* GITHUB */}
          <SocialPill link="https://github.com/GustavoMunizBarrios/">
            <div>
              <svg
                className='size-4 md:size-6'
                viewBox="0 0 256 250"
                width="256"
                height="250"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              ><path
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                fill="currentColor"></path></svg
              >
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
                  fill="currentColor"></path>
                <path
                  d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                  strokeWidth="0"
                  fill="currentColor"></path>
              </svg>
            </div>
            Email
          </SocialPill>
        </nav>
        {/* 
        <!-- ---------------- -->
        <!-- Projects Section -->
        <!-- ---------------- --> */}
        <section id='projects' className='w-full lg:w-[740px] mx-auto pt-[8rem]'>
          <h2
            className="text-3xl font-semibold text-[#1a202c] mb-7 flex gap-x-3 items-center"
          >
            <ProjectsIcon className="w-full lg:w-[740px] mx-auto py-12" />
            {languageToggle ? "Projects" : "Proyectos"}
          </h2>
          <Projecs languageToggle={languageToggle} />
        </section>
        {/* 
        <!-- ----------------------------- -->
        <!-- Experience Section - Timeline  -->
        <!-- ----------------------------- -->
        */}
        <section id='experience' className='w-full lg:w-[740px] mx-auto pt-[8rem]'>
          <h2
            className="text-3xl font-semibold text-[#111827] mb-[3rem] flex gap-x-3 items-center"
          >
            <JobIcon className="size-8" />
            {languageToggle ? "Work Experience" : "Experiencia Laboral"}
          </h2>

          <Timeline languageToggle={languageToggle} />

        </section>
        {/*     
        <!-- ----------------------------- -->
        <!-- ------ About Me section ----- -->
        <!-- ----------------------------- --> 
        */}
        <section id="about" className='w-full lg:w-[740px] mx-auto py-[8rem]'>
          <h2
            className="text-3xl font-semibold text-[#111827] mb-7 flex gap-x-3 items-center"
          >
            <JobIcon className="size-8" />
            {languageToggle ? "About Me" : "Acerca de mí"}
          </h2>
          <div className="flex items-center smm:flex-col">
            <img
              className="mr-5 rounded-full size-[10rem] -z-30 transform transition-all duration-200 hover:scale-110"
              src={profileCompress}
              alt="profile of Gustavo"
            />
            <p className="text-gray-700 text-lg mt-5 pl-4">
              {languageToggle ? "Hi! I'm " : "Hola! Soy "}<span className="font-bold text-[#ef8354]">Gustavo Muñiz </span>
              {languageToggle ? "I am a web developer and I have 3 years of experience in engineering project development, I've had the opportunity to work in different areas and develop skills in project management, programming and agile methodologies." : ", soy desarrollador web y tengo 3 años de experiencia en desarrollo de proyectos de ingeniería, he tenido la oportunidad de trabajar en diferentes áreas y desarrollar habilidades en gestión de proyectos, programación y metodologías ágiles."}
              <br />
              <br />
              {languageToggle ? "I am focused on " : "Estoy enfocado en desarrollo "} <span className="font-bold text-[#1e40af]">Front-end </span>
              {languageToggle ? "development. I have experience doing multiple projects and have worked in a real development environment with a team of developers." : ". He ganado experiencia realizando múltiples proyectos y he trabajado en un entorno de desarrollo real con un equipo de desarrolladores."}
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default App
