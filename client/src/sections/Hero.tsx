import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
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
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const cards = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const values = [
  { title: '기획(Planning)', description: '어떤 대상에 대해 그 대상의 변화를 가져 올 목적을 성취하는데 가장 적합한 행동을 설계'},
  { title: '문제 해결(Problem Solving)', description: '다양한 문제를 이용하여 직면하고, 문제의 내용을 꼼꼼하고 세밀하게 분석하여 오류 및 문제를 파악' },
  { title: '추진(Drive)', description: '문제 해결하기 위하여 기술적으로 새롭거나 한 번도 해 본적이 없어도 시도' },
  { title: '끈기(Tenacity)', description: '자신의 역량을 개발하고 새로운 기술을 습득하는 데에 지속적으로 투자' },
  { title: '열정(Passion)', description: '한 가지의 문제에 대하여 생각하며, 앞으로 이 문제가 똑같은 경우 발생하였을 때 계속 도전' },
  { title: '소통(Communication)', description: '새로운 기술을 빠르게 학습하고 계속 하고자 하는 영역의 폭을 넓히기 위해 시도' },
  { title: '개선(Improvement)', description: '오늘 문제에 대하여 나는 무엇을 해왔으며, 해결하는 것을 어떠한 방향으로 잡았는지 다시 되돌아보며피드백 수행'},
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
      <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:gap-12">
        <motion.div className="space-y-4">
          <motion.p
            variants={headerItem}
            className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400"
          >
            AI / Software Engineer
          </motion.p>
          <motion.h1
            variants={headerItem}
            className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl"
          >
            안녕하세요, 한 가지 문제를 과정을 거쳐 주요한 것을 해결하려고 시도하는
            <br className="hidden sm:block" /> <span className="text-sky-400">한 주 상</span>입니다.
          </motion.h1>
          <motion.div
            variants={headerItem}
            className="max-w-2xl space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base"
          >
            <p>언제나 도전적이며 새로운 것들을 두려워하지 않고 계속 여러 방법들을 해볼려고 하는 사람입니다.</p>
            <p>
              머신러닝/딥러닝 기반의 AI 시스템과 웹 서비스를 설계·구현하고, 그 다음 테스트로 에러가 발생하면 에러를 무시하지 않고 
            </p>
            <p>협업과 커뮤니케이션을 통해 팀 전체의 생산성을 높이는 역할을 하고 싶습니다.</p>
            <p>계속 새로운 AI와 소프트웨어의 문화를 두려워하지 않고 계속 성공과 실패를 반복하며 제 능력을 갈고 닦으며 성장하고 싶습니다.</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={headerItem}
          className="flex items-start justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            >
              <img
                src="/images/hero/profile.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
                onError={(e) => {
                  // 이미지가 없을 경우 placeholder 표시
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `
                      <div class="flex h-full w-full items-center justify-center text-slate-400">
                        <div class="text-center">
                          <svg class="mx-auto h-16 w-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                          <p class="text-xs">프로필 사진</p>
                        </div>
                      </div>
                    `
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <motion.article
            key={value.title}
            variants={cards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.15 + index * 0.05,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
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

