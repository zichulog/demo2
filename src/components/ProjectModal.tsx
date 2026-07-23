import React from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Users, FileText, Target, AlertCircle, Quote, Sparkles, Layers, Award, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-[#c5c6ce]/30 max-h-[90vh] flex flex-col overflow-hidden relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner */}
        <div className="p-6 md:p-8 bg-[#041632] text-white flex justify-between items-start relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ba1a1a]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 pr-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#ba1a1a] text-white text-xs font-black rounded-full">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-white/10 text-[#b7c7eb] text-xs font-mono font-bold rounded-full">
                {project.period}
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full">
                {project.roleBadge}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              {project.title}
            </h2>
            <p className="text-[#8393b5] text-sm md:text-base max-w-2xl">
              {project.summary}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors shrink-0 z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-10 text-[#191c1e]">
          {/* Section 1: Problem Definition & Target User */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#f2f4f6] border border-[#c5c6ce]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#ba1a1a] font-bold text-sm uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-sm md:text-base font-medium leading-relaxed text-[#041632]">
                {caseStudy.problemStatement}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1b2b48]/5 border border-[#041632]/10 space-y-3">
              <div className="flex items-center gap-2 text-[#041632] font-bold text-sm uppercase tracking-wider">
                <Target className="w-4 h-4 text-[#ba1a1a]" />
                <span>Target Persona</span>
              </div>
              <p className="text-sm md:text-base font-medium leading-relaxed text-[#041632]">
                {caseStudy.targetUser}
              </p>
            </div>
          </div>

          {/* Section 2: User Research Insights */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-[#041632] flex items-center gap-2">
                <Users className="w-5 h-5 text-[#ba1a1a]" />
                <span>User Research & VOC Analysis</span>
              </h3>
              <span className="text-xs font-bold text-[#75777e] bg-[#eceef0] px-3 py-1 rounded-full">
                {caseStudy.userResearch.interviewsCount ? `IDI 인터뷰 ${caseStudy.userResearch.interviewsCount}명` : ''} 
                {caseStudy.userResearch.surveysCount ? ` | 설문 ${caseStudy.userResearch.surveysCount}명` : ''}
              </span>
            </div>

            {/* Key Quotes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.userResearch.keyQuotes.map((quote, qIdx) => (
                <div key={qIdx} className="p-4 rounded-2xl bg-[#eceef0]/60 border border-[#c5c6ce]/30 relative flex flex-col justify-between">
                  <Quote className="w-6 h-6 text-[#ba1a1a]/30 mb-2" />
                  <p className="text-xs md:text-sm text-[#44474d] italic font-medium leading-relaxed mb-2">
                    {quote}
                  </p>
                  <span className="text-[11px] font-bold text-[#041632] block text-right">- 타겟 사용자 목소리</span>
                </div>
              ))}
            </div>

            {/* Research Findings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {caseStudy.userResearch.findings.map((f, fIdx) => (
                <div key={fIdx} className="p-4 rounded-xl bg-white border border-[#c5c6ce]/30 shadow-xs">
                  <p className="text-sm font-extrabold text-[#041632] mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#ba1a1a]" />
                    <span>{f.title}</span>
                  </p>
                  <p className="text-xs text-[#44474d] leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: PRD & Priorities Matrix Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-[#041632] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#ba1a1a]" />
                <span>PRD 요구사항 및 기능 우선순위 (Priority Matrix)</span>
              </h3>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#c5c6ce]/40 shadow-xs">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#041632] text-white text-xs uppercase font-extrabold">
                    <th className="p-3.5 w-16 text-center">우선순위</th>
                    <th className="p-3.5 w-1/4">핵심 기능 명칭</th>
                    <th className="p-3.5">User Story & 해결 방안</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c5c6ce]/30 text-xs md:text-sm bg-white">
                  {caseStudy.prdHighlights.map((prd, pIdx) => (
                    <tr key={pIdx} className="hover:bg-[#f2f4f6]/60 transition-colors">
                      <td className="p-3.5 text-center">
                        <span className={`px-2.5 py-1 rounded-md text-xs font-black ${
                          prd.priority === 'P0' 
                            ? 'bg-[#ba1a1a] text-white' 
                            : 'bg-[#1b2b48] text-white'
                        }`}>
                          {prd.priority}
                        </span>
                      </td>
                      <td className="p-3.5 font-bold text-[#041632]">
                        {prd.feature}
                      </td>
                      <td className="p-3.5 space-y-1">
                        <p className="text-[#44474d] italic">"{prd.userStory}"</p>
                        <p className="font-semibold text-[#041632] flex items-center gap-1">
                          <ArrowRight className="w-3.5 h-3.5 text-[#ba1a1a] shrink-0" />
                          <span>{prd.solution}</span>
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Wireframe & Information Flow */}
          {caseStudy.wireframeSteps && (
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-[#041632] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#ba1a1a]" />
                <span>Information Architecture & Wireframe Flow</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {caseStudy.wireframeSteps.map((step, sIdx) => (
                  <div key={sIdx} className="p-4 rounded-2xl bg-[#f2f4f6] border border-[#c5c6ce]/30 flex flex-col justify-between">
                    <span className="text-[10px] font-black text-[#ba1a1a] uppercase mb-2">Step 0{sIdx + 1}</span>
                    <p className="text-xs md:text-sm font-bold text-[#041632] leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 5: Business Impact & Results */}
          <div className="p-6 rounded-2xl bg-[#041632] text-white space-y-4">
            <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#ba1a1a]" />
              <span>Business Results & Key Learnings</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {caseStudy.businessResults.map((res, rIdx) => (
                <div key={rIdx} className="p-4 rounded-xl bg-white/10 border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ba1a1a] shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm text-white font-medium leading-relaxed">{res}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 bg-[#f2f4f6] border-t border-[#c5c6ce]/30 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#041632] text-white font-bold rounded-full text-sm hover:bg-[#041632]/90 transition-all shadow-sm"
          >
            닫기 (Close Case Study)
          </button>
        </div>
      </div>
    </div>
  );
};
