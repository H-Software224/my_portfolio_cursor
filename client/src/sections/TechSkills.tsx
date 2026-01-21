import { motion } from 'framer-motion'

type Skill = {
  name: string
  category: 'Programming Language' | 'Web Development' | 'App Development' | 'Database Management' | 'Graph Framework' | 'Version Control' | 'Cloud Framework'
}

const skills: Skill[] = [
  { name: 'Python', category: 'Programming Language' },
  { name: 'SQL', category: 'Programming Language' },
  { name: 'JavaScript', category: 'Programming Language' },
  { name: 'C++', category: 'Programming Language' },
  { name: 'HTML/CSS', category: 'Programming Language' },
  { name: 'Dart/Flutter', category: 'Programming Language' },
  { name: 'Kotlin', category: 'Programming Language' },
  { name: 'Streamlit', category: 'Web Development' },
  { name: 'React', category: 'Web Development' },
  { name: 'Kotlin', category: 'App Development' },
  { name: 'Dart/Flutter', category: 'App Development' },
  { name: 'Node.js', category: 'Database Management' },
  { name: 'MySQL', category: 'Database Management' },
  { name: 'Figma', category: 'Graph Framework' },
  { name: 'Git', category: 'Version Control' },
  { name: 'AWS', category: 'Cloud Framework' },
  { name: 'Docker', category: 'Cloud Framework' },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const headerItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

export function TechSkills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)))

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="space-y-6"
    >
      <motion.header className="space-y-2">
        <motion.h2
          variants={headerItem}
          className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
        >
          Tech Skills
        </motion.h2>
        <motion.p
          variants={headerItem}
          className="max-w-2xl text-xs leading-relaxed text-slate-400 sm:text-sm"
        >
          현재 사용 가능한 기술 스택입니다. 실제 프로젝트에서 사용해 본 경험 위주로 정리했습니다.
        </motion.p>
      </motion.header>

      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="group/skill inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 shadow-sm shadow-slate-900/60 transition hover:border-sky-500/50 hover:bg-slate-800/80"
                  >
                    <img
                      src={`/images/skills/${skill.name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')}.svg`}
                      alt={skill.name}
                      className="h-3.5 w-3.5 flex-shrink-0 opacity-70 transition-opacity group-hover/skill:opacity-100"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    <span>{skill.name}</span>
                  </span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

