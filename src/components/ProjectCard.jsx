import { ExternalLink, GithubIcon, BookOpen, Link } from "lucide-react"

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  repo,
  category,
}) => {
  const getCategoryIcon = () => {
    switch (category) {
      case "Work":
        return <Link className="w-4 h-4" />
      case "Open Source":
        return <GithubIcon className="w-4 h-4" />
      case "Learning":
        return <BookOpen className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full hover:shadow-md transition-shadow p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center gap-2 text-gray-500">
          {getCategoryIcon()}
          <span className="text-sm">{category}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ExternalLink className="w-4 h-4" />
            View
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1"
          >
            <GithubIcon className="w-4 h-4" />
            View Code
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
