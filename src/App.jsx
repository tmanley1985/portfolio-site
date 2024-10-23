import { HashLink } from "react-router-hash-link"
import { ExternalLink, GithubIcon, BookOpen, Link } from "lucide-react"

import "./App.css"
import projects from "./data/projects"
import ProjectCard from "./components/ProjectCard"

function App() {
  return (
    // TODO: Add image for head section!
    <>
      <header>
        <nav className="bg-gray-800 p-6 w-full">
          <ul className="flex items-center text-gray-100 gap-3">
            <li className="mr-auto font-bold text-xl">
              <a href={"/"} alt="Link to home">
                Home
              </a>
            </li>
            <li>
              <HashLink smooth to="/#projects">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
            <li>
              <a href={"/resume.pdf"} download>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          className="relative flex flex-col md:flex-row justify-center items-center py-3 px-2 bg-blue-500 text-white gap-4"
        >
          <picture className="inline-block">
            <img src="/images/hero.png" alt="Hero image" />
          </picture>

          <div class="flex flex-col items-center md:items-start gap-4">
            <h1 className="text-5xl">
              I'm <span className="text-yellow-400">Thomas</span>
            </h1>
            <p className="text-xl">
              I'm a seasoned technologist and software engineer specializing in
              fullstack development.
            </p>
            <a
              href={"/resume.pdf"}
              className="inline-block text-center max-w-xs bg-red-400 text-white font-bold py-2 px-4 rounded hover:bg-red-500 transition duration-300"
              download
            >
              Get My Resume
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
                class="shape-fill-blue"
              ></path>
            </svg>
          </div>
        </section>

        <section
          id="projects"
          // We need the mt-100px because we need to push the content down the same height as the svg.
          className="relative pt-32 max-w-full mx-auto py-4 px-8 bg-white gap-4"
        >
          <div className="text-center">
            <h2 className="text-5xl mx-auto">Projects</h2>
          </div>
          {projects.map(({ category, projects: categoryProjects }) => (
            <div key={category} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                {category === "Work" && <Link className="w-6 h-6" />}
                {category === "Open Source" && (
                  <GithubIcon className="w-6 h-6" />
                )}
                {category === "Learning" && <BookOpen className="w-6 h-6" />}
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} category={category} />
                ))}
              </div>
            </div>
          ))}
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill-white"
              ></path>
            </svg>
          </div>
        </section>
        <section
          id="contact"
          // We're adding pt-32 which is approximately 128px because I cannot add margin because of the margin collapse issue.
          // Instead I'm adding padding to push everything down the size of the svg (100px) plus a bit extra.
          className="relative pt-32 bg-blue-500 text-white text-center gap-4"
        >
          <h2 className="text-4xl">Contact Me</h2>
        </section>
      </main>
    </>
  )
}

export default App
