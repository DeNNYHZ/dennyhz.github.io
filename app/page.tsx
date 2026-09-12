import { Header } from "@/components/cv/header"
import { About } from "@/components/cv/about"
import { Experience } from "@/components/cv/experience"
import { Projects } from "@/components/cv/projects"
import { Thesis } from "@/components/cv/thesis"
import { Organizations } from "@/components/cv/organizations"
import { Skills } from "@/components/cv/skills"
import { Education } from "@/components/cv/education"
import { Certifications } from "@/components/cv/certifications"
import { Navigation } from "@/components/cv/navigation"

export default function CVPage() {
  return (
    <div className="cv-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
          {/* Left Column - Fixed on desktop */}
          <aside className="min-w-0 lg:sticky lg:top-8 lg:self-start">
            <Header />
            <Navigation />
          </aside>

          {/* Right Column - Scrollable content */}
          <main id="content" className="cv-content min-w-0 space-y-14 lg:space-y-20">
            <About />
            <Experience />
            <Projects />
            <Thesis />
            <Organizations />
            <Skills />
            <Education />
            <Certifications />
          </main>
        </div>
      </div>
    </div>
  )
}
