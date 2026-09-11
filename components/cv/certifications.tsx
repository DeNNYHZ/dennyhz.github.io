"use client"

import { Award } from "lucide-react"
import Link from "next/link"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useLocale } from "@/lib/locale"

export function Certifications() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()
  const { data } = useLocale()

  return (
    <section
      ref={ref}
      id="certifications"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-8">
        {data.sectionTitles.certifications}
      </h2>

      <div className="space-y-6">
        {data.certifications.map((cert, index) => (
          <div
            key={index}
            className="group flex items-start justify-between gap-4 rounded-lg p-4 -mx-4 transition-colors duration-300 hover:bg-secondary/50"
          >
            <div>
              <h3 className="font-medium leading-snug text-foreground inline-flex items-baseline gap-2">
                <Award className="h-4 w-4 shrink-0 text-primary translate-y-0.5" />
                <span className="transition-colors duration-200 group-hover:text-primary">{cert.title}</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-24 pt-8 border-t border-border animate-in fade-in duration-500 delay-300">
        <p className="text-sm text-muted-foreground">
          Built with{" "}
          <Link href="https://nextjs.org" className="text-foreground hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline">
            Next.js
          </Link>{" "}
          and{" "}
          <Link href="https://tailwindcss.com" className="text-foreground hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline">
            Tailwind CSS
          </Link>
          .
        </p>
      </footer>
    </section>
  )
}
