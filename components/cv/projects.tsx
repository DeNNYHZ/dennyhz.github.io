"use client"

import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const projects = [
  {
    title: "Finance APP API",
    period: "Aug 2024 — Sep 2024",
    role: "Backend Developer",
    description:
      "Developed a simple API for managing personal finance, enabling users to track income and expenses. Implemented backend API functionalities for managing categories and transactions, with real-time balance monitoring and monthly financial reports.",
    technologies: ["Go", "MongoDB"],
    github: "https://github.com/DeNNYHZ/Book-Management-API",
  },
  {
    title: "Dashboard Inventory Management",
    period: "Jun 2025",
    role: "Fullstack Developer",
    description:
      "Developed a role-based web dashboard with sign-in and protected routes using Next.js. Implemented authentication and session handling with user and admin role differentiation, with full CRUD operations for inventory management.",
    technologies: ["Next.js", "Supabase"],
    github: "https://github.com/DeNNYHZ/Dashboard-Inventory-Management",
  },
  {
    title: "Book Management API",
    period: "Aug 2024 — Sep 2024",
    role: "Backend Developer",
    description:
      "Developed a RESTful API for managing book data using Go, Fiber framework, and PostgreSQL. Implemented CRUD operations with GORM ORM to simplify database interactions and ensure data consistency.",
    technologies: ["Go", "Fiber", "PostgreSQL", "GORM"],
    github: "https://github.com/DeNNYHZ/Book-Management-API",
  },
  {
    title: "Daily Planner",
    period: "Jun 2025",
    role: "Mobile Developer",
    description:
      "Developed a daily planner mobile application with authentication using Supabase Auth. Implemented task management features including CRUD, custom categories, priorities, and offline-first functionality using Hive with automatic data synchronization.",
    technologies: ["Flutter", "Supabase", "Hive"],
    github: "https://github.com/DeNNYHZ/Daily-Planner",
  },
  {
    title: "Petra Bookstore",
    period: "Apr 2025",
    role: "Mobile Developer",
    description:
      "Developed an online bookstore mobile application using Flutter with structured navigation. Implemented home page displaying book listings, book detail page, wishlist functionality, and search/filter capabilities.",
    technologies: ["Flutter"],
    github: "https://github.com/DeNNYHZ/Petra-Book-Store",
  },
]

export function Projects() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()

  return (
    <section
      ref={ref}
      id="projects"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-8">
        Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative grid grid-cols-1 gap-4 sm:grid-cols-[140px_1fr] rounded-lg p-4 -mx-4 transition-colors duration-300 hover:bg-secondary/50"
          >
            <div className="text-xs text-muted-foreground pt-1">
              {project.period}
            </div>

            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium leading-snug text-foreground">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline gap-1 group/link"
                    >
                      <span className="transition-colors duration-200 group-hover/link:text-primary">{project.title}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{project.role}</p>
                </div>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all duration-200 shrink-0 hover:scale-110"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </Link>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-transform duration-200 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
