"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const certifications = [
  {
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    date: "September 2023",
    link: "#",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "CISCO",
    date: "October 2024",
    link: "#",
  },
  {
    title: "Red Hat OpenShift I: Containers & Kubernetes (DO180)",
    issuer: "Red Hat",
    date: "July 2024",
    link: "#",
  },
  {
    title: "Hackerrank Problem Solving (Basic)",
    issuer: "Hackerrank",
    date: "November 2024",
    link: "#",
  },
  {
    title: "Hackerrank Python (Basic)",
    issuer: "Hackerrank",
    date: "November 2024",
    link: "#",
  },
]

export function Certifications() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()

  return (
    <section
      ref={ref}
      id="certifications"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-8">
        Certifications
      </h2>

      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <Link
            key={index}
            href={cert.link}
            className="group flex items-start justify-between gap-4 rounded-lg p-4 -mx-4 transition-colors duration-300 hover:bg-secondary/50"
          >
            <div>
              <h3 className="font-medium leading-snug text-foreground inline-flex items-baseline gap-1">
                <span className="transition-colors duration-200 group-hover:text-primary">{cert.title}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          </Link>
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
          . Deployed on{" "}
          <Link href="https://vercel.com" className="text-foreground hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline">
            Vercel
          </Link>
          .
        </p>
      </footer>
    </section>
  )
}
