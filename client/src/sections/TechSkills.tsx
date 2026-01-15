import { motion } from 'framer-motion'

type Skill = {
  name: string
  category: 'Language' | 'Frontend' | 'Backend' | 'AI / ML' | 'DevOps & Cloud' | 'Tools'
}

const skills: Skill[] = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Redis', category: 'Backend' },
  { name: 'PyTorch', category: 'AI / ML' },
  { name: 'TensorFlow', category: 'AI / ML' },
  { name: 'scikit-learn', category: 'AI / ML' },
  { name: 'MLOps (MLflow, Docker)', category: 'AI / ML' },
  { name: 'AWS / GCP', category: 'DevOps & Cloud' },
  { name: 'Docker', category: 'DevOps & Cloud' },
  { name: 'Git / GitHub', category: 'Tools' },
  { name: 'Jira / Notion', category: 'Tools' },
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
                    className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-sm shadow-slate-900/60"
                  >
                    <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                    {skill.name}
                  </span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

