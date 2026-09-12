"use client"

import { useState, useEffect } from "react"
import { useLocale } from "@/lib/locale"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")
  const { data, locale } = useLocale()
  const navItems = data.nav

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
        rootMargin: "-10% 0px -60% 0px",
      }
    )

    for (const item of navItems) {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [navItems])

  return (
    <nav className="mt-8 overflow-x-auto border-y py-3 lg:border-b-0 lg:py-5" aria-label={locale === "id" ? "Navigasi bagian" : "On this page"}>
      <ul className="flex w-max gap-1 lg:w-auto lg:flex-col">
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className="animate-in fade-in slide-in-from-left-2 duration-300"
            style={{ animationDelay: `${600 + index * 50}ms` }}
          >
            <a
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              className={`group flex min-h-10 items-center gap-3 rounded-lg px-3 text-xs font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <span className="hidden font-mono text-[10px] opacity-60 lg:inline" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

    </nav>
  )
}
