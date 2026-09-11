"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLocale } from "@/lib/locale"

export function Thesis() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()
  const { data } = useLocale()
  const thesis = data.thesis

  return (
    <section
      ref={ref}
      id="thesis"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-8">
        {data.sectionTitles.thesis}
      </h2>

      <div className="group relative rounded-lg p-4 -mx-4 transition-colors duration-300 hover:bg-secondary/50">
        <h3 className="font-medium leading-snug text-foreground">
          {thesis.title}
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {thesis.description.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {thesis.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-transform duration-200 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
