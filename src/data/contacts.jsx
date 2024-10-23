import { GithubIcon, Mail, LinkedinIcon } from "lucide-react"

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:tmanley1985@gmail.com",
    text: "tmanley1985@gmail.com",
  },
  {
    icon: <GithubIcon className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/tmanley1985",
    text: "@tmanley1985",
  },
  {
    icon: <LinkedinIcon className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/thomas-manley-b9a203a8",
    text: "Connect on LinkedIn",
  },
]

export default contactLinks
