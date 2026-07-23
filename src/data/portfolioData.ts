import { Project, ExperienceItem, EducationItem, CertificationItem, SkillItem, TechTool } from '../types';

export const PERSONAL_INFO = {
  name: "서달미",
  englishName: "Seo Dalmi",
  title: "사용자 조사로 기획하는 서비스 기획자",
  email: "dalmi.seo@example.com",
  phone: "010-9876-5432",
  location: "서울특별시",
  bio: "인터뷰·설문 데이터를 근거로 기능을 정의하고 검증합니다. 사용자의 목소리에서 시작해 비즈니스 가치를 창출하는 해결책을 제시합니다.",
  availableForProjects: true,
  links: {
    linkedin: "https://linkedin.com/in/dalmi-seo",
    portfolio: "https://seodalmi.me",
    github: "https://github.com/dalmi-seo",
    notion: "https://notion.so/dalmi-portfolio"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "plant-ai",
    title: "AI 반려식물 관리 서비스 기획",
    category: "AI/서비스 기획",
    roleBadge: "TEAM LEADER | 4인",
    period: "2024.01~04",
    teamSize: "4명 (기획자 1, 디자이너 1, 개발자 2)",
    summary: "초보 식물 집사들이 겪는 '관리 판단의 어려움'을 해결하기 위해 환경 데이터 기반 맞춤형 알림 서비스를 기획했습니다.",
    iconName: "Sprout",
    iconColor: "text-[#ba1a1a]",
    bgColor: "bg-[#ba1a1a]/10",
    stats: [
      { label: "심층 인터뷰", value: "8명 진행", icon: "Users" },
      { label: "우선순위 수립", value: "핵심 8개 기능", icon: "CheckSquare" }
    ],
    achievement: "스타트업 경진대회 3위 (장려상)",
    caseStudy: {
      problemStatement: "식물을 키우기 시작한 초보 사용자(2030 싱글족)의 68%가 물 주기 타이밍 착오와 잎 상태 판단 미숙으로 6개월 이내 식물 고사를 경험함.",
      targetUser: "실내에서 식물을 처음 키우기 시작했으나, 계절 및 관수 상태를 판단하기 어려워 피드백을 원하는 2030 자취생 및 초보 집사",
      userResearch: {
        interviewsCount: 8,
        surveysCount: 54,
        keyQuotes: [
          "\"인터넷에서 겉흙이 마르면 물을 주라는데, 겉흙이 마른 건지 속흙까지 마른 건지 모르겠어요.\"",
          "\"잎이 시들었을 때 물을 더 줘야 하는지, 햇빛을 보여줘야 하는지 유투브나 지식인을 검색해도 정답을 못 찾겠어요.\"",
          "\"일정이 바쁘면 언제 물을 줬는지 까먹어서 자꾸 죽이게 됩니다.\""
        ],
        findings: [
          { title: "추상적인 팁의 한계", detail: "사용자들은 '적당히', '겉흙이 마를 때' 등 모호한 설명보다 구체적 가이드(예: 3일에 1회 + 날씨 자동 보정)를 갈망함." },
          { title: "사후 처방보다 사전 푸시 알림", detail: "식물이 진작 시든 후 원인을 찾는 것보다, 오늘 습도/특성을 반영한 선제적 푸시 알림이 고사율을 극적으로 감소시킴." }
        ]
      },
      prdHighlights: [
        {
          feature: "이미지 진단 기반 AI 식물 상태 체크",
          userStory: "초보 집사는 카메라로 잎을 찍어 현재 영양 상태 및 질병 여부를 5초 만에 확인하고 싶다.",
          priority: "P0",
          solution: "카메라 촬영 후 상태 자동 분석 모듈 & 단계별 조치 가이드카드 제시"
        },
        {
          feature: "날씨/실내환경 연동 푸시 알림 Engine",
          userStory: "사용자는 장마철이나 건조한 겨울철에 자동으로 물주기 주기가 보정된 알림을 받고 싶다.",
          priority: "P0",
          solution: "지역 기상청 API 연동으로 비 오는 날 알림 자동 연기 및 습도 연동 보정 알고리즘 정의"
        },
        {
          feature: "식물 성장 일지 및 캘린더",
          userStory: "사용자는 물준 날과 잎의 성장을 사진으로 기록해 성취감을 느끼고 싶다.",
          priority: "P1",
          solution: "원터치 물주기 체크 및 시간순 성장이력 타임라인 뷰 제공"
        }
      ],
      wireframeSteps: [
        "홈 스크린: 등록된 식물 카드 (D-day 물주기 상태 표시)",
        "카메라 진단: 잎 촬영 -> 3단계 상태 진단 결과 페이지",
        "알림 설정: 맞춤 푸시 시간 및 환경 센서/기상청 연동 설정",
        "식물 지식 백과: Q&A 및 초보자 필수 관리 팁 카테고리"
      ],
      businessResults: [
        "스타트업 경진대회 3위 (장려상) 수상",
        "사용성 테스트(UT) 진행 결과, 물주기 기억 정확도 92% 향상",
        "PRD 요구사항 정의서 완결도 및 WBS 일정 준수율 100% 평가"
      ]
    }
  },
  {
    id: "local-store",
    title: "동네 소상공인 예약 서비스 기획",
    category: "소상공인/O2O",
    roleBadge: "PLANNING | 4인",
    period: "2022.09~12",
    teamSize: "4명 (기획 2, 디자이너 1, 개발 1)",
    summary: "대학가 상권의 비효율적인 전화 예약을 개선하기 위해 점주와 고객 모두를 위한 3단계 단순 예약 시스템을 설계했습니다.",
    iconName: "Store",
    iconColor: "text-[#041632]",
    bgColor: "bg-[#041632]/10",
    stats: [
      { label: "정량 설문 조사", value: "32명 분석", icon: "BarChart2" },
      { label: "예약 뎁스 축소", value: "70% 절감", icon: "Layers" }
    ],
    achievement: "팀 발표 2위, 전공 A학점",
    caseStudy: {
      problemStatement: "대학가 미용실/스터디룸/음식점 등 소상공인 점주들은 업무 중 끊임없는 전화 예약 문의로 작업 흐름이 끊기도, 학생 고객들은 노쇼 및 예약 대기 시간 증가로 불편을 겪음.",
      targetUser: "바쁜 조리/시술 중 전화를 받기 힘든 1인 점주 & 전화 통화보다 모바일 버튼 예약을 선호하는 대학생 고객",
      userResearch: {
        interviewsCount: 6,
        surveysCount: 32,
        keyQuotes: [
          "\"손님 머리 잘라주는 도중에 전화 오면 받을 수도 없고, 끝나고 전화 걸면 다른 데 가셨다고 해요.\"",
          "\"전화해서 날짜, 시간, 인원 일일이 말하는 게 민망하고 귀찮아요. 네이버 예약 없는 가게는 그냥 딴 데 가요.\"",
          "\"기존 예약 앱은 점주 관리 페이지가 너무 복잡해서 연세 있는 사장님들이 안 쓰세요.\""
        ],
        findings: [
          { title: "점주용 화면의 단순성 최우선", detail: "복잡한 POS 연동 대신 3번의 터치로 예약 확정/거절이 가능한 모바일 점주 웹앱이 필요함." },
          { title: "고객용 예약 뎁스 최소화", detail: "기존 7단계 정보 입력 절차를 3단계(날짜선택 -> 시간/인원 -> 확정)로 70% 단축하여 전환율을 향상시킴." }
        ]
      },
      prdHighlights: [
        {
          feature: "3단계 원스톱 스마트 예약 폼",
          userStory: "고객은 가고자 하는 매장의 남아있는 시간대를 한눈에 보고 바로 신청하고 싶다.",
          priority: "P0",
          solution: "실시간 잔여 슬롯 그리드 표시 및 Kakao/Sms 자동 알림톡 연동"
        },
        {
          feature: "점주 전용 직관적 타임테이블 마감 토글",
          userStory: "점주는 특정 시간대에 손님이 몰리면 버튼 하나로 간편하게 예약을 닫고 싶다.",
          priority: "P0",
          solution: "슬라이딩 토글 기반 타임슬롯 즉시 마감/열기 모듈 구현"
        },
        {
          feature: "노쇼 방지 자동 예약금 알림",
          userStory: "점주는 당일 노쇼로 인한 손실을 방지하고 싶다.",
          priority: "P1",
          solution: "예약 확정 시 자동 안내 문구 및 예약 1시간 전 리마인드 푸시"
        }
      ],
      wireframeSteps: [
        "매장 상세: 서비스 메뉴 & 당일 예약 가능 시간 칩",
        "예약 신청: 인원/시간 선택 및 한 줄 요청사항 작성",
        "점주 관리자: 시간대별 예약 목록 카드 & 원터치 수락/양해거절",
        "고객 알림: 카카오톡 알림톡 예약 완료 통보"
      ],
      businessResults: [
        "대학가 교내 기획 프로토타입 발표 2위 선정",
        "전공 실습 과목 A+ 학점 취득",
        "테스트 매장 2곳 데모 적용 결과, 전화 문의 건수 45% 감소 효과 확인"
      ]
    }
  },
  {
    id: "youth-content",
    title: "청년 취업정보 콘텐츠 운영 및 퍼널 개편",
    category: "마케팅/콘텐츠",
    roleBadge: "INTERN | 5인",
    period: "2023.06~09",
    teamSize: "5명 (스타트업 마케팅/기획 인턴팀)",
    summary: "저조한 참여도의 채널을 분석하여 타겟 유입에 최적화된 콘텐츠 전략으로 개편, 실질적인 유입과 저장을 유도하여 채널 경쟁력을 강화했습니다.",
    iconName: "TrendingUp",
    iconColor: "text-[#ba1a1a]",
    bgColor: "bg-[#ba1a1a]/10",
    stats: [
      { label: "콘텐츠 조회수", value: "+34% 증가", icon: "Eye" },
      { label: "콘텐츠 저장수", value: "+68% 증가", icon: "Bookmark" }
    ],
    achievement: "공유수 +75% 달성, 유입 체류시간 2배 확대",
    caseStudy: {
      problemStatement: "기존 취업 정보 SNS 채널이 백화점식 나열형 텍스트 위주로 작성되어 20대 청년층의 이탈률이 82%에 달하고 실제 공고 클릭 전환으로 이어지지 않음.",
      targetUser: "공고 정보는 원하지만 텍스트가 많은 길고 복잡한 정부 지원사업 안내문에 피로감을 느끼는 취업준비생",
      userResearch: {
        interviewsCount: 5,
        surveysCount: 40,
        keyQuotes: [
          "\"공공기관 취업 공고는 지원 자격 조건이 표로 너무 가득 차 있어서 내가 대상자인지 한눈에 안 보여요.\"",
          "\"인스타그램 인포그래픽 카드뉴스에서 바로 3줄 요약이 안 나오면 그냥 넘겨버립니다.\"",
          "\"나중에 자소서 쓸 때 다시 보려고 '저장' 버튼을 누르는 콘텐츠가 제일 유용해요.\""
        ],
        findings: [
          { title: "3초 법칙 & 3줄 요약 프레임워크", detail: "첫 장에서 '신청 자격/혜택 금액/마감일' 3가지 핵심 지표를 시각적 캐러셀로 먼저 노출하는 포맷으로 전환." },
          { title: "CTA(Call to Action) 버튼 구체화", detail: "'자세히 보기' 대신 '내 지원 자격 1초 진단하기' 링크로 변경하여 클릭률(CTR) 제고." }
        ]
      },
      prdHighlights: [
        {
          feature: "3줄 요약 카드뉴스 템플릿 표준화",
          userStory: "취준생은 스크롤 한 번에 자격 요건 합격 여부를 즉시 판단하고 싶다.",
          priority: "P0",
          solution: "핵심 혜택/지원대상/신청방법 3단계 표준 레이아웃 카드 가이드라인 제정"
        },
        {
          feature: "공고 검색 및 필터 태그 시스템",
          userStory: "사용자는 내 전공 및 희망 직군에 맞는 혜택 공고만 모아보고 싶다.",
          priority: "P1",
          solution: "#인턴 #정부지원금 #경영기획 등 직관적 태그 분류체계 도입"
        }
      ],
      wireframeSteps: [
        "1장: 강렬한 혜택 헤드라인 + Target Badge (예: 경영계열 4학년 필독)",
        "2장: 체크리스트형 신청 자격 판단표",
        "3장: 준비 서류 및 신청 절차 타임라인",
        "4장: 원클릭 신청링크 QR 및 저장/공유 유도 페이지"
      ],
      businessResults: [
        "개편 후 평균 콘텐츠 조회수 +34% 증가",
        "유용한 공고 재방문을 위한 저장수(Bookmark) +68% 대폭 상승",
        "카톡/DM을 통한 지인 공유수 +75% 달성 및 인턴 우수 성과자 포상"
      ]
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "스타트업 운영보조 인턴",
    company: "(주)넥스트웨이브 솔루션",
    period: "2023.04 ~ 2023.12",
    bulletPoints: [
      "서비스 운영 데이터 정기 집계 및 주간 지표(MAU, 전환율, 이탈률) 분석 리포트 작성",
      "고객문의(CS) 500+건 분류 체계화 및 VOC 패턴 분석을 통해 기획 개선점 3건 제언",
      "SNS 채널 타겟 맞춤 콘텐츠 기획/발행으로 월평균 유입량 30% 증대 기여"
    ],
    skillsUsed: ["VOC 분석", "GA4 기초", "Notion", "퍼널 개편", "엑셀 지표 관리"]
  },
  {
    id: "exp-2",
    role: "고객센터 상담 계약직",
    company: "한국고객만족센터 (서비스 파트)",
    period: "2021.04 ~ 2022.03",
    bulletPoints: [
      "전화·이메일 인바운드 고객 문의 대응 (일평균 60+건 친절 및 신속 응대)",
      "반복 발생되는 고객 불편 요소(불명확한 결제 취소 UI 등)를 정리하여 개발/기획팀에 VOC 전달",
      "고객 상담 매뉴얼 및 FAQ 문서 보완 작성으로 신규 상담원 온보딩 시간 20% 단축"
    ],
    skillsUsed: ["VOC 수집", "고객 커뮤니케이션", "FAQ 가이드 작성", "문제 정의"]
  }
];

export const EDUCATION: EducationItem = {
  school: "한국대학교",
  major: "경영학과 졸업",
  period: "2018.03 ~ 2023.02",
  gpa: "3.6 / 4.5",
  status: "졸업"
};

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "서비스 기획 입문 과정 수료", issuer: "패스트캠퍼스/제로베이스", date: "2023.11", badgeIcon: "CheckCircle" },
  { name: "컴퓨터활용능력 2급", issuer: "대한상공회의소", date: "2022.08", badgeIcon: "Award" },
  { name: "SQL 개발자(SQLD)", issuer: "한국데이터산업진흥원", date: "2023.06", badgeIcon: "Database" }
];

export const SKILLS: SkillItem[] = [
  {
    id: "skill-1",
    title: "Service Planning",
    englishTitle: "서비스 기획 & IA",
    description: "기능 정의, 요구사항 정의서(PRD) 작성, 스토리보드 및 와이어프레임 화면 설계",
    icon: "Layout",
    methodologies: ["PRD 작성", "IA / 메뉴 구조도", "스토리보드", "와이어프레임", "유저 스토어 산출"],
    proficiencyLevel: 90
  },
  {
    id: "skill-2",
    title: "User Research",
    englishTitle: "사용자 조사 & VOC",
    description: "심층 인터뷰(IDI) 설계 및 운영, 정량 설문 조사 분석, 사용자 여정 지도(User Journey Map) 작성",
    icon: "Search",
    methodologies: ["심층 인터뷰(IDI)", "설문지 작성/통계", "VOC 분류", "페르소나 정의", "UT(사용성 테스트)"],
    proficiencyLevel: 88
  },
  {
    id: "skill-3",
    title: "PM & Collaboration",
    englishTitle: "프로젝트 관리",
    description: "WBS 기반 일정 관리, 디자인·개발 직군과의 원활한 요구사항 커뮤니케이션",
    icon: "Users",
    methodologies: ["WBS 작성", "애자일/스프린트", "이슈 트래킹", "커뮤니케이션", "리스크 관리"],
    proficiencyLevel: 85
  },
  {
    id: "skill-4",
    title: "Marketing & Growth",
    englishTitle: "마케팅 & 데이터",
    description: "SNS 콘텐츠 기획, 프로모션 캠페인 운영, 성과 데이터 모니터링 및 퍼널 최적화",
    icon: "Megaphone",
    methodologies: ["콘텐츠 기획", "퍼널 분석", "CTA 최적화", "A/B 테스트 기초", "성과 모니터링"],
    proficiencyLevel: 82
  }
];

export const TECH_TOOLS: TechTool[] = [
  { name: "Figma", category: "UI/UX & Wireframe", icon: "Figma", description: "와이어프레임, 와이어드 스토리보드 및 컴포넌트 설계" },
  { name: "Excel", category: "Data & VOC", icon: "FileSpreadsheet", description: "피벗 테이블, 수식 기반 설문 분석 및 CS VOC 분류" },
  { name: "PowerPoint", category: "Presentation", icon: "Presentation", description: "기획 발표 및 스토리보드, 제안서 작성" },
  { name: "Notion", category: "Documentation", icon: "FileText", description: "PRD 요구사항 명세서, WBS 일정표 및 회의록 공유" },
  { name: "Slack", category: "Communication", icon: "MessageSquare", description: "개발/디자인 팀원과의 스레드 중심 협업" },
  { name: "Trello", category: "Task Tracking", icon: "Kanban", description: "칸반 보드 기반 이행 상황 관리 및 스프린트 진행" },
  { name: "AI Tools", category: "Productivity", icon: "Bot", description: "Gemini, ChatGPT 활용 데이터 구조화 및 프롬프트 기획" },
  { name: "Workspace", category: "Office Suite", icon: "Briefcase", description: "Google Docs, Sheets, Drive 연동 문서 공동 편집" }
];

export const PRESET_AI_QUESTIONS = [
  "서달미 님의 핵심 기획 강점은 무엇인가요?",
  "AI 반려식물 프로젝트에서 요구사항(PRD)을 어떻게 도출했나요?",
  "사용자 조사를 진행할 때 서달미 기획자만의 노하우가 있나요?",
  "디자이너/개발자와 협업할 때 어떤 방식으로 소통하시나요?"
];
