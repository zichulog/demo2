import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION, SKILLS, CERTIFICATIONS } from './src/data/portfolioData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Seo Dalmi Portfolio API' });
  });

  // AI Recruiter Assistant endpoint
  app.post('/api/ai-chat', async (req, res) => {
    try {
      const { question } = req.body;
      if (!question || typeof question !== 'string') {
        res.status(400).json({ error: 'Question is required' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        // Fallback response generator if GEMINI_API_KEY is missing
        const fallbackAnswer = generateFallbackAnswer(question);
        res.json({ text: fallbackAnswer, source: 'preset' });
        return;
      }

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `
You are the AI Assistant for Seo Dalmi (서달미), a Service Planner / Product Manager candidate.
Answer hiring managers and recruiters warmly, professionally, and accurately in Korean based on the portfolio facts below:

Candidate Summary:
Name: ${PERSONAL_INFO.name} (${PERSONAL_INFO.englishName})
Title: ${PERSONAL_INFO.title}
Bio: ${PERSONAL_INFO.bio}
Education: ${EDUCATION.school} ${EDUCATION.major} (${EDUCATION.period}, 학점: ${EDUCATION.gpa})
Email: ${PERSONAL_INFO.email}

Key Career Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.bulletPoints.join(', ')}`).join('\n')}

Key Projects:
${PROJECTS.map(p => `- ${p.title} (${p.roleBadge}, ${p.period}): ${p.summary} | 성과: ${p.achievement}`).join('\n')}

Core Skills:
${SKILLS.map(s => `- ${s.title} (${s.englishTitle}): ${s.description}`).join('\n')}

Certifications:
${CERTIFICATIONS.map(c => `- ${c.name} (${c.issuer})`).join('\n')}

Rules:
1. Always reply in clear, professional Korean (존댓말).
2. Maintain a friendly, clear, and logical tone suitable for a data-driven product manager.
3. Highlight her strong points in user research (IDI interviews, survey analysis), PRD writing, VOC categorization, and cross-functional communication with developers and designers.
4. Keep the response concise, scannable (2-4 bullet points or short paragraphs).

User Question: "${question}"
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      const responseText = response.text || '죄송합니다. 답변을 생성하지 못했습니다.';
      res.json({ text: responseText, source: 'gemini' });
    } catch (err: any) {
      console.error('Error generating AI response:', err);
      // On error, fallback gracefully
      const fallbackAnswer = generateFallbackAnswer(req.body?.question || '');
      res.json({ text: fallbackAnswer, source: 'fallback' });
    }
  });

  // Helper for smart offline fallback responses
  function generateFallbackAnswer(q: string): string {
    const query = q.toLowerCase();
    if (query.includes('강점') || query.includes('장점') || query.includes('소개')) {
      return `서달미 기획자의 가장 큰 강점은 **'데이터와 사용자 목소리(VOC)에 기반한 직관적 정당화'**입니다.

• **사용자 조사 역량**: 심층 인터뷰(8명)와 설문 데이터(30+명) 분석을 통해 모호한 사용자의 페인 포인트를 정밀하게 포착합니다.
• **실용적인 PRD 작성**: P0/P1/P2 우선순위 구분과 예외 처리 케이스까지 명확히 정의하여 개발/디자인 팀과의 리워크를 최소화합니다.
• **스타트업 & 고객센터 현장 경험**: CS 현장에서 직접 500+건의 VOC를 다뤄본 경험으로, 실제 사용자가 겪는 진짜 불편을 빠르게 해결합니다.`;
    }
    if (query.includes('반려식물') || query.includes('식물') || query.includes('ai')) {
      return `**AI 반려식물 관리 서비스 기획 프로젝트 주요 내용**:

• **문제 정의**: 초보 식물 집사의 68%가 물주기 타이밍을 놓쳐 식물을 고사시키는 문제를 발견했습니다.
• **해결책**: 기상청 날씨 API와 실내 환경 데이터를 연동한 보정 푸시 알림 및 카메라 기반 잎 진단 모듈을 기획했습니다.
• **주요 성과**: 스타트업 경진대회 3위(장려상) 수상 및 사용성 테스트(UT)에서 물주기 기억 정확도 92% 향상을 검증했습니다.`;
    }
    if (query.includes('소상공인') || query.includes('예약')) {
      return `**동네 소상공인 예약 서비스 프로젝트 주요 내용**:

• **문제 정의**: 전화 문의로 작업 흐름이 끊기는 1인 점주와 예약 뎁스가 복잡해 이탈하는 고객의 페인 포인트를 해결했습니다.
• **해결책**: 예약 과정을 3단계로 70% 단축하고, 점주용 화면을 3-터치 마감 구조로 극도로 단순화했습니다.
• **성과**: 교내 기획 발표 2위 및 전공 A+ 학점 취득, 테스트 매장 적용 시 전화 문의 45% 감축 효과를 확인했습니다.`;
    }
    if (query.includes('소통') || query.includes('협업') || query.includes('개발자') || query.includes('디자이너')) {
      return `**디자이너 및 개발자와의 협업 방식**:

• **개발자 소통**: 단순히 화면만 전달하는 것이 아니라 '유저 스토리', '예외 처리 조건', '데이터 입출력 범위'를 명시한 PRD를 공유하여 개발 비용을 절감합니다.
• **디자이너 소통**: Figma를 활용해 와이어프레임 단계부터 유저 여정(User Journey)을 공유하고, 디자인 가이드라인 준수 여부를 상호 검토합니다.
• **일정 관리**: WBS 및 Trello/Slack 스레드를 기반으로 매일 미니 샌드위치 체크업을 진행하여 리스크를 사전 관리합니다.`;
    }
    return `안녕하세요! 서달미 서비스 기획자는 **사용자 조사(인터뷰·설문)와 VOC 데이터 분석을 바탕으로 구체적인 PRD 및 와이어프레임을 기획하는 PM**입니다.

• **대표 프로젝트**: AI 반려식물 관리 서비스 (경진대회 3위), 동네 소상공인 3단계 예약 시스템 (발표 2위/A+학점)
• **실무 경력**: 스타트업 운영보조 인턴 (지표 관리 및 VOC 분석), 고객센터 상담 (VOC 수집 및 FAQ 개편)

궁금하신 프로젝트나 역량에 대해 추가로 질문해 주세요!`;
  }

  // Vite development vs production static setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
