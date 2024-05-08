// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Badge from './components/Badge'

function App() {

  return (
    <>
      <Header />
      <main className='w-full lg:w-[740px] mx-auto py-12 px-4 pt-10'>
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10"
        >
          {"Hey, I'm Gustavo"} <a
            href="https://www.linkedin.com/in/developer-gustavo-mu%C3%B1iz-barrios-86708b121/"
            target="_blank"
            rel="noopener"
            className="flex justify-center items-center"
          >
            <Badge>Available for hire</Badge>
          </a>
        </h1>

      </main>
    </>
  )
}

export default App
