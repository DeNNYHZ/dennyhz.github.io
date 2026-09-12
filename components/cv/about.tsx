"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLocale } from "@/lib/locale"

export function About() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()
  const { data, locale } = useLocale()

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

      <p className="mb-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {locale === "id" ? "Dari antarmuka hingga infrastruktur." : "From interface to infrastructure."}
        <span className="mt-2 block text-primary">{locale === "id" ? "Solusi end-to-end." : "End-to-end solutions."}</span>
      </p>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Core stack">
        {["Next.js", "Go", "PostgreSQL", "Redis", "Docker", "OCI"].map((tech) => (
          <span key={tech} className="rounded-md border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">{tech}</span>
        ))}
      </div>
      <div className="space-y-4 text-sm text-muted-foreground leading-7 sm:text-base">
        {data.summary.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
