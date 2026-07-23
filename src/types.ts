export interface Project {
  id: string;
  title: string;
  category: 'AI/서비스 기획' | '소상공인/O2O' | '마케팅/콘텐츠';
  roleBadge: string;
  period: string;
  teamSize: string;
  summary: string;
  iconName: string;
  iconColor: string;
  bgColor: string;
  stats: { label: string; value: string; icon: string }[];
  achievement: string;
  
  // Deep dive case study details
  caseStudy: {
    problemStatement: string;
    targetUser: string;
    userResearch: {
      interviewsCount?: number;
      surveysCount?: number;
      keyQuotes: string[];
      findings: { title: string; detail: string }[];
    };
    prdHighlights: {
      feature: string;
      userStory: string;
      priority: 'P0' | 'P1' | 'P2';
      solution: string;
    }[];
    wireframeSteps?: string[];
    businessResults: string[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  bulletPoints: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  school: string;
  major: string;
  period: string;
  gpa: string;
  status: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  date?: string;
  badgeIcon: string;
}

export interface SkillItem {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  icon: string;
  methodologies: string[];
  proficiencyLevel: number; // percentage
}

export interface TechTool {
  name: string;
  category: string;
  icon: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
