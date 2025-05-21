import type React from "react"
import {
  Code2Icon,
  FileTypeIcon,
  FramerIcon,
  ServerIcon,
  DatabaseIcon,
  WindIcon,
  FileCodeIcon,
  GitBranchIcon,
  ContainerIcon,
} from "lucide-react"

type Technology = {
  name: string
  icon: React.ReactNode
}

const technologies: Technology[] = [
  { name: "JavaScript", icon: <Code2Icon className="h-6 w-6" /> },
  { name: "TypeScript", icon: <FileTypeIcon className="h-6 w-6" /> },
  { name: "React", icon: <FramerIcon className="h-6 w-6" /> },
  { name: "Next.js", icon: <ServerIcon className="h-6 w-6 rotate-45" /> },
  { name: "Node.js", icon: <ServerIcon className="h-6 w-6" /> },
  { name: "Express", icon: <ServerIcon className="h-6 w-6" /> },
  { name: "MongoDB", icon: <DatabaseIcon className="h-6 w-6" /> },
  { name: "PostgreSQL", icon: <DatabaseIcon className="h-6 w-6" /> },
  { name: "Tailwind CSS", icon: <WindIcon className="h-6 w-6" /> },
  { name: "HTML/CSS", icon: <FileCodeIcon className="h-6 w-6" /> },
  { name: "Git", icon: <GitBranchIcon className="h-6 w-6" /> },
  { name: "Docker", icon: <ContainerIcon className="h-6 w-6" /> },
]

export function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:bg-card/80 transition-colors"
        >
          <div className="flex-shrink-0 mb-2">{tech.icon}</div>
          <span className="text-sm font-medium text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}
