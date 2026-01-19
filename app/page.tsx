import { Header } from "@/components/cv/header"
import { About } from "@/components/cv/about"
import { Experience } from "@/components/cv/experience"
import { Education } from "@/components/cv/education"
import { Projects } from "@/components/cv/projects"
import { Skills } from "@/components/cv/skills"
import { Certifications } from "@/components/cv/certifications"
import { Navigation } from "@/components/cv/navigation"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
          {/* Left Column - Fixed on desktop */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Header />
            <Navigation />
          </aside>

          {/* Right Column - Scrollable content */}
          <main className="space-y-16 lg:space-y-24">
            <About />
            <Experience />
            <Education />
            <Projects />
            <Skills />
            <Certifications />
          </main>
        </div>
      </div>
    </div>
  )
}
