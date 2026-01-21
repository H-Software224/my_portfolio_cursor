import { motion } from 'framer-motion'
import { useState } from 'react'

type Skill = {
  name: string
  category: 'Programming Language' | 'Web Development' | 'App Development' | 'Database Management' | 'Graph Framework' | 'Version Control' | 'Cloud Framework'
  logo?: string
}

function SkillBadge({ skill }: { skill: Skill }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <span className="group/skill inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 shadow-sm shadow-slate-900/60 transition hover:border-sky-500/50 hover:bg-slate-800/80">
      {skill.logo && !imageError ? (
        <div className="relative h-4 w-4 flex-shrink-0">
          <img
            src={skill.logo}
            alt={skill.name}
            className={`h-4 w-4 object-contain opacity-70 transition-opacity group-hover/skill:opacity-100 ${
              imageLoaded ? 'opacity-70' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true)
              setImageLoaded(false)
            }}
          />
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-2 w-2 animate-pulse rounded-full bg-slate-600" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20">
          <span className="text-[8px] font-semibold text-sky-300">
            {skill.name.charAt(0).toUpperCase()}
          </span>
        </div>
      )}
      <span>{skill.name}</span>
    </span>
  )
}

const skills: Skill[] = [
  { name: 'Python', category: 'Programming Language', logo: '/images/skills/python.png' },
  { name: 'SQL', category: 'Programming Language', logo: '/images/skills/sql.jpg' },
  { name: 'JavaScript', category: 'Programming Language', logo: '/images/skills/javascript.png' },
  { name: 'C++', category: 'Programming Language', logo: '/images/skills/cpp.png' },
  { name: 'Flutter', category: 'Programming Language', logo: '/images/skills/flutter.png' },
  { name: 'Kotlin', category: 'Programming Language', logo: '/images/skills/kotlin.png' },
  { name: 'Streamlit', category: 'Web Development', logo: '/images/skills/streamlit.png' },
  { name: 'React', category: 'Web Development', logo: '/images/skills/react.png' },
  { name: 'Kotlin', category: 'App Development', logo: '/images/skills/kotlin.png' },
  { name: 'Flutter', category: 'App Development', logo: '/images/skills/flutter.png' },
  { name: 'Node.js', category: 'Database Management', logo: '/images/skills/nodejs.png' },
  { name: 'MySQL', category: 'Database Management', logo: '/images/skills/mysql.png' },
  { name: 'Figma', category: 'Graph Framework', logo: '/images/skills/figma.png' },
  { name: 'Git', category: 'Version Control', logo: '/images/skills/git.png' },
  { name: 'AWS', category: 'Cloud Framework', logo: '/images/skills/aws.png' },
  { name: 'Docker', category: 'Cloud Framework', logo: '/images/skills/docker.png' },
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
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

