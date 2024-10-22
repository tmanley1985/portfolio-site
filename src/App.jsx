import { useState } from "react"
import { Link } from "react-router-dom"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  return (
    <>
      <header>
        <nav className="bg-gray-800 p-6 w-full">
          <ul className="flex items-center text-gray-100 gap-3">
            <li className="mr-auto font-bold text-xl">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              {/* TODO: Add resume to public folder!! */}
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              {/* TODO: Add resume to public folder!! */}
              <Link to={"/resume"}>Resume</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          className="relative flex flex-col md:flex-row items-center bg-blue-500 text-white"
        >
          <picture className="inline-block">
            <img src="/images/hero.png" alt="Hero image" />
          </picture>

          <div class="content inline-block">
            <h1>
              I'm <span className="text-red-600">Thomas</span>
            </h1>
            <p>
              I'm a seasoned technologist and software engineer specializing in
              fullstack development.
            </p>
            <a href="/projects" class="cta">
              See My Work
            </a>
          </div>
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
