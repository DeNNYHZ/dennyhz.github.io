"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

export function About() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()

  return (
    <section
      ref={ref}
      id="about"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-6">
        About
      </h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Enthusiastic Computer Science fresh graduate with a solid foundation in{" "}
          <span className="text-foreground font-medium">programming</span> and{" "}
          <span className="text-foreground font-medium">problem-solving</span>.
          Experienced in building backend APIs and web applications through hands-on
          academic and personal projects.
        </p>
        <p>
          Currently focused on building scalable APIs with{" "}
          <span className="text-foreground font-medium">Go</span>,{" "}
          <span className="text-foreground font-medium">PostgreSQL</span>, and{" "}
          <span className="text-foreground font-medium">MongoDB</span>, while exploring
          fullstack development with{" "}
          <span className="text-foreground font-medium">Next.js</span> and{" "}
          <span className="text-foreground font-medium">Flutter</span>.
        </p>
        <p>
          A fast learner and collaborative team player, ready to contribute to real-world
          software projects.
        </p>
      </div>
    </section>
  )
}
