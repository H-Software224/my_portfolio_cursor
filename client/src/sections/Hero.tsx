import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 24 },
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
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

const cards = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + index * 0.05,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const values = [
  { title: 'Impact-driven', description: '비즈니스 임팩트를 만드는 AI/소프트웨어를 설계하고 제품화합니다.' },
  { title: 'Engineering Rigor', description: '테스트 가능한 코드와 재현 가능한 실험을 중시합니다.' },
  { title: 'User-centered', description: '사용자 문제 정의에서부터 솔루션까지의 전 과정을 책임집니다.' },
  { title: 'Data-informed', description: '데이터 기반 의사결정과 A/B 테스트를 선호합니다.' },
  { title: 'Collaboration', description: '디자이너, PM, 엔지니어와의 협업을 즐깁니다.' },
  { title: 'Continuous Learning', description: '새로운 기술을 빠르게 학습하고 실무에 적용합니다.' },
]

export function Hero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="space-y-10"
    >
      <motion.div className="space-y-4">
        <motion.p
          variants={headerItem}
          className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400"
        >
          AI & Software Engineer
        </motion.p>
        <motion.h1
          variants={headerItem}
          className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl"
        >
          안녕하세요, <span className="text-sky-400">AI/Software Engineer</span> 로 성장하고 있는
          <br className="hidden sm:block" /> 포트폴리오 주인장입니다.
        </motion.h1>
        <motion.div
          variants={headerItem}
          className="max-w-2xl space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base"
        >
          <p>데이터와 알고리즘, 그리고 제품 개발을 연결하는 엔지니어를 지향합니다.</p>
          <p>
            머신러닝/딥러닝 기반의 AI 시스템과 웹 서비스를 설계·구현하며, 사용자 경험과 코드 품질을 모두
            중요하게 생각합니다.
          </p>
          <p>협업과 커뮤니케이션을 통해 팀 전체의 생산성을 높이는 역할을 하고 싶습니다.</p>
        </motion.div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <motion.article
            key={value.title}
            variants={cards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            className="group rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-4 shadow-[0_0_0_1px_rgba(15,23,42,0.5)] transition hover:border-sky-500/80 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]"
          >
            <h3 className="mb-2 text-sm font-semibold tracking-tight text-slate-50">
              {value.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-300">{value.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}

