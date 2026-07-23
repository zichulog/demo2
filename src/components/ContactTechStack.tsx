import React, { useState } from 'react';
import { PERSONAL_INFO, TECH_TOOLS } from '../data/portfolioData';
import { Mail, Link as LinkIcon, Copy, Check, Send, Sparkles, MessageSquare, Presentation, FileSpreadsheet, FileText, Kanban, Bot, Briefcase, Figma } from 'lucide-react';

export const ContactTechStack: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  const renderToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Figma': return <Figma className="w-8 h-8 text-[#ba1a1a]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-8 h-8 text-[#ba1a1a]" />;
      case 'Presentation': return <Presentation className="w-8 h-8 text-[#ba1a1a]" />;
      case 'FileText': return <FileText className="w-8 h-8 text-[#ba1a1a]" />;
      case 'MessageSquare': return <MessageSquare className="w-8 h-8 text-[#ba1a1a]" />;
      case 'Kanban': return <Kanban className="w-8 h-8 text-[#ba1a1a]" />;
      case 'Bot': return <Bot className="w-8 h-8 text-[#ba1a1a]" />;
      case 'Briefcase': return <Briefcase className="w-8 h-8 text-[#ba1a1a]" />;
      default: return <Briefcase className="w-8 h-8 text-[#ba1a1a]" />;
    }
  };

  return (
    <section className="py-24 bg-[#f7f9fb]" id="contact">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Contact Details & Direct Message Form Bento Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 md:p-10 bg-white rounded-[2rem] border border-[#eceef0] shadow-sm">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ba1a1a]/10 text-[#ba1a1a] rounded-full font-label-md text-xs font-bold uppercase tracking-wider mb-4 border border-[#ba1a1a]/20">
                Contact & Inquiry
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#041632] tracking-tight mb-4">
                Let's Connect.
              </h2>
              <p className="text-[#44474d] text-sm md:text-base leading-relaxed mb-6 break-keep">
                <span className="inline-block">데이터를 통해</span> <span className="inline-block">답을 찾는 즐거움을 아는 기획자입니다.</span><br />
                <span className="inline-block">함께 성장하고</span> <span className="inline-block">새로운 가치를 만들어갈</span> <span className="inline-block">기회를 기다립니다.</span>
              </p>

              {/* Email Accent Card inside Bento Container */}
              <div className="p-6 rounded-2xl bg-[#041632] text-white flex flex-wrap items-center justify-between gap-4 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ba1a1a]/20 rounded-full blur-xl pointer-events-none"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ba1a1a] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-[#8393b5] uppercase tracking-wider">Direct Email</p>
                    <p className="text-base font-black text-white">{PERSONAL_INFO.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 bg-white text-[#041632] rounded-xl text-xs font-bold hover:bg-[#ba1a1a] hover:text-white transition-all flex items-center gap-1.5 shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>복사 완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>복사</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Message Form Bento Box */}
            <div className="p-8 rounded-[2rem] bg-white border border-[#eceef0] shadow-sm space-y-4">
              <h3 className="text-base font-extrabold text-[#041632] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ba1a1a]" />
                <span>채용 문의 및 메시지 보내기</span>
              </h3>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-center space-y-2 animate-in fade-in">
                  <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="font-bold text-base">메시지가 성공적으로 전달되었습니다!</p>
                  <p className="text-xs text-emerald-700">확인 후 등록하신 이메일로 빠르게 답변 드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-[#44474d] block mb-1">성함 / 담당자명 *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="홍길동 팀장"
                        className="w-full px-4 py-2.5 bg-[#f2f4f6] rounded-xl text-xs border border-[#c5c6ce]/30 focus:outline-none focus:border-[#ba1a1a]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#44474d] block mb-1">답변받으실 이메일 *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-2.5 bg-[#f2f4f6] rounded-xl text-xs border border-[#c5c6ce]/30 focus:outline-none focus:border-[#ba1a1a]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#44474d] block mb-1">소속 회사 / 기업명</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="주식회사 넥스트이노베이션"
                      className="w-full px-4 py-2.5 bg-[#f2f4f6] rounded-xl text-xs border border-[#c5c6ce]/30 focus:outline-none focus:border-[#ba1a1a]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#44474d] block mb-1">문의 내용 *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="서비스 기획 포지션 관련 면접/채용 문의 제안드립니다."
                      className="w-full px-4 py-2.5 bg-[#f2f4f6] rounded-xl text-xs border border-[#c5c6ce]/30 focus:outline-none focus:border-[#ba1a1a] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#041632] text-white font-bold rounded-xl text-xs hover:bg-[#041632]/90 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-[#ba1a1a]" />
                    <span>메시지 전송하기</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Tech Stack & Tools Bento Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 md:p-10 bg-white rounded-[2rem] border border-[#eceef0] shadow-sm space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#041632]/5 text-[#041632] rounded-full font-label-md text-xs font-bold uppercase tracking-wider mb-4 border border-[#041632]/10">
                  Tools & Technologies
                </div>
                <h2 className="text-3xl font-black text-[#041632] tracking-tight mb-2">
                  Tech Stack
                </h2>
                <p className="text-[#44474d] text-xs md:text-sm leading-relaxed">
                  와이어프레임 설계부터 데이터 분석, 팀 간 커뮤니케이션까지 실무에 유연하게 활용하는 도구들입니다.
                </p>
              </div>

              {/* Tech Stack 8 Micro Bento Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TECH_TOOLS.map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f2f4f6] border border-[#c5c6ce]/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white hover:border-[#ba1a1a]/40 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-2 group-hover:bg-[#ba1a1a]/10 transition-colors">
                      {renderToolIcon(tool.icon)}
                    </div>
                    <span className="text-xs font-black text-[#041632] block mb-0.5">
                      {tool.name}
                    </span>
                    <span className="text-[10px] text-[#75777e] font-medium leading-tight line-clamp-1">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Practical Tool Description Summary */}
              <div className="p-5 rounded-2xl bg-[#f2f4f6] border border-[#c5c6ce]/20 space-y-2">
                <p className="text-xs font-black text-[#041632] uppercase tracking-wider">협업 및 기획 도구 활용 노하우</p>
                <ul className="text-xs text-[#44474d] space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] mt-1.5 shrink-0"></span>
                    <span><strong>Figma:</strong> 유저 스토리 기반 스마트 컴포넌트 와이어프레임 및 프로토타입 제작</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] mt-1.5 shrink-0"></span>
                    <span><strong>Notion / Excel:</strong> PRD 명세서 작성, 피벗 테이블을 활용한 VOC 정량 데이터 분류</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] mt-1.5 shrink-0"></span>
                    <span><strong>Trello / Slack:</strong> WBS 마일스톤 관리 및 디자인·개발 스레드 요청사항 정리</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
