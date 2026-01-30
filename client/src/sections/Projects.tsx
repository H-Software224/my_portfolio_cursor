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
  thumbnail?: string
}

const projects: Project[] = [
  {
    name: '스마트팩토리 1시간마다 사용되는 전력량, 탄소 예측 분석',
    period: '2025.12 – 2026.01',
    role: 'ML Engineer/Data Scientist',
    subtitle: '시계열 스마트팩토리 예측 데이터 회귀 분석',
    teamSize: '4명 (PM 1, ML 2, Data Scientist 1)',
    techStack: ['Python'],
    description:
      '제4회 BDAI X ANIMATION 채용 데이터 분석 공모전 ',
    thumbnail: '/images/projects/smartfactory.png',
    background:
      '서비스 내에서 유저 이탈률이 높게 나타나고 있었고, 개인화되지 않은 콘텐츠 노출이 주요 원인으로 분석되었습니다. ' +
      '데이터 팀에서는 로그 데이터는 충분하지만, 이를 서비스 레벨에서 활용하는 추천 시스템이 없다는 문제가 있었습니다.',
    problem:
      '1) 대용량 클릭 로그에서 실시간으로 특징을 추출해야 했고, 2) 모델 버전이 자주 변경되는 상황에서 안정적인 배포/롤백 전략이 필요했습니다. ' +
      '또한 3) 추천 결과를 검증하기 위한 A/B 테스트 환경을 함께 구축해야 했습니다.',
    process: [
      '전력, 전류, 역률에 대해 R/S/T 상의 값, 유효 전류 그리고 무효전류들을 이용하여 시계열들을 5초 -> 1시간 간격으로 resampling을 하여 Gradient Boost Regressor 앙상블 회귀 모델을 이용.',
    ],
    results: [
      '시계열 1시간 주기에 따라 데이터적 요소를 예측하며 SMAPE로 0.21%달성하며 인사이트 도출',
    ],
  },
  {
    name: '강의 설명하는 내용을 올바른 전공용어 교정 서비스',
    period: '2024.09 – 2025.07',
    role: 'ML/Backend Engineer',
    subtitle: '학교 팀 캡스톤디자인 프로젝트, 강의자가 강연하면서 언급한 전공용어 교정 서비스',
    teamSize: '3명 (Data Analyst 2, ML/Fullstack Engineer 1)',
    techStack: ['Python', 'HTML/CSS', 'Flask', 'OpenAI'],
    description:
      '강의자의 설명을 한글-영문 유사도로 측정하여 전공 용어 교정을 돕는 웹 서비스 개발',
    thumbnail: '/images/projects/termcorrector.png',
    background:
      '학교 3학년 2학기에 데이터캡스톤디자인 과목을 이수해야 하였으며, 데이터적 관점을 되살려 기존에 없었던 것을 문제 정의의 방향으로 두어서 완성 산출물까지 만드려는 과정을 나아가기 위해 데이터캡스톤디자인 과목 주제로 선정하였습니다.',
    problem:
      '기존 STT 서비스에서 전문 용어로 말하는 음성을 일상적인 분야와 관련된 텍스트로 인식되는 문제 발생합니다.',
    process: [
      'Python flask와 linux 운영체제를 이용하여서 강의자가 설명하는 음성을 텍스트로 변환시킵니다.',
      '강의 자료에 해당하는 비정형 데이터 pdf를 이용하여 fastext를 이용하였습니다.',
      '유사한 발음 분류로 분석하여서 전공 용어를 교정하였습니다.',
      '코드 개발 및 실행을 하면서 코드 개발에 에러가 일어나게 되어 에러를 분석하게 되면서 해결할 때까지 연구를 하면서 에러를 고치기 위해서 유지보수를 하였습니다.',
    ],
    results: [
      '데이터 증강을 이용하여 학습하였을 때 올바르게 인식하는 정확도는 96%로 달성 및 수행하였습니다.',
      '구현 및 테스트를 하면서 수정하였을 때 올바르게 교정된 키워드(노란색)과 교정되지 않아도 유사한 발음과 매칭되는 키워드들을 강의자가 직접 선택하는 키워드(빨간색)으로 제공하였습니다.',
    ],
  },
  {
    name: '강의 수강과목에 대한 지식기반 질문 및 답변 서비스',
    period: '2025.07 – 2025.08',
    role: 'ML/Fullstack Engineer',
    subtitle: 'Streamlit과 OpenAI Langchain 기반의 RAG 지식기반 Q&A 서비스',
    teamSize: '1명 (ML/Fullstack Engineer 1)',
    techStack: ['Python', 'Streamlit', 'FastAPI', 'OpenAI', 'Langchain'],
    description:
      '강의 녹음에 포함한 전공 용어 자동으로 변환하는 서비스 - 경희대학교 Conference 우수상',
    thumbnail: '/images/projects/lecturebot.png',
    background:
      'Streamlit을 이용하여서 Langchain이라는 AI Agent을 이용하여서 활용하기 위해 책을 읽고나서 나도 AI Agent라는 챗봇을 만들어서 수강과목에 대한 질문 챗봇을 만들기로 하였습니다. 이참에 Langchain을 이용하여서 직접 Python을 활용하고 싶어서 지원하였습니다.',
    problem: '자신이 수강신청할 과목에 대해서 과목에 대하여 궁금한 내용을 강의계획서에 찾아본다고 하더라도 강의계획서의 내용의 양이 많아서 막상 수강하고 싶은 학생들이 궁금한 질문들만 발췌해서 물어보는 데에 다 기억을 못할 수도 있고 혼자 외우기가 까먹을 수도 있습니다.',
    process: [
      '강의 계획서를 이용하여 PDF 내용을 추출하여 Vector DB(Chroma DB)로 저장하였습니다.',
      '채팅 히스토리를 통해서 DB 저장 - 검색기 - History로 구축을 하였습니다.', 
      'Streamlit을 이용하여 웹에 대하여 UI/UX로 시각화를 사용하였습니다.', 
      '사용자가 질문을 하면 강의계획서에 있는 파일과 채팅 히스토리를 통해서 사용자가 답변을 해주는 시스템입니다.',
    ],
    results: [
      'OpenAI 중 RAG을 이용하여서 시스템을 구축하다 보니, 텍스트 생성 모델을 이용하여서 다음과 같이 질문으로 “졸업논문에 대한 강의계획서 내용을 요약해봐”라고 하면 ‘2025학년도 2학ㄱ기 졸업논문(소프트웨어융합) 강의계획서는 다음과 같습니다. 교수명, 학수번호:, 학점, 수업 운영 방식, 평가 방 그리고 주차별 내용와 같이 강의계획서 내용에 있는 PDF 파일에 있는 내용을 AI-Agent에 추출하여서 결과에 도출하였다는 것을 알 수 있었습니다.',
    ],
  },
  {
    name: '10대 영양소 급식으로 나중에 부족한 영양소 식단을 위한 음식 추천 서비스',
    period: '2025.11 – 2025.11',
    role: 'ML/Backend Engineer',
    subtitle: '경희대학교 데이터톤으로 Lovable AI Vibe Coding으로 추천 시스템',
    teamSize: '4명 (Data Analyst 2, ML/Backend Engineer 2)',
    techStack: ['Python', 'React', 'Scikit-learn', 'Lovable AI'],
    description:
      '10대에 필요한 8가지 영양소들 중 부족한 영양소들이 많은 집단들이 무엇이 있는지 군집화 분석 이용' + '군집화 분석을 이용하여 부족한 영양성분 요소들을 이용하여 ',
    background:
      '데이터톤을 이용하여 주제를 연령별로 의식주 생활의 문제를 다루며 하루 무박 해커톤으로 해결하기 위한 서비스를 만드는 것을 수행하였습니다.',
    problem:
      '2015~2024년에 10대 비만율을 2배 정도 증가하는 문제가 발생 그리고 급식의 영양소의 불균형으로 인하여 섭취 과다 및 부족의 문제로 인하여 생기는 질병들이 발생이 흔하다는 문제를 방향으로 정하였습니다.',
    thumbnail: '/images/projects/nutrition_recommendation.png',
    process: [
      '석식을 제공받지않은 학생 및 영양소의 불균형을 겪고 있는 학생들을 목표대상으로 정하였습니다.', 
      '학교에서 주어지는 급식정보를 이용하여 영양소 성분들의 함유량들을 추출합니다.', 
      '메뉴별 영양정보로 단백질, 탄수화물, 지방, 칼슘, 철, 비타민, 티아민, 리보플라빈, 비타민 C의 함유량으로 데이터를 수집하였습니다.', 
      '급식 식단정보를 이용하여 시도교육청, 학교명에 따라서 요리명, 열량 정보, 급식 리스트들을 이용하여 추출하는 방식을 이용하였습니다.',
      '섭취 영양소를 파악하며 이를 계산하여 식품 권장섭취량을 계산하였습니다.', 
      '이를 통해 급식 영양수준을 이용하여 부족한 섭취량을 구하며 메뉴별 영양정보를 이용하여 clustering을 수행하였습니다.',
      '서로 영양소들이 함유된 기준이 유사한 군집들로 그룹화하여 수행을 하였습니다.',
    ],
    results: [
      '실험 요약 리포트를 작성하는 시간이 평균 1~2일에서 수시간 이내로 단축되었습니다.',
      '새로운 팀원이 합류했을 때, 과거 실험 히스토리를 훨씬 빠르게 파악할 수 있었습니다.',
      '실험 메타데이터 표준화로 재현성 있는 실험 문화가 자리 잡는 데 기여했습니다.',
    ],
  },
  {
    name: '자신의 위치가 농업에 최적인지 알려주는 텍스트로 설명하는 서비스',
    period: '2025.05 – 2025.05',
    role: 'ML/Fullstack Engineer',
    subtitle: '농업의 기술화를 주제로 바탕으로 자신의 위치가 농업에 최적인지 확인하는 서비스',
    teamSize: '2명 (ML Engineer 2)',
    techStack: ['Python', 'Gemini', 'Node.js', 'Express'],
    description:
      'IT의 기술과 농업에 대해서 기술을 접목 시키면서 디지털 스마트팜, 농업 최적 위치 선정, 첨단 기술(농업 기구)의 발달 등등에 대해서 고민하다가 자신의 위치가 어디인지에 따라 농사에 적합한 지역이 맞는지 틀린지에 대해서 AI가 질의응답하는 것을 주제로 선정',
    background:
      '이번 khuthon에서 주제는 “농업에 대한 기술화”라는 주제를 이용해서 자신의 위치의 주소를 역지오코딩을 이용하여서 위도와 경도로 변환하여서 이것을 서버와 클라이언트를 통해 서로 전송하는 것을 이용하였습니다. ',
    problem:
      '“농업의 기술화”라는 주제를 이용하여 과거에 해커톤이라는 것은 단기간에 주제를 찾아내어서 아이디어 기획 및 개발 및 유지보수까지 거쳐야만 완성된 산출물이라고 할 수 있었습니다.',
    thumbnail: '/images/projects/agriculture_tech.png',
    process: [
      '“농업의 기술화”를 이용하여서 자신의 위치 위도, 경도 측정하였습니다.', 
      'Google Maps API를 이용하여서 자신의 주소를 이용하여 Geocoding으로 위도, 경도 데이터로 변환합니다.',
      'Chatbot을 이용한 Prompt Engineering: 지금 내가 속해 있는 곳을 위치에 따라서 질의 응답합니다. Node.js(express)를 이용하여서 서버를 통해 자신의 주소를 입력하면 자동으로 위도, 경도로 수신하는 API 개발하였습니다. 위도 경도를 통해 Gemini-flash라는 LLM 모델을 이용하여 Prompt Engineering로 개발을 구축하였습니다.',
    ],
    results: [
      'Prompt Engineering을 해본 결과 OpenAi 생성형 AI 중 텍스트 생성 모델을 이용하였습니다.',
      '이 위치가 농업에 적합한 위치인지에 대해서 땅에 대한 요소인 토양의 상태, 기온, PH(산/염기의 강도)에 관하여 어떠한 점이 농업에 적합한지 아니면 농업에서 부적합한지 확인할 수 있습니다.', 
      '어떠한 특성이 부족한지 텍스트에 대하여 결과가 나오게 되었습니다.',
    ],
  },
  {
    name: '감정 분석 기반의 개인화 산책로 추천 서비스',
    period: '2025.07 – 2025.08',
    role: 'ML/Fullstack Engineer',
    subtitle: 'BDA 빅데이터 분석학회에서 동대문구 사회문제에 시사하여 2025년 7~8월까지의 해커톤 개발',
    teamSize: '2명 (ML Engineer 2)',
    techStack: ['Python', 'React', 'SQL', 'MySQL'],
    description:
      '감정 분석을 서울 동대문구 교목 데이터를 이용하여 나무의 감정을 이용하여 우선순위 감정 추천 서비스',
    background:
      '감정 기반을 통해서 서울 동대문구에서 워킹 도시 개발이라는 주제를 선정하였습니다.',
    problem:
      '감정 기반을 통해서 서울 동대문구에서 워킹 도시 개발이라는 주제를 선정하였습니다.',
    thumbnail: '/images/projects/walking_city.png',
    process: [
      '먼저 사용자의 인적 사항을 입력받는다.', 
      '사용자가 자신의 하루에 대해서 혹은 자신의 현재 기분을 마음 편히 털어 놓는 공간을 제공한다.',
      '입력받은 프롬프트를 기반으로 사용자의 감정 분석을 하빈다.자연어 처리 API (한국어 기반)을 활용하여 텍스트를 분석하고, 적합한 세부 감정 카테고리로 세분화하여 나타낸다.',
      '사용자의 현재 위치와 감정 상태를 고려하여 동대문구 산책로/음악/활동 추천한다.',
      '동대문구 산책로 DB 구축 및 사용자 현재 위치에 따른 임의 설정 후 산책로 추천합니다.',
    ],
    results: [
      'Prompt Engineering을 해본 결과 OpenAi 생성형 AI 중 텍스트 생성 모델을 이용하였습니다.',
      '이 위치가 농업에 적합한 위치인지에 대해서 땅에 대한 요소인 토양의 상태, 기온, PH(산/염기의 강도)에 관하여 어떠한 점이 농업에 적합한지 아니면 농업에서 부적합한지 확인할 수 있습니다.', 
      '어떠한 특성이 부족한지 텍스트에 대하여 결과가 나오게 되었습니다.',
    ],
  },
  {
    name: '광진구청 빅데이터 분석 2024',
    period: '2024.04 – 2024.05',
    role: 'Data Analyst',
    subtitle: '빅데이터를 이용하여 광진구청에서의 쓰레기 문제 해결을 위한 공모전',
    teamSize: '3명 (Data Analyst 3)',
    techStack: ['Python'],
    description:
      '광진구청에서의 쓰레기 문제 해결을 위한 빅데이터 분석 공모전',
    background:
      '광진구청에서 쓰레기 문제로 쓰레기통의 수가 다른 서울 구역보다 많이 없다는 것을 발견하여 쓰레기 문제 해결을 주제로 선정',
    problem:
      '광진구청에서 쓰레기 배출현황에 대해서 쓰레기통의 위치가 너무 적으며, 쓰레기로 인한 환경 오염이 잦아집니다.',
    thumbnail: '/images/projects/gwangjingu.png',
    process: [
      '광진구 쓰레기통의 위치를 추적하여 군집화를 이용하여 쓰레기통을 추가적으로 설치할 곳이 어디인지 추천 쓰레기통에 대하여 추천합니다.',
      '분류 및 선형 회귀 데이터로 예측분석을 이용하여 지역적 데이터 특성을 분석하여서 쓰레기토이 적합한지 아닌지에 탐색하였습니다.',
    ],
    results: [
      '조건별 쓰레기통 군집 데이터 제공 및 지역마다 군집화를 통해 유사한 특성끼리 추출하여 어떠한 요인에 따라 올바르게 군집화되어 있는지 예측할 수 있었다.',
    ],
  },
  {
    name: '2025 GdGoC 백야 해커톤',
    period: '2025.01 – 2025.01',
    role: 'AI Engineer',
    subtitle: 'GdGoC를 통해 수도권 및 소상공인을 위해 상권 위치 추천 서비스 개발',
    teamSize: '6명 (AI Engineer 1, Mobile Engineer 2, Backend Engineer 3)',
    techStack: ['Python'],
    description:
      'GdGoC를 통해 수도권 및 소상공인을 위해 상권 위치 추천 서비스 개발',
    background:
      'google에서 우리나라의 사회문제를 다루어 해커톤을 개최하였으며, 수도권, 상권회복이라는 주제 선정.',
    problem:
      '우리나라 사회 문제 중 소상 공인의 상권이 계속 약화 및 홍보의 부재로 전통시장의 상권이 죽어가고 있습니다.',
    thumbnail: '/images/projects/gdgoc.png',
    process: [
      '수도권 집중인 시설을 통해서 지역별을 통하여 유동인구, 직장인구, 주거인구의 수를 분석하였습니다.',
      '이에 해당하는 지역에 대하여 기준일자를 기준으로 소득 인구에 따라서 시계열 데이터를 이용하여서 그만큼 소상공인에 대하여 유동 인구수에 대하여 지역별들을 통해 데이터의 경향을 분석하였습니다.',
    ],
    results: [
      '조건별 상권 데이터 제공 및 지역마다 추천률(%)로 제공하며, 네이버 지도를 위치하여서 상권 위치 및 지도에서 바로 확인이 가능하다는 것을 알 수 있습니다.',
    ],
  },
  {
    name: 'Youtube에서 듣고 싶은 음악 장르 추천 후 자동 재생하는 서비스',
    period: '2022.10 – 2023.01',
    role: 'ML Engineer',
    subtitle: 'OpenAI와 Youtube도구를 이용하여 음악 장르의 취향 유형을 추천해주는 텍스트 생성 챗봇 서비스',
    teamSize: '1명 (ML Engineer 1)',
    techStack: ['Python', 'OpenAI', 'YouTube API'],
    description:
      'Youtube에서 듣고 싶은 음악 장르 추천 후 자동 재생하는 서비스 개발',
    thumbnail: '/images/projects/music_recommendation.png',
    background:
      '2022년부터 2023년까지 OPENAI와 YOUTUBE을 이용하여서 직접 챗봇으로 추천하는 시스템을 개발하고 싶었습니다.',
    problem:
      '각 실험의 하이퍼파라미터, 데이터 버전, 코드 커밋, 결과 지표를 한 번에 관리하고, 팀원이 쉽게 비교할 수 있는 인터페이스가 필요했습니다.',
    process: [
      '서로 사용자가 좋아하는 음악의 스타일 및 장르 그리고 가수 이름을 질의 및 응답합니다.', 
      '추천하고 싶은 곡에 대하여 YouTube로 검색하는 기능을 이용합니다.', 
      '노래를 자동 추천 및 재생해주는 챗봇을 구현하였습니다.',
    ],
    results: [
      '실험 요약 리포트를 작성하는 시간이 평균 1~2일에서 수시간 이내로 단축되었습니다.',
      '새로운 팀원이 합류했을 때, 과거 실험 히스토리를 훨씬 빠르게 파악할 수 있었습니다.',
      '실험 메타데이터 표준화로 재현성 있는 실험 문화가 자리 잡는 데 기여했습니다.',
    ],
  },
    {
    name: '앱 미사용 규칙 위반시 Instagram에 자동 공유하는 서비스',
    period: '2025.03 – 2025.06',
    role: 'Fullstack Engineer',
    subtitle: 'Adyshare API를 이용하여 규칙 위반하면 Instagram에 자동 공유하는 앱 서비스',
    teamSize: '1명 (Fullstack Engineer 1)',
    techStack: ['Python', 'scikit-learn', 'MLflow', 'FastAPI', 'PostgreSQL'],
    description:
      '개인 캡스톤디자인 프로젝트로 앱 서비스로 개발 프로젝트',
    thumbnail: '/images/projects/shareaddict.png',
    background:
      '2일과 생활 속에서 밤늦게까지 디지털 매체에 노출되어 있는 시간이 많아지면서 디지털 중독에 빠지는 사람들이 많아지고 있습니다. 이러한 디지털 중독 문제를 해결하기 위해서 Adyshare API를 이용하여서 규칙 위반시 Instagram에 자동 공유하는 앱 서비스를 개발하기 위해 개인 캡스톤디자인 프로젝트 제목으로 선정하였습니다.',
    problem:
      '디지털 매체의 노출이 자유로운 만큼 디지털 매체의 사용에 대해서 사용자가 절제하는 방향으로 나아가는 것이 필요합니다. 스마트폰 노출 문제에 있어 이러한 사용자가 스마트폰에 중독되었다는 것을 개인 차원에서 해결하는 것이 아닌 모든 커뮤니티 범위에서 자신이 디지털 매체에 중독되었다는 것을 개인 범위에 한정하지 않고  다른사람들도 알게 하도록 하는 것이 필요합니다.',
    process: [
      '내가 만든 앱에 적용할 앱 미사용 규칙 세부사항을 적는다.',
      '정해진 시간대에 앱을 터치하면 위반, 앱을 터치 안 하면 위반하지 않았다라고 탐지한다.', 
      '위반이 감지하면, 자동적으로 인스타그램 게시판에 공유가 된다.', 
      '다른 사람들이 내가 올린 게시판을 보고 반응들을 남긴다.', 
      '나를 언급하여 앱 사생활에 대해서 여러 반응을 남기며, 이것을 보고 나는 소셜 프레셔(압박)을 받고 다음부터 앱을 사용하지 않은 데에 있어서 신중하게 하도록 전환을 시킨다.',
    ],
    results: [
      '사용자가 규칙 위반 시 인스타그램의 게시판으로 다른 사람들에게 100% 공유합니다.', 
      '규칙을 저장할 시 내가 앱 규칙을 위반하지 않겠다는 시도 75% 실현.',
    ],
  },
  {
    name: 'OTT 긍정/부정 감정 분석',
    period: '2025.03 – 2025.06',
    role: 'Data Analyst',
    subtitle: 'OTT에 대해서 도구',
    teamSize: '2명 (ML Engineer 2)',
    techStack: ['Python', 'scikit-learn', 'MLflow', 'FastAPI', 'PostgreSQL'],
    description:
      '여러 실험 결과를 일관되게 관리하기 위한 내부용 도구를 개발했습니다. ' +
      'MLflow를 활용한 실험 트래킹과 FastAPI 기반 리포트 API를 제공했습니다.',
    background:
      '2023 년 기준으로 방송매체 이용행태조사를 결과를 통해서 10 ~ 20 대가 가장 많이 시청하고 있었습니다. 유튜브, 넷플릭스, 티빙이 가장 대표적으로 보고 있는 OTT 매체들이다. 하지만, 이러한 OTT 매체들도 긍정적인 영향인 것도 있고, 부정적인 영향에 미치는 것이 있어서 궁금하여서 이 연구를 진행하였습니다.',
    problem:
      'PD 들은 자본력으로 앞세운 OTT 의 콘텐츠 시장 잠식에 대해서 TV 시청자들의 이탈과 방송사 수익 감소, 흥미위주의 콘텐츠 증가, 방송 프로그램 품질 저하의 결과로 이어지기도 한다. 그리고 OTT 의존 심화로 인하여 이를 대응하기가 어려워지고 있다는 것이 지금도 해결되고 있는 과제입니다. 지금 OTT 의 무분별한 시청 및 정보에 대한 이슈에 대해서 긍정적인지 부정적인지 파악 못하고 OTT 에 의존하는 경향이 늘어나고 있다.',
    process: [
      '가설 1: OTT 매체에 대한 뉴스 기사로 OTT 매체에 대한 긍정적 부정적 반응 예측 그리고 연도에 따라서 이 데이터를 통해 감정적으로 긍정인지 부정인지 가장 영향이 있는 요인이라고 알게 되었다. 그리고 연도에 따라 ott 에 대해서 내용이 긍정인지 부정인지 시간대에서 가장 영향이 작용된다는 것을 알 수 있다.', 
      '가설 2: OTT 에서 언급된 OTT 와 뉴스 제목 및 뉴스 내용에 언급된 OTT 가 사용된 키워드 빈도에 따라 OTT 가 긍정적인지 부정적인지가 달라진다. k_cluster 의 개수가 높아질수록 훨씬 모델 성능이 높아진다는 것을 알 수 있다. 그리고 제목, 내용에 언급된 ott 매체의 키워드에 언급하는 데에 있어서 유의미한 차이가 있으며, ott 매체에 있는 키워드가 긍정인지 부정인지에 따라 차이가 있으며, 영향이 있습니다. DBSCAN 도 마찬가지로 epsilon, minPts 를 각각 0.3, 2 로 가정하였을 때 DBSCAN 기법을 이용하여 군집끼리 하여 comment_ott_keyword 의 수가 군집 수가 2 개보다 넘게 분포되어 있습니다.',
      '가설 3: OTT 매체들에 언급되는 콘텐츠에 긍정적인지 부정적인지 키워드에 따라 긍정적인지 부정적인지에 따라 달라진다. Text Analysis 을 이용해서 하였을 때 추출한 품사 태깅으로 명사를 추출하였을 때 수치를 측정한 결과 거의 1 과 가까운 지표로 나오게 되어있지만, 가장 빈도가 있는 단어들이 긍정, 부정에 관련된 단어가 아니라는 점에서 이 가설을 결론 내는 데에 있어 빈도가 가장 큰 단어들에 속하지 않지만, 키워드를 통해서 긍정 부정을 판별할 수 있다는 것은 사실입니다'
    ],
    results: [
      '이를 분석한 결과 가장 빈도가 많이 나온 키워드들로 학습이 되어서 긍정 부정을 판별할 수 있다는 것임을 알 수 있습니다.',
      '이 본론의 결과를 통해서 이 분석은 OTT 에 대한 이슈들을 모아서 사람들에게 무분별하게 OTT 를 보지 않고 OTT 에 대해서 시간이 지나면서 긍정, 부정의 흐름이 변화에 영향에 미친다는 것을 보여주었다.', 
      '그리고 OTT 에 대해서 많이 언급하거나 적게 언급할수록 더욱 강조를 해주어 이 OTT 가 얼마나 중요하게 평가로 인식 받고 있는지도 보여줄 수 있다는 것을 알 수 있었다.', 
      '이 분석을 통해서 나중에 OTT 에 대한 이슈로 감성 분석하는 데에 있어서 텍스트 키워드에 대해 긍정 부정에 직접적인 단어 및 직접적으로 작용되지 않은 단어가 얼마나 감성 분석에 대해서 영향에 미치는지에 대해서 이 연구를 통해 알고 싶었다.',
      '또한, 언론에 있는 시간대 (년, 월, 일)들도 OTT 에 대한 이슈에 긍정인지 부정인지 영향력을 확인해 보고 싶었다.',
      '그리고 제목 및 내용이 얼마나 OTT 에 대해서 얼마나 언급되고 있는지 얼마나 강조하느냐에 따라서 영향력을 미치고 있는지 알고 싶었습니다.',
    ],
  },
  {
    name: 'OTT 긍정/부정 감정 분석',
    period: '2025.03 – 2025.06',
    role: 'Data Analyst',
    subtitle: 'OTT에 대해서 도구',
    teamSize: '2명 (ML Engineer 2)',
    techStack: ['Python', 'scikit-learn', 'MLflow', 'FastAPI', 'PostgreSQL'],
    description:
      '여러 실험 결과를 일관되게 관리하기 위한 내부용 도구를 개발했습니다. ' +
      'MLflow를 활용한 실험 트래킹과 FastAPI 기반 리포트 API를 제공했습니다.',
    background:
      '2023 년 기준으로 방송매체 이용행태조사를 결과를 통해서 10 ~ 20 대가 가장 많이 시청하고 있었습니다. 유튜브, 넷플릭스, 티빙이 가장 대표적으로 보고 있는 OTT 매체들이다. 하지만, 이러한 OTT 매체들도 긍정적인 영향인 것도 있고, 부정적인 영향에 미치는 것이 있어서 궁금하여서 이 연구를 진행하였습니다.',
    problem:
      'PD 들은 자본력으로 앞세운 OTT 의 콘텐츠 시장 잠식에 대해서 TV 시청자들의 이탈과 방송사 수익 감소, 흥미위주의 콘텐츠 증가, 방송 프로그램 품질 저하의 결과로 이어지기도 한다. 그리고 OTT 의존 심화로 인하여 이를 대응하기가 어려워지고 있다는 것이 지금도 해결되고 있는 과제입니다. 지금 OTT 의 무분별한 시청 및 정보에 대한 이슈에 대해서 긍정적인지 부정적인지 파악 못하고 OTT 에 의존하는 경향이 늘어나고 있다.',
    process: [
      '가설 1: OTT 매체에 대한 뉴스 기사로 OTT 매체에 대한 긍정적 부정적 반응 예측 그리고 연도에 따라서 이 데이터를 통해 감정적으로 긍정인지 부정인지 가장 영향이 있는 요인이라고 알게 되었다. 그리고 연도에 따라 ott 에 대해서 내용이 긍정인지 부정인지 시간대에서 가장 영향이 작용된다는 것을 알 수 있다.', 
      '가설 2: OTT 에서 언급된 OTT 와 뉴스 제목 및 뉴스 내용에 언급된 OTT 가 사용된 키워드 빈도에 따라 OTT 가 긍정적인지 부정적인지가 달라진다. k_cluster 의 개수가 높아질수록 훨씬 모델 성능이 높아진다는 것을 알 수 있다. 그리고 제목, 내용에 언급된 ott 매체의 키워드에 언급하는 데에 있어서 유의미한 차이가 있으며, ott 매체에 있는 키워드가 긍정인지 부정인지에 따라 차이가 있으며, 영향이 있습니다. DBSCAN 도 마찬가지로 epsilon, minPts 를 각각 0.3, 2 로 가정하였을 때 DBSCAN 기법을 이용하여 군집끼리 하여 comment_ott_keyword 의 수가 군집 수가 2 개보다 넘게 분포되어 있습니다.',
      '가설 3: OTT 매체들에 언급되는 콘텐츠에 긍정적인지 부정적인지 키워드에 따라 긍정적인지 부정적인지에 따라 달라진다. Text Analysis 을 이용해서 하였을 때 추출한 품사 태깅으로 명사를 추출하였을 때 수치를 측정한 결과 거의 1 과 가까운 지표로 나오게 되어있지만, 가장 빈도가 있는 단어들이 긍정, 부정에 관련된 단어가 아니라는 점에서 이 가설을 결론 내는 데에 있어 빈도가 가장 큰 단어들에 속하지 않지만, 키워드를 통해서 긍정 부정을 판별할 수 있다는 것은 사실입니다'
    ],
    results: [
      '이를 분석한 결과 가장 빈도가 많이 나온 키워드들로 학습이 되어서 긍정 부정을 판별할 수 있다는 것임을 알 수 있습니다.',
      '이 본론의 결과를 통해서 이 분석은 OTT 에 대한 이슈들을 모아서 사람들에게 무분별하게 OTT 를 보지 않고 OTT 에 대해서 시간이 지나면서 긍정, 부정의 흐름이 변화에 영향에 미친다는 것을 보여주었다.', 
      '그리고 OTT 에 대해서 많이 언급하거나 적게 언급할수록 더욱 강조를 해주어 이 OTT 가 얼마나 중요하게 평가로 인식 받고 있는지도 보여줄 수 있다는 것을 알 수 있었다.', 
      '이 분석을 통해서 나중에 OTT 에 대한 이슈로 감성 분석하는 데에 있어서 텍스트 키워드에 대해 긍정 부정에 직접적인 단어 및 직접적으로 작용되지 않은 단어가 얼마나 감성 분석에 대해서 영향에 미치는지에 대해서 이 연구를 통해 알고 싶었다.',
      '또한, 언론에 있는 시간대 (년, 월, 일)들도 OTT 에 대한 이슈에 긍정인지 부정인지 영향력을 확인해 보고 싶었다.',
      '그리고 제목 및 내용이 얼마나 OTT 에 대해서 얼마나 언급되고 있는지 얼마나 강조하느냐에 따라서 영향력을 미치고 있는지 알고 싶었습니다.',
    ],
  },
  {
    name: '웹에 가지고 있는 스트레스 Test로 웹 상태에 대한 지표 시각화 개발',
    period: '2025.03 – 2025.06',
    role: 'Backend Engineer',
    subtitle: '웹 스트레스를 AWS CloudWatch를 이용하여 시각화 개발',
    teamSize: '2명 (ML Engineer 2)',
    techStack: ['Python', 'scikit-learn', 'MLflow', 'FastAPI', 'PostgreSQL'],
    description:
      'AWS을 이용하여 성능을 이용하여 Cloudwatch로 시각화 개발',
    background:
      '웹에 대하여 스트레스에 관련된 지표들을 수치화로 측정하여서 웹 서비스에 과부하 지표를 그래프 시각화를 이용하여 한눈에 알아보는 시스템 개발',
    problem:
      '사용자가 웹 서비스를 사용하기 전에 사전에 이 웹 서버에 들어가는데 문제가 없는지 그리고 과부하로 인한 스트레스 현상이 있는지 확인하기 어려움.',
    process: [
      '웹 서비스를 AWS Console을 이용하여 EC2, RDS를 이용하여 user-emulator, stress manager, cloudwatch를 이용한다.', 
      '스트레스에 관련된 지표 그래프 시각화로 활용하였습니다.'
    ],
    results: [
      '이를 분석한 결과 가장 빈도가 많이 나온 키워드들로 학습이 되어서 긍정 부정을 판별할 수 있다는 것임을 알 수 있습니다.',
      '이 본론의 결과를 통해서 이 분석은 OTT 에 대한 이슈들을 모아서 사람들에게 무분별하게 OTT 를 보지 않고 OTT 에 대해서 시간이 지나면서 긍정, 부정의 흐름이 변화에 영향에 미친다는 것을 보여주었다.', 
      '그리고 OTT 에 대해서 많이 언급하거나 적게 언급할수록 더욱 강조를 해주어 이 OTT 가 얼마나 중요하게 평가로 인식 받고 있는지도 보여줄 수 있다는 것을 알 수 있었다.', 
      '이 분석을 통해서 나중에 OTT 에 대한 이슈로 감성 분석하는 데에 있어서 텍스트 키워드에 대해 긍정 부정에 직접적인 단어 및 직접적으로 작용되지 않은 단어가 얼마나 감성 분석에 대해서 영향에 미치는지에 대해서 이 연구를 통해 알고 싶었다.',
      '또한, 언론에 있는 시간대 (년, 월, 일)들도 OTT 에 대한 이슈에 긍정인지 부정인지 영향력을 확인해 보고 싶었다.',
      '그리고 제목 및 내용이 얼마나 OTT 에 대해서 얼마나 언급되고 있는지 얼마나 강조하느냐에 따라서 영향력을 미치고 있는지 알고 싶었습니다.',
    ],
  },
  {
    name: '온라인 배달/포장 앱 사용자의 신용 등급 세분화 분석',
    period: '2025.03 – 2025.06',
    role: 'Backend Engineer',
    subtitle: '웹 스트레스를 AWS CloudWatch를 이용하여 시각화 개발',
    teamSize: '2명 (ML Engineer 2)',
    techStack: ['Python', 'scikit-learn', 'MLflow', 'FastAPI', 'PostgreSQL'],
    description:
      'AWS을 이용하여 성능을 이용하여 Cloudwatch로 시각화 개발',
    background:
      '웹에 대하여 스트레스에 관련된 지표들을 수치화로 측정하여서 웹 서비스에 과부하 지표를 그래프 시각화를 이용하여 한눈에 알아보는 시스템 개발',
    problem:
      '사용자가 웹 서비스를 사용하기 전에 사전에 이 웹 서버에 들어가는데 문제가 없는지 그리고 과부하로 인한 스트레스 현상이 있는지 확인하기 어려움.',
    process: [
      '웹 서비스를 AWS Console을 이용하여 EC2, RDS를 이용하여 user-emulator, stress manager, cloudwatch를 이용한다.', 
      '스트레스에 관련된 지표 그래프 시각화로 활용하였습니다.'
    ],
    results: [
      '이를 분석한 결과 가장 빈도가 많이 나온 키워드들로 학습이 되어서 긍정 부정을 판별할 수 있다는 것임을 알 수 있습니다.',
      '이 본론의 결과를 통해서 이 분석은 OTT 에 대한 이슈들을 모아서 사람들에게 무분별하게 OTT 를 보지 않고 OTT 에 대해서 시간이 지나면서 긍정, 부정의 흐름이 변화에 영향에 미친다는 것을 보여주었다.', 
      '그리고 OTT 에 대해서 많이 언급하거나 적게 언급할수록 더욱 강조를 해주어 이 OTT 가 얼마나 중요하게 평가로 인식 받고 있는지도 보여줄 수 있다는 것을 알 수 있었다.', 
      '이 분석을 통해서 나중에 OTT 에 대한 이슈로 감성 분석하는 데에 있어서 텍스트 키워드에 대해 긍정 부정에 직접적인 단어 및 직접적으로 작용되지 않은 단어가 얼마나 감성 분석에 대해서 영향에 미치는지에 대해서 이 연구를 통해 알고 싶었다.',
      '또한, 언론에 있는 시간대 (년, 월, 일)들도 OTT 에 대한 이슈에 긍정인지 부정인지 영향력을 확인해 보고 싶었다.',
      '그리고 제목 및 내용이 얼마나 OTT 에 대해서 얼마나 언급되고 있는지 얼마나 강조하느냐에 따라서 영향력을 미치고 있는지 알고 싶었습니다.',
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
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

  // 디버깅: projects 배열 확인
  if (!projects || projects.length === 0) {
    return (
      <section className="space-y-6">
        <p className="text-red-400">프로젝트 데이터를 불러올 수 없습니다.</p>
      </section>
    )
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
        <motion.header className="space-y-2">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
            }}
            className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.05 } },
            }}
            className="max-w-2xl text-xs leading-relaxed text-slate-400 sm:text-sm"
          >
            실제로 설계·구현해 본 메인 프로젝트들입니다. 각 카드를 클릭하면 문제 정의부터 결과까지의
            상세 과정을 확인할 수 있습니다.
          </motion.p>
        </motion.header>

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
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 text-left shadow-[0_0_0_1px_rgba(15,23,42,0.5)] transition hover:border-sky-500/80 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {project.thumbnail && (
                <div className="relative -mx-4 -mt-4 mb-4 h-40 overflow-hidden border-b border-slate-800">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
              )}
              <div className="space-y-3 px-4 pb-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
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

              <div className="mt-4 flex flex-wrap gap-1.5 px-4 pb-4">
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
              <header className="border-b border-slate-800">
                {selectedProject.thumbnail && (
                  <div className="relative h-48 overflow-hidden border-b border-slate-800 sm:h-56">
                    <img
                      src={selectedProject.thumbnail}
                      alt={selectedProject.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  </div>
                )}
                <div className="px-5 py-4 sm:px-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
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
                      className="rounded-full border border-slate-700 bg-slate-900/70 px-2 py-1 text-[11px] text-slate-300 hover:border-slate-500 hover:text-slate-100 flex-shrink-0"
                    >
                      닫기
                    </button>
                  </div>
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

