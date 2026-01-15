import { Hero } from './sections/Hero'
import { Profile } from './sections/Profile'
import { TechSkills } from './sections/TechSkills'
import { Projects } from './sections/Projects'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold tracking-tight text-slate-100">
            AI & Software Engineer Portfolio
          </div>
          <div className="flex gap-4 text-xs text-slate-300">
            <a href="#hero" className="hover:text-sky-400">
              Hero
            </a>
            <a href="#profile" className="hover:text-sky-400">
              Profile
            </a>
            <a href="#skills" className="hover:text-sky-400">
              Tech Skills
            </a>
            <a href="#projects" className="hover:text-sky-400">
              Projects
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-20 pt-10 space-y-24">
        <section id="hero">
          <Hero />
        </section>
        <section id="profile">
          <Profile />
        </section>
        <section id="skills">
          <TechSkills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
    </div>
  )
}

export default App
