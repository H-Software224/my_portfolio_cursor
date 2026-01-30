import { motion } from 'framer-motion'

type TimelineItem = {
  period: string
  title: string
  subtitle?: string
  description?: string
  logo?: string
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
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
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

const education: TimelineItem[] = [
  {
    period: '2020.03 – 2026.02',
    title: '경희대학교',
    subtitle: '소프트웨어융합대학 소프트웨어융합학과 데이터사이언스트랙 전공',
    description: '1. 소프트웨어융합학과의 데이터 사이언스 트랙으로 캡스톤디자인은 한 학기 동안 우리나라에 존재하는 사회 문제들을 분석하며 차별점에 대해 찾는 것이 피땀흐르는 노력이라고 느꼈습니다. 2. 졸업논문을 캡스톤디자인을 기반으로 서론 -> 관련 연구 -> 본론 -> 결론 형식으로 탐구하는 연구를 명확하게 파악',
    logo: '/images/profile/kyunghee_university.jpg',
  },
  {
    period: '2025.07 – 2025.08',
    title: '데이터리안',
    subtitle: 'SQL 데이터 분석 캠프',
    description: '개요: SQL에 대하여 실무의 기본 및 활용력을 기를 수 있는 데이터 분석 부트캠프 내용:  고객 신용 등급 분석, 리텐션 분석: ARRR기법에 대해서 사용자획득, GA4 커널 분석으로 사용자가 방문한 횟수로 분석 결과: RFM분석으로 3가지->6가지 세분화 유형으로 더욱 세부적으로 멤버십 혜택을 누리도록 제공하며 더욱 넓은 기회 제공.',
    logo: '/images/profile/datarian.png',
  },
  {
    period: '2025.01 – 2025.02',
    title: 'LG AI Research',
    subtitle: 'LG Aimers 6기',
    description: '개요: LG에서의 사회 문제들을 연구 내용:  주제: 난임 임신 확률 예측 AI',
    logo: '/images/profile/lg-color.png',
  },
  {
    period: '2024.01 – 2024.02',
    title: 'LG AI Research',
    subtitle: 'LG Aimers 4기',
    description: '개요: LG에서의 사회 문제들을 연구 내용:  주제: MQL를 이용하여 B2B 고객 이탈 예측 모델 개발',
    logo: '/images/profile/lg-color.png',
  }
]

const activities: TimelineItem[] = [
  {
    period: '2025.03 – 2025.12',
    title: 'Amazon Cloud Club',
    subtitle: 'AWS 클라우드 스터디 및 프로젝트 활동 동아리',
    description: '역할: 동아리 부원, 미니 프로젝트 팀장 수행 과정:  AWS Console Infra를 직접 구축을 위한 이론 수업/실습, 매주 1회마다 AWS Console을 이용하여 직접 아키텍처를 구현. 성과:  캡스톤디자인에서 AWS EC2에 있는 인스턴스로 서버들을 개설하여 AWS RDS 중 MySQL을 이용하여 시스템을 개발에 완성 느낀 점: 완성물의 파이프라인 아키텍처들을 쉽게 빌드할 수 있었으며, 절대적으로 클라우드에서 필요하다고 인식함.',
    logo: '/images/profile/aws_cloud_club.svg',
  },
  {
    period: '2024.03 – 2024.12',
    title: 'KHUDA(KHU Data)',
    subtitle: '경희대학교 데이터 분석 동아리/학회',
    description: '개요: 데이터분석에 관련된 동아리를 가입해 본적이 없어서 한 번 가입해보고 싶어서 데이터 분석 동아리 내용: 데이터분석 전문가의 강연을 통해서 트랙별 실무 양성 데이터 분석에 대하여 심화세션, 토이 프로젝트 등 이러한 데이터 분석 프로젝트를 캐리해야 하겠다는 마음을 임하여 활동을 하였습니다. 스터디, 커뮤니티에 참여하여 데이터에 대한 지식을 쌓아가고, 심화 세션을 통해서 데이터 비즈니스, 추천 시스템 분야를 심화 프로젝트에서 데이터 전처리에 대한 활동을 한 동아리입니다. 성과: 동아리에서 결국에 팀 협업 및 친목활동을 즐기면서 심화 세션 및 스터디 세션을 직접 팀장으로서 이끌거나 팀원으로서 주어진 일을 수행하면서 데이터 비즈니스, 추천시스템, 경영정보 시각화(Power BI, Tableau)와 같은 수업들을 배우고 경험을 하였습니다.',
    logo: '/images/profile/khuda.png',
  },
  {
    period: '2025.09 – 2026.02',
    title: 'BDAI 빅데이터분석학회',
    subtitle: '빅데이터 분석 및 연구회',
    description: '개요: 인공지능에관련된 동아리를 가입해 본적이 없어서 한 번 가입해보고 싶어서 AI 동아리 내용: AI 전문가의 강연을 통해서 트랙별 실무 양성 인공지능에 대하여 심화세션, 토이 프로젝트 등 이러한 인공지능 프로젝트를 캐리해야 하겠다는 마음을 임하여 활동을 하였습니다. 스터디, 커뮤니티에 참여하여 인공지능에 대한 지식을 쌓아가고, 심화 세션을 통해서 컴퓨터 비전, 자연어 처리 분야를 심화 프로젝트에서 데이터 전처리에 대한 활동을 한 동아리입니다. 시계열 데이터 분석을 Gradient Boost을 이용하여 전류, 전압, 저항, 유효 전류, 무효 전류를 이용하여  SMAPE로 0.21% 달성 느낀 점: 업무와 생각하는 가치관에 비교하며 더욱 사람들과 소통하며 참고해야 할 사항들을 생각하고 자기 성찰을 하게 된 계기 마련',
    logo: '/images/profile/bdai.jpg',
  },
]

const awards: TimelineItem[] = [
  {
    period: '2025',
    title: 'KCC(한국컴퓨터종합학술대회) 2025 학부생 논문',
    subtitle: '최우수상 수상',
    description: 'KCC에서 컴퓨터 분야 중 HCI(인간-컴퓨터 상호작용)에서 논문 연구 및 발표로 데이터분석캡스톤디자인 프로젝트 ‘강연자의 발표 전공용어 교정 서비스’로 문제 및 가설 설정 및 연구 방향을 준비한 결과 KCC 2025에서 학부생 최우수상 수여함',
  },
  {
    period: '2024',
    title: '2024년 제1화 경희대학교 소프트웨어융합학과 컨퍼런스',
    subtitle: '우수상 수상',
    description: '캡스톤디자인 프로젝트;TermCorrector: Speech-to-Text(STT)에서의 영문 용어 교정 서비스라는 프로젝트를 진행. 기존 STT의 학습한 것과 Python library 중 NLP 기술을 이용하여  fastText library를 이용하여 강의 자료 파일에 있는 키워드 명사, 형용사, 고유 명사를 추출하여서 전공 분야의 인식 학습률을 높여서 제작한 웹 서비스 프로젝트를 개발',
  },
  {
    period: '2025',
    title: '경희대학교 제1회 세모톤(디자인/소프트웨어/공학 분야)',
    subtitle: '인기상 수상',
    description: '해커톤 주제로 "사람들의 협동"을 주제로 삼았습니다. 이 중 세부 분야로 경희대학교 학교 학과 건물에 대하여 방문 및 미션 퀘스트 수행와 같이 게임화를 이용하여 학과 건물에 대해 탐방하는 앱을 개발하였습니다. 이를 통해 프로젝트 인기 투표 결과 1위을 함으로서 인기상을 수여',
  },
  {
    period: '2020',
    title: '경희대학교 Khuthon 2020',
    subtitle: '격려상 수상',
    description: '주제로 텔레그램을 통해서 채팅을 이용하여서 사용자의 챗봇을 통해서 질의 응답 및 답변을 하여서 해커톤 프로젝트를 산출하였습니다. 이를 통해서 경희대학교 쿠러그 동아리에서 열린 Khuthon(해커톤)으로 격려상을 수여',
  },
  {
    period: '2025',
    title: '경희대학교 가을 프로그래밍 경시대회(ICPC 예선)',
    subtitle: '장려상 수상',
    description: 'ICPC 예선에서 3인을 한팀으로 하여 여러 문제를 코딩테스트와 같이 프로그래밍 스킬을 이용하여 알고리즘 자료구조를 활용하여 문제 해결 및 수행으로 리더보드로 순위 합산 장려상 수여',
  }
]

const certificates: TimelineItem[] = [
  {
    period: '2025',
    title: '소프트웨어 역량시험(TOPCIT) 3수준',
    logo: '/images/profile/topcit.svg',
  },
  {
    period: '2024',
    title: 'SQL 개발자(SQLD)', 
    logo: '/images/profile/sqld.png',
  },
  {
    period: '2025',
    title: '데이터분석 준전문가(ADsP)',
    logo: '/images/profile/adsp.png',
  },
  {
    period: '2022',
    title: '컴퓨터활용능력 1급',
    logo: '/images/profile/korcham.png',
  },
  {
    period: '2010',
    title: '워드프로세서 2급',
    logo: '/images/profile/korcham.png',
  },
  {
    period: '2025',
    title: 'OPIc IL',
    logo: '/images/profile/opic.png',
  },
  {
    period: '2025',
    title: 'TOEIC 570점',
    logo: '/images/profile/toeic.png',
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
    <motion.div
      className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="text-sm font-semibold tracking-tight text-slate-50">{title}</h3>
      <ol className="space-y-4 border-l border-slate-800 pl-3 text-xs text-slate-300">
        {items.map((item) => (
          <li key={`${title}-${item.title}-${item.period}`} className="space-y-2">
            <div className="flex items-start gap-3">
              {item.logo && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50"
                >
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </motion.div>
              )}
              <div className="flex-1 space-y-1">
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
              </div>
            </div>
          </li>
        ))}
      </ol>
    </motion.div>
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
      <motion.header className="space-y-2">
        <motion.h2
          variants={headerItem}
          className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
        >
          Profile
        </motion.h2>
        <motion.p
          variants={headerItem}
          className="max-w-2xl text-xs leading-relaxed text-slate-400 sm:text-sm"
        >
          학력, 대외활동, 수상, 자격증 등 커리어의 흐름을 한 눈에 볼 수 있도록 정리했습니다.
        </motion.p>
      </motion.header>

      <div className="grid gap-4 md:grid-cols-2">
        <TimelineColumn title="Education" items={education} />
        <TimelineColumn title="Organization Activities" items={activities} />
        <TimelineColumn title="Awards" items={awards} />
        <TimelineColumn title="Certificates" items={certificates} />
      </div>
    </motion.section>
  )
}

