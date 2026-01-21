"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const education = [
  {
    period: "2021 — 2025",
    institution: "Petra Christian University",
    degree: "Bachelor of Computer Science",
    gpa: "GPA 3.15./4.00",
    location: "Surabaya, Indonesia",
  },
  {
    period: "2019 — 2021",
    institution: "Bopkri 1 Senior High School Yogyakarta",
    degree: "Graduate of Social Sciences",
    gpa: null,
    location: "Yogyakarta, Indonesia",
  },
]

export function Education() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()

  return (
    <section
      ref={ref}
      id="education"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-8">
        Education
      </h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group relative grid grid-cols-1 gap-4 sm:grid-cols-[140px_1fr] rounded-lg p-4 -mx-4 transition-colors duration-300 hover:bg-secondary/50"
          >
            <div className="text-xs text-muted-foreground pt-1">
              {edu.period}
            </div>

            <div>
              <h3 className="font-medium leading-snug text-foreground">
                {edu.institution}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {edu.degree}
              </p>
              {edu.gpa && (
                <p className="text-sm text-muted-foreground">
                  {edu.gpa}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
