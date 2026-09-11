"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLocale } from "@/lib/locale"

export function Organizations() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()
  const { data } = useLocale()
  const organizations = data.organizations

  return (
    <section
      ref={ref}
      id="organizations"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-8">
        {data.sectionTitles.organizations}
      </h2>

      <div className="space-y-12">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="group relative grid grid-cols-1 gap-4 sm:grid-cols-[140px_1fr] rounded-lg p-4 -mx-4 transition-colors duration-300 hover:bg-secondary/50"
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
            }}
          >
            <div className="text-xs text-muted-foreground pt-1">
              {org.period}
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-medium leading-snug text-foreground">
                  {org.title} · {org.company}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">{org.location}</p>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {org.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
