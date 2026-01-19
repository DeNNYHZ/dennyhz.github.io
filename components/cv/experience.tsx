"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const experiences = [
  {
    period: "Sep 2024 — Jan 2025",
    title: "Backend Developer Intern",
    company: "Technopartner.ID",
    location: "Yogyakarta, Indonesia",
    description: [
      "Worked on API integration for Android/iOS apps and web solutions.",
      "Collaborated with cross-functional teams to ensure seamless API functionality and performance.",
      "Contributed to API maintenance and API development for multiple projects.",
    ],
    skills: ["API Integration", "Backend Development", "Cross-functional Collaboration"],
    link: "#",
  },
  {
    period: "May 2023 — Jun 2023",
    title: "Programming Tutor",
    company: "Odd Semester Programming Tutorial",
    location: "Surabaya, Indonesia",
    description: [
      "Responsible to guide and support junior students in solving programming challenges in Java and Python.",
      "Offering one-on-one assistance to help students strengthen their coding skills.",
    ],
    skills: ["Java", "Python", "Mentoring"],
    link: "#",
  },
  {
    period: "Nov 2022",
    title: "Member of HIMA Gaming Division",
    company: "PCU ESPORTS CHALLENGE",
    location: "Surabaya, Indonesia",
    description: [
      "Created and drafted the official rule book for the tournament, ensuring clarity and fairness in competition guidelines.",
      "Developed and organized the tournament brackets, efficiently managing the progression of matches.",
      "Served as a judge, evaluating gameplay and ensuring adherence to the established rules.",
    ],
    skills: ["Event Management", "Documentation", "Leadership"],
    link: "#",
  },
  {
    period: "Aug 2022",
    title: "Programming Tutor",
    company: "Community Service Learning In Orphanages",
    location: "Surabaya, Indonesia",
    description: [
      "Educate orphans to the basic usage of laptops and its essential tools.",
      "Giving knowledge to the orphans on basic coding using Scratch application.",
      "Encourage orphans to take interests in technological advancements.",
    ],
    skills: ["Teaching", "Scratch", "Community Service"],
    link: "#",
  },
]

export function Experience() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>()

  return (
    <section
      ref={ref}
      id="experience"
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-foreground mb-8">
        Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative grid grid-cols-1 gap-4 sm:grid-cols-[140px_1fr] rounded-lg p-4 -mx-4 transition-colors duration-300 hover:bg-secondary/50"
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
            }}
          >
            <div className="text-xs text-muted-foreground pt-1">
              {exp.period}
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-medium leading-snug text-foreground">
                  <Link
                    href={exp.link}
                    className="inline-flex items-baseline gap-1 group/link"
                  >
                    <span className="transition-colors duration-200 group-hover/link:text-primary">
                      {exp.title} · {exp.company}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">{exp.location}</p>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-transform duration-200 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
