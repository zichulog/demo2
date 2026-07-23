import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, PROJECTS } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, FileCheck } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-[#c5c6ce]/30 max-h-[92vh] flex flex-col overflow-hidden relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 md:p-6 bg-[#041632] text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#ba1a1a]" />
            <span className="font-bold text-sm md:text-base">서dalmi 기획자 이력서 (Resume)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold transition-all flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '링크 복사됨' : '이력서 링크'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#ba1a1a] text-white rounded-full text-xs font-bold hover:bg-[#ba1a1a]/90 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>인쇄 / PDF 저장</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-8 md:p-12 overflow-y-auto space-y-8 text-[#191c1e] bg-white print:p-0">
          
          {/* Resume Header */}
          <div className="border-b-2 border-[#041632] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-[#041632] mb-1">
                {PERSONAL_INFO.name} <span className="text-lg font-bold text-[#75777e]">({PERSONAL_INFO.englishName})</span>
              </h1>
              <p className="text-lg font-bold text-[#ba1a1a]">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="text-xs md:text-sm text-[#44474d] space-y-1 font-mono">
              <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#ba1a1a]" /> {PERSONAL_INFO.email}</p>
              <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#ba1a1a]" /> {PERSONAL_INFO.phone}</p>
              <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#ba1a1a]" /> {PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* Section: Profile Summary */}
          <div>
            <h2 className="text-lg font-extrabold text-[#041632] uppercase tracking-wider mb-2 flex items-center gap-2 border-b border-[#c5c6ce]/40 pb-1">
              <span>기획자 소개 & 핵심 역량</span>
            </h2>
            <p className="text-sm text-[#44474d] leading-relaxed">
              인터뷰와 설문조사를 통해 사용자의 페인 포인트를 정밀하게 포착하고, 이를 정량적 데이터와 요구사항 정의서(PRD)로 구조화하는 서비스 기획자입니다. 스타트업 운영보조 및 고객센터 현장 CS 경험을 통해 VOC 수집부터 기능 우선순위 수립, UI/UX 스토리보드 설계, WBS 일정 관리까지 서비스 수명 주기 전반에 대한 이해도를 갖추고 있습니다.
            </p>
          </div>

          {/* Section: Experience History */}
          <div>
            <h2 className="text-lg font-extrabold text-[#041632] uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-[#c5c6ce]/40 pb-1">
              <Briefcase className="w-5 h-5 text-[#ba1a1a]" />
              <span>경력 사항 (Work History)</span>
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-baseline font-bold">
                    <span className="text-base text-[#041632]">{exp.role} | {exp.company}</span>
                    <span className="text-xs text-[#ba1a1a] font-mono">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs md:text-sm text-[#44474d] space-y-1">
                    {exp.bulletPoints.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Featured Projects */}
          <div>
            <h2 className="text-lg font-extrabold text-[#041632] uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-[#c5c6ce]/40 pb-1">
              <Award className="w-5 h-5 text-[#ba1a1a]" />
              <span>주요 프로젝트 케이스 스터디</span>
            </h2>

            <div className="space-y-4 text-xs md:text-sm">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-[#f2f4f6] border border-[#c5c6ce]/30 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold text-[#041632] text-sm md:text-base">{proj.title} ({proj.roleBadge})</span>
                    <span className="text-xs text-[#75777e] font-mono">{proj.period}</span>
                  </div>
                  <p className="text-[#44474d]">{proj.summary}</p>
                  <p className="font-bold text-[#ba1a1a] text-xs">★ 주요 성과: {proj.achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-extrabold text-[#041632] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-[#c5c6ce]/40 pb-1">
                <GraduationCap className="w-5 h-5 text-[#ba1a1a]" />
                <span>학력 (Education)</span>
              </h2>
              <p className="text-sm font-bold text-[#041632]">{EDUCATION.school} {EDUCATION.major}</p>
              <p className="text-xs text-[#75777e] font-mono">{EDUCATION.period} | 학점 {EDUCATION.gpa}</p>
            </div>

            <div>
              <h2 className="text-lg font-extrabold text-[#041632] uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-[#c5c6ce]/40 pb-1">
                <Award className="w-5 h-5 text-[#ba1a1a]" />
                <span>자격증 및 교육</span>
              </h2>
              <ul className="text-xs md:text-sm text-[#44474d] space-y-1">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx}>• {cert.name} ({cert.issuer}, {cert.date})</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f2f4f6] border-t border-[#c5c6ce]/30 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#041632] text-white font-bold rounded-full text-xs hover:bg-[#041632]/90 transition-all"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
