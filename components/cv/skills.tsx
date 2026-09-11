"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLocale } from "@/lib/locale"

export function Skills() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()
  const { data } = useLocale()

  return (
    <section
      ref={ref}
      id="skills"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-8">
        {data.sectionTitles.skills}
      </h2>

      <div className="space-y-6">
        {data.skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-foreground mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground transition-all duration-200 hover:scale-105 hover:bg-secondary/80"
                  style={{
                    transitionDelay: isVisible ? `${skillIndex * 50}ms` : "0ms",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">
            {data.languages.length ? "Languages" : ""}
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.languages.map((lang) => (
              <span
                key={lang}
                className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground transition-all duration-200 hover:scale-105 hover:bg-secondary/80"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
