import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

type Project = {
  name: string
  period: string
  role: string
  subtitle: string
  teamSize: string
  techStack: string[]
  description: string
  background: string
  problem: string
  process: string[]
  results: string[]
}

const projects: Project[] = [
  {
    name: 'AI 기반 ○○ 추천 서비스',
    period: '20XX.06 – 20XX.09',
    role: 'Full-stack / ML Engineer',
    subtitle: '개인화 추천 모델을 활용한 웹 서비스 구축',
    teamSize: '4명 (Backend 2, Frontend 1, ML 1)',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'PyTorch', 'Docker', 'AWS'],
    description:
      '사용자 행동 로그를 기반으로 한 추천 모델을 설계하고, 웹 서비스로 제품화한 프로젝트입니다. ' +
      'MLOps 파이프라인 설계 및 실시간 추론 API, 대시보드 구현까지 담당했습니다.',
    background:
      '서비스 내에서 유저 이탈률이 높게 나타나고 있었고, 개인화되지 않은 콘텐츠 노출이 주요 원인으로 분석되었습니다. ' +
      '데이터 팀에서는 로그 데이터는 충분하지만, 이를 서비스 레벨에서 활용하는 추천 시스템이 없다는 문제가 있었습니다.',
    problem:
      '1) 대용량 클릭 로그에서 실시간으로 특징을 추출해야 했고, 2) 모델 버전이 자주 변경되는 상황에서 안정적인 배포/롤백 전략이 필요했습니다. ' +
      '또한 3) 추천 결과를 검증하기 위한 A/B 테스트 환경을 함께 구축해야 했습니다.',
    process: [
      '로그 스키마 정의 및 ETL 파이프라인 설계: 기존 서버 로그를 분석해 이벤트 타입을 표준화하고, S3 + 데이터 웨어하우스로 적재 구조를 설계했습니다.',
      '추천 모델 탐색: Matrix Factorization, Neural CF, sequence-based 모델을 비교 실험하고, Cold-start 문제를 고려해 Hybrid 방식으로 방향을 결정했습니다.',
      '온라인 서빙 구조 설계: PyTorch 모델을 ONNX로 변환해 경량화하고, FastAPI 기반 추론 서버를 Docker로 컨테이너라이징하여 AWS ECS에 배포했습니다.',
      '피쳐 캐싱 및 지연시간 최적화: Redis 기반 피쳐 캐시를 도입해, 요청당 피쳐 조회/스코어링 시간을 300ms 이하로 줄였습니다.',
      'A/B 테스트 파이프라인 구축: 실험 그룹/컨트롤 그룹 트래픽 분리 및 지표 수집 대시보드를 구축해 일별 성과를 추적했습니다.',
    ],
    results: [
      '추천 영역 CTR(Click-through Rate)을 기존 대비 약 18% 개선했습니다.',
      '추천 영역을 통한 전환율(회원가입/결제 전환)을 약 7% 향상시켰습니다.',
      '모델 배포 자동화 파이프라인을 구축해, 신규 버전 롤아웃 시간을 1일에서 수시간 단위로 단축했습니다.',
      '로그 스키마 표준화로 다른 팀도 동일 로그 데이터를 재활용할 수 있는 기반을 마련했습니다.',
    ],
  },
  {
    name: '실시간 데이터 시각화 대시보드',
    period: '20XX.01 – 20XX.03',
    role: 'Frontend Engineer',
    subtitle: '운영 지표를 실시간으로 모니터링하는 내부용 대시보드',
    teamSize: '3명 (Frontend 1, Backend 2)',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'WebSocket', 'Chart 라이브러리'],
    description:
      'WebSocket 기반 실시간 데이터 스트림을 시각화하는 대시보드를 구현했습니다. ' +
      '반응형 UI와 다크 모드, 필터/검색 기능을 중심으로 사용자 경험을 개선했습니다.',
    background:
      '기존에는 운영 지표를 확인하기 위해 여러 SQL 쿼리와 정적 리포트를 각각 열어봐야 했습니다. ' +
      '실시간 장애 상황을 한 화면에서 빠르게 파악할 수 있는 도구가 없어서 대응 시간이 길어지는 문제가 있었습니다.',
    problem:
      '다양한 형태의 실시간 메트릭(카운터, 게이지, 분포값 등)을 하나의 UI에서 일관되게 표현해야 했고, ' +
      '동시에 모바일/태블릿에서도 사용할 수 있도록 반응형 레이아웃을 설계해야 했습니다.',
    process: [
      '운영팀과 인터뷰를 진행해, 실제로 현장에서 자주 보는 지표와 우선순위를 정리했습니다.',
      'Card 기반 레이아웃과 중요도에 따른 시각적 계층 구조(색상/크기)를 정의했습니다.',
      'React + WebSocket을 이용해, 백엔드에서 push되는 메트릭을 구독하고, Recoil 기반 상태 관리로 여러 차트 컴포넌트에 안전하게 전달했습니다.',
      'Skeleton / Loading 상태와 오류 핸들링 UI를 설계해, 네트워크 이슈 상황에서도 사용자가 혼란스럽지 않도록 했습니다.',
    ],
    results: [
      '장애 탐지까지 걸리는 평균 시간이 기존 대비 약 30% 단축되었습니다.',
      '운영팀으로부터 “하루에 여러 창을 왔다 갔다 하던 수고가 줄어들었다”는 피드백을 받았습니다.',
      '기획 단계에서 정의한 핵심 메트릭 대부분에 대해 한 화면에서 모니터링이 가능해졌습니다.',
    ],
  },
  {
    name: 'ML 실험 관리 & 리포트 자동화 도구',
    period: '20XX.10 – 20XX.12',
    role: 'ML Engineer',
    subtitle: '실험 결과를 일관되게 기록하고 비교하는 내부용 웹 도구',
    teamSize: '2명 (ML Engineer 2)',
    techStack: ['Python', 'scikit-learn', 'MLflow', 'FastAPI', 'PostgreSQL'],
    description:
      '여러 실험 결과를 일관되게 관리하기 위한 내부용 도구를 개발했습니다. ' +
      'MLflow를 활용한 실험 트래킹과 FastAPI 기반 리포트 API를 제공했습니다.',
    background:
      '여러 실험을 병렬로 진행하면서, 각자 Jupyter Notebook에 결과를 남기다 보니 “어떤 세팅이 가장 좋았는지”를 ' +
      '정리하는 데 많은 시간이 들었습니다. 실험 메타데이터가 표준화되어 있지 않아 재현성도 떨어지는 상태였습니다.',
    problem:
      '각 실험의 하이퍼파라미터, 데이터 버전, 코드 커밋, 결과 지표를 한 번에 관리하고, 팀원이 쉽게 비교할 수 있는 인터페이스가 필요했습니다.',
    process: [
      '기존 실험 이력을 분석해 공통으로 관리해야 할 메타데이터 필드를 도출했습니다.',
      'MLflow Tracking 서버를 구축하고, 실험 실행 스크립트에 공통 로깅 유틸리티를 추가했습니다.',
      'FastAPI 기반 API 서버를 작성해, 특정 조건(모델 타입, 데이터 버전, 지표 상/하위 등)으로 실험을 필터링할 수 있도록 했습니다.',
      '간단한 웹 UI에서 실험 리스트/디테일을 확인하고, PDF 리포트로 내보낼 수 있는 기능을 구현했습니다.',
    ],
    results: [
      '실험 요약 리포트를 작성하는 시간이 평균 1~2일에서 수시간 이내로 단축되었습니다.',
      '새로운 팀원이 합류했을 때, 과거 실험 히스토리를 훨씬 빠르게 파악할 수 있었습니다.',
      '실험 메타데이터 표준화로 재현성 있는 실험 문화가 자리 잡는 데 기여했습니다.',
    ],
  },
]

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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + index * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeTab, setActiveTab] = useState<'process' | 'results'>('process')

  const closeModal = () => {
    setSelectedProject(null)
    setActiveTab('process')
  }

  return (
    <>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="space-y-6"
      >
        <header className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Projects
          </h2>
          <p className="max-w-2xl text-xs text-slate-400 sm:text-sm">
            실제로 설계·구현해 본 메인 프로젝트들입니다. 각 카드를 클릭하면 문제 정의부터 결과까지의
            상세 과정을 확인할 수 있습니다.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.button
              key={project.name}
              type="button"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={index}
              onClick={() => {
                setSelectedProject(project)
                setActiveTab('process')
              }}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-4 text-left shadow-[0_0_0_1px_rgba(15,23,42,0.5)] transition hover:border-sky-500/80 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-slate-50">
                      {project.name}
                    </h3>
                    <p className="text-[11px] text-slate-400">{project.period}</p>
                  </div>
                  <span className="rounded-full border border-slate-700 bg-slate-900/70 px-2 py-1 text-[10px] font-medium text-slate-200">
                    {project.role}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-slate-200 ring-1 ring-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              layout
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/95 shadow-xl shadow-slate-950/80"
              onClick={(event) => event.stopPropagation()}
            >
              <header className="border-b border-slate-800 px-5 py-4 sm:px-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold tracking-tight text-slate-50 sm:text-lg">
                      {selectedProject.name}
                    </h3>
                    <p className="text-xs text-slate-300 sm:text-[13px]">
                      {selectedProject.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2 text-[11px] text-slate-300">
                      <span className="flex items-center gap-1">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        기간 {selectedProject.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                        역할 {selectedProject.role}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
                        참여 인원 {selectedProject.teamSize}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-2 py-1 text-[11px] text-slate-300 hover:border-slate-500 hover:text-slate-100"
                  >
                    닫기
                  </button>
                </div>
              </header>

              <div className="flex flex-1 flex-col overflow-hidden px-5 py-4 sm:px-6 sm:py-5">
                <div className="grid flex-1 gap-4 md:grid-cols-[160px_minmax(0,1fr)] md:gap-6">
                  <aside className="space-y-4 border-b border-slate-800 pb-3 text-xs md:border-b-0 md:border-r md:pb-0 md:pr-4">
                    <div>
                      <h4 className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Background & Problem
                      </h4>
                      <p className="text-[11px] leading-relaxed text-slate-300">
                        {selectedProject.background}
                      </p>
                      <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div className="hidden md:block">
                      <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        View
                      </h4>
                      <div className="flex flex-col gap-1.5">
                        {(['process', 'results'] as const).map((tab) => {
                          const isActive = activeTab === tab
                          return (
                            <button
                              key={tab}
                              type="button"
                              onClick={() => setActiveTab(tab)}
                              className={`flex items-center justify-between rounded-lg px-3 py-2 text-[11px] font-medium transition ${
                                isActive
                                  ? 'bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/60'
                                  : 'text-slate-300 hover:bg-slate-900/80 hover:text-slate-50'
                              }`}
                            >
                              <span>
                                {tab === 'process' ? 'Process' : 'Results'}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </aside>

                  <section className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="mb-2 flex items-center justify-between md:hidden">
                      <div className="inline-flex gap-1 rounded-full bg-slate-900/80 p-1 text-[11px]">
                        {(['process', 'results'] as const).map((tab) => {
                          const isActive = activeTab === tab
                          return (
                            <button
                              key={tab}
                              type="button"
                              onClick={() => setActiveTab(tab)}
                              className={`rounded-full px-3 py-1 transition ${
                                isActive
                                  ? 'bg-sky-500 text-slate-950'
                                  : 'text-slate-300 hover:bg-slate-800'
                              }`}
                            >
                              {tab === 'process' ? 'Process' : 'Results'}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      {activeTab === 'process' ? (
                        <motion.div
                          key="process"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-3"
                        >
                          <h4 className="text-xs font-semibold text-slate-50">
                            문제 해결 Process
                          </h4>
                          <ol className="space-y-2 text-[11px] text-slate-300">
                            {selectedProject.process.map((step, index) => (
                              <li
                                key={step}
                                className="flex gap-2 rounded-lg bg-slate-900/80 p-2"
                              >
                                <span className="mt-[2px] inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-sky-500/20 text-[10px] font-semibold text-sky-300">
                                  {index + 1}
                                </span>
                                <p className="leading-relaxed">{step}</p>
                              </li>
                            ))}
                          </ol>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="results"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-3"
                        >
                          <h4 className="text-xs font-semibold text-slate-50">
                            Results & Insights
                          </h4>
                          <ul className="space-y-2 text-[11px] text-slate-300">
                            {selectedProject.results.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2 rounded-lg bg-slate-900/80 p-2"
                              >
                                <span className="mt-[3px] inline-flex h-2 w-2 flex-none rounded-full bg-emerald-400" />
                                <p className="leading-relaxed">{item}</p>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

