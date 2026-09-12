"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLocale } from "@/lib/locale"

export function Projects() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()
  const { data } = useLocale()
  const projects = data.projects

  return (
    <section
      ref={ref}
      id="projects"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-8">
        {data.sectionTitles.projects}
      </h2>

      <div className="grid gap-4 xl:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col gap-4 rounded-2xl border bg-card p-6 transition-colors duration-200 hover:border-primary/40"
          >
            <div className="flex items-center justify-between gap-3 text-xs text-primary">
              <span>{project.role}</span><span className="font-mono text-muted-foreground" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
                    {project.github ? (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline gap-1 group/link"
                      >
                        <span className="transition-colors duration-200 group-hover/link:text-primary">{project.title}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                </div>
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
