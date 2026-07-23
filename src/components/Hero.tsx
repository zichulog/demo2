import React from 'react';
import { Search, ArrowRight, Download, Sprout, Calendar, BarChart2, Users, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAiAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAiAssistant }) => {
  return (
    <header className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[#f7f9fb]">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        
        {/* Bento Grid Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-6">
          
          {/* Main Profile & Headline Box */}
          <div className="md:col-span-8 bg-white border border-[#eceef0] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#ba1a1a]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ba1a1a]/10 text-[#ba1a1a] border border-[#ba1a1a]/20 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                <span>Available for New Projects & Planning Roles</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#041632] leading-[1.15] tracking-tight mb-6 break-keep">
                <span className="inline-block">사용자 조사로 기획하는</span><br />
                <span className="inline-block">서비스 기획자,</span> <span className="text-[#ba1a1a] underline decoration-[#ba1a1a]/30 decoration-wavy underline-offset-8 whitespace-nowrap">{PERSONAL_INFO.name}</span>
              </h1>

              <p className="text-base md:text-lg text-[#44474d] max-w-2xl leading-relaxed mb-8 break-keep">
                <span className="inline-block">인터뷰와 설문 데이터를 근거로</span> <span className="inline-block">기능을 정의하고 검증합니다.</span><br className="hidden sm:block" />
                <span className="inline-block">사용자의 목소리에서 시작해</span> <span className="inline-block">비즈니스 가치를 창출하는</span> <span className="inline-block">해결책을 제시합니다.</span>
              </p>
            </div>

            {/* Action Buttons inside Hero Bento Card */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#eceef0]">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#041632] text-white font-bold rounded-full hover:bg-[#041632]/90 transition-all shadow-md flex items-center gap-2 text-sm group"
              >
                <span>프로젝트 보기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3 bg-[#f2f4f6] text-[#041632] font-bold rounded-full hover:bg-[#eceef0] transition-all flex items-center gap-2 text-sm border border-[#c5c6ce]/30"
              >
                <Download className="w-4 h-4 text-[#ba1a1a]" />
                <span>이력서 (Resume)</span>
              </button>

              <button
                onClick={onOpenAiAssistant}
                className="px-6 py-3 bg-[#ba1a1a]/10 text-[#ba1a1a] font-bold rounded-full hover:bg-[#ba1a1a]/20 transition-all flex items-center gap-2 text-sm border border-[#ba1a1a]/20"
              >
                <Search className="w-4 h-4" />
                <span>AI 면접 Q&A</span>
              </button>
            </div>
          </div>

          {/* Featured Impact Box */}
          <div className="md:col-span-4 bg-[#041632] rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ba1a1a]/20 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="text-xs font-black tracking-widest text-[#8393b5] uppercase mb-6 flex items-center gap-1.5">
                <BarChart2 className="w-4 h-4 text-[#ba1a1a]" />
                <span>Featured Impact</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-5xl lg:text-6xl font-black text-[#ba1a1a] mb-1 tracking-tight">+34%</div>
                  <p className="text-base font-bold text-white">콘텐츠 조회수 증가</p>
                  <p className="text-xs text-[#8393b5]">청년 취업 퍼널 타겟팅 개편</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-3xl font-black text-[#b7c7eb] mb-0.5">+68%</div>
                  <p className="text-xs text-[#8393b5]">콘텐츠 저장수 증가 달성</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-[#8393b5] font-mono flex items-center justify-between">
              <span>2023 Startup Internship</span>
              <span className="text-[#ba1a1a] font-bold">Key Metric</span>
            </div>
          </div>

        </div>

        {/* Bento Grid Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Tech Stack Mini-Grid Bento Box */}
          <div className="md:col-span-4 bg-white border border-[#eceef0] rounded-[2rem] p-6 shadow-sm flex flex-col justify-between">
            <div className="text-xs font-black text-[#041632] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
              <span>Essential Tooling</span>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="p-3 bg-[#f2f4f6] rounded-2xl flex flex-col items-center justify-center font-black text-[#041632] text-xs hover:bg-[#ba1a1a]/10 hover:text-[#ba1a1a] transition-colors">
                <span>FIG</span>
                <span className="text-[9px] text-[#75777e] font-normal">Figma</span>
              </div>
              <div className="p-3 bg-[#f2f4f6] rounded-2xl flex flex-col items-center justify-center font-black text-[#041632] text-xs hover:bg-[#ba1a1a]/10 hover:text-[#ba1a1a] transition-colors">
                <span>NOT</span>
                <span className="text-[9px] text-[#75777e] font-normal">Notion</span>
              </div>
              <div className="p-3 bg-[#f2f4f6] rounded-2xl flex flex-col items-center justify-center font-black text-[#041632] text-xs hover:bg-[#ba1a1a]/10 hover:text-[#ba1a1a] transition-colors">
                <span>EXC</span>
                <span className="text-[9px] text-[#75777e] font-normal">Excel</span>
              </div>
              <div className="p-3 bg-[#f2f4f6] rounded-2xl flex flex-col items-center justify-center font-black text-[#041632] text-xs hover:bg-[#ba1a1a]/10 hover:text-[#ba1a1a] transition-colors">
                <span>SLA</span>
                <span className="text-[9px] text-[#75777e] font-normal">Slack</span>
              </div>
            </div>

            <p className="text-xs text-[#75777e] font-medium leading-relaxed">
              와이어프레임, PRD 문서화, 데이터 분석 및 아자일 협업 도구 숙련
            </p>
          </div>

          {/* Quick Metrics Ribbon Bento Card */}
          <div className="md:col-span-8 bg-white border border-[#eceef0] rounded-[2rem] p-6 shadow-sm flex flex-col justify-between">
            <div className="text-xs font-black text-[#041632] uppercase tracking-widest mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ba1a1a]" />
                <span>Key Planning Highlights</span>
              </span>
              <span className="text-[11px] font-bold text-[#ba1a1a] bg-[#ba1a1a]/10 px-3 py-1 rounded-full">
                4 Major Milestones
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-[#f2f4f6] border border-[#c5c6ce]/20">
                <p className="text-[11px] text-[#75777e] font-bold">경진대회 수상</p>
                <p className="text-sm font-black text-[#041632] mt-0.5">3위 장려상</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f2f4f6] border border-[#c5c6ce]/20">
                <p className="text-[11px] text-[#75777e] font-bold">사용자 조사</p>
                <p className="text-sm font-black text-[#041632] mt-0.5">인터뷰 80+명</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f2f4f6] border border-[#c5c6ce]/20">
                <p className="text-[11px] text-[#75777e] font-bold">퍼널 개선</p>
                <p className="text-sm font-black text-[#041632] mt-0.5">저장수 +68%</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f2f4f6] border border-[#c5c6ce]/20">
                <p className="text-[11px] text-[#75777e] font-bold">예약 뎁스</p>
                <p className="text-sm font-black text-[#041632] mt-0.5">70% 절감</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
