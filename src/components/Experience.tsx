import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, Building2, Briefcase, ChevronRight, Database, FileSpreadsheet } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('timeline');

  return (
    <section className="py-24 bg-[#f7f9fb] border-t border-[#c5c6ce]/20" id="experience">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#041632]/5 text-[#041632] rounded-full font-label-md text-xs font-bold uppercase tracking-wider mb-4 border border-[#041632]/10">
              Career & Education History
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-black text-[#041632] tracking-tight mb-4">
              Experience
            </h2>
            <p className="text-[#44474d] text-base md:text-lg leading-relaxed break-keep">
              <span className="inline-block">체계적인 교육과</span> <span className="inline-block">실전 실무 경험을 통해</span> <span className="inline-block">데이터 중심의 기획 역량을 쌓아왔습니다.</span>
            </p>
          </div>

          {/* Tab Filter Toggle */}
          <div className="flex bg-[#eceef0] p-1.5 rounded-full border border-[#c5c6ce]/30">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-5 py-2 rounded-full font-label-md text-sm transition-all whitespace-nowrap ${
                activeTab === 'timeline'
                  ? 'bg-[#041632] text-white shadow-sm'
                  : 'text-[#44474d] hover:text-[#041632]'
              }`}
            >
              경력 타임라인
            </button>
            <button
              onClick={() => setActiveTab('voc')}
              className={`px-5 py-2 rounded-full font-label-md text-sm transition-all whitespace-nowrap ${
                activeTab === 'voc'
                  ? 'bg-[#041632] text-white shadow-sm'
                  : 'text-[#44474d] hover:text-[#041632]'
              }`}
            >
              VOC 분석 사례
            </button>
          </div>
        </div>

        {/* Content Layout Grid in Bento Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Career Timeline Bento Box */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] border border-[#eceef0] p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-black text-[#041632] uppercase tracking-widest mb-6 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#ba1a1a]" />
                  <span>Work History & Accomplishments</span>
                </span>
                <span className="text-[11px] font-bold text-[#8393b5]">2021 ~ Present</span>
              </div>

              {activeTab === 'timeline' ? (
                <div className="space-y-8">
                  {EXPERIENCES.map((exp, index) => (
                    <div
                      key={exp.id}
                      className="group relative pl-8 border-l-2 border-[#eceef0] hover:border-[#ba1a1a] transition-colors"
                    >
                      {/* Node Bullet */}
                      <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 ${
                        index === 0 ? 'border-[#ba1a1a]' : 'border-[#75777e]'
                      } group-hover:scale-125 transition-transform`}></div>

                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                        <h3 className="text-lg md:text-xl font-black text-[#041632] group-hover:text-[#ba1a1a] transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-[#ba1a1a] font-mono text-xs font-bold bg-[#ba1a1a]/10 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-[#041632]/80 font-bold text-xs md:text-sm mb-3 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#ba1a1a]" />
                        <span>{exp.company}</span>
                      </p>

                      <ul className="text-[#44474d] text-xs md:text-sm space-y-2 mb-4">
                        {exp.bulletPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] mt-1.5 shrink-0"></span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skillsUsed.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 bg-[#f2f4f6] text-[#041632] rounded-md text-[11px] font-bold border border-[#c5c6ce]/30"
                          >
                            #{skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* VOC Case Highlights Tab */
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#f2f4f6] border border-[#c5c6ce]/20">
                    <p className="text-xs font-bold text-[#ba1a1a] mb-1">VOC 유형 1. 결제 취소 UI 모호성</p>
                    <p className="text-xs md:text-sm text-[#191c1e] font-medium leading-relaxed">
                      고객들이 환불 신청 후 '취소 완료' 문구를 오인해 일중 복수 문의 발송 -&gt; 마이페이지 내 실시간 환불 진행단계 상태 바(Progress Stepper) 도입 제안
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f2f4f6] border border-[#c5c6ce]/20">
                    <p className="text-xs font-bold text-[#ba1a1a] mb-1">VOC 유형 2. 자주 묻는 질문 반복</p>
                    <p className="text-xs md:text-sm text-[#191c1e] font-medium leading-relaxed">
                      인증 및 비밀번호 찾기 관련 전화 상담 비중 40% 이상 차지 -&gt; 챗봇 가이드 메뉴 전면 배치 및 FAQ 3단계 검색어 필터 구조화로 온보딩 시간 20% 단축
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Education & Badges Column in Bento Style */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Bento Box */}
            <div className="p-8 bg-white rounded-[2rem] border border-[#eceef0] shadow-sm relative overflow-hidden group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#041632] text-white">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black text-[#041632] uppercase tracking-widest">
                    Education
                  </h4>
                </div>
                <span className="text-xs font-mono text-[#75777e] font-bold">{EDUCATION.period}</span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-black text-[#041632] mb-1">
                  {EDUCATION.school}
                </h3>
                <p className="text-[#041632]/80 font-bold text-sm">
                  {EDUCATION.major}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ba1a1a]/10 text-[#ba1a1a] font-black rounded-xl text-sm border border-[#ba1a1a]/20">
                <Award className="w-4 h-4" />
                <span>학점 {EDUCATION.gpa}</span>
              </div>
            </div>

            {/* Badges and Certifications Bento Box */}
            <div className="p-8 bg-white rounded-[2rem] border border-[#eceef0] shadow-sm">
              <h4 className="text-xs font-black text-[#041632] uppercase tracking-widest mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#ba1a1a]" />
                <span>Certifications & Qualifications</span>
              </h4>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 bg-[#f2f4f6] border border-[#c5c6ce]/20 rounded-2xl text-[#041632] flex items-center justify-between shadow-xs hover:border-[#ba1a1a]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#ba1a1a]/10 text-[#ba1a1a]">
                        {cert.badgeIcon === 'Database' ? (
                          <Database className="w-4 h-4" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#041632]">{cert.name}</p>
                        {cert.issuer && (
                          <p className="text-[10px] text-[#75777e]">{cert.issuer}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#75777e] font-bold">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
