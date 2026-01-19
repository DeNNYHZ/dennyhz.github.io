"use client"

import { useState, useEffect } from "react"

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    )

    for (const item of navItems) {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="mt-12 hidden lg:block animate-in fade-in slide-in-from-left-4 duration-500 delay-500" aria-label="In page navigation">
      <ul className="space-y-3">
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className="animate-in fade-in slide-in-from-left-2 duration-300"
            style={{ animationDelay: `${600 + index * 50}ms` }}
          >
            <button
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center gap-3 text-xs uppercase tracking-widest transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`h-px transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-12 bg-foreground"
                    : "w-6 bg-muted-foreground group-hover:w-12 group-hover:bg-foreground"
                }`}
              />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-2 animate-in fade-in duration-500 delay-1000">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-xs text-muted-foreground">Open to work</span>
      </div>
    </nav>
  )
}
