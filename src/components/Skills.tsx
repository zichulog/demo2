import React from 'react';
import { SKILLS } from '../data/portfolioData';
import { Layout, Search, Users, Megaphone, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-8 h-8 text-[#ba1a1a]" />;
      case 'Search': return <Search className="w-8 h-8 text-[#ba1a1a]" />;
      case 'Users': return <Users className="w-8 h-8 text-[#ba1a1a]" />;
      case 'Megaphone': return <Megaphone className="w-8 h-8 text-[#ba1a1a]" />;
      default: return <Layout className="w-8 h-8 text-[#ba1a1a]" />;
    }
  };

  return (
    <section className="py-24 bg-[#041632] text-white" id="skills">
      <div className="max-w-container-max mx-auto px-gutter text-center">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-[#b7c7eb] rounded-full font-label-md text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            Competencies & Methodologies
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-black text-white tracking-tight mb-4">
            Core Expertise
          </h2>
          <p className="text-[#8393b5] text-base md:text-lg leading-relaxed font-normal break-keep">
            <span className="inline-block">기획의 기본부터</span> <span className="inline-block">협업 도구 활용까지,</span> <span className="inline-block">완성도 높은 결과물을 위해</span> <span className="inline-block">끊임없이 학습합니다.</span>
          </p>
        </div>

        {/* Skill Cards Grid in Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <div
              key={skill.id}
              className="p-8 bg-[#1b2b48] rounded-[2rem] text-left border border-white/10 hover:border-[#ba1a1a] transition-all hover:-translate-y-1 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#ba1a1a]/15 border border-[#ba1a1a]/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {renderSkillIcon(skill.icon)}
                </div>

                <div className="mb-3">
                  <span className="text-[11px] font-mono font-bold text-[#b7c7eb] block uppercase tracking-wider">
                    {skill.englishTitle}
                  </span>
                  <h4 className="text-xl font-extrabold text-white">
                    {skill.title}
                  </h4>
                </div>

                <p className="text-[#8393b5] text-xs md:text-sm leading-relaxed mb-6 font-normal">
                  {skill.description}
                </p>
              </div>

              {/* Methodologies Tags */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <p className="text-[10px] font-bold text-[#b7c7eb] uppercase tracking-wider">주요 수행 방법론</p>
                <div className="flex flex-wrap gap-1.5">
                  {skill.methodologies.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/5 text-white rounded-lg text-xs font-medium border border-white/10"
                    >
                      <Check className="w-3 h-3 text-[#ba1a1a]" />
                      <span>{m}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
