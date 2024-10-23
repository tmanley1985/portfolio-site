import { HashLink } from "react-router-hash-link"
import { ExternalLink, GithubIcon, BookOpen, Link } from "lucide-react"

import "./App.css"
import projects from "./data/projects"
import contactLinks from "./data/contacts"
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
        <section className="bg-gradient-to-br from-rose-400 to-rose-500 text-white pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-xl mb-12 text-rose-100">
              Get in touch! I'd love to hear from you.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {contactLinks.map(link => (
                <a
                  key={link.text}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-rose-100 hover:text-white transition-all duration-200 hover:scale-105"
                >
                  {link.icon}
                  <span className="text-lg">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
