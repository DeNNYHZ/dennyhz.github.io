"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLocale } from "@/lib/locale"

export function About() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()
  const { data } = useLocale()

  return (
    <section
      ref={ref}
      id="about"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-6">
        {data.sectionTitles.about}
      </h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {data.summary.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
