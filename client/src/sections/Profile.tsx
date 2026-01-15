import { motion } from 'framer-motion'

type TimelineItem = {
  period: string
  title: string
  subtitle?: string
  description?: string
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const education: TimelineItem[] = [
  {
    period: '20XX.03 – 20XX.02',
    title: '○○대학교',
    subtitle: '컴퓨터공학과 / AI 전공',
    description: '머신러닝, 딥러닝, 알고리즘, 분산시스템, 데이터베이스 등 이수',
  },
]

const activities: TimelineItem[] = [
  {
    period: '20XX.03 – 20XX.12',
    title: 'AI/ML 연구 동아리',
    subtitle: '연구 및 프로젝트 리드',
    description: '딥러닝 논문 스터디 및 Kaggle 대회 참여, 팀 프로젝트 기획·리드',
  },
]

const awards: TimelineItem[] = [
  {
    period: '20XX',
    title: '○○ 공모전 / 해커톤',
    subtitle: '△△상 수상',
    description: '실시간 데이터 기반 AI 서비스 기획 및 프로토타입 개발',
  },
]

const certificates: TimelineItem[] = [
  {
    period: '20XX',
    title: '정보처리기사',
  },
  {
    period: '20XX',
    title: '관련 클라우드 / 데이터 / AI 자격증',
  },
]

function TimelineColumn({
  title,
  items,
}: {
  title: string
  items: TimelineItem[]
}) {
  return (
    <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
      <h3 className="text-sm font-semibold tracking-tight text-slate-50">{title}</h3>
      <ol className="space-y-4 border-l border-slate-800 pl-3 text-xs text-slate-300">
        {items.map((item) => (
          <li key={`${title}-${item.title}-${item.period}`} className="space-y-1">
            <div className="relative mb-1">
              <span className="absolute -left-4 top-1.5 h-2 w-2 rounded-full bg-sky-400" />
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                {item.period}
              </p>
            </div>
            <p className="text-xs font-medium text-slate-50">{item.title}</p>
            {item.subtitle && (
              <p className="text-[11px] text-slate-300">{item.subtitle}</p>
            )}
            {item.description && (
              <p className="text-[11px] leading-relaxed text-slate-400">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export function Profile() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="space-y-6"
    >
      <header className="space-y-2">
        <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
          Profile
        </h2>
        <p className="max-w-2xl text-xs text-slate-400 sm:text-sm">
          학력, 대외활동, 수상, 자격증 등 커리어의 흐름을 한 눈에 볼 수 있도록 정리했습니다.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <TimelineColumn title="Education" items={education} />
        <TimelineColumn title="Organization Activities" items={activities} />
        <TimelineColumn title="Awards" items={awards} />
        <TimelineColumn title="Certificates" items={certificates} />
      </div>
    </motion.section>
  )
}

